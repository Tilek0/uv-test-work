import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import { ContentHeaderService } from '@core/services/content-header.service';
import { HelpInfo } from 'app/auth/helpers';
import { WalletService } from 'app/auth/service/wallet.service';
import { ToastrService } from 'ngx-toastr';
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
import { CoreConfigService } from '@core/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimationItem, BMCompleteEvent } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { environment } from 'environments/environment';
import heartbeat from 'app/gif/heartbeat2.json';
import progress from 'app/gif/progress.json';



@Component({
  selector: 'app-level-lists',
  templateUrl: './level-lists.component.html',
  styleUrls: ['./level-lists.component.scss'],
})
export class LevelListsComponent implements OnInit, AfterContentInit, OnDestroy {
  animationOptions: AnimationOptions = {
    animationData: heartbeat,
    renderer: 'svg',
    loop: true,
    autoplay: true,
  };
  animationProgressOptions: AnimationOptions = {
    animationData: progress,
    renderer: 'svg',
    loop: true,
    autoplay: true,
  };
  isLoader = false;
  userInfo = undefined;
  newTypeReward = undefined;
  oldTypeReward = undefined;
  isLoaderTypeReward = false;
  isActivated = false;
  isExtand = false;
  isLoadingModal = false;
  membersValue = '0';
  membersIncomeValue = '0';
  lists = [];
  chips = [];
  isInfo = false;
  isOpenPackModal = false;
  isOpenExtendChooseModal = false;
  currenItem = null;
  isCollapsed: boolean;
  lostValue = '0';
  mfsPriceInUSD = 0;
  // firstPackPriceInMFS = 0;
  firstPackPriceInUSD = 0;
  currentTab = 'tiers';
  isUserDataLoaded = false;
  operationType = 'activate';
  lastActiveLevelNumber = 0;
  isUpdatePrice = false;
  refreshKey = 0;

