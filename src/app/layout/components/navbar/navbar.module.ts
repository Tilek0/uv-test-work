import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';

import { CoreCommonModule } from '@core/common.module';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';

import { NavbarWalletsComponent } from './navbar-wallets/navbar-wallets.component';

import { TranslateModule } from '@ngx-translate/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ComponentsModule } from 'app/components/components.module';
import { NavbarServicesComponent } from './navbar-services/navbar-services.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarWalletsComponent,
    NavbarServicesComponent,
  ],
  imports: [
    RouterModule,
    NgbModule,
    CoreCommonModule,
    PerfectScrollbarModule,
    CoreTouchspinModule,
    TranslateModule,
    ClipboardModule,
    ComponentsModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  exports: [NavbarComponent, NavbarWalletsComponent, NavbarServicesComponent],
})
export class NavbarModule {}
