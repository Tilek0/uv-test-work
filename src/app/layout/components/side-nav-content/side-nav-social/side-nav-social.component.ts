import { Component, Input, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';

@Component({
  selector: 'app-side-nav-social',
  templateUrl: './side-nav-social.component.html',
  styleUrls: ['./side-nav-social.component.scss'],
})
export class SideNavSocialComponent implements OnInit {
  @Input() childs: any[];

  constructor(
    private helpInfo: HelpInfo,
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

  ngOnInit(): void {}

  closeSlideNavSecondary(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.social,
      });
    }
  }
}
