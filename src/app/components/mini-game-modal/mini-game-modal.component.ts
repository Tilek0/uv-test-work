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
import { ethers } from 'ethers';
import { WalletService } from 'app/auth/service/wallet.service';
import { WAVE_ACTIVE_PERIOD_BEFORE_728, WAVE_ACTIVE_PERIOD_AFTER_728, BLOCK_EXPLORERS_URLS } from 'localModules/metaforcesdk/constants';

@Component({
  selector: 'mini-game-modal',
  templateUrl: './mini-game-modal.component.html',
  styleUrls: ['./mini-game-modal.component.scss'],
})
export class MiniGameModalComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean;
  @Output() openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('miniGame') miniGame: any;

  isOpenModal = false;
  isProcessing = false;
  isLoadingGameInfo = false;
  modalClose = undefined;
  faCircleXmark = faCircleXmark;

  isError = false;
  errorMsg = null;

  balance = 0;
  progress = 0;
  currentProfit = 0;
  timer = {
    hours: '00',
    minutes: '00',
    seconds: '00',
  }
  gameStatus = 'can-start';

  HOUR_IN_MS = 1000 * 60 * 60;
  MINUTE_IN_MS = 1000 * 60;
  SECOND_IN_MS = 1000;

  LS_NAME = 'claimInProgressTXWithTTL';

  timerId = null;
  progressId = null;
  buttonIsActive = false;

  gameInfoIsLoaded = false;
  lastTxStatus = null;
  lastTx = null;
  blockExplorerUrl = '/';

  constructor(
    private modalService: NgbModal,
    private helpInfo: HelpInfo,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private translateService: TranslateService,
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

  async openModal() {
    this.isOpenModal = true;
    this.modalClose = this.modalService.open(this.miniGame, {
      centered: true,
      modalDialogClass: 'dialog-wide'
    });
    this.modalClose.dismissed.subscribe(x => {
      this.isOpenModal = false;
      this.openEvent.emit(false);
    });

    this.isProcessing = false;
    this.errorMsg = null;
    this.lastTxStatus = null;
    this.buttonIsActive = false;
    this.timerId && clearInterval(this.timerId);
    this.progressId && clearInterval(this.progressId);
    this.progress = 0;

    this.updateGameInfo();
  }

  async updateGameInfo() {
    const currentDate = new Date();
    let canStartNewGame = false;

    this.walletService.getBalancesOnPayment(this.helpInfo.userId.value)
      .then(x => this.balance = this.roundDown(x?.qen || '0', 2));

    this.isLoadingGameInfo = true;

    const activeUserWaves = await this.walletService.getMyActiveWavesCount();
    const { chainId } = await this.walletService.provider.getNetwork();

    this.blockExplorerUrl = BLOCK_EXPLORERS_URLS[chainId];

    activeUserWaves.map(wave => {
      const waveTTL = +wave.wave.waveId > 728
          ? WAVE_ACTIVE_PERIOD_AFTER_728[chainId]
          : WAVE_ACTIVE_PERIOD_BEFORE_728[chainId];

      if (currentDate.getTime() < (new Date(wave.wave.startDate).getTime() + waveTTL)) {
        canStartNewGame = true;
        return;
      }
    });

    const gameInfo = await this.walletService.getMyButtonGameInfo();
    const nextRewardTimer = new Date(gameInfo?.nextRewardAt);
    const lastTxHash = gameInfo?.lastTxHash;
    const leftMs = nextRewardTimer.getTime() - currentDate.getTime();

    // если пользователь зашел в игру первый раз
    if (!gameInfo) {
      this.gameStatus = canStartNewGame ? 'can-start' : 'wait';
      this.timer.hours = '24';
      this.buttonIsActive = canStartNewGame;
      this.currentProfit = 0;
      this.progress = 0;

    } else {
      // заклеймил ранее, но больше нет активных волн, игра автоматически не рестартовала
      if (!gameInfo.isActive) {
        this.gameStatus = 'wait';
        this.timer.hours = '24';
        this.buttonIsActive = false;
        this.currentProfit = 0;
        this.progress = 0;

      // если время клейма пришло
      } else if (leftMs <= 0) {
        this.gameStatus = 'can-claim';
        this.progress = 100;
        this.timer.hours = '00';
        this.buttonIsActive = true;
        this.currentProfit = this.roundDown(+ethers.utils.formatEther(gameInfo?.nextRewardAmount).toString(), 6);
        const savedTx = localStorage.getItem(this.LS_NAME);
        try {
          this.lastTx = JSON.parse(savedTx)[this.helpInfo.userId.value]?.tx;
          if (this.lastTx) {
            const ttl = JSON.parse(savedTx)[this.helpInfo.userId.value]?.ttl || Date.now();
            if ((ttl + 1000 * 60 * 3) < Date.now()) { // время жизни - 3 минуты
              this.lastTx = null;
            }
          }
        } catch(e) {
          this.lastTx = null;
        }

        if (this.lastTx && lastTxHash != this.lastTx) {
          this.buttonIsActive = false;
          this.lastTxStatus = await this.walletService.getTransactionStatus(this.lastTx);

          if (this.lastTxStatus != 'PENDING' && this.lastTxStatus != 'SUCCESS') {
            this.buttonIsActive = true;
          }
        } else {
          this.lastTxStatus = null;
          this.lastTx = null;

          const savedTx = localStorage.getItem(this.LS_NAME);
          let savedTxObj = {};
          try {
            savedTxObj = JSON.parse(savedTx);
            delete savedTxObj[this.helpInfo.userId.value.toString()];
          } catch(e) {}

          localStorage.setItem(this.LS_NAME, JSON.stringify(savedTxObj));
        }

      // если время клейма не настало, включаем тикалку
      } else {
        this.startTickingTimer(gameInfo.nextRewardAt, gameInfo.nextRewardAmount);
        this.timerId = setInterval(() => this.startTickingTimer(gameInfo.nextRewardAt, gameInfo.nextRewardAmount), 1000);
        this.gameStatus = 'in-progress';
        this.buttonIsActive = false;
      }
    }

    this.isLoadingGameInfo = false;
    this.gameInfoIsLoaded = true;
  }

  startTickingTimer(nextRewardAt, nextRewardAmount) {
    const currentDate = new Date();
    const nextRewardTimer = new Date(nextRewardAt);
    const leftMs = nextRewardTimer.getTime() - currentDate.getTime();

    if (leftMs <= 0) {
      this.timerId && clearInterval(this.timerId);
      this.progressId && clearInterval(this.progressId);
      this.updateGameInfo();
      return;
    }

    if (!this.progressId) {
      this.startTickingProgress(nextRewardAt, nextRewardAmount);
      this.progressId = setInterval(() => this.startTickingProgress(nextRewardAt, nextRewardAmount), 1000 * 20);
    }

    const hours = Math.floor(leftMs / this.HOUR_IN_MS);
    const minutes = Math.floor((leftMs - (hours * this.HOUR_IN_MS)) / (this.MINUTE_IN_MS));
    const seconds = Math.floor((leftMs - ((hours * this.HOUR_IN_MS) + (minutes * this.MINUTE_IN_MS))) / this.SECOND_IN_MS);

    this.timer.hours = hours.toString().padStart(2, '0');
    this.timer.minutes = minutes.toString().padStart(2, '0');
    this.timer.seconds = seconds.toString().padStart(2, '0');

    const gameFullDuration = this.HOUR_IN_MS * 24;
    this.progress = 100 - Math.floor((leftMs * 100) / gameFullDuration);
  }

  startTickingProgress(nextRewardAt, nextRewardAmount) {
    const currentDate = new Date();
    const nextRewardTimer = new Date(nextRewardAt);
    const leftMs = nextRewardTimer.getTime() - currentDate.getTime();

    const currentRewardAmount = (+ethers.utils.formatEther(nextRewardAmount) / (24 * this.HOUR_IN_MS)) * (this.HOUR_IN_MS * 24 - leftMs);
    this.currentProfit = this.roundDown(currentRewardAmount.toString(), 6);
  }

  closeModal() {
    this.isOpenModal = false;
    this.isProcessing = false;
    this.errorMsg = null;
    this.timerId && clearInterval(this.timerId);
    this.progressId && clearInterval(this.progressId);
    this.progress = 0;
    this.currentProfit = 0;
    this.timer.hours = '00';
    this.timer.minutes = '00';
    this.buttonIsActive = false;
    this.timer.seconds = '00';
    this.openEvent.emit(false);
    this.modalClose.dismiss('close');
  }

  async start() {
    this.isProcessing = true;
    try {
      await this.walletService.createStartGameRequest();
      await this.updateGameInfo();
    } catch (e) {
      this.errorMsg = e;
    }
    this.isProcessing = false;
  }

  async claim() {
    this.isProcessing = true;
    try {
      await this.walletService.createGameAvailableRewardRequest();
      await this.updateGameInfo();
    } catch (e) {
      this.errorMsg = e;
    }

    this.isProcessing = false;
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
