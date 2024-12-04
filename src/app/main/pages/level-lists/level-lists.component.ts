// import { AfterContentInit, Component, OnInit } from '@angular/core';
// import { ContentHeaderService } from '@core/services/content-header.service';
// import { HelpInfo } from 'app/auth/helpers';
// import { WalletService } from 'app/auth/service/wallet.service';
// import { ToastrService } from 'ngx-toastr';
// import { locale as russian } from './i18n/ru';
// import { locale as english } from './i18n/en';
// import { locale as chine } from './i18n/zh';
// import { locale as hindi } from './i18n/hi';
// import { locale as vietnam } from './i18n/vi';
// import { locale as arab } from './i18n/id';
// import { locale as indonesia } from './i18n/ar';
// import { locale as urdu } from './i18n/ur';
// import { locale as french } from './i18n/fr';
// import { CoreTranslationService } from '@core/services/translation.service';
// import { TranslateService } from '@ngx-translate/core';
// import { CoreConfigService } from '@core/services/config.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-level-lists',
//   templateUrl: './level-lists.component.html',
//   styleUrls: ['./level-lists.component.scss'],
// })
// export class LevelListsComponent implements OnInit, AfterContentInit {
//   isLoader = false;
//   userInfo = undefined;
//   newTypeReward = undefined;
//   oldTypeReward = undefined;
//   isLoaderTypeReward = false;
//   isActivated = false;
//   isExtand = false;
//   isLoadingModal = false;
//   membersValue = '0';
//   membersIncomeValue = '0';
//   lists = [];
//   isInfo = false;
//   isOpenPackModal = false;
//   isOpenExtendChooseModal = false;
//   currenItem = null;
//   isCollapsed: boolean;
//   readyNumberLevel = null;
//   lostValue = '0';
//   mfsPriceInUSD = 0;
//   // {status:'not buy'},
//   constructor(
//     public translate: TranslateService,
//     private coreTranslationService: CoreTranslationService,
//     private _contentHeaderService: ContentHeaderService,
//     private walletService: WalletService,
//     private helpInfo: HelpInfo,
//     private _toastrService: ToastrService,
//     private _coreConfigService: CoreConfigService,
//     private route: Router
//   ) {
//     this.coreTranslationService.translate(
//       russian,
//       english,
//       chine,
//       hindi,
//       vietnam,
//       arab,
//       indonesia,
//       urdu,
//       french
//     );
//   }

//   ngOnInit(): void {
//     this.helpInfo.userInfo.subscribe(user => {
//       console.log('user', user)
//       if (user != null) {
//         this.walletService.getStats().then(stats => {
//           console.log('stats', stats)
          
//           this.membersValue = stats.usersCount;
//           this.membersIncomeValue = stats.totalRevenue;

//           this.mfsPriceInUSD = +stats.mfsPriceInUSD;
//         });
//         this.newTypeReward = user.rewardType;
//         this.oldTypeReward = user.rewardType;
//         this.userInfo = user;

//         this.walletService.getLostCoint().then(x => {
//           if (+x > 0) {
//             this.isInfo = true;
//             this.lostValue = x;
//           }
//         });
//       }

//       if (user != null && this.lists.length === 0) {
//         this.lists.push({
//           levelNumber: 0,
//           status: 'not active',
//           costInDAI: 0,
//           costInMFS: 0,
//           timeStampEndPack: 0,
//           disabled: false,
//         });
//         console.log('++++ SOME? +++++');
//         console.log( this.helpInfo.stats.value.firstPackPriceInMFS)

//         for (let index = 0; index < 9; index++) {
//           let mfs =
//             index === 0
//               ? this.helpInfo.stats.value.firstPackPriceInMFS
//               : +(this.lists[index].costInMFS * 2);
//           console.log(+(this.lists[index].costInMFS * 2));
//           this.lists.push({
//             levelNumber: index + 1,
//             status: 'not active',
//             costInDAI: +(
//               +mfs * +this.helpInfo.stats.value.mfsPriceInUSD
//             ).toFixed(1),
//             costInMFS: mfs,
//             timeStampEndPack: 0,
//             disabled: true,
//           });
//         }

//         console.log('++++++++++++++++')

//         this.isLoader = true;
//         this.getPack();
//       }
//     });
//     this._contentHeaderService.contentHeader.next({
//       actionButton: true,
//       breadcrumb: {
//         type: 'chevron',
//         links: [
//           {
//             name: 'FORCE_SYSTEMS',
//             isLink: true,
//             link: 'https://holiverse.ai/forcesystems',
//             isUrl: true,
//           },
//           {
//             name: 'UNITEVERSE_DELTA',
//             isLink: false,
//             link: '',
//             isUrl: false,
//           },
//         ],
//       },
//     });
//   }

//   ngAfterContentInit() {
//     this._coreConfigService.config.subscribe(config => {
//       this.isCollapsed = config.layout.menu.collapsed;
//     });
//   }

