import {Component, OnInit, Input, ChangeDetectorRef, OnChanges} from '@angular/core';
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
// Breadcrumb component interface
export interface Breadcrumb {
  type?: string;
  alignment?: string;
  links?: Array<{
    name: string;
    isLink: boolean;
    link?: string;
  }>;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  // input variable
  @Input() breadcrumb: Breadcrumb;

  back = null;

  constructor(
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
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
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // concatenate default properties with passed properties
    this.breadcrumb = this.breadcrumb;
    this.back = this.breadcrumb.links[this.breadcrumb.links.length - 2];
    this.cdr.detectChanges();
  }

  ngOnChanges(): void {
    this.back = this.breadcrumb.links[this.breadcrumb.links.length - 2];
  }
}
