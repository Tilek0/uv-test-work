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
  selector: 'claim-modal',
  templateUrl: './claim-modal.component.html',
  styleUrls: ['./claim-modal.component.scss'],
})
export class ClaimModalComponent implements OnInit, OnChanges {
  @Input() wave: any;
  @Input() isOpen: boolean;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('claim') claim: any;

  isOpenModal = false;
  isProcessing = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;

  machineIds = [];
  chipIndexes = [];

  userReward = 0;
  errorMsg = '';

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

    this.userReward = 0;
    this.machineIds = [];
    this.chipIndexes = [];
    this.errorMsg = '';

    this.walletService.getWaveById(this.wave.waveId).then(x => {
      if (x?.items[0]?.machines?.length > 0) {
        x.items[0].machines.forEach((machine) => {
          const userChips = machine.chips.filter(chip => chip.userId == this.helpInfo.userId.value.toString());
          if (userChips && userChips.length > 0) {
            const chipIds = Array.from(userChips, (x) => BigNumber.from(x.chipIndex));
            this.machineIds.push(...Array(chipIds.length).fill(BigNumber.from(machine.machineId)));
            this.chipIndexes.push(...chipIds);
          }
        });

        this.walletService.createGetUserRewardOreRequest(
            BigNumber.from(this.wave.waveId),
            this.machineIds,
            this.chipIndexes
        ).then(res => {
          this.userReward = +this.roundLess(res);
        });
      } else {
        this.errorMsg = 'We cannot find your machines. Please try again later.';
      }
    }).catch(e => {
      this.errorMsg = e;
    });

    this.modalClose = this.modalService.open(this.claim, {
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
    this.userReward = 0;
    this.machineIds = [];
    this.chipIndexes = [];
    this.errorMsg = '';
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  async onClaim() {
    if (
        !this.machineIds || !this.machineIds.length || this.machineIds.length == 0 ||
        !this.chipIndexes || !this.chipIndexes.length || this.chipIndexes.length == 0
    ) {
      this.errorMsg = 'We cannot find your machines or chips. Please try again later.';
      return;
    }

    this.isProcessing = true;
    try {
      await this.walletService.createClaimRewardOreRequest(
          BigNumber.from(this.wave.waveId),
          this.machineIds,
          this.chipIndexes
      );
    } catch (e) {
      this.errorMsg = e;
    }

    this.isProcessing = false;
    if (!this.errorMsg) {
      this.onSucceedEvent.emit();
      this.closeModal();
    }
  }
  roundLess(value) {
    if (!value) {
      return 0;
    }
    let round = value.match(new RegExp('[0-9]+(\.[0-9]{0,4})?'));
    if (!round[0]) {
      return 0;
    }
    let less = round[0].split('.')[1];
    return +less > 0 ? round[0] : round[0].split('.')[0];
  }
}
