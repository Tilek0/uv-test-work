import {
  Component, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
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
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-count-controller',
  templateUrl: './count-controller.component.html',
  styleUrls: ['./count-controller.component.scss'],
})
export class CountControllerComponent implements OnInit, OnChanges {
  @Input() bundleSize: number;
  @Input() max: number;
  @Input() name: number;

  @Output() changeBundle: EventEmitter<any> = new EventEmitter<any>();

  faMinus = faMinus;
  faPlus = faPlus;

  MIN_BUNDLE_SIZE = 0;

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

  ngOnInit(): void {};
  ngOnChanges(): void {};

  setMax() {
    this.bundleSize = this.max;
    this.changeBundle.emit({ bundleSize: this.bundleSize });
  }

  keyPressInput(event: any) {
    const pattern = /[0-9]|\./;
    if (
        (event?.target?.value?.length > 17) ||
        (event?.target?.value?.length === 0 && event.key === '.') ||
        (~event?.target?.value.indexOf('.') && event.key === '.') ||
        ((!pattern.test(event.key) && event.key !== 'Backspace' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight'))
    ) {
      event.preventDefault();
      return;
    }
  }

  keyUpInput(event: any) {
    if (event.target.value.trim() == '') {
      return;
    }

    const bundle = +(event.target.value.trim());

    if (!bundle && bundle !== 0) {
      event.target.value = this.MIN_BUNDLE_SIZE;
    } else if (bundle > this.max) {
      event.target.value = this.max;
    } else {
      const tmp = event.target.value.trim().split('.');
      if (tmp && tmp[1] && tmp[1].length > 2) {
        event.target.value = +this.roundDown(bundle.toString(), 2);
      }
    }
  }

  onBundleValueChange(val: any) {
    this.changeBundle.emit({ bundleSize: val });
  }

  changeBundleSize(type) {
    if (this.bundleSize <= this.MIN_BUNDLE_SIZE && type === 'minus') {
      return;
    }
    if (this.bundleSize >= this.max && type === 'plus') {
      return;
    }

    if (type === 'plus' && (this.bundleSize + 1) > this.max) {
      this.changeBundle.emit({ bundleSize: this.max });
    } else if (type === 'minus' && (this.bundleSize - 1) <= this.MIN_BUNDLE_SIZE) {
      this.changeBundle.emit({ bundleSize: this.MIN_BUNDLE_SIZE });
    } else {
      this.changeBundle.emit({ bundleSize: (type === 'plus' ? ++this.bundleSize : --this.bundleSize) });
    }
  }

  onPaste(event) {
    event.preventDefault();
    return;
  }

  roundDown(value, signs) {
    // обрезает строку до signs знаков, чтобы влезло в Number
    // затем округляет в меньшую сторону до signs знаков после запятой
    let trimValue = value;
    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      trimValue = value.replace(',', '.').substring(0, 10);
    }

    return Math.floor(trimValue * Math.pow(10, signs)) / Math.pow(10, signs);
  }
}
