import { Component, ViewEncapsulation } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from './i18n/en';
import { locale as russian } from './i18n/ru';

@Component({
  selector: 'core-block-ui',
  templateUrl: './core-block-ui.component.html',
  styleUrls: ['./core-block-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CoreBlockUiComponent {
  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService
  ) {
    this.coreTranslationService.translate(russian, english);
  }
}
