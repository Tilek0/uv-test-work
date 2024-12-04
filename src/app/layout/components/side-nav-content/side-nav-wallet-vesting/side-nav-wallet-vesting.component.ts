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
import { VestingInfo, Web3ForceSwapOrder } from 'localModules/metaforcesdk/types';
import { WalletService } from 'app/auth/service/wallet.service';
import { BigNumber, ethers } from "ethers";
import { RecentOperationsType } from 'app/components/recent-operations/recent-operations.types';

@Component({
  selector: 'app-side-nav-wallet-vesting',
  templateUrl: './side-nav-wallet-vesting.component.html',
  styleUrls: ['./side-nav-wallet-vesting.component.scss'],
})
export class SideNavWalletVestingComponent implements OnInit, OnDestroy {
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
  isReservedAddress = false;

  vestingInfo: VestingInfo;
  isLoading = true;
  hasActiveOrder = true;
  refetchRecentOperations = 0;
  mfsPrice = 0;
  recentOperationsType = RecentOperationsType.Sell;

  private _unsubscribeAll = new Subject();

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService,
    private helpInfo: HelpInfo,
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
      .subscribe(async x => {
        if (x.type === sideNavType.walletVesting && x.item !== undefined) {
          this.item = x.item;
          this.isReservedAddress = x.isReservedAddress;
        }
        await this.fetchMFSPrice();
        await this.reloadState();
      });
  }

  closeSlideNav(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.walletVesting,
      });
    }
  }

  closeALLSlideNav(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.walletVesting,
      });
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.menu,
      });
    }
  }

  formatEther(v: string | BigNumber): string {
    return ethers.utils.formatEther(v);
  }

  async fetchMFSPrice() {
    this.mfsPrice = this.roundDown(await this.walletService.calcMFSInUSD('1'));
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  async reloadState() {
    await this.fetchInfo();
    // TODO reload recent operations
    this.refetchRecentOperations++;
  }

  async fetchInfo() {
    this.isLoading = true;
    try {
      this.vestingInfo = await this.walletService.fetchVestingInfo();
      // this.currentOrder = await this.walletService.getMyForceSwapOrder();
      // this.hasActiveOrder = this.currentOrder != null;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  roundDown(value) {
    let trimValue = value;
    if (typeof value === 'number') {
      return value;
    }
    if (typeof value === 'string') {
      trimValue = value.replace(',', '.').substring(0, 10);
    }
    return Math.floor(trimValue * Math.pow(10, 10)) / Math.pow(10, 10);
  }
  
  openBuybackMFC() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.buyback,
    });
  }
}
