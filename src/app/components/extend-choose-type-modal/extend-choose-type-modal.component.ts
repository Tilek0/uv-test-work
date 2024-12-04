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

@Component({
  selector: 'app-extend-choose-type-modal',
  templateUrl: './extend-choose-type-modal.component.html',
  styleUrls: ['./extend-choose-type-modal.component.scss'],
})
export class ExtendChooseTypeModalComponent implements OnInit, OnChanges {
  @Input() item: any;
  @Input() isOpen: boolean;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openModalEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('extendChooseTypePack') extendChooseTypePack: any;

  chainIdList = chainIdList;
  modalClose = undefined;
  MFSBalanceView = 0;
  DAIBalanceView = 0;
  MFSBalance = 0;
  DAIBalance = 0;
  isGetBalance: BehaviorSubject<{
    inner: Boolean;
    wallet: Boolean;
    MFS: Boolean;
  }> = new BehaviorSubject({ inner: false, wallet: false, MFS: false });
  isOpenModal = false;
  isExtendMfsButton = false;
  isExtendDaiButton = false;
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
        this.isExtendMfsButton = this.MFSBalance < this.item.costInMFS / 5;
        this.isExtendDaiButton = this.DAIBalance < this.item.costInDAI;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isOpen && !this.isOpenModal) {
      this.isExtendMfsButton = false;
      this.isExtendDaiButton = false;
      this.DAIBalance = 0;
      this.DAIBalanceView = 0;
      this.isGetBalance.next({ inner: false, wallet: false, MFS: false });
      this.walletService
        .getBalancesOnPayment(this.helpInfo.userId.value)
        .then(x => {
          this.MFSBalance = +x.mfs;
          this.DAIBalance += +x.stablecoin;
          this.MFSBalanceView = +(+x.mfs).toFixed(2);
          this.DAIBalanceView += +(+x.stablecoin).toFixed(2);
          this.isGetBalance.next({ inner: true, wallet: false, MFS: true });

          this.walletService.getBalance().then(y => {
            this.DAIBalanceView += +(+y.stablecoin).toFixed(2);
            this.DAIBalance += +y.stablecoin;
            this.isGetBalance.next({ inner: true, wallet: true, MFS: true });
          });
        });

      this.openModal();
    }
    if (!this.isOpen && this.isOpenModal) {
      this.closeModal(this.modalClose);
    }
  }

  openModal() {
    this.isOpenModal = true;
    let modal = this.modalService.open(this.extendChooseTypePack, {
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

  clickPackActivate(modal) {
    this.modalClose = modal;
    this.openModalEvent.emit({ item: this.item, isActivated: true });
  }

  clickPackExtand(modal) {
    this.modalClose = modal;
    this.openModalEvent.emit({ item: this.item, isActivated: false });
  }
}
