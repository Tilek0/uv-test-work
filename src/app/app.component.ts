import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as Waves from 'node-waves';

import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { CoreLoadingScreenService } from '@core/services/loading-screen.service';
import { CoreTranslationService } from '@core/services/translation.service';

import { menu } from 'app/menu/menu';
import { locale as menuEnglish } from 'app/menu/i18n/en';
import { locale as menuRussian } from 'app/menu/i18n/ru';
import { locale as menuChine } from 'app/menu/i18n/zh';
import { locale as menuHindi } from 'app/menu/i18n/hi';
import { locale as menuVietnam } from 'app/menu/i18n/vi';
import { locale as menuArab } from 'app/menu/i18n/ar';
import { locale as menuIndonesia } from 'app/menu/i18n/id';
import { environment } from 'environments/environment';
import { locale as menuUrdu } from 'app/menu/i18n/ur';
import { locale as menuFrench } from 'app/menu/i18n/fr';
import { HelpInfo } from './auth/helpers';
import { MyWeb3ModalService } from './auth/service/web3Modal.service';

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5';
import { WalletService } from './auth/service/wallet.service';
import { Web3Provider } from '@ethersproject/providers';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ethers } from 'ethers';
import { v4 as uuidv4 } from "uuid";

// import { locale as menuPortuguese } from 'app/menu/i18n/pt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  coreConfig: any;
  menu: any;
  expectainModalIsOpen = false;
  defaultLanguage: 'en'; // This language will be used as a fallback when a translation isn't found in the current language
  appLanguage: 'en'; // Set application default language i.e fr
  error: '';

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Title} _title
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreLoadingScreenService} _coreLoadingScreenService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreTranslationService} _coreTranslationService
   * @param {TranslateService} _translateService
   * @param _helper
   * @param walletService
   * @param _router
   * @param myWeb3ModalService
   * @param _toastrService
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _title: Title,
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    public _coreConfigService: CoreConfigService,
    private _coreSidebarService: CoreSidebarService,
    private _coreLoadingScreenService: CoreLoadingScreenService,
    private _coreMenuService: CoreMenuService,
    private _coreTranslationService: CoreTranslationService,
    private _translateService: TranslateService,
    private _helper: HelpInfo,
    private walletService: WalletService,
    private _router: Router,
    private myWeb3ModalService: MyWeb3ModalService,
    private _toastrService: ToastrService
  ) {
    // Get the application main menu
    this.menu = menu;

    // Register the menu to the menu service
    this._coreMenuService.register('main', this.menu);

    // Set the main menu as our current menu
    this._coreMenuService.setCurrentMenu('main');

    // Add languages to the translation service
    this._translateService.addLangs([
      'en',
      'ru',
      'hi',
      'zh',
      'vi',
      'ar',
      'id',
      'ur',
      'fr',
    ]);

    // This language will be used as a fallback when a translation isn't found in the current language
    this._translateService.setDefaultLang('en');

    // Set the translations for the menu
    this._coreTranslationService.translate(
      menuEnglish,
      menuRussian,
      menuChine,
      menuHindi,
      menuVietnam,
      menuArab,
      menuIndonesia,
      menuUrdu,
      menuFrench
    );

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  // ng update @angular/cli @angular/core @angular/material @angular/cdk
  /**
   * On init
   */
  ngOnInit(): void {
    const modal = 
    createWeb3Modal({
      ethersConfig: defaultConfig({
        metadata: this.myWeb3ModalService.metadata,
        defaultChainId: 137,
        enableEIP6963: true,
        enableInjected: true,
        enableCoinbase: true,
        rpcUrl: 'https://polygon-rpc.meta-force.space'
      }),
      chains: [
        this.myWeb3ModalService.mainnet,
        this.myWeb3ModalService.mumbai,
      ],
      defaultChain: this.myWeb3ModalService.mainnet,
      projectId: this.myWeb3ModalService.projectId,
    });
    // console.log('modal.getAddress()', modal.getAddress())
    // if (modal.getAddress() === undefined) {
    //   modal.open({ view: 'Connect' });
    // }
    this.myWeb3ModalService.modal.next(modal);
    // 

    this.myWeb3ModalService.subscribeProvider(this.callBack.bind(this));
    this._helper.expectainModalIsOpen.subscribe(result => {
      this.expectainModalIsOpen = result;
    });
    // Init wave effect (Ripple effect)
    Waves.init();
    // TODO fixing problems with authorization. environment.verBuild needs to be increased by 1 for this to work
    if (
      !localStorage.getItem('isFistLoginInNewBuild') ||
      JSON.parse(localStorage.getItem('isFistLoginInNewBuild')) !=
        environment.verBuild
    ) {
      localStorage.clear();
      localStorage.setItem('isFistLoginInNewBuild', environment.verBuild + '');
      localStorage.setItem('walletConnect', 'false');
      localStorage.setItem('account', null);
    }
    // localStorage.clear();
    // if (localStorage.getItem("clearStorage") !== environment.storageClearAppVersion) {
    //   localStorage.clear()
    //   localStorage.setItem("clearStorage", environment.storageClearAppVersion)
    // }

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.coreConfig = config;

        // Set application default language.

        // Change application language? Read the ngxTranslate Fix

        // ? Use app-config.ts file to set default language

        if (this.coreConfig.app.appLanguage === 'ru') {
          this.document.body.classList.add('font-famile-for-ru-language');
        } else {
          this.document.body.classList.remove('font-famile-for-ru-language');
        }
        const appLanguage = this.coreConfig.app.appLanguage || 'en';
        this._translateService.use(appLanguage);

        // ? OR
        // ? User the current browser lang if available, if undefined use 'en'
        // const browserLang = this._translateService.getBrowserLang();
        // this._translateService.use(browserLang.match(/en|fr|de|pt/) ? browserLang : 'en');

        /**
         * ! Fix : ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         *
         * Using different language than the default ('en') one i.e French?
         * In this case, you may find the issue where application is not properly translated when your app is initialized.
         *
         * It's due to ngxTranslate module and below is a fix for that.
         * Eventually we will move to the multi language implementation over to the Angular's core language service.
         *
         **/

        // Set the default language to 'en' and then back to 'fr'.

        setTimeout(() => {
          this._translateService.setDefaultLang('en');
          this._translateService.setDefaultLang(appLanguage);
        });

        /**
         * !Fix: ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */

        // Layout
        //--------

        // Remove default classes first
        this._elementRef.nativeElement.classList.remove(
          'vertical-layout',
          'vertical-menu-modern',
          'horizontal-layout',
          'horizontal-menu'
        );
        // Add class based on config options
        if (this.coreConfig.layout.type === 'vertical') {
          this._elementRef.nativeElement.classList.add(
            'vertical-layout',
            'vertical-menu-modern'
          );
        } else if (this.coreConfig.layout.type === 'horizontal') {
          this._elementRef.nativeElement.classList.add(
            'horizontal-layout',
            'horizontal-menu'
          );
        }

        // Navbar
        //--------

        // Remove default classes first
        this._elementRef.nativeElement.classList.remove(
          'navbar-floating',
          'navbar-static',
          'navbar-sticky',
          'navbar-hidden'
        );

        // Add class based on config options
        if (this.coreConfig.layout.navbar.type === 'navbar-static-top') {
          this._elementRef.nativeElement.classList.add('navbar-static');
        } else if (this.coreConfig.layout.navbar.type === 'fixed-top') {
          this._elementRef.nativeElement.classList.add('navbar-sticky');
        } else if (this.coreConfig.layout.navbar.type === 'floating-nav') {
          this._elementRef.nativeElement.classList.add('navbar-floating');
        } else {
          this._elementRef.nativeElement.classList.add('navbar-hidden');
        }

        // Footer
        //--------

        // Remove default classes first
        this._elementRef.nativeElement.classList.remove(
          'footer-fixed',
          'footer-static',
          'footer-hidden'
        );

        // Add class based on config options
        if (this.coreConfig.layout.footer.type === 'footer-sticky') {
          this._elementRef.nativeElement.classList.add('footer-fixed');
        } else if (this.coreConfig.layout.footer.type === 'footer-static') {
          this._elementRef.nativeElement.classList.add('footer-static');
        } else {
          this._elementRef.nativeElement.classList.add('footer-hidden');
        }

        // Blank layout
        if (
          this.coreConfig.layout.menu.hidden &&
          this.coreConfig.layout.navbar.hidden &&
          this.coreConfig.layout.footer.hidden
        ) {
          this._elementRef.nativeElement.classList.add('blank-page');
          // ! Fix: Transition issue while coming from blank page
          this._renderer.setAttribute(
            this._elementRef.nativeElement.getElementsByClassName(
              'app-content'
            )[0],
            'style',
            'transition:none'
          );
        } else {
          this._elementRef.nativeElement.classList.remove('blank-page');
          // ! Fix: Transition issue while coming from blank page
          setTimeout(() => {
            this._renderer.setAttribute(
              this._elementRef.nativeElement.getElementsByClassName(
                'app-content'
              )[0],
              'style',
              'transition:300ms ease all'
            );
          }, 0);
          // If navbar hidden
          if (this.coreConfig.layout.navbar.hidden) {
            this._elementRef.nativeElement.classList.add('navbar-hidden');
          }
          // Menu (Vertical menu hidden)
          if (this.coreConfig.layout.menu.hidden) {
            this._renderer.setAttribute(
              this._elementRef.nativeElement,
              'data-col',
              '1-column'
            );
          } else {
            this._renderer.removeAttribute(
              this._elementRef.nativeElement,
              'data-col'
            );
          }
          // Footer
          if (this.coreConfig.layout.footer.hidden) {
            this._elementRef.nativeElement.classList.add('footer-hidden');
          }
        }

        // Skin Class (Adding to body as it requires highest priority)
        if (
          this.coreConfig.layout.skin !== '' &&
          this.coreConfig.layout.skin !== undefined
        ) {
          this.document.body.classList.remove(
            'default-layout',
            'bordered-layout',
            'dark-layout',
            'semi-dark-layout'
          );
          this.document.body.classList.add(
            this.coreConfig.layout.skin + '-layout'
          );
        }
      });

    // Set the application page title
    this._title.setTitle(this.coreConfig.app.appTitle);

    // this._toastrService.success("123")
  }

  async checkSignature(signer: ethers.Signer) {
    const signerAddr = await signer.getAddress();
    const nonce = uuidv4();
    const msg =
      "Welcome to Holiverse!\n\n" +
      "Click to sign in and accept the Holiverse Terms of Service: https://holiverse.ai/terms\n\n" +
      "This request will not trigger a blockchain transaction or cost any gas fees.\n\n" +
      "Your authentication status will reset after 24 hours.\n\n" +
      "Wallet address:\n" +
      `${signerAddr}\n\n` +
      "Nonce:\n" +
      `${nonce}`;

    try {
      const sig = await signer.signMessage(msg);
      const msgSignerAddr = ethers.utils.verifyMessage(msg, sig);

      return signerAddr === msgSignerAddr;
    } catch {
      return false;
    }
}

