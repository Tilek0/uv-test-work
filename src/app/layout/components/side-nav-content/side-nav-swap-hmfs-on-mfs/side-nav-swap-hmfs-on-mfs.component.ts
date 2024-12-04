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
import { hMFSBalance } from 'app/auth/helpers/variables';

@Component({
  selector: 'app-side-nav-swap-hmfs-on-mfs',
  templateUrl: './side-nav-swap-hmfs-on-mfs.component.html',
  styleUrls: ['./side-nav-swap-hmfs-on-mfs.component.scss']
})
export class SideNavSwapHmfsOnMfsComponent implements OnInit {
  amountTransactionTotal = 0;
  amountTransaction = null;

  isLoading = false;

  hMFSBalance = hMFSBalance;
  selectedhMFS=  {
    token: '',
    value: 0,
    name: 'hMFS-1',
    newName: 'hHC-1',
    costCoin: 0,
    changeCoin: 0,
    img: 'hmfs',
    entryLevel: 1,
    index:0
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
    this.walletService.getBalancesOnPayment(this.helpInfo.userId.value).then( x=>{
      x.hMfs.forEach((result, index) => {
          if (index === 0) {
            this.selectedhMFS.value = Math.floor( +result * 100 ) / 100 ;
          }
          this.hMFSBalance[index].value = Math.floor( +result * 100 ) / 100  ;
      });
      this.hMFSBalance = this.hMFSBalance.filter( x => { return x.value > 0})
      this.selectedhMFS = {...this.hMFSBalance[0], ...{index:0}}
    })
  }

  changehMFS(event) {
    this.selectedhMFS = {...this.hMFSBalance[event],...{index:event}}
  }

  changeTotal(value) {
    let itemMaxValue =  +this.selectedhMFS.value

    if (value > itemMaxValue || value < 0 || Number.isNaN(value) || value > Math.floor( +value * 100 ) / 100 ) {
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
      this.amountTransactionTotal = this.selectedhMFS.value;
      this.amountTransaction = this.amountTransactionTotal;
  }

  async convertHMFSToMFS(){
    if (this.amountTransactionTotal === 0 || this.amountTransactionTotal === null) {
      return
    }
    this.isLoading = true;
  
    try {
      let result = await this.walletService.convertHMFSToMFS(this.selectedhMFS.entryLevel,this.amountTransactionTotal + '')
      this.isLoading = false;
      this.sideNavService.isCoinChange.next(true);
      this.helpInfo.isHold.next(true);
      this.closeSlideNavAction();
 
    } catch (error) {
      this.isLoading = false;
    }
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
