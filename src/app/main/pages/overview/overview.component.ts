import { Component, OnDestroy, OnInit } from '@angular/core';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { TranslateService } from '@ngx-translate/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { CoreMediaService } from '@core/services/media.service';
import { Router } from "@angular/router";
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo } from 'app/auth/helpers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  public coreConfig: any;
  private _unsubscribeAll: Subject<any>;

  mfsBalance = 0;
  daiBalance = 0;
  eqnBalance = 0;
  qenBalance = 0;
  qreBalance = 0;
  chipsBalance = 0;

  desktopBreakpoint = 760;
  isDesktop = false;

  isOpenMiniGameModal = false;
  isOpenGameHelpModal = false;

  lists = [];
  nftChips = undefined;
  isLoading = false;
  lastActiveLevelNumber = undefined;

  readyDevices = 0;
  totalDevices = 88;

  timerId = null;
  timer = {
    hours: '00',
    minutes: '00',
    seconds: '00',
  }

  HOUR_IN_MS = 1000 * 60 * 60;
  MINUTE_IN_MS = 1000 * 60;
  SECOND_IN_MS = 1000;

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _coreMediaService: CoreMediaService,
    private _toastrService: ToastrService,
    private router: Router,
    private helpInfo: HelpInfo,
    private walletService: WalletService,
  ) {
    this._unsubscribeAll = new Subject();
    this.coreTranslationService.translate(
      russian,
      english,
      chine,
      hindi,
      vietnam,
      arab,
      indonesia,
      urdu,
      french
    );
  }

  ngOnInit(): void {
    this.isDesktop = window.innerWidth > this.desktopBreakpoint;

    this._coreMediaService.onMediaUpdate
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.isDesktop = window.innerWidth > this.desktopBreakpoint;
    });

    this.walletService.isDisconnect
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x) {
          this.walletService.isDisconnect.next(false);
          localStorage.setItem('walletConnect', JSON.stringify(false));
          this.router.navigate(['/connect-wallet']);
        }
      });

    this.helpInfo.userInfo.subscribe(async(user) => {
      if (user != null) {
        this.isLoading = true;

        let balance = [];
        balance.push(this.walletService.getBalance());
        balance.push(this.walletService.getBalancesOnPayment(this.helpInfo.userId.value));
        Promise.all(balance).then(
            x => {
              this.mfsBalance = this.roundDown(+x[1].mfs + +x[0].mfs, 2);
              this.daiBalance = this.roundDown(+x[1].stablecoin + +x[0].stablecoin, 2);
              this.eqnBalance = this.roundDown(x[1].eqn, 2);
              this.qenBalance = this.roundDown(x[1].qen, 2);
              this.qreBalance = this.roundDown(x[1].qre, 2);

              this.isLoading = false;
            },
            err => {
              this.isLoading = false;
            }
        );

        this.lists = [];

        this.walletService.getLevelPack().then(x => {
          for (let index = 0; index < 9; index++) {
            this.lists.push({
              levelNumber: index + 1,
              isActive: x[index] ? x[index].isActive : false,
            });
          }

          this.getPack();

          this.walletService.getMachineCompletedInWavePrepared().then(completedMachines => {
            this.readyDevices = completedMachines.reduce((readyMachines, machine) => readyMachines + machine.readyMachines, 0);
          });

          this.isLoading = false;
        },
        error => {
          this._toastrService.error('', 'Error', {
            positionClass: 'toast-top-left',
            toastClass: 'toast ngx-toastr',
            closeButton: true,
          });
          this.isLoading = false;
        });

        this.walletService.getMyWaveChips().then(x => {
          this.chipsBalance = x?.totalCount || 0;
        });

        this.updateGameInfo();
        !localStorage.getItem('isHelpAlreadyShown') && this.goToGameHelp();
      }
    });
  };

  getPack() {
    this.isLoading = true;

    this.walletService.getLevelPack().then(x => {
          this.lastActiveLevelNumber = undefined;

          x.forEach((element, index) => {
            this.lists[index].timeStampEndPack = element.timeStampEndPack;
            this.lists[index].isActive = element.isActive;

            if (this.lastActiveLevelNumber === undefined) {
              if (!element.isActive) {
                this.lastActiveLevelNumber = index;
              } else if (index + 1 === x.length) {
                this.lastActiveLevelNumber = index + 1;
              }
            }
          });

          if (this.lastActiveLevelNumber === undefined) {
            this.lastActiveLevelNumber = 0;
          }
        },
        error => {
          this._toastrService.error('', 'Error', {
            positionClass: 'toast-top-left',
            toastClass: 'toast ngx-toastr',
            closeButton: true,
          });
          this.isLoading = false;
        });
  }

  goToTiers(level?: number) {
    this.router.navigate([`/pages/tiers`]);
  }

  goToMiniGame() {
    this.isOpenMiniGameModal = true;
  }

  goToGameHelp() {
    this.isOpenGameHelpModal = true;
  }

  onSucceed(evt) {

  }

  numSequence(n: number): Array<number> {
    return Array(this.lists.length - n);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  roundDown(value, signs) {
    // обрезает строку до signs знаков, чтобы влезло в Number
    // затем округляет в меньшую сторону до signs знаков после запятой
    let trimValue = value;
    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      trimValue = value.replace(',', '.').substring(0, 10);
    }

    return Math.floor(trimValue * Math.pow(10, signs)) / Math.pow(10, signs);
  }

  async updateGameInfo() {
    const resp = await this.walletService.getMyButtonGameInfo();

    const currentDate = new Date();
    const nextRewardTimer = new Date(resp?.nextRewardAt);
    const leftMs = nextRewardTimer.getTime() - currentDate.getTime();

    if (!resp || !resp?.isActive) {
      this.timer.hours = '24';

    } else if (leftMs <= 0) {
      this.timer.hours = '00';

    } else {
      this.startTickingTimer(resp.nextRewardAt);
      this.timerId = setInterval(() => this.startTickingTimer(resp.nextRewardAt), 1000);
    }
  }

  startTickingTimer(nextRewardAt) {
    const currentDate = new Date();
    const nextRewardTimer = new Date(nextRewardAt);
    const leftMs = nextRewardTimer.getTime() - currentDate.getTime();

    if (leftMs <= 0) {
      this.timer.hours = '00';
      this.timer.minutes = '00';
      this.timer.seconds = '00';
      this.timerId && clearInterval(this.timerId);
      return;
    }

    const hours = Math.floor(leftMs / this.HOUR_IN_MS);
    const minutes = Math.floor((leftMs - (hours * this.HOUR_IN_MS)) / (this.MINUTE_IN_MS));
    const seconds = Math.floor((leftMs - ((hours * this.HOUR_IN_MS) + (minutes * this.MINUTE_IN_MS))) / this.SECOND_IN_MS);

    this.timer.hours = hours.toString().padStart(2, '0');
    this.timer.minutes = minutes.toString().padStart(2, '0');
    this.timer.seconds = seconds.toString().padStart(2, '0');
  }
}
