import { Component, OnInit } from '@angular/core';
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
import { HelpInfo, sideNavType } from 'app/auth/helpers';

@Component({
  selector: 'app-navbar-services',
  templateUrl: './navbar-services.component.html',
  styleUrls: ['./navbar-services.component.scss'],
})
export class NavbarServicesComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private helpInfo: HelpInfo
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

  openNav() {
    this.helpInfo.isOpenSlideNavMain.next({
      isOpen: true,
      type: sideNavType.services,
    });
  }
}
