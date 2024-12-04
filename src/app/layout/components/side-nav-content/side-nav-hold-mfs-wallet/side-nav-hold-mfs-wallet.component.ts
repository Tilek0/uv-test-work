import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { WalletService } from 'app/auth/service/wallet.service';
import { SideNavService } from 'app/auth/service';
import { hMFSBalance } from 'app/auth/helpers/variables';
import moment from 'moment';

@Component({
  selector: 'app-side-nav-hold-mfs-wallet',
  templateUrl: './side-nav-hold-mfs-wallet.component.html',
  styleUrls: ['./side-nav-hold-mfs-wallet.component.scss']
})
export class SideNavHoldMFSWalletComponent implements OnInit {
  isModalOpen = false;
  isLoading: false;
  hMFSBalance = hMFSBalance;
  getCurrenthMFS = {
    date: 0,
    timeForClock: 0,
    name: 'hMFS-1',
    newName: 'hHC-1',
    amount: 0,
    depositId: 0,
    img: 'forcecoin',
    entryLevel: 0,
    currentEntryLevel: 0
  }
  holdMFSIdList: number[] = []
  holdMFSList = [];
  holdhMFSList = [];
  depositList = [];
  holdhMfsDay = [
    { day: 21, name: 'hMFS-1', newName: 'hHC-1' },
    { day: 42, name: 'hMFS-2', newName: 'hHC-2' },
    { day: 64, name: 'hMFS-3', newName: 'hHC-3' },
    { day: 88, name: 'hMFS-4', newName: 'hHC-4' },
    { day: 114, name: 'hMFS-5', newName: 'hHC-5' },
    { day: 142, name: 'hMFS-6', newName: 'hHC-6' },
    { day: 171, name: 'hMFS-7', newName: 'hHC-7' },
    { day: 200, name: 'hMFS-8', newName: 'hHC-8' }
  ]
  lastIndexNotZerohMfsBalance = 0;
  iNothMFS = true;

  constructor(
    private helpInfo: HelpInfo,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
    private walletService: WalletService,
    private coreTranslationService: CoreTranslationService,
    private sideNavService: SideNavService
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
    this.helpInfo.isOpenSlideNavSecondary.subscribe.bind(this);
    this.getDeposit.bind(this)
  }

  async ngOnInit(): Promise<void> {
    this.getBalancehMFS()
    this.getDeposit()


    this.helpInfo.isHold.subscribe(result => {
      if (result) {
        this.helpInfo.isHold.next(false);
        this.getDeposit();
        this.getBalancehMFS();
      }
    })

    this.helpInfo.isGetMFSOrhMFS.subscribe(ansve => {
      if (ansve.result) {
       
        if(ansve.amount === 0 ){
          this.holdMFSIdList = this.holdMFSIdList.filter(x => { return ansve.depositId != x });
          this.holdMFSList = this.holdMFSList.filter(x => { return ansve.depositId != x.depositId });
          this.holdhMFSList = this.holdhMFSList.filter(x => { return ansve.depositId != x.depositId });
        } else {
          let mfsIndex =  this.holdMFSList.findIndex(x => { return ansve.depositId === x.depositId });
          let hmfsIndex =  this.holdhMFSList.findIndex(x => { return ansve.depositId === x.depositId });
          if(mfsIndex > -1){
            this.holdMFSList[mfsIndex].amount = ansve.amount;
          } else {
            this.holdhMFSList[hmfsIndex].amount = ansve.amount;
          }
          
         
        }
        this.helpInfo.isGetMFSOrhMFS.next({depositId: -1,result:false,amount:-1});
        this.getBalancehMFS()
      }
    })

  }

  getBalancehMFS() {
    this.walletService.getBalancesOnPayment(this.helpInfo.userId.value).then(
      x => {
        x.hMfs.forEach((result, index) => {
          if (+result >= 0.01 ) {
            this.hMFSBalance[index].value = Math.floor(+result * 100) / 100;
            this.lastIndexNotZerohMfsBalance = index;
            this.iNothMFS = false;
          }
        });
      },
      err => {
        console.log(err);
      })
  }

