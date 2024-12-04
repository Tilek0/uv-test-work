import {
  ChangeDetectionStrategy,
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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { chainIdList, HelpInfo } from 'app/auth/helpers';
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

@Component({
  selector: 'app-pack-modal',
  templateUrl: './pack-modal.component.html',
  styleUrls: ['./pack-modal.component.scss'],
})
export class PackModalComponent implements OnInit, OnChanges {
  @Input() isActivated: boolean = false;
  @Input() item: any;
  @Input() isOpen: boolean;
  @Input() isLoadingModal: boolean = false;
  @Input() isExtand: boolean = false;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() applyEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('modalPack') modalPack: any;
  mfsPriceInUSD = 0;
  chainIdList = chainIdList;
  modalClose = undefined;
  total = 0;
  countMfs = 0;
  countDAI = 0;
  step = 50;
  countDAIMax = 0;
  countMFSMax = 0;
  isChangeMFS = false;
  isLoadingValue = false;
  chainId = 0;
  isOpenModal = false;
  applyStatus = {
    checkNetwork: undefined,
    balanceOperation: undefined,
    balanceMatic: undefined,
  };
  allowedApply = false;
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
    this.helpInfo.userInfo.subscribe(user => {
      if (user != null) {
        this.chainId = this.helpInfo.walletInfo.value.chainId;
        this.mfsPriceInUSD = +this.helpInfo.stats.value.mfsPriceInUSD;
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isLoadingModal) {
      return;
    }

    if (this.isOpen && !this.isOpenModal) {
      this.isChangeMFS = false;
      this.applyStatus.balanceMatic = undefined;
      this.applyStatus.balanceOperation = undefined;
      this.applyStatus.checkNetwork = undefined;
      this.allowedApply = false;
      let costInMFS = 0;
      if (this.isActivated) {
        costInMFS = this.item.costInMFS;
        this.countMfs = this.item.costInMFS;
      } else {
        this.countMfs = this.item.costInMFS / 5;
        costInMFS = this.item.costInMFS / 5;
      }
      this.countMFSMax = costInMFS;
      this.walletService.calcMFSInUSD(costInMFS + '').then(x => {
        this.countDAIMax = +x;
        this.step = this.countDAIMax >= 50 ? 50 : this.countDAIMax;
        this.countDAI = Math.round(+x);
        if (this.isActivated) {
          this.total = this.item.costInDAI + +x;
          this.checkStatus();
        } else {
          this.total = +x;
          this.checkStatus();
        }
      });

      this.openModal();
    }
    if (!this.isOpen && this.isOpenModal) {
      this.closeModal(this.modalClose);
    }
  }

  changeTotal(value) {
    this.isLoadingValue = true;
    if (value > this.countDAIMax || value < 0 || Number.isNaN(value)) {
      if (value < 0 || Number.isNaN(value)) {
        this.countDAI = 0;
        this.countMfs = 0;
      } else {
        this.countDAI = 0;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.countDAI = Math.round(this.countDAIMax);
        }, 0.1);

        this.countMfs = this.countMFSMax;
      }
      this.isLoadingValue = false;
      this.checkStatus();
      return;
    }
    this.countDAI = value;

    this.total = this.item.costInDAI + +this.countDAI;
    this.checkStatus();

    this.walletService.calcUSDInMFS(this.countDAI + '').then(
      x => {
        this.isLoadingValue = false;
        this.countMfs = +x;
      },
      err => {
        this.isLoadingValue = false;
      }
    );
  }
  openModal() {
    this.isOpenModal = true;
    let modal = this.modalService.open(this.modalPack, {
      centered: true,
    });
    modal.dismissed.subscribe(x => {
      this.isOpenModal = false;
      this.openEvent.emit(false);
    });
  }

  closeModal(modal) {
    if (modal !== undefined) {
      this.isOpenModal = false;
      this.openEvent.emit(false);
      modal.dismiss('Cross click');
    }
  }

  changeMFS(change) {
    this.isChangeMFS = change.target.checked;
    if (!change.target.checked) {
      this.countDAI = Math.round(this.countDAIMax);
      this.total = this.item.costInDAI + +this.countDAI;
      this.walletService.calcUSDInMFS(this.countDAI + '').then(x => {
        this.countMfs = +x;
      });
    }
  }

  checkStatus() {
    if (
      this.chainId === chainIdList.polygonMainnet ||
      this.chainId === chainIdList.polygonTestnet
    ) {
      this.applyStatus.checkNetwork = true;
    } else {
      this.applyStatus.checkNetwork = false;
    }
    if (this.applyStatus.checkNetwork) {
      let token = this.isActivated
        ? this.helpInfo.tokenAddress.value.stablecoin
        : this.helpInfo.tokenAddress.value.mfs;
      let check = this.isActivated
        ? this.total
        : +(this.item.costInMFS / 5).toFixed(2);
      this.walletService
        .checkEnoughCoins(token, this.helpInfo.userId.value, check + '')
        .then(
          x => {
            this.applyStatus.balanceOperation = x.enough;
          },
          err => {
            this.applyStatus.balanceOperation = false;
          }
        );
    }
  }

  apply(modal) {
    this.isLoadingModal = true;
    if (!this.applyStatus.checkNetwork || !this.applyStatus.balanceOperation) {
      return;
    }
    this.helpInfo.expectainModalIsOpen.next(true);
    this.helpInfo.expectainModalStep.next(1);
    if (!this.isActivated) {
      this.walletService
        .checkGasEnoughForRenew(this.item.levelNumber, 1, this.countMfs + '')
        .then(
          y => {
            this.applyStatus.balanceMatic = y.enough;
            if (y.enough) {
              this.allowedApply = true;
              this.modalClose = modal;
              this.applyEvent.emit({
                isActivated: this.isActivated,
                value: this.countMfs,
              });
            }
          },
          err => {
            this.applyStatus.balanceMatic = false;
            this.helpInfo.expectainModalIsOpen.next(false);
            this.helpInfo.expectainModalStep.next(1);
            this.isLoadingModal = false;
          }
        );
    } else {
      throw new Error('Method has deprected');
      // this.walletService
      //   .checkGasEnoughForActivation(
      //     this.item.levelNumber,
      //     1,
      //     this.countMfs + ''
      //   )
      //   .then(
      //     y => {
      //       this.applyStatus.balanceMatic = y.enough;
      //       if (y.enough) {
      //         this.allowedApply = true;
      //         this.modalClose = modal;
      //         this.applyEvent.emit({
      //           isActivated: this.isActivated,
      //           value: this.countMfs,
      //         });
      //       }
      //     },
      //     err => {
      //       this.isLoadingModal = false;
      //       this.applyStatus.balanceMatic = false;
      //       this.helpInfo.expectainModalIsOpen.next(false);
      //       this.helpInfo.expectainModalStep.next(1);
      //     }
      //   );
    }
  }
}
