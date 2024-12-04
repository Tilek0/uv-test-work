import {
  Component, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
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
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { CoreMediaService } from '@core/services/media.service';

@Component({
  selector: 'game-help-modal',
  templateUrl: './game-help-modal.component.html',
  styleUrls: ['./game-help-modal.component.scss'],
})
export class GameHelpModal implements OnInit, OnChanges {
  @Input() isOpen: boolean;
  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('gameHelp') gameHelp: any;

  isOpenModal = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;

  private _unsubscribeAll: Subject<any>;
  desktopBreakpoint = 760;
  isDesktop = false;


  steps = 16;
  currentStep = 0;

  constructor(
    private modalService: NgbModal,
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private _coreMediaService: CoreMediaService,
    private coreTranslationService: CoreTranslationService,
  ) {
    this._unsubscribeAll = new Subject();
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
    this._coreMediaService.onMediaUpdate
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(() => {
          this.isDesktop = window.innerWidth > this.desktopBreakpoint;
        });
  }

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
    this.currentStep = 0;
    this.modalClose = this.modalService.open(this.gameHelp, {
      centered: true,
      modalDialogClass: 'dialog-ultra-wide'
    });
    this.modalClose.dismissed.subscribe(x => {
      this.isOpenModal = false;
      this.openEvent.emit(false);
    });
    localStorage.setItem('isHelpAlreadyShown', '1');
  }

  closeModal() {
    this.isOpenModal = false;
    this.currentStep = 0;
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  getStepsArr() {
    return new Array(this.steps);
  }

  goToNexStep() {
    this.currentStep < this.steps && this.currentStep++;
  }

  goToPrevStep() {
    this.currentStep > 1 && this.currentStep--;
  }
}
