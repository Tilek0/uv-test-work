import {
  Component, EventEmitter,
  Input,
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

@Component({
  selector: 'app-expandable-chip',
  templateUrl: './expandable-chip.component.html',
  styleUrls: ['./expandable-chip.component.scss'],
})
export class ExpandableChip implements OnInit {
  @Input() item: any;
  @Output() chipAction: EventEmitter<any> = new EventEmitter<any>();

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

  clickChipUpgrade(event) {
    event.stopPropagation();
    this.chipAction.emit({ item: this.item, operationType: 'upgrade' });
  }
}
