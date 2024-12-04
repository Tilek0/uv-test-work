import { TranslateService } from '@ngx-translate/core';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ContentHeaderService } from '@core/services/content-header.service';
import { HelpInfo, recentActivityItem, userDetail } from 'app/auth/helpers';
import { LoadmoreDatabase } from 'app/auth/service/loadmoreDatabase.service';
import { WalletService } from 'app/auth/service/wallet.service';
import { UserInfo } from 'localModules/metaforcesdk/types';
import { CoreTranslationService } from '@core/services/translation.service';
import { ActivatedRoute } from '@angular/router';
import { locale as english } from './i18n/en';
import { locale as russian } from './i18n/ru';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import moment from 'moment';
import { CoreConfigService } from '@core/services/config.service';

@Component({
  selector: 'app-united-verce',
  templateUrl: './united-verce.component.html',
  styleUrls: ['./united-verce.component.scss'],
})
export class UnitedVerceComponent implements OnInit, AfterContentInit {
  typeTabs = 0;
  radioModel = 0;
  radioModelForTabel = 0;
  chartModel = 'w';
  treeArray = [];

  levelLists = [];
  isActivated = false;
  changeTreeArray = false;
  userId = -1;
  pageNumberRecentActivity = 0;
  isFinalListRecentActivity = false;
  isHiddenChart = true;
  isInfo = false;
  isLoader = false;
  isChangeResentActivity = false;
  isTreeLoader = false;
  daiArray = [];
  mfsArray = [];
  buyLevel = 1;
  lostValue = '0';
  changeMarketing = false;
  marketingArray: any = [];
  balancesOnPayment = { mfs: '0', stablecoin: '0' };
  directReferalUser: any = { level: 0 };
  changeChart = false;
  zoom = 0;
  pageSize = 5;
  isOpen = false;
  currenItem: any;
  lastActiveLevelNumber = 0;

  isCollapsed: boolean;
  filterChart = {
    d: '1 day',
    w: '1 week',
    m: '1 month',
    '3m': '3 month',
    '6m': '6 month',
    y: '1 year',
  };
  user: any = {
    level: -1,
  };
  countElement = 20;
  moment = moment;
  resents = [];

  constructor(
    private walletService: WalletService,
    private _contentHeaderService: ContentHeaderService,
    private helpInfo: HelpInfo,
    private loadmoreDatabase: LoadmoreDatabase,
    public translate: TranslateService,
    private route: ActivatedRoute,
    private coreTranslationService: CoreTranslationService,
    private _coreConfigService: CoreConfigService
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
    this.getUserDetailInfo = this.getUserDetailInfo.bind(this);
  }

  ngOnInit(): void {
    const currentDate = new Date();

    this.route.queryParams.subscribe(params => {
      if (params['levelNumber']) {
        this.radioModel = +params['levelNumber'];
      }
    });

    this.helpInfo.userInfo.subscribe(user => {
      if (user != null && this.levelLists.length === 0) {
        // if (user != null ) {

        if (user.level > 0) {
          this.buyLevel = user.level + 1;
        }

        for (let index = 0; index < 9; index++) {
          // let mfs =
          //   index === 0
          //     ? +this.helpInfo.stats.value.firstPackPriceInMFS
          //     : +(this.levelLists[index - 1].costInMFS * 2);
          // this.levelLists.push({
          //   levelNumber: index + 1,
          //   isActive: false,
          //   costInDAI: +mfs * +this.helpInfo.stats.value.mfsPriceInUSD,
          //   costInMFS: mfs,
          // });
          let dai =
            index === 0
              ? +this.helpInfo.stats.value.firstPackPriceInUSD
              : +(this.levelLists[index - 1].costInDAI * 2);
          this.levelLists.push({
            levelNumber: index + 1,
            isActive: false,
            costInDAI: dai, // +mfs * +this.helpInfo.stats.value.mfsPriceInUSD,
            costInMFS: dai / +this.helpInfo.stats.value.mfsPriceInUSD,
          });
        }

        this.walletService.getLevelPack().then(x => {
          let isChange = false;
          x.forEach((element, index) => {
            if (!element.isActive && !isChange) {
              this.buyLevel = index + 1;
              isChange = true;
            }

            this.levelLists[index].isActive = element.isActive;
            if ((!element.isActive || index + 1 === x.length) && this.lastActiveLevelNumber == 0) {
              this.lastActiveLevelNumber = index + 1;
            }
          });
        });

        this.walletService.getUserId().then(id => {
          this.userId = id;
          let chartArray = [
            this.walletService.getRevenueDAI(),
            this.walletService.getRevenueMFS(),
          ];
          Promise.all(chartArray).then(x => {
            this.balancesOnPayment.stablecoin = x[0][0];
            this.balancesOnPayment.mfs = x[1][0];
          });

          this.walletService.getDirectReferalUserInfo(id).then(x => {
            let result = x;

            this.directReferalUser = {
              ...result,
              id: +result.userId,
              tier: this.helpInfo.userInfo.value.level,
            };
            this.isLoader = true;
            this.marketingArrayDate(this.radioModel);
          });
          this.helpInfo.userInfo.subscribe(x => {
            if (this.directReferalUser.level !== x.level) {
              this.directReferalUser.level = x.level;
            }
          });
        });

        this.user = user;

        this.walletService.getLostCoint().then(x => {
          if (+x > 0) {
            this.isInfo = true;
            this.lostValue = x;
          }
        });

        this.getRecentActivityDetails();
        this.setFilterData(this.chartModel);
      }
    });

    this._contentHeaderService.contentHeader.next({
      actionButton: true,
      breadcrumb: {
        type: 'chevron',
        links: [
          {
            name: 'OVERVIEW',
            isLink: true,
            link: '/pages/overview',
            isUrl: true,
          },
          {
            name: 'TIERS',
            isLink: true,
            link: '/pages/tiers',
            isUrl: true,
          },
          {
            name: 'MATRIX',
            isLink: false,
            link: '',
            isUrl: false,
          },
        ],
      },
    });
  }

