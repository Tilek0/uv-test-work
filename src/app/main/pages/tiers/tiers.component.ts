import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
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
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { CoreMediaService } from '@core/services/media.service';
import { Router } from "@angular/router";
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo } from 'app/auth/helpers';
import { ToastrService } from 'ngx-toastr';
import { ViewportScroller } from "@angular/common";
import { environment } from 'environments/environment';
import { CoreConfigService } from '@core/services/config.service';
import { WAVE_ACTIVE_PERIOD_BEFORE_728, WAVE_ACTIVE_PERIOD_AFTER_728 } from 'localModules/metaforcesdk/constants';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.scss'],
})
export class TiersComponent implements OnInit, OnDestroy, OnChanges {
  public coreConfig: any;
  private _unsubscribeAll: Subject<any>;

  wave = null;
  userId = null
  userChips = [];
  userChipsGrouped = [];

  desktopBreakpoint = 760;
  isDesktop = false;

  userInfo = undefined;
  mfsPriceInUSD = 0;
  firstPackPriceInUSD = 0;
  isStartExchange = false;
  isUpdatePrice = false;

  lists = [];
  tunnels = [];
  isLoading = false;
  lastActiveLevelNumber = undefined;

  totalDevices = 88;
  isInfo = false;
  lostValue = '0';
  isCollapsed: boolean;

  allMachines = 0;
  progressMachines = 0;
  completedMachines = 0;

  isOpenActivationModal = false;
  accessKeyToActivate = null;
  activationMethod = 'activate';

  allWaves = 0;
  progressWaves = 0;
  completedWaves = 0;

  chipsQueue = [];
  CHIP_WAIT_TIME = 1000 * 60 * 60 * 24 * 30; // 30 дней

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private translateService: TranslateService,
    private _coreMediaService: CoreMediaService,
    private _toastrService: ToastrService,
    private router: Router,
    private helpInfo: HelpInfo,
    private walletService: WalletService,
    private scroller: ViewportScroller,
    private _coreConfigService: CoreConfigService,
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
    this.tunnels = Array(9).fill(1).map((x, i) => {
          return {
            level: i + 1,
            machines: 0,
            in_progress: 0,
            your: 0,
          };
        }
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

    this.isStartExchange = environment.isExchange;
    this.helpInfo.userInfo.subscribe(async(user) => {
      if (user != null) {
        let stats = await this.walletService.getStats();

        this.mfsPriceInUSD = +stats.mfsPriceInUSD;
        this.firstPackPriceInUSD = +stats.firstPackPriceInUSD;
        if (this.isStartExchange) {
          this.startTimerToUpdatePrise();
        }

        this.walletService.getLostCoint().then(x => {
          
          if (+x > 0) {
            this.isInfo = true;
            this.lostValue = x;
          }
        });

        this.userInfo = user;
        this.isLoading = true;
        this.lists = [];

        for (let index = 0; index < 9; index++) {
          let dai = index === 0
            ? +this.firstPackPriceInUSD
            : +(this.lists[index - 1].costInDAI * 2);

          this.lists.push({
            levelNumber: index + 1,
            costInDAI: dai,
            costInMFS: dai / +this.mfsPriceInUSD,
            timeStampEndPack: 0,
            isActive: false,
          });
        }

        this.getPack();

        let req = [];
        req.push(this.walletService.getUserId());
        req.push(this.walletService.getMyWaves());
        req.push(this.walletService.getMyChipsQueue());
        // HOTFIX
        req.push(this.walletService.getMachineCompletedInWavePrepared());
        req.push(this.walletService.getPreparedMachineInfo());
        req.push(this.walletService.getMyPreparedMachineInfo());
        req.push(this.walletService.provider.getNetwork());

        Promise.all(req).then(([userId, waves, chipsQueue, completedMachines, startedMachines, userMachines, { chainId }]) => {
          if (userId) {
            this.userId = userId;
            this.completedMachines = completedMachines.reduce((readyMachines, machine) => readyMachines + machine.readyMachines, 0);

            this.tunnels.forEach((tunnel, i) => {
              const currentTunnelMachines = completedMachines.find(machine => machine.level == tunnel.level);
              let machineInProgress = startedMachines.find(machine => machine.level == tunnel.level);

              this.tunnels[i].machines = currentTunnelMachines?.readyMachines || 0;
              this.tunnels[i].in_progress = machineInProgress ? machineInProgress.readyChips : 0;
              this.tunnels[i].your = userMachines.find(machine => machine.level == tunnel.level)?.readyChips || 0;
            });

            this.userChipsGrouped = userMachines.sort((a, b) => a.level - b.level);

            if (waves?.items?.length > 0) {
              const currentDate = new Date();

              waves.items.map((item, i) => {
                const startDate = new Date(item.wave.startDate);
                const waveTTL = +item.wave.waveId > 728
                    ? WAVE_ACTIVE_PERIOD_AFTER_728[chainId]
                    : WAVE_ACTIVE_PERIOD_BEFORE_728[chainId];
                const endDate = new Date(startDate.getTime() + waveTTL);
                const resultMs = endDate.getTime() - currentDate.getTime();

                if (item?.rewardOreClaimedItems?.length == 0) {
                  resultMs > 0 ? ++this.progressWaves : ++this.completedWaves;
                }
              });

              this.allWaves = this.progressWaves + this.completedWaves;
            }

            if (chipsQueue && chipsQueue.length > 0) {
              this.chipsQueue = [...chipsQueue];
            }
          }
        });

        this.isLoading = false;
      }
    });
  };

