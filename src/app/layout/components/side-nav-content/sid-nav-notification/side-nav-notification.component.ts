import { Component, OnDestroy, OnInit } from '@angular/core';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { TranslateService } from '@ngx-translate/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-side-nav-notification',
  templateUrl: './side-nav-notification.component.html',
  styleUrls: ['./side-nav-notification.component.scss'],
})
export class SideNavNotificationComponent implements OnInit, OnDestroy {
  isOpenMenu = false;
  private _unsubscribeAll = new Subject();
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
      indonesia
    );
  }

  ngOnInit(): void {
    this.helpInfo.isOpenSlideNavMain
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(async (x: any) => {
        if (x.type === sideNavType.notification) {
          if (x.item.isOpenMenu != undefined) {
            this.isOpenMenu = x.item.isOpenMenu;
          }
        }
      });
  }

  closeSlideNavMain(isOpen) {
    if (!isOpen && this.isOpenMenu) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: true,
        type: sideNavType.menu,
      });
    }
    if (!isOpen && !this.isOpenMenu) {
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.notification,
      });
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
