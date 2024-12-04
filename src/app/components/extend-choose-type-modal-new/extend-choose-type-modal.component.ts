import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
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
import { WalletService } from 'app/auth/service/wallet.service';
import { chainIdList, HelpInfo } from 'app/auth/helpers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { faCircleXmark, faL, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ethers } from 'ethers';
import { environment } from 'environments/environment';
import moment from 'moment';
import { hMFSBalance } from 'app/auth/helpers/variables';

enum isExtendButton  {
  mfsHolding,
  mfsVesting,
  hMFS
}
@Component({
  selector: 'app-extend-choose-type-modal-new',
  templateUrl: './extend-choose-type-modal.component.html',
  styleUrls: ['./extend-choose-type-modal.component.scss'],
})
export class ExtendChooseTypeModalComponentNEW implements OnInit, OnChanges {
  @Input() item: any;
  @Input() isOpen: boolean;
  @Input() lastActiveLevelNumber: boolean;
  @Input() operationType: string;
  @Input() isUpdatePrice: boolean;
  @Input() updatePriceWithCheckMethod: any;
  @Input() updatePriceMethod: any;
  @Input() chipsQueue: any;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openModalEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('extendChooseTypePack') extendChooseTypePack: any;

  chainIdList = chainIdList;
  modalClose = undefined;
  MFSBalanceView = 0;
  DAIBalanceView = 0;
  MFSBalance = 0;
  MFSVestingBalance = 0;
  DAIBalance = 0;
  actualCostInDAI = 0;
  actualCostInMFS = 0;
  actualCostInhMFS = 0;
  isGetBalance: BehaviorSubject<{
    inner: Boolean;
    wallet: Boolean;
    MFS: Boolean;
  }> = new BehaviorSubject({ inner: false, wallet: false, MFS: false });
  isOpenModal = false;
  isExtendMfsButton = false;
  isExtendDaiButton = false;
  isExtendButtonArray = [
    false,false,false
  ]
  isExtendButton = isExtendButton;
  bundleSize = 1;
  faCircleXmark = faCircleXmark;
  faMinus = faMinus;
  faPlus = faPlus;
  payMethod = 'dai';
  totalCost = 0;
  totalCostDAI = 0;
  isUseMFSVestingExtend = true;

  isProcessing = false;
  processingError: string | null = null;
  slippageTolerance = environment.SlippageTolerance;
  hMFSArray = hMFSBalance;
  isNullHmfsPay = false;

  

  math = Math