  ngOnChanges() {}

  ngAfterContentInit() {
    this._coreConfigService.config.subscribe(config => {
      this.isCollapsed = config.layout.menu.collapsed;
    });
  }
  closeInfo() {
    this.isInfo = false;
  }
  async startTimerToUpdatePrise() {
    setTimeout( () => this.isUpdatePrice = true,60 * 1000);
  }

  async updatePrice() {
    try {
      let result = await this.walletService.getStats();
      this.helpInfo.stats.next(result);
      this.mfsPriceInUSD = +result.mfsPriceInUSD;
      this.firstPackPriceInUSD = +result.firstPackPriceInUSD;

      for (let index = 0; index < 9; index++) {
        let dai = index === 1
          ? +result.firstPackPriceInUSD
          : +(this.lists[index - 1].costInDAI * 2);

        this.lists[index].costInDAI = dai;
        this.lists[index].costInMFS = dai / +result.mfsPriceInUSD;
      }
      this.isUpdatePrice = false;
      this.startTimerToUpdatePrise();

    } catch (error) {}
  }

  async updatePriceWithCheck(): Promise<boolean> {
    let isError = false;
    try {
      let result = await this.walletService.getStats();

      let difference = Math.abs( this.mfsPriceInUSD - (+result.mfsPriceInUSD));
      if((this.mfsPriceInUSD / 100 * environment.SlippageTolerance) < difference) {
        this.mfsPriceInUSD = +result.mfsPriceInUSD;
        this.firstPackPriceInUSD = +result.firstPackPriceInUSD;
        this.helpInfo.stats.next(result);

        for (let index = 1; index < 10; index++) {
          let dai = index === 1
            ? +result.firstPackPriceInUSD
            : +(this.lists[index - 1].costInDAI * 2);

          this.lists[index].costInDAI = dai;
          this.lists[index].costInMFS = dai / +result.mfsPriceInUSD;
        }
        this.isUpdatePrice = false;
        this.startTimerToUpdatePrise();
        isError = true;
        return isError;
      } else {
        return isError;
      }
    } catch (error) {
      isError = true;
      return isError;
    }
  }

