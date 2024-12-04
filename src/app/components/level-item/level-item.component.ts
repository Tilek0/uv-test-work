import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
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
  selector: 'app-level-item',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss'],
})
export class LevelItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item: any;
  @Input() isLoader: boolean;
  @Input() readyNumberLevel: number;

  @Output() changePack: EventEmitter<any> = new EventEmitter<any>();
  day = 0;
  hours = 0;
  minutes = 0;
  //  seconds = 0;
  isHideBlock = false;
  intervalId: any;
  timeMs = 0;
  faCircleInfo = faCircleInfo;

  constructor(
    private breakpointObserver: BreakpointObserver,
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
    this.breakpointObserver
      .observe(['(max-width: 576px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.isHideBlock = true;
        } else {
          this.isHideBlock = false;
        }
      });
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
  }

  showTier(levelNumber) {
    if (!this.isHideBlock) {
      this.router.navigate(['/pages/uniteverse'], {
        queryParams: { levelNumber: levelNumber },
      });
    }
  }

  clickPackActivate(event) {
    event.stopPropagation();
    this.changePack.emit({ item: this.item, isActivated: true });
  }

  clickPackExtand(event) {
    event.stopPropagation();
    this.changePack.emit({ item: this.item, isActivated: false });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