//   closeInfo() {
//     this.isInfo = false;
//   }

//   getPack() {
//     console.log('>>>>> GET PACK');
//     let onePassLevel = false;
//     let deltaTime = 0;
//     let timePackMax = 3 * -86400000;
//     this.walletService.getLevelPack().then(
//       x => {
//         if (x.length === 0) {
//           this.lists[1].disabled = false;
//         }
//         x.forEach((element, index) => {
//           if (
//             element.isActive &&
//             element.timeStampEndPack.getTime() > timePackMax
//           ) {
//             timePackMax = element.timeStampEndPack.getTime();
//             deltaTime =
//               element.timeStampEndPack.getTime() -
//               new Date().getTime() +
//               30 * 86400000;
//           }

//           this.lists[index + 1].status = element.isActive
//             ? 'active'
//             : 'not active';

//           if (
//             (index > 0 && !this.lists[index].disabled && !onePassLevel) ||
//             element.isActive
//           ) {
//             this.lists[index + 1].disabled = false;
//           } else {
//             this.lists[index + 1].disabled = onePassLevel;
//           }
//           if (!onePassLevel) {
//             onePassLevel = element.isActive ? false : true;

//             this.readyNumberLevel = index + 1;
//           }

//           this.lists[index + 1].timeStampEndPack = element.timeStampEndPack;
//         });

//         if (!onePassLevel && x.length < 9) {
//           this.lists[x.length + 1].disabled = false;
//         }
//         this.lists[0].timeStampEndPack = deltaTime;

//         this.isLoader = false;
//       },
//       error => {
//         this._toastrService.error('', 'Error', {
//           positionClass: 'toast-top-left',
//           toastClass: 'toast ngx-toastr',
//           closeButton: true,
//         });
//         this.isLoader = false;
//       }
//     );
//   }

//   // changePack(info: { isActivated: boolean; value: number }) {
//   //   this.helpInfo.expectainModalStep.next(2);
//   //   this.isLoadingModal = true;
//   //   this.isLoader = true;
//   //   if (info.isActivated) {
//   //     this.walletService
//   //       .activationPack(this.currenItem.levelNumber, 1, info.value + '')
//   //       .then(
//   //         x => {
//   //           this.walletService.getUserInfo();
//   //           this.isOpenPackModal = false;
//   //           this.isOpenExtendChooseModal = false;
//   //           this.getPack();

//   //           this.helpInfo.expectainModalIsOpen.next(false);
//   //           this.helpInfo.expectainModalStep.next(1);
//   //           this.isLoadingModal = false;
//   //         },
//   //         err => {
//   //           this.isLoadingModal = false;
//   //           this.isLoader = false;

//   //           this.helpInfo.expectainModalIsOpen.next(false);
//   //           this.helpInfo.expectainModalStep.next(1);
//   //         }
//   //       );
//   //   } else {
//   //     this.walletService
//   //       .renewPackForMFS(this.currenItem.levelNumber, 1, info.value + '')
//   //       .then(
//   //         x => {
//   //           this.isOpenPackModal = false;
//   //           this.isOpenExtendChooseModal = false;
//   //           this.walletService.getUserInfo();
//   //           this.helpInfo.expectainModalIsOpen.next(false);
//   //           this.helpInfo.expectainModalStep.next(1);
//   //           this.isLoadingModal = false;
//   //           this.getPack();
//   //         },
//   //         err => {
//   //           this.isLoader = false;

//   //           this.isLoadingModal = false;
//   //           this.helpInfo.expectainModalIsOpen.next(false);
//   //           this.helpInfo.expectainModalStep.next(1);
//   //         }
//   //       );
//   //   }
//   // }

//   newSetTypeReward(type: number) {
//     this.newTypeReward = type;
//   }

//   numberWithComma(x: number) {
//     return x.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   }
//   onChangeTypeReward() {
//     this.isLoaderTypeReward = true;
//     this.walletService.setTypeReward(this.newTypeReward).then(
//       x => {
//         this.oldTypeReward = this.newTypeReward;
//         this.isLoaderTypeReward = false;
//         this.walletService.getUserInfo();
//       },
//       err => {
//         this.isLoaderTypeReward = false;
//         this.newTypeReward = this.oldTypeReward;
//       }
//     );
//   }

//   openChooseModal(info: { item; isActivated: boolean }) {
//     this.isActivated = info.isActivated;
//     this.currenItem = info.item;
//     this.isExtand = false;
//     if (this.isActivated) {
//       this.isOpenPackModal = true;
//     } else {
//       this.isOpenExtendChooseModal = true;
//     }
//   }

//   openPackModal(info: { item; isActivated: boolean }) {
//     this.isExtand = true;
//     this.isActivated = info.isActivated;
//     this.currenItem = info.item;
//     this.isOpenPackModal = true;
//   }
// }
