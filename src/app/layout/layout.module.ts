import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { CustomBreakPointsProvider } from 'app/layout/custom-breakpoints';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  imports: [
    FlexLayoutModule.withConfig({ disableDefaultBps: true }),
    VerticalLayoutModule,
    NavbarModule,
    TranslateModule,
  ],
  providers: [CustomBreakPointsProvider],
  exports: [VerticalLayoutModule],
  declarations: [
   
  ],
})
export class LayoutModule {}
