import { Component, OnChanges, OnInit } from '@angular/core';
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
import { ContentHeaderService } from '@core/services/content-header.service';
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo, sideNavType, StatusRequest } from 'app/auth/helpers';
import { TooltipComponent } from '@angular/material/tooltip';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-force-coin',
  templateUrl: './force-coin.component.html',
  styleUrls: ['./force-coin.component.scss'],
})
export class ForceCoinComponent implements OnInit, OnChanges {
  day = 0;
  hours = 0;
  minutes = 0;
  intervalId: any;
  timeStampEndPack: any = 0;
  timeMs = 0;
  mfsBuyValue = 0;
  math = Math;
  isBuyMFS = false;
  isHaveOffer = false;
  mfsPriceInUSD = 0;
  total = 0;
  totalDAI = 0;
  countDAI = 0;
  countMFS = 0;
  countMFSLastValue = 0;
  requestList = [];
  creatLoading = false;
  StatusRequest = StatusRequest;
  getValueInWallet = 0;
  getValueAirdropPool = 0;
  tierDistributionList = [
    { getPersentInWallet: 50, AirdropPool: 50 },
    { getPersentInWallet: 52.5, AirdropPool: 47.5 },
    { getPersentInWallet: 55, AirdropPool: 45 },
    { getPersentInWallet: 60, AirdropPool: 40 },
    { getPersentInWallet: 65, AirdropPool: 35 },
    { getPersentInWallet: 70, AirdropPool: 30 },
    { getPersentInWallet: 80, AirdropPool: 20 },
    { getPersentInWallet: 90, AirdropPool: 10 },
    { getPersentInWallet: 100, AirdropPool: 0 },
  ];
  userInfoDate = undefined;
  private $DailColor = '#FF9501';
  private $MfcColor = '#C68DFF';
  public gainedChartoptions = {
    chart: {
      height: 200,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [this.$DailColor, this.$MfcColor],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2.5,
    },
    fill: {
      colors: ['#FF950100', '#C68DFF00'],
      opacity: 0.9,
      type: 'gradient',
      gradient: {
        // shade: 'dark',
        type: 'horizontal',
        // shadeIntensity: 0.5,
        gradientToColors: ['#FF950133', '#C68DFF33'],
        //  inverseColors: true,
        opacityFrom: [0.9, 0.9],
        opacityTo: 1,
        stops: [],
        colorStops: [],
      },
    },
    xaxis: {
      floating: true,
      labels: {
        minWidth: 0,
        maxWidth: 0,
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      floating: false,
      labels: {
        align: 'left',
        minWidth: 0,
        maxWidth: 0,
        style: {
          cssClass: 'spark-line-custome',
        },
        offsetX: 24,
        formatter: (value: number) => {
          return value.toFixed(2);
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      borderColor: '#FFFFFF1A',
      strokeDashArray: 0,
      // position: 'back',

      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  public chartData = [];
  public holders = 0;
  public current_supply = 0;
  // public total_supply = 468_114_286;
  public total_supply = 422_591_056;
  public mfs_per_usd = 0;
  price = 0;

  imgStub = 'assets/Desktop-stub.png';
  vestingBalance = '0';
  private _unsubscribeAll = new Subject();

  constructor(
    public translate: TranslateService,
    // public stats: any,
    private coreTranslationService: CoreTranslationService,
    private _contentHeaderService: ContentHeaderService,
    private walletService: WalletService,
    private helpInfo: HelpInfo,
    private breakpointObserver: BreakpointObserver,
  ) {
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
    this.breakpointObserver
      .observe(['(max-width: 576px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.imgStub = 'assets/Mobile-stub.png';
          
        } 
        
      });

      this.breakpointObserver
      .observe(['(min-width: 576px) and (max-width: 834px)'])
      .subscribe((result: BreakpointState) => {
    
        if (  result.matches) {
          this.imgStub = 'assets/Tablet-stub.png';
          
        } 
      });
      this.breakpointObserver
      .observe([' (min-width: 834px)'])
      .subscribe((result: BreakpointState) => {
    
        if (  result.matches) {
          this.imgStub = 'assets/Desktop-stub.png';
        }
      });
  
    // Object.defineProperty(TooltipComponent.prototype, 'message', {
    //   set(v: any) {
    //     const el = document.querySelectorAll('.mat-tooltip');

    //     if (el) {
    //       el[el.length - 1].innerHTML = v;
    //     }
    //   },
    // });
    this.helpInfo.userInfo.subscribe(user => {
      if (user != null) {
        this.walletService.getUserInfoWithThen().then(userDate => {
          this.userInfoDate = userDate;
        });
        this.walletService.getCountHolders().then(count => {
          this.holders = count;
        });
        this.walletService.getStats().then(stats => {
          this.current_supply = +stats.mfsTotalEmission;
          this.mfs_per_usd = 1.0 / +stats.mfsPriceInUSD;
          this.price = +stats.mfsPriceInUSD;
          const chartDataArr = [];
          let minValue = 0.25;

          chartDataArr.push(
            this.price * 0.3 < minValue ? minValue : this.price * 0.3
          );
          chartDataArr.push(
            this.price * 0.45 < minValue ? minValue : this.price * 0.45
          );
          chartDataArr.push(
            this.price * 0.45 < minValue ? minValue : this.price * 0.45
          );
          chartDataArr.push(
            this.price * 0.6 < minValue ? minValue : this.price * 0.6
          );
          chartDataArr.push(
            this.price * 0.6 < minValue ? minValue : this.price * 0.6
          );
          chartDataArr.push(
            this.price * 0.75 < minValue ? minValue : this.price * 0.75
          );
          chartDataArr.push(
            this.price * 0.75 < minValue ? minValue : this.price * 0.75
          );
          chartDataArr.push(
            this.price * 0.9 < minValue ? minValue : this.price * 0.9
          );
          chartDataArr.push(
            this.price * 0.9 < minValue ? minValue : this.price * 0.9
          );
          chartDataArr.push(this.price);
          chartDataArr.push(this.price);
          this.chartData = [{ data: chartDataArr }];
        });

        this.mfsPriceInUSD = +this.helpInfo.stats.value.mfsPriceInUSD;
        // this.walletService.getTotalPossibilityForByingMFS().then(x => {
        //   if (+x > 0.01) {
        //     this.mfsBuyValue = +(+x).toFixed(2);
        //     this.isHaveOffer = true;
        //   }
        // });

        // this.getListCreateRequestMFS();
        // DEPRECATED
        // this.walletService.getPossibilityForBuyingMFSPage().then(
        //   x => {
        //     let filtred = x.filter(x => x !== undefined);

        //     if (
        //       filtred[0].endBuyingPeriodDate.getTime() - new Date().getTime() >
        //       0
        //     ) {
        //       this.timeStampEndPack = filtred[0].endBuyingPeriodDate;
        //     }

        //     if (this.timeStampEndPack > 0) {
        //       this.setTimer();
        //     }

        //     this.intervalId = setInterval(() => {
        //       if (this.timeStampEndPack > 0) {
        //         this.setTimer();
        //       } else {
        //         clearInterval(this.intervalId);
        //       }
        //     }, 60000);
        //   },
        //   err => {}
        // );
      }
    });
    this._contentHeaderService.contentHeader.next({
      actionButton: true,
      breadcrumb: {
        type: 'chevron',
        links: [
          {
            name: 'FORCE_SYSTEMS',
            isLink: true,
            link: 'https://holiverse.ai/forcesystems',
            isUrl: true,
          },
          {
            name: 'UNITEVERSE_DELTA',
            isLink: true,
            link: '/pages/tier-list',
            isUrl: false,
          },
          {
            name: 'FORCECOIN',
            isLink: false,
            link: '',
            isUrl: false,
          },
        ],
      },
    });

    
    this.helpInfo.walletAddress
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(x => {
          if (x != null && x.length > 0) {
            let balance = [];
            balance.push(this.walletService.getBalance());
            balance.push(this.walletService.getBalancesOnPayment(this.helpInfo.userId.value));
            Promise.all(balance).then(
                x => {
                  // this.forcecoinBalance = x[1].mfs;
                  this.vestingBalance = x[1].mfsVesting;
                  // this.isTariffsFormInactive = +this.vestingBalance <= 0;
                },
                err => {}
            );
          }
        });
  }

  ngOnChanges(): void {}

  setTimer() {
    let currentDate = new Date();
    let resultMs = this.timeStampEndPack.getTime() - currentDate.getTime();
    this.timeMs = resultMs;
    if (resultMs > 0) {
      this.day = Math.floor(resultMs / 86400000);
      this.hours = Math.floor((resultMs - this.day * 86400000) / 3600000);
      this.minutes = Math.floor(
        (resultMs - (this.hours * 3600000 + this.day * 86400000)) / 60000
      );
    } else {
      this.day = 0;
      this.hours = 0;
      this.minutes = 0;
    }
  }

  buyMFS() {
    this.isBuyMFS = true;

    this.walletService.getBuyMFS(this.countMFS + '').then(
      result => {
        this.isBuyMFS = false;

        this.mfsBuyValue -= this.countMFS;
        if (this.mfsBuyValue === 0) {
          this.isHaveOffer = false;
        }
      },
      errr => {
        this.isBuyMFS = false;
      }
    );
  }

  changeTotal(value) {
    if (value < 0) {
      return;
    }
    this.countDAI = value;
    this.walletService.getRequestedMFS(this.countDAI + '').then(x => {
      this.total = +(+x.total).toFixed(2);
      // this.getValueInWallet =+(+x.self).toFixed(0);
      // this.getValueAirdropPool = +(+x.airdrop).toFixed(0);
      this.getValueInWallet = +(+x.total).toFixed(0);
      this.getValueAirdropPool = 0; //+(+x.airdrop).toFixed(0);
      // this.walletService.getUserInfoWithThen().then( userDate => {
      //   this.userInfoDate = userDate;
      // })
    });
  }

  changeBuyMFS(value) {
    if (value > this.mfsBuyValue || value < 0 || Number.isNaN(value)) {
      this.countMFS = 0;
      // this.cdr.detectChanges()
      setTimeout(() => {
        this.countMFS = this.countMFSLastValue;
      }, 0.1);

      return;
    }
    this.countMFS = value;
    this.countMFSLastValue = value;
    this.walletService.calcMFSInUSD(this.countMFS + '').then(x => {
      this.totalDAI = +(+x).toFixed(2);
    });
  }

  getListCreateRequestMFS() {
    this.walletService.getRequestIds().then(x => {
      this.requestList = x;
      let requestArray = [];
      this.requestList.forEach(element => {
        requestArray.push(this.walletService.getRequestInfo(element));
      });
      Promise.all(requestArray).then(x => {
        x.forEach((element, index) => {
          this.requestList[index] = Object.assign(
            // { id: this.requestList[index], mfsCost:  +(+x.self).toFixed(0)},
            {
              id: this.requestList[index],
              mfsCost: +(+(
                element.buyedMFS +
                this.price * element.usdAmount
              )).toFixed(0),
            },
            // { id: this.requestList[index], mfsCost:  +(+(element.buyedMFS + this.price * element.usdAmount * (1 - this.tierDistributionList[this.userInfoDate.level-1].getPersentInWallet / 100))).toFixed(0)},
            element
          );
          // this.walletService.getRequestedMFS(element.startUSDAmount).then((x) => {

          // });
        });
      });
    });
  }

  createRequestBuyMFS() {
    this.creatLoading = true;

    this.walletService.createRequestMfs(this.countDAI + '').then(
      x => {
        // this.getListCreateRequestMFS();
        this.creatLoading = false;
      },
      err => {
        this.creatLoading = false;
      }
    );
  }

  requestDelete(id) {
    this.walletService.deleteRequestMfs(id).then(x => {
      let index = this.requestList.findIndex(item => item.id === id);
      this.requestList[index].status = StatusRequest.Declined;
    });
  }
  
  openBuybackMFC() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.buyback,
    });
  }
}