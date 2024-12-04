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
import { BigNumber } from "ethers";
import { WalletService } from 'app/auth/service/wallet.service';

@Component({
  selector: 'upgrade-chip-modal',
  templateUrl: './upgrade-chip-modal.component.html',
  styleUrls: ['./upgrade-chip-modal.component.scss'],
})
export class UpgradeChipModal implements OnInit, OnChanges {
  @Input() wave: any;
  @Input() balances: any;
  @Input() activityFactor: any;
  @Input() isOpen: boolean;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('upgradeChip') upgradeChip: any;

  isOpenModal = false;
  isProcessing = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;

  bundleSize = 1;
  upgradeType = null;

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
    this.modalClose = this.modalService.open(this.upgradeChip, {
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
    this.upgradeType = null;
    this.bundleSize = 1;
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  onChangebundleSize(info: { bundleSize }) {
    this.bundleSize = info.bundleSize;
  }

  async confirm() {
    // this.onSucceedEvent.emit();
  }

  onChoose(type) {
    this.upgradeType = type;
    setTimeout(() => {
      const chooseStart: any = document.getElementById(type + '-start');
      chooseStart.play();
    }, 500);
  }

  playLoop(type) {
    const selectorStart: any = document.getElementById(type + '-start');
    const selectorLoop: any = document.getElementById(type + '-loop');

    const startClasses = selectorStart.classList;
    startClasses.add('-hidden');

    const loopClasses = selectorLoop.classList;
    loopClasses.remove('-hidden');

    selectorLoop.play();
  }
}
