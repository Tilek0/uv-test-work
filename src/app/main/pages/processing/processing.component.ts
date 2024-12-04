import { Component, OnChanges, OnInit } from '@angular/core';
import { ContentHeaderService } from '@core/services/content-header.service';
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
import { Router } from "@angular/router";
import { CoreMediaService } from '@core/services/media.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo } from 'app/auth/helpers';
import { ToastrService } from 'ngx-toastr';
import { BigNumber, ethers } from 'ethers';
import { WAVE_ACTIVE_PERIOD_BEFORE_728, WAVE_ACTIVE_PERIOD_AFTER_728 } from 'localModules/metaforcesdk/constants';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss'],
})
export class ProcessingComponent implements OnInit, OnChanges {
  tabs = [
    {
      value: 'all',
      title: 'all',
      status: '',
    },
    {
      value: 'active',
      title: 'active',
      status: 'STARTED',
    },
    {
      value: 'completed',
      title: 'completed',
      status: 'COMPLETED',
    },
  ];
  waves = [];

  public coreConfig: any;
  private _unsubscribeAll: Subject<any>;
  desktopBreakpoint = 760;
  isDesktop = false;
  isLoading = true;

  currentFilter = 'all';

  isOpenUpgradeWaveModal = false;
  isOpenClaimModal = false;

  currentWave = {};
  eqnBalance = 0;
  qenBalance = 0;

  userRewards = {};

