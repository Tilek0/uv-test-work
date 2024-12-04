import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'delta-short-info',
  templateUrl: './delta-short-info.component.html',
  styleUrls: ['./delta-short-info.component.scss'],
})
export class DeltaShortInfoComponent implements OnInit {
  @Input() item: any;
  @Input() isLoader: boolean;
  // @Input() readyNumberLevel: number;

  day = 0;
  hours = 0;
  minutes = 0;
  //  seconds = 0;
  isHideBlock = false;
  intervalId: any;
  timeMs = 0;
  progressPath = 'M 0 0';
  progressPercent = '0';

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private router: Router
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item.timeStampEndPack > 0) {
      this.setTimer();
    }
    this.intervalId = setInterval(() => {
      if (this.item.timeStampEndPack > 0) {
        this.setTimer();
      } else {
        clearInterval(this.intervalId);
      }
    }, 60000);
  }

  setTimer() {
    let currentDate = new Date();
    let resultMs = 0;
    if (this.item.levelNumber === 0) {
      resultMs = this.item.timeStampEndPack;
    } else {
      resultMs = this.item.timeStampEndPack.getTime() - currentDate.getTime();
    }

    this.timeMs = resultMs;

    if (resultMs > 0) {
      this.day = Math.floor(resultMs / 86400000);
      this.hours = Math.floor((resultMs - this.day * 86400000) / 3600000);
      this.minutes = Math.floor(
        (resultMs - (this.hours * 3600000 + this.day * 86400000)) / 60000
      );
    } else {
      if (resultMs > -86400000 * 3) {
        let timeExtension = 86400000 * 3 - Math.abs(resultMs);
        this.day = Math.floor(timeExtension / 86400000);
        this.hours = Math.floor(
          (timeExtension - this.day * 86400000) / 3600000
        );
        this.minutes = Math.floor(
          (timeExtension - (this.hours * 3600000 + this.day * 86400000)) / 60000
        );
      }
    }

    // this.progressPath = 'M 0 0 v -125 A 125 125 1 0 1 1.5308084989341916e-14 125 z';
    let progress = resultMs / 5184000000; // 60 дней в мс
    console.log('progress', progress)
    if (progress > 1) {
        progress = 1;
    }
    this.progressPercent = (progress * 100).toLocaleString();
    this.updateProgressPath(progress);
  }

  showTier(levelNumber) {
    if (!this.isHideBlock) {
      this.router.navigate(['/pages/uniteverse'], {
        queryParams: { levelNumber: levelNumber },
      });
    }
  }

  clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  updateProgressPath(percent: number) {
    var angle = this.clamp(percent * 360, 0, 359.99999);
    var paddedRadius = 125;
    var radians = (angle * Math.PI / 180);
    var x = Math.sin(radians) * paddedRadius;
    var y = Math.cos(radians) * -paddedRadius;
    var mid = (angle > 180) ? 1 : 0;
    this.progressPath = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, paddedRadius.toString()) +
      mid + ' 1 ' +
      x + ' ' +
      y + ' z';
  }
}