  ngAfterContentInit() {
    this._coreConfigService.config.subscribe(config => {
      this.isCollapsed = config.layout.menu.collapsed;
    });
  }

  getUserDetailInfo(userId: number) {
    let teat: any = {} as any;
    let chartArray = [
      this.walletService.getRevenueDAIWithUserID('1 millennium', 1, userId),
      this.walletService.getRevenueMFSWithUserID('1 millennium', 1, userId),
      this.walletService.getUserInfoOther(userId),
    ];
    return Promise.all(chartArray).then((x: any[]) => {
      teat.userId = userId;
      teat.profitDAI = x[0][0];
      teat.profitMFS = x[1][0];
      teat.tier = +x[2].level;
      teat.walletAddress = x[2].address;
      teat.date = moment(x[2].registeredAt).format('DD MMM YYYY');
      return teat;
    });
  }

  marketingArrayDate(
    filter = 0,
    levelStart = 1,
    levelEnd = 5,
    isOneLevel = false
  ) {
    this.marketingArray = [];

    if (filter === 0) {
      this.walletService
        .getUsersInfoInMarketingBinaryTree(levelStart, levelEnd)
        .then(result => {
          this.marketingArray = result;

          this.marketingArray.unshift(this.directReferalUser);
          this.changeMarketing = true;

          this.isLoader = false;
        });
    } else {
      this.walletService
        .getUsersInfoInMarketingLevelTree(filter, levelStart, levelEnd)
        .then(result => {
          this.marketingArray = result;
          this.marketingArray.unshift(this.directReferalUser);
          this.changeMarketing = true;

          this.isLoader = false;
        });
    }
  }

  hiddenBody() {
    this.isHiddenChart = !this.isHiddenChart;
  }

  setTabs(type) {
    this.typeTabs = type;
    if (type === 1) {
      this.radioModelForTabel = 0;
      return;
    }
    if (type === 2) {
      this.isLoader = true;
      this.getUserDetailInfo(this.userId).then(result => {
        let treeElement: any = {
          ...this.directReferalUser,
          ...{ userInfo: result },
        };
        treeElement.children = [];
        treeElement.index = 1;
        treeElement.pageNumber = 0;
        treeElement.pageEnd = treeElement.referralsAmount === 0 && true;
        this.helpInfo.getImage(treeElement.avatar).then(
          x => {
            this.loadmoreDatabase.rootLevelNodes = [treeElement];
            this.loadmoreDatabase.initialize();
          },
          er => {
            treeElement.avatar = undefined;
            this.loadmoreDatabase.rootLevelNodes = [treeElement];
            this.loadmoreDatabase.initialize();
          }
        );

        this.walletService.getMyInfo(result.walletAddress).subscribe(
          result => {
            this.isLoader = false;
            if (
              result.status &&
              (result.status === 404 || result.status === 'error')
            )
              return;
            treeElement.ForceID = result.users.name + '';
          },
          error => {
            this.isLoader = false;
          }
        );
      });
    } else {
      if (
        this.radioModel === 0 ||
        this.levelLists[this.radioModel - 1].isActive
      ) {
        this.isLoader = true;
        this.changeMarketing = false;
        this.walletService.getUserInfo();

        this.marketingArrayDate(this.radioModel);
      }
    }
  }

