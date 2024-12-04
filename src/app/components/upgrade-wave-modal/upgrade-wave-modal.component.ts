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
import { BigNumber, ethers } from "ethers";
import { WalletService } from 'app/auth/service/wallet.service';


@Component({
  selector: 'upgrade-wave-modal',
  templateUrl: './upgrade-wave-modal.component.html',
  styleUrls: ['./upgrade-wave-modal.component.scss'],
})
export class UpgradeWaveModal implements OnInit, OnChanges {
  @Input() wave: any;
  @Input() balances: any;
  @Input() isOpen: boolean;

  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSucceedEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('upgradeWave') upgradeWave: any;

  QEN_TO_FILL = 10;

  isOpenModal = false;
  isProcessing = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;

  bundleSize = 1;

  machineIds = [];
  chipIndexes = [];

  batteries = [{}, {}, {}];

  errorMsg = '';
  calculatedReward = 0;
  isCalculating = false;
  timeoutId = null;

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
      }
    });
    this.calculateReward();

    this.modalClose = this.modalService.open(this.upgradeWave, {
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
    this.errorMsg = '';
    this.calculatedReward = 0;
    this.machineIds = [];
    this.chipIndexes = [];
    this.isCalculating = false;
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  onChangebundleSize(info: { bundleSize }) {
    this.bundleSize = info.bundleSize;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.calculateReward() , 500);
  }

  calculateReward() {
    const bundle = +this.bundleSize;

    if (!bundle || bundle <= 0) {
      return;
    }
    this.isCalculating = true;
    this.walletService.createCalculateProfitForFillRequest(
        BigNumber.from(this.wave.waveId),
        this.machineIds,
        this.chipIndexes,
        BigNumber.from(ethers.utils.parseEther(bundle.toString()))
    ).then(res => {
      this.calculatedReward = this.roundDown(res, 2);
      this.isCalculating = false;
    });
  }

  async onFill() {
    this.isProcessing = true;

    try {
      await this.walletService.createFillChipsBatchRequest(
        BigNumber.from(this.wave.waveId),
        this.machineIds,
        this.chipIndexes,
        BigNumber.from(ethers.utils.parseEther(this.bundleSize.toString()))
      );
    } catch (e) {
      this.errorMsg = e;
    }

    this.isProcessing = false;
    !this.errorMsg && this.onSucceedEvent.emit();
  }

  async onExpand() {
    this.isProcessing = true;

    const extendCapacityMax = this.wave.extendCapacityMax;
    const extendCapacity = this.wave.extendCapacity;
    const batteryCapacity = extendCapacityMax / 3;
    const amount = extendCapacity % batteryCapacity;
    const expandTo = amount > 0 ? amount : batteryCapacity;

    try {
      await this.walletService.createExtendChipsBatchRequest(
        BigNumber.from(this.wave.waveId),
        this.machineIds,
        this.chipIndexes,
        BigNumber.from(ethers.utils.parseEther(expandTo.toString()))
      );
    } catch (e) {
      this.errorMsg = e;
    }

    this.isProcessing = false;
    !this.errorMsg && this.onSucceedEvent.emit();
  }

  roundDown(value, signs) {
    // обрезает строку до signs знаков, чтобы влезло в Number
    // затем округляет в меньшую сторону до signs знаков после запятой
    let trimValue = value;
    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      trimValue = value.replace(',', '.').substring(0, 10);
    }

    return Math.floor(trimValue * Math.pow(10, signs)) / Math.pow(10, signs);
  }
}
