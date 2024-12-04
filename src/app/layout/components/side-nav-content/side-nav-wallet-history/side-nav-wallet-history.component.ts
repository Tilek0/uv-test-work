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
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import moment from 'moment';
import { environment } from 'environments/environment';
import { SideNavService } from 'app/auth/service';
import { WalletService } from 'app/auth/service/wallet.service';

@Component({
  selector: 'app-side-nav-wallet-history',
  templateUrl: './side-nav-wallet-history.component.html',
  styleUrls: ['./side-nav-wallet-history.component.scss'],
})
export class SideNavWalletHistoryComponent implements OnInit, OnDestroy {
  moment = moment;
  item = {
    token: '',
    value: 0,
    name: '',
    secondName: '',
    costCoin: 0,
    changeCoin: 0,
    img: '',
    sideNavType: sideNavType.inner,
    valuePayment: 0,
  };

  sideNavType = sideNavType;

  historyList = [
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'wallet',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'wallet',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'wallet',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'wallet',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
    {
      type: 'inner',
      data: Date.now(),
      value: 5,
    },
  ];
  isReservedAddress = false;

  private _unsubscribeAll = new Subject();

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private helpInfo: HelpInfo,
    private walletService: WalletService,
   
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
    this.helpInfo.isOpenSlideNavSecondary
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x.type === sideNavType.walletHistory && x.item !== undefined) {
          this.item = x.item;
          this.isReservedAddress = x.isReservedAddress;
        }
      });

      this.sideNavService.isCoinChange.subscribe( x=> {
        if (this.sideNavService.itemCoin.value.name) {
          this.item = this.sideNavService.itemCoin.value
        }
      })
  }

  // ???
  getBalance() {
    let balance = [];
    balance.push(this.walletService.getBalance());
    balance.push(this.walletService.getBalancesOnPayment(this.helpInfo.userId.value));
    
    Promise.all(balance).then(x => { });
  }

  openTransfer() {
    if (!this.isReservedAddress) {
      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: true,
        type: sideNavType.transfer,
        item: this.item,
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

  closeSlideNav(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.walletHistory,
      });
    }
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
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
