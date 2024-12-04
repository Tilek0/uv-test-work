import { Component, OnInit } from '@angular/core';
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
import { ContentHeaderService } from '@core/services/content-header.service';
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo, recentActivityDetailItem } from 'app/auth/helpers';
import moment from 'moment';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-recent-activity-details',
  templateUrl: './recent-activity-details.component.html',
  styleUrls: ['./recent-activity-details.component.scss'],
})
export class RecentActivityDetailsComponent implements OnInit {
  pageNumberRecentActivity = 0;
  isFinalListRecentActivity = false;
  countElement = 15;
  isLoading = false;
  displayedColumns = [
    'TYPE',
    'FORCE_ID',
    'WALLET',
    'PROGRAM',
    'DATE',
    'AMOUNT',
  ];
  data: recentActivityDetailItem[] = [];

  moment = moment;

  // img:'assets/images/User.png',

  constructor(
    private walletService: WalletService,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _contentHeaderService: ContentHeaderService,
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
    this.isLoading = true;
    this.helpInfo.userInfo.subscribe(user => {
      if (user != null) {
        this.getRecentActivityDetails();
      }
    });

    this._contentHeaderService.contentHeader.next({
      actionButton: true,
      breadcrumb: {
        type: 'chevron',
        links: [
          {
            name: 'FORCE_SYSTEMS',
            isLink: true,
            link: environment.forceSystemsUrl,
            isUrl: true,
          },
          {
            name: 'UNITEVERSE_DELTA',
            isLink: true,
            link: '/pages/tier-list',
            isUrl: false,
          },
          {
            name: 'RECENT_ACTIVITY',
            isLink: false,
            link: '',
            isUrl: false,
          },
        ],
      },
    });
  }

  getRecentActivityDetails() {
    const UVv2UpgradeDate = this.walletService.getUVv2UpgradeDate(); 
    this.walletService
      .getRecentActivity(this.countElement, this.pageNumberRecentActivity)
      .then(
        result => {
          result = result.filter(element => element != null);
          if (result.length < this.countElement) {
            this.isFinalListRecentActivity = true;
          }

          let newData: recentActivityDetailItem[] = [];

          result.forEach(async element => {
            let data: recentActivityDetailItem = {
              type: {},
              force_id: {},
              date: {},
            } as recentActivityDetailItem;
            if (
              element.name === 'TierActivated' ||
              element.name === 'TierExtended'
            ) {
              data.type.url = '/assets/images/recentActivity/upOrandge.png';
              data.type.level = +element.value;
              data.type.textPath1 = 'TABLE.TIER';
              data.type.textPath2 = 'TABLE.EXTENSION';
              data.amount = '-';
              data.amount = '-' + +(+element.amount).toFixed(2) + ' HC';
              if (element.name.toLowerCase().includes('activated')) {
                data.type.textPath2 = 'TABLE.ACTIVATION';
                let activatedCurrency = 'DAI';
                if (new Date(element.date) >= UVv2UpgradeDate) {
                  activatedCurrency = 'HC';
                }
                data.amount = '-' + +(+element.amount).toFixed(2) + ' ' + activatedCurrency;
              }
              data.force_id.isMy = true;
            }
            if (element.name === 'GetedForceCoin') {
              data.type.url = '/assets/images/recentActivity/yellowPlus.png';
              data.type.textPath1 = 'TABLE.GETTING_FORCECOIN';
              data.amount = +(+element.amount).toFixed(2) + ' HC';
              data.force_id.isMy = true;
            }
            if (
              element.name === 'NewReferral' ||
              element.name === 'DeltaActivation'
            ) {
              data.type.url = '/assets/images/recentActivity/greenPlus.png';
              if (element.name === 'NewReferral') {
                data.type.textPath1 = 'TABLE.NEW_REFERRAL';
              } else {
                data.type.textPath1 = 'TABLE.DELTA_ACTIVATION';
              }
              data.amount = '-';
              data.force_id.isMy = false;
            }
            if (
              element.name === 'ReferralRevenueMFSForActivatedTier' ||
              element.name === 'ReferralRevenueStableForActivatedTier' ||
              element.name === 'ReferralRevenueMFSForRenewTier' ||
              element.name === 'ReferralRevenueStableForRenewTier' ||
              element.name === 'MarketingRevenueMFSForActivatedTier' ||
              element.name === 'MarketingRevenueStableForActivatedTier' ||
              element.name === 'MarketingRevenueMFSForRenewTier' ||
              element.name === 'MarketingRevenueStableForRenewTier'
            ) {
              data.type.url = '/assets/images/recentActivity/greenArrow.png';
              data.type.level = +element.value;
              data.type.textPath1 = 'TABLE.TIER';
              data.type.textPath2 = 'TABLE.EXTENSION';
              data.amount = +(+element.amount).toFixed(2) + ' HC';
              data.type.description = 'TABLE.MARKETING';
              if (element.name.toLowerCase().includes('activated')) {
                data.type.textPath2 = 'TABLE.ACTIVATION';
              }
              if (element.name.toLowerCase().includes('stable')) {
                data.amount = +(+element.amount).toFixed(2) + ' HC';
              }
              if (element.name.toLowerCase().includes('referral')) {
                data.type.description = 'TABLE.REFERRAL';
              }
              data.force_id.isMy = false;
            }
            if (
              element.name === 'ReferralLostMoney' ||
              element.name === 'MarketingLostMoney'
            ) {
              data.type.url = '/assets/images/recentActivity/greyArrow.png';
              data.type.textPath1 = 'TABLE.LOST_PROFIT';
              data.amount = +(+element.amount).toFixed(2) + ' HC';
              data.type.description = 'TABLE.MARKETING';
              if (element.name.toLowerCase().includes('referral')) {
                data.type.description = 'TABLE.REFERRAL';
              }
              data.force_id.isMy = false;
            }

            data.wallet = '';
            if (!data.force_id.isMy) {
              data.force_id.avatar = 'assets/images/User.png';

              this.walletService.getUserInfoOther(element.userId).then(x => {
                this.walletService.getMyInfo(x.address).subscribe(result => {
                  if (
                    result.status &&
                    (result.status === 404 || result.status === 'error')
                  )
                    return;
                  data.force_id.id = result.users.name + '';
                });
                data.wallet = x.address;
              });
              this.walletService
                .getDirectReferalUserInfo(element.userId)
                .then(userInfo => {
                  this.helpInfo.getImage(userInfo.avatar).then(
                    x => {
                      data.force_id.avatar = userInfo.avatar;
                    },
                    err => {}
                  );

                  data.force_id.nickName = userInfo.alias;
                });
            }
            data.type.name = element.name;

            if (
              this.helpInfo.unitedVerseContractsAddresses.value.includes(
                element.contract.toLowerCase()
              )
            ) {
              data.program = 'Uniteverse Delta';
            } else {
              data.program = 'Referral';
            }

            data.date.date = this.moment(element.date).format('DD.MM.YYYY');
            data.date.time = this.moment(element.date).format('HH:mm');
            data.isCopyId = false;
            data.isCopyWallet = false;
            newData.push(data);
          });

          this.data = this.data.concat(newData);
          this.isLoading = false;
        },
        err => {
          this.isLoading = false;
        }
      );
  }

  more() {
    this.isLoading = true;
    if (!this.isFinalListRecentActivity) {
      this.pageNumberRecentActivity += 1;
      this.getRecentActivityDetails();
    } else {
      this.isLoading = false;
    }
  }
}
