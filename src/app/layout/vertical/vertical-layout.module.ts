import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule } from '@core/components';

import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { ContentModule } from 'app/layout/components/content/content.module';
import { MenuModule } from 'app/layout/components/menu/menu.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';

import { VerticalLayoutComponent } from 'app/layout/vertical/vertical-layout.component';
import { ContentHeaderModule } from '../components/content-header/content-header.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbModule } from '../components/content-header/breadcrumb/breadcrumb.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavContetnModule } from '../components/side-nav-content/side-nav-contetn.module';

@NgModule({
  declarations: [VerticalLayoutComponent],
  imports: [
    RouterModule,
    MatSidenavModule,
    SideNavContetnModule,
    CoreCommonModule,
    CoreSidebarModule,
    NavbarModule,
    MenuModule,
    ContentModule,
    FooterModule,
    ContentHeaderModule,
    NgbModule,
    TranslateModule,
    BreadcrumbModule,
  ],
  exports: [VerticalLayoutComponent],
})
export class VerticalLayoutModule {}
