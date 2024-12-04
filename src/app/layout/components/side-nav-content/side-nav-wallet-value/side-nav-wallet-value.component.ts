import {
  ChangeDetectorRef,
  Component,
  Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges,
} from '@angular/core';

import {
  chainIdList,
  HelpInfo,
  sideNavType,
  walletInfo,
} from 'app/auth/helpers';
import { WalletService } from 'app/auth/service/wallet.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'environments/environment';
import { hMFSBalance } from 'app/auth/helpers/variables';

import { amoy, paymentBalance, poligon } from 'app/auth/helpers/variables';
import { MyWeb3ModalService } from 'app/auth/service/web3Modal.service';
import { SideNavService } from 'app/auth/service';

declare let window: any;

@Component({
  selector: 'app-side-nav-wallet-value',
  templateUrl: './side-nav-wallet-value.component.html',
  styleUrls: ['./side-nav-wallet-value.component.scss'],
})
export class SideNavWalletValueComponent implements OnInit, OnChanges, OnDestroy {
  @Input() refetchBalance: number;

  public readonly environment = environment;
  sideNavType = sideNavType;

  paymentBalance = paymentBalance;
  poligon = poligon;
  amoy = amoy;
  isCostCoin = false;
  baseUrl = 'https://mfsbalance.competentit.ru/';
  walletBalance = [];
  isOpen = false;
  nameWallet = '';
  isCopy = false;
  isCopyReservedAddress = false;
  isConnect = false;
  isLoading = false;
  addressWallet = '';
  addressWalletClipped = '';
  isAddBaks = false;
  walletConnect: walletInfo;

  userId = 0;

  chainId = 0;
  isReservedAddress = false;
  reservedAddress = '';
  maticPrice = 0;

  private _unsubscribeAll = new Subject();
  visibleAddress = true;
  directPaymentStatus = false;
  isOpenMenu = false;

  intervalID = null;
  hMFSBalance = hMFSBalance;
  lastIndexNotZerohMfsBalance = null;
  iNothMFS = true;