  constructor(
      public translate: TranslateService,
      private coreTranslationService: CoreTranslationService,
      private translateService: TranslateService,
      private _coreMediaService: CoreMediaService,
      private walletService: WalletService,
      private router: Router,
      private _toastrService: ToastrService,
      private helpInfo: HelpInfo,
      private _contentHeaderService: ContentHeaderService,
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

    this._contentHeaderService.contentHeader.next({
      actionButton: true,
      breadcrumb: {
        type: 'chevron',
        links: [
          {
            name: 'OVERVIEW',
            isLink: true,
            link: '/pages/overview',
            isUrl: true,
          },
          {
            name: 'TIERS',
            isLink: true,
            link: '/pages/tiers',
            isUrl: true,
          },
          {
            name: 'PROCESSING',
            isLink: false,
            link: '',
            isUrl: false,
          },
        ],
      },
    });

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
        const waveStatus = this.tabs.find(tab => tab.value === this.currentFilter)?.status || '';

        this.isLoading = true;

        let req = [];
        req.push(this.walletService.getMyWaves());
        req.push(this.walletService.provider.getNetwork());

        Promise.all(req).then(([x, { chainId }]) => {
          const currentDate = new Date();
          this.waves = [];

          x?.items.forEach((item, i) => {
            if (item?.rewardOreClaimedItems?.length > 0) {
              return;
            }

            const startDate = new Date(item.wave.startDate);
            const waveTTL = +item.wave.waveId > 728
                ? WAVE_ACTIVE_PERIOD_AFTER_728[chainId]
                : WAVE_ACTIVE_PERIOD_BEFORE_728[chainId];
            const endDate = new Date(startDate.getTime() + waveTTL);
            const resultMs = endDate.getTime() - currentDate.getTime();

            const day = Math.floor(resultMs / 86400000);
            const hours = Math.floor((resultMs - day * 86400000) / 3600000);
            const minutes = Math.floor((resultMs - (hours * 3600000 + day * 86400000)) / 60000);

            const filledCapacity = +ethers.utils.formatEther(item.capacity.filledCapacity);
            const filledCapacityMax = +ethers.utils.formatEther(item.capacity.filledCapacityMax);
            const extendCapacityMax = +ethers.utils.formatEther(item.capacity.extendCapacityMax);
            const extendCapacity = +ethers.utils.formatEther(item.capacity.extendCapacity);

            const batteryCapacity = extendCapacityMax / 3;
            const batteryFilledCapacity = filledCapacityMax / 3;

            const batteries = [{},{},{}].map((battery, i) => {
              let ready = 0;

              if (filledCapacity >= batteryFilledCapacity * (i + 1)) {
                ready = batteryFilledCapacity;
              } else if (batteryFilledCapacity * (i + 1) - filledCapacity < batteryFilledCapacity) {
                ready =  filledCapacity % batteryFilledCapacity;
              } else {
                ready = 0;
              }

              let batteryExtend = 0;
              if (extendCapacity >= batteryCapacity * (i + 1)) {
                batteryExtend = batteryCapacity;
              } else if (batteryCapacity * (i + 1) - extendCapacity < batteryCapacity) {
                batteryExtend =  extendCapacity % batteryCapacity;
              } else {
                batteryExtend = 0;
              }

              let status;
              if (
                  (extendCapacity >= batteryCapacity * (i + 1)) ||
                  (batteryCapacity * (i + 1) - extendCapacity < batteryCapacity)
              ) {
                status = batteryExtend > 0 && batteryExtend < batteryCapacity ? 'partial' : 'on-charge';

              } else {
                let prevBatteryExtend = 0;
                if (extendCapacity >= batteryCapacity * i) {
                  prevBatteryExtend = batteryCapacity;
                } else if (batteryCapacity * i - extendCapacity < batteryCapacity) {
                  prevBatteryExtend = extendCapacity % batteryCapacity;
                } else {
                  prevBatteryExtend = 0;
                }

                // TODO: на старте заблокировано расширение, позже вернуть
                // if (prevBatteryExtend > 0) {
                //   status = prevBatteryExtend < batteryCapacity ? 'locked' : 'lock-active';
                // } else {
                //   status = 'locked';
                // }

                // TODO: это убрать
                status = 'locked';
              }

              return {
                ready,
                readyTotal: batteryFilledCapacity,
                total: batteryCapacity,
                extended: batteryExtend,
                status,
              }
            });

            this.walletService.getWaveById(item.wave.waveId).then(x => {
              let machineIds = [];
              let chipIndexes = [];

              if (x?.items[0]?.machines?.length > 0) {
                x.items[0].machines.forEach((machine) => {
                  const userChips = machine.chips.filter(chip => chip.userId == this.helpInfo.userId.value.toString());
                  if (userChips && userChips.length > 0) {
                    const chipIds = Array.from(userChips, (x) => BigNumber.from(x.chipIndex));
                    machineIds.push(...Array(chipIds.length).fill(BigNumber.from(machine.machineId)));
                    chipIndexes.push(...chipIds);
                  }
                });
              }

              this.walletService.createGetUserRewardOreRequest(
                  BigNumber.from(item.wave.waveId),
                  machineIds,
                  chipIndexes
              ).then(res => {
                this.userRewards[item.wave.waveId] = +this.roundLess(res);
              });
            });

            this.waves.push({
              ...item.wave,
              waveCurrentStatus: resultMs > 0 ? 'STARTED' : 'COMPLETED',
              formatedRewardOre: this.roundDown(ethers.utils.formatEther(item.wave.rewardOre).toString(), 2),
              day,
              hours,
              minutes,
              batteries,
              filledCapacity,
              filledCapacityMax,
              extendCapacityMax,
              extendCapacity,
            });
          });

          if (waveStatus) {
            this.waves = this.waves.filter((wave) => wave.waveCurrentStatus == waveStatus);
          }
          this.isLoading = false;
        });

        const balances = await this.walletService.getBalancesOnPayment(this.helpInfo.userId.value);
        this.eqnBalance = +balances?.eqn || 0;
        this.qenBalance = +balances?.qen || 0;
      }
    });
  }

  setWavesFilter({ currentTab }) {
    this.currentFilter = currentTab;
    this.walletService.getUserInfo();
  }

  openUpgrade(wave: any) {
    this.currentWave = wave;
    this.isOpenUpgradeWaveModal = true;
  }

  openClaim(wave: any) {
    this.currentWave = wave;
    this.isOpenClaimModal = true;
  }

  onSucceed(event) {
    this.isOpenUpgradeWaveModal = false;
    this.isOpenClaimModal = false;
    this.currentWave = {};
    this.walletService.getUserInfo();
  }

  onOpenClaimEvent(evt) {
    if (!evt) {
      this.isOpenClaimModal = evt;
      this.currentWave = {};
    }
  }

  onOpenUpgradeEvent(evt) {
    if (!evt) {
      this.isOpenUpgradeWaveModal = evt;
      this.currentWave = {};
    }
  }

  ngOnChanges(): void {}

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

  roundLess(value) {
    if (!value) {
      return 0;
    }
    let round = value.match(new RegExp('[0-9]+(\.[0-9]{0,4})?'));
    if (!round[0]) {
      return 0;
    }
    let less = round[0].split('.')[1];
    return +less > 0 ? round[0] : round[0].split('.')[0];
  }
}
