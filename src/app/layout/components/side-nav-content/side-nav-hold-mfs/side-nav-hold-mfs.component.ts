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
import { SideNavService } from 'app/auth/service';
import { WalletService } from 'app/auth/service/wallet.service';
import { HelpInfo, sideNavType } from 'app/auth/helpers';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { hMFSBalance } from 'app/auth/helpers/variables';

@Component({
  selector: 'app-side-nav-hold-mfs',
  templateUrl: './side-nav-hold-mfs.component.html',
  styleUrls: ['./side-nav-hold-mfs.component.scss']
})
export class SideNavHoldMFSComponent implements OnInit {
  amountTransactionTotal = 0;
  amountTransaction = null;
  balanceMFS = 0;
  isLoading = false;
  private _unsubscribeAll = new Subject();
  tokenMFS = ''
  hMFSBalance = hMFSBalance;
  ishMFS= false;
  isHold = true;
  coin: any
  isModalOpen = false;
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
  selectedhMFS = {
    token: '',
    value: 0,
    name: 'hMFS-1',
    newName: 'hHC-1',
    costCoin: 0,
    changeCoin: 0,
    img: 'hmfs',
    entryLevel: 1,
    index: 0
  }
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
    this.helpInfo.isOpenSlideNavThird.subscribe.bind(this);
  }

  ngOnInit(): void {
    this.ishMFS = this.helpInfo.isOpenSlideNavThird.value.item.ishMFS;
    if (!this.helpInfo.isOpenSlideNavThird.value.item.isHold) {
      this.coin = this.helpInfo.isOpenSlideNavThird.value.item.coin;
      this.isHold = this.helpInfo.isOpenSlideNavThird.value.item.isHold;
      return
    }
    
    this.helpInfo.tokenAddress
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(x => {
      if (x != null) {
        
        this.tokenMFS = x.mfs;
        // this.paymentBalance[1].token = x.mfsVesting;
      }
    });

    this.walletService.getBalancesOnPayment(this.helpInfo.userId.value).then( x=>{
      
      this.balanceMFS =Math.floor( +x.mfs * 100 ) / 100  
      if(this.ishMFS){
      x.hMfs.forEach((result, index) => {
          if(index === 0){
            this.selectedhMFS.value = Math.floor( +result * 100 ) / 100 ;
          }
          this.hMFSBalance[index].value = Math.floor( +result * 100 ) / 100  ;
 
        
      });
      this.hMFSBalance = this.hMFSBalance.filter( x => { return x.value > 0})
      this.selectedhMFS = {...this.hMFSBalance[0], ...{index:0}}
    }
    })
  }

  changehMFS(event){
    
    this.selectedhMFS = {...this.hMFSBalance[event],...{index:event}}
  }

  changeTotal(value) {
    let itemMaxValue = +this.balanceMFS;
    if(this.ishMFS){
      itemMaxValue = +this.selectedhMFS.value
    }
    if(!this.isHold){
      itemMaxValue = +this.coin.amount
    }
   
    if (value > itemMaxValue || value < 0 || Number.isNaN(value) || value > Math.floor(  +( +value * 100).toFixed(5) ) / 100 ) {
      this.amountTransaction = -1;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.amountTransaction = this.amountTransactionTotal;
      }, 0.1);

      return;
    }
    
    this.amountTransaction = value;
    this.amountTransactionTotal = value;
  }

  setMax() {
    if(!this.isHold){
      this.amountTransactionTotal =  this.coin.amount;
      this.amountTransaction = this.amountTransactionTotal;
      return
    }
    if(this.ishMFS){
      this.amountTransactionTotal =  this.selectedhMFS.value;
      this.amountTransaction = this.amountTransactionTotal;
    } else {
      this.amountTransactionTotal = this.balanceMFS;
      this.amountTransaction = this.amountTransactionTotal;
    }
   
  }
  openModal(coin){
    this.getCurrenthMFS = coin;
    this.isModalOpen = true
  }

  onSucceed(event: any) {
   this.getHMFS(this.coin.depositId)
  }

  async hold(){
    
    if(this.amountTransactionTotal === 0 || this.amountTransactionTotal === null){
      return
    }
    this.isLoading = true;
    let entryLevel =0;
    if(this.ishMFS){
      entryLevel = this.selectedhMFS.entryLevel
    }
    try {
      let result = await this.walletService.hold( entryLevel,this.amountTransactionTotal+'')
      this.isLoading = false;
      this.closeSlideNavAction();
      this.helpInfo.isHold.next(true);
    } catch (error) {
      this.isLoading = false;
    } finally {
    
    }
  
  }

  getHMFS(depositId: number) {
    
    this.isLoading = true;
 
    this.walletService.withdrawHMFS(depositId,  this.amountTransactionTotal + '').then(result => {
      this.isLoading = false;
      this.closeSlideNavAction();
      this.helpInfo.isGetMFSOrhMFS.next({depositId:depositId,result:true, amount: this.coin.amount - this.amountTransactionTotal});
      this.sideNavService.isCoinChange.next(true)
    }).catch(err => {
      this.isLoading = false;
    })
  }

  closeSlideNavAction() {
    this.helpInfo.isOpenSlideNavThird.next({
      isOpen: false,
      type: sideNavType.inner,
    });
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