  constructor(
    private modalService: NgbModal,
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService,
    private cdr: ChangeDetectorRef
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

    this.isGetBalance.subscribe(result => {
      if (result.inner && result.wallet && result.MFS) {
        this.walletService.getFlagRenewedForVestingMFS(this.item.levelNumber).then( x=> {
          
          this.isUseMFSVestingExtend =x;
        })
        this.payMethod = 'mfs' ;
        if( this.operationType === 'extend'){
      
          this.payMethod = 'dai';
    
         }
        this.fixPrices();
        this.changeExtendByhMFS()
      

      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isOpen) {
      this.isExtendMfsButton = false;
      this.isExtendDaiButton = false;
      this.DAIBalance = 0;
      this.DAIBalanceView = 0;
      this.isGetBalance.next({ inner: false, wallet: false, MFS: false });

      this.walletService
        .getBalancesOnPayment(this.helpInfo.userId.value)
        .then(x => {
          const totalMFSBigInt = ethers.utils.parseEther(x.mfs).add(ethers.utils.parseEther(x.mfsVesting));
          const totalAvaiableMFS = ethers.utils.formatEther(totalMFSBigInt);

          x.hMfs.forEach((result, index) => {
            this.hMFSArray[index].value = Math.floor( +result * 100 ) / 100;
          });
         
          this.MFSVestingBalance = + (+x.mfsVesting).toFixed(2);
          this.MFSBalance = + (+x.mfs).toFixed(2); // +totalAvaiableMFS;
          this.MFSBalance += this.MFSVestingBalance ;
          this.DAIBalance += +x.stablecoin;
          this.MFSBalanceView =  + (+x.mfs).toFixed(2); // +(+totalAvaiableMFS).toFixed(2);
          this.MFSBalanceView += this.MFSVestingBalance 
          this.DAIBalanceView += +(+x.stablecoin).toFixed(2);
          this.isGetBalance.next({ inner: true, wallet: false, MFS: true });
          this.walletService.getBalance().then(y => {
            
            this.DAIBalanceView += +(+y.stablecoin).toFixed(2);
            this.MFSBalanceView +=  + (+y.mfs).toFixed(2); 
            this.MFSBalanceView += + (+y.mfsVesting).toFixed(2);
            this.MFSBalance += +y.mfs;
            this.MFSBalance += +y.mfsVesting;
            this.DAIBalance += +y.stablecoin;
            this.isGetBalance.next({ inner: true, wallet: true, MFS: true });
          });
        });

    }
    if (this.isOpen && !this.isOpenModal) {
      this.openModal();
    }

    if (!this.isOpen && this.isOpenModal) {
      this.closeModal(this.modalClose);
    }
  }

  openModal() {
    this.isOpenModal = true;
    this.bundleSize = 1;
    let modal = this.modalService.open(this.extendChooseTypePack, {
      centered: true,
      modalDialogClass: 'dialog-wide',
      beforeDismiss:() =>{ return this.isProcessing? false : true}
    });
    
    modal.dismissed.subscribe(x => {
      
      this.isOpenModal = false;
      this.openEvent.emit(false);
    });
  }

  closeModal(modal) {
    if (modal !== undefined) {
      this.bundleSize = 1;
      this.isOpenModal = false;
      this.processingError = null;
      this.openEvent.emit(false);
      modal.dismiss('Cross click');
    }
  }

  changeBundleSize(type) {
    if (this.bundleSize === 1 && type === 'minus') {
      return;
    }
    type === 'plus' ? this.bundleSize++ : this.bundleSize--;
    this.fixPrices();
    this.changeExtendByhMFS()
  }

  isMinimumhHCName(countRenewal: number){
    return this.hMFSArray[countRenewal].newName;
  }

  changeExtendByhMFS() {
    this.isExtendButtonArray[isExtendButton.hMFS] = false;
    let lastIndexNotSelect = -1;
    let counthMFS = this.bundleSize;
    let priceTier = this.actualCostInhMFS
    for (let index = 0; index < this.hMFSArray.length; index++) {
      this.hMFSArray[index].isView = false;
    }
      for (let index = this.item.countRenewal; index < this.hMFSArray.length; index++) {
          if(this.hMFSArray[index].value > priceTier){
            this.hMFSArray[index].isView = true;
            if( lastIndexNotSelect > -1 ){
              let countExtendWithBalance = Math.trunc(this.hMFSArray[index].value / priceTier);
              countExtendWithBalance = countExtendWithBalance <= counthMFS ?countExtendWithBalance : counthMFS
              let balanceExtend = 0
              if(index === 7){
                 balanceExtend = counthMFS;
              } else {
                 balanceExtend = this.hMFSArray[index].entryLevel - this.item.countRenewal - (this.bundleSize - counthMFS);
              }
            
              this.hMFSArray[index].countExtend = countExtendWithBalance <= balanceExtend ? countExtendWithBalance : balanceExtend;
              counthMFS = counthMFS - this.hMFSArray[index].countExtend;
            } else{
              counthMFS--;
            }
          
          
        } else {
          lastIndexNotSelect = index;
        }
        if(counthMFS <= 0){
          break;
        }
      }
      
      console.log('counthMFS', counthMFS)

      if(counthMFS > 0) {
        this.isExtendButtonArray[isExtendButton.hMFS] = true;
        for (let index = this.item.countRenewal; index < this.hMFSArray.length; index++) {
          if(!this.hMFSArray[index].isView){
            this.hMFSArray[index].isView = true;
            counthMFS--;
          }
          if(counthMFS === 0){
            break;
          }
      }
      }
  }

  setPayMethod(type,item?) {
    
    this.processingError = null;
    this.payMethod = type;
    if ( this.payMethod === 'mfs-vesting' ) {
      this.bundleSize = 1;
    }
    // this.bundleSize = 1;
    
  
    
    this.fixPrices();
  }

  fixPrices() {
    if (!this.item || !this.item.costInMFS || !this.item.costInDAI) {
      return;
    }
    let discount = 0.2;
    if (this.item.levelNumber > this.lastActiveLevelNumber) {
      discount = 0.21;
    }

    
    const currentDiscount: any =  1;
    this.actualCostInDAI = this.math.ceil((this.item.costInDAI * currentDiscount)* 100)/ 100;
    this.actualCostInMFS = this.math.ceil((this.item.costInMFS * currentDiscount)* 100)/ 100;
    this.actualCostInhMFS = this.math.ceil((this.item.costInMFS * discount)* 100)/ 100;

    if ( this.payMethod === 'mfs-vesting' ) {
      this.totalCost = this.math.ceil((this.actualCostInMFS )* 100)/ 100;
    }
    else {
      
      this.totalCost =   this.payMethod === 'dai'  ? this.actualCostInDAI : this.actualCostInMFS
    
    }
    if(this.payMethod === 'hMFS' ){
      this.totalCost =  this.actualCostInhMFS
    }
    this.totalCostDAI = this.actualCostInDAI;
    this.isExtendMfsButton = this.MFSBalance < this.actualCostInMFS * this.bundleSize;
    this.isExtendDaiButton = this.DAIBalance < this.actualCostInDAI * this.bundleSize;
    // this.isExtendButtonArray[isExtendButton.mfsVesting] = this.MFSVestingBalance < this.totalCost * this.bundleSize;
    this.isExtendButtonArray[isExtendButton.mfsHolding] = this.MFSBalance < this.totalCost * this.bundleSize;

  }

  async clickPackActivate(modal) {
    this.modalClose = modal;
    this.isProcessing = true;
    this.PackActivate()
  }

  async PackActivate() {
 
    try {
      await this.walletService.activationPack(this.item.levelNumber, this.bundleSize, this.payMethod === 'mfs')
      this.onSucceedEvent.emit();
    } catch (error) {
      this.processingError = error;
    } finally {
      this.isProcessing = false;
    }
  }

  // async packExtandVestingMFS(){
  //   try {
  //     console.log('clickPackExtand', this.item.levelNumber, this.bundleSize, this.payMethod !== 'mfs');
  //     await this.walletService.renewPackForVestingMFS(+this.item.levelNumber);
  //     this.onSucceedEvent.emit();
  //   } catch (error) {
    
  //       this.updatePriceMethod()
      

  //     this.processingError = error;
  //   } finally {
  //     this.isProcessing = false;
  //   }
  // }
  
  async clickPackExtand(modal){
    this.modalClose = modal;
    this.isProcessing = true;
    let error =false
    
    if( this.isUpdatePrice){
       error = await this.updatePriceWithCheckMethod()
    }

    if (error) {
      this.processingError = 'The price changed by more than 5%. Repeat your action if you agree with the new price.';
      this.isProcessing = false;
      return;
    }

    if (this.payMethod.includes('hMFS')) {
      this.packExtandhMFS();
      return;
    }

    this.PackActivate()
    
  }

  // async packExtandMFS() {
  //   try {
  //     console.log('clickPackExtand', this.item.levelNumber, this.bundleSize, this.payMethod !== 'dai');
  //     await this.walletService.renewPackForMFS(this.item.levelNumber, this.bundleSize, this.payMethod !== 'dai');
  //     this.onSucceedEvent.emit();
  //   } catch (error) {
   
  //       this.updatePriceMethod()
      
  //     this.processingError = error;
  //   } finally {
  //     this.isProcessing = false;
  //   }
  // }

  async packExtandhMFS() {
    let amountsHMFS = ['0','0','0','0','0','0','0','0'];

    this.hMFSArray.forEach((hMFS, index) => {
      if (hMFS.isView) {
        amountsHMFS[index] = Math.ceil((hMFS.countExtend * this.actualCostInMFS)* 100)/ 100 + (this.actualCostInMFS * 0.05) +'';
      }
    });

    try {
      await this.walletService.renewPackForSetHMFS(this.item.levelNumber, this.bundleSize, amountsHMFS);
      this.onSucceedEvent.emit();

    } catch (error) {
   
        this.updatePriceMethod()
      
      this.processingError = error;

    } finally {
      this.isProcessing = false;
    }
  }
}
