import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreMenuModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';

import { NavbarModule } from '../../navbar/navbar.module';
import { TranslateModule } from '@ngx-translate/core';
import {TabMenuComponent} from "./tab-menu.component";

@NgModule({
  declarations: [TabMenuComponent],
  imports: [
    CoreMenuModule,
    CoreCommonModule,
    RouterModule,
    NavbarModule,
    TranslateModule,
  ],
  exports: [TabMenuComponent],
})
export class TabMenuModule {}
