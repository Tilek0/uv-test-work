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
import { ForceSwapBuyHistoryResponse, ForceSwapBuyHistoryRow, ForceSwapOrderChange, Web3ForceSwapOrder } from 'localModules/metaforcesdk/types';
import { RecentOperationsType } from 'app/components/recent-operations/recent-operations.types';

@Component({
  selector: 'app-side-nav-wallet-buy',
  templateUrl: './side-nav-wallet-buy.component.html',
  styleUrls: ['./side-nav-wallet-buy.component.scss'],
})
export class SideNavWalletBuyComponent implements OnInit, OnDestroy {
  private _unsubscribeAll = new Subject();
  isOpen = false;
  isImportantOpened = true;
  sideNavType = sideNavType;
  currentOrder: Web3ForceSwapOrder | null = null;
  historyItems: ForceSwapBuyHistoryRow[] = [];
  hasActiveOrder = false;
  mfsPrice = 0;

  mfsBalance = 0;
  daiBalance = 0;

  mfsValue = 20;
  daiValue = 0;

  isBuyDisabled = false;
  isProcessing = false;
  processingError: string | null = null;

  recentOperationsType = RecentOperationsType.Buy;
  refetchRecentOperations = 0;

  constructor(
    private helpInfo: HelpInfo,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
    private walletService: WalletService,
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
    this.helpInfo.userInfo.subscribe(async user => {
      if (user != null) {
        await this.fetchMFSPrice();
        await this.getBalance();
        this.refetchRecentOperations++;
      }
    });
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

  setMaxDAI(): void {
    this.onDAIValueChange(this.daiBalance.toString());
  }
  async onBuyClicked(): Promise<void> {
    this.isProcessing = true;
    try {
      await this.walletService.buyMfsFromForceSwap(this.mfsValue.toString());
      this.refetchRecentOperations++;
    } catch (error) {
      this.processingError = error.message;
      console.error(error);
    } finally {
      this.isProcessing = false;
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

      this.onMFSValueChange(this.mfsValue.toString());
    });
  }

  async getHistory() {
    const res = await this.walletService.getMyForceSwapBuyHistory();
    this.historyItems = res?.items || [];
  }

  onMFSValueChange(value: string): void {
    this.daiValue = this.roundDown(value) * this.mfsPrice;
    this.daiValue = this.roundDown(this.daiValue);
    this.isBuyDisabled = !(this.roundDown(value) >= 20 && this.daiValue > 0) || (this.daiValue > this.daiBalance);

    this.mfsValue = this.roundDown(value);
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
    this.isBuyDisabled = !(this.mfsValue >= 20 && this.daiValue > 0);
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
}
