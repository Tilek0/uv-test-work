import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { locale as russian } from './i18n/ru';
import { locale as english } from './i18n/en';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { CoreConfigService } from '@core/services/config.service';

import { WalletService } from 'app/auth/service/wallet.service';
import { MyWeb3ModalService } from 'app/auth/service/web3Modal.service';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss'],
})
export class ConnectWalletComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private _coreConfigService: CoreConfigService,
    private coreTranslationService: CoreTranslationService,
    private web3ModalService: MyWeb3ModalService,
    private walletService: WalletService
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
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        customizer: true,
        enableLocalStorage: false,
      },
    };
  }

  ngOnInit(): void {
    let isConnect = localStorage.getItem('walletConnect');
    if (isConnect) {
      if (!JSON.parse(isConnect)) {
        this.reConnect();
      }
    }
  }

  async reConnect() {
    this.web3ModalService.openModal({view: 'Connect'});
  }
  back() {}
}
