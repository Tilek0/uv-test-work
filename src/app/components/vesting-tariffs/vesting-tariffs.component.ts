import { Component, Input, OnInit } from '@angular/core';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { WalletService } from 'app/auth/service/wallet.service';
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { VESTING_TARIFFS } from 'localModules/metaforcesdk/types';
import { ethers } from 'ethers';

@Component({
  selector: 'vesting-tariffs',
  templateUrl: './vesting-tariffs.component.html',
  styleUrls: ['./vesting-tariffs.component.scss'],
})
export class VestingTariffsComponent implements OnInit {
  @Input() mfsPrice: any;

  userAddress: string;
  selectedTariff: VESTING_TARIFFS = VESTING_TARIFFS.T3;
  DEFAULT_TARIFF = VESTING_TARIFFS.T3;
  isSmallTariffsAvailable = false;
  isBigTariffsAvailable = false;
  canSelect = true;
  isProcessing = false;
  processingError = [];
  isTariffsFormInactive = true;
  defaultTariff = VESTING_TARIFFS.T3;

  forcecoinBalance = '0';
  vestingBalance = '0';

  vestingPools = [];
  poolsProgress = [];
  vestingFundAmount: number = 0;
  iHavePaidToVestingFund: number = 0;

  userWillReceive = 0;
  fundWillReceive = 0;

  isOpen = false;
  sideNavType = sideNavType;

  private _unsubscribeAll = new Subject();

  constructor(
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService,
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
    this.helpInfo.walletAddress
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(async x => {
          if (x != null && x.length > 0) {
            this.userAddress = x.toLocaleLowerCase();
            // const balances = await this.walletService.getBalancesOnPayment(this.helpInfo.userId.value);
            // this.forcecoinBalance = balances.mfs;
            // this.vestingBalance = balances.mfsVesting;
            // this.isTariffsFormInactive = +this.vestingBalance <= 0;

            this.isProcessing = true;
            await this.reloadState();
            this.isProcessing = false;
          }
        });
  }

  // async getCurrentTariff(): Promise<void> {
  //   try {
  //     const currentTariff = await this.walletService.getMyVestingTariff();
  //     this.selectedTariff = currentTariff.currentTariff;
  //   } catch (error) {
  //     this.processingError.push(error.message);
  //     console.error(error);
  //   } finally {
  //     this.canSelect = this.selectedTariff === this.DEFAULT_TARIFF;
  //   }
  // }

  async isTariffAvailable(): Promise<void> {
    try {
      this.isSmallTariffsAvailable = await this.walletService.isTariffAvailable(VESTING_TARIFFS.T6);
      this.isBigTariffsAvailable = await this.walletService.isTariffAvailable(VESTING_TARIFFS.T5);
    } catch (error) {
      this.processingError.push(error.message);
      console.error(error);
    }
  }

  selectTariff(tariff) {
    this.selectedTariff = tariff;

    if (tariff === VESTING_TARIFFS.T1) {
      this.userWillReceive = +this.vestingBalance * .7;
      this.fundWillReceive = +this.vestingBalance * .3;
    } else if (tariff === VESTING_TARIFFS.T2) {
      this.userWillReceive = +this.vestingBalance * .85;
      this.fundWillReceive = +this.vestingBalance * .15;
    } else if (tariff === VESTING_TARIFFS.T6) {
      this.userWillReceive = +this.vestingBalance * .5;
      this.fundWillReceive = +this.vestingBalance * .5;
    } else {
      this.userWillReceive = 0;
      this.fundWillReceive = 0;
    }
  }

  async submitTariff(): Promise<void> {
    this.isProcessing = true;
    this.processingError = [];
    try {
      await this.walletService.selectVestingTariff(this.selectedTariff);
      await this.reloadState();
    } catch (error) {
      if (error.code !== 'ACTION_REJECTED') {
        this.processingError.push(error.message);
      }
    } finally {
      this.isProcessing = false;
      this.isOpen = false;
    }
  }

  async reloadState() {
    // await this.getCurrentTariff();
    await this.isTariffAvailable();
    await this.fetchVestingPools();
    await this.fetchVestingInfo();
  }

  async fetchVestingPools(): Promise<void> {
    try {
      const tariffAmounts = await this.walletService.getVestingTariffAmounts();
      this.vestingPools = tariffAmounts.map((amount) => {
        return +ethers.utils.formatEther(amount);
      });

      const smallPool = this.vestingPools[VESTING_TARIFFS.T1] + this.vestingPools[VESTING_TARIFFS.T2] + this.vestingPools[VESTING_TARIFFS.T6];
      const bigPool = this.vestingPools[VESTING_TARIFFS.T4] + this.vestingPools[VESTING_TARIFFS.T5];

      if (bigPool === 0) {
        this.poolsProgress[VESTING_TARIFFS.T1] = 0;
        this.poolsProgress[VESTING_TARIFFS.T2] = 0;
        this.poolsProgress[VESTING_TARIFFS.T6] = 0;
      } else {
        this.poolsProgress[VESTING_TARIFFS.T1] =
            this.isSmallTariffsAvailable ? (this.vestingPools[VESTING_TARIFFS.T1] * 100) / bigPool : 100;
        this.poolsProgress[VESTING_TARIFFS.T2] =
            this.isSmallTariffsAvailable ? (this.vestingPools[VESTING_TARIFFS.T2] * 100) / bigPool : 100;
        this.poolsProgress[VESTING_TARIFFS.T6] =
            this.isSmallTariffsAvailable ? (this.vestingPools[VESTING_TARIFFS.T6] * 100) / bigPool : 100;
      }
      this.poolsProgress[VESTING_TARIFFS.T4] =
        this.isBigTariffsAvailable ? (this.vestingPools[VESTING_TARIFFS.T4] * 100) / (smallPool + 128000000) : 100;
      this.poolsProgress[VESTING_TARIFFS.T5] =
        this.isBigTariffsAvailable ? (this.vestingPools[VESTING_TARIFFS.T5] * 100) / (smallPool + 128000000) : 100;

    } catch (error) {
      this.processingError.push(error.message);
      console.error(error);
    }
  }

  async fetchVestingInfo() {
    try {
      const vestingInfo = await this.walletService.fetchVestingInfo();
      this.vestingFundAmount = +ethers.utils.formatEther(vestingInfo.vestingFundAmount);
      this.selectedTariff = vestingInfo.tariff;
      this.iHavePaidToVestingFund = +ethers.utils.formatEther(vestingInfo.iHavePaidToVestingFund);

      this.forcecoinBalance = ethers.utils.formatEther(vestingInfo.mfsAmount);
      this.vestingBalance = ethers.utils.formatEther(vestingInfo.lockedAmount.toString());
      this.isTariffsFormInactive = +this.vestingBalance <= 1;
      // this.canSelect = this.selectedTariff === this.DEFAULT_TARIFF;
      this.canSelect = false;
    } catch (error) {
      this.processingError.push(error.message);
      console.error(error);
    }
  }

  openConfirmModal() {
      this.isOpen = true;
  }

  onSucceed(event: any) {
    this.submitTariff();
  }

  openBuybackMFC() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.buyback,
    });
  }
}
