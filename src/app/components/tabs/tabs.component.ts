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
  ViewEncapsulation, Input, Output, EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input() items: any;
  @Input() currentTab: string;

  @Output() setFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _coreConfigService: CoreConfigService,
    private _coreMenuService: CoreMenuService,
    private _coreSidebarService: CoreSidebarService,
    private _router: Router,
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

  onClickTab(tab) {
    this.setFilter.emit({ currentTab: tab.value });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
