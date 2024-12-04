import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
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
import { WalletService } from 'app/auth/service/wallet.service';
import { ethers } from 'ethers';
import { RecentOperationsType } from 'app/components/recent-operations/recent-operations.types';
import { MfsBuybackOrderRequest } from 'localModules/metaforcesdk/types';

@Component({
  selector: 'app-side-nav-wallet-buyback-offer-price',
  templateUrl: './side-nav-wallet-buyback-offer-price.component.html',
  styleUrls: ['./side-nav-wallet-buyback-offer-price.component.scss'],
})
export class SideNavWalletBuybackOfferPriceComponent
  implements OnInit, OnDestroy
{
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  isOpen = false;
  isImportantOpened = true;

  mfsBalance = 0;
  daiBalance = 0;

  mfsValue = 0;
  daiValue = 0;

  isSellDisabled = true;
  isProcessing = false;
  processingError: string | null = null;

  recentOperationsType = RecentOperationsType.Buyback;
  refetchRecentOperations = 0;

  daiAvailable = 0;
  isModalOpen = false;
  
  buybackOrderRequest: MfsBuybackOrderRequest = null;

  buybackOfferPrices = [ 0.25, 0.5, 0.75, 1.0, 1.25 ];
  mfsPrice = 0.25;

  constructor(
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private walletService: WalletService,
    private coreTranslationService: CoreTranslationService
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
        await this.fetchMyMfsBuybackOrderRequests();
        // await this.fetchBuyBackPoolBalance();
        this.refetchRecentOperations++;
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
        type: sideNavType.buyback,
      });
    }
  }

  toggleImportant(): void {
    this.isImportantOpened = !this.isImportantOpened;
  }

  setMaxMFS(): void {
    this.onMFSValueChange(this.mfsBalance.toString());
  }

  async fetchMFSPrice() {
    // TODO
    // this.mfsPrice = this.roundDown(await this.walletService.calcMFSInUSD('1'));
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
      const availableMfsAmount = ethers.utils
        .parseEther(x[1].mfs)
        .add(ethers.utils.parseEther(x[1].mfsVesting));
      this.mfsBalance = this.roundDown(
        ethers.utils.formatEther(availableMfsAmount)
      );
      this.daiBalance += this.roundDown(x[1].stablecoin);
    });
  }

  // async fetchBuyBackPoolBalance() {
  //   const balance = await this.walletService.getBuyBackPoolBalance();
  //   console.log(
  //     'buy back pool balance',
  //     balance.toString(),
  //     ethers.utils.formatEther(balance.toString())
  //   );
  //   this.daiAvailable = this.roundDown(
  //     +ethers.utils.formatEther(balance.toString())
  //   );
  // }

  async fetchMyMfsBuybackOrderRequests() {
    const items = await this.walletService.getMyMfsBuybackOrderRequests();
    if (items.length > 0) {
      this.setBuybackOrderRequest(items[0]);
    }
  }
  
  async setBuybackOrderRequest(item: MfsBuybackOrderRequest) {
    this.buybackOrderRequest = item;
    this.mfsPrice = +ethers.utils.formatEther(item.price);
    this.mfsValue = +ethers.utils.formatEther(item.amount);
    this.daiValue = this.mfsValue * this.mfsPrice;
    this.daiValue = this.roundDown(this.daiValue);
  }

  async onSellClicked(): Promise<void> {
    this.isProcessing = true;
    try {
      const res = await this.walletService.createMfsBuybackOrderRequest(
        ethers.utils.parseEther(this.mfsValue.toString()),
        ethers.utils.parseEther(this.mfsPrice.toString())
      );
      this.setBuybackOrderRequest(res);
      // await this.walletService.getBuyback(this.mfsValue.toString());
      // await this.getBalance();
      // await this.fetchBuyBackPoolBalance();
      this.refetchRecentOperations++;
      this.onSucceedEvent.emit();
    } catch (error) {
      this.processingError = error.message;
      console.error(error);
    } finally {
      this.isProcessing = false;
      this.isModalOpen = false;
    }
  }

  onMFSValueChange(event: any): void {
    this.mfsValue = this.roundDown(+event);
    if (this.mfsValue > this.mfsBalance) {
      this.mfsValue = this.roundDown(this.mfsBalance);
    }

    if (this.mfsValue < 1) {
      this.mfsValue = 1;
    }

    this.daiValue = this.mfsValue * this.mfsPrice;
    this.daiValue = this.roundDown(this.daiValue);

    this.isSellDisabled = !(this.mfsValue > 0); //  && this.daiValue > 0);
  }

  keyPressInput(event: any) {
    const pattern = /[0-9]|\./;
    if (
      event?.target?.value?.length > 17 ||
      (event?.target?.value?.length === 0 && event.key === '.') ||
      (~event?.target?.value.indexOf('.') && event.key === '.') ||
      (!pattern.test(event.key) &&
        event.key !== 'Backspace' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight')
    ) {
      event.preventDefault();
      return;
    }
  }

  keyUpInput(event: any) {
    if (
      this.mfsValue !== 0 &&
      this.mfsValue <= 1 &&
      event.target.value !== ''
    ) {
      this.mfsValue = 1;
      this.daiValue = this.roundDown(this.mfsValue * this.mfsPrice);
      event.target.value =
        event.target.name === 'inputMFS' ? this.mfsValue : this.daiValue;
    }
    if (this.mfsValue !== event.target.value) {
      event.target.value = this.mfsValue;
    }
  }

  onPriceValueChanged() {
    if (this.mfsValue < 1) {
      this.mfsValue = 1;
    }
    this.daiValue = this.roundDown(this.mfsValue * this.mfsPrice);
    this.isSellDisabled = !(this.mfsValue > 0);
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

  openConfirmModal() {
    this.isModalOpen = true;
  }

  onSucceed(event: any) {
    this.onSellClicked();
  }

  openBuyBackOfferPrice() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.buyback,
    });
  }

  setOfferPrice(price) {
    this.mfsPrice = price;
    this.onPriceValueChanged();
  }

  ngOnDestroy(): void {}
}
