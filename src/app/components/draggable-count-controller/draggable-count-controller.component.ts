import {
  Component, EventEmitter,
  Input, OnChanges,
  OnInit, Output, ElementRef, ViewChild
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
  selector: 'draggable-count-controller',
  templateUrl: './draggable-count-controller.component.html',
  styleUrls: ['./draggable-count-controller.component.scss'],
})
export class DraggableCountControllerComponent implements OnInit, OnChanges {
  @Input() current: any;
  @Input() max: any;

  @Output() changeBundle: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('currentProgress') currentProgress;

  MIN_BUNDLE_SIZE = 0.0;

  width = 0;
  total = 0;
  minWidth = 0;

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private ref: ElementRef,
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
    const calcWidth = (this.current / this.max) * 100;
    if (calcWidth >= 100) {
      this.width = 100;
    } else if (calcWidth < 0) {
      this.width = 0;
    } else {
      this.width = calcWidth;
    }
    this.total = this.ref?.nativeElement?.offsetWidth || 0;
    this.minWidth = (this.MIN_BUNDLE_SIZE / this.max) * 100;
  };

  ngOnChanges(): void {
    const calcWidth = (this.current / this.max) * 100;
    if (calcWidth >= 100) {
      this.width = 100;
    } else if (calcWidth < this.minWidth) {
      this.width = this.minWidth;
    } else {
      this.width = calcWidth;
    }
  };

  onBundleValueChange(val: any) {
    this.changeBundle.emit({ bundleSize: val });
  }

  startDrag(evt) {
    let startWidth = this.currentProgress?.nativeElement?.offsetWidth || 0;
    let startPos = evt.x + startWidth;
    let stopPos = evt.x + startWidth;
    let track = 0;

    const onmousemove = (evt) => {
      stopPos = evt.x + startWidth;
      track = (stopPos - startPos) + startWidth;
      const tmpWidth = (track / this.total) * 100;

      if (tmpWidth > 100) {
        this.width = 100;
      } else if (tmpWidth < this.minWidth) {
        this.width = this.minWidth;
      } else {
        this.width = tmpWidth;
      }

      const tmpBundleSize = +((this.max * this.width) / 100).toFixed(2);
      let bundleSize;
      if (tmpBundleSize > this.max) {
        bundleSize = this.max;
      } else if (tmpBundleSize < this.MIN_BUNDLE_SIZE) {
        bundleSize = this.MIN_BUNDLE_SIZE;
      } else {
        bundleSize = tmpBundleSize;
      }

      this.onBundleValueChange(bundleSize);
    }

    const stopDrag = (evt) => {
      document.removeEventListener('mousemove', onmousemove);
      document.removeEventListener('mouseup', stopDrag);

      document.removeEventListener('touchmove', onmousemove);
      document.removeEventListener('touchend', stopDrag);
    }

    document.addEventListener('mousemove', onmousemove);
    document.addEventListener('mouseup', stopDrag);

    document.addEventListener('touchmove', onmousemove);
    document.addEventListener('touchend', stopDrag);
  }
}
