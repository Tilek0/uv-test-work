import { Component, OnInit } from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import {
  HelpInfo,
  languageList,
  otherServiceList,
  serviceList,
  sideNavType,
} from 'app/auth/helpers';
import { TranslateService } from '@ngx-translate/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { WalletService } from 'app/auth/service/wallet.service';
import { menu } from 'app/menu/menu';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss'],
})
export class SideNavMenuComponent implements OnInit {
  coreConfig: any;
  myInfo: any = {};
  private _unsubscribeAll: Subject<any> = new Subject();
  mfsValue = 0;
  daiValue = 0;
  maticValue = 0;
  menu = menu;
  isOpen = false;
  isCopy = false;
  isCopyForceId = false;
  serviceList = serviceList;
  otherserviceList = otherServiceList;
  languageOptions = languageList;
  public selectedLanguage: any;

  constructor(
    private _coreConfigService: CoreConfigService,
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService,
    private clipboard: Clipboard
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
    this.selectedLanguage = this.translate.currentLang;
    this.translate.onLangChange.subscribe(x => {
      this.selectedLanguage = x.lang;
    });
    this.helpInfo.walletAddress
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x => {
        if (x && x.length > 0) {
          this.walletService.getMyInfo(x).subscribe(result => {
            if (
              result.status &&
              (result.status === 404 || result.status === 'error')
            )
              return;

            this.myInfo = result;
          });
        }
      });

    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.coreConfig = config;
      });
    this.helpInfo.userInfo.subscribe(user => {
      if (user != null) {
        this.getBalance();
      }
    });
  }

  openSlideNav() {
    this.helpInfo.isOpenSlideNavMain.next({
      isOpen: true,
      type: sideNavType.notification,
      item: { isOpenMenu: true },
    });
  }

  async getBalance() {
    this.maticValue = +(
      await this.walletService.getMatic(this.helpInfo.walletAddress.value)
    ).toFixed(1);
    let array = [
      this.walletService.getBalance(),
      this.walletService.getBalancesOnPayment(this.helpInfo.userId.value),
    ];
    Promise.all(array).then(x => {
      this.daiValue = 0;
      this.mfsValue = 0;
      this.daiValue += +x[0].stablecoin;
      this.mfsValue += +x[0].mfs;
      this.mfsValue += +x[1].mfs;
      this.daiValue += +x[1].stablecoin;
    });
  }

  openSlideNavSecondary(child) {
    this.helpInfo.isOpenSlideNavSecondary.next({
      isOpen: true,
      type: sideNavType.social,
      childs: child,
    });
  }

  closeSlideNavMain(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.menu,
      });
    }
  }

  setLanguage(language): void {
    // Set the selected language for the navbar on change

    this.selectedLanguage = language;

    // Use the selected language id for translations
    this.translate.use(language);

    this._coreConfigService.setConfig(
      { app: { appLanguage: language } },
      { emitEvent: true }
    );
  }

  copyReferalLink() {
    if (this.myInfo.users.name) {
      this.isCopy = true;

      this.clipboard.copy(
        environment.referralUrl + this.myInfo.users.name
      );
      setTimeout(() => {
        this.isCopy = false;
      }, 500);
    }
  }
  copyForceId() {
    if (this.myInfo.users.name) {
      this.isCopyForceId = true;

      this.clipboard.copy(this.myInfo.users.name);
      setTimeout(() => {
        this.isCopyForceId = false;
      }, 500);
    }
  }
}
