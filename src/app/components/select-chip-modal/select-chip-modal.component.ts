import {
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
import { HelpInfo } from 'app/auth/helpers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { BigNumber } from 'ethers';
import { WalletService } from 'app/auth/service/wallet.service';

@Component({
  selector: 'select-chip-modal',
  templateUrl: './select-chip-modal.component.html',
  styleUrls: ['./select-chip-modal.component.scss'],
})
export class SelectChipModal implements OnInit, OnChanges {
  @Input() level: number;
  @Input() chipsAmount: number;
  @Input() isOpen: boolean;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('selectChip') selectChip: any;

  isOpenModal = false;
  isProcessing = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;

  bundleSize = 1;
  isError = false;
  errorMsg = null;

  constructor(
    private modalService: NgbModal,
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private walletService: WalletService,
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

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isOpen && !this.isOpenModal) {
      this.openModal();
    }
    if (!this.isOpen && this.isOpenModal) {
      this.closeModal();
    }
  }

  openModal() {
    this.isOpenModal = true;
    this.modalClose = this.modalService.open(this.selectChip, {
      centered: true,
      modalDialogClass: 'dialog-wide'
    });
    this.modalClose.dismissed.subscribe(x => {
      this.isOpenModal = false;
      this.openEvent.emit(false);
    });
  }

  closeModal() {
    this.isOpenModal = false;
    this.isProcessing = false;
    this.bundleSize = 1;
    this.isError = false;
    this.errorMsg = null;
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  async confirm() {

  }

  onChangebundleSize(info: { bundleSize }) {
    this.bundleSize = info.bundleSize;
  }
}
