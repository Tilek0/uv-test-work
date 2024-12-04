import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ComponentsModule } from 'app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ConnectWalletComponent } from './connect-wallet/connect-wallet.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes = [
  {
    path: 'lore',
    loadChildren: () => import('./uv-lore/uv-lore.module').then(m => m.UvLoreModule),
  },
  {
    path: 'uniteverse',
    loadChildren: () =>
      import('./united-verce/united-verce.module').then(m => m.UnitedVerceModule),
    data: { animation: 'uniteverse' },
  },
  {
    path: 'recent-activity-details',
    loadChildren: () =>
      import('./recent-activity-details/recent-activity-details.module').then(m => m.RecentActivityDetailsModule),
    data: { animation: 'recent-activity-details' },
  },
  {
    path: 'holichain',
    loadChildren: () =>
      import('./force-coin/force-coin.module').then(m => m.ForceCoinModule),
    data: { animation: 'forcecoin' },
  },
  {
    path: 'forcecoin',
    redirectTo: 'holichain',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
  },
  {
    path: 'tiers',
    loadChildren: () => import('./tiers/tiers.module').then(m => m.TiersModule),
  },
  {
    path: 'processing',
    loadChildren: () => import('./processing/processing.module').then(m => m.ProcessingModule),
  },
  {
    path: 'tier-list',
    redirectTo: 'overview',
    pathMatch: 'full',
    // loadChildren: () =>
    //   import('./level-lists-new/level-lists.module').then(m => m.LevelListsModule),
    // data: { animation: 'tier-list' },
  },
];

@NgModule({
  declarations: [ConnectWalletComponent],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    MiscellaneousModule,
    ComponentsModule,
    InfiniteScrollModule,
    TranslateModule,
    NgApexchartsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],

  providers: [],
  exports: [ConnectWalletComponent],
})
export class PagesModule {}