  getChildren(item: any, isFist = false) {
    this.isTreeLoader = true;

    this.walletService
      .getTree(this.pageSize, item.pageNumber, item.userId)
      .then(
        (result: any) => {
          let children = result.filter(element => element != null);

          let pageEnd = children.length < this.pageSize ? true : false;
          for (let index = 0; index < children.length; index++) {
            this.getUserDetailInfo(children[index].userId).then(result => {
              children[index].userInfo = result;
              this.walletService
                .getMyInfo(result.walletAddress)
                .subscribe(result => {
                  if (
                    result.status &&
                    (result.status === 404 || result.status === 'error')
                  )
                    return;
                  children[index].ForceID = result.users.name + '';
                });
            });
            this.helpInfo.getImage(children[index].avatar).then(
              x => {},
              er => {
                children[index].avatar = undefined;
              }
            );
            children[index]['index'] = 2;
            children[index].pageNumber = 0;
            children[index].pageEnd = pageEnd;
          }
          let parent = this.loadmoreDatabase.dataMap.get(item.userId);
          if (parent === undefined) {
            this.loadmoreDatabase.dataMap.set(item.userId, children);
          } else {
            this.loadmoreDatabase.dataMap.set(
              item.userId,
              parent.concat(children)
            );
          }

          item.pageNumber += 1;
          this.isTreeLoader = false;
          this.loadmoreDatabase.loadMore(item, isFist);
        },
        error => {
          this.isTreeLoader = false;
        }
      );
  }

  onScrollDown() {
    if (!this.isFinalListRecentActivity) {
      this.pageNumberRecentActivity += 1;
      this.getRecentActivityDetails();
    }
  }

