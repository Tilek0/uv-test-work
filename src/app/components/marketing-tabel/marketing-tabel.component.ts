import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo } from 'app/auth/helpers';
@Component({
  selector: 'app-marketing-tabel',
  templateUrl: './marketing-tabel.component.html',
  styleUrls: ['./marketing-tabel.component.scss'],
})
export class MarketingTabelComponent implements OnInit, OnChanges {
  @Input() currentLevel: number = -1;
  @Input() getUserUnfo: any;
 

  arrayOrbit = [];

  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService,
    private helpInfo: HelpInfo
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
    // this.walletService.getAvatar(userId)
    // this.walletService.getUsersInfoInMarketingBinaryTree(levelStar,levelEnd)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentLevel === 0) {
      this.arrayOrbit = [];
      for (let index = 1; index < 8; index++) {
        this.arrayOrbit.push({
          isLoading: false,
          isOpen: false,
          isLodingForceID: false,
          levelOrbit: index,
          referals: [],
        });
      }
    } else {
      this.arrayOrbit = [];
      for (let index = 1; index < 6; index++) {
        this.arrayOrbit.push({
          isLoading: false,
          isOpen: false,
          isLodingForceID: false,
          levelOrbit: index,
          referals: [],
        });
      }
    }
  }

  isOpen(orbitReferal) {
    if (!orbitReferal.isOpen) {
      orbitReferal.isLoading = true;

      if (this.currentLevel === 0) {
        this.walletService
          .getUsersInfoInMarketingBinaryTree(
            orbitReferal.levelOrbit,
            orbitReferal.levelOrbit
          )
          .then(result => {
            this.isLoadingInfo(orbitReferal, result);
          });
      } else {
        this.walletService
          .getUsersInfoInMarketingLevelTree(
            this.currentLevel,
            orbitReferal.levelOrbit,
            orbitReferal.levelOrbit
          )
          .then(result => {
            this.isLoadingInfo(orbitReferal, result);
          });
      }
    } else {
      orbitReferal.isOpen = false;
    }
  }

  isLoadingInfo(orbitReferal, result) {
    let arrayPromis = [];
    orbitReferal.isLodingForceID = true;
    orbitReferal.referals = result;

    if (orbitReferal.referals.length > 0) {
      orbitReferal.referals.forEach((referal, index) => {
        this.getUserUnfo(referal.id).then(
          referal => {
            orbitReferal.referals[index].userInfo = referal;
            orbitReferal.referals[index].id = '';

            this.walletService
              .getMyInfo(referal.walletAddress)
              .subscribe(result => {
                orbitReferal.isLodingForceID = false;
                if (
                  result.status &&
                  (result.status === 404 || result.status === 'error')
                )
                  return;

                orbitReferal.referals[index].id = result.users.name + '';
              });
          },
          err => {
            orbitReferal.isLodingForceID = false;
          }
        );

        this.walletService.getAvatar(referal.id).then(result => {
          this.helpInfo.getImage(result).then(
            x => {
              referal.avatar = result;
            },
            err => {}
          );
        });
      });
    }
    orbitReferal.isLoading = false;
    orbitReferal.isOpen = true;
  }
}