  constructor(
    private web3ModalService: MyWeb3ModalService,
    private walletService: WalletService,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private helpInfo: HelpInfo,
    private cdr: ChangeDetectorRef,
    public breakpointObserver: BreakpointObserver,
    private clipboard: Clipboard,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private sideNavService: SideNavService
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
    this.helpInfo.isOpenSlideNavMain
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(async (x: any) => {
        if (x.type === sideNavType.wallet) {
          if (x.item.valuePayment != undefined) {
            this.isLoading = true;

            this.walletBalance[2].value = (
              await this.walletService.getMatic(
                this.helpInfo.walletAddress.value
              )
            ).toFixed(4);
            let balance = [];
            balance.push(this.walletService.getBalance());
            balance.push(this.walletService.getBalancesOnPayment(this.helpInfo.userId.value)
            );
            Promise.all(balance).then(
              x => {
                this.walletBalance[0].value = x[0].stablecoin;
                this.paymentBalance[2].value = x[0].stablecoin;
                this.walletBalance[1].value = x[0].mfs;
                this.walletBalance[0].valuePayment = x[1].stablecoin;
                this.paymentBalance[2].valuePayment = x[1].stablecoin;

                this.isLoading = false;
              },
              err => {
                this.isLoading = false;
              }
            );
          }
          if (x.item.isOpenMenu != undefined) {
            this.isOpenMenu = x.item.isOpenMenu;
          }
        }
      });
      this.sideNavService.isCoinChange.subscribe( x=> {
        
        if(x){
          this.openChange();
          this.sideNavService.isCoinChange.next(false)
        }
     
      })
    this.helpInfo.walletAddress
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x != null && x.length > 0) {
          this.openChange();
          this.helpInfo.userId.subscribe(x => {
            if (x) {
              this.userId = x;
            }
          });

          this.addressWalletClipped =
            x.slice(0, 5).toUpperCase() +
            '...' +
            x.slice(x.length - 4).toUpperCase();
          this.addressWallet = x;
          this.cdr.detectChanges();

          this.isConnect = true;
        } else {
          if (x === null) {
            this.walletService.isDisconnect.next(true);
            this.isConnect = false;
          }
        }
      });



    this.walletService.isDisconnect
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x) {
          this.walletService.isDisconnect.next(false);
          localStorage.setItem('walletConnect', JSON.stringify(false));
          this._router.navigate(['/connect-wallet']);
        }
      });

    this.helpInfo.walletInfo
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x != null) {
          this.walletService.getReservedAddress().then(x => {
            this.isReservedAddress =
              x === '0x0000000000000000000000000000000000000000' ? false : true;
            if (this.isReservedAddress) {
              this.reservedAddress = x;
            }
          });

          let chainId = x.chainId;
          if (chainId === chainIdList.polygonTestnet) {
            this.walletBalance = this.amoy;
          }
          if (chainId === chainIdList.polygonMainnet) {
            this.walletBalance = this.poligon;
          }
          this.walletService.getStats().then(value => {
            if (value != null && +value.mfsPriceInUSD != undefined) {
              this.isCostCoin = true;   
              
              this.paymentBalance[0].costCoin = +value.mfsPriceInUSD;
              this.walletBalance[1].costCoin = +value.mfsPriceInUSD;
              this.paymentBalance[1].costCoin = +value.mfsPriceInUSD;

              this.intervalID = setInterval(this.renewPrices.bind(this), 1000 * 60);
            }
          });
          this.helpInfo.maticPrice
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
              if (value != null) {
                this.maticPrice = value;

                this.walletBalance[2].costCoin = value;
              }
            });
        }
      });
    this.helpInfo.tokenAddress
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x != null) {
          this.walletBalance[0].token = x.stablecoin;
          this.walletBalance[1].token = x.mfs;
          this.paymentBalance[0].token = x.mfs;
          this.paymentBalance[1].token = x.mfsVesting;
          this.paymentBalance[2].token = x.stablecoin;
          this.paymentBalance[3].token = x.energy;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.openChange();
  }

  renewPrices() {
    this.walletService.getStats().then(stats => {
      this.paymentBalance[0].costCoin = +stats.mfsPriceInUSD;
      this.walletBalance[1].costCoin = +stats.mfsPriceInUSD;
      this.paymentBalance[1].costCoin = +stats.mfsPriceInUSD;
    });
  }

  openTransfer() {
    if (!this.isReservedAddress) {
      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: true,
        type: sideNavType.transfer,
        item: this.paymentBalance[2],
      });
    } else {
      window.open(
        environment.innerBalance +
          this.helpInfo.userId.value +
          '&language=' +
          this.translate.currentLang
      );
    }
  }
  openTrade() {
    location.href = environment.dexUrl;
  }

  openSwaphMFSOnMFS() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.swaphMFSOnMFS,
    });
  }

  openHoldMFSWallet() {
    this.helpInfo.isOpenSlideNavSecondary.next({
      isOpen: true,
      type: sideNavType.holdMFSWallet,
    });
  }

  openBuyMFC() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.buy,
    });
  }

  changeCheckbox(event) {
    let status = event.target.checked;
    this.walletService.setDirectPaymentStatus(status).then(
      x => {},
      err => {
        this.directPaymentStatus = status;
        this.cdr.detectChanges();
        this.directPaymentStatus = !status;
        this.cdr.detectChanges();
      }
    );
  }

  async openChange() {
    this.isLoading = true;

    let value = (
      await this.walletService.getMatic(this.helpInfo.walletAddress.value)
    ).toFixed(4);

    this.walletBalance[2].value = value;
    this.walletService.getDirectPaymentStatus().then(x => {
      this.directPaymentStatus = x;
      this.cdr.detectChanges();
    });

    let balance = [];
    balance.push(this.walletService.getBalance());
    balance.push(this.walletService.getBalancesOnPayment(this.helpInfo.userId.value));
    
    Promise.all(balance).then(
      x => {
        console.log('x', x);
        console.log('paymentBalance', paymentBalance);
        // x[0] - основной кошелек
        // x[1] - иннер баланс
        
        this.paymentBalance[0].valuePayment = x[1].mfs;
        this.paymentBalance[0].value = x[0].mfs;
        this.paymentBalance[1].valuePayment = x[1].mfsVesting;
        this.paymentBalance[2].value = x[0].stablecoin;
        this.paymentBalance[2].valuePayment = x[1].stablecoin;
        this.paymentBalance[3].valuePayment = x[1].energy;

        this.walletBalance[0].value = x[0].stablecoin;
        this.walletBalance[1].value = x[0].mfs;
        this.walletBalance[1].valuePayment = x[1].mfs;
        this.walletBalance[3].value = x[0].energy;
        
        this.walletBalance[0].valuePayment = x[1].stablecoin;

        x[1].hMfs.forEach((result, index) => {
          if (+result >= 0.01) {
            this.hMFSBalance[index].value = this.roundDown(result, 2);
            this.lastIndexNotZerohMfsBalance = index;
            this.iNothMFS = false;
          }
        });

        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );

    let chartArray = [];

    this.walletBalance.forEach(element => {
      if (element.token.length > 0) {
        chartArray.push(this.walletService.getBalanceOtherToken(element.token));
      }
    });

    Promise.all(chartArray).then(
      x => {
        x.forEach((result, index) => {
          const indexBalance = this.walletBalance.findIndex(x => x.token === result.token);
          this.walletBalance[indexBalance].value = result.direct;
          // this.walletBalance[index + 2].value = result.direct;
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  openHistory(item, sideNavHistoryType) {
    this.helpInfo.isOpenSlideNavSecondary.next({
      isOpen: true,
      type: item.secondName === 'Vesting' ? sideNavType.walletVesting : sideNavType.walletHistory,
      item: { ...item, ...{ sideNavType: sideNavHistoryType } },
      isReservedAddress: this.isReservedAddress,
    });
  }

  closeSlideNav(isOpen) {
    if (!isOpen && this.isOpenMenu) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: true,
        type: sideNavType.menu,
      });
    }
    if (!isOpen && !this.isOpenMenu) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.wallet,
      });
    }
  }

  disconnectWallet() {
    this.helpInfo.isOpenSlideNavMain.next({
      isOpen: false,
      type: sideNavType.wallet,
    });
    this.walletService._unsubscribeWallet.next();
    this.walletService._unsubscribeWallet.complete();
    this.walletService.disconect();
    this.web3ModalService.disconect();
  }

  copyWallet() {
    this.isCopy = true;
    this.clipboard.copy(this.addressWallet);
    setTimeout(() => {
      this.isCopy = false;
    }, 500);
  }

  copyWalletReservedAddress() {
    this.isCopyReservedAddress = true;
    this.clipboard.copy(this.reservedAddress);
    setTimeout(() => {
      this.isCopyReservedAddress = false;
    }, 500);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    clearInterval(this.intervalID);
    
    // this.helpInfo.walletAddress.next('');
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
}
