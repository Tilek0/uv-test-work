import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, SimpleChanges,
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
import { HelpInfo } from 'app/auth/helpers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { faCircleXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expand-chip-modal',
  templateUrl: './expand-chip-modal.component.html',
  styleUrls: ['./expand-chip-modal.component.scss'],
})
export class ExpandChipModal implements OnInit {
  @Input() item: any;
  @Input() isOpen: boolean;
  @Input() operationType: string;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('expandChip') expandChip: any;

  isOpenModal = false;
  isProcessing = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;
  faMinus = faMinus;
  faPlus = faPlus;

  bundleSize = 1;

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
    this.modalClose = this.modalService.open(this.expandChip, {
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
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  async confirm() {
    this.isProcessing = true;
    this.onSucceedEvent.emit();
  }

  async clickConfirm(modal) {
    this.modalClose = modal;
    this.isProcessing = true;
    this.isProcessing = false;
    this.confirm();
  }

  onChangebundleSize(info: { bundleSize }) {
    this.bundleSize = info.bundleSize;
  }

  setMax() {
    this.bundleSize = 3948;
  }
}
