import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent implements OnInit {
  @Input() currentFilter: any;
  @Input() filters: any;

  @Output() setFilter: EventEmitter<any> = new EventEmitter<any>();

  filterAsArray = [];
  selected = [];
  isShown = false;

  filterElement = null;

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
  }

  ngOnInit(): void {
    this.filterAsArray = Object.values(this.filters);
    this.selected.push(this.currentFilter
      ? this.filters[this.currentFilter]
      : this.filterAsArray.find(filter => filter.default));
  }

  openFilter(event) {
    this.isShown = true;
    console.log('====================');
    console.log(event.composedPath());
    console.log('====================');
    this.filterElement = event.target;

    document.addEventListener( 'click', this.listenToOutsideClick);
  }

  listenToOutsideClick(event) {
    if (!event.composedPath().includes(this.filterElement) ) {
      this.isShown = false;
      this.filterElement = null;
      document.removeEventListener('click', this.listenToOutsideClick);
    }
  }
}
