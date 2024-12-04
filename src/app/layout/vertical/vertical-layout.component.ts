import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { CoreConfigService } from '@core/services/config.service';
import { ContentHeaderService } from '@core/services/content-header.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { TranslateService } from '@ngx-translate/core';
import { CoreTranslationService } from '@core/services/translation.service';
import * as _ from 'lodash';

import { locale as english } from './i18n/en';
import { locale as russian } from './i18n/ru';
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
  sideNavControl,
  sideNavType,
} from 'app/auth/helpers';
import { WalletService } from 'app/auth/service/wallet.service';
import { SideNavService } from 'app/auth/service';

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerticalLayoutComponent implements OnInit, OnDestroy {
  coreConfig: any;
  isCollapsed: boolean;
  public contentHeader: any = undefined;
  // Private
  private _unsubscribeAll: Subject<any>;
  public languageOptions: any;
  public selectedLanguage: any;
  sideNavType = sideNavType;
  isOpenSlideNavMain: sideNavControl = {
    isOpen: false,
    type: sideNavType.menu,
  };
  isOpenSlideNavSecondary: sideNavControl = {
    isOpen: false,
    type: sideNavType.social,
  };
  isOpenSlideNavThird: sideNavControl = {
    isOpen: false,
    type: sideNavType.wallet,
  };
  mfsValue = 0;
  daiValue = 0;
  maticValue = 0;
  refetchBalance = 0;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private cdr: ChangeDetectorRef,
    private _location: Location,
    public _translateService: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private sideNavService: SideNavService,
    private walletService: WalletService,
    private _contentHeaderService: ContentHeaderService,
    private helpInfo: HelpInfo
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this.languageOptions = languageList;
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
  ngOnInit(): void {
    this.walletService.isConnectStart();
    // Subscribe to config changes
    this.helpInfo.isOpenSlideNavMain
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(value => {
        if (value.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }

        this.isOpenSlideNavMain = value;
      });
    this.helpInfo.isOpenSlideNavThird
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(value => {
        if (value.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }

        this.isOpenSlideNavThird = value;
      });
    this.helpInfo.isOpenSlideNavSecondary
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(value => {
        if (value.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        this.isOpenSlideNavSecondary = value;
      });
    this.selectedLanguage = this._translateService.currentLang;
    this._translateService.onLangChange.subscribe(x => {
      this.selectedLanguage = x.lang;
    });

    this._contentHeaderService.contentHeader.subscribe(x => {
      if (x.actionButton) {
        this.contentHeader = x;
        this.cdr.detectChanges();
      } else {
        this.contentHeader = undefined;
      }
    });

    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.isCollapsed = config.layout.menu.collapsed;
        this.coreConfig = config;
      });
    this.helpInfo.userInfo.subscribe(user => {
      if (user != null) {
        this.getBalance();
        setInterval(() => {
          this.getBalance();
        }, 60000);
      }
    });
  }

  openSlideNav() {
    this.helpInfo.isOpenSlideNavMain.next({
      isOpen: true,
      type: sideNavType.notification,
      item: { isOpenMenu: false },
    });
  }

  toggleSidebar(key): void {
    this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
  }
  backPage() {
    this._location.back();
  }
  closedStart(type) {
    if (this.helpInfo[type].value.isOpen) {
      if (this.helpInfo.isOpenSlideNavMain.value.isOpen) {
        this.helpInfo.isOpenSlideNavMain.next({
          isOpen: false,
          type: sideNavType.menu,
        });
      }
      if (this.helpInfo.isOpenSlideNavSecondary.value.isOpen) {
        this.helpInfo.isOpenSlideNavSecondary.next({
          isOpen: false,
          type: sideNavType.menu,
        });
      }
      if (this.helpInfo.isOpenSlideNavThird.value.isOpen) {
        this.helpInfo.isOpenSlideNavThird.next({
          isOpen: false,
          type: sideNavType.inner,
        });
      }
    }
  }

  openSlideNavMain() {
    this.helpInfo.isOpenSlideNavMain.next({
      isOpen: true,
      type: sideNavType.menu,
    });
  }

  openSlideNavSecondary() {
    this.helpInfo.isOpenSlideNavSecondary.next({
      isOpen: true,
      type: sideNavType.social,
    });
  }

  async getBalance() {
    this.maticValue = +(
      await this.walletService.getMatic(this.helpInfo.walletAddress.value)
    ).toFixed(2);
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

  toggleSidebarCollapsible(): void {
    // Get the current menu state

    if (this.isCollapsed) {
      this._coreConfigService.setConfig(
        { layout: { menu: { collapsed: false } } },
        { emitEvent: true }
      );
    } else {
      this._coreConfigService.setConfig(
        { layout: { menu: { collapsed: true } } },
        { emitEvent: true }
      );
    }
  }

  onBuybackSucceed(event): void {
    this.refetchBalance++;
  }

  setLanguage(language): void {
    // Set the selected language for the navbar on change

    this.selectedLanguage = language;

    // Use the selected language id for translations
    this._translateService.use(language);

    this._coreConfigService.setConfig(
      { app: { appLanguage: language } },
      { emitEvent: true }
    );
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
