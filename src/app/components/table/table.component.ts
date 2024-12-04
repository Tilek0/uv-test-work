import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() changeTable: boolean;
  @Input() displayedColumns: string[] = [];
  @Input() data: any[] = [];
  columnsToDisplay: string[] = [];

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private clipboard: Clipboard
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
    this.columnsToDisplay = this.displayedColumns.slice();
  }

  copy(value, item, flag) {
    item[flag] = true;

    this.clipboard.copy(value);
    setTimeout(() => {
      item[flag] = false;
    }, 500);
  }
}