  async getDeposit() {
    this.holdMFSIdList = await this.walletService.getDepositIds();
    let promiseArray = [];

    this.holdMFSIdList.forEach(id => {
      promiseArray.push(this.walletService.getDeposit(id))
    })

    Promise.all(promiseArray).then(result => {
      this.depositList = result;
      this.setInfoHoldMFS()
    }).catch(err => {

    })
  }

  takeMFS(depositId: number) {
    this.walletService.unHold(depositId).then(result => {
      this.holdMFSIdList = this.holdMFSIdList.filter(x => { return depositId != x });
      this.holdMFSList = this.holdMFSList.filter(x => { return depositId != x.depositId });
      this.holdhMFSList = this.holdhMFSList.filter(x => { return depositId != x.depositId });
      this.sideNavService.isCoinChange.next(true)
    }).catch(err => {

    })
  }



  async setInfoHoldMFS() {
    this.holdMFSList = [];
    this.holdhMFSList = [];
    this.depositList.forEach( async (item, index) => {
      if (+item.amount < 0.01) {
        return;
      }
      let itemHoldMFS = {
        date: 0,
        timeForClock: 0,
        name: 'hMFS-1',
        newName: 'hHC-1',
        amount: 0,
        depositId: 0,
        img: 'H1',
        entryLevel: 0,
        currentEntryLevel: 0
      }
      itemHoldMFS.date = Math.floor((Date.now() - moment(item.createdAt).valueOf()) / 1000 / 60 / 60 / 24);
      itemHoldMFS.currentEntryLevel = await this.walletService.getOutHMFSLevelFromDeposit(this.holdMFSIdList[index]);
   
      if (item.entryLevel > 0) {
        itemHoldMFS.date +=  this.holdhMfsDay[item.entryLevel-1].day;
      }
      
      let isSethMFS = false;
      for (let indexFor = item.entryLevel; indexFor < this.holdhMfsDay.length; indexFor++) {
        if(isSethMFS)
        break
        
        if (this.holdhMfsDay[indexFor].day > +itemHoldMFS.date) {
          itemHoldMFS.timeForClock = this.holdhMfsDay[indexFor].day - +itemHoldMFS.date;
          isSethMFS =true;
        }
      }

      if (itemHoldMFS.currentEntryLevel === 0) {
        itemHoldMFS.name = this.holdhMfsDay[itemHoldMFS.currentEntryLevel].newName;
        itemHoldMFS.newName = this.holdhMfsDay[itemHoldMFS.currentEntryLevel].newName;
      } else {
        itemHoldMFS.name = this.holdhMfsDay[itemHoldMFS.currentEntryLevel-1].newName;
        itemHoldMFS.newName = this.holdhMfsDay[itemHoldMFS.currentEntryLevel-1].newName;
        itemHoldMFS.img = 'H' + itemHoldMFS.currentEntryLevel;
      }
      
      itemHoldMFS.amount = Math.floor (+item.amount* 100 ) / 100  ;
      itemHoldMFS.depositId = this.holdMFSIdList[index];

      if (item.entryLevel > 0) {
        itemHoldMFS.entryLevel = item.entryLevel
      }
      this.holdMFSList.push(itemHoldMFS)
    })
  }

  openModal(coin) {
    this.getCurrenthMFS = coin;
    this.isModalOpen = true
  }

  onSucceed(event: any) {
    this.takeMFS(this.getCurrenthMFS.depositId)
    // this.getHMFS(this.getCurrenthMFS.depositId,this.getCurrenthMFS.amount + '');
  }

  openHoldMFS(ishMFS, coin?, isHold = true) {
    if (!isHold) {
      this.getCurrenthMFS = coin;
      
      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: true,
        type: sideNavType.holdMFS,
        item: { ishMFS, coin, isHold }
      });
      return
    }
    
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: true,
      type: sideNavType.holdMFS,
      item: { ishMFS, isHold }
    });
  }
  

  closeSlideNavSecondary(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.social,
      });
    }
  }

  closeALLSlideNav(isOpen) {
    if (!isOpen) {
      this.helpInfo.isOpenSlideNavSecondary.next({
        isOpen: false,
        type: sideNavType.walletHistory,
      });
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: false,
        type: sideNavType.menu,
      });
      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: false,
        type: sideNavType.inner,
      });
    }
  }
}
