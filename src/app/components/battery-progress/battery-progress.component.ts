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
  selector: 'battery-progress',
  templateUrl: './battery-progress.component.html',
  styleUrls: ['./battery-progress.component.scss'],
})
export class BatteryProgressComponent implements OnInit, OnChanges {
  @Input() ready: any;
  @Input() readyMax: any;
  @Input() total: any;
  @Input() readyTotal: any;
  @Input() expanded: any;
  @Input() type: any;
  @Input() status: any;

  progress = 0;
  subprogress = 0;
  capacity = 0;

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

    // console.log('####################');
    // console.log('ready: ', this.ready);
    // console.log('readyMax: ', this.readyMax);
    // console.log('total: ', this.total);
    // console.log('expanded: ', this.expanded);
    // console.log('####################');
    //
    //
    //
    if (this.expanded == this.total) {
      this.capacity = 100;
    } else if (this.expanded == 0 || !this.expanded) {
      this.capacity = 0;
    } else {
      this.capacity = (this.expanded / this.total) * 100;
    }

    this.progress = (this.ready / this.readyTotal) * 100;
    this.subprogress = (this.readyMax / this.readyTotal) * 100;
  };

  ngOnChanges(): void {
    const tmpSubProg = (this.readyMax / this.readyTotal) * 100;
    this.subprogress = tmpSubProg > this.capacity ? this.capacity : (this.readyMax / this.readyTotal) * 100;
  }
}
