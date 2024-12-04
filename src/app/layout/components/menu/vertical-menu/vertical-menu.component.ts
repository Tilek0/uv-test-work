import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
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
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { Subject } from 'rxjs';
import { take, takeUntil, filter } from 'rxjs/operators';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { CoreConfigService } from '@core/services/config.service';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo } from 'app/auth/helpers';
import { environment } from 'environments/environment';

@Component({
  selector: 'vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerticalMenuComponent implements OnInit, OnDestroy {
  coreConfig: any;
  menu: any;
  isCopy = false;
  isCopyForceId = false;
  isCollapsed: boolean;
  isScrolled: boolean = false;
  myInfo: any = {};

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _coreConfigService: CoreConfigService,
    private _coreMenuService: CoreMenuService,
    private _coreSidebarService: CoreSidebarService,
    private _router: Router,
    private walletService: WalletService,
    private helpInfo: HelpInfo,
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
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  @ViewChild(PerfectScrollbarDirective, { static: false })
  directiveRef?: PerfectScrollbarDirective;

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */
  ngOnInit(): void {
    // Subscribe config change
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

    this.isCollapsed =
      this._coreSidebarService.getSidebarRegistry('menu').collapsed;

    // Close the menu on router NavigationEnd (Required for small screen to close the menu on select)
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        if (this._coreSidebarService.getSidebarRegistry('menu')) {
          this._coreSidebarService.getSidebarRegistry('menu').close();
        }
      });

    // scroll to active on navigation end
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        setTimeout(() => {
          this.directiveRef.scrollToElement('.navigation .active', -180, 500);
        });
      });

    // Get current menu
    this._coreMenuService.onMenuChanged
      .pipe(
        filter(value => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this.menu = this._coreMenuService.getCurrentMenu();
      });
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  copyReferalLink() {
    if (this.myInfo.users.name) {
      this.isCopy = true;

      this.clipboard.copy(environment.referralUrl + this.myInfo.users.name);
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
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Sidebar scroll set isScrolled as true
   */
  onSidebarScroll(): void {
    if (this.directiveRef.position(true).y > 3) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  /**
   * Toggle sidebar expanded status
   */
  toggleSidebar(): void {
    this._coreSidebarService.getSidebarRegistry('menu').toggleOpen();
  }

  /**
   * Toggle sidebar collapsed status
   */
  toggleSidebarCollapsible(): void {
    // Get the current menu state
    this._coreConfigService
      .getConfig()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.isCollapsed = config.layout.menu.collapsed;
      });

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
}
