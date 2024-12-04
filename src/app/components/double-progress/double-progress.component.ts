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
  selector: 'app-double-progress',
  templateUrl: './double-progress.component.html',
  styleUrls: ['./double-progress.component.scss'],
})
export class DoubleProgressComponent implements OnInit, OnChanges {
  @Input() ready: any;
  @Input() readyMax: any;
  @Input() total: any;
  @Input() type: any;

  slotsTotal = 3;

  progress = [0, 0, 0];
  subprogress = [0, 0, 0];

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
    if (this.total === this.ready) {
      this.progress = [100, 100, 100];

    } else {
      const maxProgressInSlot = this.total / this.slotsTotal;
      const progressUnit = ~~(this.ready / maxProgressInSlot);
      const progressRest = this.ready % maxProgressInSlot;

      this.progress = this.progress.map((val, i) => {
        if (progressUnit >= i + 1) {
          return 100;
        } else if (progressUnit + 1 == i + 1 && progressRest > 0) {
          return (progressRest / maxProgressInSlot) * 100;
        } else {
          return 0;
        }
      });
    }

    if (this.readyMax && this.total === this.readyMax) {
      this.subprogress = [100, 100, 100];
    } else {
      const maxSubprogressInSlot = this.total / this.slotsTotal;
      const subprogressUnit = ~~(this.readyMax / maxSubprogressInSlot);
      const subprogressRest = this.readyMax % maxSubprogressInSlot;

      this.subprogress = this.subprogress.map((val, i) => {
        if (subprogressUnit >= i + 1) {
          return 100;
        } else if (subprogressUnit + 1 == i + 1) {
          return (subprogressRest / maxSubprogressInSlot) * 100;
        } else {
          return 0;
        }
      });
    }
  };

  ngOnChanges(): void {
  }

  getSlots() {
    return new Array(this.slotsTotal);
  }
}
