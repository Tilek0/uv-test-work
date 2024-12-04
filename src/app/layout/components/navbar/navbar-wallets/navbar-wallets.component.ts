import { Component, Input, OnInit } from '@angular/core';
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
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-wallets',
  templateUrl: './navbar-wallets.component.html',
  styleUrls: ['./navbar-wallets.component.scss'],
})
export class NavbarWalletsComponent implements OnInit {
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

  @Input() isSmallMenu = false;

  ngOnInit(): void {}

  openSlideNav() {
    if (!this.isSmallMenu) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: true,
        type: sideNavType.wallet,
        item: { isOpenMenu: false },
      });
    } else {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: true,
        type: sideNavType.wallet,
        item: { isOpenMenu: true },
      });
    }
  }
}
