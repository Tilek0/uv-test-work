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

@Component({
  selector: 'app-get-hmfs-confim-modal',
  templateUrl: './get-hmfs-confim-modal.component.html',
  styleUrls: ['./get-hmfs-confim-modal.component.scss']
})
export class GetHmfsConfimModalComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() coin: any;
  @Input() getAmmount: number = -1;
  @Input() isHold: boolean = false;
  
  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('confirmBuyback') confirmBuyback: any;

  isOpenModal = false;
  isProcessing = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;
  yesIamSure = false;

  constructor(
    private modalService: NgbModal,
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
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
    this.modalClose = this.modalService.open(this.confirmBuyback, {
      centered: true,
      modalDialogClass: 'dialog-wide'
    });
    this.modalClose.dismissed.subscribe(x => {
      this.yesIamSure = false;
      this.isOpenModal = false;
      this.openEvent.emit(false);
    });
  }

  closeModal() {
    this.yesIamSure = false;
    this.isOpenModal = false;
    this.isProcessing = false;
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  async confirm() {
    // this.isProcessing = true;
    this.isOpenModal = false;
    this.onSucceedEvent.emit();
    this.modalClose.dismiss('close');
  }

  changeCheckbox(event) {
    this.yesIamSure = event.target.checked;
  }
}
