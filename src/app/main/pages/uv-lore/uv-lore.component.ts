import { Component, OnInit } from '@angular/core';
import { ContentHeaderService } from '@core/services/content-header.service';

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

@Component({
  selector: 'app-uv-lore',
  templateUrl: './uv-lore.component.html',
  styleUrls: ['./uv-lore.component.scss'],
})
export class UvLoreComponent implements OnInit {
  isLoader: boolean = false;
  isCollapsed: boolean = false;
  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _contentHeaderService: ContentHeaderService,
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
    this._contentHeaderService.contentHeader.next({
      actionButton: true,
      breadcrumb: {
        type: 'chevron',
        links: [
          {
            name: 'BACK',
            isLink: true,
            link: '/pages/tier-list',
            isUrl: true,
          },
          // {
          //   name: 'FORCE_SYSTEMS',
          //   isLink: true,
          //   link: 'https://meta-force.space/forcesystems',
          //   isUrl: true,
          // },
          // {
          //   name: 'UNITEVERSE_DELTA',
          //   isLink: true,
          //   link: '/pages/tier-list',
          //   isUrl: true,
          // },
          // {
          //   name: 'LORE',
          //   isLink: false,
          //   link: '',
          //   isUrl: false,
          // },
        ],
      },
    });
  }
}
