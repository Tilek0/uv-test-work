import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
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
import { Router } from '@angular/router';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-level-item-new',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss'],
})
export class LevelItemComponentNEW implements OnInit, OnChanges, OnDestroy {
  @Input() item: any;
  @Input() lastActiveLevelNumber: any;
  @Input() isLoader: boolean;
  @Input() isUserDataLoaded: boolean;
 

  @Output() changePack: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeDiscount: EventEmitter<any> = new EventEmitter<any>();

  day = 0;
  hours = 0;
  minutes = 0;
  intervalId: any;
  timeMs = 0;
  faCircleInfo = faCircleInfo;
  canExtend = false;
  canActivate = false;
  pictureClass = {};
  discount = 0.2;
  extendStatus = false;
  math = Math
  showExtendTime = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private router: Router,
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
    const className = `-ak-${this.item.levelNumber}`;
    this.pictureClass[className] = true;

    if (this.item.levelNumber <= this.lastActiveLevelNumber + 1) {
      this.canActivate = true;
    }

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
    const currentDate = new Date();
    const resultMs = this.item.levelNumber === 0
        ? this.item.timeStampEndPack
        : this.item.timeStampEndPack.getTime() - currentDate.getTime();

    if (this.item.levelNumber <= this.lastActiveLevelNumber + 1) {
      this.canActivate = true;
    }

    this.timeMs = resultMs;

    if (this.item.isActive) {
      if (resultMs > 0) {
        this.day = Math.floor(resultMs / 86400000);
        this.hours = Math.floor((resultMs - this.day * 86400000) / 3600000);
        this.minutes = Math.floor(
            (resultMs - (this.hours * 3600000 + this.day * 86400000)) / 60000
        );
        this.canExtend = true;
      } else if (resultMs > -86400000 * 3) {
        let timeExtension = 86400000 * 3 - Math.abs(resultMs);
        this.day = Math.floor(timeExtension / 86400000);
        this.hours = Math.floor(
            (timeExtension - this.day * 86400000) / 3600000
        );
        this.minutes = Math.floor(
            (timeExtension - (this.hours * 3600000 + this.day * 86400000)) / 60000
        );
        this.canExtend = true;
        this.extendStatus = true;
      }
    }

    if (!this.canActivate && this.canExtend) {
      this.discount = 0.21;
    }
  }

  showTier(levelNumber) {
    this.router.navigate(['/pages/uniteverse'], {
      queryParams: { levelNumber: levelNumber },
    });
  }

  clickPackExtand(event) {
    event.stopPropagation();
    this.changePack.emit({ item: this.item, isActivate: false });
  }
  clickPackActivate(event) {
    event.stopPropagation();
    this.changePack.emit({ item: this.item, isActivate: true });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  mouseenterExtend(event): void {
    if (this.item.isActive && !this.canExtend)
      this.showExtendTime = true;
  }
  mouseleaveExtend(event): void {
    this.showExtendTime = false;
  }
}