  getRecentActivityDetails() {
    const UVv2UpgradeDate = this.walletService.getUVv2UpgradeDate(); 
    this.walletService
      .getRecentActivity(this.countElement, this.pageNumberRecentActivity)
      .then(result => {
        result = result.filter(element => element != null);
        if (result.length < this.countElement) {
          this.isFinalListRecentActivity = true;
        }

        let newData: recentActivityItem[] = [];

        result.forEach(async element => {
          let data: recentActivityItem = {
            type: {},
            force_id: {},
            date: {},
          } as recentActivityItem;
          data.force_id.isMy = false;
          if (
            element.name === 'TierActivated' ||
            element.name === 'TierExtended'
          ) {
            data.type.url = '/assets/images/recentActivity/upOrandge.png';
            data.type.level = +element.value;
            data.type.textPath1 = 'ACTIVITY.TIER';
            data.type.textPath2 = 'ACTIVITY.EXTENSION';
            data.amount = '-';
            data.amount = '-' + +(+element.amount).toFixed(2) + ' HC';
            if (element.name.toLowerCase().includes('activated')) {
              data.type.textPath2 = 'ACTIVITY.ACTIVATION';
              // data.amount = '-' + +(+element.amount).toFixed(2) + ' DAI';

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
            data.type.textPath1 = 'ACTIVITY.GETTING_FORCECOIN';
            data.amount = +(+element.amount).toFixed(2) + ' HC';
            data.force_id.isMy = true;
          }
          if (
            element.name === 'NewReferral' ||
            element.name === 'DeltaActivation'
          ) {
            data.type.url = '/assets/images/recentActivity/greenPlus.png';
            if (element.name === 'NewReferral') {
              data.type.textPath1 = 'ACTIVITY.NEW_REFERRAL';
            } else {
              data.type.textPath1 = 'ACTIVITY.DELTA_ACTIVATION';
            }
            data.amount = '-';
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
            data.type.textPath1 = 'ACTIVITY.TIER';
            data.type.textPath2 = 'ACTIVITY.EXTENSION';
            data.amount = +(+element.amount).toFixed(2) + ' HC';
            if (element.name.toLowerCase().includes('activated')) {
              data.type.textPath2 = 'ACTIVITY.ACTIVATION';
            }
            if (element.name.toLowerCase().includes('stable')) {
              data.amount = +(+element.amount).toFixed(2) + ' DAI';
            }
          }
          if (
            element.name === 'ReferralLostMoney' ||
            element.name === 'MarketingLostMoney'
          ) {
            data.type.url = '/assets/images/recentActivity/greyArrow.png';
            data.type.textPath1 = 'ACTIVITY.LOST_PROFIT';
            data.amount = +(+element.amount).toFixed(2) + ' DAI';
          }

          if (!data.force_id.isMy) {
            data.force_id.avatar = 'assets/images/User.png';

            this.walletService.getUserInfoOther(element.userId).then(x => {
              this.walletService.getMyInfo(x.address).subscribe(result => {
                this.isChangeResentActivity = !this.isChangeResentActivity;
                if (
                  result.status &&
                  (result.status === 404 || result.status === 'error')
                ) {
                  return;
                }

                data.force_id.id = result.users.name + '';
              });
            });

            this.walletService.getAvatar(element.userId).then(avatar => {
              this.helpInfo.getImage(avatar).then(
                x => {
                  data.force_id.avatar = avatar;
                },
                err => {}
              );
            });
          } else {
            data.force_id.avatar = 'assets/images/User.png';
            this.walletService.getAvatar(element.userId).then(avatar => {
              this.helpInfo.getImage(avatar).then(
                x => {
                  data.force_id.avatar = avatar;
                },
                err => {}
              );
            });
          }
          data.type.name = element.name;
          data.date = this.moment(element.date).format('DD, MMMM, H:m:s');
          newData.push(data);
        });
        this.resents = this.resents.concat(newData);
      });
  }

  closeInfo() {
    this.isInfo = false;
  }

  setFilterData(data: string) {
    let chartArray = [
      this.walletService.getRevenueDAI(this.filterChart[data]),
      this.walletService.getRevenueMFS(this.filterChart[data]),
    ];
    Promise.all(chartArray).then(x => {
      this.daiArray = x[0].reverse();
      this.mfsArray = x[1].reverse();
      this.changeChart = true;
    });
  }

  setLevel(level: number) {
    if (this.user.level === -1) {
      return;
    }
    if (
      (level === 0 || this.levelLists[level - 1].isActive) &&
      this.typeTabs === 0
    ) {
      this.isLoader = true;
      if (this.typeTabs === 0) {
        this.marketingArrayDate(level);
        this.radioModel = level;
      }
    } else {
      this.radioModelForTabel = level;
      this.radioModel = level;
    }
  }

  plusZoom() {
    if (this.zoom < 0) this.zoom = 0;
    this.zoom += 1;
  }

  minusZoom() {
    if (this.zoom > 0) this.zoom = 0;
    this.zoom -= 1;
  }

  openModal(item) {
    this.currenItem = item;
    this.isOpen = true;
  }

  onSucceed(event: any) {
    this.isOpen = false;

    this.isActivated = false;
    this.isOpen = false;
    this.isLoader = true;
    this.levelLists.forEach(item => {
      if (item.levelNumber == this.currenItem.levelNumber) {
        item.isActive = true;
      }
      if (
        item.levelNumber > this.currenItem.levelNumber &&
        !item.isActive
      ) {
        this.buyLevel = item.levelNumber;
      }
    });
    // this.buyLevel= level + 1;
    this.walletService.getUserInfo();
    this.helpInfo.expectainModalIsOpen.next(false);
    this.helpInfo.expectainModalStep.next(1);
    this.marketingArrayDate(this.currenItem.levelNumber);

    // this.getPack();
  }

  activate(info: { isActivated: boolean; value: number }) {
    let setNewBuyLevel = false;
    this.isActivated = true;

    // TODO разобраться надо ли это вообще
    // this.helpInfo.expectainModalStep.next(2);
    // this.walletService
    //   .activationPack(this.currenItem.levelNumber, 1, info.value + '')
    //   .then(
    //     x => {
    //       this.isActivated = false;
    //       this.isOpen = false;
    //       this.isLoader = true;
    //       this.levelLists.forEach(item => {
    //         if (item.levelNumber == this.currenItem.levelNumber) {
    //           item.isActive = true;
    //         }
    //         if (
    //           item.levelNumber > this.currenItem.levelNumber &&
    //           !item.isActive &&
    //           !setNewBuyLevel
    //         ) {
    //           setNewBuyLevel = true;
    //           this.buyLevel = item.levelNumber;
    //         }
    //       });
    //       // this.buyLevel= level + 1;
    //       this.walletService.getUserInfo();
    //       this.helpInfo.expectainModalIsOpen.next(false);
    //       this.helpInfo.expectainModalStep.next(1);
    //       this.marketingArrayDate(this.currenItem.levelNumber);
    //     },
    //     err => {
    //       this.isActivated = false;
    //       this.helpInfo.expectainModalIsOpen.next(false);
    //       this.helpInfo.expectainModalStep.next(1);
    //       console.log('activate', err);
    //     }
    //   );
  }

  isVisibleMarketing() {
    if (this.user.level === -1 || this.levelLists.length === 0) {
      return false;
    }
    if (
      this.radioModel < this.buyLevel ||
      this.levelLists[this.radioModel - 1].isActive
    ) {
      return true;
    }
    return false;
  }

  isVisibleNotActivatedLevel() {
    if (this.user.level === -1 || this.levelLists.length === 0) {
      return false;
    }
    if (
      this.radioModel === this.buyLevel &&
      !this.levelLists[this.radioModel - 1].isActive
    ) {
      return true;
    }
    return false;
  }

  isVisiblePurchaseLevel() {
    if (this.user.level === -1 || this.levelLists.length === 0) {
      return false;
    }
    if (
      this.radioModel >= this.buyLevel + 1 &&
      !this.levelLists[this.radioModel - 1].isActive
    ) {
      return true;
    }
    return false;
  }
}