  isStartExchange = false;
  constructor(
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _contentHeaderService: ContentHeaderService,
    private walletService: WalletService,
    private helpInfo: HelpInfo,
    private _toastrService: ToastrService,
    private _coreConfigService: CoreConfigService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.updatePriceWithCheck = this.updatePriceWithCheck.bind(this);

    this.updatePrice = this.updatePrice.bind(this);
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
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.currentTab = params['tab'];
      }
    });

    this.isStartExchange = environment.isExchange;
    this.helpInfo.userInfo.subscribe(async(user) => {
      if (user != null) {
        let stats = await this.walletService.getStats()

        this.membersValue = stats.usersCount;
        this.membersIncomeValue = stats.totalRevenue;
        
        this.mfsPriceInUSD = +stats.mfsPriceInUSD;
        // this.firstPackPriceInMFS = +stats.firstPackPriceInMFS;
        this.firstPackPriceInUSD = +stats.firstPackPriceInUSD;
        this.startTimerToUpdatePrise()
        
      
        this.newTypeReward = user.rewardType;
        this.oldTypeReward = user.rewardType;
        this.userInfo = user;

        this.walletService.getLostCoint().then(x => {
          if (+x > 0) {
            this.isInfo = true;
            this.lostValue = x;
          }
        });
      
        this.lists = [];
        this.lists.push({
          levelNumber: 0,
          costInDAI: 0,
          costInMFS: 0,
          timeStampEndPack: 0,
          isActive: false,
        });

        for (let index = 0; index < 9; index++) {
          // let mfs =
          //     index === 0
          //         ? +this.firstPackPriceInMFS
          //         : +(this.lists[index].costInMFS * 2);
          let dai =
              index === 0
                  ? +this.firstPackPriceInUSD
                  : +(this.lists[index].costInDAI * 2);

          this.lists.push({
            levelNumber: index + 1,
            costInDAI: dai, // +mfs * +this.mfsPriceInUSD,
            costInMFS: dai / +this.mfsPriceInUSD,
            timeStampEndPack: 0,
            isActive: false,
          });
        }
        
        this.getPack();
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
            link: 'https://holiverse.ai/forcesystems',
            isUrl: true,
          },
          {
            name: 'UNITEVERSE_DELTA',
            isLink: false,
            link: '',
            isUrl: false,
          },
        ],
      },
    });
  }

  ngOnDestroy(): void {
  }

  ngAfterContentInit() {
    this._coreConfigService.config.subscribe(config => {
      this.isCollapsed = config.layout.menu.collapsed;
    });
  }

  async startTimerToUpdatePrise(){
    setTimeout( ()=> {
      this.isUpdatePrice =true;
    },60 * 1000)
  }

  async updatePrice(){
    try {
    let result= await this.walletService.getStats() 
      this.helpInfo.stats.next(result)
      this.mfsPriceInUSD = +result.mfsPriceInUSD;


  //     let dai =
  //     index === 0
  //         ? +this.firstPackPriceInUSD
  //         : +(this.lists[index].costInDAI * 2);

  // this.lists.push({
  //   levelNumber: index + 1,
  //   costInDAI: dai, // +mfs * +this.mfsPriceInUSD,
  //   costInMFS: dai / +this.mfsPriceInUSD,
  //   timeStampEndPack: 0,
  //   isActive: false,
  // });

      // this.firstPackPriceInMFS = +result.firstPackPriceInMFS;
      this.firstPackPriceInUSD = +result.firstPackPriceInUSD;
      for (let index = 1; index < 10; index++) {
        // let mfs =
        //     index === 1
        //         ? +result.firstPackPriceInMFS
        //         : +(this.lists[index - 1].costInMFS * 2);
        let dai =
            index === 1
                ? +result.firstPackPriceInUSD
                : +(this.lists[index - 1].costInDAI * 2);

        this.lists[index].costInDAI = dai; // (+mfs * +result.mfsPriceInUSD);
        this.lists[index].costInMFS = dai / +result.mfsPriceInUSD;
         
      }
      this.isUpdatePrice = false;
    this.startTimerToUpdatePrise()
  } catch (error) {
    
  } 
  }

  async updatePriceWithCheck(): Promise<boolean>{
    let isError = false;
    try {
    let result= await this.walletService.getStats()

    let difference  =Math.abs( this.mfsPriceInUSD - (+result.mfsPriceInUSD));
    if((this.mfsPriceInUSD / 100 * environment.SlippageTolerance) < difference){ 
      this.mfsPriceInUSD = +result.mfsPriceInUSD;
      // this.firstPackPriceInMFS = +result.firstPackPriceInMFS;
      // this.helpInfo.stats.next(result)
      // for (let index = 1; index < 10; index++) {
      //   let mfs =
      //       index === 1
      //           ? +result.firstPackPriceInMFS
      //           : +(this.lists[index - 1].costInMFS * 2);

      //   this.lists[index].costInDAI = (+mfs * +result.mfsPriceInUSD);
      //   this.lists[index].costInMFS = mfs;
      this.firstPackPriceInUSD = +result.firstPackPriceInUSD;
      this.helpInfo.stats.next(result)
      for (let index = 1; index < 10; index++) {
        let dai =
            index === 1
                ? +result.firstPackPriceInUSD
                : +(this.lists[index - 1].costInDAI * 2);

        this.lists[index].costInDAI = dai; // (+mfs * +result.mfsPriceInUSD);
        this.lists[index].costInMFS = dai / +result.mfsPriceInUSD;
         
      }
      this.isUpdatePrice = false;
    this.startTimerToUpdatePrise()
    isError = true
    return isError;
    } else {
      
      return isError;
    }
  } catch (error) {
    isError = true
    return isError;
  } 
  }

  closeInfo() {
    this.isInfo = false;
  }

  selectTab(tab) {
    this.currentTab = tab;
  }

  getPack() {
    this.isLoader = true;
    // время для дельты (оно же максимально время активированных тиров)
    let deltaTime = 0;
    // последняя активация
    let timePackMax = 0;

    // запросили данные у конртактов (пришли только те тиры,
    // которые были активированы пользователем когда-либо)
    this.walletService.getLevelPack().then(
        x => {
          this.lastActiveLevelNumber = 0;
          x.forEach((element: any, index) => {
            // ищем самый свежий активный пак в списке, чтобы выставить это время для дельты
            if (
                element.isActive &&
                element.timeStampEndPack.getTime() > timePackMax
            ) {
              timePackMax = element.timeStampEndPack.getTime();
              deltaTime =
                  element.timeStampEndPack.getTime() -
                  new Date().getTime() +
                  30 * 86400000;
            }

            this.lists[index + 1].timeStampEndPack = element.timeStampEndPack;
            this.lists[index + 1].isActive = element.isActive;
        
            this.lists[index + 1].countRenewal =  element.countRenewal.toNumber();
            
            if (this.lastActiveLevelNumber === 0) {
              if (!element.isActive) {
                this.lastActiveLevelNumber = index;
              } else if (index + 1 === x.length) {
                this.lastActiveLevelNumber = index + 1;
              }
            }
          });

          // заполняем дельту
          this.lists[0].timeStampEndPack = deltaTime;
          this.isLoader = false;
          this.isUserDataLoaded = true;

          this.getStorage();
        },
        error => {
          this._toastrService.error('', 'Error', {
            positionClass: 'toast-top-left',
            toastClass: 'toast ngx-toastr',
            closeButton: true,
          });
          this.isLoader = false;
        }
    );
  }
  async getStorage() {
    const resp = await this.walletService.getMyNftChips();
    const storage = [];
    for(let item of resp.items) {
      const exist = storage.find(x => x.contractAddress === item.contractAddress);

      if(exist) {
        exist.amount++;
      } else {
        storage.push({
          contractAddress: item.contractAddress,
          image: item.nftMetadata.image,
          name: item.nftContract.name,
          level: item.nftContract.level,
          canSet: this.lists.find(tier => tier.levelNumber == item.nftContract.level)?.isActive || false,
          amount: 1,
        });
      }
    }
    this.chips = storage.sort((a, b) => a.level - b.level);
  }

  newSetTypeReward(type: number) {
    this.newTypeReward = type;
  }

  numberWithComma(x: number) {
    return x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  onChangeTypeReward() {
    this.isLoaderTypeReward = true;
    this.walletService.setTypeReward(this.newTypeReward).then(
      x => {
        this.oldTypeReward = this.newTypeReward;
        this.isLoaderTypeReward = false;
        this.walletService.getUserInfo();
      },
      err => {
        this.isLoaderTypeReward = false;
        this.newTypeReward = this.oldTypeReward;
      }
    );
  }

  async openChooseModal(info: { item, isActivate }) {
    if( this.isUpdatePrice){
      await this.updatePrice();
    }
    
    this.currenItem = info.item;
  
    this.operationType = info.isActivate ? 'activate' : 'extend';
    this.isOpenExtendChooseModal = true;
  }

  openPackModal(info: { item; isActivated: boolean }) {
    this.isExtand = true;
    this.isActivated = info.isActivated;
    this.currenItem = info.item;

    this.isOpenPackModal = true;
  }

  onSucceed(event: any) {
    this.isOpenExtendChooseModal = false;

    this.walletService.getUserInfo();
    this.getPack();
  }

  showDelta() {
    this.router.navigate(['/pages/uniteverse'], {
      queryParams: { levelNumber: 0 },
    });
  }

  complete(animationItem: BMCompleteEvent) {}
  animationCreated(animationItem: AnimationItem): void {}
}
