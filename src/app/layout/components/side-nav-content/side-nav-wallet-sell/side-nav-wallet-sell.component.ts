import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
import { SideNavService } from 'app/auth/service';
import { WalletService } from 'app/auth/service/wallet.service';
import { ForceSwapOrderChange, Web3ForceSwapOrder } from 'localModules/metaforcesdk/types';
import { ethers } from 'ethers';
import { RecentOperationsType } from 'app/components/recent-operations/recent-operations.types';

@Component({
  selector: 'app-side-nav-wallet-sell',
  templateUrl: './side-nav-wallet-sell.component.html',
  styleUrls: ['./side-nav-wallet-sell.component.scss'],
})
export class SideNavWalletSellComponent implements OnInit, OnDestroy {
  private _unsubscribeAll = new Subject();
  isOpen = false;
  isImportantOpened = true;
  sideNavType = sideNavType;
  currentOrder: Web3ForceSwapOrder | null = null;
  orderChanges: ForceSwapOrderChange[] = [];
  hasActiveOrder = false;
  mfsPrice = 0;

  mfsBalance = 0;
  daiBalance = 0;

  mfsValue = 0;
  daiValue = 0;

  isOrderStateLoading = true;
  isSellDisabled = true;
  isProcessing = false;
  processingError: string | null = null;
  queueOrdersCount: number = 100;

  recentOperationsType = RecentOperationsType.Sell;
  refetchRecentOperations = 0;

  constructor(
    private helpInfo: HelpInfo,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
    private walletService: WalletService,
    private coreTranslationService: CoreTranslationService,
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
    this.helpInfo.userInfo.subscribe(async user => {
      if (user != null) {
        await this.fetchMFSPrice();
        await this.getBalance()
        await this.reloadOrderState();
      }
    });
  }

  backSlideNav() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: false,
      type: sideNavType.sell,
    });
  }

  closeALLSlideNav(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.menu,
      });
      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: false,
        type: sideNavType.sell,
      });
    }
  }

  toggleOpen(e): void {
    e.preventDefault();
    // this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleImportant(): void {
    this.isImportantOpened = !this.isImportantOpened;
  }

  async onCancelClicked(): Promise<void> {
    this.isProcessing = true;
    try {
      await this.walletService
      .cancelForceSwapOrder();

      await this.reloadOrderState();
    } catch (error) {
      this.processingError = error.message;
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }
  setMaxMFS(): void {
    this.onMFSValueChange(this.mfsBalance.toString());
  }
  async onSellClicked(): Promise<void> {
    this.isProcessing = true;
    try {
      await this.walletService.createForceSwapOrder(this.mfsValue.toString());
      await this.getBalance();
      await this.reloadOrderState();
    } catch (error) {
      this.processingError = error.message;
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }

  async reloadOrderState() {
    await this.getMyOrder();
    // TODO reload recent operations
    this.refetchRecentOperations++;
    await this.fetchQueueOrdersCount();
  }

  async getMyOrder() {
    this.isOrderStateLoading = true;
    try {
      this.currentOrder = await this.walletService.getMyForceSwapOrder();
      this.hasActiveOrder = this.currentOrder != null;
    } catch (error) {
      console.error(error);
    } finally {
      this.isOrderStateLoading = false;
    }
  }

  async fetchMFSPrice() {
    this.mfsPrice = this.roundDown(await this.walletService.calcMFSInUSD('1'));
    this.onMFSValueChange(this.mfsValue.toString());
  }

  async getBalance() {
    let array = [
      this.walletService.getBalance(),
      this.walletService.getBalancesOnPayment(this.helpInfo.userId.value),
    ];
    Promise.all(array).then(x => {
      this.daiBalance = 0;
      this.daiBalance += this.roundDown(x[0].stablecoin);
      this.mfsBalance = this.roundDown(x[1].mfs);
      this.daiBalance += this.roundDown(x[1].stablecoin);
    });
  }

  async fetchQueueOrdersCount() {
    this.queueOrdersCount = await this.walletService.getForceSwapOrdersCount();
  }

  onMFSValueChange(value: string): void {
    this.mfsValue = this.roundDown(value);
    if (this.mfsValue > this.mfsBalance) {
      this.mfsValue = this.roundDown(this.mfsBalance);
    }
    if (this.mfsValue <= 0) {
      this.mfsValue = 1;
    }
    this.daiValue = this.mfsValue * this.mfsPrice;
    this.daiValue = this.roundDown(this.daiValue);
    if (this.mfsValue > 0 && this.daiValue > 0) {
      this.isSellDisabled = false;
    }
  }

  keyPressInput(event: any) {
    const pattern = /[0-9]|\./;
    if (
        (event?.target?.value?.length > 17) ||
        (event?.target?.value?.length === 0 && event.key === '.') ||
        (~event?.target?.value.indexOf('.') && event.key === '.') ||
        (!pattern.test(event.key))
    ) {
      event.preventDefault();
      return;
    }
  }

  onDAIValueChange(value: string): void {
    this.daiValue = this.roundDown(value);
    if (this.daiValue < 0) {
      this.daiValue = 0;
    }

    this.mfsValue = this.roundDown(this.daiValue) / this.mfsPrice;
    this.mfsValue = this.roundDown(this.mfsValue);
    if (this.mfsValue > 0 && this.daiValue > 0) {
      this.isSellDisabled = false;
    }
  }

  formatEther(v: string): string {
    return ethers.utils.formatEther(v);
  }

  roundDown(value) {
    // обрезает строку до 10 знаков, чтобы влезло в Number
    // затем округляет в меньшую сторону до 10 знаков после запятой
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
