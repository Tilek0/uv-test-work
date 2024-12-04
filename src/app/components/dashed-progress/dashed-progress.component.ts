import {
  Component,
  Input, OnChanges,
  OnInit,
} from '@angular/core';
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

@Component({
  selector: 'app-dashed-progress',
  templateUrl: './dashed-progress.component.html',
  styleUrls: ['./dashed-progress.component.scss'],
})
export class DashedProgressComponent implements OnInit, OnChanges {
  @Input() ready: any;
  @Input() total: any;
  @Input() isCompleted: any;

  totalDashes = 24;
  lastActiveDash = 0;

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
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
  };

  ngOnInit(): void {
    this.lastActiveDash = Math.ceil((this.ready * this.totalDashes) / this.total);
    if (this.lastActiveDash === 0 && this.ready > 0) {
      this.lastActiveDash = 1;
    }
    if (this.ready > this.total) {
      this.lastActiveDash = this.totalDashes;
    }
  };

  ngOnChanges(): void {
    if (this.lastActiveDash === 0 && this.ready > 0) {
      this.lastActiveDash = 1;
    }
    if (this.ready > this.total) {
      this.lastActiveDash = this.totalDashes;
    }
  }

  getDashess() {
    return new Array(this.totalDashes);
  }
}