  getPack() {
    this.isLoading = true;

    this.walletService.getLevelPack().then(x => {
          this.lastActiveLevelNumber = undefined;

          x.forEach((element: any, index) => {
            this.lists[index].timeStampEndPack = element.timeStampEndPack;
            this.lists[index].isActive = element.isActive;

            this.lists[index].countRenewal = element.countRenewal.toNumber();

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

          this.lists.forEach((accessKey, i) => {
            const currentDate = new Date();
            const resultMs = !!accessKey.timeStampEndPack
                ? accessKey.timeStampEndPack.getTime() - currentDate.getTime()
                : 0;

            this.lists[i].canActivate = accessKey.levelNumber <= this.lastActiveLevelNumber + 1;
            this.lists[i].canExtend = false;

            if (accessKey.isActive) {
              if (resultMs > 0) {
                this.lists[i].day = Math.floor(resultMs / 86400000);
                this.lists[i].hours = Math.floor((resultMs - this.lists[i].day * 86400000) / 3600000);
                this.lists[i].minutes = Math.floor(
                    (resultMs - (this.lists[i].hours * 3600000 + this.lists[i].day * 86400000)) / 60000
                );
                this.lists[i].canExtend = true;

              } else if (resultMs > -86400000 * 3) {
                let timeExtension = 86400000 * 3 - Math.abs(resultMs);
                this.lists[i].day = Math.floor(timeExtension / 86400000);
                this.lists[i].hours = Math.floor(
                    (timeExtension - this.lists[i].day * 86400000) / 3600000
                );
                this.lists[i].minutes = Math.floor(
                    (timeExtension - (this.lists[i].hours * 3600000 + this.lists[i].day * 86400000)) / 60000
                );
                this.lists[i].canExtend = true;
                this.lists[i].extendStatus = true;
              }
            }

            if (!this.lists[i].canActivate && this.lists[i].canExtend) {
              this.lists[i].discount = 0.21;
            }
          });
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

  goToProcessing() {
    this.router.navigate([`/pages/processing`]);
  }
  goToDelta() {
    this.router.navigate([`/pages/uniteverse`]);
  }

  openChooseModal(accessKey, method) {
    this.accessKeyToActivate = accessKey;
    this.activationMethod = method;
    this.isOpenActivationModal = true;
  }

  onSucceed(event: any) {
    this.isOpenActivationModal = false;
    this.walletService.getUserInfo();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  getChipsQueue(level: number) {
    return this.chipsQueue.find((queue => queue.chipLevel == level))?.count || 0;
  }

  getChipsQueueArr(level: number) {
    const count = +this.getChipsQueue(level);
    return Array(count).fill(1).map((x,i) => i);
  }

  getChipsTimer(level: number, index: number) {
    const currentDate = new Date();
    const currentQueue = this.chipsQueue.find((queue => queue.chipLevel == level));

    let resultMs = 0;

    if (currentQueue.activationDateList && currentQueue.activationDateList.length && currentQueue.activationDateList.length == currentQueue.count) {
      const chipActivationDate = new Date(+currentQueue.activationDateList[index-1] * (1000 * 60 * 60 * 24)) || currentDate;
      resultMs = chipActivationDate.getTime() - currentDate.getTime();

    // фолбек для старых очередей
    } else {
      const lastActivate = currentQueue?.fromQueueToMachineDate;
      const lastActivateDate = lastActivate ? new Date(lastActivate) : new Date();
      const lastActivateTimeFirstChip = lastActivateDate.getTime() + this.CHIP_WAIT_TIME;
      // добавить 30 дней, если получили отрицательное значение
      const fix = lastActivateTimeFirstChip - currentDate.getTime() < 0 ? this.CHIP_WAIT_TIME : 0;
      const lastActivateTime = lastActivateDate.getTime() + (index * this.CHIP_WAIT_TIME) + fix;
      resultMs = lastActivateTime - currentDate.getTime();
    }

    if (resultMs < 0) { resultMs = 0 }

    const days = Math.floor(resultMs / 86400000);
    const hours = Math.floor((resultMs - days * 86400000) / 3600000);
    const minutes =  Math.floor((resultMs - (hours * 3600000 + days * 86400000)) / 60000);

    return { days, hours, minutes };
  }

  scrollChips(direction: string, level: number) {
    const currentSlider = document.getElementById('queue-' + level);
    if (!currentSlider) return;

    const currentOffset = currentSlider.style.transform ? +(currentSlider.style.transform.match(/\d+/)[0]) : 0;
    currentSlider.style.transform = direction == 'next'
        ? `translate(-${currentOffset + 148}px)`
        : `translate(-${currentOffset - 148}px)`;
  }

  haveScroll(direction: string, level: number) {
    const currentSlider = document.getElementById('queue-' + level);
    if (!currentSlider) return false;

    const amount = this.getChipsQueue(level);
    const currentOffset = currentSlider.style.transform ? +(currentSlider.style.transform.match(/\d+/)[0]) : 0;
    const scrolledItems = currentOffset / 148; // 148 - ширина карточки чипов + gap

    return direction == 'next' ? scrolledItems < amount : scrolledItems > 0;
  }

  checkOverflow(level: number) {
    const swiperBox = document.getElementById('queue-box-' + level);
    const queue = document.getElementById('queue-' + level);

    return !!swiperBox ? swiperBox.offsetWidth < (queue?.clientWidth || 0) : false;
  }

  startSwipe(evt, level) {
    const swiperBox = document.getElementById('queue-box-' + level);
    const currentSlider = document.getElementById('queue-' + level);

    if (this.isDesktop || !this.checkOverflow(level) || !currentSlider || !swiperBox) {
      evt.stopPropagation();
      evt.preventDefault();
      return;
    }

    const currentOffset = currentSlider.style.transform ? +(currentSlider.style.transform.match(/\d+/)[0]) : 0;
    const currentScrollable = (currentSlider.clientWidth - swiperBox.offsetWidth) + 32;
    let startPos = evt?.x || evt?.touches[0]?.screenX || 0;
    let track = 0;

    const onmousemove = (evt) => {
      const moveX = evt?.x || evt?.touches[0]?.screenX || 0;
      track = moveX - startPos;

      // currentOffset всегда отрицательный, т.к. свайпать вправа из начального положения нельзя
      let offset = track - currentOffset;
      if (offset >= 0) {
        currentSlider.style.transform = `translate(0)`;
      } else if (offset <= -currentScrollable) {
        currentSlider.style.transform = `translate(${-currentScrollable}px)`;
      } else {
        currentSlider.style.transform = `translate(${offset}px)`;
      }
    }

    const stopSwipe = (evt) => {
      document.removeEventListener('mousemove', onmousemove);
      document.removeEventListener('mouseup', stopSwipe);

      document.removeEventListener('touchmove', onmousemove);
      document.removeEventListener('touchend', stopSwipe);
    }

    document.addEventListener('mousemove', onmousemove);
    document.addEventListener('mouseup', stopSwipe);

    document.addEventListener('touchmove', onmousemove);
    document.addEventListener('touchend', stopSwipe);
  }
}
