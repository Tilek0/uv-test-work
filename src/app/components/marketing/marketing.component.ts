import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';

import { CircleMap } from './circleMap.js';
import { locale as english } from './i18n/en';
import { locale as russian } from './i18n/ru';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { WalletService } from 'app/auth/service/wallet.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss'],
})
export class MarketingComponent implements OnInit, OnChanges {
  marketingClass: any;
  @Input() changeZoom: number = 0;
  @Input() data: any[];
  @Input() changeMarketing = false;
  @Input() currentLevel: number = -1;
  @Input() getUserUnfo: any;
  @Output() changeMarketingEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService
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
    // this.walletService.getUsersInfoInMarketingBinaryTree(levelStar,levelEnd)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.marketingClass === undefined) {
      this.marketingClass = CircleMap.getInstance('marketing', 'canvas');
      this.marketingClass.onTooltip = user => {
        this.getUserUnfo(user.userId).then(userData => {
          for (let field in userData) {
            user[field] = userData[field];
          }
          user.ForceID = '';
          user.loaded = true;
          this.walletService.getMyInfo(userData.walletAddress).subscribe(
            result => {
              if (
                result.status &&
                (result.status === 404 || result.status === 'error')
              ) {
                this.marketingClass.updateTooltip(user);

                return;
              }

              user.ForceID = result.users.name + '';
              this.marketingClass.updateTooltip(user);
            },
            error => {
              this.marketingClass.updateTooltip(user);
            }
          );
        });
      };
      this.marketingClass.loadUserAvatar = user => {
        this.walletService.getAvatar(user.userId).then(url => {
          user.avatar = url;
          this.marketingClass.loadImage(url);
        });
      };
      this.marketingClass.loadNextLevel = levelNumber => {
        this.marketingClass.nextLevelLoading = true;

        this.walletService
          .getUsersInfoInMarketingBinaryTree(levelNumber, levelNumber)
          .then(result => {
            if (this.currentLevel === 0) {
              this.marketingClass.appendDataLevelsBinary(result);
              this.marketingClass.nextLevelLoading = false;
            }
          });
      };
    }

    if (this.data.length > 0 && this.changeMarketing) {
      if (this.currentLevel === 0)
        this.marketingClass.setFromDataLevelsBinary(this.data);
      else {
        this.marketingClass.setFromDataLevels(this.data);
      }
      setTimeout(() => {
        this.changeMarketingEvent.emit(false);
      }, 500);
    }
    if (this.changeZoom < 0) {
      this.marketingClass.zoomOut();
    }
    if (this.changeZoom > 0) {
      this.marketingClass.zoomIn();
    }
  }
}
