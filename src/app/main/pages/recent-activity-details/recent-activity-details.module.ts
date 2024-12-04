import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ComponentsModule } from 'app/components/components.module';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { TranslateModule } from '@ngx-translate/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RecentActivityDetailsComponent } from './recent-activity-details.component';

const routes = [
  {
    path: '',
    component: RecentActivityDetailsComponent,
    data: { animation: 'recent-activity-details' },
  },
];

@NgModule({
  declarations: [RecentActivityDetailsComponent],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ComponentsModule,
    InfiniteScrollModule,
    TranslateModule,
    NgApexchartsModule,
    MatTooltipModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
  ],

  providers: [],
  exports: [],
})
export class RecentActivityDetailsModule {}
