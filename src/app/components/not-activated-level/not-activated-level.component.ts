import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
@Component({
  selector: 'app-not-activated-level',
  templateUrl: './not-activated-level.component.html',
  styleUrls: ['./not-activated-level.component.scss'],
})
export class NotActivatedLevelComponent implements OnInit {
  @Input() level: any;
  @Input() isLoading = false;
  @Output() activePage: EventEmitter<any> = new EventEmitter<any>();
  constructor(
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
  activate() {
    this.activePage.emit(this.level);
  }
}
