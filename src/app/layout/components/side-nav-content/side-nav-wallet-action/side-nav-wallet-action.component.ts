import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { WalletService } from 'app/auth/service/wallet.service';
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
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SideNavService } from 'app/auth/service';
import { AnimationEvent } from '@angular/animations';
import { SideNavWalletActionAnimations } from './side-nav-wallet-action.animations';
import { AnimationItem, BMCompleteEvent } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import walletToInner from 'app/gif/wallet to inner balance animation.json';
import innerToWallet from 'app/gif/inner balance to wallet animation.json';
@Component({
  selector: 'app-side-nav-wallet-action',
  templateUrl: './side-nav-wallet-action.component.html',
  styleUrls: ['./side-nav-wallet-action.component.scss'],
  animations: SideNavWalletActionAnimations,
})
export class SideNavWalletActionComponent implements OnInit, OnDestroy {
  options: AnimationOptions = {
    animationData: innerToWallet,
    renderer: 'svg',
    loop: 0,
    autoplay: true,
  };

  private _unsubscribeAll = new Subject();
  transferIsInner = true;
  amountTransaction = null;
  amountTransactionTotal = 0;
  isLoading = false;
  isOpen = false;

  item = {
    token: '',
    value: 0,
    name: '',
    secondName: '',
    costCoin: 0,
    changeCoin: 0,
    img: '',
    sideNavType: -1,
    valuePayment: 0,
  };
  image = '';
  sideNavType = sideNavType;
  isVisbleImg = false;
  stateDown;
  stateUp;

  constructor(
    private walletService: WalletService,
    private helpInfo: HelpInfo,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
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
    this.helpInfo.isOpenSlideNavThird.subscribe.bind(this);
  }

  ngOnInit(): void {
    this.helpInfo.isOpenSlideNavThird
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x.type === sideNavType.transfer && x.item !== undefined) {
          this.sideNavService.itemCoin.next( x.item);
          this.sideNavService.isCoinChange.next(false);
          this.item = { ...x.item };
          if (this.item.sideNavType === sideNavType.wallet) {
            this.options = {
              ...this.options, // In case you have other properties that you want to copy
              animationData: walletToInner,
            };

            this.transferIsInner = false;
          } else {
            this.transferIsInner = true;
            this.options = {
              ...this.options, // In case you have other properties that you want to copy
              animationData: innerToWallet,
            };
          }
          this.cdr.detectChanges();
          //  "item.sideNavType === undefined || item.sideNavType === sideNavType.inner"
        }
      });
  }

  over() {
    const direction = 'in';
    this.stateUp = `${direction}-${'bottom'}`;
    this.stateDown = `${direction}-${'top'}`;
  }
  out() {
    const direction = 'out';
    this.stateUp = `${direction}-${'bottom'}`;
    this.stateDown = `${direction}-${'top'}`;
  }

  onDone(event: AnimationEvent) {
    if (event.toState !== null) {
      this.stateUp = event.toState.startsWith('out-') ? null : this.stateUp;
      this.stateDown = event.toState.startsWith('out-') ? null : this.stateDown;
    }
  }

  complete(animationItem: BMCompleteEvent) {}
  animationCreated(animationItem: AnimationItem): void {}

  changeTransfer() {
    this.transferIsInner = !this.transferIsInner;
    this.amountTransaction = null;
    this.amountTransactionTotal = 0;
    if (!this.transferIsInner) {
      this.options = {
        ...this.options,
        animationData: walletToInner,
      };
    } else {
      this.options = {
        ...this.options,
        animationData: innerToWallet,
      };

      this.cdr.detectChanges();
    }
  }

  setMax() {
    this.amountTransactionTotal = this.transferIsInner
      ? +this.item.valuePayment
      : +this.item.value;
    this.amountTransactionTotal = this.roundDown(this.amountTransactionTotal);
    this.amountTransaction = this.amountTransactionTotal;
  }
  roundDown(value) {
    let trimValue = value.toString();
    trimValue = trimValue.replace(',', '.').substring(0, 10);

    return Math.floor(trimValue * Math.pow(10, 10)) / Math.pow(10, 10);
  }

  closeSlideNavAction(isOpen) {
    this.sideNavService.closeSlideNavAction(isOpen);
  }

  closeALLSlideNav(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.walletHistory,
      });
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.menu,
      });
      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: false,
        type: sideNavType.inner,
      });
    }
  }

  transfer(token) {
    if (this.amountTransaction > 0) {
      this.isLoading = true;
      if (!this.transferIsInner) {
        try {
          this.walletService
          .addToPayment(token, this.amountTransactionTotal)
          .then(
            async x => {
              this.amountTransactionTotal = 0;
              this.amountTransaction = null;

              let balance = [];

              balance.push(this.walletService.getBalance());
              balance.push(this.walletService.getBalancesOnPayment(this.helpInfo.userId.value));
              Promise.all(balance).then(
                x => {
                  if (this.item.name === 'HC') {
                    this.item.value = x[0].mfs;
                    this.item.valuePayment = x[1].mfs;
                  } else {
                    this.item.value = x[0].stablecoin;
                    this.item.valuePayment = x[1].stablecoin;
                  }
             
                  this.sideNavService.itemCoin.next( this.item);
                  this.sideNavService.isCoinChange.next(true);
                  this.isLoading = false;
                },
                err => {
                  this.isLoading = false;
                }
              );
            },
            err => {
              this.isLoading = false;
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        this.walletService.claim(token, this.amountTransactionTotal).then(
          async x => {
            this.amountTransactionTotal = 0;
            this.amountTransaction = null;
            this.isLoading = false;
            let balance = [];

            balance.push(this.walletService.getBalance());
            balance.push(
              this.walletService.getBalancesOnPayment(
                this.helpInfo.userId.value
              )
            );
            Promise.all(balance).then(
              x => {
                if (this.item.name === 'HC') {
                  this.item.value = x[0].mfs;
                  this.item.valuePayment = x[1].mfs;
                } else {
                  this.item.value = x[0].stablecoin;
                  this.item.valuePayment = x[1].stablecoin;
                }
               
                this.sideNavService.itemCoin.next( this.item);
                this.sideNavService.isCoinChange.next(true);
                this.isLoading = false;
              },
              err => {
                this.isLoading = false;
              }
            );
          },
          err => {
            this.isLoading = false;
          }
        );
      }
    }
  }

  changeTotal(value) {
    let itemMaxValue = +this.item.valuePayment;
    if (!this.transferIsInner) {
      itemMaxValue = +this.item.value;
    }

    if (value > itemMaxValue || value < 0 || Number.isNaN(value)) {
      this.amountTransaction = -1;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.amountTransaction = this.amountTransactionTotal;
      }, 0.1);

      return;
    }
    this.amountTransaction = value;
    this.amountTransactionTotal = value;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