blockedAccounts = [
  "0x29d92cb2cd2bfd81ddfcc46d271a4ade84d5dcdb",
  "0xf655e7b3fd78b9e41e8c58c02d4fe044f09a5e7a",
  "0xfac67508c4d44ca444c3fda793aed8ee26f1f7ab",
  "0xb56e64c2fc8b319f5f6fffd805cafb9c0181ead4",
  "0x7c99b748a20035ab69a2534f4e4110339e5c7515",
  "0x4b1a0b966a11a8c512868b4e6a49b87d6bc1dc2a",
  "0x428aefa4cbcd906045fa07ba4d3d1667cde4f1a3",
  "0xb0c9781fb5c56d7783084829bd97159d951a8a61",
  "0x222d8f63a095d757e1a1691bb028cb22dfa8b5e4",
  "0x9bc02f9e666cea0da10cb34a748e878551b95c82",
  "0x5db8e57470f13dcdadd93a1ec698b3647b98b84c",
  "0x6d1eb44fef0f2f0f9ecef545f3718c4d6b0a5faf",
  "0x89ee58b18fabb504763e7acc78ef5907d222b181",
  "0xd3b33e7390d6ba901932edeaafac761a87dd065b",
  "0xb7f7d0ca6bce5128dfeb9dac13b1dd7edd73cf7c",
  "0x2976cb0b394618fef537675355f28e60c9e6eb60",
  "0xb2e0a1439cce273117d4658a006ddc699e996ac3",
  "0x66a92563d63c4c2bd85087a973131ede458be058",
  "0x5671a999d5d7bc59b86b444a68ce573ba5113151",
  "0xdbe67ea049ea4e95827404466b6758bd093650ba",
  "0xa783a1d43bea9777a8e72ae7a16da12fcf2712bc",
];
  async callBack(provider) {
    this.error = provider.chainId;
    
    try {
      if (provider.provider !== undefined) {
        provider.provider.on('accountsChanged', async (accounts) => {
          // localStorage.setItem('walletConnect', JSON.stringify(false));
          localStorage.setItem('account', null);
          // alert('222');
          location.reload();
        });
        this.myWeb3ModalService.closeModal();
        this.walletService.currentProvider = provider;

        let web3Provider = new Web3Provider(provider.provider);

        const account = (await web3Provider.getSigner().getAddress()).toLocaleLowerCase();
        if(this.blockedAccounts.includes(account)) {
          console.log('walletConnect', JSON.parse(localStorage.getItem('walletConnect')))
          localStorage.setItem('walletConnect', JSON.stringify(false));
          await this._router.navigate(['/connect-wallet']);
          this.walletService.isDisconnect.next(true);
          return;
        }

        if (localStorage.getItem('account') !== account) {
          const result = await this.checkSignature(web3Provider.getSigner());
          if (!result) {
              this.myWeb3ModalService.disconect()
              alert('Address not confirmed');
              return
          } else {
              localStorage.setItem('walletConnect', JSON.stringify(true));
              localStorage.setItem('account', account);
          }
        }
        localStorage.setItem('IsMetamask', JSON.stringify(false));
       
        localStorage.setItem('chainId', provider.chainId);
        await this.walletService.getAccountInfo(web3Provider); // .then(() => console.log('get account info succeed'));
      } else {
        console.log('walletConnect', JSON.parse(localStorage.getItem('walletConnect')))
        localStorage.setItem('walletConnect', JSON.stringify(false));
        await this._router.navigate(['/connect-wallet']);
        this.walletService.isDisconnect.next(true);
      }
    } catch (e) {
      this.error = e;
      console.log('error', e);
      alert(e);
    }
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebar(key): void {
    this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
  }
}

