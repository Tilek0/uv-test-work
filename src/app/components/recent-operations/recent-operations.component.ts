import { Component, Input, OnInit, SimpleChange } from '@angular/core';
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
import { ethers } from 'ethers';
import { RecentOperationsRow, RecentOperationsType } from './recent-operations.types';
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo } from 'app/auth/helpers';

@Component({
  selector: 'recent-operations',
  templateUrl: './recent-operations.component.html',
  styleUrls: ['./recent-operations.component.scss'],
})
export class RecentOperationsComponent implements OnInit {
  @Input() type: RecentOperationsType;
  @Input() mfsPrice: any;
  @Input() refetch: number;

  rows: RecentOperationsRow[] = [];

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
    // this.helpInfo.userInfo.subscribe(async user => {
    //   if (user != null) {
    //     await this.fetchRows();
    //   }
    // });
  }

  async ngOnChanges(changes: { [property: string]: SimpleChange }) {
    await this.fetchRows()
  }

  async fetchRows() {
    if (this.type === RecentOperationsType.Sell) {
      const resp = await this.walletService.getMyForceSwapOrdersHistory();
      this.rows = resp.items.map<RecentOperationsRow>(x => {
        return {
          id: x.orderId,
          date: new Date(x.createdAt),
          daiAmount: x.amountInUsd,
          mfsAmount: x.amount,
          status: x.type,
          txHash: x.txHash,
          blockExplorerUrl: x.chain.blockExplorerUrl,
        };
      });
    } else if (this.type === RecentOperationsType.Buy) {
      const resp = await this.walletService.getMyForceSwapBuyHistory();
      this.rows = resp.items.map<RecentOperationsRow>(x => {
        return {
          id: null,
          date: new Date(x.createdAt),
          daiAmount: x.amountIn,
          mfsAmount: x.amountOut,
          status: "EXECUTED",
          txHash: x.txHash,
          blockExplorerUrl: x.chain.blockExplorerUrl,
        };
      });
    } else {
      const resp = await this.walletService.getMyForceBuybackHistory();
      if (!resp) {
        return
      }

      this.rows = resp.items.map<RecentOperationsRow>(x => {
        return {
          id: null,
          date: new Date(x.createdAt),
          daiAmount: x.amountOut,
          mfsAmount: x.amountIn,
          status: "EXECUTED",
          txHash: x.txHash,
          blockExplorerUrl: x.chain.blockExplorerUrl,
        };
      });
    }
  }

  shortAccount(v: string, s: number, e?: number): string {
    return v.slice(0, s) + "..." + v.slice(e ? -e : -s);
  }

  copyReferalLink(address): void {
    navigator.clipboard.writeText(address);
  }

  formatEther(v: string): string {
    return ethers.utils.formatEther(v);
  }

  formatEtherDAI(v: string): string {
    return (+this.formatEther(v) * this.mfsPrice).toString();
  }
}
