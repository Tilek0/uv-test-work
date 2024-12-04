import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';

import { CoreCommonModule } from '@core/common.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';

import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from 'app/components/components.module';
import { SideNavServicesComponent } from './side-nav-services/side-nav-services.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SideNavSocialComponent } from './side-nav-social/side-nav-social.component';
import { SideNavWalletValueComponent } from './side-nav-wallet-value/side-nav-wallet-value.component';
import { SideNavWalletHistoryComponent } from './side-nav-wallet-history/side-nav-wallet-history.component';
import { SideNavWalletVestingComponent } from './side-nav-wallet-vesting/side-nav-wallet-vesting.component';
import { SideNavWalletActionComponent } from './side-nav-wallet-action/side-nav-wallet-action.component';
import { SideNavWalletSellComponent } from './side-nav-wallet-sell/side-nav-wallet-sell.component';
import { SideNavWalletBuybackComponent } from './side-nav-wallet-buyback/side-nav-wallet-buyback.component';
import { SideNavWalletBuybackOfferPriceComponent } from './side-nav-wallet-buyback-offer-price/side-nav-wallet-buyback-offer-price.component';
import { SideNavWalletBuyComponent } from './side-nav-wallet-buy/side-nav-wallet-buy.component';
import { LottieCacheModule, LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SideNavNotificationComponent } from './sid-nav-notification/side-nav-notification.component';
import { SideNavHoldMFSComponent } from './side-nav-hold-mfs/side-nav-hold-mfs.component';
import { SideNavHoldMFSWalletComponent } from './side-nav-hold-mfs-wallet/side-nav-hold-mfs-wallet.component';
import { SideNavSwapHmfsOnMfsComponent } from './side-nav-swap-hmfs-on-mfs/side-nav-swap-hmfs-on-mfs.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    SideNavServicesComponent,
    SideNavMenuComponent,
    SideNavSocialComponent,
    SideNavWalletValueComponent,
    SideNavWalletHistoryComponent,
    SideNavWalletVestingComponent,
    SideNavWalletActionComponent,
    SideNavWalletSellComponent,
    SideNavWalletBuybackComponent,
    SideNavWalletBuybackOfferPriceComponent,
    SideNavWalletBuyComponent,
    SideNavNotificationComponent,
    SideNavHoldMFSComponent,
    SideNavHoldMFSWalletComponent,
    SideNavSwapHmfsOnMfsComponent,
  ],
  imports: [
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot(),
    MatIconModule,
    RouterModule,
    NgbModule,
    CoreCommonModule,
    NavbarModule,
    PerfectScrollbarModule,
    TranslateModule,
    ComponentsModule,
  ],
  providers: [],
  exports: [
    SideNavServicesComponent,
    SideNavMenuComponent,
    SideNavSocialComponent,
    SideNavWalletValueComponent,
    SideNavWalletHistoryComponent,
    SideNavWalletVestingComponent,
    SideNavWalletActionComponent,
    SideNavWalletSellComponent,
    SideNavWalletBuybackComponent,
    SideNavWalletBuybackOfferPriceComponent,
    SideNavWalletBuyComponent,
    SideNavNotificationComponent,
    SideNavHoldMFSComponent,
    SideNavHoldMFSWalletComponent,
    SideNavSwapHmfsOnMfsComponent,
  ],
})
export class SideNavContetnModule {}
