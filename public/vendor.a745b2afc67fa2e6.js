      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${Y(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${Y(y)}
        avatarSrc=${Y(this.profileImage)}
        balance=${x?k.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
      >
      </wui-account-button>
    `}onClick(){k.IN.open()}};ee([(0,H.Cb)({type:Boolean})],ue.prototype,"disabled",void 0),ee([(0,H.Cb)()],ue.prototype,"balance",void 0),ee([(0,H.SB)()],ue.prototype,"address",void 0),ee([(0,H.SB)()],ue.prototype,"balanceVal",void 0),ee([(0,H.SB)()],ue.prototype,"balanceSymbol",void 0),ee([(0,H.SB)()],ue.prototype,"profileName",void 0),ee([(0,H.SB)()],ue.prototype,"profileImage",void 0),ee([(0,H.SB)()],ue.prototype,"network",void 0),ue=ee([(0,j.customElement)("w3m-account-button")],ue);var X=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let J=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=k.Ni.state.isConnected,this.unsubscribe.push(k.Ni.subscribeKey("isConnected",y=>{this.isAccount=y}))}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}render(){return this.isAccount?I.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${Y(this.balance)}
          >
          </w3m-account-button>
        `:I.dy`
          <w3m-connect-button
            size=${Y(this.size)}
            label=${Y(this.label)}
            loadingLabel=${Y(this.loadingLabel)}
          ></w3m-connect-button>
        `}};X([(0,H.Cb)({type:Boolean})],J.prototype,"disabled",void 0),X([(0,H.Cb)()],J.prototype,"balance",void 0),X([(0,H.Cb)()],J.prototype,"size",void 0),X([(0,H.Cb)()],J.prototype,"label",void 0),X([(0,H.Cb)()],J.prototype,"loadingLabel",void 0),X([(0,H.SB)()],J.prototype,"isAccount",void 0),J=X([(0,j.customElement)("w3m-button")],J);var ie=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let q=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=k.IN.state.open,this.loading=k.IN.state.loading,this.unsubscribe.push(k.IN.subscribe(y=>{this.open=y.open,this.loading=y.loading}))}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}render(){const y=this.loading||this.open;return I.dy`
      <wui-connect-button
        size=${Y(this.size)}
        .loading=${y}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${y?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?k.IN.close():k.IN.open()}};ie([(0,H.Cb)()],q.prototype,"size",void 0),ie([(0,H.Cb)()],q.prototype,"label",void 0),ie([(0,H.Cb)()],q.prototype,"loadingLabel",void 0),ie([(0,H.SB)()],q.prototype,"open",void 0),ie([(0,H.SB)()],q.prototype,"loading",void 0),q=ie([(0,j.customElement)("w3m-connect-button")],q),t(15129);var te=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let N=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=k.fB.state.caipNetwork,this.connected=k.Ni.state.isConnected,this.loading=k.IN.state.loading,this.unsubscribe.push(k.fB.subscribeKey("caipNetwork",y=>this.network=y),k.Ni.subscribeKey("isConnected",y=>this.connected=y),k.IN.subscribeKey("loading",y=>this.loading=y))}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}render(){return I.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        imageSrc=${Y(k.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){k.IN.open({view:"Networks"})}};te([(0,H.Cb)({type:Boolean})],N.prototype,"disabled",void 0),te([(0,H.SB)()],N.prototype,"network",void 0),te([(0,H.SB)()],N.prototype,"connected",void 0),te([(0,H.SB)()],N.prototype,"loading",void 0),N=te([(0,j.customElement)("w3m-network-button")],N);const E=I.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var T=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let L=class extends I.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=k.Pc.state.view,this.unsubscribe.push(k.Pc.subscribeKey("view",y=>this.onViewChange(y)))}firstUpdated(){var y=this;this.resizeObserver=new ResizeObserver(function(){var x=(0,b.Z)(function*([re]){const be=`${re?.contentRect.height}px`;"0px"!==y.prevHeight&&(yield y.animate([{height:y.prevHeight},{height:be}],{duration:150,easing:"ease",fill:"forwards"}).finished,y.style.height="auto"),y.prevHeight=be});return function(re){return x.apply(this,arguments)}}()),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(y=>y())}render(){return I.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return I.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return I.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return I.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return I.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return I.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return I.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return I.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return I.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return I.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return I.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return I.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return I.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return I.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return I.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return I.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return I.dy`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return I.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return I.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return I.dy`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}onViewChange(y){var x=this;return(0,b.Z)(function*(){const{history:re}=k.Pc.state;let be=-10,Ee=10;re.length<x.prevHistoryLength&&(be=10,Ee=-10),x.prevHistoryLength=re.length,yield x.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${be}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,x.view=y,yield x.animate([{opacity:0,transform:`translateX(${Ee}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished})()}getWrapper(){return this.shadowRoot?.querySelector("div")}};L.styles=E,T([(0,H.SB)()],L.prototype,"view",void 0),L=T([(0,j.customElement)("w3m-router")],L);const F=I.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var Q=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let fe=class extends I.oi{constructor(){super(),this.usubscribe=[],this.address=k.Ni.state.address,this.profileImage=k.Ni.state.profileImage,this.profileName=k.Ni.state.profileName,this.balance=k.Ni.state.balance,this.balanceSymbol=k.Ni.state.balanceSymbol,this.network=k.fB.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(k.Ni.subscribe(y=>{y.address?(this.address=y.address,this.profileImage=y.profileImage,this.profileName=y.profileName,this.balance=y.balance,this.balanceSymbol=y.balanceSymbol):k.IN.close()}),k.fB.subscribeKey("caipNetwork",y=>{y?.id&&(this.network=y)}))}disconnectedCallback(){this.usubscribe.forEach(y=>y())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const y=k.fz.getNetworkImage(this.network);return I.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Y(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${j.UiHelperUtil.getTruncateString(this.profileName?{string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}:{string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${k.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${y?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Y(y)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const y=k.MO.getConnectedConnector(),x=k.AA.getEmailConnector(),{origin:re}=location;return!x||"EMAIL"!==y||re.includes(k.bq.SECURE_SITE)?null:I.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const y=k.MO.getConnectedConnector(),x=k.AA.getEmailConnector();if(!x||"EMAIL"!==y)return null;const re=x.provider.getEmail()??"";return I.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(re)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${re}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:y}=k.Ni.state;return y?I.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:y}=k.fB.state,x=!!y&&y.length>1,re=y?.find(({id:be})=>be===this.network?.id);return x||!re}onCopyAddress(){try{this.address&&(k.j1.copyToClopboard(this.address),k.KC.showSuccess("Address copied"))}catch{k.KC.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&k.Pc.push("Networks")}onTransactions(){k.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),k.Pc.push("Transactions")}onDisconnect(){var y=this;return(0,b.Z)(function*(){try{y.disconecting=!0,yield k.lZ.disconnect(),k.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),k.IN.close()}catch{k.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),k.KC.showError("Failed to disconnect")}finally{y.disconecting=!1}})()}onExplorer(){const{addressExplorerUrl:y}=k.Ni.state;y&&k.j1.openHref(y,"_blank")}onGoToUpgradeView(){k.Pc.push("UpgradeEmailWallet")}onGoToUpdateEmail(y){k.Pc.push("UpdateEmailWallet",{email:y})}};fe.styles=F,Q([(0,H.SB)()],fe.prototype,"address",void 0),Q([(0,H.SB)()],fe.prototype,"profileImage",void 0),Q([(0,H.SB)()],fe.prototype,"profileName",void 0),Q([(0,H.SB)()],fe.prototype,"balance",void 0),Q([(0,H.SB)()],fe.prototype,"balanceSymbol",void 0),Q([(0,H.SB)()],fe.prototype,"network",void 0),Q([(0,H.SB)()],fe.prototype,"disconecting",void 0),fe=Q([(0,j.customElement)("w3m-account-view")],fe);var _e=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let xe=class extends I.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=k.j1.debounce(y=>{this.search=y})}render(){const y=this.search.length>=2;return I.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${y?I.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:I.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(y){this.onDebouncedSearch(y.detail)}qrButtonTemplate(){return k.j1.isMobile()?I.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){k.Pc.push("ConnectingWalletConnect")}};_e([(0,H.SB)()],xe.prototype,"search",void 0),xe=_e([(0,j.customElement)("w3m-all-wallets-view")],xe);const ye=I.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var me=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Ne=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.connectors=k.AA.state.connectors,this.unsubscribe.push(k.AA.subscribeKey("connectors",y=>this.connectors=y))}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}render(){return I.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(k.j1.isMobile())return null;const y=this.connectors.find(x=>"WALLET_CONNECT"===x.type);return y?I.dy`
      <wui-list-wallet
        imageSrc=${Y(k.fz.getConnectorImage(y))}
        name=${y.name??"Unknown"}
        @click=${()=>this.onConnector(y)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:y}=k.hD.state;return y?.length?this.filterOutDuplicateWallets(y).map(re=>I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getWalletImage(re))}
          name=${re.name??"Unknown"}
          @click=${()=>this.onConnectWallet(re)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(be=>"WALLET_CONNECT"===be.type))return null;const{featured:x}=k.QT.state;return x.length?this.filterOutDuplicateWallets(x).map(be=>I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getWalletImage(be))}
          name=${be.name??"Unknown"}
          @click=${()=>this.onConnectWallet(be)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return k.MO.getRecentWallets().map(x=>I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getWalletImage(x))}
          name=${x.name??"Unknown"}
          @click=${()=>this.onConnectWallet(x)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(y=>"ANNOUNCED"!==y.type?null:I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getConnectorImage(y))}
          name=${y.name??"Unknown"}
          @click=${()=>this.onConnector(y)}
          tagVariant="success"
          installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const y=this.connectors.find(x=>"ANNOUNCED"===x.type);return this.connectors.map(x=>"INJECTED"===x.type&&k.lZ.checkInstalled()?I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getConnectorImage(x))}
          installed=${Boolean(y)}
          name=${x.name??"Unknown"}
          @click=${()=>this.onConnector(x)}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(y=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(y.type)?null:I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getConnectorImage(y))}
          name=${y.name??"Unknown"}
          @click=${()=>this.onConnector(y)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(It=>"WALLET_CONNECT"===It.type))return null;const be=k.QT.state.count+k.QT.state.featured.length,Ee=be<10?be:10*Math.floor(be/10),Ye=Ee<be?`${Ee}+`:`${Ee}`;return I.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${Ye}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(Tr=>"WALLET_CONNECT"===Tr.type))return null;const{recommended:x}=k.QT.state,{customWallets:re,featuredWalletIds:be}=k.hD.state,{connectors:Ee}=k.AA.state,Ye=k.MO.getRecentWallets(),It=Ee.filter(Tr=>"ANNOUNCED"===Tr.type);if(be||re||!x.length)return null;const Yn=Math.max(0,2-(It.length+Ye.length));return this.filterOutDuplicateWallets(x).slice(0,Yn).map(Tr=>I.dy`
        <wui-list-wallet
          imageSrc=${Y(k.fz.getWalletImage(Tr))}
          name=${Tr?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(Tr)}
        >
        </wui-list-wallet>
      `)}onConnector(y){"WALLET_CONNECT"===y.type?k.j1.isMobile()?k.Pc.push("AllWallets"):k.Pc.push("ConnectingWalletConnect"):k.Pc.push("ConnectingExternal",{connector:y})}filterOutDuplicateWallets(y){const{connectors:x}=k.AA.state,be=k.MO.getRecentWallets().map(It=>It.id),Ee=x.map(It=>It.info?.rdns).filter(Boolean);return y.filter(It=>!be.includes(It.id)&&!Ee.includes(It.rdns??void 0))}onAllWallets(){k.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),k.Pc.push("AllWallets")}onConnectWallet(y){k.Pc.push("ConnectingWalletConnect",{wallet:y})}};Ne.styles=ye,me([(0,H.SB)()],Ne.prototype,"connectors",void 0),Ne=me([(0,j.customElement)("w3m-connect-view")],Ne);const ze=I.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ve=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};class Ce extends I.oi{constructor(){super(),this.wallet=k.Pc.state.data?.wallet,this.connector=k.Pc.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=k.fz.getWalletImage(this.wallet)??k.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=k.lZ.state.wcUri,this.error=k.lZ.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(k.lZ.subscribeKey("wcUri",y=>{this.uri=y,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),k.lZ.subscribeKey("wcError",y=>this.error=y),k.lZ.subscribeKey("buffering",y=>this.buffering=y))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(y=>y()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const y=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let x=`Continue in ${this.name}`;return this.buffering&&(x="Connecting..."),this.error&&(x="Connection declined"),I.dy`
      <wui-flex
        data-error=${Y(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Y(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${x}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${y}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?I.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(k.lZ.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const y=k.u0.state.themeVariables["--w3m-border-radius-master"],x=y?parseInt(y.replace("px",""),10):4;return I.dy`<wui-loading-thumbnail radius=${9*x}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(k.j1.copyToClopboard(this.uri),k.KC.showSuccess("Link copied"))}catch{k.KC.showError("Failed to copy")}}}Ce.styles=ze,ve([(0,H.SB)()],Ce.prototype,"uri",void 0),ve([(0,H.SB)()],Ce.prototype,"error",void 0),ve([(0,H.SB)()],Ce.prototype,"ready",void 0),ve([(0,H.SB)()],Ce.prototype,"showRetry",void 0),ve([(0,H.SB)()],Ce.prototype,"buffering",void 0),ve([(0,H.Cb)({type:Boolean})],Ce.prototype,"isMobile",void 0),ve([(0,H.Cb)()],Ce.prototype,"onRetry",void 0);const De={INJECTED:"browser",ANNOUNCED:"browser"};let ne=class extends Ce{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:De[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}onConnectProxy(){var y=this;return(0,b.Z)(function*(){try{y.error=!1,y.connector&&(y.connector.imageUrl&&k.MO.setConnectedWalletImageUrl(y.connector.imageUrl),yield k.lZ.connectExternal(y.connector),k.yD.state.isSiweEnabled?k.Pc.push("ConnectingSiwe"):k.IN.close(),k.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(x){k.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:x?.message??"Unknown"}}),y.error=!0}})()}};ne=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-external-view")],ne);var Te=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Le=class extends I.oi{constructor(){super(...arguments),this.dappName=k.hD.state.metadata?.name,this.isSigning=!1}render(){return I.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onSign(){var y=this;return(0,b.Z)(function*(){y.isSigning=!0,k.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{k.yD.setStatus("loading");const x=yield k.yD.signIn();return k.yD.setStatus("success"),k.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),x}catch{return k.KC.showError("Signature declined"),k.yD.setStatus("error"),k.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{y.isSigning=!1}})()}onCancel(){return(0,b.Z)(function*(){const{isConnected:y}=k.Ni.state;y?(yield k.lZ.disconnect(),k.IN.close()):k.Pc.push("Connect"),k.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})})()}};Te([(0,H.SB)()],Le.prototype,"isSigning",void 0),Le=Te([(0,j.customElement)("w3m-connecting-siwe-view")],Le);var at=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let cn=class extends I.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=k.Pc.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),k.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),I.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):I.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}initializeConnection(y=!1){var x=this;return(0,b.Z)(function*(){try{const{wcPairingExpiry:re}=k.lZ.state;if(y||k.j1.isPairingExpired(re)){if(k.lZ.connectWalletConnect(),x.wallet){const be=k.fz.getWalletImage(x.wallet);be&&k.MO.setConnectedWalletImageUrl(be)}else{const Ee=k.AA.state.connectors.find(It=>"WALLET_CONNECT"===It.type),Ye=k.fz.getConnectorImage(Ee);Ye&&k.MO.setConnectedWalletImageUrl(Ye)}yield k.lZ.state.wcPromise,x.finalizeConnection(),k.yD.state.isSiweEnabled?k.Pc.push("ConnectingSiwe"):k.IN.close()}}catch(re){k.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:re?.message??"Unknown"}}),k.lZ.setWcError(!0),k.j1.isAllowedRetry(x.lastRetry)&&(k.KC.showError("Declined"),x.lastRetry=Date.now(),x.initializeConnection(!0))}})()}finalizeConnection(){const{wcLinking:y,recentWallet:x}=k.lZ.state;y&&k.MO.setWalletConnectDeepLink(y),x&&k.MO.setWeb3ModalRecent(x),k.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:y?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:y,desktop_link:x,webapp_link:re,injected:be,rdns:Ee}=this.wallet,Ye=be?.map(({injected_id:Br})=>Br).filter(Boolean),It=Ee?[Ee]:Ye??[],Jn=It.length,Yn=y,ar=re,Tr=k.lZ.checkInstalled(It),Qr=Jn&&Tr,ci=x&&!k.j1.isMobile();Qr&&this.platforms.push("browser"),Yn&&this.platforms.push(k.j1.isMobile()?"mobile":"qrcode"),ar&&this.platforms.push("web"),ci&&this.platforms.push("desktop"),!Qr&&Jn&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return I.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return I.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return I.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return I.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return I.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return I.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?I.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}onSelectPlatform(y){var x=this;return(0,b.Z)(function*(){const re=x.shadowRoot?.querySelector("div");re&&(yield re.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,x.platform=y,re.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}};at([(0,H.SB)()],cn.prototype,"platform",void 0),at([(0,H.SB)()],cn.prototype,"platforms",void 0),cn=at([(0,j.customElement)("w3m-connecting-wc-view")],cn);let Xe=class extends I.oi{constructor(){super(...arguments),this.wallet=k.Pc.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return I.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?I.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?I.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?I.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?I.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&k.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&k.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&k.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&k.j1.openHref(this.wallet.homepage,"_blank")}};Xe=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-downloads-view")],Xe);let Ft=class extends I.oi{render(){return I.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{k.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:y,featured:x}=k.QT.state,{customWallets:re}=k.hD.state;return[...x,...re??[],...y].slice(0,4).map(Ee=>I.dy`
        <wui-list-wallet
          name=${Ee.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Y(k.fz.getWalletImage(Ee))}
          @click=${()=>{k.j1.openHref(Ee.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};Ft=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-get-wallet-view")],Ft);const sn=I.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Yt=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let ht=class extends I.oi{constructor(){super(),this.network=k.Pc.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const y=this.error?"Switch declined":"Approve in wallet",x=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return I.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Y(k.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:I.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${y}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${x}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button").animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onSwitchNetwork(){var y=this;return(0,b.Z)(function*(){try{y.error=!1,y.network&&(yield k.fB.switchActiveNetwork(y.network),k.yD.state.isSiweEnabled||k._4.navigateAfterNetworkSwitch())}catch{y.error=!0}})()}};ht.styles=sn,Yt([(0,H.SB)()],ht.prototype,"showRetry",void 0),Yt([(0,H.SB)()],ht.prototype,"error",void 0),ht=Yt([(0,j.customElement)("w3m-network-switch-view")],ht);var ct=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Ve=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=k.fB.state.caipNetwork,this.unsubscribe.push(k.fB.subscribeKey("caipNetwork",y=>this.caipNetwork=y))}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}render(){return I.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){k.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),k.Pc.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:y,requestedCaipNetworks:x,supportsAllNetworks:re}=k.fB.state,be=y,Ee=x,Ye={};return Ee&&be&&(be.forEach((It,Jn)=>{Ye[It]=Jn}),Ee.sort((It,Jn)=>{const Yn=Ye[It.id],ar=Ye[Jn.id];return void 0!==Yn&&void 0!==ar?Yn-ar:void 0!==Yn?-1:void 0!==ar?1:0})),Ee?.map(It=>I.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===It.id}
          imageSrc=${Y(k.fz.getNetworkImage(It))}
          type="network"
          name=${It.name??It.id}
          @click=${()=>this.onSwitchNetwork(It)}
          .disabled=${!re&&!be?.includes(It.id)}
        ></wui-card-select>
      `)}onSwitchNetwork(y){return(0,b.Z)(function*(){const{isConnected:x}=k.Ni.state,{approvedCaipNetworkIds:re,supportsAllNetworks:be,caipNetwork:Ee}=k.fB.state,{data:Ye}=k.Pc.state;x&&Ee?.id!==y.id?re?.includes(y.id)?(yield k.fB.switchActiveNetwork(y),k._4.navigateAfterNetworkSwitch()):be&&k.Pc.push("SwitchNetwork",{...Ye,network:y}):x||(k.fB.setCaipNetwork(y),k.Pc.push("Connect"))})()}};ct([(0,H.SB)()],Ve.prototype,"caipNetwork",void 0),Ve=ct([(0,j.customElement)("w3m-networks-view")],Ve);var Ct=t(90640);const Tt=I.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var je=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};const Pe="last-transaction";let St=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=k.Ni.state.address,this.transactions=k.sl.state.transactions,this.transactionsByYear=k.sl.state.transactionsByYear,this.loading=k.sl.state.loading,this.empty=k.sl.state.empty,this.next=k.sl.state.next,this.unsubscribe.push(k.Ni.subscribe(y=>{y.isConnected&&this.address!==y.address&&(this.address=y.address,k.sl.resetTransactions(),k.sl.fetchTransactions(y.address))}),k.sl.subscribe(y=>{this.transactions=y.transactions,this.transactionsByYear=y.transactionsByYear,this.loading=y.loading,this.empty=y.empty,this.next=y.next}))}firstUpdated(){0===this.transactions.length&&k.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}render(){return I.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const y=Object.keys(this.transactionsByYear).sort().reverse();return y.map((x,re)=>{const be=re===y.length-1,Ee=parseInt(x,10),Ye=j.TransactionUtil.getTransactionGroupTitle(Ee),It=this.transactionsByYear[Ee];return It?I.dy`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${Ye}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(It,be)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(y,x){const{date:re,descriptions:be,direction:Ee,isAllNFT:Ye,images:It,status:Jn,transfers:Yn,type:ar}=this.getTransactionListItemProps(y);return 2!==Yn?.length||Ye?Yn?.length>1?Yn.map((ci,Br)=>{const pi=j.TransactionUtil.getTransferDescription(ci);return I.dy` <wui-transaction-list-item
          date=${re}
          direction=${ci.direction}
          id=${x&&Br===Yn.length-1&&this.next?Pe:""}
          status=${Jn}
          type=${ar}
          .onlyDirectionIcon=${!0}
          .images=${[It?.[Br]]}
          .descriptions=${[pi]}
        ></wui-transaction-list-item>`}):I.dy`
      <wui-transaction-list-item
        date=${re}
        .direction=${Ee}
        id=${x&&this.next?Pe:""}
        status=${Jn}
        type=${ar}
        .images=${It}
        .descriptions=${be}
      ></wui-transaction-list-item>
    `:I.dy`
        <wui-transaction-list-item
          date=${re}
          .direction=${Ee}
          id=${x&&this.next?Pe:""}
          status=${Jn}
          type=${ar}
          .images=${It}
          .descriptions=${be}
        ></wui-transaction-list-item>
      `}templateTransactions(y,x){return y.map((re,be)=>I.dy`${this.templateRenderTransaction(re,x&&be===y.length-1)}`)}templateEmpty(){return I.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(I.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(y=>y)}createPaginationObserver(){const{projectId:y}=k.hD.state;this.paginationObserver=new IntersectionObserver(([x])=>{x?.isIntersecting&&!this.loading&&(k.sl.fetchTransactions(this.address),k.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:y,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const y=this.shadowRoot?.querySelector(`#${Pe}`);y&&this.paginationObserver?.observe(y)}getTransactionListItemProps(y){const x=Ct.E.getRelativeDateFromNow(y?.metadata?.minedAt),re=j.TransactionUtil.getTransactionDescriptions(y),be=y?.transfers,Ee=y?.transfers?.[0],Ye=Boolean(Ee)&&y?.transfers?.every(Jn=>Boolean(Jn.nft_info)),It=j.TransactionUtil.getTransactionImages(be);return{date:x,direction:Ee?.direction,descriptions:re,isAllNFT:Ye,images:It,status:y.metadata?.status,transfers:be,type:y.metadata?.operationType}}};St.styles=Tt,je([(0,H.SB)()],St.prototype,"address",void 0),je([(0,H.SB)()],St.prototype,"transactions",void 0),je([(0,H.SB)()],St.prototype,"transactionsByYear",void 0),je([(0,H.SB)()],St.prototype,"loading",void 0),je([(0,H.SB)()],St.prototype,"empty",void 0),je([(0,H.SB)()],St.prototype,"next",void 0),St=je([(0,j.customElement)("w3m-transactions-view")],St);const En=[{images:["network","layers","system"],title:"The system\u2019s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Qt=class extends I.oi{render(){return I.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${En}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{k.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Qt=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-what-is-a-network-view")],Qt);const zn=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Pn=class extends I.oi{render(){return I.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${zn}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){k.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),k.Pc.push("GetWallet")}};Pn=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-what-is-a-wallet-view")],Pn);const fn=I.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var dn=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Jt=class extends I.oi{constructor(){super(...arguments),this.email=k.Pc.state.data?.email,this.emailConnector=k.AA.getEmailConnector(),this.loading=!1}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");return I.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?I.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:I.dy`<wui-otp
              dissabled
              length="6"
              @inputChange=${this.onOtpInputChange.bind(this)}
            ></wui-otp>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)}>Resend code</wui-link>
        </wui-flex>
      </wui-flex>
    `}onOtpInputChange(y){var x=this;return(0,b.Z)(function*(){try{if(!x.loading){const re=y.detail;x.emailConnector&&6===re.length&&(x.loading=!0,yield x.emailConnector.provider.connectOtp({otp:re}),yield k.lZ.connectExternal(x.emailConnector),k.IN.close(),k.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(re){k.KC.showError(re),x.loading=!1}})()}onResendCode(){var y=this;return(0,b.Z)(function*(){try{if(!y.loading){const x=k.AA.getEmailConnector();if(!x||!y.email)throw new Error("w3m-email-login-widget: Unable to resend email");y.loading=!0,yield x.provider.connectEmail({email:y.email}),k.KC.showSuccess("New Email sent")}}catch(x){k.KC.showError(x)}finally{y.loading=!1}})()}};Jt.styles=fn,dn([(0,H.SB)()],Jt.prototype,"loading",void 0),Jt=dn([(0,j.customElement)("w3m-email-verify-otp-view")],Jt);const nt=I.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var $e=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Ze=class extends I.oi{constructor(){super(),this.email=k.Pc.state.data?.email,this.emailConnector=k.AA.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return I.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}listenForDeviceApproval(){var y=this;return(0,b.Z)(function*(){y.emailConnector&&(yield y.emailConnector.provider.connectDevice(),k.Pc.replace("EmailVerifyOtp",{email:y.email}))})()}onResendCode(){var y=this;return(0,b.Z)(function*(){try{if(!y.loading){if(!y.emailConnector||!y.email)throw new Error("w3m-email-login-widget: Unable to resend email");y.loading=!0,yield y.emailConnector.provider.connectEmail({email:y.email}),k.KC.showSuccess("New Email sent")}}catch(x){k.KC.showError(x)}finally{y.loading=!1}})()}};Ze.styles=nt,$e([(0,H.SB)()],Ze.prototype,"loading",void 0),Ze=$e([(0,j.customElement)("w3m-email-verify-device-view")],Ze);const it=I.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var vt=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Ht=class extends I.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(k.IN.subscribeKey("open",y=>{y||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(y=>y()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const x=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const be=x?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${be.width}px`,this.iframe.style.height=be.height-10+"px",this.iframe.style.left=`${be.left}px`,this.iframe.style.top=`${be.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),I.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){const y=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:y?"translateY(50px)":"scale(.95)"},{opacity:1,transform:y?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}onHideIframe(){var y=this;return(0,b.Z)(function*(){yield y.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,y.iframe.style.display="none"})()}};Ht.styles=it,vt([(0,H.SB)()],Ht.prototype,"ready",void 0),Ht=vt([(0,j.customElement)("w3m-approve-transaction-view")],Ht);let Dn=class extends I.oi{render(){return I.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${k.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${k.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Dn=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-upgrade-wallet-view")],Dn);const we=(oe,y)=>{const x=oe._$AN;if(void 0===x)return!1;for(const re of x)re._$AO?.(y,!1),we(re,y);return!0},ke=oe=>{let y,x;do{if(void 0===(y=oe._$AM))break;x=y._$AN,x.delete(oe),oe=y}while(0===x?.size)},Oe=oe=>{for(let y;y=oe._$AM;oe=y){let x=y._$AN;if(void 0===x)y._$AN=x=new Set;else if(x.has(oe))break;x.add(oe),Pt(y)}};function tt(oe){void 0!==this._$AN?(ke(this),this._$AM=oe,Oe(this)):this._$AM=oe}function gt(oe,y=!1,x=0){const re=this._$AH,be=this._$AN;if(void 0!==be&&0!==be.size)if(y)if(Array.isArray(re))for(let Ee=x;Ee<re.length;Ee++)we(re[Ee],!1),ke(re[Ee]);else null!=re&&(we(re,!1),ke(re));else we(this,oe)}const Pt=oe=>{2==oe.type&&(oe._$AP??=gt,oe._$AQ??=tt)},tn=()=>new pn;class pn{}const bn=new WeakMap,Fn=(oe=class extends class Ot extends class ce{constructor(y){}get _$AU(){return this._$AM._$AU}_$AT(y,x,re){this._$Ct=y,this._$AM=x,this._$Ci=re}_$AS(y,x){return this.update(y,x)}update(y,x){return this.render(...x)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(y,x,re){super._$AT(y,x,re),Oe(this),this.isConnected=y._$AU}_$AO(y,x=!0){y!==this.isConnected&&(this.isConnected=y,y?this.reconnected?.():this.disconnected?.()),x&&(we(this,y),ke(this))}setValue(y){if(void 0===this._$Ct.strings)this._$Ct._$AI(y,this);else{const x=[...this._$Ct._$AH];x[this._$Ci]=y,this._$Ct._$AI(x,this,0)}}disconnected(){}reconnected(){}}{render(oe){return B.Ld}update(oe,[y]){const x=y!==this.G;return x&&void 0!==this.G&&this.ot(void 0),(x||this.rt!==this.lt)&&(this.G=y,this.ct=oe.options?.host,this.ot(this.lt=oe.element)),B.Ld}ot(oe){if("function"==typeof this.G){const y=this.ct??globalThis;let x=bn.get(y);void 0===x&&(x=new WeakMap,bn.set(y,x)),void 0!==x.get(this.G)&&this.G.call(this.ct,void 0),x.set(this.G,oe),void 0!==oe&&this.G.call(this.ct,oe)}else this.G.value=oe}get rt(){return"function"==typeof this.G?bn.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},(...y)=>({_$litDirective$:oe,values:y})),Ae=I.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var oe,lt=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Zt=class extends I.oi{constructor(){super(...arguments),this.formRef=tn(),this.initialValue=k.Pc.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",y=>{"Enter"===y.key&&this.onSubmitEmail(y)})}render(){const y=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return I.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Fn(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${k.Pc.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!y}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(y){this.email=y.detail}onSubmitEmail(y){var x=this;return(0,b.Z)(function*(){try{if(x.loading)return;x.loading=!0,y.preventDefault();const re=k.AA.getEmailConnector();if(!re)throw new Error("w3m-update-email-wallet: Email connector not found");yield re.provider.updateEmail({email:x.email}),k.Pc.replace("UpdateEmailWalletWaiting",{email:x.email})}catch(re){k.KC.showError(re),x.loading=!1}})()}};Zt.styles=Ae,lt([(0,H.SB)()],Zt.prototype,"email",void 0),lt([(0,H.SB)()],Zt.prototype,"loading",void 0),Zt=lt([(0,j.customElement)("w3m-update-email-wallet-view")],Zt);const mn=I.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var tr=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Dr=class extends I.oi{constructor(){super(),this.email=k.Pc.state.data?.email,this.emailConnector=k.AA.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return I.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}listenForEmailUpdateApproval(){var y=this;return(0,b.Z)(function*(){y.emailConnector&&(yield y.emailConnector.provider.awaitUpdateEmail(),k.Pc.replace("Account"),k.KC.showSuccess("Email updated"))})()}onResendCode(){var y=this;return(0,b.Z)(function*(){try{if(!y.loading){if(!y.emailConnector||!y.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");y.loading=!0,yield y.emailConnector.provider.updateEmail({email:y.email}),y.listenForEmailUpdateApproval(),k.KC.showSuccess("New Email sent")}}catch(x){k.KC.showError(x)}finally{y.loading=!1}})()}};Dr.styles=mn,tr([(0,H.SB)()],Dr.prototype,"loading",void 0),Dr=tr([(0,j.customElement)("w3m-update-email-wallet-waiting-view")],Dr);const or=I.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function zr(oe){const{connectors:y}=k.AA.state,x=y.filter(Ee=>"ANNOUNCED"===Ee.type).reduce((Ee,Ye)=>(Ye.info?.rdns&&(Ee[Ye.info.rdns]=!0),Ee),{});return oe.map(Ee=>({...Ee,installed:Boolean(Ee.rdns)&&Boolean(x[Ee.rdns??""])})).sort((Ee,Ye)=>Number(Ye.installed)-Number(Ee.installed))}var jr=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};const qr="local-paginator";let vi=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!k.QT.state.wallets.length,this.wallets=k.QT.state.wallets,this.recommended=k.QT.state.recommended,this.featured=k.QT.state.featured,this.unsubscribe.push(k.QT.subscribeKey("wallets",y=>this.wallets=y),k.QT.subscribeKey("recommended",y=>this.recommended=y),k.QT.subscribeKey("featured",y=>this.featured=y))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(y=>y()),this.paginationObserver?.disconnect()}render(){return I.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}initialFetch(){var y=this;return(0,b.Z)(function*(){const x=y.shadowRoot?.querySelector("wui-grid");y.initial&&x&&(yield k.QT.fetchWallets({page:1}),yield x.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,y.initial=!1,x.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}shimmerTemplate(y,x){return[...Array(y)].map(()=>I.dy`
        <wui-card-select-loader type="wallet" id=${Y(x)}></wui-card-select-loader>
      `)}walletsTemplate(){return zr([...this.featured,...this.recommended,...this.wallets]).map(re=>I.dy`
        <wui-card-select
          imageSrc=${Y(k.fz.getWalletImage(re))}
          type="wallet"
          name=${re.name}
          @click=${()=>this.onConnectWallet(re)}
          .installed=${re.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:y,recommended:x,featured:re,count:be}=k.QT.state,Ee=window.innerWidth<352?3:4,Ye=y.length+x.length;let Jn=Math.ceil(Ye/Ee)*Ee-Ye+Ee;return Jn-=y.length?re.length%Ee:0,0===be&&re.length>0?null:0===be||[...re,...y,...x].length<be?this.shimmerTemplate(Jn,qr):null}createPaginationObserver(){const y=this.shadowRoot?.querySelector(`#${qr}`);y&&(this.paginationObserver=new IntersectionObserver(([x])=>{if(x?.isIntersecting&&!this.initial){const{page:re,count:be,wallets:Ee}=k.QT.state;Ee.length<be&&k.QT.fetchWallets({page:re+1})}}),this.paginationObserver.observe(y))}onConnectWallet(y){const{connectors:x}=k.AA.state,re=x.find(({explorerId:be})=>be===y.id);re?k.Pc.push("ConnectingExternal",{connector:re}):k.Pc.push("ConnectingWalletConnect",{wallet:y})}};vi.styles=or,jr([(0,H.SB)()],vi.prototype,"initial",void 0),jr([(0,H.SB)()],vi.prototype,"wallets",void 0),jr([(0,H.SB)()],vi.prototype,"recommended",void 0),jr([(0,H.SB)()],vi.prototype,"featured",void 0),vi=jr([(0,j.customElement)("w3m-all-wallets-list")],vi);const Qi=I.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Ai=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let ss=class extends I.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?I.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}onSearch(){var y=this;return(0,b.Z)(function*(){y.query!==y.prevQuery&&(y.prevQuery=y.query,y.loading=!0,yield k.QT.searchWallet({search:y.query}),y.loading=!1)})()}walletsTemplate(){const{search:y}=k.QT.state,x=zr(y);return y.length?I.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${x.map(re=>I.dy`
            <wui-card-select
              imageSrc=${Y(k.fz.getWalletImage(re))}
              type="wallet"
              name=${re.name}
              @click=${()=>this.onConnectWallet(re)}
              .installed=${re.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:I.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(y){const{connectors:x}=k.AA.state,re=x.find(({explorerId:be})=>be===y.id);re?k.Pc.push("ConnectingExternal",{connector:re}):k.Pc.push("ConnectingWalletConnect",{wallet:y})}};ss.styles=Qi,Ai([(0,H.SB)()],ss.prototype,"loading",void 0),Ai([(0,H.Cb)()],ss.prototype,"query",void 0),ss=Ai([(0,j.customElement)("w3m-all-wallets-search")],ss);var Hs=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Fi=class extends I.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(k.lZ.subscribeKey("buffering",y=>this.buffering=y))}disconnectCallback(){this.unsubscribe.forEach(y=>y())}render(){const y=this.generateTabs();return I.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${y}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const y=this.platforms.map(x=>"browser"===x?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===x?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===x?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===x?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===x?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=y.map(({platform:x})=>x),y}onTabChange(y){const x=this.platformTabs[y];x&&this.onSelectPlatfrom?.(x)}};Hs([(0,H.Cb)({type:Array})],Fi.prototype,"platforms",void 0),Hs([(0,H.Cb)()],Fi.prototype,"onSelectPlatfrom",void 0),Hs([(0,H.SB)()],Fi.prototype,"buffering",void 0),Fi=Hs([(0,j.customElement)("w3m-connecting-header")],Fi);let Sn=class extends Ce{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}onConnectProxy(){var y=this;return(0,b.Z)(function*(){try{y.error=!1;const{connectors:x}=k.AA.state,re=x.find(Ee=>"ANNOUNCED"===Ee.type&&Ee.info?.rdns===y.wallet?.rdns),be=x.find(Ee=>"INJECTED"===Ee.type);re?yield k.lZ.connectExternal(re):be&&(yield k.lZ.connectExternal(be)),k.IN.close(),k.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(x){k.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:x?.message??"Unknown"}}),y.error=!0}})()}};Sn=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-wc-browser")],Sn);let sr=class extends Ce{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:y,name:x}=this.wallet,{redirect:re,href:be}=k.j1.formatNativeUrl(y,this.uri);k.lZ.setWcLinking({name:x,href:be}),k.lZ.setRecentWallet(this.wallet),k.j1.openHref(re,"_self")}catch{this.error=!0}}};sr=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-wc-desktop")],sr);let $r=class extends Ce{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:y,name:x}=this.wallet,{redirect:re,href:be}=k.j1.formatNativeUrl(y,this.uri);k.lZ.setWcLinking({name:x,href:be}),k.lZ.setRecentWallet(this.wallet),k.j1.openHref(re,"_self")}catch{this.error=!0}}onBuffering(){const y=k.j1.isIos();"visible"===document?.visibilityState&&!this.error&&y&&(k.lZ.setBuffering(!0),setTimeout(()=>{k.lZ.setBuffering(!1)},5e3))}};$r=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-wc-mobile")],$r);const li=I.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let vs=class extends Ce{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),I.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const y=this.getBoundingClientRect().width-40,x=this.wallet?this.wallet.name:void 0;return k.lZ.setWcLinking(void 0),k.lZ.setRecentWallet(this.wallet),I.dy` <wui-qr-code
      size=${y}
      theme=${k.u0.state.themeMode}
      uri=${this.uri}
      imageSrc=${Y(k.fz.getWalletImage(this.wallet))}
      alt=${Y(x)}
    ></wui-qr-code>`}copyTemplate(){return I.dy`<wui-link
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};vs.styles=li,vs=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-wc-qrcode")],vs);const no=I.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let Fs=class extends I.oi{constructor(){super(...arguments),this.dappImageUrl=k.hD.state.metadata?.icons,this.walletImageUrl=k.MO.getConnectedWalletImageUrl()}firstUpdated(){const y=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");y?.[0]&&this.createAnimation(y[0],"translate(18px)"),y?.[1]&&this.createAnimation(y[1],"translate(-18px)")}render(){return I.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(y,x){y.animate([{transform:"translateX(0px)"},{transform:x}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Fs.styles=no,Fs=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-siwe")],Fs);let _o=class extends I.oi{constructor(){if(super(),this.wallet=k.Pc.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return I.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Y(k.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};_o=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-wc-unsupported")],_o);let Bo=class extends Ce{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",k.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:y,name:x}=this.wallet,{redirect:re,href:be}=k.j1.formatUniversalUrl(y,this.uri);k.lZ.setWcLinking({name:x,href:be}),k.lZ.setRecentWallet(this.wallet),k.j1.openHref(re,"_blank")}catch{this.error=!0}}};Bo=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-connecting-wc-web")],Bo);const oa=I.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var bo=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};function Ys(){const oe=k.Pc.state.data?.connector?.name,y=k.Pc.state.data?.wallet?.name,x=k.Pc.state.data?.network?.name,re=y??oe;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:re??"Connect Wallet",ConnectingWalletConnect:re??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:x??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:re?`Get ${re}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let Bs=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.heading=Ys()[k.Pc.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(k.Pc.subscribeKey("view",y=>{this.onViewChange(y),this.onHistoryChange()}),k.lZ.subscribeKey("buffering",y=>this.buffering=y))}disconnectCallback(){this.unsubscribe.forEach(y=>y())}render(){return I.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){k.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),k.Pc.push("WhatIsAWallet")}onClose(){return(0,b.Z)(function*(){k.yD.state.isSiweEnabled&&"success"!==k.yD.state.status&&(yield k.lZ.disconnect()),k.IN.close()})()}titleTemplate(){return I.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:y}=k.Pc.state,x="Connect"===y;return this.showBack&&"ApproveTransaction"!==y?I.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:I.dy`<wui-icon-link
      data-hidden=${!x}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?I.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}onViewChange(y){var x=this;return(0,b.Z)(function*(){const re=x.shadowRoot?.querySelector("wui-text");if(re){const be=Ys()[y];yield re.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,x.heading=be,re.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}})()}onHistoryChange(){var y=this;return(0,b.Z)(function*(){const{history:x}=k.Pc.state,re=y.shadowRoot?.querySelector("#dynamic");x.length>1&&!y.showBack&&re?(yield re.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,y.showBack=!0,re.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):x.length<=1&&y.showBack&&re&&(yield re.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,y.showBack=!1,re.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}onGoBack(){"ConnectingSiwe"===k.Pc.state.view?k.Pc.push("Connect"):k.Pc.goBack()}};Bs.styles=[oa],bo([(0,H.SB)()],Bs.prototype,"heading",void 0),bo([(0,H.SB)()],Bs.prototype,"buffering",void 0),bo([(0,H.SB)()],Bs.prototype,"showBack",void 0),Bs=bo([(0,j.customElement)("w3m-header")],Bs);var ca=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let ao=class extends I.oi{constructor(){super(...arguments),this.data=[]}render(){return I.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(y=>I.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${y.images.map(x=>I.dy`<wui-visual name=${x}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${y.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${y.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ca([(0,H.Cb)({type:Array})],ao.prototype,"data",void 0),ao=ca([(0,j.customElement)("w3m-help-widget")],ao);const Da=I.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let zi=class extends I.oi{render(){const{termsConditionsUrl:y,privacyPolicyUrl:x}=k.hD.state;return y||x?I.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:y,privacyPolicyUrl:x}=k.hD.state;return y&&x?"and":""}termsTemplate(){const{termsConditionsUrl:y}=k.hD.state;return y?I.dy`<a href=${y}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:y}=k.hD.state;return y?I.dy`<a href=${y}>Privacy Policy</a>`:null}};zi.styles=[Da],zi=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee}([(0,j.customElement)("w3m-legal-footer")],zi);const Gn=I.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var wr=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let Zr=class extends I.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:y,app_store:x,play_store:re,chrome_store:be,homepage:Ee}=this.wallet,Ye=k.j1.isMobile(),It=k.j1.isIos(),Jn=k.j1.isAndroid(),Yn=[x,re,Ee,be].filter(Boolean).length>1,ar=j.UiHelperUtil.getTruncateString({string:y,charsStart:12,charsEnd:0,truncate:"end"});return Yn&&!Ye?I.dy`
        <wui-cta-button
          label=${`Don't have ${ar}?`}
          buttonLabel="Get"
          @click=${()=>k.Pc.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!Yn&&Ee?I.dy`
        <wui-cta-button
          label=${`Don't have ${ar}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:x&&It?I.dy`
        <wui-cta-button
          label=${`Don't have ${ar}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:re&&Jn?I.dy`
        <wui-cta-button
          label=${`Don't have ${ar}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&k.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&k.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&k.j1.openHref(this.wallet.homepage,"_blank")}};Zr.styles=[Gn],wr([(0,H.Cb)({type:Object})],Zr.prototype,"wallet",void 0),Zr=wr([(0,j.customElement)("w3m-mobile-download-links")],Zr);const xi=I.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Ki=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};const Bi={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ks=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=k.KC.state.open,this.unsubscribe.push(k.KC.subscribeKey("open",y=>{this.open=y,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(y=>y())}render(){const{message:y,variant:x}=k.KC.state,re=Bi[x];return I.dy`
      <wui-snackbar
        message=${y}
        backgroundColor=${re.backgroundColor}
        iconColor=${re.iconColor}
        icon=${re.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>k.KC.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ks.styles=xi,Ki([(0,H.SB)()],ks.prototype,"open",void 0),ks=Ki([(0,j.customElement)("w3m-snackbar")],ks);const is=I.iv`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Ds=function(oe,y,x,re){var Ye,be=arguments.length,Ee=be<3?y:null===re?re=Object.getOwnPropertyDescriptor(y,x):re;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ee=Reflect.decorate(oe,y,x,re);else for(var It=oe.length-1;It>=0;It--)(Ye=oe[It])&&(Ee=(be<3?Ye(Ee):be>3?Ye(y,x,Ee):Ye(y,x))||Ee);return be>3&&Ee&&Object.defineProperty(y,x,Ee),Ee};let qi=class extends I.oi{constructor(){super(),this.unsubscribe=[],this.formRef=tn(),this.connectors=k.AA.state.connectors,this.email="",this.loading=!1,this.unsubscribe.push(k.AA.subscribeKey("connectors",y=>this.connectors=y))}disconnectedCallback(){this.unsubscribe.forEach(y=>y())}firstUpdated(){this.formRef.value?.addEventListener("keydown",y=>{"Enter"===y.key&&this.onSubmitEmail(y)})}render(){const y=this.connectors.length>1,x=this.connectors.find(be=>"EMAIL"===be.type),re=!this.loading&&this.email.length>3;return x?I.dy`
      <form ${Fn(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
        >
        </wui-email-input>

        ${re&&y?I.dy`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading&&y?I.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>

      ${y?I.dy`<wui-separator text="or"></wui-separator>`:I.dy`<wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!re}
            .loading=${this.loading}
          >
            Continue
          </wui-button>`}
    `:null}onEmailInputChange(y){this.email=y.detail}onSubmitEmail(y){var x=this;return(0,b.Z)(function*(){try{if(x.loading)return;x.loading=!0,y.preventDefault();const re=k.AA.getEmailConnector();if(!re)throw new Error("w3m-email-login-widget: Email connector not found");const{action:be}=yield re.provider.connectEmail({email:x.email});"VERIFY_OTP"===be?k.Pc.push("EmailVerifyOtp",{email:x.email}):"VERIFY_DEVICE"===be&&k.Pc.push("EmailVerifyDevice",{email:x.email})}catch(re){k.KC.showError(re)}finally{x.loading=!1}})()}};qi.styles=is,Ds([(0,H.SB)()],qi.prototype,"connectors",void 0),Ds([(0,H.SB)()],qi.prototype,"email",void 0),Ds([(0,H.SB)()],qi.prototype,"loading",void 0),qi=Ds([(0,j.customElement)("w3m-email-login-widget")],qi);let Rs=!1;const Zi={ConnectorExplorerIds:{coinbaseWallet:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",safe:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",ledger:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{coinbaseWallet:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",safe:"461db637-8616-43ce-035a-d89b8a1d5800",ledger:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",walletConnect:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",injected:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{injected:"Browser Wallet",walletConnect:"WalletConnect",coinbaseWallet:"Coinbase",ledger:"Ledger",safe:"Safe"},ConnectorTypesMap:{injected:"INJECTED",walletConnect:"WALLET_CONNECT",eip6963:"ANNOUNCED",w3mEmail:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},hs={caipNetworkIdToNumber:oe=>oe?Number(oe.split(":")[1]):void 0,getCaipTokens(oe){if(!oe)return;const y={};return Object.entries(oe).forEach(([x,re])=>{y[`eip155:${x}`]=re}),y}};var Cs=t(59069),po=t.n(Cs),fs=t(95876),Ao=t(85705),Zs=t(5784),ps=t(10893),Po=t(25006);function jo(oe){return null!=globalThis.Buffer?new Uint8Array(oe.buffer,oe.byteOffset,oe.byteLength):oe}function js(oe=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?jo(globalThis.Buffer.allocUnsafe(oe)):new Uint8Array(oe)}function Zo(oe,y){y||(y=oe.reduce((be,Ee)=>be+Ee.length,0));const x=js(y);let re=0;for(const be of oe)x.set(be,re),re+=be.length;return jo(x)}const Rn=function ua(oe,y){if(oe.length>=255)throw new TypeError("Alphabet too long");for(var x=new Uint8Array(256),re=0;re<x.length;re++)x[re]=255;for(var be=0;be<oe.length;be++){var Ee=oe.charAt(be),Ye=Ee.charCodeAt(0);if(255!==x[Ye])throw new TypeError(Ee+" is ambiguous");x[Ye]=be}var It=oe.length,Jn=oe.charAt(0),Yn=Math.log(It)/Math.log(256),ar=Math.log(256)/Math.log(It);function Qr(Br){if("string"!=typeof Br)throw new TypeError("Expected String");if(0===Br.length)return new Uint8Array;var pi=0;if(" "!==Br[pi]){for(var Ui=0,ds=0;Br[pi]===Jn;)Ui++,pi++;for(var wo=(Br.length-pi)*Yn+1>>>0,oo=new Uint8Array(wo);Br[pi];){var ho=x[Br.charCodeAt(pi)];if(255===ho)return;for(var Ks=0,zo=wo-1;(0!==ho||Ks<ds)&&-1!==zo;zo--,Ks++)oo[zo]=(ho+=It*oo[zo]>>>0)%256>>>0,ho=ho/256>>>0;if(0!==ho)throw new Error("Non-zero carry");ds=Ks,pi++}if(" "!==Br[pi]){for(var yo=wo-ds;yo!==wo&&0===oo[yo];)yo++;for(var xa=new Uint8Array(Ui+(wo-yo)),pc=Ui;yo!==wo;)xa[pc++]=oo[yo++];return xa}}}return{encode:function Tr(Br){if(Br instanceof Uint8Array||(ArrayBuffer.isView(Br)?Br=new Uint8Array(Br.buffer,Br.byteOffset,Br.byteLength):Array.isArray(Br)&&(Br=Uint8Array.from(Br))),!(Br instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===Br.length)return"";for(var pi=0,Ui=0,ds=0,wo=Br.length;ds!==wo&&0===Br[ds];)ds++,pi++;for(var oo=(wo-ds)*ar+1>>>0,ho=new Uint8Array(oo);ds!==wo;){for(var Ks=Br[ds],zo=0,yo=oo-1;(0!==Ks||zo<Ui)&&-1!==yo;yo--,zo++)ho[yo]=(Ks+=256*ho[yo]>>>0)%It>>>0,Ks=Ks/It>>>0;if(0!==Ks)throw new Error("Non-zero carry");Ui=zo,ds++}for(var xa=oo-Ui;xa!==oo&&0===ho[xa];)xa++;for(var pc=Jn.repeat(pi);xa<oo;++xa)pc+=oe.charAt(ho[xa]);return pc},decodeUnsafe:Qr,decode:function ci(Br){var pi=Qr(Br);if(pi)return pi;throw new Error(`Non-${y} character`)}}},wt=(new Uint8Array(0),oe=>{if(oe instanceof Uint8Array&&"Uint8Array"===oe.constructor.name)return oe;if(oe instanceof ArrayBuffer)return new Uint8Array(oe);if(ArrayBuffer.isView(oe))return new Uint8Array(oe.buffer,oe.byteOffset,oe.byteLength);throw new Error("Unknown type, must be binary type")});class Di{constructor(y,x,re){this.name=y,this.prefix=x,this.baseEncode=re}encode(y){if(y instanceof Uint8Array)return`${this.prefix}${this.baseEncode(y)}`;throw Error("Unknown type, must be binary type")}}class Os{constructor(y,x,re){if(this.name=y,this.prefix=x,void 0===x.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=x.codePointAt(0),this.baseDecode=re}decode(y){if("string"==typeof y){if(y.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(y)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(y.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(y){return na(this,y)}}class Co{constructor(y){this.decoders=y}or(y){return na(this,y)}decode(y){const re=this.decoders[y[0]];if(re)return re.decode(y);throw RangeError(`Unable to decode multibase string ${JSON.stringify(y)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const na=(oe,y)=>new Co({...oe.decoders||{[oe.prefix]:oe},...y.decoders||{[y.prefix]:y}});class Lo{constructor(y,x,re,be){this.name=y,this.prefix=x,this.baseEncode=re,this.baseDecode=be,this.encoder=new Di(y,x,re),this.decoder=new Os(y,x,be)}encode(y){return this.encoder.encode(y)}decode(y){return this.decoder.decode(y)}}const Xs=({name:oe,prefix:y,encode:x,decode:re})=>new Lo(oe,y,x,re),Ur=({prefix:oe,name:y,alphabet:x})=>{const{encode:re,decode:be}=Rn(x,y);return Xs({prefix:oe,name:y,encode:re,decode:Ee=>wt(be(Ee))})},As=({name:oe,prefix:y,bitsPerChar:x,alphabet:re})=>Xs({prefix:y,name:oe,encode:be=>((oe,y,x)=>{const re="="===y[y.length-1],be=(1<<x)-1;let Ee="",Ye=0,It=0;for(let Jn=0;Jn<oe.length;++Jn)for(It=It<<8|oe[Jn],Ye+=8;Ye>x;)Ye-=x,Ee+=y[be&It>>Ye];if(Ye&&(Ee+=y[be&It<<x-Ye]),re)for(;Ee.length*x&7;)Ee+="=";return Ee})(be,re,x),decode:be=>((oe,y,x,re)=>{const be={};for(let ar=0;ar<y.length;++ar)be[y[ar]]=ar;let Ee=oe.length;for(;"="===oe[Ee-1];)--Ee;const Ye=new Uint8Array(Ee*x/8|0);let It=0,Jn=0,Yn=0;for(let ar=0;ar<Ee;++ar){const Tr=be[oe[ar]];if(void 0===Tr)throw new SyntaxError(`Non-${re} character`);Jn=Jn<<x|Tr,It+=x,It>=8&&(It-=8,Ye[Yn++]=255&Jn>>It)}if(It>=x||255&Jn<<8-It)throw new SyntaxError("Unexpected end of data");return Ye})(be,re,x,oe)}),ul=Xs({prefix:"\0",name:"identity",encode:oe=>(oe=>(new TextDecoder).decode(oe))(oe),decode:oe=>(oe=>(new TextEncoder).encode(oe))(oe)}),Aa=As({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),Ho=As({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),Qo=Ur({prefix:"9",name:"base10",alphabet:"0123456789"}),ra=As({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),_s=As({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),Qa=As({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),vl=As({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Ba=As({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Mo=As({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ja=As({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),gn=As({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),He=As({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),et=As({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Rt=As({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),wn=Ur({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Un=Ur({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),ur=Ur({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),lr=Ur({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),br=As({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Gr=As({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Ei=As({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Ii=As({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Gi=Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),ji=Gi.reduce((oe,y,x)=>(oe[x]=y,oe),[]),Ri=Gi.reduce((oe,y,x)=>(oe[y.codePointAt(0)]=x,oe),[]),zt=Xs({prefix:"\u{1f680}",name:"base256emoji",encode:function Vn(oe){return oe.reduce((y,x)=>y+ji[x],"")},decode:function ut(oe){const y=[];for(const x of oe){const re=Ri[x.codePointAt(0)];if(void 0===re)throw new Error(`Non-base256emoji character: ${x}`);y.push(re)}return new Uint8Array(y)}});var Or=Math.pow(2,31),Ts=Math.pow(2,7),Ha=Math.pow(2,14),dl=Math.pow(2,21),Uo=Math.pow(2,28),Ci=Math.pow(2,35),Wi=Math.pow(2,42),Ji=Math.pow(2,49),Ns=Math.pow(2,56),yt=Math.pow(2,63),Dt={encode:function _r(oe,y,x){y=y||[];for(var re=x=x||0;oe>=Or;)y[x++]=255&oe|128,oe/=128;for(;-128&oe;)y[x++]=255&oe|128,oe>>>=7;return y[x]=0|oe,_r.bytes=x-re+1,y},decode:function eo(oe,re){var Ye,x=0,be=0,Ee=re=re||0,It=oe.length;do{if(Ee>=It)throw eo.bytes=0,new RangeError("Could not decode varint");Ye=oe[Ee++],x+=be<28?(127&Ye)<<be:(127&Ye)*Math.pow(2,be),be+=7}while(Ye>=128);return eo.bytes=Ee-re,x},encodingLength:function(oe){return oe<Ts?1:oe<Ha?2:oe<dl?3:oe<Uo?4:oe<Ci?5:oe<Wi?6:oe<Ji?7:oe<Ns?8:oe<yt?9:10}};const nr=Dt,nn=(oe,y,x=0)=>(nr.encode(oe,y,x),y),an=oe=>nr.encodingLength(oe),In=(oe,y)=>{const x=y.byteLength,re=an(oe),be=re+an(x),Ee=new Uint8Array(be+x);return nn(oe,Ee,0),nn(x,Ee,re),Ee.set(y,be),new gr(oe,x,y,Ee)};class gr{constructor(y,x,re,be){this.code=y,this.size=x,this.digest=re,this.bytes=be}}const Hr=({name:oe,code:y,encode:x})=>new Yr(oe,y,x);class Yr{constructor(y,x,re){this.name=y,this.code=x,this.encode=re}digest(y){if(y instanceof Uint8Array){const x=this.encode(y);return x instanceof Uint8Array?In(this.code,x):x.then(re=>In(this.code,re))}throw Error("Unknown type, must be binary type")}}const ft=oe=>function(){var y=(0,b.Z)(function*(x){return new Uint8Array(yield crypto.subtle.digest(oe,x))});return function(x){return y.apply(this,arguments)}}(),ot=Hr({name:"sha2-256",code:18,encode:ft("SHA-256")}),Ge=Hr({name:"sha2-512",code:19,encode:ft("SHA-512")}),On=wt,hr={code:0,name:"identity",encode:On,digest:oe=>In(0,On(oe))},Kr="raw",mi=85,us=oe=>wt(oe),Si=oe=>wt(oe),Yi=new TextEncoder,bs=new TextDecoder,Ea="json",va=512,ys=oe=>Yi.encode(JSON.stringify(oe)),da=oe=>JSON.parse(bs.decode(oe));Symbol,Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");const _c={...e,...n,...s,...l,...u,...f,...g,...p,...M,...w};function Il(oe,y,x,re){return{name:oe,prefix:y,encoder:{name:oe,prefix:y,encode:x},decoder:{decode:re}}}const Jl=Il("utf8","u",oe=>"u"+new TextDecoder("utf8").decode(oe),oe=>(new TextEncoder).encode(oe.substring(1))),Ql=Il("ascii","a",oe=>{let y="a";for(let x=0;x<oe.length;x++)y+=String.fromCharCode(oe[x]);return y},oe=>{const y=js((oe=oe.substring(1)).length);for(let x=0;x<oe.length;x++)y[x]=oe.charCodeAt(x);return y}),Bn={utf8:Jl,"utf-8":Jl,hex:_c.base16,latin1:Ql,ascii:Ql,binary:Ql,..._c};function ka(oe,y="utf8"){const x=Bn[y];if(!x)throw new Error(`Unsupported encoding "${y}"`);return"utf8"!==y&&"utf-8"!==y||null==globalThis.Buffer||null==globalThis.Buffer.from?x.decoder.decode(`${x.prefix}${oe}`):jo(globalThis.Buffer.from(oe,"utf-8"))}function _a(oe,y="utf8"){const x=Bn[y];if(!x)throw new Error(`Unsupported encoding "${y}"`);return"utf8"!==y&&"utf-8"!==y||null==globalThis.Buffer||null==globalThis.Buffer.from?x.encoder.encode(oe).substring(1):globalThis.Buffer.from(oe.buffer,oe.byteOffset,oe.byteLength).toString("utf8")}var to=function(oe,y,x){if(x||2===arguments.length)for(var Ee,re=0,be=y.length;re<be;re++)(Ee||!(re in y))&&(Ee||(Ee=Array.prototype.slice.call(y,0,re)),Ee[re]=y[re]);return oe.concat(Ee||Array.prototype.slice.call(y))},io=function oe(y,x,re){this.name=y,this.version=x,this.os=re,this.type="browser"},od=function oe(y){this.version=y,this.type="node",this.name="node",this.os=process.platform},jl=function oe(y,x,re,be){this.name=y,this.version=x,this.os=re,this.bot=be,this.type="bot-device"},Pc=function oe(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},wl=function oe(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},pu=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,ql=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],Xo=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Lc(oe){var y=function Ul(oe){return""!==oe&&ql.reduce(function(y,x){var re=x[0];if(y)return y;var Ee=x[1].exec(oe);return!!Ee&&[re,Ee]},!1)}(oe);if(!y)return null;var x=y[0],re=y[1];if("searchbot"===x)return new Pc;var be=re[1]&&re[1].split(".").join("_").split("_").slice(0,3);be?be.length<3&&(be=to(to([],be,!0),function Ua(oe){for(var y=[],x=0;x<oe;x++)y.push("0");return y}(3-be.length),!0)):be=[];var Ee=be.join("."),Ye=function ia(oe){for(var y=0,x=Xo.length;y<x;y++){var re=Xo[y],be=re[0];if(re[1].exec(oe))return be}return null}(oe),It=pu.exec(oe);return It&&It[1]?new jl(x,Ee,Ye,It[1]):new io(x,Ee,Ye)}var Ni=t(43961),il=t(6499),zc=t(30543),Wl=t(63230);t(62079);const ec={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};function zl(oe,y){return oe.includes(":")?[oe]:y.chains||[]}const Vo="base16",Kc="base64pad",gu="utf8";function Nn(){return _a((0,Zs.randomBytes)(32),Vo)}function Js(oe){return _a((0,ps.vp)(ka(oe,gu)),Vo)}function Es(oe){return Number(_a(oe,"base10"))}function Qs(oe){const y=ka(oe,Kc),x=y.slice(0,1);if(1===Es(x)){const It=33,Jn=It+12,Yn=y.slice(1,It),ar=y.slice(It,Jn);return{type:x,sealed:y.slice(Jn),iv:ar,senderPublicKey:Yn}}const Ee=y.slice(1,13);return{type:x,sealed:y.slice(13),iv:Ee}}function Oa(oe){const y=oe?.type||0;if(1===y){if(typeof oe?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof oe?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:y,senderPublicKey:oe?.senderPublicKey,receiverPublicKey:oe?.receiverPublicKey}}function Wo(oe){return 1===oe.type&&"string"==typeof oe.senderPublicKey&&"string"==typeof oe.receiverPublicKey}var pl=Object.defineProperty,Io=Object.getOwnPropertySymbols,Ta=Object.prototype.hasOwnProperty,Nc=Object.prototype.propertyIsEnumerable,kd=(oe,y,x)=>y in oe?pl(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,Tf=(oe,y)=>{for(var x in y||(y={}))Ta.call(y,x)&&kd(oe,x,y[x]);if(Io)for(var x of Io(y))Nc.call(y,x)&&kd(oe,x,y[x]);return oe};const Qe="js";function Bt(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function ln(){return!(0,il.getDocument)()&&!!(0,il.getNavigator)()&&"ReactNative"===navigator.product}function Ln(){return!Bt()&&!!(0,il.getNavigator)()}function vr(){return ln()?"react-native":Bt()?"node":Ln()?"browser":"unknown"}function Gl(oe,y,x){const re=function el(){if("react-native"===vr()&&typeof global<"u"&&typeof(null==global?void 0:global.Platform)<"u"){const{OS:x,Version:re}=global.Platform;return[x,re].join("-")}const oe=function Yl(oe){return oe?Lc(oe):typeof document>"u"&&typeof navigator<"u"&&"ReactNative"===navigator.product?new wl:typeof navigator<"u"?Lc(navigator.userAgent):function Vl(){return typeof process<"u"&&process.version?new od(process.version.slice(1)):null}()}();if(null===oe)return"unknown";const y=oe.os?oe.os.replace(" ","").toLowerCase():"unknown";return"browser"===oe.type?[y,oe.name,oe.version].join("-"):[y,oe.version].join("-")}(),be=function fa(){var oe;const y=vr();return"browser"===y?[y,(null==(oe=(0,il.getLocation)())?void 0:oe.host)||"unknown"].join(":"):y}();return[[oe,y].join("-"),[Qe,x].join("-"),re,be].join("/")}function Zc(oe,y){return oe.filter(x=>y.includes(x)).length===oe.length}function st(oe){return Object.fromEntries(oe.entries())}function ge(oe){return new Map(Object.entries(oe))}function Vr(oe=Ni.FIVE_MINUTES,y){const x=(0,Ni.toMiliseconds)(oe||Ni.FIVE_MINUTES);let re,be,Ee;return{resolve:Ye=>{Ee&&re&&(clearTimeout(Ee),re(Ye))},reject:Ye=>{Ee&&be&&(clearTimeout(Ee),be(Ye))},done:()=>new Promise((Ye,It)=>{Ee=setTimeout(()=>{It(new Error(y))},x),re=Ye,be=It})}}function ni(oe,y,x){return new Promise(function(){var re=(0,b.Z)(function*(be,Ee){const Ye=setTimeout(()=>Ee(new Error(x)),y);try{be(yield oe)}catch(It){Ee(It)}clearTimeout(Ye)});return function(be,Ee){return re.apply(this,arguments)}}())}function _i(oe,y){if("string"==typeof y&&y.startsWith(`${oe}:`))return y;if("topic"===oe.toLowerCase()){if("string"!=typeof y)throw new Error('Value must be "string" for expirer target type: topic');return`topic:${y}`}if("id"===oe.toLowerCase()){if("number"!=typeof y)throw new Error('Value must be "number" for expirer target type: id');return`id:${y}`}throw new Error(`Unknown expirer target type: ${oe}`)}function gs(oe){const[y,x]=oe.split(":"),re={id:void 0,topic:void 0};if("topic"===y&&"string"==typeof x)re.topic=x;else{if("id"!==y||!Number.isInteger(Number(x)))throw new Error(`Invalid target, expected id:number or topic:string, got ${y}:${x}`);re.id=Number(x)}return re}function os(oe,y){return(0,Ni.fromMiliseconds)((y||Date.now())+(0,Ni.toMiliseconds)(oe))}function So(oe){return Date.now()>=(0,Ni.toMiliseconds)(oe)}function as(oe,y){return`${oe}${y?`:${y}`:""}`}function co(oe=[],y=[]){return[...new Set([...oe,...y])]}function Ga(){return Ga=(0,b.Z)(function*({id:oe,topic:y,wcDeepLink:x}){try{if(!x)return;let be=("string"==typeof x?JSON.parse(x):x)?.href;if("string"!=typeof be)return;be.endsWith("/")&&(be=be.slice(0,-1));const Ee=`${be}/wc?requestId=${oe}&sessionTopic=${y}`,Ye=vr();"browser"===Ye?Ee.startsWith("https://")?window.open(Ee,"_blank","noreferrer noopener"):window.open(Ee,"_self","noreferrer noopener"):"react-native"===Ye&&typeof(null==global?void 0:global.Linking)<"u"&&(yield global.Linking.openURL(Ee))}catch(re){console.error(re)}}),Ga.apply(this,arguments)}function Yu(){return Yu=(0,b.Z)(function*(oe,y){try{return(yield oe.getItem(y))||(Ln()?localStorage.getItem(y):void 0)}catch(x){console.error(x)}}),Yu.apply(this,arguments)}function ud(oe){return oe?.relay||{protocol:"irn"}}function dd(oe){const y=ec[oe];if(typeof y>"u")throw new Error(`Relay Protocol not supported: ${oe}`);return y}var Fc=Object.defineProperty,kf=Object.getOwnPropertySymbols,Uu=Object.prototype.hasOwnProperty,Dp=Object.prototype.propertyIsEnumerable,mu=(oe,y,x)=>y in oe?Fc(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x;function Dg(oe,y="-"){const x={},re="relay"+y;return Object.keys(oe).forEach(be=>{if(be.startsWith(re)){const Ee=be.replace(re,"");x[Ee]=oe[be]}}),x}function Pf(oe){const y=(oe=(oe=oe.includes("wc://")?oe.replace("wc://",""):oe).includes("wc:")?oe.replace("wc:",""):oe).indexOf(":"),x=-1!==oe.indexOf("?")?oe.indexOf("?"):void 0,re=oe.substring(0,y),be=oe.substring(y+1,x).split("@"),Ee=typeof x<"u"?oe.substring(x):"",Ye=Wl.parse(Ee);return{protocol:re,topic:Ag(be[0]),version:parseInt(be[1],10),symKey:Ye.symKey,relay:Dg(Ye)}}function Ag(oe){return oe.startsWith("//")?oe.substring(2):oe}function yu(oe){const y=[];return oe.forEach(x=>{const[re,be]=x.split(":");y.push(`${re}:${be}`)}),y}function Xc(oe){return oe.includes(":")}function fc(oe){return Xc(oe)?oe.split(":")[0]:oe}const Lp={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},Pg={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function ki(oe,y){const{message:x,code:re}=Pg[oe];return{message:y?`${x} ${y}`:x,code:re}}function Ka(oe,y){const{message:x,code:re}=Lp[oe];return{message:y?`${x} ${y}`:x,code:re}}function nc(oe,y){return!!Array.isArray(oe)&&(!(typeof y<"u"&&oe.length)||oe.every(y))}function jc(oe){return Object.getPrototypeOf(oe)===Object.prototype&&Object.keys(oe).length}function gl(oe){return typeof oe>"u"}function Pa(oe,y){return!(!y||!gl(oe))||"string"==typeof oe&&!!oe.trim().length}function Lf(oe,y){return!(!y||!gl(oe))||"number"==typeof oe&&!isNaN(oe)}function Nf(oe){return!(!Pa(oe,!1)||!oe.includes(":"))&&2===oe.split(":").length}function jf(oe){let y=!0;return nc(oe)?oe.length&&(y=oe.every(x=>Pa(x,!1))):y=!1,y}function Hf(oe,y){let x=null;return Object.values(oe).forEach(re=>{if(x)return;const be=function Wu(oe,y){let x=null;return jf(oe?.methods)?jf(oe?.events)||(x=Ka("UNSUPPORTED_EVENTS",`${y}, events should be an array of strings or empty array for no events`)):x=Ka("UNSUPPORTED_METHODS",`${y}, methods should be an array of strings or empty array for no methods`),x}(re,`${y}, namespace`);be&&(x=be)}),x}function Qc(oe,y){let x=null;if(oe&&jc(oe)){const re=Hf(oe,y);re&&(x=re);const be=function ny(oe,y){let x=null;return Object.values(oe).forEach(re=>{if(x)return;const be=function ty(oe,y){let x=null;return nc(oe)?oe.forEach(re=>{x||function Rp(oe){if(Pa(oe,!1)&&oe.includes(":")){const y=oe.split(":");if(3===y.length){const x=y[0]+":"+y[1];return!!y[2]&&Nf(x)}}return!1}(re)||(x=Ka("UNSUPPORTED_ACCOUNTS",`${y}, account ${re} should be a string and conform to "namespace:chainId:address" format`))}):x=Ka("UNSUPPORTED_ACCOUNTS",`${y}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),x}(re?.accounts,`${y} namespace`);be&&(x=be)}),x}(oe,y);be&&(x=be)}else x=ki("MISSING_OR_INVALID",`${y}, namespaces should be an object with data`);return x}function nh(oe){return Pa(oe.protocol,!0)}function kl(oe){return typeof oe<"u"&&null!==typeof oe}function jp(oe,y){return!(!Nf(y)||!function Vu(oe){const y=[];return Object.values(oe).forEach(x=>{y.push(...yu(x.accounts))}),y}(oe).includes(y))}function Ng(oe,y,x){let re=null;const be=function Fg(oe){const y={};return Object.keys(oe).forEach(x=>{var re;x.includes(":")?y[x]=oe[x]:null==(re=oe[x].chains)||re.forEach(be=>{y[be]={methods:oe[x].methods,events:oe[x].events}})}),y}(oe),Ee=function Hp(oe){const y={};return Object.keys(oe).forEach(x=>{x.includes(":")?y[x]=oe[x]:yu(oe[x].accounts)?.forEach(be=>{y[be]={accounts:oe[x].accounts.filter(Ee=>Ee.includes(`${be}:`)),methods:oe[x].methods,events:oe[x].events}})}),y}(y),Ye=Object.keys(be),It=Object.keys(Ee),Jn=ih(Object.keys(oe)),Yn=ih(Object.keys(y)),ar=Jn.filter(Tr=>!Yn.includes(Tr));return ar.length&&(re=ki("NON_CONFORMING_NAMESPACES",`${x} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${ar.toString()}\n      Received: ${Object.keys(y).toString()}`)),Zc(Ye,It)||(re=ki("NON_CONFORMING_NAMESPACES",`${x} namespaces chains don't satisfy required namespaces.\n      Required: ${Ye.toString()}\n      Approved: ${It.toString()}`)),Object.keys(y).forEach(Tr=>{if(!Tr.includes(":")||re)return;const Qr=yu(y[Tr].accounts);Qr.includes(Tr)||(re=ki("NON_CONFORMING_NAMESPACES",`${x} namespaces accounts don't satisfy namespace accounts for ${Tr}\n        Required: ${Tr}\n        Approved: ${Qr.toString()}`))}),Ye.forEach(Tr=>{re||(Zc(be[Tr].methods,Ee[Tr].methods)?Zc(be[Tr].events,Ee[Tr].events)||(re=ki("NON_CONFORMING_NAMESPACES",`${x} namespaces events don't satisfy namespace events for ${Tr}`)):re=ki("NON_CONFORMING_NAMESPACES",`${x} namespaces methods don't satisfy namespace methods for ${Tr}`))}),re}function ih(oe){return[...new Set(oe.map(y=>y.includes(":")?y.split(":")[0]:y))]}function sh(){const oe=vr();return new Promise(y=>{switch(oe){case"browser":y(function Bg(){return Ln()&&navigator?.onLine}());break;case"react-native":y(function bu(){return El.apply(this,arguments)}());break;default:y(!0)}})}function El(){return(El=(0,b.Z)(function*(){return!(ln()&&typeof global<"u"&&null!=global&&global.NetInfo)||(yield null==global?void 0:global.NetInfo.fetch())?.isConnected})).apply(this,arguments)}const zh={};class xu{static get(y){return zh[y]}static set(y,x){zh[y]=x}static delete(y){delete zh[y]}}const iy=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,sy=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Yg=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function oy(oe,y){if(!("__proto__"===oe||"constructor"===oe&&y&&"object"==typeof y&&"prototype"in y))return y;!function ay(oe){console.warn(`[destr] Dropping "${oe}" key to prevent prototype pollution.`)}(oe)}function $h(oe,y={}){if("string"!=typeof oe)return oe;const x=oe.trim();if('"'===oe[0]&&'"'===oe.at(-1)&&!oe.includes("\\"))return x.slice(1,-1);if(x.length<=9){const re=x.toLowerCase();if("true"===re)return!0;if("false"===re)return!1;if("undefined"===re)return;if("null"===re)return null;if("nan"===re)return Number.NaN;if("infinity"===re)return Number.POSITIVE_INFINITY;if("-infinity"===re)return Number.NEGATIVE_INFINITY}if(!Yg.test(oe)){if(y.strict)throw new SyntaxError("[destr] Invalid JSON");return oe}try{if(iy.test(oe)||sy.test(oe)){if(y.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(oe,oy)}return JSON.parse(oe)}catch(re){if(y.strict)throw re;return oe}}function al(oe,...y){try{return function Up(oe){return oe&&"function"==typeof oe.then?oe:Promise.resolve(oe)}(oe(...y))}catch(x){return Promise.reject(x)}}function hd(oe){if(function Yf(oe){const y=typeof oe;return null===oe||"object"!==y&&"function"!==y}(oe))return String(oe);if(function Uf(oe){const y=Object.getPrototypeOf(oe);return!y||y.isPrototypeOf(Object)}(oe)||Array.isArray(oe))return JSON.stringify(oe);if("function"==typeof oe.toJSON)return hd(oe.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function La(){if(void 0===typeof Buffer)throw new TypeError("[unstorage] Buffer is not supported!")}const Gh="base64:";function ml(oe){return oe?oe.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function cy(...oe){return ml(oe.join(":"))}function ah(oe){return(oe=ml(oe))?oe+":":""}const U_=()=>{const oe=new Map;return{name:"memory",options:{},hasItem:y=>oe.has(y),getItem:y=>oe.get(y)??null,getItemRaw:y=>oe.get(y)??null,setItem(y,x){oe.set(y,x)},setItemRaw(y,x){oe.set(y,x)},removeItem(y){oe.delete(y)},getKeys:()=>Array.from(oe.keys()),clear(){oe.clear()},dispose(){oe.clear()}}};function Wg(oe,y,x){return oe.watch?oe.watch((re,be)=>y(re,x+be)):()=>{}}function zg(oe){return lh.apply(this,arguments)}function lh(){return lh=(0,b.Z)(function*(oe){"function"==typeof oe.dispose&&(yield al(oe.dispose))}),lh.apply(this,arguments)}function rc(oe){return new Promise((y,x)=>{oe.oncomplete=oe.onsuccess=()=>y(oe.result),oe.onabort=oe.onerror=()=>x(oe.error)})}function zp(oe,y){const x=indexedDB.open(oe);x.onupgradeneeded=()=>x.result.createObjectStore(y);const re=rc(x);return(be,Ee)=>re.then(Ye=>Ee(Ye.transaction(y,be).objectStore(y)))}let $p;function qc(){return $p||($p=zp("keyval-store","keyval")),$p}function $g(oe,y=qc()){return y("readonly",x=>rc(x.get(oe)))}function Xh(oe){if("string"!=typeof oe)throw new Error("Cannot safe json parse value of type "+typeof oe);try{return(oe=>{const x=oe.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,'$1"$2n"$3');return JSON.parse(x,(re,be)=>"string"==typeof be&&be.match(/^\d+n$/)?BigInt(be.substring(0,be.length-1)):be)})(oe)}catch{return oe}}function fd(oe){return"string"==typeof oe?oe:(oe=>JSON.stringify(oe,(y,x)=>"bigint"==typeof x?x.toString()+"n":x))(oe)||""}var eu=(oe={})=>{const y=oe.base&&oe.base.length>0?`${oe.base}:`:"",x=be=>y+be;let re;return oe.dbName&&oe.storeName&&(re=zp(oe.dbName,oe.storeName)),{name:"idb-keyval",options:oe,hasItem:be=>(0,b.Z)(function*(){return!(typeof(yield $g(x(be),re))>"u")})(),getItem:be=>(0,b.Z)(function*(){return(yield $g(x(be),re))??null})(),setItem:(be,Ee)=>function Gg(oe,y,x=qc()){return x("readwrite",re=>(re.put(y,oe),rc(re.transaction)))}(x(be),Ee,re),removeItem:be=>function ch(oe,y=qc()){return y("readwrite",x=>(x.delete(oe),rc(x.transaction)))}(x(be),re),getKeys:()=>function Kg(oe=qc()){return oe("readonly",y=>{if(y.getAllKeys)return rc(y.getAllKeys());const x=[];return function Ec(oe,y){return oe.openCursor().onsuccess=function(){!this.result||(y(this.result),this.result.continue())},rc(oe.transaction)}(y,re=>x.push(re.key)).then(()=>x)})}(re),clear:()=>function $_(oe=qc()){return oe("readwrite",y=>(y.clear(),rc(y.transaction)))}(re)}};class gy{constructor(){this.indexedDb=function Kh(oe={}){const y={mounts:{"":oe.driver||U_()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},x=Yn=>{for(const ar of y.mountpoints)if(Yn.startsWith(ar))return{base:ar,relativeKey:Yn.slice(ar.length),driver:y.mounts[ar]};return{base:"",relativeKey:Yn,driver:y.mounts[""]}},re=(Yn,ar)=>y.mountpoints.filter(Tr=>Tr.startsWith(Yn)||ar&&Yn.startsWith(Tr)).map(Tr=>({relativeBase:Yn.length>Tr.length?Yn.slice(Tr.length):void 0,mountpoint:Tr,driver:y.mounts[Tr]})),be=(Yn,ar)=>{if(y.watching){ar=ml(ar);for(const Tr of y.watchListeners)Tr(Yn,ar)}},Ee=function(){var Yn=(0,b.Z)(function*(){if(!y.watching){y.watching=!0;for(const ar in y.mounts)y.unwatch[ar]=yield Wg(y.mounts[ar],be,ar)}});return function(){return Yn.apply(this,arguments)}}(),Ye=function(){var Yn=(0,b.Z)(function*(){if(y.watching){for(const ar in y.unwatch)yield y.unwatch[ar]();y.unwatch={},y.watching=!1}});return function(){return Yn.apply(this,arguments)}}(),It=(Yn,ar,Tr)=>{const Qr=new Map,ci=Br=>{let pi=Qr.get(Br.base);return pi||(pi={driver:Br.driver,base:Br.base,items:[]},Qr.set(Br.base,pi)),pi};for(const Br of Yn){const pi="string"==typeof Br,Ui=ml(pi?Br:Br.key),ds=pi?void 0:Br.value,wo=pi||!Br.options?ar:{...ar,...Br.options},oo=x(Ui);ci(oo).items.push({key:Ui,value:ds,relativeKey:oo.relativeKey,options:wo})}return Promise.all([...Qr.values()].map(Br=>Tr(Br))).then(Br=>Br.flat())},Jn={hasItem(Yn,ar={}){Yn=ml(Yn);const{relativeKey:Tr,driver:Qr}=x(Yn);return al(Qr.hasItem,Tr,ar)},getItem(Yn,ar={}){Yn=ml(Yn);const{relativeKey:Tr,driver:Qr}=x(Yn);return al(Qr.getItem,Tr,ar).then(ci=>$h(ci))},getItems:(Yn,ar)=>It(Yn,ar,Tr=>Tr.driver.getItems?al(Tr.driver.getItems,Tr.items.map(Qr=>({key:Qr.relativeKey,options:Qr.options})),ar).then(Qr=>Qr.map(ci=>({key:cy(Tr.base,ci.key),value:$h(ci.value)}))):Promise.all(Tr.items.map(Qr=>al(Tr.driver.getItem,Qr.relativeKey,Qr.options).then(ci=>({key:Qr.key,value:$h(ci)}))))),getItemRaw(Yn,ar={}){Yn=ml(Yn);const{relativeKey:Tr,driver:Qr}=x(Yn);return Qr.getItemRaw?al(Qr.getItemRaw,Tr,ar):al(Qr.getItem,Tr,ar).then(ci=>function oh(oe){return"string"==typeof oe&&oe.startsWith(Gh)?(La(),Buffer.from(oe.slice(Gh.length),"base64")):oe}(ci))},setItem:(Yn,ar,Tr={})=>(0,b.Z)(function*(){if(void 0===ar)return Jn.removeItem(Yn);Yn=ml(Yn);const{relativeKey:Qr,driver:ci}=x(Yn);!ci.setItem||(yield al(ci.setItem,Qr,hd(ar),Tr),ci.watch||be("update",Yn))})(),setItems:(Yn,ar)=>(0,b.Z)(function*(){yield It(Yn,ar,function(){var Tr=(0,b.Z)(function*(Qr){Qr.driver.setItems&&(yield al(Qr.driver.setItems,Qr.items.map(ci=>({key:ci.relativeKey,value:hd(ci.value),options:ci.options})),ar)),Qr.driver.setItem&&(yield Promise.all(Qr.items.map(ci=>al(Qr.driver.setItem,ci.relativeKey,hd(ci.value),ci.options))))});return function(Qr){return Tr.apply(this,arguments)}}())})(),setItemRaw:(Yn,ar,Tr={})=>(0,b.Z)(function*(){if(void 0===ar)return Jn.removeItem(Yn,Tr);Yn=ml(Yn);const{relativeKey:Qr,driver:ci}=x(Yn);if(ci.setItemRaw)yield al(ci.setItemRaw,Qr,ar,Tr);else{if(!ci.setItem)return;yield al(ci.setItem,Qr,function Ug(oe){if("string"==typeof oe)return oe;La();const y=Buffer.from(oe).toString("base64");return Gh+y}(ar),Tr)}ci.watch||be("update",Yn)})(),removeItem:(Yn,ar={})=>(0,b.Z)(function*(){"boolean"==typeof ar&&(ar={removeMeta:ar}),Yn=ml(Yn);const{relativeKey:Tr,driver:Qr}=x(Yn);!Qr.removeItem||(yield al(Qr.removeItem,Tr,ar),(ar.removeMeta||ar.removeMata)&&(yield al(Qr.removeItem,Tr+"$",ar)),Qr.watch||be("remove",Yn))})(),getMeta:(Yn,ar={})=>(0,b.Z)(function*(){"boolean"==typeof ar&&(ar={nativeOnly:ar}),Yn=ml(Yn);const{relativeKey:Tr,driver:Qr}=x(Yn),ci=Object.create(null);if(Qr.getMeta&&Object.assign(ci,yield al(Qr.getMeta,Tr,ar)),!ar.nativeOnly){const Br=yield al(Qr.getItem,Tr+"$",ar).then(pi=>$h(pi));Br&&"object"==typeof Br&&("string"==typeof Br.atime&&(Br.atime=new Date(Br.atime)),"string"==typeof Br.mtime&&(Br.mtime=new Date(Br.mtime)),Object.assign(ci,Br))}return ci})(),setMeta(Yn,ar,Tr={}){return this.setItem(Yn+"$",ar,Tr)},removeMeta(Yn,ar={}){return this.removeItem(Yn+"$",ar)},getKeys:(Yn,ar={})=>(0,b.Z)(function*(){Yn=ah(Yn);const Tr=re(Yn,!0);let Qr=[];const ci=[];for(const Br of Tr){const Ui=(yield al(Br.driver.getKeys,Br.relativeBase,ar)).map(ds=>Br.mountpoint+ml(ds)).filter(ds=>!Qr.some(wo=>ds.startsWith(wo)));ci.push(...Ui),Qr=[Br.mountpoint,...Qr.filter(ds=>!ds.startsWith(Br.mountpoint))]}return ci.filter(Yn?Br=>Br.startsWith(Yn)&&!Br.endsWith("$"):Br=>!Br.endsWith("$"))})(),clear:(Yn,ar={})=>(0,b.Z)(function*(){Yn=ah(Yn),yield Promise.all(re(Yn,!1).map(function(){var Tr=(0,b.Z)(function*(Qr){if(Qr.driver.clear)return al(Qr.driver.clear,Qr.relativeBase,ar);if(Qr.driver.removeItem){const ci=yield Qr.driver.getKeys(Qr.relativeBase||"",ar);return Promise.all(ci.map(Br=>Qr.driver.removeItem(Br,ar)))}});return function(Qr){return Tr.apply(this,arguments)}}()))})(),dispose:()=>(0,b.Z)(function*(){yield Promise.all(Object.values(y.mounts).map(Yn=>zg(Yn)))})(),watch:Yn=>(0,b.Z)(function*(){return yield Ee(),y.watchListeners.push(Yn),(0,b.Z)(function*(){y.watchListeners=y.watchListeners.filter(ar=>ar!==Yn),0===y.watchListeners.length&&(yield Ye())})})(),unwatch:()=>(0,b.Z)(function*(){y.watchListeners=[],yield Ye()})(),mount(Yn,ar){if((Yn=ah(Yn))&&y.mounts[Yn])throw new Error(`already mounted at ${Yn}`);return Yn&&(y.mountpoints.push(Yn),y.mountpoints.sort((Tr,Qr)=>Qr.length-Tr.length)),y.mounts[Yn]=ar,y.watching&&Promise.resolve(Wg(ar,be,Yn)).then(Tr=>{y.unwatch[Yn]=Tr}).catch(console.error),Jn},unmount:(Yn,ar=!0)=>(0,b.Z)(function*(){(Yn=ah(Yn))&&y.mounts[Yn]&&(y.watching&&Yn in y.unwatch&&(y.unwatch[Yn](),delete y.unwatch[Yn]),ar&&(yield zg(y.mounts[Yn])),y.mountpoints=y.mountpoints.filter(Tr=>Tr!==Yn),delete y.mounts[Yn])})(),getMount(Yn=""){Yn=ml(Yn)+":";const ar=x(Yn);return{driver:ar.driver,base:ar.base}},getMounts:(Yn="",ar={})=>(Yn=ml(Yn),re(Yn,ar.parents).map(Qr=>({driver:Qr.driver,base:Qr.mountpoint})))};return Jn}({driver:eu({dbName:"WALLET_CONNECT_V2_INDEXED_DB",storeName:"keyvaluestorage"})})}getKeys(){var y=this;return(0,b.Z)(function*(){return y.indexedDb.getKeys()})()}getEntries(){var y=this;return(0,b.Z)(function*(){return(yield y.indexedDb.getItems(yield y.indexedDb.getKeys())).map(x=>[x.key,x.value])})()}getItem(y){var x=this;return(0,b.Z)(function*(){const re=yield x.indexedDb.getItem(y);if(null!==re)return re})()}setItem(y,x){var re=this;return(0,b.Z)(function*(){yield re.indexedDb.setItem(y,fd(x))})()}removeItem(y){var x=this;return(0,b.Z)(function*(){yield x.indexedDb.removeItem(y)})()}}var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vf={exports:{}};function my(oe){var y;return[oe[0],Xh(null!=(y=oe[1])?y:"")]}!function(){let oe;function y(){}oe=y,oe.prototype.getItem=function(x){return this.hasOwnProperty(x)?String(this[x]):null},oe.prototype.setItem=function(x,re){this[x]=String(re)},oe.prototype.removeItem=function(x){delete this[x]},oe.prototype.clear=function(){const x=this;Object.keys(x).forEach(function(re){x[re]=void 0,delete x[re]})},oe.prototype.key=function(x){return x=x||0,Object.keys(this)[x]},oe.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),Vf.exports=typeof Kp<"u"&&Kp.localStorage?Kp.localStorage:typeof window<"u"&&window.localStorage?window.localStorage:new y}();class Jg{constructor(){this.localStorage=Vf.exports}getKeys(){var y=this;return(0,b.Z)(function*(){return Object.keys(y.localStorage)})()}getEntries(){var y=this;return(0,b.Z)(function*(){return Object.entries(y.localStorage).map(my)})()}getItem(y){var x=this;return(0,b.Z)(function*(){const re=x.localStorage.getItem(y);if(null!==re)return Xh(re)})()}setItem(y,x){var re=this;return(0,b.Z)(function*(){re.localStorage.setItem(y,fd(x))})()}removeItem(y){var x=this;return(0,b.Z)(function*(){x.localStorage.removeItem(y)})()}}const vy=function(){var oe=(0,b.Z)(function*(y,x,re){const be="wc_storage_version",Ee=yield x.getItem(be);if(Ee&&Ee>=1)return void re(x);const Ye=yield y.getKeys();if(!Ye.length)return void re(x);const It=[];for(;Ye.length;){const Jn=Ye.shift();if(!Jn)continue;const Yn=Jn.toLowerCase();if(Yn.includes("wc@")||Yn.includes("walletconnect")||Yn.includes("wc_")||Yn.includes("wallet_connect")){const ar=yield y.getItem(Jn);yield x.setItem(Jn,ar),It.push(Jn)}}yield x.setItem(be,1),re(x),qs(y,It)});return function(x,re,be){return oe.apply(this,arguments)}}(),qs=function(){var oe=(0,b.Z)(function*(y,x){x.length&&x.forEach(function(){var re=(0,b.Z)(function*(be){yield y.removeItem(be)});return function(be){return re.apply(this,arguments)}}())});return function(x,re){return oe.apply(this,arguments)}}();class qg{constructor(){this.initialized=!1,this.setInitialized=x=>{this.storage=x,this.initialized=!0};const y=new Jg;this.storage=y;try{const x=new gy;vy(y,x,this.setInitialized)}catch{this.initialized=!0}}getKeys(){var y=this;return(0,b.Z)(function*(){return yield y.initialize(),y.storage.getKeys()})()}getEntries(){var y=this;return(0,b.Z)(function*(){return yield y.initialize(),y.storage.getEntries()})()}getItem(y){var x=this;return(0,b.Z)(function*(){return yield x.initialize(),x.storage.getItem(y)})()}setItem(y,x){var re=this;return(0,b.Z)(function*(){return yield re.initialize(),re.storage.setItem(y,x)})()}removeItem(y){var x=this;return(0,b.Z)(function*(){return yield x.initialize(),x.storage.removeItem(y)})()}initialize(){var y=this;return(0,b.Z)(function*(){y.initialized||(yield new Promise(x=>{const re=setInterval(()=>{y.initialized&&(clearInterval(re),x())},20)}))})()}}var uh=t(72062),Ro=t(83767),Gu=t(42092);class tu extends Gu.q{constructor(y){super(),this.opts=y,this.protocol="wc",this.version=2}}class by extends Gu.q{constructor(y,x){super(),this.core=y,this.logger=x,this.records=new Map}}class nu extends Gu.q{constructor(y,x){super(),this.relayer=y,this.logger=x}}class Wf extends Gu.q{constructor(y){super()}}class K_ extends Gu.q{constructor(y,x){super(),this.relayer=y,this.logger=x}}class Z_ extends Gu.q{constructor(y,x){super(),this.core=y,this.logger=x}}var im=t(65553);const Qp="base64url",om="did",am="key",lm="base58btc";function Gf(oe){return _a(ka(fd(oe),"utf8"),Qp)}function cm(oe){const x="z"+_a(Zo([ka("K36",lm),oe]),lm);return[om,am,x].join(":")}function eb(oe){return _a(oe,Qp)}function nb(oe){return ka([Gf(oe.header),Gf(oe.payload)].join("."),"utf8")}function t0(oe){return[Gf(oe.header),Gf(oe.payload),eb(oe.signature)].join(".")}function n0(oe=(0,Zs.randomBytes)(32)){return im._w(oe)}function Kf(){return Kf=(0,b.Z)(function*(oe,y,x,re,be=(0,Ni.fromMiliseconds)(Date.now())){const Ee={alg:"EdDSA",typ:"JWT"},Jn={iss:cm(re.publicKey),sub:oe,aud:y,iat:be,exp:be+x},Yn=nb({header:Ee,payload:Jn});return t0({header:Ee,payload:Jn,signature:im.Xx(re.secretKey,Yn)})}),Kf.apply(this,arguments)}t(6375);const a0="INTERNAL_ERROR",Xf="SERVER_ERROR",hm=[-32700,-32600,-32601,-32602,-32603],ru={PARSE_ERROR:{code:-32700,message:"Parse error"},INVALID_REQUEST:{code:-32600,message:"Invalid Request"},METHOD_NOT_FOUND:{code:-32601,message:"Method not found"},INVALID_PARAMS:{code:-32602,message:"Invalid params"},[a0]:{code:-32603,message:"Internal error"},[Xf]:{code:-32e3,message:"Server error"}},Jh=Xf;function fm(oe){return Object.keys(ru).includes(oe)?ru[oe]:ru[Jh]}function jd(oe,y,x){return oe.message.includes("getaddrinfo ENOTFOUND")||oe.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${x} RPC url at ${y}`):oe}var c0=t(71948);function pd(oe=3){return Date.now()*Math.pow(10,oe)+Math.floor(Math.random()*Math.pow(10,oe))}function u0(oe=6){return BigInt(pd(oe))}function Hd(oe,y,x){return{id:x||pd(),jsonrpc:"2.0",method:oe,params:y}}function pm(oe,y){return{id:oe,jsonrpc:"2.0",result:y}}function Qh(oe,y,x){return{id:oe,jsonrpc:"2.0",error:gm(y,x)}}function gm(oe,y){return typeof oe>"u"?fm(a0):("string"==typeof oe&&(oe=Object.assign(Object.assign({},fm(Xf)),{message:oe})),typeof y<"u"&&(oe.data=y),function Bd(oe){return hm.includes(oe)}(oe.code)&&(oe=function l0(oe){return Object.values(ru).find(x=>x.code===oe)||ru[Jh]}(oe.code)),oe)}function Py(oe,y){const x=function Oy(oe){const y=oe.match(new RegExp(/^\w+:/,"gi"));if(y&&y.length)return y[0]}(oe);return!(typeof x>"u")&&new RegExp(y).test(x)}function iu(oe){return Py(oe,"^https?:")}function d0(oe){return Py(oe,"^wss?:")}function ib(oe){return new RegExp("wss?://localhost(:d{2,5})?").test(oe)}function gd(oe){return"object"==typeof oe&&"id"in oe&&"jsonrpc"in oe&&"2.0"===oe.jsonrpc}function Us(oe){return gd(oe)&&"method"in oe}function qh(oe){return gd(oe)&&(tl(oe)||qo(oe))}function tl(oe){return"result"in oe}function qo(oe){return"error"in oe}class Ol extends class Iy extends class Ty extends class Dy{}{constructor(){super()}}{constructor(y){super()}}{constructor(y){super(y),this.events=new Cs.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(y),this.connection.connected&&this.registerEventListeners()}connect(y=this.connection){var x=this;return(0,b.Z)(function*(){yield x.open(y)})()}disconnect(){var y=this;return(0,b.Z)(function*(){yield y.close()})()}on(y,x){this.events.on(y,x)}once(y,x){this.events.once(y,x)}off(y,x){this.events.off(y,x)}removeListener(y,x){this.events.removeListener(y,x)}request(y,x){var re=this;return(0,b.Z)(function*(){return re.requestStrict(Hd(y.method,y.params||[],y.id||u0().toString()),x)})()}requestStrict(y,x){var re=this;return(0,b.Z)(function*(){return new Promise(function(){var be=(0,b.Z)(function*(Ee,Ye){if(!re.connection.connected)try{yield re.open()}catch(It){Ye(It)}re.events.on(`${y.id}`,It=>{qo(It)?Ye(It.error):Ee(It.result)});try{yield re.connection.send(y,x)}catch(It){Ye(It)}});return function(Ee,Ye){return be.apply(this,arguments)}}())})()}setConnection(y=this.connection){return y}onPayload(y){this.events.emit("payload",y),qh(y)?this.events.emit(`${y.id}`,y):this.events.emit("message",{type:y.method,data:y.params})}onClose(y){y&&3e3===y.code&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${y.code} ${y.reason?`(${y.reason})`:""}`)),this.events.emit("disconnect")}open(y=this.connection){var x=this;return(0,b.Z)(function*(){x.connection===y&&x.connection.connected||(x.connection.connected&&x.close(),"string"==typeof y&&(yield x.connection.open(y),y=x.connection),x.connection=x.setConnection(y),yield x.connection.open(),x.registerEventListeners(),x.events.emit("connect"))})()}close(){var y=this;return(0,b.Z)(function*(){yield y.connection.close()})()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",y=>this.onPayload(y)),this.connection.on("close",y=>this.onClose(y)),this.connection.on("error",y=>this.events.emit("error",y)),this.connection.on("register_error",y=>this.onClose()),this.hasRegisteredEventListeners=!0)}}const h0=oe=>oe.split("?")[0],Fy=typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:t(25504);class Cl{constructor(y){if(this.url=y,this.events=new Cs.EventEmitter,this.registering=!1,!d0(y))throw new Error(`Provided URL is not compatible with WebSocket connection: ${y}`);this.url=y}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(y,x){this.events.on(y,x)}once(y,x){this.events.once(y,x)}off(y,x){this.events.off(y,x)}removeListener(y,x){this.events.removeListener(y,x)}open(y=this.url){var x=this;return(0,b.Z)(function*(){yield x.register(y)})()}close(){var y=this;return(0,b.Z)(function*(){return new Promise((x,re)=>{typeof y.socket>"u"?re(new Error("Connection already closed")):(y.socket.onclose=be=>{y.onClose(be),x()},y.socket.close())})})()}send(y){var x=this;return(0,b.Z)(function*(){typeof x.socket>"u"&&(x.socket=yield x.register());try{x.socket.send(fd(y))}catch(re){x.onError(y.id,re)}})()}register(y=this.url){if(!d0(y))throw new Error(`Provided URL is not compatible with WebSocket connection: ${y}`);if(this.registering){const x=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=x||this.events.listenerCount("open")>=x)&&this.events.setMaxListeners(x+1),new Promise((re,be)=>{this.events.once("register_error",Ee=>{this.resetMaxListeners(),be(Ee)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return be(new Error("WebSocket connection is missing or invalid"));re(this.socket)})})}return this.url=y,this.registering=!0,new Promise((x,re)=>{const be=new URLSearchParams(y).get("origin"),Ee=(0,c0.isReactNative)()?{headers:{origin:be}}:{rejectUnauthorized:!ib(y)},Ye=new Fy(y,[],Ee);typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u"?Ye.onerror=It=>{re(this.emitError(It.error))}:Ye.on("error",It=>{re(this.emitError(It))}),Ye.onopen=()=>{this.onOpen(Ye),x(Ye)}})}onOpen(y){y.onmessage=x=>this.onPayload(x),y.onclose=x=>this.onClose(x),this.socket=y,this.registering=!1,this.events.emit("open")}onClose(y){this.socket=void 0,this.registering=!1,this.events.emit("close",y)}onPayload(y){if(typeof y.data>"u")return;const x="string"==typeof y.data?Xh(y.data):y.data;this.events.emit("payload",x)}onError(y,x){const re=this.parseError(x),Ee=Qh(y,re.message||re.toString());this.events.emit("payload",Ee)}parseError(y,x=this.url){return jd(y,h0(x),"WS")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}emitError(y){const x=this.parseError(new Error(y?.message||`WebSocket connection failed for host: ${h0(this.url)}`));return this.events.emit("register_error",x),x}}var Qf=t(88222),qf=t.n(Qf),f0=function Za(oe,y){if(oe.length>=255)throw new TypeError("Alphabet too long");for(var x=new Uint8Array(256),re=0;re<x.length;re++)x[re]=255;for(var be=0;be<oe.length;be++){var Ee=oe.charAt(be),Ye=Ee.charCodeAt(0);if(255!==x[Ye])throw new TypeError(Ee+" is ambiguous");x[Ye]=be}var It=oe.length,Jn=oe.charAt(0),Yn=Math.log(It)/Math.log(256),ar=Math.log(256)/Math.log(It);function Qr(Br){if("string"!=typeof Br)throw new TypeError("Expected String");if(0===Br.length)return new Uint8Array;var pi=0;if(" "!==Br[pi]){for(var Ui=0,ds=0;Br[pi]===Jn;)Ui++,pi++;for(var wo=(Br.length-pi)*Yn+1>>>0,oo=new Uint8Array(wo);Br[pi];){var ho=x[Br.charCodeAt(pi)];if(255===ho)return;for(var Ks=0,zo=wo-1;(0!==ho||Ks<ds)&&-1!==zo;zo--,Ks++)oo[zo]=(ho+=It*oo[zo]>>>0)%256>>>0,ho=ho/256>>>0;if(0!==ho)throw new Error("Non-zero carry");ds=Ks,pi++}if(" "!==Br[pi]){for(var yo=wo-ds;yo!==wo&&0===oo[yo];)yo++;for(var xa=new Uint8Array(Ui+(wo-yo)),pc=Ui;yo!==wo;)xa[pc++]=oo[yo++];return xa}}}return{encode:function Tr(Br){if(Br instanceof Uint8Array||(ArrayBuffer.isView(Br)?Br=new Uint8Array(Br.buffer,Br.byteOffset,Br.byteLength):Array.isArray(Br)&&(Br=Uint8Array.from(Br))),!(Br instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===Br.length)return"";for(var pi=0,Ui=0,ds=0,wo=Br.length;ds!==wo&&0===Br[ds];)ds++,pi++;for(var oo=(wo-ds)*ar+1>>>0,ho=new Uint8Array(oo);ds!==wo;){for(var Ks=Br[ds],zo=0,yo=oo-1;(0!==Ks||zo<Ui)&&-1!==yo;yo--,zo++)ho[yo]=(Ks+=256*ho[yo]>>>0)%It>>>0,Ks=Ks/It>>>0;if(0!==Ks)throw new Error("Non-zero carry");Ui=zo,ds++}for(var xa=oo-Ui;xa!==oo&&0===ho[xa];)xa++;for(var pc=Jn.repeat(pi);xa<oo;++xa)pc+=oe.charAt(ho[xa]);return pc},decodeUnsafe:Qr,decode:function ci(Br){var pi=Qr(Br);if(pi)return pi;throw new Error(`Non-${y} character`)}}};const mm=oe=>{if(oe instanceof Uint8Array&&"Uint8Array"===oe.constructor.name)return oe;if(oe instanceof ArrayBuffer)return new Uint8Array(oe);if(ArrayBuffer.isView(oe))return new Uint8Array(oe.buffer,oe.byteOffset,oe.byteLength);throw new Error("Unknown type, must be binary type")};class p0{constructor(y,x,re){this.name=y,this.prefix=x,this.baseEncode=re}encode(y){if(y instanceof Uint8Array)return`${this.prefix}${this.baseEncode(y)}`;throw Error("Unknown type, must be binary type")}}class Hy{constructor(y,x,re){if(this.name=y,this.prefix=x,void 0===x.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=x.codePointAt(0),this.baseDecode=re}decode(y){if("string"==typeof y){if(y.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(y)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(y.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(y){return ph(this,y)}}class Yy{constructor(y){this.decoders=y}or(y){return ph(this,y)}decode(y){const re=this.decoders[y[0]];if(re)return re.decode(y);throw RangeError(`Unable to decode multibase string ${JSON.stringify(y)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const ph=(oe,y)=>new Yy({...oe.decoders||{[oe.prefix]:oe},...y.decoders||{[y.prefix]:y}});class Yd{constructor(y,x,re,be){this.name=y,this.prefix=x,this.baseEncode=re,this.baseDecode=be,this.encoder=new p0(y,x,re),this.decoder=new Hy(y,x,be)}encode(y){return this.encoder.encode(y)}decode(y){return this.decoder.decode(y)}}const gh=({name:oe,prefix:y,encode:x,decode:re})=>new Yd(oe,y,x,re),Ud=({prefix:oe,name:y,alphabet:x})=>{const{encode:re,decode:be}=f0(x,y);return gh({prefix:oe,name:y,encode:re,decode:Ee=>mm(be(Ee))})},pa=({name:oe,prefix:y,bitsPerChar:x,alphabet:re})=>gh({prefix:y,name:oe,encode:be=>((oe,y,x)=>{const re="="===y[y.length-1],be=(1<<x)-1;let Ee="",Ye=0,It=0;for(let Jn=0;Jn<oe.length;++Jn)for(It=It<<8|oe[Jn],Ye+=8;Ye>x;)Ye-=x,Ee+=y[be&It>>Ye];if(Ye&&(Ee+=y[be&It<<x-Ye]),re)for(;Ee.length*x&7;)Ee+="=";return Ee})(be,re,x),decode:be=>((oe,y,x,re)=>{const be={};for(let ar=0;ar<y.length;++ar)be[y[ar]]=ar;let Ee=oe.length;for(;"="===oe[Ee-1];)--Ee;const Ye=new Uint8Array(Ee*x/8|0);let It=0,Jn=0,Yn=0;for(let ar=0;ar<Ee;++ar){const Tr=be[oe[ar]];if(void 0===Tr)throw new SyntaxError(`Non-${re} character`);Jn=Jn<<x|Tr,It+=x,It>=8&&(It-=8,Ye[Yn++]=255&Jn>>It)}if(It>=x||255&Jn<<8-It)throw new SyntaxError("Unexpected end of data");return Ye})(be,re,x,oe)}),nf=gh({prefix:"\0",name:"identity",encode:oe=>(oe=>(new TextDecoder).decode(oe))(oe),decode:oe=>(oe=>(new TextEncoder).encode(oe))(oe)});var g0=Object.freeze({__proto__:null,identity:nf});const lb=pa({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var Uy=Object.freeze({__proto__:null,base2:lb});const ym=pa({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var vm=Object.freeze({__proto__:null,base8:ym});const m0=Ud({prefix:"9",name:"base10",alphabet:"0123456789"});var Eu=Object.freeze({__proto__:null,base10:m0});const so=pa({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Cu=pa({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var ic=Object.freeze({__proto__:null,base16:so,base16upper:Cu});const _m=pa({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Vy=pa({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),la=pa({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),tp=pa({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),y0=pa({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),mh=pa({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),rf=pa({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),Wy=pa({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),v0=pa({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var bm=Object.freeze({__proto__:null,base32:_m,base32upper:Vy,base32pad:la,base32padupper:tp,base32hex:y0,base32hexupper:mh,base32hexpad:rf,base32hexpadupper:Wy,base32z:v0});const xm=Ud({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),wm=Ud({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var zy=Object.freeze({__proto__:null,base36:xm,base36upper:wm});const _0=Ud({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),$y=Ud({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var Gy=Object.freeze({__proto__:null,base58btc:_0,base58flickr:$y});const Em=pa({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),yh=pa({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Cm=pa({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),b0=pa({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var Ky=Object.freeze({__proto__:null,base64:Em,base64pad:yh,base64url:Cm,base64urlpad:b0});const Ku=Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),Zy=Ku.reduce((oe,y,x)=>(oe[x]=y,oe),[]),Xy=Ku.reduce((oe,y,x)=>(oe[y.codePointAt(0)]=x,oe),[]),Xa=gh({prefix:"\u{1f680}",name:"base256emoji",encode:function Jy(oe){return oe.reduce((y,x)=>y+Zy[x],"")},decode:function Sl(oe){const y=[];for(const x of oe){const re=Xy[x.codePointAt(0)];if(void 0===re)throw new Error(`Non-base256emoji character: ${x}`);y.push(re)}return new Uint8Array(y)}});var x0=Object.freeze({__proto__:null,base256emoji:Xa}),Qy=Math.pow(2,31),S0=Math.pow(2,7),Im=Math.pow(2,14),ev=Math.pow(2,21),cb=Math.pow(2,28),ub=Math.pow(2,35),M0=Math.pow(2,42),vh=Math.pow(2,49),km=Math.pow(2,56),Om=Math.pow(2,63),su={encode:function Dm(oe,y,x){y=y||[];for(var re=x=x||0;oe>=Qy;)y[x++]=255&oe|128,oe/=128;for(;-128&oe;)y[x++]=255&oe|128,oe>>>=7;return y[x]=0|oe,Dm.bytes=x-re+1,y},decode:function Tm(oe,re){var Ye,x=0,be=0,Ee=re=re||0,It=oe.length;do{if(Ee>=It)throw Tm.bytes=0,new RangeError("Could not decode varint");Ye=oe[Ee++],x+=be<28?(127&Ye)<<be:(127&Ye)*Math.pow(2,be),be+=7}while(Ye>=128);return Tm.bytes=Ee-re,x},encodingLength:function(oe){return oe<S0?1:oe<Im?2:oe<ev?3:oe<cb?4:oe<ub?5:oe<M0?6:oe<vh?7:oe<km?8:oe<Om?9:10}},tv=su;const Pm=(oe,y,x=0)=>(tv.encode(oe,y,x),y),np=oe=>tv.encodingLength(oe),rp=(oe,y)=>{const x=y.byteLength,re=np(oe),be=re+np(x),Ee=new Uint8Array(be+x);return Pm(oe,Ee,0),Pm(x,Ee,re),Ee.set(y,be),new Lm(oe,x,y,Ee)};class Lm{constructor(y,x,re,be){this.code=y,this.size=x,this.digest=re,this.bytes=be}}const Rm=({name:oe,code:y,encode:x})=>new hb(oe,y,x);class hb{constructor(y,x,re){this.name=y,this.code=x,this.encode=re}digest(y){if(y instanceof Uint8Array){const x=this.encode(y);return x instanceof Uint8Array?rp(this.code,x):x.then(re=>rp(this.code,re))}throw Error("Unknown type, must be binary type")}}const D0=oe=>function(){var y=(0,b.Z)(function*(x){return new Uint8Array(yield crypto.subtle.digest(oe,x))});return function(x){return y.apply(this,arguments)}}(),A0=Rm({name:"sha2-256",code:18,encode:D0("SHA-256")}),nv=Rm({name:"sha2-512",code:19,encode:D0("SHA-512")});Object.freeze({__proto__:null,sha256:A0,sha512:nv});const Fm=mm;Object.freeze({__proto__:null,identity:{code:0,name:"identity",encode:Fm,digest:oe=>rp(0,Fm(oe))}}),new TextEncoder,new TextDecoder;const sf={...g0,...Uy,...vm,...Eu,...ic,...bm,...zy,...Gy,...Ky,...x0};function Vd(oe){return null!=globalThis.Buffer?new Uint8Array(oe.buffer,oe.byteOffset,oe.byteLength):oe}function _h(oe,y,x,re){return{name:oe,prefix:y,encoder:{name:oe,prefix:y,encode:x},decoder:{decode:re}}}const Bm=_h("utf8","u",oe=>"u"+new TextDecoder("utf8").decode(oe),oe=>(new TextEncoder).encode(oe.substring(1))),I0=_h("ascii","a",oe=>{let y="a";for(let x=0;x<oe.length;x++)y+=String.fromCharCode(oe[x]);return y},oe=>{const y=function sv(oe=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?Vd(globalThis.Buffer.allocUnsafe(oe)):new Uint8Array(oe)}((oe=oe.substring(1)).length);for(let x=0;x<oe.length;x++)y[x]=oe.charCodeAt(x);return y}),k0={utf8:Bm,"utf-8":Bm,hex:sf.base16,latin1:I0,ascii:I0,binary:I0,...sf},Sc="wc@2:core:",ip={database:":memory:"},Wd="client_ed25519_seed",wh=Ni.ONE_DAY,_l=Ni.SIX_HOURS,P0="wss://relay.walletconnect.com",L0="wss://relay.walletconnect.org",Hm=Ni.ONE_SECOND,ou_created="subscription_created",ou_deleted="subscription_deleted",$m=1e3*Ni.FIVE_SECONDS,af={wc_pairingDelete:{req:{ttl:Ni.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:Ni.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:Ni.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:Ni.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:Ni.ONE_DAY,prompt:!1,tag:0},res:{ttl:Ni.ONE_DAY,prompt:!1,tag:0}}},au_expired="expirer_expired",Gm="verify-api",Mh="https://verify.walletconnect.com",vd="https://verify.walletconnect.org",hv=[Mh,vd];class Km{constructor(y,x){var re=this;this.core=y,this.logger=x,this.keychain=new Map,this.name="keychain",this.version="0.3",this.initialized=!1,this.storagePrefix=Sc,this.init=(0,b.Z)(function*(){if(!re.initialized){const be=yield re.getKeyChain();typeof be<"u"&&(re.keychain=be),re.initialized=!0}}),this.has=be=>(this.isInitialized(),this.keychain.has(be)),this.set=function(){var be=(0,b.Z)(function*(Ee,Ye){re.isInitialized(),re.keychain.set(Ee,Ye),yield re.persist()});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.get=be=>{this.isInitialized();const Ee=this.keychain.get(be);if(typeof Ee>"u"){const{message:Ye}=ki("NO_MATCHING_KEY",`${this.name}: ${be}`);throw new Error(Ye)}return Ee},this.del=function(){var be=(0,b.Z)(function*(Ee){re.isInitialized(),re.keychain.delete(Ee),yield re.persist()});return function(Ee){return be.apply(this,arguments)}}(),this.core=y,this.logger=(0,Ro.generateChildLogger)(x,this.name)}get context(){return(0,Ro.getLoggerContext)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}setKeyChain(y){var x=this;return(0,b.Z)(function*(){yield x.core.storage.setItem(x.storageKey,st(y))})()}getKeyChain(){var y=this;return(0,b.Z)(function*(){const x=yield y.core.storage.getItem(y.storageKey);return typeof x<"u"?ge(x):void 0})()}persist(){var y=this;return(0,b.Z)(function*(){yield y.setKeyChain(y.keychain)})()}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}}class fv{constructor(y,x,re){var be=this;this.core=y,this.logger=x,this.name="crypto",this.initialized=!1,this.init=(0,b.Z)(function*(){be.initialized||(yield be.keychain.init(),be.initialized=!0)}),this.hasKeys=Ee=>(this.isInitialized(),this.keychain.has(Ee)),this.getClientId=(0,b.Z)(function*(){return be.isInitialized(),cm(n0(yield be.getClientSeed()).publicKey)}),this.generateKeyPair=()=>{this.isInitialized();const Ee=function Wt(){const oe=Po.Au();return{privateKey:_a(oe.secretKey,Vo),publicKey:_a(oe.publicKey,Vo)}}();return this.setPrivateKey(Ee.publicKey,Ee.privateKey)},this.signJWT=function(){var Ee=(0,b.Z)(function*(Ye){be.isInitialized();const Jn=n0(yield be.getClientSeed()),Yn=Nn();return yield function r0(oe,y,x,re){return Kf.apply(this,arguments)}(Yn,Ye,wh,Jn)});return function(Ye){return Ee.apply(this,arguments)}}(),this.generateSharedKey=(Ee,Ye,It)=>{this.isInitialized();const Yn=function rr(oe,y){const x=Po.gi(ka(oe,Vo),ka(y,Vo),!0);return _a(new Ao.t(ps.mE,x).expand(32),Vo)}(this.getPrivateKey(Ee),Ye);return this.setSymKey(Yn,It)},this.setSymKey=function(){var Ee=(0,b.Z)(function*(Ye,It){be.isInitialized();const Jn=It||function Mi(oe){return _a((0,ps.vp)(ka(oe,Vo)),Vo)}(Ye);return yield be.keychain.set(Jn,Ye),Jn});return function(Ye,It){return Ee.apply(this,arguments)}}(),this.deleteKeyPair=function(){var Ee=(0,b.Z)(function*(Ye){be.isInitialized(),yield be.keychain.del(Ye)});return function(Ye){return Ee.apply(this,arguments)}}(),this.deleteSymKey=function(){var Ee=(0,b.Z)(function*(Ye){be.isInitialized(),yield be.keychain.del(Ye)});return function(Ye){return Ee.apply(this,arguments)}}(),this.encode=function(){var Ee=(0,b.Z)(function*(Ye,It,Jn){be.isInitialized();const Yn=Oa(Jn),ar=fd(It);if(Wo(Yn)){const Br=Yn.senderPublicKey,pi=Yn.receiverPublicKey;Ye=yield be.generateSharedKey(Br,pi)}const Tr=be.getSymKey(Ye),{type:Qr,senderPublicKey:ci}=Yn;return function Wa(oe){const y=function go(oe){return ka(`${oe}`,"base10")}(typeof oe.type<"u"?oe.type:0);if(1===Es(y)&&typeof oe.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const x=typeof oe.senderPublicKey<"u"?ka(oe.senderPublicKey,Vo):void 0,re=typeof oe.iv<"u"?ka(oe.iv,Vo):(0,Zs.randomBytes)(12);return function $l(oe){if(1===Es(oe.type)){if(typeof oe.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return _a(Zo([oe.type,oe.senderPublicKey,oe.iv,oe.sealed]),Kc)}return _a(Zo([oe.type,oe.iv,oe.sealed]),Kc)}({type:y,sealed:new fs.OK(ka(oe.symKey,Vo)).seal(re,ka(oe.message,gu)),iv:re,senderPublicKey:x})}({type:Qr,symKey:Tr,message:ar,senderPublicKey:ci})});return function(Ye,It,Jn){return Ee.apply(this,arguments)}}(),this.decode=function(){var Ee=(0,b.Z)(function*(Ye,It,Jn){be.isInitialized();const Yn=function To(oe,y){const x=Qs(oe);return Oa({type:Es(x.type),senderPublicKey:typeof x.senderPublicKey<"u"?_a(x.senderPublicKey,Vo):void 0,receiverPublicKey:y?.receiverPublicKey})}(It,Jn);if(Wo(Yn)){const ar=Yn.receiverPublicKey,Tr=Yn.senderPublicKey;Ye=yield be.generateSharedKey(ar,Tr)}try{const Tr=function Sa(oe){const y=new fs.OK(ka(oe.symKey,Vo)),{sealed:x,iv:re}=Qs(oe.encoded),be=y.open(re,x);if(null===be)throw new Error("Failed to decrypt");return _a(be,gu)}({symKey:be.getSymKey(Ye),encoded:It});return Xh(Tr)}catch(ar){be.logger.error(`Failed to decode message from topic: '${Ye}', clientId: '${yield be.getClientId()}'`),be.logger.error(ar)}});return function(Ye,It,Jn){return Ee.apply(this,arguments)}}(),this.getPayloadType=Ee=>Es(Qs(Ee).type),this.getPayloadSenderPublicKey=Ee=>{const Ye=Qs(Ee);return Ye.senderPublicKey?_a(Ye.senderPublicKey,Vo):void 0},this.core=y,this.logger=(0,Ro.generateChildLogger)(x,this.name),this.keychain=re||new Km(this.core,this.logger)}get context(){return(0,Ro.getLoggerContext)(this.logger)}setPrivateKey(y,x){var re=this;return(0,b.Z)(function*(){return yield re.keychain.set(y,x),y})()}getPrivateKey(y){return this.keychain.get(y)}getClientSeed(){var y=this;return(0,b.Z)(function*(){let x="";try{x=y.keychain.get(Wd)}catch{x=Nn(),yield y.keychain.set(Wd,x)}return function Su(oe,y="utf8"){const x=k0[y];if(!x)throw new Error(`Unsupported encoding "${y}"`);return"utf8"!==y&&"utf-8"!==y||null==globalThis.Buffer||null==globalThis.Buffer.from?x.decoder.decode(`${x.prefix}${oe}`):Vd(globalThis.Buffer.from(oe,"utf-8"))}(x,"base16")})()}getSymKey(y){return this.keychain.get(y)}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}}class Zm extends class Zp{constructor(y,x){this.logger=y,this.core=x}}{constructor(y,x){var re;super(y,x),re=this,this.logger=y,this.core=x,this.messages=new Map,this.name="messages",this.version="0.3",this.initialized=!1,this.storagePrefix=Sc,this.init=(0,b.Z)(function*(){if(!re.initialized){re.logger.trace("Initialized");try{const be=yield re.getRelayerMessages();typeof be<"u"&&(re.messages=be),re.logger.debug(`Successfully Restored records for ${re.name}`),re.logger.trace({type:"method",method:"restore",size:re.messages.size})}catch(be){re.logger.debug(`Failed to Restore records for ${re.name}`),re.logger.error(be)}finally{re.initialized=!0}}}),this.set=function(){var be=(0,b.Z)(function*(Ee,Ye){re.isInitialized();const It=Js(Ye);let Jn=re.messages.get(Ee);return typeof Jn>"u"&&(Jn={}),typeof Jn[It]<"u"||(Jn[It]=Ye,re.messages.set(Ee,Jn),yield re.persist()),It});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.get=be=>{this.isInitialized();let Ee=this.messages.get(be);return typeof Ee>"u"&&(Ee={}),Ee},this.has=(be,Ee)=>(this.isInitialized(),typeof this.get(be)[Js(Ee)]<"u"),this.del=function(){var be=(0,b.Z)(function*(Ee){re.isInitialized(),re.messages.delete(Ee),yield re.persist()});return function(Ee){return be.apply(this,arguments)}}(),this.logger=(0,Ro.generateChildLogger)(y,this.name),this.core=x}get context(){return(0,Ro.getLoggerContext)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}setRelayerMessages(y){var x=this;return(0,b.Z)(function*(){yield x.core.storage.setItem(x.storageKey,st(y))})()}getRelayerMessages(){var y=this;return(0,b.Z)(function*(){const x=yield y.core.storage.getItem(y.storageKey);return typeof x<"u"?ge(x):void 0})()}persist(){var y=this;return(0,b.Z)(function*(){yield y.setRelayerMessages(y.messages)})()}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}}class V extends nu{constructor(y,x){var re;super(y,x),re=this,this.relayer=y,this.logger=x,this.events=new Cs.EventEmitter,this.name="publisher",this.queue=new Map,this.publishTimeout=(0,Ni.toMiliseconds)(Ni.TEN_SECONDS),this.needsTransportRestart=!1,this.publish=function(){var be=(0,b.Z)(function*(Ee,Ye,It){var Jn;re.logger.debug("Publishing Payload"),re.logger.trace({type:"method",method:"publish",params:{topic:Ee,message:Ye,opts:It}});try{const Yn=It?.ttl||_l,ar=ud(It),Tr=It?.prompt||!1,Qr=It?.tag||0,ci=It?.id||u0().toString(),Br={topic:Ee,message:Ye,opts:{ttl:Yn,relay:ar,prompt:Tr,tag:Qr,id:ci}},pi=setTimeout(()=>re.queue.set(ci,Br),re.publishTimeout);try{yield yield ni(re.rpcPublish(Ee,Ye,Yn,ar,Tr,Qr,ci),re.publishTimeout,"Failed to publish payload, please try again."),re.removeRequestFromQueue(ci),re.relayer.events.emit("relayer_publish",Br)}catch(Ui){if(re.logger.debug("Publishing Payload stalled"),re.needsTransportRestart=!0,null!=(Jn=It?.internal)&&Jn.throwOnFailedPublish)throw re.removeRequestFromQueue(ci),Ui;return}finally{clearTimeout(pi)}re.logger.debug("Successfully Published Payload"),re.logger.trace({type:"method",method:"publish",params:{topic:Ee,message:Ye,opts:It}})}catch(Yn){throw re.logger.debug("Failed to Publish Payload"),re.logger.error(Yn),Yn}});return function(Ee,Ye,It){return be.apply(this,arguments)}}(),this.on=(be,Ee)=>{this.events.on(be,Ee)},this.once=(be,Ee)=>{this.events.once(be,Ee)},this.off=(be,Ee)=>{this.events.off(be,Ee)},this.removeListener=(be,Ee)=>{this.events.removeListener(be,Ee)},this.relayer=y,this.logger=(0,Ro.generateChildLogger)(x,this.name),this.registerEventListeners()}get context(){return(0,Ro.getLoggerContext)(this.logger)}rpcPublish(y,x,re,be,Ee,Ye,It){var Jn,Yn,ar,Tr;const Qr={method:dd(be.protocol).publish,params:{topic:y,message:x,ttl:re,prompt:Ee,tag:Ye},id:It};return gl(null==(Jn=Qr.params)?void 0:Jn.prompt)&&(null==(Yn=Qr.params)||delete Yn.prompt),gl(null==(ar=Qr.params)?void 0:ar.tag)&&(null==(Tr=Qr.params)||delete Tr.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:Qr}),this.relayer.request(Qr)}removeRequestFromQueue(y){this.queue.delete(y)}checkQueue(){var y=this;this.queue.forEach(function(){var x=(0,b.Z)(function*(re){const{topic:be,message:Ee,opts:Ye}=re;yield y.publish(be,Ee,Ye)});return function(re){return x.apply(this,arguments)}}())}registerEventListeners(){this.relayer.core.heartbeat.on(uh.HEARTBEAT_EVENTS.pulse,()=>{if(this.needsTransportRestart)return this.needsTransportRestart=!1,void this.relayer.events.emit("relayer_connection_stalled");this.checkQueue()}),this.relayer.on("relayer_message_ack",y=>{this.removeRequestFromQueue(y.id.toString())})}}class ae{constructor(){this.map=new Map,this.set=(y,x)=>{const re=this.get(y);this.exists(y,x)||this.map.set(y,[...re,x])},this.get=y=>this.map.get(y)||[],this.exists=(y,x)=>this.get(y).includes(x),this.delete=(y,x)=>{if(typeof x>"u")return void this.map.delete(y);if(!this.map.has(y))return;const re=this.get(y);if(!this.exists(y,x))return;const be=re.filter(Ee=>Ee!==x);be.length?this.map.set(y,be):this.map.delete(y)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var Fe=Object.defineProperty,Lt=Object.defineProperties,xn=Object.getOwnPropertyDescriptors,$n=Object.getOwnPropertySymbols,dr=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable,Lr=(oe,y,x)=>y in oe?Fe(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,oi=(oe,y)=>{for(var x in y||(y={}))dr.call(y,x)&&Lr(oe,x,y[x]);if($n)for(var x of $n(y))Er.call(y,x)&&Lr(oe,x,y[x]);return oe},ai=(oe,y)=>Lt(oe,xn(y));class gi extends K_{constructor(y,x){var re;super(y,x),re=this,this.relayer=y,this.logger=x,this.subscriptions=new Map,this.topicMap=new ae,this.events=new Cs.EventEmitter,this.name="subscription",this.version="0.3",this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=Sc,this.subscribeTimeout=1e4,this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.init=(0,b.Z)(function*(){re.initialized||(re.logger.trace("Initialized"),re.registerEventListeners(),re.clientId=yield re.relayer.core.crypto.getClientId())}),this.subscribe=function(){var be=(0,b.Z)(function*(Ee,Ye){yield re.restartToComplete(),re.isInitialized(),re.logger.debug("Subscribing Topic"),re.logger.trace({type:"method",method:"subscribe",params:{topic:Ee,opts:Ye}});try{const It=ud(Ye),Jn={topic:Ee,relay:It};re.pending.set(Ee,Jn);const Yn=yield re.rpcSubscribe(Ee,It);return re.onSubscribe(Yn,Jn),re.logger.debug("Successfully Subscribed Topic"),re.logger.trace({type:"method",method:"subscribe",params:{topic:Ee,opts:Ye}}),Yn}catch(It){throw re.logger.debug("Failed to Subscribe Topic"),re.logger.error(It),It}});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.unsubscribe=function(){var be=(0,b.Z)(function*(Ee,Ye){yield re.restartToComplete(),re.isInitialized(),typeof Ye?.id<"u"?yield re.unsubscribeById(Ee,Ye.id,Ye):yield re.unsubscribeByTopic(Ee,Ye)});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.isSubscribed=function(){var be=(0,b.Z)(function*(Ee){return!!re.topics.includes(Ee)||(yield new Promise((Ye,It)=>{const Jn=new Ni.Watch;Jn.start(re.pendingSubscriptionWatchLabel);const Yn=setInterval(()=>{!re.pending.has(Ee)&&re.topics.includes(Ee)&&(clearInterval(Yn),Jn.stop(re.pendingSubscriptionWatchLabel),Ye(!0)),Jn.elapsed(re.pendingSubscriptionWatchLabel)>=$m&&(clearInterval(Yn),Jn.stop(re.pendingSubscriptionWatchLabel),It(new Error("Subscription resolution timeout")))},re.pollingInterval)}).catch(()=>!1))});return function(Ee){return be.apply(this,arguments)}}(),this.on=(be,Ee)=>{this.events.on(be,Ee)},this.once=(be,Ee)=>{this.events.once(be,Ee)},this.off=(be,Ee)=>{this.events.off(be,Ee)},this.removeListener=(be,Ee)=>{this.events.removeListener(be,Ee)},this.restart=(0,b.Z)(function*(){re.restartInProgress=!0,yield re.restore(),yield re.reset(),re.restartInProgress=!1}),this.relayer=y,this.logger=(0,Ro.generateChildLogger)(x,this.name),this.clientId=""}get context(){return(0,Ro.getLoggerContext)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(y,x){let re=!1;try{re=this.getSubscription(y).topic===x}catch{}return re}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}unsubscribeByTopic(y,x){var re=this;return(0,b.Z)(function*(){const be=re.topicMap.get(y);yield Promise.all(be.map(function(){var Ee=(0,b.Z)(function*(Ye){return yield re.unsubscribeById(y,Ye,x)});return function(Ye){return Ee.apply(this,arguments)}}()))})()}unsubscribeById(y,x,re){var be=this;return(0,b.Z)(function*(){be.logger.debug("Unsubscribing Topic"),be.logger.trace({type:"method",method:"unsubscribe",params:{topic:y,id:x,opts:re}});try{const Ee=ud(re);yield be.rpcUnsubscribe(y,x,Ee);const Ye=Ka("USER_DISCONNECTED",`${be.name}, ${y}`);yield be.onUnsubscribe(y,x,Ye),be.logger.debug("Successfully Unsubscribed Topic"),be.logger.trace({type:"method",method:"unsubscribe",params:{topic:y,id:x,opts:re}})}catch(Ee){throw be.logger.debug("Failed to Unsubscribe Topic"),be.logger.error(Ee),Ee}})()}rpcSubscribe(y,x){var re=this;return(0,b.Z)(function*(){const be={method:dd(x.protocol).subscribe,params:{topic:y}};re.logger.debug("Outgoing Relay Payload"),re.logger.trace({type:"payload",direction:"outgoing",request:be});try{yield yield ni(re.relayer.request(be),re.subscribeTimeout)}catch{re.logger.debug("Outgoing Relay Subscribe Payload stalled"),re.relayer.events.emit("relayer_connection_stalled")}return Js(y+re.clientId)})()}rpcBatchSubscribe(y){var x=this;return(0,b.Z)(function*(){if(!y.length)return;const be={method:dd(y[0].relay.protocol).batchSubscribe,params:{topics:y.map(Ee=>Ee.topic)}};x.logger.debug("Outgoing Relay Payload"),x.logger.trace({type:"payload",direction:"outgoing",request:be});try{return yield yield ni(x.relayer.request(be),x.subscribeTimeout)}catch{x.logger.debug("Outgoing Relay Payload stalled"),x.relayer.events.emit("relayer_connection_stalled")}})()}rpcUnsubscribe(y,x,re){const be={method:dd(re.protocol).unsubscribe,params:{topic:y,id:x}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:be}),this.relayer.request(be)}onSubscribe(y,x){this.setSubscription(y,ai(oi({},x),{id:y})),this.pending.delete(x.topic)}onBatchSubscribe(y){y.length&&y.forEach(x=>{this.setSubscription(x.id,oi({},x)),this.pending.delete(x.topic)})}onUnsubscribe(y,x,re){var be=this;return(0,b.Z)(function*(){be.events.removeAllListeners(x),be.hasSubscription(x,y)&&be.deleteSubscription(x,re),yield be.relayer.messages.del(y)})()}setRelayerSubscriptions(y){var x=this;return(0,b.Z)(function*(){yield x.relayer.core.storage.setItem(x.storageKey,y)})()}getRelayerSubscriptions(){var y=this;return(0,b.Z)(function*(){return yield y.relayer.core.storage.getItem(y.storageKey)})()}setSubscription(y,x){this.subscriptions.has(y)||(this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:y,subscription:x}),this.addSubscription(y,x))}addSubscription(y,x){this.subscriptions.set(y,oi({},x)),this.topicMap.set(x.topic,y),this.events.emit(ou_created,x)}getSubscription(y){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:y});const x=this.subscriptions.get(y);if(!x){const{message:re}=ki("NO_MATCHING_KEY",`${this.name}: ${y}`);throw new Error(re)}return x}deleteSubscription(y,x){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:y,reason:x});const re=this.getSubscription(y);this.subscriptions.delete(y),this.topicMap.delete(re.topic,y),this.events.emit(ou_deleted,ai(oi({},re),{reason:x}))}persist(){var y=this;return(0,b.Z)(function*(){yield y.setRelayerSubscriptions(y.values),y.events.emit("subscription_sync")})()}reset(){var y=this;return(0,b.Z)(function*(){if(y.cached.length){const x=Math.ceil(y.cached.length/y.batchSubscribeTopicsLimit);for(let re=0;re<x;re++){const be=y.cached.splice(0,y.batchSubscribeTopicsLimit);yield y.batchSubscribe(be)}}y.events.emit("subscription_resubscribed")})()}restore(){var y=this;return(0,b.Z)(function*(){try{const x=yield y.getRelayerSubscriptions();if(typeof x>"u"||!x.length)return;if(y.subscriptions.size){const{message:re}=ki("RESTORE_WILL_OVERRIDE",y.name);throw y.logger.error(re),y.logger.error(`${y.name}: ${JSON.stringify(y.values)}`),new Error(re)}y.cached=x,y.logger.debug(`Successfully Restored subscriptions for ${y.name}`),y.logger.trace({type:"method",method:"restore",subscriptions:y.values})}catch(x){y.logger.debug(`Failed to Restore subscriptions for ${y.name}`),y.logger.error(x)}})()}batchSubscribe(y){var x=this;return(0,b.Z)(function*(){if(!y.length)return;const re=yield x.rpcBatchSubscribe(y);nc(re)&&x.onBatchSubscribe(re.map((be,Ee)=>ai(oi({},y[Ee]),{id:be})))})()}onConnect(){var y=this;return(0,b.Z)(function*(){y.restartInProgress||(yield y.restart(),y.onEnable())})()}onDisconnect(){this.onDisable()}checkPending(){var y=this;return(0,b.Z)(function*(){if(!y.initialized||y.relayer.transportExplicitlyClosed)return;const x=[];y.pending.forEach(re=>{x.push(re)}),yield y.batchSubscribe(x)})()}registerEventListeners(){var y=this;this.relayer.core.heartbeat.on(uh.HEARTBEAT_EVENTS.pulse,(0,b.Z)(function*(){yield y.checkPending()})),this.relayer.on("relayer_connect",(0,b.Z)(function*(){yield y.onConnect()})),this.relayer.on("relayer_disconnect",()=>{this.onDisconnect()}),this.events.on(ou_created,function(){var x=(0,b.Z)(function*(re){const be=ou_created;y.logger.info(`Emitting ${be}`),y.logger.debug({type:"event",event:be,data:re}),yield y.persist()});return function(re){return x.apply(this,arguments)}}()),this.events.on(ou_deleted,function(){var x=(0,b.Z)(function*(re){const be=ou_deleted;y.logger.info(`Emitting ${be}`),y.logger.debug({type:"event",event:be,data:re}),yield y.persist()});return function(re){return x.apply(this,arguments)}}())}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}restartToComplete(){var y=this;return(0,b.Z)(function*(){y.restartInProgress&&(yield new Promise(x=>{const re=setInterval(()=>{y.restartInProgress||(clearInterval(re),x())},y.pollingInterval)}))})()}}var Pi=Object.defineProperty,ls=Object.getOwnPropertySymbols,Ss=Object.prototype.hasOwnProperty,mo=Object.prototype.propertyIsEnumerable,Ls=(oe,y,x)=>y in oe?Pi(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x;class ko extends Wf{constructor(y){var x;super(y),x=this,this.protocol="wc",this.version=2,this.events=new Cs.EventEmitter,this.name="relayer",this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","socket stalled"],this.hasExperiencedNetworkDisruption=!1,this.request=function(){var re=(0,b.Z)(function*(be){x.logger.debug("Publishing Request Payload");try{return yield x.toEstablishConnection(),yield x.provider.request(be)}catch(Ee){throw x.logger.debug("Failed to Publish Request"),x.logger.error(Ee),Ee}});return function(be){return re.apply(this,arguments)}}(),this.onPayloadHandler=re=>{this.onProviderPayload(re)},this.onConnectHandler=()=>{this.events.emit("relayer_connect")},this.onDisconnectHandler=()=>{this.onProviderDisconnect()},this.onProviderErrorHandler=re=>{this.logger.error(re),this.events.emit("relayer_error",re),this.logger.info("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on("payload",this.onPayloadHandler),this.provider.on("connect",this.onConnectHandler),this.provider.on("disconnect",this.onDisconnectHandler),this.provider.on("error",this.onProviderErrorHandler)},this.core=y.core,this.logger=typeof y.logger<"u"&&"string"!=typeof y.logger?(0,Ro.generateChildLogger)(y.logger,this.name):(0,Ro.pino)((0,Ro.getDefaultLoggerOptions)({level:y.logger||"error"})),this.messages=new Zm(this.logger,y.core),this.subscriber=new gi(this,this.logger),this.publisher=new V(this,this.logger),this.relayUrl=y?.relayUrl||P0,this.projectId=y.projectId,this.bundleId=function Xr(){var oe;try{return ln()&&typeof global<"u"&&typeof(null==global?void 0:global.Application)<"u"?null==(oe=global.Application)?void 0:oe.applicationId:void 0}catch{return}}(),this.provider={}}init(){var y=this;return(0,b.Z)(function*(){y.logger.trace("Initialized"),y.registerEventListeners(),yield y.createProvider(),yield Promise.all([y.messages.init(),y.subscriber.init()]);try{yield y.transportOpen()}catch{y.logger.warn(`Connection via ${y.relayUrl} failed, attempting to connect via failover domain ${L0}...`),yield y.restartTransport(L0)}y.initialized=!0,setTimeout((0,b.Z)(function*(){0===y.subscriber.topics.length&&(y.logger.info("No topics subscribed to after init, closing transport"),yield y.transportClose(),y.transportExplicitlyClosed=!1)}),1e4)})()}get context(){return(0,Ro.getLoggerContext)(this.logger)}get connected(){return this.provider.connection.connected}get connecting(){return this.provider.connection.connecting}publish(y,x,re){var be=this;return(0,b.Z)(function*(){be.isInitialized(),yield be.publisher.publish(y,x,re),yield be.recordMessageEvent({topic:y,message:x,publishedAt:Date.now()})})()}subscribe(y,x){var re=this;return(0,b.Z)(function*(){var be;re.isInitialized();let Ye,Ee=(null==(be=re.subscriber.topicMap.get(y))?void 0:be[0])||"";if(Ee)return Ee;const It=Jn=>{Jn.topic===y&&(re.subscriber.off(ou_created,It),Ye())};return yield Promise.all([new Promise(Jn=>{Ye=Jn,re.subscriber.on(ou_created,It)}),new Promise(function(){var Jn=(0,b.Z)(function*(Yn){Ee=yield re.subscriber.subscribe(y,x),Yn()});return function(Yn){return Jn.apply(this,arguments)}}())]),Ee})()}unsubscribe(y,x){var re=this;return(0,b.Z)(function*(){re.isInitialized(),yield re.subscriber.unsubscribe(y,x)})()}on(y,x){this.events.on(y,x)}once(y,x){this.events.once(y,x)}off(y,x){this.events.off(y,x)}removeListener(y,x){this.events.removeListener(y,x)}transportClose(){var y=this;return(0,b.Z)(function*(){y.transportExplicitlyClosed=!0,y.hasExperiencedNetworkDisruption&&y.connected?yield ni(y.provider.disconnect(),1e3,"provider.disconnect()").catch(()=>y.onProviderDisconnect()):y.connected&&(yield y.provider.disconnect())})()}transportOpen(y){var x=this;return(0,b.Z)(function*(){if(x.transportExplicitlyClosed=!1,yield x.confirmOnlineStateOrThrow(),!x.connectionAttemptInProgress){y&&y!==x.relayUrl&&(x.relayUrl=y,yield x.transportClose(),yield x.createProvider()),x.connectionAttemptInProgress=!0;try{yield Promise.all([new Promise(re=>{if(!x.initialized)return re();x.subscriber.once("subscription_resubscribed",()=>{re()})}),new Promise(function(){var re=(0,b.Z)(function*(be,Ee){try{yield ni(x.provider.connect(),1e4,`Socket stalled when trying to connect to ${x.relayUrl}`)}catch(Ye){return void Ee(Ye)}be()});return function(be,Ee){return re.apply(this,arguments)}}())])}catch(re){if(x.logger.error(re),!x.isConnectionStalled(re.message))throw re;x.provider.events.emit("disconnect")}finally{x.connectionAttemptInProgress=!1,x.hasExperiencedNetworkDisruption=!1}}})()}restartTransport(y){var x=this;return(0,b.Z)(function*(){yield x.confirmOnlineStateOrThrow(),!x.connectionAttemptInProgress&&(x.relayUrl=y||x.relayUrl,yield x.transportClose(),yield x.createProvider(),yield x.transportOpen())})()}confirmOnlineStateOrThrow(){return(0,b.Z)(function*(){if(!(yield sh()))throw new Error("No internet connection detected. Please restart your network and try again.")})()}isConnectionStalled(y){return this.staleConnectionErrors.some(x=>y.includes(x))}createProvider(){var y=this;return(0,b.Z)(function*(){y.provider.connection&&y.unregisterProviderListeners();const x=yield y.core.crypto.signJWT(y.relayUrl);y.provider=new Ol(new Cl(function Uh({protocol:oe,version:y,relayUrl:x,sdkVersion:re,auth:be,projectId:Ee,useOnCloseEvent:Ye,bundleId:It}){const Jn=x.split("?"),Yn=Gl(oe,y,re),Tr=function Hi(oe,y){let x=Wl.parse(oe);return x=Tf(Tf({},x),y),Wl.stringify(x)}(Jn[1]||"",{auth:be,ua:Yn,projectId:Ee,useOnCloseEvent:Ye||void 0,origin:It||void 0});return Jn[0]+"?"+Tr}({sdkVersion:"2.10.6",protocol:y.protocol,version:y.version,relayUrl:y.relayUrl,projectId:y.projectId,auth:x,useOnCloseEvent:!0,bundleId:y.bundleId}))),y.registerProviderListeners()})()}recordMessageEvent(y){var x=this;return(0,b.Z)(function*(){const{topic:re,message:be}=y;yield x.messages.set(re,be)})()}shouldIgnoreMessageEvent(y){var x=this;return(0,b.Z)(function*(){const{topic:re,message:be}=y;if(!be||0===be.length)return x.logger.debug(`Ignoring invalid/empty message: ${be}`),!0;if(!(yield x.subscriber.isSubscribed(re)))return x.logger.debug(`Ignoring message for non-subscribed topic ${re}`),!0;const Ee=x.messages.has(re,be);return Ee&&x.logger.debug(`Ignoring duplicate message: ${be}`),Ee})()}onProviderPayload(y){var x=this;return(0,b.Z)(function*(){if(x.logger.debug("Incoming Relay Payload"),x.logger.trace({type:"payload",direction:"incoming",payload:y}),Us(y)){if(!y.method.endsWith("_subscription"))return;const re=y.params,{topic:be,message:Ee,publishedAt:Ye}=re.data,It={topic:be,message:Ee,publishedAt:Ye};x.logger.debug("Emitting Relayer Payload"),x.logger.trace(((oe,y)=>{for(var x in y||(y={}))Ss.call(y,x)&&Ls(oe,x,y[x]);if(ls)for(var x of ls(y))mo.call(y,x)&&Ls(oe,x,y[x]);return oe})({type:"event",event:re.id},It)),x.events.emit(re.id,It),yield x.acknowledgePayload(y),yield x.onMessageEvent(It)}else qh(y)&&x.events.emit("relayer_message_ack",y)})()}onMessageEvent(y){var x=this;return(0,b.Z)(function*(){(yield x.shouldIgnoreMessageEvent(y))||(x.events.emit("relayer_message",y),yield x.recordMessageEvent(y))})()}acknowledgePayload(y){var x=this;return(0,b.Z)(function*(){const re=pm(y.id,!0);yield x.provider.connection.send(re)})()}unregisterProviderListeners(){this.provider.off("payload",this.onPayloadHandler),this.provider.off("connect",this.onConnectHandler),this.provider.off("disconnect",this.onDisconnectHandler),this.provider.off("error",this.onProviderErrorHandler)}registerEventListeners(){var y=this;return(0,b.Z)(function*(){y.events.on("relayer_connection_stalled",()=>{y.restartTransport().catch(re=>y.logger.error(re))});let x=yield sh();!function j_(oe){switch(vr()){case"browser":!function Hg(oe){!ln()&&Ln()&&(window.addEventListener("online",()=>oe(!0)),window.addEventListener("offline",()=>oe(!1)))}(oe);break;case"react-native":!function Yp(oe){ln()&&typeof global<"u"&&null!=global&&global.NetInfo&&global?.NetInfo.addEventListener(y=>oe(y?.isConnected))}(oe)}}(function(){var re=(0,b.Z)(function*(be){y.initialized&&x!==be&&(x=be,be?yield y.restartTransport().catch(Ee=>y.logger.error(Ee)):(y.hasExperiencedNetworkDisruption=!0,yield y.transportClose().catch(Ee=>y.logger.error(Ee))))});return function(be){return re.apply(this,arguments)}}())})()}onProviderDisconnect(){this.events.emit("relayer_disconnect"),this.attemptToReconnect()}attemptToReconnect(){var y=this;this.transportExplicitlyClosed||(this.logger.info("attemptToReconnect called. Connecting..."),setTimeout((0,b.Z)(function*(){yield y.restartTransport().catch(x=>y.logger.error(x))}),(0,Ni.toMiliseconds)(Hm)))}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}toEstablishConnection(){var y=this;return(0,b.Z)(function*(){if(yield y.confirmOnlineStateOrThrow(),!y.connected){if(y.connectionAttemptInProgress)return yield new Promise(x=>{const re=setInterval(()=>{y.connected&&(clearInterval(re),x())},y.connectionStatusPollingInterval)});yield y.restartTransport()}})()}}var sc=Object.defineProperty,Ml=Object.getOwnPropertySymbols,Dc=Object.prototype.hasOwnProperty,Ra=Object.prototype.propertyIsEnumerable,oc=(oe,y,x)=>y in oe?sc(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,Yc=(oe,y)=>{for(var x in y||(y={}))Dc.call(y,x)&&oc(oe,x,y[x]);if(Ml)for(var x of Ml(y))Ra.call(y,x)&&oc(oe,x,y[x]);return oe};class lp extends class em{constructor(y,x,re,be){this.core=y,this.logger=x,this.name=re}}{constructor(y,x,re,be=Sc,Ee){var Ye;super(y,x,re,be),Ye=this,this.core=y,this.logger=x,this.name=re,this.map=new Map,this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Sc,this.init=(0,b.Z)(function*(){Ye.initialized||(Ye.logger.trace("Initialized"),yield Ye.restore(),Ye.cached.forEach(It=>{Ye.getKey&&null!==It&&!gl(It)?Ye.map.set(Ye.getKey(It),It):function Bf(oe){var y;return null==(y=oe?.proposer)?void 0:y.publicKey}(It)?Ye.map.set(It.id,It):function vu(oe){return oe?.topic}(It)&&Ye.map.set(It.topic,It)}),Ye.cached=[],Ye.initialized=!0)}),this.set=function(){var It=(0,b.Z)(function*(Jn,Yn){Ye.isInitialized(),Ye.map.has(Jn)?yield Ye.update(Jn,Yn):(Ye.logger.debug("Setting value"),Ye.logger.trace({type:"method",method:"set",key:Jn,value:Yn}),Ye.map.set(Jn,Yn),yield Ye.persist())});return function(Jn,Yn){return It.apply(this,arguments)}}(),this.get=It=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:It}),this.getData(It)),this.getAll=It=>(this.isInitialized(),It?this.values.filter(Jn=>Object.keys(It).every(Yn=>qf()(Jn[Yn],It[Yn]))):this.values),this.update=function(){var It=(0,b.Z)(function*(Jn,Yn){Ye.isInitialized(),Ye.logger.debug("Updating value"),Ye.logger.trace({type:"method",method:"update",key:Jn,update:Yn});const ar=Yc(Yc({},Ye.getData(Jn)),Yn);Ye.map.set(Jn,ar),yield Ye.persist()});return function(Jn,Yn){return It.apply(this,arguments)}}(),this.delete=function(){var It=(0,b.Z)(function*(Jn,Yn){Ye.isInitialized(),Ye.map.has(Jn)&&(Ye.logger.debug("Deleting value"),Ye.logger.trace({type:"method",method:"delete",key:Jn,reason:Yn}),Ye.map.delete(Jn),yield Ye.persist())});return function(Jn,Yn){return It.apply(this,arguments)}}(),this.logger=(0,Ro.generateChildLogger)(x,this.name),this.storagePrefix=be,this.getKey=Ee}get context(){return(0,Ro.getLoggerContext)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}setDataStore(y){var x=this;return(0,b.Z)(function*(){yield x.core.storage.setItem(x.storageKey,y)})()}getDataStore(){var y=this;return(0,b.Z)(function*(){return yield y.core.storage.getItem(y.storageKey)})()}getData(y){const x=this.map.get(y);if(!x){const{message:re}=ki("NO_MATCHING_KEY",`${this.name}: ${y}`);throw this.logger.error(re),new Error(re)}return x}persist(){var y=this;return(0,b.Z)(function*(){yield y.setDataStore(y.values)})()}restore(){var y=this;return(0,b.Z)(function*(){try{const x=yield y.getDataStore();if(typeof x>"u"||!x.length)return;if(y.map.size){const{message:re}=ki("RESTORE_WILL_OVERRIDE",y.name);throw y.logger.error(re),new Error(re)}y.cached=x,y.logger.debug(`Successfully Restored value for ${y.name}`),y.logger.trace({type:"method",method:"restore",value:y.values})}catch(x){y.logger.debug(`Failed to Restore value for ${y.name}`),y.logger.error(x)}})()}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}}class Pw{constructor(y,x){var re=this;this.core=y,this.logger=x,this.name="pairing",this.version="0.3",this.events=new(po()),this.initialized=!1,this.storagePrefix=Sc,this.ignoredPayloadTypes=[1],this.registeredMethods=[],this.init=(0,b.Z)(function*(){re.initialized||(yield re.pairings.init(),yield re.cleanup(),re.registerRelayerEvents(),re.registerExpirerEvents(),re.initialized=!0,re.logger.trace("Initialized"))}),this.register=({methods:be})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...be])]},this.create=(0,b.Z)(function*(){re.isInitialized();const be=Nn(),Ee=yield re.core.crypto.setSymKey(be),Ye=os(Ni.FIVE_MINUTES),It={protocol:"irn"},Jn={topic:Ee,expiry:Ye,relay:It,active:!1},Yn=function Ld(oe){return`${oe.protocol}:${oe.topic}@${oe.version}?`+Wl.stringify(((oe,y)=>{for(var x in y||(y={}))Uu.call(y,x)&&mu(oe,x,y[x]);if(kf)for(var x of kf(y))Dp.call(y,x)&&mu(oe,x,y[x]);return oe})({symKey:oe.symKey},function Tg(oe,y="-"){const re={};return Object.keys(oe).forEach(be=>{oe[be]&&(re["relay"+y+be]=oe[be])}),re}(oe.relay)))}({protocol:re.core.protocol,version:re.core.version,topic:Ee,symKey:be,relay:It});return yield re.pairings.set(Ee,Jn),yield re.core.relayer.subscribe(Ee),re.core.expirer.set(Ee,Ye),{topic:Ee,uri:Yn}}),this.pair=function(){var be=(0,b.Z)(function*(Ee){re.isInitialized(),re.isValidPair(Ee);const{topic:Ye,symKey:It,relay:Jn}=Pf(Ee.uri);let Yn;if(re.pairings.keys.includes(Ye)&&(Yn=re.pairings.get(Ye),Yn.active))throw new Error(`Pairing already exists: ${Ye}. Please try again with a new connection URI.`);const ar=os(Ni.FIVE_MINUTES),Tr={topic:Ye,relay:Jn,expiry:ar,active:!1};return yield re.pairings.set(Ye,Tr),re.core.expirer.set(Ye,ar),Ee.activatePairing&&(yield re.activate({topic:Ye})),re.events.emit("pairing_create",Tr),re.core.crypto.keychain.has(Ye)||(yield re.core.crypto.setSymKey(It,Ye),yield re.core.relayer.subscribe(Ye,{relay:Jn})),Tr});return function(Ee){return be.apply(this,arguments)}}(),this.activate=function(){var be=(0,b.Z)(function*({topic:Ee}){re.isInitialized();const Ye=os(Ni.THIRTY_DAYS);yield re.pairings.update(Ee,{active:!0,expiry:Ye}),re.core.expirer.set(Ee,Ye)});return function(Ee){return be.apply(this,arguments)}}(),this.ping=function(){var be=(0,b.Z)(function*(Ee){re.isInitialized(),yield re.isValidPing(Ee);const{topic:Ye}=Ee;if(re.pairings.keys.includes(Ye)){const It=yield re.sendRequest(Ye,"wc_pairingPing",{}),{done:Jn,resolve:Yn,reject:ar}=Vr();re.events.once(as("pairing_ping",It),({error:Tr})=>{Tr?ar(Tr):Yn()}),yield Jn()}});return function(Ee){return be.apply(this,arguments)}}(),this.updateExpiry=function(){var be=(0,b.Z)(function*({topic:Ee,expiry:Ye}){re.isInitialized(),yield re.pairings.update(Ee,{expiry:Ye})});return function(Ee){return be.apply(this,arguments)}}(),this.updateMetadata=function(){var be=(0,b.Z)(function*({topic:Ee,metadata:Ye}){re.isInitialized(),yield re.pairings.update(Ee,{peerMetadata:Ye})});return function(Ee){return be.apply(this,arguments)}}(),this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=function(){var be=(0,b.Z)(function*(Ee){re.isInitialized(),yield re.isValidDisconnect(Ee);const{topic:Ye}=Ee;re.pairings.keys.includes(Ye)&&(yield re.sendRequest(Ye,"wc_pairingDelete",Ka("USER_DISCONNECTED")),yield re.deletePairing(Ye))});return function(Ee){return be.apply(this,arguments)}}(),this.sendRequest=function(){var be=(0,b.Z)(function*(Ee,Ye,It){const Jn=Hd(Ye,It),Yn=yield re.core.crypto.encode(Ee,Jn),ar=af[Ye].req;return re.core.history.set(Ee,Jn),re.core.relayer.publish(Ee,Yn,ar),Jn.id});return function(Ee,Ye,It){return be.apply(this,arguments)}}(),this.sendResult=function(){var be=(0,b.Z)(function*(Ee,Ye,It){const Jn=pm(Ee,It),Yn=yield re.core.crypto.encode(Ye,Jn),ar=yield re.core.history.get(Ye,Ee),Tr=af[ar.request.method].res;yield re.core.relayer.publish(Ye,Yn,Tr),yield re.core.history.resolve(Jn)});return function(Ee,Ye,It){return be.apply(this,arguments)}}(),this.sendError=function(){var be=(0,b.Z)(function*(Ee,Ye,It){const Jn=Qh(Ee,It),Yn=yield re.core.crypto.encode(Ye,Jn),ar=yield re.core.history.get(Ye,Ee),Tr=af[ar.request.method]?af[ar.request.method].res:af.unregistered_method.res;yield re.core.relayer.publish(Ye,Yn,Tr),yield re.core.history.resolve(Jn)});return function(Ee,Ye,It){return be.apply(this,arguments)}}(),this.deletePairing=function(){var be=(0,b.Z)(function*(Ee,Ye){yield re.core.relayer.unsubscribe(Ee),yield Promise.all([re.pairings.delete(Ee,Ka("USER_DISCONNECTED")),re.core.crypto.deleteSymKey(Ee),Ye?Promise.resolve():re.core.expirer.del(Ee)])});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.cleanup=(0,b.Z)(function*(){const be=re.pairings.getAll().filter(Ee=>So(Ee.expiry));yield Promise.all(be.map(Ee=>re.deletePairing(Ee.topic)))}),this.onRelayEventRequest=be=>{const{topic:Ee,payload:Ye}=be;switch(Ye.method){case"wc_pairingPing":return this.onPairingPingRequest(Ee,Ye);case"wc_pairingDelete":return this.onPairingDeleteRequest(Ee,Ye);default:return this.onUnknownRpcMethodRequest(Ee,Ye)}},this.onRelayEventResponse=function(){var be=(0,b.Z)(function*(Ee){const{topic:Ye,payload:It}=Ee,Jn=(yield re.core.history.get(Ye,It.id)).request.method;return"wc_pairingPing"===Jn?re.onPairingPingResponse(Ye,It):re.onUnknownRpcMethodResponse(Jn)});return function(Ee){return be.apply(this,arguments)}}(),this.onPairingPingRequest=function(){var be=(0,b.Z)(function*(Ee,Ye){const{id:It}=Ye;try{re.isValidPing({topic:Ee}),yield re.sendResult(It,Ee,!0),re.events.emit("pairing_ping",{id:It,topic:Ee})}catch(Jn){yield re.sendError(It,Ee,Jn),re.logger.error(Jn)}});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.onPairingPingResponse=(be,Ee)=>{const{id:Ye}=Ee;setTimeout(()=>{tl(Ee)?this.events.emit(as("pairing_ping",Ye),{}):qo(Ee)&&this.events.emit(as("pairing_ping",Ye),{error:Ee.error})},500)},this.onPairingDeleteRequest=function(){var be=(0,b.Z)(function*(Ee,Ye){const{id:It}=Ye;try{re.isValidDisconnect({topic:Ee}),yield re.deletePairing(Ee),re.events.emit("pairing_delete",{id:It,topic:Ee})}catch(Jn){yield re.sendError(It,Ee,Jn),re.logger.error(Jn)}});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.onUnknownRpcMethodRequest=function(){var be=(0,b.Z)(function*(Ee,Ye){const{id:It,method:Jn}=Ye;try{if(re.registeredMethods.includes(Jn))return;const Yn=Ka("WC_METHOD_UNSUPPORTED",Jn);yield re.sendError(It,Ee,Yn),re.logger.error(Yn)}catch(Yn){yield re.sendError(It,Ee,Yn),re.logger.error(Yn)}});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.onUnknownRpcMethodResponse=be=>{this.registeredMethods.includes(be)||this.logger.error(Ka("WC_METHOD_UNSUPPORTED",be))},this.isValidPair=be=>{var Ee;if(!kl(be)){const{message:It}=ki("MISSING_OR_INVALID",`pair() params: ${be}`);throw new Error(It)}if(!function Ff(oe){if(Pa(oe,!1))try{return typeof new URL(oe)<"u"}catch{return!1}return!1}(be.uri)){const{message:It}=ki("MISSING_OR_INVALID",`pair() uri: ${be.uri}`);throw new Error(It)}const Ye=Pf(be.uri);if(null==(Ee=Ye?.relay)||!Ee.protocol){const{message:It}=ki("MISSING_OR_INVALID","pair() uri#relay-protocol");throw new Error(It)}if(null==Ye||!Ye.symKey){const{message:It}=ki("MISSING_OR_INVALID","pair() uri#symKey");throw new Error(It)}},this.isValidPing=function(){var be=(0,b.Z)(function*(Ee){if(!kl(Ee)){const{message:It}=ki("MISSING_OR_INVALID",`ping() params: ${Ee}`);throw new Error(It)}const{topic:Ye}=Ee;yield re.isValidPairingTopic(Ye)});return function(Ee){return be.apply(this,arguments)}}(),this.isValidDisconnect=function(){var be=(0,b.Z)(function*(Ee){if(!kl(Ee)){const{message:It}=ki("MISSING_OR_INVALID",`disconnect() params: ${Ee}`);throw new Error(It)}const{topic:Ye}=Ee;yield re.isValidPairingTopic(Ye)});return function(Ee){return be.apply(this,arguments)}}(),this.isValidPairingTopic=function(){var be=(0,b.Z)(function*(Ee){if(!Pa(Ee,!1)){const{message:Ye}=ki("MISSING_OR_INVALID",`pairing topic should be a string: ${Ee}`);throw new Error(Ye)}if(!re.pairings.keys.includes(Ee)){const{message:Ye}=ki("NO_MATCHING_KEY",`pairing topic doesn't exist: ${Ee}`);throw new Error(Ye)}if(So(re.pairings.get(Ee).expiry)){yield re.deletePairing(Ee);const{message:Ye}=ki("EXPIRED",`pairing topic: ${Ee}`);throw new Error(Ye)}});return function(Ee){return be.apply(this,arguments)}}(),this.core=y,this.logger=(0,Ro.generateChildLogger)(x,this.name),this.pairings=new lp(this.core,this.logger,this.name,this.storagePrefix)}get context(){return(0,Ro.getLoggerContext)(this.logger)}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}registerRelayerEvents(){var y=this;this.core.relayer.on("relayer_message",function(){var x=(0,b.Z)(function*(re){const{topic:be,message:Ee}=re;if(!y.pairings.keys.includes(be)||y.ignoredPayloadTypes.includes(y.core.crypto.getPayloadType(Ee)))return;const Ye=yield y.core.crypto.decode(be,Ee);try{Us(Ye)?(y.core.history.set(be,Ye),y.onRelayEventRequest({topic:be,payload:Ye})):qh(Ye)&&(yield y.core.history.resolve(Ye),yield y.onRelayEventResponse({topic:be,payload:Ye}),y.core.history.delete(be,Ye.id))}catch(It){y.logger.error(It)}});return function(re){return x.apply(this,arguments)}}())}registerExpirerEvents(){var y=this;this.core.expirer.on(au_expired,function(){var x=(0,b.Z)(function*(re){const{topic:be}=gs(re.target);be&&y.pairings.keys.includes(be)&&(yield y.deletePairing(be,!0),y.events.emit("pairing_expire",{topic:be}))});return function(re){return x.apply(this,arguments)}}())}}class Xm extends by{constructor(y,x){var re;super(y,x),re=this,this.core=y,this.logger=x,this.records=new Map,this.events=new Cs.EventEmitter,this.name="history",this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Sc,this.init=(0,b.Z)(function*(){re.initialized||(re.logger.trace("Initialized"),yield re.restore(),re.cached.forEach(be=>re.records.set(be.id,be)),re.cached=[],re.registerEventListeners(),re.initialized=!0)}),this.set=(be,Ee,Ye)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:be,request:Ee,chainId:Ye}),this.records.has(Ee.id))return;const It={id:Ee.id,topic:be,request:{method:Ee.method,params:Ee.params||null},chainId:Ye,expiry:os(Ni.THIRTY_DAYS)};this.records.set(It.id,It),this.events.emit("history_created",It)},this.resolve=function(){var be=(0,b.Z)(function*(Ee){if(re.isInitialized(),re.logger.debug("Updating JSON-RPC response history record"),re.logger.trace({type:"method",method:"update",response:Ee}),!re.records.has(Ee.id))return;const Ye=yield re.getRecord(Ee.id);typeof Ye.response>"u"&&(Ye.response=qo(Ee)?{error:Ee.error}:{result:Ee.result},re.records.set(Ye.id,Ye),re.events.emit("history_updated",Ye))});return function(Ee){return be.apply(this,arguments)}}(),this.get=function(){var be=(0,b.Z)(function*(Ee,Ye){return re.isInitialized(),re.logger.debug("Getting record"),re.logger.trace({type:"method",method:"get",topic:Ee,id:Ye}),yield re.getRecord(Ye)});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.delete=(be,Ee)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:Ee}),this.values.forEach(Ye=>{if(Ye.topic===be){if(typeof Ee<"u"&&Ye.id!==Ee)return;this.records.delete(Ye.id),this.events.emit("history_deleted",Ye)}})},this.exists=function(){var be=(0,b.Z)(function*(Ee,Ye){return re.isInitialized(),!!re.records.has(Ye)&&(yield re.getRecord(Ye)).topic===Ee});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.on=(be,Ee)=>{this.events.on(be,Ee)},this.once=(be,Ee)=>{this.events.once(be,Ee)},this.off=(be,Ee)=>{this.events.off(be,Ee)},this.removeListener=(be,Ee)=>{this.events.removeListener(be,Ee)},this.logger=(0,Ro.generateChildLogger)(x,this.name)}get context(){return(0,Ro.getLoggerContext)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const y=[];return this.values.forEach(x=>{if(typeof x.response<"u")return;const re={topic:x.topic,request:Hd(x.request.method,x.request.params,x.id),chainId:x.chainId};return y.push(re)}),y}setJsonRpcRecords(y){var x=this;return(0,b.Z)(function*(){yield x.core.storage.setItem(x.storageKey,y)})()}getJsonRpcRecords(){var y=this;return(0,b.Z)(function*(){return yield y.core.storage.getItem(y.storageKey)})()}getRecord(y){this.isInitialized();const x=this.records.get(y);if(!x){const{message:re}=ki("NO_MATCHING_KEY",`${this.name}: ${y}`);throw new Error(re)}return x}persist(){var y=this;return(0,b.Z)(function*(){yield y.setJsonRpcRecords(y.values),y.events.emit("history_sync")})()}restore(){var y=this;return(0,b.Z)(function*(){try{const x=yield y.getJsonRpcRecords();if(typeof x>"u"||!x.length)return;if(y.records.size){const{message:re}=ki("RESTORE_WILL_OVERRIDE",y.name);throw y.logger.error(re),new Error(re)}y.cached=x,y.logger.debug(`Successfully Restored records for ${y.name}`),y.logger.trace({type:"method",method:"restore",records:y.values})}catch(x){y.logger.debug(`Failed to Restore records for ${y.name}`),y.logger.error(x)}})()}registerEventListeners(){this.events.on("history_created",y=>{const x="history_created";this.logger.info(`Emitting ${x}`),this.logger.debug({type:"event",event:x,record:y}),this.persist()}),this.events.on("history_updated",y=>{const x="history_updated";this.logger.info(`Emitting ${x}`),this.logger.debug({type:"event",event:x,record:y}),this.persist()}),this.events.on("history_deleted",y=>{const x="history_deleted";this.logger.info(`Emitting ${x}`),this.logger.debug({type:"event",event:x,record:y}),this.persist()}),this.core.heartbeat.on(uh.HEARTBEAT_EVENTS.pulse,()=>{this.cleanup()})}cleanup(){try{this.records.forEach(y=>{(0,Ni.toMiliseconds)(y.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${y.id}`),this.delete(y.topic,y.id))})}catch(y){this.logger.warn(y)}}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}}class Jm extends Z_{constructor(y,x){var re;super(y,x),re=this,this.core=y,this.logger=x,this.expirations=new Map,this.events=new Cs.EventEmitter,this.name="expirer",this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Sc,this.init=(0,b.Z)(function*(){re.initialized||(re.logger.trace("Initialized"),yield re.restore(),re.cached.forEach(be=>re.expirations.set(be.target,be)),re.cached=[],re.registerEventListeners(),re.initialized=!0)}),this.has=be=>{try{const Ee=this.formatTarget(be);return typeof this.getExpiration(Ee)<"u"}catch{return!1}},this.set=(be,Ee)=>{this.isInitialized();const Ye=this.formatTarget(be),It={target:Ye,expiry:Ee};this.expirations.set(Ye,It),this.checkExpiry(Ye,It),this.events.emit("expirer_created",{target:Ye,expiration:It})},this.get=be=>{this.isInitialized();const Ee=this.formatTarget(be);return this.getExpiration(Ee)},this.del=be=>{if(this.isInitialized(),this.has(be)){const Ee=this.formatTarget(be),Ye=this.getExpiration(Ee);this.expirations.delete(Ee),this.events.emit("expirer_deleted",{target:Ee,expiration:Ye})}},this.on=(be,Ee)=>{this.events.on(be,Ee)},this.once=(be,Ee)=>{this.events.once(be,Ee)},this.off=(be,Ee)=>{this.events.off(be,Ee)},this.removeListener=(be,Ee)=>{this.events.removeListener(be,Ee)},this.logger=(0,Ro.generateChildLogger)(x,this.name)}get context(){return(0,Ro.getLoggerContext)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(y){if("string"==typeof y)return function Li(oe){return _i("topic",oe)}(y);if("number"==typeof y)return function Ps(oe){return _i("id",oe)}(y);const{message:x}=ki("UNKNOWN_TYPE","Target type: "+typeof y);throw new Error(x)}setExpirations(y){var x=this;return(0,b.Z)(function*(){yield x.core.storage.setItem(x.storageKey,y)})()}getExpirations(){var y=this;return(0,b.Z)(function*(){return yield y.core.storage.getItem(y.storageKey)})()}persist(){var y=this;return(0,b.Z)(function*(){yield y.setExpirations(y.values),y.events.emit("expirer_sync")})()}restore(){var y=this;return(0,b.Z)(function*(){try{const x=yield y.getExpirations();if(typeof x>"u"||!x.length)return;if(y.expirations.size){const{message:re}=ki("RESTORE_WILL_OVERRIDE",y.name);throw y.logger.error(re),new Error(re)}y.cached=x,y.logger.debug(`Successfully Restored expirations for ${y.name}`),y.logger.trace({type:"method",method:"restore",expirations:y.values})}catch(x){y.logger.debug(`Failed to Restore expirations for ${y.name}`),y.logger.error(x)}})()}getExpiration(y){const x=this.expirations.get(y);if(!x){const{message:re}=ki("NO_MATCHING_KEY",`${this.name}: ${y}`);throw this.logger.error(re),new Error(re)}return x}checkExpiry(y,x){const{expiry:re}=x;(0,Ni.toMiliseconds)(re)-Date.now()<=0&&this.expire(y,x)}expire(y,x){this.expirations.delete(y),this.events.emit(au_expired,{target:y,expiration:x})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((y,x)=>this.checkExpiry(x,y))}registerEventListeners(){this.core.heartbeat.on(uh.HEARTBEAT_EVENTS.pulse,()=>this.checkExpirations()),this.events.on("expirer_created",y=>{const x="expirer_created";this.logger.info(`Emitting ${x}`),this.logger.debug({type:"event",event:x,data:y}),this.persist()}),this.events.on(au_expired,y=>{const x=au_expired;this.logger.info(`Emitting ${x}`),this.logger.debug({type:"event",event:x,data:y}),this.persist()}),this.events.on("expirer_deleted",y=>{const x="expirer_deleted";this.logger.info(`Emitting ${x}`),this.logger.debug({type:"event",event:x,data:y}),this.persist()})}isInitialized(){if(!this.initialized){const{message:y}=ki("NOT_INITIALIZED",this.name);throw new Error(y)}}}class pv extends class zf{constructor(y,x){this.projectId=y,this.logger=x}}{constructor(y,x){var re;super(y,x),re=this,this.projectId=y,this.logger=x,this.name=Gm,this.initialized=!1,this.queue=[],this.verifyDisabled=!1,this.init=function(){var be=(0,b.Z)(function*(Ee){if(re.verifyDisabled||ln()||!Ln())return;const Ye=re.getVerifyUrl(Ee?.verifyUrl);re.verifyUrl!==Ye&&re.removeIframe(),re.verifyUrl=Ye;try{yield re.createIframe()}catch(It){re.logger.info(`Verify iframe failed to load: ${re.verifyUrl}`),re.logger.info(It)}if(!re.initialized){re.removeIframe(),re.verifyUrl=vd;try{yield re.createIframe()}catch(It){re.logger.info(`Verify iframe failed to load: ${re.verifyUrl}`),re.logger.info(It),re.verifyDisabled=!0}}});return function(Ee){return be.apply(this,arguments)}}(),this.register=function(){var be=(0,b.Z)(function*(Ee){re.initialized?re.sendPost(Ee.attestationId):(re.addToQueue(Ee.attestationId),yield re.init())});return function(Ee){return be.apply(this,arguments)}}(),this.resolve=function(){var be=(0,b.Z)(function*(Ee){if(re.isDevEnv)return"";const Ye=re.getVerifyUrl(Ee?.verifyUrl);let It;try{It=yield re.fetchAttestation(Ee.attestationId,Ye)}catch(Jn){re.logger.info(`failed to resolve attestation: ${Ee.attestationId} from url: ${Ye}`),re.logger.info(Jn),It=yield re.fetchAttestation(Ee.attestationId,vd)}return It});return function(Ee){return be.apply(this,arguments)}}(),this.fetchAttestation=function(){var be=(0,b.Z)(function*(Ee,Ye){re.logger.info(`resolving attestation: ${Ee} from url: ${Ye}`);const It=re.startAbortTimer(2*Ni.ONE_SECOND),Jn=yield fetch(`${Ye}/attestation/${Ee}`,{signal:re.abortController.signal});return clearTimeout(It),200===Jn.status?yield Jn.json():void 0});return function(Ee,Ye){return be.apply(this,arguments)}}(),this.addToQueue=be=>{this.queue.push(be)},this.processQueue=()=>{0!==this.queue.length&&(this.queue.forEach(be=>this.sendPost(be)),this.queue=[])},this.sendPost=be=>{var Ee;try{if(!this.iframe)return;null==(Ee=this.iframe.contentWindow)||Ee.postMessage(be,"*"),this.logger.info(`postMessage sent: ${be} ${this.verifyUrl}`)}catch{}},this.createIframe=(0,b.Z)(function*(){let be;const Ee=Ye=>{"verify_ready"===Ye.data&&(re.initialized=!0,re.processQueue(),window.removeEventListener("message",Ee),be())};yield Promise.race([new Promise(Ye=>{if(document.getElementById(Gm))return Ye();window.addEventListener("message",Ee);const It=document.createElement("iframe");It.id=Gm,It.src=`${re.verifyUrl}/${re.projectId}`,It.style.display="none",document.body.append(It),re.iframe=It,be=Ye}),new Promise((Ye,It)=>setTimeout(()=>{window.removeEventListener("message",Ee),It("verify iframe load timeout")},(0,Ni.toMiliseconds)(Ni.FIVE_SECONDS)))])}),this.removeIframe=()=>{this.iframe&&(this.iframe.remove(),this.iframe=void 0,this.initialized=!1)},this.getVerifyUrl=be=>{let Ee=be||Mh;return hv.includes(Ee)||(this.logger.info(`verify url: ${Ee}, not included in trusted list, assigning default: ${Mh}`),Ee=Mh),Ee},this.logger=(0,Ro.generateChildLogger)(x,this.name),this.verifyUrl=Mh,this.abortController=new AbortController,this.isDevEnv=Bt()&&process.env.IS_VITEST}get context(){return(0,Ro.getLoggerContext)(this.logger)}startAbortTimer(y){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,Ni.toMiliseconds)(y))}}var vb=Object.defineProperty,Qm=Object.getOwnPropertySymbols,_b=Object.prototype.hasOwnProperty,bb=Object.prototype.propertyIsEnumerable,qm=(oe,y,x)=>y in oe?vb(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,e1=(oe,y)=>{for(var x in y||(y={}))_b.call(y,x)&&qm(oe,x,y[x]);if(Qm)for(var x of Qm(y))bb.call(y,x)&&qm(oe,x,y[x]);return oe};class gv extends tu{constructor(y){super(y),this.protocol="wc",this.version=2,this.name="core",this.events=new Cs.EventEmitter,this.initialized=!1,this.on=(re,be)=>this.events.on(re,be),this.once=(re,be)=>this.events.once(re,be),this.off=(re,be)=>this.events.off(re,be),this.removeListener=(re,be)=>this.events.removeListener(re,be),this.projectId=y?.projectId,this.relayUrl=y?.relayUrl||P0,this.customStoragePrefix=null!=y&&y.customStoragePrefix?`:${y.customStoragePrefix}`:"";const x=typeof y?.logger<"u"&&"string"!=typeof y?.logger?y.logger:(0,Ro.pino)((0,Ro.getDefaultLoggerOptions)({level:y?.logger||"error"}));this.logger=(0,Ro.generateChildLogger)(x,this.name),this.heartbeat=new uh.HeartBeat,this.crypto=new fv(this,this.logger,y?.keychain),this.history=new Xm(this,this.logger),this.expirer=new Jm(this,this.logger),this.storage=null!=y&&y.storage?y.storage:new qg(e1(e1({},ip),y?.storageOptions)),this.relayer=new ko({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new Pw(this,this.logger),this.verify=new pv(this.projectId||"",this.logger)}static init(y){return(0,b.Z)(function*(){const x=new gv(y);yield x.initialize();const re=yield x.crypto.getClientId();return yield x.storage.setItem("WALLETCONNECT_CLIENT_ID",re),x})()}get context(){return(0,Ro.getLoggerContext)(this.logger)}start(){var y=this;return(0,b.Z)(function*(){y.initialized||(yield y.initialize())})()}initialize(){var y=this;return(0,b.Z)(function*(){y.logger.trace("Initialized");try{yield y.crypto.init(),yield y.history.init(),yield y.expirer.init(),yield y.relayer.init(),yield y.heartbeat.init(),yield y.pairing.init(),y.initialized=!0,y.logger.info("Core Initialization Success")}catch(x){throw y.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,x),y.logger.error(x.message),x}})()}}const xb=gv,vv="wc@2:client:",R0="WALLETCONNECT_DEEPLINK_CHOICE",_v="Proposal expired",N0=Ni.SEVEN_DAYS,F0={wc_sessionPropose:{req:{ttl:Ni.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:Ni.FIVE_MINUTES,prompt:!1,tag:1101}},wc_sessionSettle:{req:{ttl:Ni.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:Ni.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:Ni.ONE_DAY,prompt:!1,tag:1104},res:{ttl:Ni.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:Ni.ONE_DAY,prompt:!1,tag:1106},res:{ttl:Ni.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:Ni.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:Ni.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:Ni.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:Ni.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:Ni.ONE_DAY,prompt:!1,tag:1112},res:{ttl:Ni.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:Ni.THIRTY_SECONDS,prompt:!1,tag:1114},res:{ttl:Ni.THIRTY_SECONDS,prompt:!1,tag:1115}}},bv={min:Ni.FIVE_MINUTES,max:Ni.SEVEN_DAYS},Ll=["wc_sessionPropose","wc_sessionRequest","wc_authRequest"];var Sb=Object.defineProperty,Hw=Object.defineProperties,Yw=Object.getOwnPropertyDescriptors,xv=Object.getOwnPropertySymbols,Uw=Object.prototype.hasOwnProperty,Mb=Object.prototype.propertyIsEnumerable,wv=(oe,y,x)=>y in oe?Sb(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,Rl=(oe,y)=>{for(var x in y||(y={}))Uw.call(y,x)&&wv(oe,x,y[x]);if(xv)for(var x of xv(y))Mb.call(y,x)&&wv(oe,x,y[x]);return oe},B0=(oe,y)=>Hw(oe,Yw(y));class Vw extends class Jp{constructor(y){this.client=y}}{constructor(y){var x;super(y),x=this,this.name="engine",this.events=new(po()),this.initialized=!1,this.ignoredPayloadTypes=[1],this.requestQueue={state:"IDLE",queue:[]},this.sessionRequestQueue={state:"IDLE",queue:[]},this.requestQueueDelay=Ni.ONE_SECOND,this.init=(0,b.Z)(function*(){x.initialized||(yield x.cleanup(),x.registerRelayerEvents(),x.registerExpirerEvents(),x.registerPairingEvents(),x.client.core.pairing.register({methods:Object.keys(F0)}),x.initialized=!0,setTimeout(()=>{x.sessionRequestQueue.queue=x.getPendingSessionRequests(),x.processSessionRequestQueue()},(0,Ni.toMiliseconds)(x.requestQueueDelay)))}),this.connect=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized();const Ee=B0(Rl({},be),{requiredNamespaces:be.requiredNamespaces||{},optionalNamespaces:be.optionalNamespaces||{}});yield x.isValidConnect(Ee);const{pairingTopic:Ye,requiredNamespaces:It,optionalNamespaces:Jn,sessionProperties:Yn,relays:ar}=Ee;let Qr,Tr=Ye,ci=!1;if(Tr&&(ci=x.client.core.pairing.pairings.get(Tr).active),!Tr||!ci){const{topic:Ks,uri:zo}=yield x.client.core.pairing.create();Tr=Ks,Qr=zo}const Br=yield x.client.core.crypto.generateKeyPair(),pi=Rl({requiredNamespaces:It,optionalNamespaces:Jn,relays:ar??[{protocol:"irn"}],proposer:{publicKey:Br,metadata:x.client.metadata}},Yn&&{sessionProperties:Yn}),{reject:Ui,resolve:ds,done:wo}=Vr(Ni.FIVE_MINUTES,_v);if(x.events.once(as("session_connect"),function(){var Ks=(0,b.Z)(function*({error:zo,session:yo}){if(zo)Ui(zo);else if(yo){yo.self.publicKey=Br;const xa=B0(Rl({},yo),{requiredNamespaces:yo.requiredNamespaces,optionalNamespaces:yo.optionalNamespaces});yield x.client.session.set(yo.topic,xa),yield x.setExpiry(yo.topic,yo.expiry),Tr&&(yield x.client.core.pairing.updateMetadata({topic:Tr,metadata:yo.peer.metadata})),ds(xa)}});return function(zo){return Ks.apply(this,arguments)}}()),!Tr){const{message:Ks}=ki("NO_MATCHING_KEY",`connect() pairing topic: ${Tr}`);throw new Error(Ks)}const oo=yield x.sendRequest({topic:Tr,method:"wc_sessionPropose",params:pi}),ho=os(Ni.FIVE_MINUTES);return yield x.setProposal(oo,Rl({id:oo,expiry:ho},pi)),{uri:Qr,approval:wo}});return function(be){return re.apply(this,arguments)}}(),this.pair=function(){var re=(0,b.Z)(function*(be){return yield x.isInitialized(),yield x.client.core.pairing.pair(be)});return function(be){return re.apply(this,arguments)}}(),this.approve=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidApprove(be);const{id:Ee,relayProtocol:Ye,namespaces:It,sessionProperties:Jn}=be,Yn=x.client.proposal.get(Ee);let{pairingTopic:ar,proposer:Tr,requiredNamespaces:Qr,optionalNamespaces:ci}=Yn;ar=ar||"",jc(Qr)||(Qr=function Op(oe,y){const x=Qc(oe,y);if(x)throw new Error(x.message);const re={};for(const[be,Ee]of Object.entries(oe))re[be]={methods:Ee.methods,events:Ee.events,chains:Ee.accounts.map(Ye=>`${Ye.split(":")[0]}:${Ye.split(":")[1]}`)};return re}(It,"approve()"));const Br=yield x.client.core.crypto.generateKeyPair(),pi=Tr.publicKey,Ui=yield x.client.core.crypto.generateSharedKey(Br,pi);ar&&Ee&&(yield x.client.core.pairing.updateMetadata({topic:ar,metadata:Tr.metadata}),yield x.sendResult({id:Ee,topic:ar,result:{relay:{protocol:Ye??"irn"},responderPublicKey:Br}}),yield x.client.proposal.delete(Ee,Ka("USER_DISCONNECTED")),yield x.client.core.pairing.activate({topic:ar}));const ds=Rl({relay:{protocol:Ye??"irn"},namespaces:It,requiredNamespaces:Qr,optionalNamespaces:ci,pairingTopic:ar,controller:{publicKey:Br,metadata:x.client.metadata},expiry:os(N0)},Jn&&{sessionProperties:Jn});yield x.client.core.relayer.subscribe(Ui),yield x.sendRequest({topic:Ui,method:"wc_sessionSettle",params:ds,throwOnFailedPublish:!0});const wo=B0(Rl({},ds),{topic:Ui,pairingTopic:ar,acknowledged:!1,self:ds.controller,peer:{publicKey:Tr.publicKey,metadata:Tr.metadata},controller:Br});return yield x.client.session.set(Ui,wo),yield x.setExpiry(Ui,os(N0)),{topic:Ui,acknowledged:()=>new Promise(oo=>setTimeout(()=>oo(x.client.session.get(Ui)),500))}});return function(be){return re.apply(this,arguments)}}(),this.reject=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidReject(be);const{id:Ee,reason:Ye}=be,{pairingTopic:It}=x.client.proposal.get(Ee);It&&(yield x.sendError(Ee,It,Ye),yield x.client.proposal.delete(Ee,Ka("USER_DISCONNECTED")))});return function(be){return re.apply(this,arguments)}}(),this.update=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidUpdate(be);const{topic:Ee,namespaces:Ye}=be,It=yield x.sendRequest({topic:Ee,method:"wc_sessionUpdate",params:{namespaces:Ye}}),{done:Jn,resolve:Yn,reject:ar}=Vr();return x.events.once(as("session_update",It),({error:Tr})=>{Tr?ar(Tr):Yn()}),yield x.client.session.update(Ee,{namespaces:Ye}),{acknowledged:Jn}});return function(be){return re.apply(this,arguments)}}(),this.extend=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidExtend(be);const{topic:Ee}=be,Ye=yield x.sendRequest({topic:Ee,method:"wc_sessionExtend",params:{}}),{done:It,resolve:Jn,reject:Yn}=Vr();return x.events.once(as("session_extend",Ye),({error:ar})=>{ar?Yn(ar):Jn()}),yield x.setExpiry(Ee,os(N0)),{acknowledged:It}});return function(be){return re.apply(this,arguments)}}(),this.request=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidRequest(be);const{chainId:Ee,request:Ye,topic:It,expiry:Jn}=be,Yn=pd(),{done:ar,resolve:Tr,reject:Qr}=Vr(Jn,"Request expired. Please try again.");return x.events.once(as("session_request",Yn),({error:ci,result:Br})=>{ci?Qr(ci):Tr(Br)}),yield Promise.all([new Promise(function(){var ci=(0,b.Z)(function*(Br){yield x.sendRequest({clientRpcId:Yn,topic:It,method:"wc_sessionRequest",params:{request:Ye,chainId:Ee},expiry:Jn,throwOnFailedPublish:!0}).catch(pi=>Qr(pi)),x.client.events.emit("session_request_sent",{topic:It,request:Ye,chainId:Ee,id:Yn}),Br()});return function(Br){return ci.apply(this,arguments)}}()),new Promise(function(){var ci=(0,b.Z)(function*(Br){const pi=yield function cd(oe,y){return Yu.apply(this,arguments)}(x.client.core.storage,R0);(function $a(oe){Ga.apply(this,arguments)})({id:Yn,topic:It,wcDeepLink:pi}),Br()});return function(Br){return ci.apply(this,arguments)}}()),ar()]).then(ci=>ci[2])});return function(be){return re.apply(this,arguments)}}(),this.respond=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidRespond(be);const{topic:Ee,response:Ye}=be,{id:It}=Ye;tl(Ye)?yield x.sendResult({id:It,topic:Ee,result:Ye.result,throwOnFailedPublish:!0}):qo(Ye)&&(yield x.sendError(It,Ee,Ye.error)),x.cleanupAfterResponse(be)});return function(be){return re.apply(this,arguments)}}(),this.ping=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidPing(be);const{topic:Ee}=be;if(x.client.session.keys.includes(Ee)){const Ye=yield x.sendRequest({topic:Ee,method:"wc_sessionPing",params:{}}),{done:It,resolve:Jn,reject:Yn}=Vr();x.events.once(as("session_ping",Ye),({error:ar})=>{ar?Yn(ar):Jn()}),yield It()}else x.client.core.pairing.pairings.keys.includes(Ee)&&(yield x.client.core.pairing.ping({topic:Ee}))});return function(be){return re.apply(this,arguments)}}(),this.emit=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidEmit(be);const{topic:Ee,event:Ye,chainId:It}=be;yield x.sendRequest({topic:Ee,method:"wc_sessionEvent",params:{event:Ye,chainId:It}})});return function(be){return re.apply(this,arguments)}}(),this.disconnect=function(){var re=(0,b.Z)(function*(be){yield x.isInitialized(),yield x.isValidDisconnect(be);const{topic:Ee}=be;x.client.session.keys.includes(Ee)?(yield x.sendRequest({topic:Ee,method:"wc_sessionDelete",params:Ka("USER_DISCONNECTED"),throwOnFailedPublish:!0}),yield x.deleteSession(Ee)):yield x.client.core.pairing.disconnect({topic:Ee})});return function(be){return re.apply(this,arguments)}}(),this.find=re=>(this.isInitialized(),this.client.session.getAll().filter(be=>function Rf(oe,y){const{requiredNamespaces:x}=y,re=Object.keys(oe.namespaces),be=Object.keys(x);let Ee=!0;return!!Zc(be,re)&&(re.forEach(Ye=>{const{accounts:It,methods:Jn,events:Yn}=oe.namespaces[Ye],ar=yu(It),Tr=x[Ye];Zc(zl(Ye,Tr),ar)&&Zc(Tr.methods,Jn)&&Zc(Tr.events,Yn)||(Ee=!1)}),Ee)}(be,re))),this.getPendingSessionRequests=()=>(this.isInitialized(),this.client.pendingRequest.getAll()),this.cleanupDuplicatePairings=function(){var re=(0,b.Z)(function*(be){if(be.pairingTopic)try{const Ee=x.client.core.pairing.pairings.get(be.pairingTopic),Ye=x.client.core.pairing.pairings.getAll().filter(It=>{var Jn,Yn;return(null==(Jn=It.peerMetadata)?void 0:Jn.url)&&(null==(Yn=It.peerMetadata)?void 0:Yn.url)===be.peer.metadata.url&&It.topic&&It.topic!==Ee.topic});if(0===Ye.length)return;x.client.logger.info(`Cleaning up ${Ye.length} duplicate pairing(s)`),yield Promise.all(Ye.map(It=>x.client.core.pairing.disconnect({topic:It.topic}))),x.client.logger.info("Duplicate pairings clean up finished")}catch(Ee){x.client.logger.error(Ee)}});return function(be){return re.apply(this,arguments)}}(),this.deleteSession=function(){var re=(0,b.Z)(function*(be,Ee){const{self:Ye}=x.client.session.get(be);yield x.client.core.relayer.unsubscribe(be),x.client.session.delete(be,Ka("USER_DISCONNECTED")),x.client.core.crypto.keychain.has(Ye.publicKey)&&(yield x.client.core.crypto.deleteKeyPair(Ye.publicKey)),x.client.core.crypto.keychain.has(be)&&(yield x.client.core.crypto.deleteSymKey(be)),Ee||x.client.core.expirer.del(be),x.client.core.storage.removeItem(R0).catch(It=>x.client.logger.warn(It))});return function(be,Ee){return re.apply(this,arguments)}}(),this.deleteProposal=function(){var re=(0,b.Z)(function*(be,Ee){yield Promise.all([x.client.proposal.delete(be,Ka("USER_DISCONNECTED")),Ee?Promise.resolve():x.client.core.expirer.del(be)])});return function(be,Ee){return re.apply(this,arguments)}}(),this.deletePendingSessionRequest=function(){var re=(0,b.Z)(function*(be,Ee,Ye=!1){yield Promise.all([x.client.pendingRequest.delete(be,Ee),Ye?Promise.resolve():x.client.core.expirer.del(be)]),x.sessionRequestQueue.queue=x.sessionRequestQueue.queue.filter(It=>It.id!==be),Ye&&(x.sessionRequestQueue.state="IDLE")});return function(be,Ee){return re.apply(this,arguments)}}(),this.setExpiry=function(){var re=(0,b.Z)(function*(be,Ee){x.client.session.keys.includes(be)&&(yield x.client.session.update(be,{expiry:Ee})),x.client.core.expirer.set(be,Ee)});return function(be,Ee){return re.apply(this,arguments)}}(),this.setProposal=function(){var re=(0,b.Z)(function*(be,Ee){yield x.client.proposal.set(be,Ee),x.client.core.expirer.set(be,Ee.expiry)});return function(be,Ee){return re.apply(this,arguments)}}(),this.setPendingSessionRequest=function(){var re=(0,b.Z)(function*(be){const Ee=F0.wc_sessionRequest.req.ttl,{id:Ye,topic:It,params:Jn,verifyContext:Yn}=be;yield x.client.pendingRequest.set(Ye,{id:Ye,topic:It,params:Jn,verifyContext:Yn}),Ee&&x.client.core.expirer.set(Ye,os(Ee))});return function(be){return re.apply(this,arguments)}}(),this.sendRequest=function(){var re=(0,b.Z)(function*(be){const{topic:Ee,method:Ye,params:It,expiry:Jn,relayRpcId:Yn,clientRpcId:ar,throwOnFailedPublish:Tr}=be,Qr=Hd(Ye,It,ar);if(Ln()&&Ll.includes(Ye)){const pi=Js(JSON.stringify(Qr));x.client.core.verify.register({attestationId:pi})}const ci=yield x.client.core.crypto.encode(Ee,Qr),Br=F0[Ye].req;return Jn&&(Br.ttl=Jn),Yn&&(Br.id=Yn),x.client.core.history.set(Ee,Qr),Tr?(Br.internal=B0(Rl({},Br.internal),{throwOnFailedPublish:!0}),yield x.client.core.relayer.publish(Ee,ci,Br)):x.client.core.relayer.publish(Ee,ci,Br).catch(pi=>x.client.logger.error(pi)),Qr.id});return function(be){return re.apply(this,arguments)}}(),this.sendResult=function(){var re=(0,b.Z)(function*(be){const{id:Ee,topic:Ye,result:It,throwOnFailedPublish:Jn}=be,Yn=pm(Ee,It),ar=yield x.client.core.crypto.encode(Ye,Yn),Tr=yield x.client.core.history.get(Ye,Ee),Qr=F0[Tr.request.method].res;Jn?(Qr.internal=B0(Rl({},Qr.internal),{throwOnFailedPublish:!0}),yield x.client.core.relayer.publish(Ye,ar,Qr)):x.client.core.relayer.publish(Ye,ar,Qr).catch(ci=>x.client.logger.error(ci)),yield x.client.core.history.resolve(Yn)});return function(be){return re.apply(this,arguments)}}(),this.sendError=function(){var re=(0,b.Z)(function*(be,Ee,Ye){const It=Qh(be,Ye),Jn=yield x.client.core.crypto.encode(Ee,It),Yn=yield x.client.core.history.get(Ee,be);x.client.core.relayer.publish(Ee,Jn,F0[Yn.request.method].res),yield x.client.core.history.resolve(It)});return function(be,Ee,Ye){return re.apply(this,arguments)}}(),this.cleanup=(0,b.Z)(function*(){const re=[],be=[];x.client.session.getAll().forEach(Ee=>{So(Ee.expiry)&&re.push(Ee.topic)}),x.client.proposal.getAll().forEach(Ee=>{So(Ee.expiry)&&be.push(Ee.id)}),yield Promise.all([...re.map(Ee=>x.deleteSession(Ee)),...be.map(Ee=>x.deleteProposal(Ee))])}),this.onRelayEventRequest=function(){var re=(0,b.Z)(function*(be){x.requestQueue.queue.push(be),yield x.processRequestsQueue()});return function(be){return re.apply(this,arguments)}}(),this.processRequestsQueue=(0,b.Z)(function*(){if("ACTIVE"!==x.requestQueue.state){for(x.client.logger.info(`Request queue starting with ${x.requestQueue.queue.length} requests`);x.requestQueue.queue.length>0;){x.requestQueue.state="ACTIVE";const re=x.requestQueue.queue.shift();if(re)try{x.processRequest(re),yield new Promise(be=>setTimeout(be,300))}catch(be){x.client.logger.warn(be)}}x.requestQueue.state="IDLE"}else x.client.logger.info("Request queue already active, skipping...")}),this.processRequest=re=>{const{topic:be,payload:Ee}=re,Ye=Ee.method;switch(Ye){case"wc_sessionPropose":return this.onSessionProposeRequest(be,Ee);case"wc_sessionSettle":return this.onSessionSettleRequest(be,Ee);case"wc_sessionUpdate":return this.onSessionUpdateRequest(be,Ee);case"wc_sessionExtend":return this.onSessionExtendRequest(be,Ee);case"wc_sessionPing":return this.onSessionPingRequest(be,Ee);case"wc_sessionDelete":return this.onSessionDeleteRequest(be,Ee);case"wc_sessionRequest":return this.onSessionRequest(be,Ee);case"wc_sessionEvent":return this.onSessionEventRequest(be,Ee);default:return this.client.logger.info(`Unsupported request method ${Ye}`)}},this.onRelayEventResponse=function(){var re=(0,b.Z)(function*(be){const{topic:Ee,payload:Ye}=be,It=(yield x.client.core.history.get(Ee,Ye.id)).request.method;switch(It){case"wc_sessionPropose":return x.onSessionProposeResponse(Ee,Ye);case"wc_sessionSettle":return x.onSessionSettleResponse(Ee,Ye);case"wc_sessionUpdate":return x.onSessionUpdateResponse(Ee,Ye);case"wc_sessionExtend":return x.onSessionExtendResponse(Ee,Ye);case"wc_sessionPing":return x.onSessionPingResponse(Ee,Ye);case"wc_sessionRequest":return x.onSessionRequestResponse(Ee,Ye);default:return x.client.logger.info(`Unsupported response method ${It}`)}});return function(be){return re.apply(this,arguments)}}(),this.onRelayEventUnknownPayload=re=>{const{topic:be}=re,{message:Ee}=ki("MISSING_OR_INVALID",`Decoded payload on topic ${be} is not identifiable as a JSON-RPC request or a response.`);throw new Error(Ee)},this.onSessionProposeRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{params:Ye,id:It}=Ee;try{x.isValidConnect(Rl({},Ee.params));const Jn=os(Ni.FIVE_MINUTES),Yn=Rl({id:It,pairingTopic:be,expiry:Jn},Ye);yield x.setProposal(It,Yn);const ar=Js(JSON.stringify(Ee)),Tr=yield x.getVerifyContext(ar,Yn.proposer.metadata);x.client.events.emit("session_proposal",{id:It,params:Yn,verifyContext:Tr})}catch(Jn){yield x.sendError(It,be,Jn),x.client.logger.error(Jn)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionProposeResponse=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye}=Ee;if(tl(Ee)){const{result:It}=Ee;x.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:It});const Jn=x.client.proposal.get(Ye);x.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:Jn});const Yn=Jn.proposer.publicKey;x.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:Yn});const ar=It.responderPublicKey;x.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:ar});const Tr=yield x.client.core.crypto.generateSharedKey(Yn,ar);x.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:Tr});const Qr=yield x.client.core.relayer.subscribe(Tr);x.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:Qr}),yield x.client.core.pairing.activate({topic:be})}else qo(Ee)&&(yield x.client.proposal.delete(Ye,Ka("USER_DISCONNECTED")),x.events.emit(as("session_connect"),{error:Ee.error}))});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionSettleRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye,params:It}=Ee;try{x.isValidSessionSettleRequest(It);const{relay:Jn,controller:Yn,expiry:ar,namespaces:Tr,requiredNamespaces:Qr,optionalNamespaces:ci,sessionProperties:Br,pairingTopic:pi}=Ee.params,Ui=Rl({topic:be,relay:Jn,expiry:ar,namespaces:Tr,acknowledged:!0,pairingTopic:pi,requiredNamespaces:Qr,optionalNamespaces:ci,controller:Yn.publicKey,self:{publicKey:"",metadata:x.client.metadata},peer:{publicKey:Yn.publicKey,metadata:Yn.metadata}},Br&&{sessionProperties:Br});yield x.sendResult({id:Ee.id,topic:be,result:!0}),x.events.emit(as("session_connect"),{session:Ui}),x.cleanupDuplicatePairings(Ui)}catch(Jn){yield x.sendError(Ye,be,Jn),x.client.logger.error(Jn)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionSettleResponse=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye}=Ee;tl(Ee)?(yield x.client.session.update(be,{acknowledged:!0}),x.events.emit(as("session_approve",Ye),{})):qo(Ee)&&(yield x.client.session.delete(be,Ka("USER_DISCONNECTED")),x.events.emit(as("session_approve",Ye),{error:Ee.error}))});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionUpdateRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{params:Ye,id:It}=Ee;try{const Jn=`${be}_session_update`,Yn=xu.get(Jn);if(Yn&&x.isRequestOutOfSync(Yn,It))return void x.client.logger.info(`Discarding out of sync request - ${It}`);x.isValidUpdate(Rl({topic:be},Ye)),yield x.client.session.update(be,{namespaces:Ye.namespaces}),yield x.sendResult({id:It,topic:be,result:!0}),x.client.events.emit("session_update",{id:It,topic:be,params:Ye}),xu.set(Jn,It)}catch(Jn){yield x.sendError(It,be,Jn),x.client.logger.error(Jn)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.isRequestOutOfSync=(re,be)=>parseInt(be.toString().slice(0,-3))<=parseInt(re.toString().slice(0,-3)),this.onSessionUpdateResponse=(re,be)=>{const{id:Ee}=be;tl(be)?this.events.emit(as("session_update",Ee),{}):qo(be)&&this.events.emit(as("session_update",Ee),{error:be.error})},this.onSessionExtendRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye}=Ee;try{x.isValidExtend({topic:be}),yield x.setExpiry(be,os(N0)),yield x.sendResult({id:Ye,topic:be,result:!0}),x.client.events.emit("session_extend",{id:Ye,topic:be})}catch(It){yield x.sendError(Ye,be,It),x.client.logger.error(It)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionExtendResponse=(re,be)=>{const{id:Ee}=be;tl(be)?this.events.emit(as("session_extend",Ee),{}):qo(be)&&this.events.emit(as("session_extend",Ee),{error:be.error})},this.onSessionPingRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye}=Ee;try{x.isValidPing({topic:be}),yield x.sendResult({id:Ye,topic:be,result:!0}),x.client.events.emit("session_ping",{id:Ye,topic:be})}catch(It){yield x.sendError(Ye,be,It),x.client.logger.error(It)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionPingResponse=(re,be)=>{const{id:Ee}=be;setTimeout(()=>{tl(be)?this.events.emit(as("session_ping",Ee),{}):qo(be)&&this.events.emit(as("session_ping",Ee),{error:be.error})},500)},this.onSessionDeleteRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye}=Ee;try{x.isValidDisconnect({topic:be,reason:Ee.params}),yield Promise.all([new Promise(It=>{x.client.core.relayer.once("relayer_publish",(0,b.Z)(function*(){It(yield x.deleteSession(be))}))}),x.sendResult({id:Ye,topic:be,result:!0})]),x.client.events.emit("session_delete",{id:Ye,topic:be})}catch(It){x.client.logger.error(It)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye,params:It}=Ee;try{x.isValidRequest(Rl({topic:be},It));const Jn=Js(JSON.stringify(Hd("wc_sessionRequest",It,Ye))),Yn=x.client.session.get(be),Tr={id:Ye,topic:be,params:It,verifyContext:yield x.getVerifyContext(Jn,Yn.peer.metadata)};yield x.setPendingSessionRequest(Tr),x.addSessionRequestToSessionRequestQueue(Tr),x.processSessionRequestQueue()}catch(Jn){yield x.sendError(Ye,be,Jn),x.client.logger.error(Jn)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.onSessionRequestResponse=(re,be)=>{const{id:Ee}=be;tl(be)?this.events.emit(as("session_request",Ee),{result:be.result}):qo(be)&&this.events.emit(as("session_request",Ee),{error:be.error})},this.onSessionEventRequest=function(){var re=(0,b.Z)(function*(be,Ee){const{id:Ye,params:It}=Ee;try{const Jn=`${be}_session_event_${It.event.name}`,Yn=xu.get(Jn);if(Yn&&x.isRequestOutOfSync(Yn,Ye))return void x.client.logger.info(`Discarding out of sync request - ${Ye}`);x.isValidEmit(Rl({topic:be},It)),x.client.events.emit("session_event",{id:Ye,topic:be,params:It}),xu.set(Jn,Ye)}catch(Jn){yield x.sendError(Ye,be,Jn),x.client.logger.error(Jn)}});return function(be,Ee){return re.apply(this,arguments)}}(),this.addSessionRequestToSessionRequestQueue=re=>{this.sessionRequestQueue.queue.push(re)},this.cleanupAfterResponse=re=>{this.deletePendingSessionRequest(re.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state="IDLE",this.processSessionRequestQueue()},(0,Ni.toMiliseconds)(this.requestQueueDelay))},this.processSessionRequestQueue=()=>{if("ACTIVE"===this.sessionRequestQueue.state)return void this.client.logger.info("session request queue is already active.");const re=this.sessionRequestQueue.queue[0];if(re)try{this.sessionRequestQueue.state="ACTIVE",this.client.events.emit("session_request",re)}catch(be){this.client.logger.error(be)}else this.client.logger.info("session request queue is empty.")},this.onPairingCreated=re=>{if(re.active)return;const be=this.client.proposal.getAll().find(Ee=>Ee.pairingTopic===re.topic);be&&this.onSessionProposeRequest(re.topic,Hd("wc_sessionPropose",{requiredNamespaces:be.requiredNamespaces,optionalNamespaces:be.optionalNamespaces,relays:be.relays,proposer:be.proposer,sessionProperties:be.sessionProperties},be.id))},this.isValidConnect=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:ar}=ki("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(be)}`);throw new Error(ar)}const{pairingTopic:Ee,requiredNamespaces:Ye,optionalNamespaces:It,sessionProperties:Jn,relays:Yn}=be;if(gl(Ee)||(yield x.isValidPairingTopic(Ee)),!function rh(oe,y){let x=!1;return y&&!oe?x=!0:oe&&nc(oe)&&oe.length&&oe.forEach(re=>{x=nh(re)}),x}(Yn,!0)){const{message:ar}=ki("MISSING_OR_INVALID",`connect() relays: ${Yn}`);throw new Error(ar)}!gl(Ye)&&0!==jc(Ye)&&x.validateNamespaces(Ye,"requiredNamespaces"),!gl(It)&&0!==jc(It)&&x.validateNamespaces(It,"optionalNamespaces"),gl(Jn)||x.validateSessionProps(Jn,"sessionProperties")});return function(be){return re.apply(this,arguments)}}(),this.validateNamespaces=(re,be)=>{const Ee=function Jc(oe,y,x){let re=null;if(oe&&jc(oe)){const be=Hf(oe,y);be&&(re=be);const Ee=function Lg(oe,y,x){let re=null;return Object.entries(oe).forEach(([be,Ee])=>{if(re)return;const Ye=function Rd(oe,y,x){let re=null;return nc(y)&&y.length?y.forEach(be=>{re||Nf(be)||(re=Ka("UNSUPPORTED_CHAINS",`${x}, chain ${be} should be a string and conform to "namespace:chainId" format`))}):Nf(oe)||(re=Ka("UNSUPPORTED_CHAINS",`${x}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),re}(be,zl(be,Ee),`${y} ${x}`);Ye&&(re=Ye)}),re}(oe,y,x);Ee&&(re=Ee)}else re=ki("MISSING_OR_INVALID",`${y}, ${x} should be an object with data`);return re}(re,"connect()",be);if(Ee)throw new Error(Ee.message)},this.isValidApprove=function(){var re=(0,b.Z)(function*(be){if(!kl(be))throw new Error(ki("MISSING_OR_INVALID",`approve() params: ${be}`).message);const{id:Ee,namespaces:Ye,relayProtocol:It,sessionProperties:Jn}=be;yield x.isValidProposalId(Ee);const Yn=x.client.proposal.get(Ee),ar=Qc(Ye,"approve()");if(ar)throw new Error(ar.message);const Tr=Ng(Yn.requiredNamespaces,Ye,"approve()");if(Tr)throw new Error(Tr.message);if(!Pa(It,!0)){const{message:Qr}=ki("MISSING_OR_INVALID",`approve() relayProtocol: ${It}`);throw new Error(Qr)}gl(Jn)||x.validateSessionProps(Jn,"sessionProperties")});return function(be){return re.apply(this,arguments)}}(),this.isValidReject=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:It}=ki("MISSING_OR_INVALID",`reject() params: ${be}`);throw new Error(It)}const{id:Ee,reason:Ye}=be;if(yield x.isValidProposalId(Ee),!function Fp(oe){return!!(oe&&"object"==typeof oe&&oe.code&&Lf(oe.code,!1)&&oe.message&&Pa(oe.message,!1))}(Ye)){const{message:It}=ki("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(Ye)}`);throw new Error(It)}});return function(be){return re.apply(this,arguments)}}(),this.isValidSessionSettleRequest=re=>{if(!kl(re)){const{message:ar}=ki("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${re}`);throw new Error(ar)}const{relay:be,controller:Ee,namespaces:Ye,expiry:It}=re;if(!nh(be)){const{message:ar}=ki("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(ar)}const Jn=function Np(oe,y){let x=null;return Pa(oe?.publicKey,!1)||(x=ki("MISSING_OR_INVALID",`${y} controller public key should be a string`)),x}(Ee,"onSessionSettleRequest()");if(Jn)throw new Error(Jn.message);const Yn=Qc(Ye,"onSessionSettleRequest()");if(Yn)throw new Error(Yn.message);if(So(It)){const{message:ar}=ki("EXPIRED","onSessionSettleRequest()");throw new Error(ar)}},this.isValidUpdate=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:ar}=ki("MISSING_OR_INVALID",`update() params: ${be}`);throw new Error(ar)}const{topic:Ee,namespaces:Ye}=be;yield x.isValidSessionTopic(Ee);const It=x.client.session.get(Ee),Jn=Qc(Ye,"update()");if(Jn)throw new Error(Jn.message);const Yn=Ng(It.requiredNamespaces,Ye,"update()");if(Yn)throw new Error(Yn.message)});return function(be){return re.apply(this,arguments)}}(),this.isValidExtend=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:Ye}=ki("MISSING_OR_INVALID",`extend() params: ${be}`);throw new Error(Ye)}const{topic:Ee}=be;yield x.isValidSessionTopic(Ee)});return function(be){return re.apply(this,arguments)}}(),this.isValidRequest=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:ar}=ki("MISSING_OR_INVALID",`request() params: ${be}`);throw new Error(ar)}const{topic:Ee,request:Ye,chainId:It,expiry:Jn}=be;yield x.isValidSessionTopic(Ee);const{namespaces:Yn}=x.client.session.get(Ee);if(!jp(Yn,It)){const{message:ar}=ki("MISSING_OR_INVALID",`request() chainId: ${It}`);throw new Error(ar)}if(!function Nd(oe){return!(gl(oe)||!Pa(oe.method,!1))}(Ye)){const{message:ar}=ki("MISSING_OR_INVALID",`request() ${JSON.stringify(Ye)}`);throw new Error(ar)}if(!function Kl(oe,y,x){return!!Pa(x,!1)&&function Wh(oe,y){const x=[];return Object.values(oe).forEach(re=>{yu(re.accounts).includes(y)&&x.push(...re.methods)}),x}(oe,y).includes(x)}(Yn,It,Ye.method)){const{message:ar}=ki("MISSING_OR_INVALID",`request() method: ${Ye.method}`);throw new Error(ar)}if(Jn&&!function _u(oe,y){return Lf(oe,!1)&&oe<=y.max&&oe>=y.min}(Jn,bv)){const{message:ar}=ki("MISSING_OR_INVALID",`request() expiry: ${Jn}. Expiry must be a number (in seconds) between ${bv.min} and ${bv.max}`);throw new Error(ar)}});return function(be){return re.apply(this,arguments)}}(),this.isValidRespond=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:It}=ki("MISSING_OR_INVALID",`respond() params: ${be}`);throw new Error(It)}const{topic:Ee,response:Ye}=be;if(yield x.isValidSessionTopic(Ee),!function Rg(oe){return!(gl(oe)||gl(oe.result)&&gl(oe.error)||!Lf(oe.id,!1)||!Pa(oe.jsonrpc,!1))}(Ye)){const{message:It}=ki("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(Ye)}`);throw new Error(It)}});return function(be){return re.apply(this,arguments)}}(),this.isValidPing=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:Ye}=ki("MISSING_OR_INVALID",`ping() params: ${be}`);throw new Error(Ye)}const{topic:Ee}=be;yield x.isValidSessionOrPairingTopic(Ee)});return function(be){return re.apply(this,arguments)}}(),this.isValidEmit=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:Yn}=ki("MISSING_OR_INVALID",`emit() params: ${be}`);throw new Error(Yn)}const{topic:Ee,event:Ye,chainId:It}=be;yield x.isValidSessionTopic(Ee);const{namespaces:Jn}=x.client.session.get(Ee);if(!jp(Jn,It)){const{message:Yn}=ki("MISSING_OR_INVALID",`emit() chainId: ${It}`);throw new Error(Yn)}if(!function Bp(oe){return!(gl(oe)||!Pa(oe.name,!1))}(Ye)){const{message:Yn}=ki("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(Ye)}`);throw new Error(Yn)}if(!function ry(oe,y,x){return!!Pa(x,!1)&&function kp(oe,y){const x=[];return Object.values(oe).forEach(re=>{yu(re.accounts).includes(y)&&x.push(...re.events)}),x}(oe,y).includes(x)}(Jn,It,Ye.name)){const{message:Yn}=ki("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(Ye)}`);throw new Error(Yn)}});return function(be){return re.apply(this,arguments)}}(),this.isValidDisconnect=function(){var re=(0,b.Z)(function*(be){if(!kl(be)){const{message:Ye}=ki("MISSING_OR_INVALID",`disconnect() params: ${be}`);throw new Error(Ye)}const{topic:Ee}=be;yield x.isValidSessionOrPairingTopic(Ee)});return function(be){return re.apply(this,arguments)}}(),this.getVerifyContext=function(){var re=(0,b.Z)(function*(be,Ee){const Ye={verified:{verifyUrl:Ee.verifyUrl||Mh,validation:"UNKNOWN",origin:Ee.url||""}};try{const It=yield x.client.core.verify.resolve({attestationId:be,verifyUrl:Ee.verifyUrl});It&&(Ye.verified.origin=It.origin,Ye.verified.isScam=It.isScam,Ye.verified.validation=It.origin===new URL(Ee.url).origin?"VALID":"INVALID")}catch(It){x.client.logger.info(It)}return x.client.logger.info(`Verify context: ${JSON.stringify(Ye)}`),Ye});return function(be,Ee){return re.apply(this,arguments)}}(),this.validateSessionProps=(re,be)=>{Object.values(re).forEach(Ee=>{if(!Pa(Ee,!1)){const{message:Ye}=ki("MISSING_OR_INVALID",`${be} must be in Record<string, string> format. Received: ${JSON.stringify(Ee)}`);throw new Error(Ye)}})}}isInitialized(){var y=this;return(0,b.Z)(function*(){if(!y.initialized){const{message:x}=ki("NOT_INITIALIZED",y.name);throw new Error(x)}yield y.client.core.relayer.confirmOnlineStateOrThrow()})()}registerRelayerEvents(){var y=this;this.client.core.relayer.on("relayer_message",function(){var x=(0,b.Z)(function*(re){const{topic:be,message:Ee}=re;if(y.ignoredPayloadTypes.includes(y.client.core.crypto.getPayloadType(Ee)))return;const Ye=yield y.client.core.crypto.decode(be,Ee);try{Us(Ye)?(y.client.core.history.set(be,Ye),y.onRelayEventRequest({topic:be,payload:Ye})):qh(Ye)?(yield y.client.core.history.resolve(Ye),yield y.onRelayEventResponse({topic:be,payload:Ye}),y.client.core.history.delete(be,Ye.id)):y.onRelayEventUnknownPayload({topic:be,payload:Ye})}catch(It){y.client.logger.error(It)}});return function(re){return x.apply(this,arguments)}}())}registerExpirerEvents(){var y=this;this.client.core.expirer.on(au_expired,function(){var x=(0,b.Z)(function*(re){const{topic:be,id:Ee}=gs(re.target);if(Ee&&y.client.pendingRequest.keys.includes(Ee))return yield y.deletePendingSessionRequest(Ee,ki("EXPIRED"),!0);be?y.client.session.keys.includes(be)&&(yield y.deleteSession(be,!0),y.client.events.emit("session_expire",{topic:be})):Ee&&(yield y.deleteProposal(Ee,!0),y.client.events.emit("proposal_expire",{id:Ee}))});return function(re){return x.apply(this,arguments)}}())}registerPairingEvents(){this.client.core.pairing.events.on("pairing_create",y=>this.onPairingCreated(y))}isValidPairingTopic(y){if(!Pa(y,!1)){const{message:x}=ki("MISSING_OR_INVALID",`pairing topic should be a string: ${y}`);throw new Error(x)}if(!this.client.core.pairing.pairings.keys.includes(y)){const{message:x}=ki("NO_MATCHING_KEY",`pairing topic doesn't exist: ${y}`);throw new Error(x)}if(So(this.client.core.pairing.pairings.get(y).expiry)){const{message:x}=ki("EXPIRED",`pairing topic: ${y}`);throw new Error(x)}}isValidSessionTopic(y){var x=this;return(0,b.Z)(function*(){if(!Pa(y,!1)){const{message:re}=ki("MISSING_OR_INVALID",`session topic should be a string: ${y}`);throw new Error(re)}if(!x.client.session.keys.includes(y)){const{message:re}=ki("NO_MATCHING_KEY",`session topic doesn't exist: ${y}`);throw new Error(re)}if(So(x.client.session.get(y).expiry)){yield x.deleteSession(y);const{message:re}=ki("EXPIRED",`session topic: ${y}`);throw new Error(re)}})()}isValidSessionOrPairingTopic(y){var x=this;return(0,b.Z)(function*(){if(x.client.session.keys.includes(y))yield x.isValidSessionTopic(y);else{if(!x.client.core.pairing.pairings.keys.includes(y)){if(Pa(y,!1)){const{message:re}=ki("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${y}`);throw new Error(re)}{const{message:re}=ki("MISSING_OR_INVALID",`session or pairing topic should be a string: ${y}`);throw new Error(re)}}x.isValidPairingTopic(y)}})()}isValidProposalId(y){var x=this;return(0,b.Z)(function*(){if(!function Is(oe){return"number"==typeof oe}(y)){const{message:re}=ki("MISSING_OR_INVALID",`proposal id should be a number: ${y}`);throw new Error(re)}if(!x.client.proposal.keys.includes(y)){const{message:re}=ki("NO_MATCHING_KEY",`proposal id doesn't exist: ${y}`);throw new Error(re)}if(So(x.client.proposal.get(y).expiry)){yield x.deleteProposal(y);const{message:re}=ki("EXPIRED",`proposal id: ${y}`);throw new Error(re)}})()}}class Db extends lp{constructor(y,x){super(y,x,"proposal",vv),this.core=y,this.logger=x}}class Ww extends lp{constructor(y,x){super(y,x,"session",vv),this.core=y,this.logger=x}}class Ab extends lp{constructor(y,x){super(y,x,"request",vv,re=>re.id),this.core=y,this.logger=x}}class Tb extends class $f{constructor(y){this.opts=y,this.protocol="wc",this.version=2}}{constructor(y){var x;super(y),x=this,this.protocol="wc",this.version=2,this.name="client",this.events=new Cs.EventEmitter,this.on=(be,Ee)=>this.events.on(be,Ee),this.once=(be,Ee)=>this.events.once(be,Ee),this.off=(be,Ee)=>this.events.off(be,Ee),this.removeListener=(be,Ee)=>this.events.removeListener(be,Ee),this.removeAllListeners=be=>this.events.removeAllListeners(be),this.connect=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.connect(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.pair=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.pair(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.approve=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.approve(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.reject=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.reject(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.update=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.update(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.extend=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.extend(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.request=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.request(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.respond=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.respond(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.ping=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.ping(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.emit=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.emit(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.disconnect=function(){var be=(0,b.Z)(function*(Ee){try{return yield x.engine.disconnect(Ee)}catch(Ye){throw x.logger.error(Ye.message),Ye}});return function(Ee){return be.apply(this,arguments)}}(),this.find=be=>{try{return this.engine.find(be)}catch(Ee){throw this.logger.error(Ee.message),Ee}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(be){throw this.logger.error(be.message),be}},this.name=y?.name||"client",this.metadata=y?.metadata||function zs(){return(0,zc.D)()||{name:"",description:"",url:"",icons:[""]}}();const re=typeof y?.logger<"u"&&"string"!=typeof y?.logger?y.logger:(0,Ro.pino)((0,Ro.getDefaultLoggerOptions)({level:y?.logger||"error"}));this.core=y?.core||new xb(y),this.logger=(0,Ro.generateChildLogger)(re,this.name),this.session=new Ww(this.core,this.logger),this.proposal=new Db(this.core,this.logger),this.pendingRequest=new Ab(this.core,this.logger),this.engine=new Vw(this)}static init(y){return(0,b.Z)(function*(){const x=new Tb(y);return yield x.initialize(),x})()}get context(){return(0,Ro.getLoggerContext)(this.logger)}get pairing(){return this.core.pairing.pairings}initialize(){var y=this;return(0,b.Z)(function*(){y.logger.trace("Initialized");try{yield y.core.start(),yield y.session.init(),yield y.proposal.init(),yield y.pendingRequest.init(),yield y.engine.init(),y.core.verify.init({verifyUrl:y.metadata.verifyUrl}),y.logger.info("SignClient Initialization Success")}catch(x){throw y.logger.info("SignClient Initialization Failure"),y.logger.error(x.message),x}})()}}var Ev=t(58472),Xu=t.n(Ev);const Ju={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"};class Au{constructor(y,x=!1){if(this.url=y,this.disableProviderPing=x,this.events=new Cs.EventEmitter,this.isAvailable=!1,this.registering=!1,!iu(y))throw new Error(`Provided URL is not compatible with HTTP connection: ${y}`);this.url=y,this.disableProviderPing=x}get connected(){return this.isAvailable}get connecting(){return this.registering}on(y,x){this.events.on(y,x)}once(y,x){this.events.once(y,x)}off(y,x){this.events.off(y,x)}removeListener(y,x){this.events.removeListener(y,x)}open(y=this.url){var x=this;return(0,b.Z)(function*(){yield x.register(y)})()}close(){var y=this;return(0,b.Z)(function*(){if(!y.isAvailable)throw new Error("Connection already closed");y.onClose()})()}send(y,x){var re=this;return(0,b.Z)(function*(){re.isAvailable||(yield re.register());try{const be=fd(y),Ye=yield(yield Xu()(re.url,Object.assign(Object.assign({},Ju),{body:be}))).json();re.onPayload({data:Ye})}catch(be){re.onError(y.id,be)}})()}register(y=this.url){var x=this;return(0,b.Z)(function*(){if(!iu(y))throw new Error(`Provided URL is not compatible with HTTP connection: ${y}`);if(x.registering){const re=x.events.getMaxListeners();return(x.events.listenerCount("register_error")>=re||x.events.listenerCount("open")>=re)&&x.events.setMaxListeners(re+1),new Promise((be,Ee)=>{x.events.once("register_error",Ye=>{x.resetMaxListeners(),Ee(Ye)}),x.events.once("open",()=>{if(x.resetMaxListeners(),typeof x.isAvailable>"u")return Ee(new Error("HTTP connection is missing or invalid"));be()})})}x.url=y,x.registering=!0;try{if(!x.disableProviderPing){const re=fd({id:1,jsonrpc:"2.0",method:"test",params:[]});yield Xu()(y,Object.assign(Object.assign({},Ju),{body:re}))}x.onOpen()}catch(re){const be=x.parseError(re);throw x.events.emit("register_error",be),x.onClose(),be}})()}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(y){if(typeof y.data>"u")return;const x="string"==typeof y.data?Xh(y.data):y.data;this.events.emit("payload",x)}onError(y,x){const re=this.parseError(x),Ee=Qh(y,re.message||re.toString());this.events.emit("payload",Ee)}parseError(y,x=this.url){return jd(y,x,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}}const Dh=Au,r1="wc@2:universal_provider:";var cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cv={exports:{}};!function(oe,y){(function(){var x,Ye="Expected a function",Jn="__lodash_hash_undefined__",ar="__lodash_placeholder__",df=1/0,Ah=9007199254740991,xd=4294967295,ex=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],hp="[object Arguments]",W0="[object Array]",fp="[object Boolean]",z0="[object Date]",f1="[object Error]",$0="[object Function]",Bv="[object GeneratorFunction]",Qu="[object Map]",G0="[object Number]",qu="[object Object]",tx="[object Promise]",K0="[object RegExp]",ed="[object Set]",Z0="[object String]",p1="[object Symbol]",X0="[object WeakMap]",J0="[object ArrayBuffer]",hf="[object DataView]",g1="[object Float32Array]",m1="[object Float64Array]",jv="[object Int8Array]",Q0="[object Int16Array]",y1="[object Int32Array]",Hv="[object Uint8Array]",Yv="[object Uint8ClampedArray]",q0="[object Uint16Array]",eg="[object Uint32Array]",rx=/\b__p \+= '';/g,Uv=/\b(__p \+=) '' \+/g,M2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ix=/&(?:amp|lt|gt|quot|#39);/g,v1=/[&<>"']/g,D2=RegExp(ix.source),sx=RegExp(v1.source),A2=/<%-([\s\S]+?)%>/g,ox=/<%([\s\S]+?)%>/g,ax=/<%=([\s\S]+?)%>/g,lx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cC=/^\w*$/,T2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pp=/[\\^$.*+?()[\]{}|]/g,I2=RegExp(pp.source),Th=/^\s+/,tg=/\s/,k2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,uC=/\{\n\/\* \[wrapped with (.+)\] \*/,cx=/,? & /,O2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,P2=/[()=,{}\[\]\/\s]/,L2=/\\(\\)?/g,R2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Vv=/\w*$/,N2=/^[-+]0x[0-9a-f]+$/i,Wv=/^0b[01]+$/i,_1=/^\[object .+?Constructor\]$/,ng=/^0o[0-7]+$/i,F2=/^(?:0|[1-9]\d*)$/,ux=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rg=/($^)/,B2=/['\n\r\u2028\u2029\\]/g,b1="\\ud800-\\udfff",dx="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",hx="\\u2700-\\u27bf",ff="a-z\\xdf-\\xf6\\xf8-\\xff",gx="A-Z\\xc0-\\xd6\\xd8-\\xde",H2="\\ufe0e\\ufe0f",$v="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yx="["+b1+"]",x1="["+$v+"]",ig="["+dx+"]",Gv="\\d+",vx="["+hx+"]",Kv="["+ff+"]",Zv="[^"+b1+$v+Gv+hx+ff+gx+"]",Xv="\\ud83c[\\udffb-\\udfff]",bx="[^"+b1+"]",Jv="(?:\\ud83c[\\udde6-\\uddff]){2}",Qv="[\\ud800-\\udbff][\\udc00-\\udfff]",wd="["+gx+"]",e_="(?:"+Kv+"|"+Zv+")",xx="(?:"+wd+"|"+Zv+")",t_="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",n_="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",r_="(?:"+ig+"|"+Xv+")?",wx="["+H2+"]?",i_=wx+r_+"(?:\\u200d(?:"+[bx,Jv,Qv].join("|")+")"+wx+r_+")*",U2="(?:"+[vx,Jv,Qv].join("|")+")"+i_,sg="(?:"+[bx+ig+"?",ig,Jv,Qv,yx].join("|")+")",V2=RegExp("['\u2019]","g"),s_=RegExp(ig,"g"),Tu=RegExp(Xv+"(?="+Xv+")|"+sg+i_,"g"),W2=RegExp([wd+"?"+Kv+"+"+t_+"(?="+[x1,wd,"$"].join("|")+")",xx+"+"+n_+"(?="+[x1,wd+e_,"$"].join("|")+")",wd+"?"+e_+"+"+t_,wd+"+"+n_,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gv,U2].join("|"),"g"),w1=RegExp("[\\u200d"+b1+dx+H2+"]"),og=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,z2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],$2=-1,Ja={};Ja[g1]=Ja[m1]=Ja[jv]=Ja[Q0]=Ja[y1]=Ja[Hv]=Ja[Yv]=Ja[q0]=Ja[eg]=!0,Ja[hp]=Ja[W0]=Ja[J0]=Ja[fp]=Ja[hf]=Ja[z0]=Ja[f1]=Ja[$0]=Ja[Qu]=Ja[G0]=Ja[qu]=Ja[K0]=Ja[ed]=Ja[Z0]=Ja[X0]=!1;var wa={};wa[hp]=wa[W0]=wa[J0]=wa[hf]=wa[fp]=wa[z0]=wa[g1]=wa[m1]=wa[jv]=wa[Q0]=wa[y1]=wa[Qu]=wa[G0]=wa[qu]=wa[K0]=wa[ed]=wa[Z0]=wa[p1]=wa[Hv]=wa[Yv]=wa[q0]=wa[eg]=!0,wa[f1]=wa[$0]=wa[X0]=!1;var Sx={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mx=parseFloat,o_=parseInt,a_="object"==typeof cp&&cp&&cp.Object===Object&&cp,Z2="object"==typeof self&&self&&self.Object===Object&&self,lc=a_||Z2||Function("return this")(),Dx=y&&!y.nodeType&&y,Kd=Dx&&oe&&!oe.nodeType&&oe,C1=Kd&&Kd.exports===Dx,S1=C1&&a_.process,Uc=function(){try{return Kd&&Kd.require&&Kd.require("util").types||S1&&S1.binding&&S1.binding("util")}catch{}}(),M1=Uc&&Uc.isArrayBuffer,Ax=Uc&&Uc.isDate,Tx=Uc&&Uc.isMap,Ix=Uc&&Uc.isRegExp,kx=Uc&&Uc.isSet,l_=Uc&&Uc.isTypedArray;function Ac(Rr,ii,Jr){switch(Jr.length){case 0:return Rr.call(ii);case 1:return Rr.call(ii,Jr[0]);case 2:return Rr.call(ii,Jr[0],Jr[1]);case 3:return Rr.call(ii,Jr[0],Jr[1],Jr[2])}return Rr.apply(ii,Jr)}function Ox(Rr,ii,Jr,ns){for(var fo=-1,ga=null==Rr?0:Rr.length;++fo<ga;){var yl=Rr[fo];ii(ns,yl,Jr(yl),Rr)}return ns}function lu(Rr,ii){for(var Jr=-1,ns=null==Rr?0:Rr.length;++Jr<ns&&!1!==ii(Rr[Jr],Jr,Rr););return Rr}function Px(Rr,ii){for(var Jr=null==Rr?0:Rr.length;Jr--&&!1!==ii(Rr[Jr],Jr,Rr););return Rr}function c_(Rr,ii){for(var Jr=-1,ns=null==Rr?0:Rr.length;++Jr<ns;)if(!ii(Rr[Jr],Jr,Rr))return!1;return!0}function Ih(Rr,ii){for(var Jr=-1,ns=null==Rr?0:Rr.length,fo=0,ga=[];++Jr<ns;){var yl=Rr[Jr];ii(yl,Jr,Rr)&&(ga[fo++]=yl)}return ga}function ag(Rr,ii){return!(null==Rr||!Rr.length)&&Oh(Rr,ii,0)>-1}function D1(Rr,ii,Jr){for(var ns=-1,fo=null==Rr?0:Rr.length;++ns<fo;)if(Jr(ii,Rr[ns]))return!0;return!1}function rl(Rr,ii){for(var Jr=-1,ns=null==Rr?0:Rr.length,fo=Array(ns);++Jr<ns;)fo[Jr]=ii(Rr[Jr],Jr,Rr);return fo}function Zd(Rr,ii){for(var Jr=-1,ns=ii.length,fo=Rr.length;++Jr<ns;)Rr[fo+Jr]=ii[Jr];return Rr}function A1(Rr,ii,Jr,ns){var fo=-1,ga=null==Rr?0:Rr.length;for(ns&&ga&&(Jr=Rr[++fo]);++fo<ga;)Jr=ii(Jr,Rr[fo],fo,Rr);return Jr}function Tc(Rr,ii,Jr,ns){var fo=null==Rr?0:Rr.length;for(ns&&fo&&(Jr=Rr[--fo]);fo--;)Jr=ii(Jr,Rr[fo],fo,Rr);return Jr}function kh(Rr,ii){for(var Jr=-1,ns=null==Rr?0:Rr.length;++Jr<ns;)if(ii(Rr[Jr],Jr,Rr))return!0;return!1}var X2=d_("length");function mp(Rr,ii,Jr){var ns;return Jr(Rr,function(fo,ga,yl){if(ii(fo,ga,yl))return ns=ga,!1}),ns}function T1(Rr,ii,Jr,ns){for(var fo=Rr.length,ga=Jr+(ns?1:-1);ns?ga--:++ga<fo;)if(ii(Rr[ga],ga,Rr))return ga;return-1}function Oh(Rr,ii,Jr){return ii==ii?function nE(Rr,ii,Jr){for(var ns=Jr-1,fo=Rr.length;++ns<fo;)if(Rr[ns]===ii)return ns;return-1}(Rr,ii,Jr):T1(Rr,u_,Jr)}function Q2(Rr,ii,Jr,ns){for(var fo=Jr-1,ga=Rr.length;++fo<ga;)if(ns(Rr[fo],ii))return fo;return-1}function u_(Rr){return Rr!=Rr}function Lx(Rr,ii){var Jr=null==Rr?0:Rr.length;return Jr?yp(Rr,ii)/Jr:NaN}function d_(Rr){return function(ii){return null==ii?x:ii[Rr]}}function lg(Rr){return function(ii){return null==Rr?x:Rr[ii]}}function h_(Rr,ii,Jr,ns,fo){return fo(Rr,function(ga,yl,Na){Jr=ns?(ns=!1,ga):ii(Jr,ga,yl,Na)}),Jr}function yp(Rr,ii){for(var Jr,ns=-1,fo=Rr.length;++ns<fo;){var ga=ii(Rr[ns]);ga!==x&&(Jr=Jr===x?ga:Jr+ga)}return Jr}function cg(Rr,ii){for(var Jr=-1,ns=Array(Rr);++Jr<Rr;)ns[Jr]=ii(Jr);return ns}function f_(Rr){return Rr&&Rr.slice(0,v_(Rr)+1).replace(Th,"")}function cu(Rr){return function(ii){return Rr(ii)}}function I1(Rr,ii){return rl(ii,function(Jr){return Rr[Jr]})}function Ph(Rr,ii){return Rr.has(ii)}function p_(Rr,ii){for(var Jr=-1,ns=Rr.length;++Jr<ns&&Oh(ii,Rr[Jr],0)>-1;);return Jr}function Nx(Rr,ii){for(var Jr=Rr.length;Jr--&&Oh(ii,Rr[Jr],0)>-1;);return Jr}function g_(Rr,ii){for(var Jr=Rr.length,ns=0;Jr--;)Rr[Jr]===ii&&++ns;return ns}var m_=lg({\u00c0:"A",\u00c1:"A",\u00c2:"A",\u00c3:"A",\u00c4:"A",\u00c5:"A",\u00e0:"a",\u00e1:"a",\u00e2:"a",\u00e3:"a",\u00e4:"a",\u00e5:"a",\u00c7:"C",\u00e7:"c",\u00d0:"D",\u00f0:"d",\u00c8:"E",\u00c9:"E",\u00ca:"E",\u00cb:"E",\u00e8:"e",\u00e9:"e",\u00ea:"e",\u00eb:"e",\u00cc:"I",\u00cd:"I",\u00ce:"I",\u00cf:"I",\u00ec:"i",\u00ed:"i",\u00ee:"i",\u00ef:"i",\u00d1:"N",\u00f1:"n",\u00d2:"O",\u00d3:"O",\u00d4:"O",\u00d5:"O",\u00d6:"O",\u00d8:"O",\u00f2:"o",\u00f3:"o",\u00f4:"o",\u00f5:"o",\u00f6:"o",\u00f8:"o",\u00d9:"U",\u00da:"U",\u00db:"U",\u00dc:"U",\u00f9:"u",\u00fa:"u",\u00fb:"u",\u00fc:"u",\u00dd:"Y",\u00fd:"y",\u00ff:"y",\u00c6:"Ae",\u00e6:"ae",\u00de:"Th",\u00fe:"th",\u00df:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010a:"C",\u010c:"C",\u0107:"c",\u0109:"c",\u010b:"c",\u010d:"c",\u010e:"D",\u0110:"D",\u010f:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011a:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011b:"e",\u011c:"G",\u011e:"G",\u0120:"G",\u0122:"G",\u011d:"g",\u011f:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012a:"I",\u012c:"I",\u012e:"I",\u0130:"I",\u0129:"i",\u012b:"i",\u012d:"i",\u012f:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013b:"L",\u013d:"L",\u013f:"L",\u0141:"L",\u013a:"l",\u013c:"l",\u013e:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014a:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014b:"n",\u014c:"O",\u014e:"O",\u0150:"O",\u014d:"o",\u014f:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015a:"S",\u015c:"S",\u015e:"S",\u0160:"S",\u015b:"s",\u015d:"s",\u015f:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016a:"U",\u016c:"U",\u016e:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016b:"u",\u016d:"u",\u016f:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017b:"Z",\u017d:"Z",\u017a:"z",\u017c:"z",\u017e:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017f:"s"}),gC=lg({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function q2(Rr){return"\\"+Sx[Rr]}function pf(Rr){return w1.test(Rr)}function k1(Rr){var ii=-1,Jr=Array(Rr.size);return Rr.forEach(function(ns,fo){Jr[++ii]=[fo,ns]}),Jr}function y_(Rr,ii){return function(Jr){return Rr(ii(Jr))}}function Lh(Rr,ii){for(var Jr=-1,ns=Rr.length,fo=0,ga=[];++Jr<ns;){var yl=Rr[Jr];(yl===ii||yl===ar)&&(Rr[Jr]=ar,ga[fo++]=Jr)}return ga}function O1(Rr){var ii=-1,Jr=Array(Rr.size);return Rr.forEach(function(ns){Jr[++ii]=ns}),Jr}function gf(Rr){return pf(Rr)?function iE(Rr){for(var ii=Tu.lastIndex=0;Tu.test(Rr);)++ii;return ii}(Rr):X2(Rr)}function Iu(Rr){return pf(Rr)?function mC(Rr){return Rr.match(Tu)||[]}(Rr):function J2(Rr){return Rr.split("")}(Rr)}function v_(Rr){for(var ii=Rr.length;ii--&&tg.test(Rr.charAt(ii)););return ii}var rE=lg({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),ug=function Rr(ii){var z,Jr=(ii=null==ii?lc:ug.defaults(lc.Object(),ii,ug.pick(lc,z2))).Array,ns=ii.Date,fo=ii.Error,ga=ii.Function,yl=ii.Math,Na=ii.Object,P1=ii.RegExp,__=ii.String,uu=ii.TypeError,dg=Jr.prototype,Rh=Na.prototype,hg=ii["__core-js_shared__"],L1=ga.prototype.toString,ma=Rh.hasOwnProperty,_C=0,Yx=(z=/[^.]+$/.exec(hg&&hg.keys&&hg.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",R1=Rh.toString,b_=L1.call(Na),sE=lc._,bC=P1("^"+L1.call(ma).replace(pp,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x_=C1?ii.Buffer:x,mf=ii.Symbol,N1=ii.Uint8Array,Ux=x_?x_.allocUnsafe:x,F1=y_(Na.getPrototypeOf,Na),oE=Na.create,Vx=Rh.propertyIsEnumerable,vp=dg.splice,Wx=mf?mf.isConcatSpreadable:x,Ic=mf?mf.iterator:x,yf=mf?mf.toStringTag:x,_p=function(){try{var z=Eg(Na,"defineProperty");return z({},"",{}),z}catch{}}(),aE=ii.clearTimeout!==lc.clearTimeout&&ii.clearTimeout,lE=ns&&ns.now!==lc.Date.now&&ns.now,w_=ii.setTimeout!==lc.setTimeout&&ii.setTimeout,fg=yl.ceil,pg=yl.floor,E_=Na.getOwnPropertySymbols,zx=x_?x_.isBuffer:x,$x=ii.isFinite,cE=dg.join,uE=y_(Na.keys,Na),bl=yl.max,Dl=yl.min,Gx=ns.now,Kx=ii.parseInt,Zx=yl.random,xC=dg.reverse,C_=Eg(ii,"DataView"),gg=Eg(ii,"Map"),S_=Eg(ii,"Promise"),vf=Eg(ii,"Set"),mg=Eg(ii,"WeakMap"),yg=Eg(Na,"create"),M_=mg&&new mg,Nh={},Xx=Cg(C_),dE=Cg(gg),hE=Cg(S_),Jx=Cg(vf),D_=Cg(mg),bp=mf?mf.prototype:x,xp=bp?bp.valueOf:x,Qx=bp?bp.toString:x;function jn(z){if(Al(z)&&!Eo(z)&&!(z instanceof $o)){if(z instanceof ku)return z;if(ma.call(z,"__wrapped__"))return vS(z)}return new ku(z)}var _f=function(){function z(){}return function(le){if(!xl(le))return{};if(oE)return oE(le);z.prototype=le;var Be=new z;return z.prototype=x,Be}}();function B1(){}function ku(z,le){this.__wrapped__=z,this.__actions__=[],this.__chain__=!!le,this.__index__=0,this.__values__=x}function $o(z){this.__wrapped__=z,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=xd,this.__views__=[]}function bf(z){var le=-1,Be=null==z?0:z.length;for(this.clear();++le<Be;){var Nt=z[le];this.set(Nt[0],Nt[1])}}function Fh(z){var le=-1,Be=null==z?0:z.length;for(this.clear();++le<Be;){var Nt=z[le];this.set(Nt[0],Nt[1])}}function kc(z){var le=-1,Be=null==z?0:z.length;for(this.clear();++le<Be;){var Nt=z[le];this.set(Nt[0],Nt[1])}}function Xd(z){var le=-1,Be=null==z?0:z.length;for(this.__data__=new kc;++le<Be;)this.add(z[le])}function Ed(z){var le=this.__data__=new Fh(z);this.size=le.size}function rw(z,le){var Be=Eo(z),Nt=!Be&&Sg(z),Cn=!Be&&!Nt&&Mp(z),Kn=!Be&&!Nt&&!Cn&&J1(z),fr=Be||Nt||Cn||Kn,Cr=fr?cg(z.length,__):[],Fr=Cr.length;for(var di in z)(le||ma.call(z,di))&&(!fr||!("length"==di||Cn&&("offset"==di||"parent"==di)||Kn&&("buffer"==di||"byteLength"==di||"byteOffset"==di)||Sf(di,Fr)))&&Cr.push(di);return Cr}function iw(z){var le=z.length;return le?z[SE(0,le-1)]:x}function sw(z,le){return bw(Pu(z),xf(le,0,z.length))}function ow(z){return bw(Pu(z))}function Y1(z,le,Be){(Be!==x&&!Qd(z[le],Be)||Be===x&&!(le in z))&&Cd(z,le,Be)}function vg(z,le,Be){var Nt=z[le];(!ma.call(z,le)||!Qd(Nt,Be)||Be===x&&!(le in z))&&Cd(z,le,Be)}function U1(z,le){for(var Be=z.length;Be--;)if(Qd(z[Be][0],le))return Be;return-1}function aw(z,le,Be,Nt){return wf(z,function(Cn,Kn,fr){le(Nt,Cn,Be(Cn),fr)}),Nt}function V1(z,le){return z&&jh(le,mc(le),z)}function Cd(z,le,Be){"__proto__"==le&&_p?_p(z,le,{configurable:!0,enumerable:!0,value:Be,writable:!0}):z[le]=Be}function _g(z,le){for(var Be=-1,Nt=le.length,Cn=Jr(Nt),Kn=null==z;++Be<Nt;)Cn[Be]=Kn?x:XE(z,le[Be]);return Cn}function xf(z,le,Be){return z==z&&(Be!==x&&(z=z<=Be?z:Be),le!==x&&(z=z>=le?z:le)),z}function Ou(z,le,Be,Nt,Cn,Kn){var fr,Cr=1&le,Fr=2&le,di=4&le;if(Be&&(fr=Cn?Be(z,Nt,Cn,Kn):Be(z)),fr!==x)return fr;if(!xl(z))return z;var hi=Eo(z);if(hi){if(fr=function D3(z){var le=z.length,Be=new z.constructor(le);return le&&"string"==typeof z[0]&&ma.call(z,"index")&&(Be.index=z.index,Be.input=z.input),Be}(z),!Cr)return Pu(z,fr)}else{var yi=Vc(z),Vi=yi==$0||yi==Bv;if(Mp(z))return WC(z,Cr);if(yi==qu||yi==hp||Vi&&!Cn){if(fr=Fr||Vi?{}:cS(z),!Cr)return Fr?function m3(z,le){return jh(z,aS(z),le)}(z,function IC(z,le){return z&&jh(le,Ru(le),z)}(fr,z)):function g3(z,le){return jh(z,jE(z),le)}(z,V1(fr,z))}else{if(!wa[yi])return Cn?z:{};fr=function A3(z,le,Be){var Nt=z.constructor;switch(le){case J0:return OE(z);case fp:case z0:return new Nt(+z);case hf:return function d3(z,le){var Be=le?OE(z.buffer):z.buffer;return new z.constructor(Be,z.byteOffset,z.byteLength)}(z,Be);case g1:case m1:case jv:case Q0:case y1:case Hv:case Yv:case q0:case eg:return zC(z,Be);case Qu:return new Nt;case G0:case Z0:return new Nt(z);case K0:return function h3(z){var le=new z.constructor(z.source,Vv.exec(z));return le.lastIndex=z.lastIndex,le}(z);case ed:return new Nt;case p1:return function f3(z){return xp?Na(xp.call(z)):{}}(z)}}(z,yi,Cr)}}Kn||(Kn=new Ed);var ms=Kn.get(z);if(ms)return ms;Kn.set(z,fr),BS(z)?z.forEach(function(Gs){fr.add(Ou(Gs,le,Be,Gs,z,Kn))}):NS(z)&&z.forEach(function(Gs,Go){fr.set(Go,Ou(Gs,le,Be,Go,z,Kn))});var Oo=hi?x:(di?Fr?NE:RE:Fr?Ru:mc)(z);return lu(Oo||z,function(Gs,Go){Oo&&(Gs=z[Go=Gs]),vg(fr,Go,Ou(Gs,le,Be,Go,z,Kn))}),fr}function xE(z,le,Be){var Nt=Be.length;if(null==z)return!Nt;for(z=Na(z);Nt--;){var Cn=Be[Nt],fr=z[Cn];if(fr===x&&!(Cn in z)||!(0,le[Cn])(fr))return!1}return!0}function lw(z,le,Be){if("function"!=typeof z)throw new uu(Ye);return F_(function(){z.apply(x,Be)},le)}function bg(z,le,Be,Nt){var Cn=-1,Kn=ag,fr=!0,Cr=z.length,Fr=[],di=le.length;if(!Cr)return Fr;Be&&(le=rl(le,cu(Be))),Nt?(Kn=D1,fr=!1):le.length>=200&&(Kn=Ph,fr=!1,le=new Xd(le));e:for(;++Cn<Cr;){var hi=z[Cn],yi=null==Be?hi:Be(hi);if(hi=Nt||0!==hi?hi:0,fr&&yi==yi){for(var Vi=di;Vi--;)if(le[Vi]===yi)continue e;Fr.push(hi)}else Kn(le,yi,Nt)||Fr.push(hi)}return Fr}jn.templateSettings={escape:A2,evaluate:ox,interpolate:ax,variable:"",imports:{_:jn}},(jn.prototype=B1.prototype).constructor=jn,(ku.prototype=_f(B1.prototype)).constructor=ku,($o.prototype=_f(B1.prototype)).constructor=$o,bf.prototype.clear=function pE(){this.__data__=yg?yg(null):{},this.size=0},bf.prototype.delete=function EC(z){var le=this.has(z)&&delete this.__data__[z];return this.size-=le?1:0,le},bf.prototype.get=function CC(z){var le=this.__data__;if(yg){var Be=le[z];return Be===Jn?x:Be}return ma.call(le,z)?le[z]:x},bf.prototype.has=function SC(z){var le=this.__data__;return yg?le[z]!==x:ma.call(le,z)},bf.prototype.set=function MC(z,le){var Be=this.__data__;return this.size+=this.has(z)?0:1,Be[z]=yg&&le===x?Jn:le,this},Fh.prototype.clear=function gE(){this.__data__=[],this.size=0},Fh.prototype.delete=function j1(z){var le=this.__data__,Be=U1(le,z);return!(Be<0||(Be==le.length-1?le.pop():vp.call(le,Be,1),--this.size,0))},Fh.prototype.get=function mE(z){var le=this.__data__,Be=U1(le,z);return Be<0?x:le[Be][1]},Fh.prototype.has=function yE(z){return U1(this.__data__,z)>-1},Fh.prototype.set=function ew(z,le){var Be=this.__data__,Nt=U1(Be,z);return Nt<0?(++this.size,Be.push([z,le])):Be[Nt][1]=le,this},kc.prototype.clear=function tw(){this.size=0,this.__data__={hash:new bf,map:new(gg||Fh),string:new bf}},kc.prototype.delete=function A_(z){var le=_w(this,z).delete(z);return this.size-=le?1:0,le},kc.prototype.get=function T_(z){return _w(this,z).get(z)},kc.prototype.has=function vE(z){return _w(this,z).has(z)},kc.prototype.set=function I_(z,le){var Be=_w(this,z),Nt=Be.size;return Be.set(z,le),this.size+=Be.size==Nt?0:1,this},Xd.prototype.add=Xd.prototype.push=function H1(z){return this.__data__.set(z,Jn),this},Xd.prototype.has=function DC(z){return this.__data__.has(z)},Ed.prototype.clear=function AC(){this.__data__=new Fh,this.size=0},Ed.prototype.delete=function TC(z){var le=this.__data__,Be=le.delete(z);return this.size=le.size,Be},Ed.prototype.get=function nw(z){return this.__data__.get(z)},Ed.prototype.has=function _E(z){return this.__data__.has(z)},Ed.prototype.set=function bE(z,le){var Be=this.__data__;if(Be instanceof Fh){var Nt=Be.__data__;if(!gg||Nt.length<199)return Nt.push([z,le]),this.size=++Be.size,this;Be=this.__data__=new kc(Nt)}return Be.set(z,le),this.size=Be.size,this};var wf=ZC(Jd),wE=ZC(h,!0);function OC(z,le){var Be=!0;return wf(z,function(Nt,Cn,Kn){return Be=!!le(Nt,Cn,Kn)}),Be}function k_(z,le,Be){for(var Nt=-1,Cn=z.length;++Nt<Cn;){var Kn=z[Nt],fr=le(Kn);if(null!=fr&&(Cr===x?fr==fr&&!nd(fr):Be(fr,Cr)))var Cr=fr,Fr=Kn}return Fr}function cw(z,le){var Be=[];return wf(z,function(Nt,Cn,Kn){le(Nt,Cn,Kn)&&Be.push(Nt)}),Be}function gc(z,le,Be,Nt,Cn){var Kn=-1,fr=z.length;for(Be||(Be=I3),Cn||(Cn=[]);++Kn<fr;){var Cr=z[Kn];le>0&&Be(Cr)?le>1?gc(Cr,le-1,Be,Nt,Cn):Zd(Cn,Cr):Nt||(Cn[Cn.length]=Cr)}return Cn}var uw=XC(),EE=XC(!0);function Jd(z,le){return z&&uw(z,le,mc)}function h(z,le){return z&&EE(z,le,mc)}function m(z,le){return Ih(le,function(Be){return Mf(z[Be])})}function S(z,le){for(var Be=0,Nt=(le=Cp(le,z)).length;null!=z&&Be<Nt;)z=z[Hh(le[Be++])];return Be&&Be==Nt?z:x}function $(z,le,Be){var Nt=le(z);return Eo(z)?Nt:Zd(Nt,Be(z))}function se(z){return null==z?z===x?"[object Undefined]":"[object Null]":yf&&yf in Na(z)?function C3(z){var le=ma.call(z,yf),Be=z[yf];try{z[yf]=x;var Nt=!0}catch{}var Cn=R1.call(z);return Nt&&(le?z[yf]=Be:delete z[yf]),Cn}(z):function F3(z){return R1.call(z)}(z)}function Me(z,le){return z>le}function Ue(z,le){return null!=z&&ma.call(z,le)}function pt(z,le){return null!=z&&le in Na(z)}function hn(z,le,Be){for(var Nt=Be?D1:ag,Cn=z[0].length,Kn=z.length,fr=Kn,Cr=Jr(Kn),Fr=1/0,di=[];fr--;){var hi=z[fr];fr&&le&&(hi=rl(hi,cu(le))),Fr=Dl(hi.length,Fr),Cr[fr]=!Be&&(le||Cn>=120&&hi.length>=120)?new Xd(fr&&hi):x}hi=z[0];var yi=-1,Vi=Cr[0];e:for(;++yi<Cn&&di.length<Fr;){var ms=hi[yi],$s=le?le(ms):ms;if(ms=Be||0!==ms?ms:0,!(Vi?Ph(Vi,$s):Nt(di,$s,Be))){for(fr=Kn;--fr;){var Oo=Cr[fr];if(!(Oo?Ph(Oo,$s):Nt(z[fr],$s,Be)))continue e}Vi&&Vi.push($s),di.push(ms)}}return di}function qn(z,le,Be){var Nt=null==(z=fS(z,le=Cp(le,z)))?z:z[Hh(Md(le))];return null==Nt?x:Ac(Nt,z,Be)}function yr(z){return Al(z)&&se(z)==hp}function wi(z,le,Be,Nt,Cn){return z===le||(null==z||null==le||!Al(z)&&!Al(le)?z!=z&&le!=le:function Oi(z,le,Be,Nt,Cn,Kn){var fr=Eo(z),Cr=Eo(le),Fr=fr?W0:Vc(z),di=Cr?W0:Vc(le),hi=(Fr=Fr==hp?qu:Fr)==qu,yi=(di=di==hp?qu:di)==qu,Vi=Fr==di;if(Vi&&Mp(z)){if(!Mp(le))return!1;fr=!0,hi=!1}if(Vi&&!hi)return Kn||(Kn=new Ed),fr||J1(z)?oS(z,le,Be,Nt,Cn,Kn):function w3(z,le,Be,Nt,Cn,Kn,fr){switch(Be){case hf:if(z.byteLength!=le.byteLength||z.byteOffset!=le.byteOffset)return!1;z=z.buffer,le=le.buffer;case J0:return!(z.byteLength!=le.byteLength||!Kn(new N1(z),new N1(le)));case fp:case z0:case G0:return Qd(+z,+le);case f1:return z.name==le.name&&z.message==le.message;case K0:case Z0:return z==le+"";case Qu:var Cr=k1;case ed:if(Cr||(Cr=O1),z.size!=le.size&&!(1&Nt))return!1;var di=fr.get(z);if(di)return di==le;Nt|=2,fr.set(z,le);var hi=oS(Cr(z),Cr(le),Nt,Cn,Kn,fr);return fr.delete(z),hi;case p1:if(xp)return xp.call(z)==xp.call(le)}return!1}(z,le,Fr,Be,Nt,Cn,Kn);if(!(1&Be)){var ms=hi&&ma.call(z,"__wrapped__"),$s=yi&&ma.call(le,"__wrapped__");if(ms||$s){var Oo=ms?z.value():z,Gs=$s?le.value():le;return Kn||(Kn=new Ed),Cn(Oo,Gs,Be,Nt,Kn)}}return!!Vi&&(Kn||(Kn=new Ed),function E3(z,le,Be,Nt,Cn,Kn){var fr=1&Be,Cr=RE(z),Fr=Cr.length;if(Fr!=RE(le).length&&!fr)return!1;for(var yi=Fr;yi--;){var Vi=Cr[yi];if(!(fr?Vi in le:ma.call(le,Vi)))return!1}var ms=Kn.get(z),$s=Kn.get(le);if(ms&&$s)return ms==le&&$s==z;var Oo=!0;Kn.set(z,le),Kn.set(le,z);for(var Gs=fr;++yi<Fr;){var Go=z[Vi=Cr[yi]],ta=le[Vi];if(Nt)var rd=fr?Nt(ta,Go,Vi,le,z,Kn):Nt(Go,ta,Vi,z,le,Kn);if(!(rd===x?Go===ta||Cn(Go,ta,Be,Nt,Kn):rd)){Oo=!1;break}Gs||(Gs="constructor"==Vi)}if(Oo&&!Gs){var fu=z.constructor,id=le.constructor;fu!=id&&"constructor"in z&&"constructor"in le&&!("function"==typeof fu&&fu instanceof fu&&"function"==typeof id&&id instanceof id)&&(Oo=!1)}return Kn.delete(z),Kn.delete(le),Oo}(z,le,Be,Nt,Cn,Kn))}(z,le,Be,Nt,wi,Cn))}function ui(z,le,Be,Nt){var Cn=Be.length,Kn=Cn,fr=!Nt;if(null==z)return!Kn;for(z=Na(z);Cn--;){var Cr=Be[Cn];if(fr&&Cr[2]?Cr[1]!==z[Cr[0]]:!(Cr[0]in z))return!1}for(;++Cn<Kn;){var Fr=(Cr=Be[Cn])[0],di=z[Fr],hi=Cr[1];if(fr&&Cr[2]){if(di===x&&!(Fr in z))return!1}else{var yi=new Ed;if(Nt)var Vi=Nt(di,hi,Fr,z,le,yi);if(!(Vi===x?wi(hi,di,3,Nt,yi):Vi))return!1}}return!0}function ws(z){return!(!xl(z)||function O3(z){return!!Yx&&Yx in z}(z))&&(Mf(z)?bC:_1).test(Cg(z))}function Bh(z){return"function"==typeof z?z:null==z?Nu:"object"==typeof z?Eo(z)?$1(z[0],z[1]):z1(z):JS(z)}function xg(z){if(!N_(z))return uE(z);var le=[];for(var Be in Na(z))ma.call(z,Be)&&"constructor"!=Be&&le.push(Be);return le}function wg(z,le){return z<le}function W1(z,le){var Be=-1,Nt=Lu(z)?Jr(z.length):[];return wf(z,function(Cn,Kn,fr){Nt[++Be]=le(Cn,Kn,fr)}),Nt}function z1(z){var le=BE(z);return 1==le.length&&le[0][2]?dS(le[0][0],le[0][1]):function(Be){return Be===z||ui(Be,z,le)}}function $1(z,le){return HE(z)&&uS(le)?dS(Hh(z),le):function(Be){var Nt=XE(Be,z);return Nt===x&&Nt===le?JE(Be,z):wi(le,Nt,3)}}function wp(z,le,Be,Nt,Cn){z!==le&&uw(le,function(Kn,fr){if(Cn||(Cn=new Ed),xl(Kn))!function P_(z,le,Be,Nt,Cn,Kn,fr){var Cr=UE(z,Be),Fr=UE(le,Be),di=fr.get(Fr);if(di)Y1(z,Be,di);else{var hi=Kn?Kn(Cr,Fr,Be+"",z,le,fr):x,yi=hi===x;if(yi){var Vi=Eo(Fr),ms=!Vi&&Mp(Fr),$s=!Vi&&!ms&&J1(Fr);hi=Fr,Vi||ms||$s?Eo(Cr)?hi=Cr:Nl(Cr)?hi=Pu(Cr):ms?(yi=!1,hi=WC(Fr,!0)):$s?(yi=!1,hi=zC(Fr,!0)):hi=[]:B_(Fr)||Sg(Fr)?(hi=Cr,Sg(Cr)?hi=YS(Cr):(!xl(Cr)||Mf(Cr))&&(hi=cS(Fr))):yi=!1}yi&&(fr.set(Fr,hi),Cn(hi,Fr,Nt,Kn,fr),fr.delete(Fr)),Y1(z,Be,hi)}}(z,le,fr,Be,wp,Nt,Cn);else{var Cr=Nt?Nt(UE(z,fr),Kn,fr+"",z,le,Cn):x;Cr===x&&(Cr=Kn),Y1(z,fr,Cr)}},Ru)}function G1(z,le){var Be=z.length;if(Be)return Sf(le+=le<0?Be:0,Be)?z[le]:x}function LC(z,le,Be){le=le.length?rl(le,function(Kn){return Eo(Kn)?function(fr){return S(fr,1===Kn.length?Kn[0]:Kn)}:Kn}):[Nu];var Nt=-1;return le=rl(le,cu(Vs())),function Rx(Rr,ii){var Jr=Rr.length;for(Rr.sort(ii);Jr--;)Rr[Jr]=Rr[Jr].value;return Rr}(W1(z,function(Kn,fr,Cr){return{criteria:rl(le,function(di){return di(Kn)}),index:++Nt,value:Kn}}),function(Kn,fr){return function p3(z,le,Be){for(var Nt=-1,Cn=z.criteria,Kn=le.criteria,fr=Cn.length,Cr=Be.length;++Nt<fr;){var Fr=$C(Cn[Nt],Kn[Nt]);if(Fr)return Nt>=Cr?Fr:Fr*("desc"==Be[Nt]?-1:1)}return z.index-le.index}(Kn,fr,Be)})}function RC(z,le,Be){for(var Nt=-1,Cn=le.length,Kn={};++Nt<Cn;){var fr=le[Nt],Cr=S(z,fr);Be(Cr,fr)&&L_(Kn,Cp(fr,z),Cr)}return Kn}function CE(z,le,Be,Nt){var Cn=Nt?Q2:Oh,Kn=-1,fr=le.length,Cr=z;for(z===le&&(le=Pu(le)),Be&&(Cr=rl(z,cu(Be)));++Kn<fr;)for(var Fr=0,di=le[Kn],hi=Be?Be(di):di;(Fr=Cn(Cr,hi,Fr,Nt))>-1;)Cr!==z&&vp.call(Cr,Fr,1),vp.call(z,Fr,1);return z}function NC(z,le){for(var Be=z?le.length:0,Nt=Be-1;Be--;){var Cn=le[Be];if(Be==Nt||Cn!==Kn){var Kn=Cn;Sf(Cn)?vp.call(z,Cn,1):AE(z,Cn)}}return z}function SE(z,le){return z+pg(Zx()*(le-z+1))}function ME(z,le){var Be="";if(!z||le<1||le>Ah)return Be;do{le%2&&(Be+=z),(le=pg(le/2))&&(z+=z)}while(le);return Be}function Fo(z,le){return VE(hS(z,le,Nu),z+"")}function s3(z){return iw(Q1(z))}function o3(z,le){var Be=Q1(z);return bw(Be,xf(le,0,Be.length))}function L_(z,le,Be,Nt){if(!xl(z))return z;for(var Cn=-1,Kn=(le=Cp(le,z)).length,fr=Kn-1,Cr=z;null!=Cr&&++Cn<Kn;){var Fr=Hh(le[Cn]),di=Be;if("__proto__"===Fr||"constructor"===Fr||"prototype"===Fr)return z;if(Cn!=fr){var hi=Cr[Fr];(di=Nt?Nt(hi,Fr,Cr):x)===x&&(di=xl(hi)?hi:Sf(le[Cn+1])?[]:{})}vg(Cr,Fr,di),Cr=Cr[Fr]}return z}var FC=M_?function(z,le){return M_.set(z,le),z}:Nu,a3=_p?function(z,le){return _p(z,"toString",{configurable:!0,enumerable:!1,value:qE(le),writable:!0})}:Nu;function l3(z){return bw(Q1(z))}function Sd(z,le,Be){var Nt=-1,Cn=z.length;le<0&&(le=-le>Cn?0:Cn+le),(Be=Be>Cn?Cn:Be)<0&&(Be+=Cn),Cn=le>Be?0:Be-le>>>0,le>>>=0;for(var Kn=Jr(Cn);++Nt<Cn;)Kn[Nt]=z[Nt+le];return Kn}function c3(z,le){var Be;return wf(z,function(Nt,Cn,Kn){return!(Be=le(Nt,Cn,Kn))}),!!Be}function dw(z,le,Be){var Nt=0,Cn=null==z?Nt:z.length;if("number"==typeof le&&le==le&&Cn<=2147483647){for(;Nt<Cn;){var Kn=Nt+Cn>>>1,fr=z[Kn];null!==fr&&!nd(fr)&&(Be?fr<=le:fr<le)?Nt=Kn+1:Cn=Kn}return Cn}return DE(z,le,Nu,Be)}function DE(z,le,Be,Nt){var Cn=0,Kn=null==z?0:z.length;if(0===Kn)return 0;for(var fr=(le=Be(le))!=le,Cr=null===le,Fr=nd(le),di=le===x;Cn<Kn;){var hi=pg((Cn+Kn)/2),yi=Be(z[hi]),Vi=yi!==x,ms=null===yi,$s=yi==yi,Oo=nd(yi);if(fr)var Gs=Nt||$s;else Gs=di?$s&&(Nt||Vi):Cr?$s&&Vi&&(Nt||!ms):Fr?$s&&Vi&&!ms&&(Nt||!Oo):!ms&&!Oo&&(Nt?yi<=le:yi<le);Gs?Cn=hi+1:Kn=hi}return Dl(Kn,4294967294)}function BC(z,le){for(var Be=-1,Nt=z.length,Cn=0,Kn=[];++Be<Nt;){var fr=z[Be],Cr=le?le(fr):fr;if(!Be||!Qd(Cr,Fr)){var Fr=Cr;Kn[Cn++]=0===fr?0:fr}}return Kn}function jC(z){return"number"==typeof z?z:nd(z)?NaN:+z}function td(z){if("string"==typeof z)return z;if(Eo(z))return rl(z,td)+"";if(nd(z))return Qx?Qx.call(z):"";var le=z+"";return"0"==le&&1/z==-df?"-0":le}function Ep(z,le,Be){var Nt=-1,Cn=ag,Kn=z.length,fr=!0,Cr=[],Fr=Cr;if(Be)fr=!1,Cn=D1;else if(Kn>=200){var di=le?null:b3(z);if(di)return O1(di);fr=!1,Cn=Ph,Fr=new Xd}else Fr=le?[]:Cr;e:for(;++Nt<Kn;){var hi=z[Nt],yi=le?le(hi):hi;if(hi=Be||0!==hi?hi:0,fr&&yi==yi){for(var Vi=Fr.length;Vi--;)if(Fr[Vi]===yi)continue e;le&&Fr.push(yi),Cr.push(hi)}else Cn(Fr,yi,Be)||(Fr!==Cr&&Fr.push(yi),Cr.push(hi))}return Cr}function AE(z,le){return null==(z=fS(z,le=Cp(le,z)))||delete z[Hh(Md(le))]}function HC(z,le,Be,Nt){return L_(z,le,Be(S(z,le)),Nt)}function hw(z,le,Be,Nt){for(var Cn=z.length,Kn=Nt?Cn:-1;(Nt?Kn--:++Kn<Cn)&&le(z[Kn],Kn,z););return Be?Sd(z,Nt?0:Kn,Nt?Kn+1:Cn):Sd(z,Nt?Kn+1:0,Nt?Cn:Kn)}function YC(z,le){var Be=z;return Be instanceof $o&&(Be=Be.value()),A1(le,function(Nt,Cn){return Cn.func.apply(Cn.thisArg,Zd([Nt],Cn.args))},Be)}function TE(z,le,Be){var Nt=z.length;if(Nt<2)return Nt?Ep(z[0]):[];for(var Cn=-1,Kn=Jr(Nt);++Cn<Nt;)for(var fr=z[Cn],Cr=-1;++Cr<Nt;)Cr!=Cn&&(Kn[Cn]=bg(Kn[Cn]||fr,z[Cr],le,Be));return Ep(gc(Kn,1),le,Be)}function UC(z,le,Be){for(var Nt=-1,Cn=z.length,Kn=le.length,fr={};++Nt<Cn;)Be(fr,z[Nt],Nt<Kn?le[Nt]:x);return fr}function IE(z){return Nl(z)?z:[]}function kE(z){return"function"==typeof z?z:Nu}function Cp(z,le){return Eo(z)?z:HE(z,le)?[z]:yS(Ma(z))}var u3=Fo;function Sp(z,le,Be){var Nt=z.length;return Be=Be===x?Nt:Be,!le&&Be>=Nt?z:Sd(z,le,Be)}var VC=aE||function(z){return lc.clearTimeout(z)};function WC(z,le){if(le)return z.slice();var Be=z.length,Nt=Ux?Ux(Be):new z.constructor(Be);return z.copy(Nt),Nt}function OE(z){var le=new z.constructor(z.byteLength);return new N1(le).set(new N1(z)),le}function zC(z,le){var Be=le?OE(z.buffer):z.buffer;return new z.constructor(Be,z.byteOffset,z.length)}function $C(z,le){if(z!==le){var Be=z!==x,Nt=null===z,Cn=z==z,Kn=nd(z),fr=le!==x,Cr=null===le,Fr=le==le,di=nd(le);if(!Cr&&!di&&!Kn&&z>le||Kn&&fr&&Fr&&!Cr&&!di||Nt&&fr&&Fr||!Be&&Fr||!Cn)return 1;if(!Nt&&!Kn&&!di&&z<le||di&&Be&&Cn&&!Nt&&!Kn||Cr&&Be&&Cn||!fr&&Cn||!Fr)return-1}return 0}function GC(z,le,Be,Nt){for(var Cn=-1,Kn=z.length,fr=Be.length,Cr=-1,Fr=le.length,di=bl(Kn-fr,0),hi=Jr(Fr+di),yi=!Nt;++Cr<Fr;)hi[Cr]=le[Cr];for(;++Cn<fr;)(yi||Cn<Kn)&&(hi[Be[Cn]]=z[Cn]);for(;di--;)hi[Cr++]=z[Cn++];return hi}function KC(z,le,Be,Nt){for(var Cn=-1,Kn=z.length,fr=-1,Cr=Be.length,Fr=-1,di=le.length,hi=bl(Kn-Cr,0),yi=Jr(hi+di),Vi=!Nt;++Cn<hi;)yi[Cn]=z[Cn];for(var ms=Cn;++Fr<di;)yi[ms+Fr]=le[Fr];for(;++fr<Cr;)(Vi||Cn<Kn)&&(yi[ms+Be[fr]]=z[Cn++]);return yi}function Pu(z,le){var Be=-1,Nt=z.length;for(le||(le=Jr(Nt));++Be<Nt;)le[Be]=z[Be];return le}function jh(z,le,Be,Nt){var Cn=!Be;Be||(Be={});for(var Kn=-1,fr=le.length;++Kn<fr;){var Cr=le[Kn],Fr=Nt?Nt(Be[Cr],z[Cr],Cr,Be,z):x;Fr===x&&(Fr=z[Cr]),Cn?Cd(Be,Cr,Fr):vg(Be,Cr,Fr)}return Be}function fw(z,le){return function(Be,Nt){var Cn=Eo(Be)?Ox:aw,Kn=le?le():{};return Cn(Be,z,Vs(Nt,2),Kn)}}function K1(z){return Fo(function(le,Be){var Nt=-1,Cn=Be.length,Kn=Cn>1?Be[Cn-1]:x,fr=Cn>2?Be[2]:x;for(Kn=z.length>3&&"function"==typeof Kn?(Cn--,Kn):x,fr&&hu(Be[0],Be[1],fr)&&(Kn=Cn<3?x:Kn,Cn=1),le=Na(le);++Nt<Cn;){var Cr=Be[Nt];Cr&&z(le,Cr,Nt,Kn)}return le})}function ZC(z,le){return function(Be,Nt){if(null==Be)return Be;if(!Lu(Be))return z(Be,Nt);for(var Cn=Be.length,Kn=le?Cn:-1,fr=Na(Be);(le?Kn--:++Kn<Cn)&&!1!==Nt(fr[Kn],Kn,fr););return Be}}function XC(z){return function(le,Be,Nt){for(var Cn=-1,Kn=Na(le),fr=Nt(le),Cr=fr.length;Cr--;){var Fr=fr[z?Cr:++Cn];if(!1===Be(Kn[Fr],Fr,Kn))break}return le}}function JC(z){return function(le){var Be=pf(le=Ma(le))?Iu(le):x,Nt=Be?Be[0]:le.charAt(0),Cn=Be?Sp(Be,1).join(""):le.slice(1);return Nt[z]()+Cn}}function Z1(z){return function(le){return A1(ZS(KS(le).replace(V2,"")),z,"")}}function R_(z){return function(){var le=arguments;switch(le.length){case 0:return new z;case 1:return new z(le[0]);case 2:return new z(le[0],le[1]);case 3:return new z(le[0],le[1],le[2]);case 4:return new z(le[0],le[1],le[2],le[3]);case 5:return new z(le[0],le[1],le[2],le[3],le[4]);case 6:return new z(le[0],le[1],le[2],le[3],le[4],le[5]);case 7:return new z(le[0],le[1],le[2],le[3],le[4],le[5],le[6])}var Be=_f(z.prototype),Nt=z.apply(Be,le);return xl(Nt)?Nt:Be}}function QC(z){return function(le,Be,Nt){var Cn=Na(le);if(!Lu(le)){var Kn=Vs(Be,3);le=mc(le),Be=function(Cr){return Kn(Cn[Cr],Cr,Cn)}}var fr=z(le,Be,Nt);return fr>-1?Cn[Kn?le[fr]:fr]:x}}function qC(z){return Cf(function(le){var Be=le.length,Nt=Be,Cn=ku.prototype.thru;for(z&&le.reverse();Nt--;){var Kn=le[Nt];if("function"!=typeof Kn)throw new uu(Ye);if(Cn&&!fr&&"wrapper"==vw(Kn))var fr=new ku([],!0)}for(Nt=fr?Nt:Be;++Nt<Be;){var Cr=vw(Kn=le[Nt]),Fr="wrapper"==Cr?FE(Kn):x;fr=Fr&&YE(Fr[0])&&424==Fr[1]&&!Fr[4].length&&1==Fr[9]?fr[vw(Fr[0])].apply(fr,Fr[3]):1==Kn.length&&YE(Kn)?fr[Cr]():fr.thru(Kn)}return function(){var di=arguments,hi=di[0];if(fr&&1==di.length&&Eo(hi))return fr.plant(hi).value();for(var yi=0,Vi=Be?le[yi].apply(this,di):hi;++yi<Be;)Vi=le[yi].call(this,Vi);return Vi}})}function pw(z,le,Be,Nt,Cn,Kn,fr,Cr,Fr,di){var hi=128&le,yi=1&le,Vi=2&le,ms=24&le,$s=512&le,Oo=Vi?x:R_(z);return function Gs(){for(var Go=arguments.length,ta=Jr(Go),rd=Go;rd--;)ta[rd]=arguments[rd];if(ms)var fu=X1(Gs),id=g_(ta,fu);if(Nt&&(ta=GC(ta,Nt,Cn,ms)),Kn&&(ta=KC(ta,Kn,fr,ms)),Go-=id,ms&&Go<di){var Fl=Lh(ta,fu);return nS(z,le,pw,Gs.placeholder,Be,ta,Fl,Cr,Fr,di-Go)}var qd=yi?Be:this,Af=Vi?qd[z]:z;return Go=ta.length,Cr?ta=B3(ta,Cr):$s&&Go>1&&ta.reverse(),hi&&Fr<Go&&(ta.length=Fr),this&&this!==lc&&this instanceof Gs&&(Af=Oo||R_(Af)),Af.apply(qd,ta)}}function eS(z,le){return function(Be,Nt){return function Tn(z,le,Be,Nt){return Jd(z,function(Cn,Kn,fr){le(Nt,Be(Cn),Kn,fr)}),Nt}(Be,z,le(Nt),{})}}function gw(z,le){return function(Be,Nt){var Cn;if(Be===x&&Nt===x)return le;if(Be!==x&&(Cn=Be),Nt!==x){if(Cn===x)return Nt;"string"==typeof Be||"string"==typeof Nt?(Be=td(Be),Nt=td(Nt)):(Be=jC(Be),Nt=jC(Nt)),Cn=z(Be,Nt)}return Cn}}function PE(z){return Cf(function(le){return le=rl(le,cu(Vs())),Fo(function(Be){var Nt=this;return z(le,function(Cn){return Ac(Cn,Nt,Be)})})})}function mw(z,le){var Be=(le=le===x?" ":td(le)).length;if(Be<2)return Be?ME(le,z):le;var Nt=ME(le,fg(z/gf(le)));return pf(le)?Sp(Iu(Nt),0,z).join(""):Nt.slice(0,z)}function tS(z){return function(le,Be,Nt){return Nt&&"number"!=typeof Nt&&hu(le,Be,Nt)&&(Be=Nt=x),le=Df(le),Be===x?(Be=le,le=0):Be=Df(Be),function r3(z,le,Be,Nt){for(var Cn=-1,Kn=bl(fg((le-z)/(Be||1)),0),fr=Jr(Kn);Kn--;)fr[Nt?Kn:++Cn]=z,z+=Be;return fr}(le,Be,Nt=Nt===x?le<Be?1:-1:Df(Nt),z)}}function yw(z){return function(le,Be){return"string"==typeof le&&"string"==typeof Be||(le=Dd(le),Be=Dd(Be)),z(le,Be)}}function nS(z,le,Be,Nt,Cn,Kn,fr,Cr,Fr,di){var hi=8&le;le|=hi?32:64,4&(le&=~(hi?64:32))||(le&=-4);var Oo=[z,le,Cn,hi?Kn:x,hi?fr:x,hi?x:Kn,hi?x:fr,Cr,Fr,di],Gs=Be.apply(x,Oo);return YE(z)&&pS(Gs,Oo),Gs.placeholder=Nt,gS(Gs,z,le)}function LE(z){var le=yl[z];return function(Be,Nt){if(Be=Dd(Be),(Nt=null==Nt?0:Dl(Do(Nt),292))&&$x(Be)){var Cn=(Ma(Be)+"e").split("e");return+((Cn=(Ma(le(Cn[0]+"e"+(+Cn[1]+Nt)))+"e").split("e"))[0]+"e"+(+Cn[1]-Nt))}return le(Be)}}var b3=vf&&1/O1(new vf([,-0]))[1]==df?function(z){return new vf(z)}:nC;function rS(z){return function(le){var Be=Vc(le);return Be==Qu?k1(le):Be==ed?function Bx(Rr){var ii=-1,Jr=Array(Rr.size);return Rr.forEach(function(ns){Jr[++ii]=[ns,ns]}),Jr}(le):function pC(Rr,ii){return rl(ii,function(Jr){return[Jr,Rr[Jr]]})}(le,z(le))}}function Ef(z,le,Be,Nt,Cn,Kn,fr,Cr){var Fr=2&le;if(!Fr&&"function"!=typeof z)throw new uu(Ye);var di=Nt?Nt.length:0;if(di||(le&=-97,Nt=Cn=x),fr=fr===x?fr:bl(Do(fr),0),Cr=Cr===x?Cr:Do(Cr),di-=Cn?Cn.length:0,64&le){var hi=Nt,yi=Cn;Nt=Cn=x}var Vi=Fr?x:FE(z),ms=[z,le,Be,Nt,Cn,hi,yi,Kn,fr,Cr];if(Vi&&function R3(z,le){var Be=z[1],Nt=le[1],Cn=Be|Nt;if(!(Cn<131||(128==Nt&&8==Be||128==Nt&&256==Be&&z[7].length<=le[8]||384==Nt&&le[7].length<=le[8]&&8==Be)))return z;1&Nt&&(z[2]=le[2],Cn|=1&Be?0:4);var Cr=le[3];if(Cr){var Fr=z[3];z[3]=Fr?GC(Fr,Cr,le[4]):Cr,z[4]=Fr?Lh(z[3],ar):le[4]}(Cr=le[5])&&(z[5]=(Fr=z[5])?KC(Fr,Cr,le[6]):Cr,z[6]=Fr?Lh(z[5],ar):le[6]),(Cr=le[7])&&(z[7]=Cr),128&Nt&&(z[8]=null==z[8]?le[8]:Dl(z[8],le[8])),null==z[9]&&(z[9]=le[9]),z[0]=le[0],z[1]=Cn}(ms,Vi),z=ms[0],le=ms[1],Be=ms[2],Nt=ms[3],Cn=ms[4],!(Cr=ms[9]=ms[9]===x?Fr?0:z.length:bl(ms[9]-di,0))&&24&le&&(le&=-25),le&&1!=le)$s=8==le||16==le?function v3(z,le,Be){var Nt=R_(z);return function Cn(){for(var Kn=arguments.length,fr=Jr(Kn),Cr=Kn,Fr=X1(Cn);Cr--;)fr[Cr]=arguments[Cr];var di=Kn<3&&fr[0]!==Fr&&fr[Kn-1]!==Fr?[]:Lh(fr,Fr);return(Kn-=di.length)<Be?nS(z,le,pw,Cn.placeholder,x,fr,di,x,x,Be-Kn):Ac(this&&this!==lc&&this instanceof Cn?Nt:z,this,fr)}}(z,le,Cr):32!=le&&33!=le||Cn.length?pw.apply(x,ms):function _3(z,le,Be,Nt){var Cn=1&le,Kn=R_(z);return function fr(){for(var Cr=-1,Fr=arguments.length,di=-1,hi=Nt.length,yi=Jr(hi+Fr),Vi=this&&this!==lc&&this instanceof fr?Kn:z;++di<hi;)yi[di]=Nt[di];for(;Fr--;)yi[di++]=arguments[++Cr];return Ac(Vi,Cn?Be:this,yi)}}(z,le,Be,Nt);else var $s=function y3(z,le,Be){var Nt=1&le,Cn=R_(z);return function Kn(){return(this&&this!==lc&&this instanceof Kn?Cn:z).apply(Nt?Be:this,arguments)}}(z,le,Be);return gS((Vi?FC:pS)($s,ms),z,le)}function iS(z,le,Be,Nt){return z===x||Qd(z,Rh[Be])&&!ma.call(Nt,Be)?le:z}function sS(z,le,Be,Nt,Cn,Kn){return xl(z)&&xl(le)&&(Kn.set(le,z),wp(z,le,x,sS,Kn),Kn.delete(le)),z}function x3(z){return B_(z)?x:z}function oS(z,le,Be,Nt,Cn,Kn){var fr=1&Be,Cr=z.length,Fr=le.length;if(Cr!=Fr&&!(fr&&Fr>Cr))return!1;var di=Kn.get(z),hi=Kn.get(le);if(di&&hi)return di==le&&hi==z;var yi=-1,Vi=!0,ms=2&Be?new Xd:x;for(Kn.set(z,le),Kn.set(le,z);++yi<Cr;){var $s=z[yi],Oo=le[yi];if(Nt)var Gs=fr?Nt(Oo,$s,yi,le,z,Kn):Nt($s,Oo,yi,z,le,Kn);if(Gs!==x){if(Gs)continue;Vi=!1;break}if(ms){if(!kh(le,function(Go,ta){if(!Ph(ms,ta)&&($s===Go||Cn($s,Go,Be,Nt,Kn)))return ms.push(ta)})){Vi=!1;break}}else if($s!==Oo&&!Cn($s,Oo,Be,Nt,Kn)){Vi=!1;break}}return Kn.delete(z),Kn.delete(le),Vi}function Cf(z){return VE(hS(z,x,xS),z+"")}function RE(z){return $(z,mc,jE)}function NE(z){return $(z,Ru,aS)}var FE=M_?function(z){return M_.get(z)}:nC;function vw(z){for(var le=z.name+"",Be=Nh[le],Nt=ma.call(Nh,le)?Be.length:0;Nt--;){var Cn=Be[Nt],Kn=Cn.func;if(null==Kn||Kn==z)return Cn.name}return le}function X1(z){return(ma.call(jn,"placeholder")?jn:z).placeholder}function Vs(){var z=jn.iteratee||eC;return z=z===eC?Bh:z,arguments.length?z(arguments[0],arguments[1]):z}function _w(z,le){var Be=z.__data__;return function k3(z){var le=typeof z;return"string"==le||"number"==le||"symbol"==le||"boolean"==le?"__proto__"!==z:null===z}(le)?Be["string"==typeof le?"string":"hash"]:Be.map}function BE(z){for(var le=mc(z),Be=le.length;Be--;){var Nt=le[Be],Cn=z[Nt];le[Be]=[Nt,Cn,uS(Cn)]}return le}function Eg(z,le){var Be=function eE(Rr,ii){return null==Rr?x:Rr[ii]}(z,le);return ws(Be)?Be:x}var jE=E_?function(z){return null==z?[]:(z=Na(z),Ih(E_(z),function(le){return Vx.call(z,le)}))}:rC,aS=E_?function(z){for(var le=[];z;)Zd(le,jE(z)),z=F1(z);return le}:rC,Vc=se;function lS(z,le,Be){for(var Nt=-1,Cn=(le=Cp(le,z)).length,Kn=!1;++Nt<Cn;){var fr=Hh(le[Nt]);if(!(Kn=null!=z&&Be(z,fr)))break;z=z[fr]}return Kn||++Nt!=Cn?Kn:!!(Cn=null==z?0:z.length)&&Mw(Cn)&&Sf(fr,Cn)&&(Eo(z)||Sg(z))}function cS(z){return"function"!=typeof z.constructor||N_(z)?{}:_f(F1(z))}function I3(z){return Eo(z)||Sg(z)||!!(Wx&&z&&z[Wx])}function Sf(z,le){var Be=typeof z;return!!(le=le??Ah)&&("number"==Be||"symbol"!=Be&&F2.test(z))&&z>-1&&z%1==0&&z<le}function hu(z,le,Be){if(!xl(Be))return!1;var Nt=typeof le;return!!("number"==Nt?Lu(Be)&&Sf(le,Be.length):"string"==Nt&&le in Be)&&Qd(Be[le],z)}function HE(z,le){if(Eo(z))return!1;var Be=typeof z;return!("number"!=Be&&"symbol"!=Be&&"boolean"!=Be&&null!=z&&!nd(z))||cC.test(z)||!lx.test(z)||null!=le&&z in Na(le)}function YE(z){var le=vw(z),Be=jn[le];if("function"!=typeof Be||!(le in $o.prototype))return!1;if(z===Be)return!0;var Nt=FE(Be);return!!Nt&&z===Nt[0]}(C_&&Vc(new C_(new ArrayBuffer(1)))!=hf||gg&&Vc(new gg)!=Qu||S_&&Vc(S_.resolve())!=tx||vf&&Vc(new vf)!=ed||mg&&Vc(new mg)!=X0)&&(Vc=function(z){var le=se(z),Be=le==qu?z.constructor:x,Nt=Be?Cg(Be):"";if(Nt)switch(Nt){case Xx:return hf;case dE:return Qu;case hE:return tx;case Jx:return ed;case D_:return X0}return le});var P3=hg?Mf:iC;function N_(z){var le=z&&z.constructor;return z===("function"==typeof le&&le.prototype||Rh)}function uS(z){return z==z&&!xl(z)}function dS(z,le){return function(Be){return null!=Be&&Be[z]===le&&(le!==x||z in Na(Be))}}function hS(z,le,Be){return le=bl(le===x?z.length-1:le,0),function(){for(var Nt=arguments,Cn=-1,Kn=bl(Nt.length-le,0),fr=Jr(Kn);++Cn<Kn;)fr[Cn]=Nt[le+Cn];Cn=-1;for(var Cr=Jr(le+1);++Cn<le;)Cr[Cn]=Nt[Cn];return Cr[le]=Be(fr),Ac(z,this,Cr)}}function fS(z,le){return le.length<2?z:S(z,Sd(le,0,-1))}function B3(z,le){for(var Be=z.length,Nt=Dl(le.length,Be),Cn=Pu(z);Nt--;){var Kn=le[Nt];z[Nt]=Sf(Kn,Be)?Cn[Kn]:x}return z}function UE(z,le){if(("constructor"!==le||"function"!=typeof z[le])&&"__proto__"!=le)return z[le]}var pS=mS(FC),F_=w_||function(z,le){return lc.setTimeout(z,le)},VE=mS(a3);function gS(z,le,Be){var Nt=le+"";return VE(z,function T3(z,le){var Be=le.length;if(!Be)return z;var Nt=Be-1;return le[Nt]=(Be>1?"& ":"")+le[Nt],le=le.join(Be>2?", ":" "),z.replace(k2,"{\n/* [wrapped with "+le+"] */\n")}(Nt,function j3(z,le){return lu(ex,function(Be){var Nt="_."+Be[0];le&Be[1]&&!ag(z,Nt)&&z.push(Nt)}),z.sort()}(function M3(z){var le=z.match(uC);return le?le[1].split(cx):[]}(Nt),Be)))}function mS(z){var le=0,Be=0;return function(){var Nt=Gx(),Cn=16-(Nt-Be);if(Be=Nt,Cn>0){if(++le>=800)return arguments[0]}else le=0;return z.apply(x,arguments)}}function bw(z,le){var Be=-1,Nt=z.length,Cn=Nt-1;for(le=le===x?Nt:le;++Be<le;){var Kn=SE(Be,Cn),fr=z[Kn];z[Kn]=z[Be],z[Be]=fr}return z.length=le,z}var yS=function L3(z){var le=Cw(z,function(Nt){return 500===Be.size&&Be.clear(),Nt}),Be=le.cache;return le}(function(z){var le=[];return 46===z.charCodeAt(0)&&le.push(""),z.replace(T2,function(Be,Nt,Cn,Kn){le.push(Cn?Kn.replace(L2,"$1"):Nt||Be)}),le});function Hh(z){if("string"==typeof z||nd(z))return z;var le=z+"";return"0"==le&&1/z==-df?"-0":le}function Cg(z){if(null!=z){try{return L1.call(z)}catch{}try{return z+""}catch{}}return""}function vS(z){if(z instanceof $o)return z.clone();var le=new ku(z.__wrapped__,z.__chain__);return le.__actions__=Pu(z.__actions__),le.__index__=z.__index__,le.__values__=z.__values__,le}var V3=Fo(function(z,le){return Nl(z)?bg(z,gc(le,1,Nl,!0)):[]}),W3=Fo(function(z,le){var Be=Md(le);return Nl(Be)&&(Be=x),Nl(z)?bg(z,gc(le,1,Nl,!0),Vs(Be,2)):[]}),z3=Fo(function(z,le){var Be=Md(le);return Nl(Be)&&(Be=x),Nl(z)?bg(z,gc(le,1,Nl,!0),x,Be):[]});function _S(z,le,Be){var Nt=null==z?0:z.length;if(!Nt)return-1;var Cn=null==Be?0:Do(Be);return Cn<0&&(Cn=bl(Nt+Cn,0)),T1(z,Vs(le,3),Cn)}function bS(z,le,Be){var Nt=null==z?0:z.length;if(!Nt)return-1;var Cn=Nt-1;return Be!==x&&(Cn=Do(Be),Cn=Be<0?bl(Nt+Cn,0):Dl(Cn,Nt-1)),T1(z,Vs(le,3),Cn,!0)}function xS(z){return null!=z&&z.length?gc(z,1):[]}function wS(z){return z&&z.length?z[0]:x}var nM=Fo(function(z){var le=rl(z,IE);return le.length&&le[0]===z[0]?hn(le):[]}),rM=Fo(function(z){var le=Md(z),Be=rl(z,IE);return le===Md(Be)?le=x:Be.pop(),Be.length&&Be[0]===z[0]?hn(Be,Vs(le,2)):[]}),iM=Fo(function(z){var le=Md(z),Be=rl(z,IE);return(le="function"==typeof le?le:x)&&Be.pop(),Be.length&&Be[0]===z[0]?hn(Be,x,le):[]});function Md(z){var le=null==z?0:z.length;return le?z[le-1]:x}var lM=Fo(ES);function ES(z,le){return z&&z.length&&le&&le.length?CE(z,le):z}var dM=Cf(function(z,le){var Be=null==z?0:z.length,Nt=_g(z,le);return NC(z,rl(le,function(Cn){return Sf(Cn,Be)?+Cn:Cn}).sort($C)),Nt});function WE(z){return null==z?z:xC.call(z)}var DM=Fo(function(z){return Ep(gc(z,1,Nl,!0))}),AM=Fo(function(z){var le=Md(z);return Nl(le)&&(le=x),Ep(gc(z,1,Nl,!0),Vs(le,2))}),TM=Fo(function(z){var le=Md(z);return le="function"==typeof le?le:x,Ep(gc(z,1,Nl,!0),x,le)});function zE(z){if(!z||!z.length)return[];var le=0;return z=Ih(z,function(Be){if(Nl(Be))return le=bl(Be.length,le),!0}),cg(le,function(Be){return rl(z,d_(Be))})}function CS(z,le){if(!z||!z.length)return[];var Be=zE(z);return null==le?Be:rl(Be,function(Nt){return Ac(le,x,Nt)})}var PM=Fo(function(z,le){return Nl(z)?bg(z,le):[]}),LM=Fo(function(z){return TE(Ih(z,Nl))}),RM=Fo(function(z){var le=Md(z);return Nl(le)&&(le=x),TE(Ih(z,Nl),Vs(le,2))}),NM=Fo(function(z){var le=Md(z);return le="function"==typeof le?le:x,TE(Ih(z,Nl),x,le)}),FM=Fo(zE),HM=Fo(function(z){var le=z.length,Be=le>1?z[le-1]:x;return Be="function"==typeof Be?(z.pop(),Be):x,CS(z,Be)});function SS(z){var le=jn(z);return le.__chain__=!0,le}function xw(z,le){return le(z)}var UM=Cf(function(z){var le=z.length,Be=le?z[0]:0,Nt=this.__wrapped__,Cn=function(Kn){return _g(Kn,z)};return!(le>1||this.__actions__.length)&&Nt instanceof $o&&Sf(Be)?((Nt=Nt.slice(Be,+Be+(le?1:0))).__actions__.push({func:xw,args:[Cn],thisArg:x}),new ku(Nt,this.__chain__).thru(function(Kn){return le&&!Kn.length&&Kn.push(x),Kn})):this.thru(Cn)}),XM=fw(function(z,le,Be){ma.call(z,Be)?++z[Be]:Cd(z,Be,1)}),qM=QC(_S),eD=QC(bS);function MS(z,le){return(Eo(z)?lu:wf)(z,Vs(le,3))}function DS(z,le){return(Eo(z)?Px:wE)(z,Vs(le,3))}var iD=fw(function(z,le,Be){ma.call(z,Be)?z[Be].push(le):Cd(z,Be,[le])}),oD=Fo(function(z,le,Be){var Nt=-1,Cn="function"==typeof le,Kn=Lu(z)?Jr(z.length):[];return wf(z,function(fr){Kn[++Nt]=Cn?Ac(le,fr,Be):qn(fr,le,Be)}),Kn}),aD=fw(function(z,le,Be){Cd(z,Be,le)});function ww(z,le){return(Eo(z)?rl:W1)(z,Vs(le,3))}var cD=fw(function(z,le,Be){z[Be?0:1].push(le)},function(){return[[],[]]}),vD=Fo(function(z,le){if(null==z)return[];var Be=le.length;return Be>1&&hu(z,le[0],le[1])?le=[]:Be>2&&hu(le[0],le[1],le[2])&&(le=[le[0]]),LC(z,gc(le,1),[])}),Ew=lE||function(){return lc.Date.now()};function AS(z,le,Be){return le=Be?x:le,Ef(z,128,x,x,x,x,le=z&&null==le?z.length:le)}function TS(z,le){var Be;if("function"!=typeof le)throw new uu(Ye);return z=Do(z),function(){return--z>0&&(Be=le.apply(this,arguments)),z<=1&&(le=x),Be}}var $E=Fo(function(z,le,Be){var Nt=1;if(Be.length){var Cn=Lh(Be,X1($E));Nt|=32}return Ef(z,Nt,le,Be,Cn)}),IS=Fo(function(z,le,Be){var Nt=3;if(Be.length){var Cn=Lh(Be,X1(IS));Nt|=32}return Ef(le,Nt,z,Be,Cn)});function PS(z,le,Be){var Nt,Cn,Kn,fr,Cr,Fr,di=0,hi=!1,yi=!1,Vi=!0;if("function"!=typeof z)throw new uu(Ye);function ms(Fl){var qd=Nt,Af=Cn;return Nt=Cn=x,di=Fl,fr=z.apply(Af,qd)}function $s(Fl){return di=Fl,Cr=F_(Go,le),hi?ms(Fl):fr}function Gs(Fl){var qd=Fl-Fr;return Fr===x||qd>=le||qd<0||yi&&Fl-di>=Kn}function Go(){var Fl=Ew();if(Gs(Fl))return ta(Fl);Cr=F_(Go,function Oo(Fl){var QS=le-(Fl-Fr);return yi?Dl(QS,Kn-(Fl-di)):QS}(Fl))}function ta(Fl){return Cr=x,Vi&&Nt?ms(Fl):(Nt=Cn=x,fr)}function id(){var Fl=Ew(),qd=Gs(Fl);if(Nt=arguments,Cn=this,Fr=Fl,qd){if(Cr===x)return $s(Fr);if(yi)return VC(Cr),Cr=F_(Go,le),ms(Fr)}return Cr===x&&(Cr=F_(Go,le)),fr}return le=Dd(le)||0,xl(Be)&&(hi=!!Be.leading,Kn=(yi="maxWait"in Be)?bl(Dd(Be.maxWait)||0,le):Kn,Vi="trailing"in Be?!!Be.trailing:Vi),id.cancel=function rd(){Cr!==x&&VC(Cr),di=0,Nt=Fr=Cn=Cr=x},id.flush=function fu(){return Cr===x?fr:ta(Ew())},id}var bD=Fo(function(z,le){return lw(z,1,le)}),xD=Fo(function(z,le,Be){return lw(z,Dd(le)||0,Be)});function Cw(z,le){if("function"!=typeof z||null!=le&&"function"!=typeof le)throw new uu(Ye);var Be=function(){var Nt=arguments,Cn=le?le.apply(this,Nt):Nt[0],Kn=Be.cache;if(Kn.has(Cn))return Kn.get(Cn);var fr=z.apply(this,Nt);return Be.cache=Kn.set(Cn,fr)||Kn,fr};return Be.cache=new(Cw.Cache||kc),Be}function Sw(z){if("function"!=typeof z)throw new uu(Ye);return function(){var le=arguments;switch(le.length){case 0:return!z.call(this);case 1:return!z.call(this,le[0]);case 2:return!z.call(this,le[0],le[1]);case 3:return!z.call(this,le[0],le[1],le[2])}return!z.apply(this,le)}}Cw.Cache=kc;var CD=u3(function(z,le){var Be=(le=1==le.length&&Eo(le[0])?rl(le[0],cu(Vs())):rl(gc(le,1),cu(Vs()))).length;return Fo(function(Nt){for(var Cn=-1,Kn=Dl(Nt.length,Be);++Cn<Kn;)Nt[Cn]=le[Cn].call(this,Nt[Cn]);return Ac(z,this,Nt)})}),GE=Fo(function(z,le){var Be=Lh(le,X1(GE));return Ef(z,32,x,le,Be)}),LS=Fo(function(z,le){var Be=Lh(le,X1(LS));return Ef(z,64,x,le,Be)}),SD=Cf(function(z,le){return Ef(z,256,x,x,x,le)});function Qd(z,le){return z===le||z!=z&&le!=le}var FD=yw(Me),BD=yw(function(z,le){return z>=le}),Sg=yr(function(){return arguments}())?yr:function(z){return Al(z)&&ma.call(z,"callee")&&!Vx.call(z,"callee")},Eo=Jr.isArray,jD=M1?cu(M1):function Nr(z){return Al(z)&&se(z)==J0};function Lu(z){return null!=z&&Mw(z.length)&&!Mf(z)}function Nl(z){return Al(z)&&Lu(z)}var Mp=zx||iC,YD=Ax?cu(Ax):function ti(z){return Al(z)&&se(z)==z0};function KE(z){if(!Al(z))return!1;var le=se(z);return le==f1||"[object DOMException]"==le||"string"==typeof z.message&&"string"==typeof z.name&&!B_(z)}function Mf(z){if(!xl(z))return!1;var le=se(z);return le==$0||le==Bv||"[object AsyncFunction]"==le||"[object Proxy]"==le}function RS(z){return"number"==typeof z&&z==Do(z)}function Mw(z){return"number"==typeof z&&z>-1&&z%1==0&&z<=Ah}function xl(z){var le=typeof z;return null!=z&&("object"==le||"function"==le)}function Al(z){return null!=z&&"object"==typeof z}var NS=Tx?cu(Tx):function rs(z){return Al(z)&&Vc(z)==Qu};function FS(z){return"number"==typeof z||Al(z)&&se(z)==G0}function B_(z){if(!Al(z)||se(z)!=qu)return!1;var le=F1(z);if(null===le)return!0;var Be=ma.call(le,"constructor")&&le.constructor;return"function"==typeof Be&&Be instanceof Be&&L1.call(Be)==b_}var ZE=Ix?cu(Ix):function No(z){return Al(z)&&se(z)==K0},BS=kx?cu(kx):function ya(z){return Al(z)&&Vc(z)==ed};function Dw(z){return"string"==typeof z||!Eo(z)&&Al(z)&&se(z)==Z0}function nd(z){return"symbol"==typeof z||Al(z)&&se(z)==p1}var J1=l_?cu(l_):function du(z){return Al(z)&&Mw(z.length)&&!!Ja[se(z)]},r5=yw(wg),i5=yw(function(z,le){return z<=le});function jS(z){if(!z)return[];if(Lu(z))return Dw(z)?Iu(z):Pu(z);if(Ic&&z[Ic])return function tE(Rr){for(var ii,Jr=[];!(ii=Rr.next()).done;)Jr.push(ii.value);return Jr}(z[Ic]());var le=Vc(z);return(le==Qu?k1:le==ed?O1:Q1)(z)}function Df(z){return z?(z=Dd(z))===df||z===-df?17976931348623157e292*(z<0?-1:1):z==z?z:0:0===z?z:0}function Do(z){var le=Df(z),Be=le%1;return le==le?Be?le-Be:le:0}function HS(z){return z?xf(Do(z),0,xd):0}function Dd(z){if("number"==typeof z)return z;if(nd(z))return NaN;if(xl(z)){var le="function"==typeof z.valueOf?z.valueOf():z;z=xl(le)?le+"":le}if("string"!=typeof z)return 0===z?z:+z;z=f_(z);var Be=Wv.test(z);return Be||ng.test(z)?o_(z.slice(2),Be?2:8):N2.test(z)?NaN:+z}function YS(z){return jh(z,Ru(z))}function Ma(z){return null==z?"":td(z)}var o5=K1(function(z,le){if(N_(le)||Lu(le))jh(le,mc(le),z);else for(var Be in le)ma.call(le,Be)&&vg(z,Be,le[Be])}),US=K1(function(z,le){jh(le,Ru(le),z)}),Aw=K1(function(z,le,Be,Nt){jh(le,Ru(le),z,Nt)}),a5=K1(function(z,le,Be,Nt){jh(le,mc(le),z,Nt)}),l5=Cf(_g),u5=Fo(function(z,le){z=Na(z);var Be=-1,Nt=le.length,Cn=Nt>2?le[2]:x;for(Cn&&hu(le[0],le[1],Cn)&&(Nt=1);++Be<Nt;)for(var Kn=le[Be],fr=Ru(Kn),Cr=-1,Fr=fr.length;++Cr<Fr;){var di=fr[Cr],hi=z[di];(hi===x||Qd(hi,Rh[di])&&!ma.call(z,di))&&(z[di]=Kn[di])}return z}),d5=Fo(function(z){return z.push(x,sS),Ac(VS,x,z)});function XE(z,le,Be){var Nt=null==z?x:S(z,le);return Nt===x?Be:Nt}function JE(z,le){return null!=z&&lS(z,le,pt)}var x5=eS(function(z,le,Be){null!=le&&"function"!=typeof le.toString&&(le=R1.call(le)),z[le]=Be},qE(Nu)),w5=eS(function(z,le,Be){null!=le&&"function"!=typeof le.toString&&(le=R1.call(le)),ma.call(z,le)?z[le].push(Be):z[le]=[Be]},Vs),E5=Fo(qn);function mc(z){return Lu(z)?rw(z):xg(z)}function Ru(z){return Lu(z)?rw(z,!0):function O_(z){if(!xl(z))return function N3(z){var le=[];if(null!=z)for(var Be in Na(z))le.push(Be);return le}(z);var le=N_(z),Be=[];for(var Nt in z)"constructor"==Nt&&(le||!ma.call(z,Nt))||Be.push(Nt);return Be}(z)}var M5=K1(function(z,le,Be){wp(z,le,Be)}),VS=K1(function(z,le,Be,Nt){wp(z,le,Be,Nt)}),D5=Cf(function(z,le){var Be={};if(null==z)return Be;var Nt=!1;le=rl(le,function(Kn){return Kn=Cp(Kn,z),Nt||(Nt=Kn.length>1),Kn}),jh(z,NE(z),Be),Nt&&(Be=Ou(Be,7,x3));for(var Cn=le.length;Cn--;)AE(Be,le[Cn]);return Be}),T5=Cf(function(z,le){return null==z?{}:function t3(z,le){return RC(z,le,function(Be,Nt){return JE(z,Nt)})}(z,le)});function WS(z,le){if(null==z)return{};var Be=rl(NE(z),function(Nt){return[Nt]});return le=Vs(le),RC(z,Be,function(Nt,Cn){return le(Nt,Cn[0])})}var zS=rS(mc),$S=rS(Ru);function Q1(z){return null==z?[]:I1(z,mc(z))}var Y5=Z1(function(z,le,Be){return le=le.toLowerCase(),z+(Be?GS(le):le)});function GS(z){return QE(Ma(z).toLowerCase())}function KS(z){return(z=Ma(z))&&z.replace(ux,m_).replace(s_,"")}var z5=Z1(function(z,le,Be){return z+(Be?"-":"")+le.toLowerCase()}),$5=Z1(function(z,le,Be){return z+(Be?" ":"")+le.toLowerCase()}),G5=JC("toLowerCase"),eA=Z1(function(z,le,Be){return z+(Be?"_":"")+le.toLowerCase()}),nA=Z1(function(z,le,Be){return z+(Be?" ":"")+QE(le)}),hA=Z1(function(z,le,Be){return z+(Be?" ":"")+le.toUpperCase()}),QE=JC("toUpperCase");function ZS(z,le,Be){return z=Ma(z),(le=Be?x:le)===x?function Fx(Rr){return og.test(Rr)}(z)?function Hx(Rr){return Rr.match(W2)||[]}(z):function fC(Rr){return Rr.match(O2)||[]}(z):z.match(le)||[]}var XS=Fo(function(z,le){try{return Ac(z,x,le)}catch(Be){return KE(Be)?Be:new fo(Be)}}),fA=Cf(function(z,le){return lu(le,function(Be){Be=Hh(Be),Cd(z,Be,$E(z[Be],z))}),z});function qE(z){return function(){return z}}var yA=qC(),vA=qC(!0);function Nu(z){return z}function eC(z){return Bh("function"==typeof z?z:Ou(z,1))}var xA=Fo(function(z,le){return function(Be){return qn(Be,z,le)}}),wA=Fo(function(z,le){return function(Be){return qn(z,Be,le)}});function tC(z,le,Be){var Nt=mc(le),Cn=m(le,Nt);null==Be&&(!xl(le)||!Cn.length&&Nt.length)&&(Be=le,le=z,z=this,Cn=m(le,mc(le)));var Kn=!(xl(Be)&&"chain"in Be&&!Be.chain),fr=Mf(z);return lu(Cn,function(Cr){var Fr=le[Cr];z[Cr]=Fr,fr&&(z.prototype[Cr]=function(){var di=this.__chain__;if(Kn||di){var hi=z(this.__wrapped__),yi=hi.__actions__=Pu(this.__actions__);return yi.push({func:Fr,args:arguments,thisArg:z}),hi.__chain__=di,hi}return Fr.apply(z,Zd([this.value()],arguments))})}),z}function nC(){}var SA=PE(rl),MA=PE(c_),DA=PE(kh);function JS(z){return HE(z)?d_(Hh(z)):function n3(z){return function(le){return S(le,z)}}(z)}var TA=tS(),IA=tS(!0);function rC(){return[]}function iC(){return!1}var FA=gw(function(z,le){return z+le},0),BA=LE("ceil"),jA=gw(function(z,le){return z/le},1),HA=LE("floor"),GA=gw(function(z,le){return z*le},1),KA=LE("round"),ZA=gw(function(z,le){return z-le},0);return jn.after=function _D(z,le){if("function"!=typeof le)throw new uu(Ye);return z=Do(z),function(){if(--z<1)return le.apply(this,arguments)}},jn.ary=AS,jn.assign=o5,jn.assignIn=US,jn.assignInWith=Aw,jn.assignWith=a5,jn.at=l5,jn.before=TS,jn.bind=$E,jn.bindAll=fA,jn.bindKey=IS,jn.castArray=function kD(){if(!arguments.length)return[];var z=arguments[0];return Eo(z)?z:[z]},jn.chain=SS,jn.chunk=function H3(z,le,Be){le=(Be?hu(z,le,Be):le===x)?1:bl(Do(le),0);var Nt=null==z?0:z.length;if(!Nt||le<1)return[];for(var Cn=0,Kn=0,fr=Jr(fg(Nt/le));Cn<Nt;)fr[Kn++]=Sd(z,Cn,Cn+=le);return fr},jn.compact=function Y3(z){for(var le=-1,Be=null==z?0:z.length,Nt=0,Cn=[];++le<Be;){var Kn=z[le];Kn&&(Cn[Nt++]=Kn)}return Cn},jn.concat=function U3(){var z=arguments.length;if(!z)return[];for(var le=Jr(z-1),Be=arguments[0],Nt=z;Nt--;)le[Nt-1]=arguments[Nt];return Zd(Eo(Be)?Pu(Be):[Be],gc(le,1))},jn.cond=function pA(z){var le=null==z?0:z.length,Be=Vs();return z=le?rl(z,function(Nt){if("function"!=typeof Nt[1])throw new uu(Ye);return[Be(Nt[0]),Nt[1]]}):[],Fo(function(Nt){for(var Cn=-1;++Cn<le;){var Kn=z[Cn];if(Ac(Kn[0],this,Nt))return Ac(Kn[1],this,Nt)}})},jn.conforms=function gA(z){return function kC(z){var le=mc(z);return function(Be){return xE(Be,z,le)}}(Ou(z,1))},jn.constant=qE,jn.countBy=XM,jn.create=function c5(z,le){var Be=_f(z);return null==le?Be:V1(Be,le)},jn.curry=function kS(z,le,Be){var Nt=Ef(z,8,x,x,x,x,x,le=Be?x:le);return Nt.placeholder=kS.placeholder,Nt},jn.curryRight=function OS(z,le,Be){var Nt=Ef(z,16,x,x,x,x,x,le=Be?x:le);return Nt.placeholder=OS.placeholder,Nt},jn.debounce=PS,jn.defaults=u5,jn.defaultsDeep=d5,jn.defer=bD,jn.delay=xD,jn.difference=V3,jn.differenceBy=W3,jn.differenceWith=z3,jn.drop=function $3(z,le,Be){var Nt=null==z?0:z.length;return Nt?Sd(z,(le=Be||le===x?1:Do(le))<0?0:le,Nt):[]},jn.dropRight=function G3(z,le,Be){var Nt=null==z?0:z.length;return Nt?Sd(z,0,(le=Nt-(le=Be||le===x?1:Do(le)))<0?0:le):[]},jn.dropRightWhile=function K3(z,le){return z&&z.length?hw(z,Vs(le,3),!0,!0):[]},jn.dropWhile=function Z3(z,le){return z&&z.length?hw(z,Vs(le,3),!0):[]},jn.fill=function X3(z,le,Be,Nt){var Cn=null==z?0:z.length;return Cn?(Be&&"number"!=typeof Be&&hu(z,le,Be)&&(Be=0,Nt=Cn),function PC(z,le,Be,Nt){var Cn=z.length;for((Be=Do(Be))<0&&(Be=-Be>Cn?0:Cn+Be),(Nt=Nt===x||Nt>Cn?Cn:Do(Nt))<0&&(Nt+=Cn),Nt=Be>Nt?0:HS(Nt);Be<Nt;)z[Be++]=le;return z}(z,le,Be,Nt)):[]},jn.filter=function QM(z,le){return(Eo(z)?Ih:cw)(z,Vs(le,3))},jn.flatMap=function tD(z,le){return gc(ww(z,le),1)},jn.flatMapDeep=function nD(z,le){return gc(ww(z,le),df)},jn.flatMapDepth=function rD(z,le,Be){return Be=Be===x?1:Do(Be),gc(ww(z,le),Be)},jn.flatten=xS,jn.flattenDeep=function J3(z){return null!=z&&z.length?gc(z,df):[]},jn.flattenDepth=function Q3(z,le){return null!=z&&z.length?gc(z,le=le===x?1:Do(le)):[]},jn.flip=function wD(z){return Ef(z,512)},jn.flow=yA,jn.flowRight=vA,jn.fromPairs=function q3(z){for(var le=-1,Be=null==z?0:z.length,Nt={};++le<Be;){var Cn=z[le];Nt[Cn[0]]=Cn[1]}return Nt},jn.functions=function v5(z){return null==z?[]:m(z,mc(z))},jn.functionsIn=function _5(z){return null==z?[]:m(z,Ru(z))},jn.groupBy=iD,jn.initial=function tM(z){return null!=z&&z.length?Sd(z,0,-1):[]},jn.intersection=nM,jn.intersectionBy=rM,jn.intersectionWith=iM,jn.invert=x5,jn.invertBy=w5,jn.invokeMap=oD,jn.iteratee=eC,jn.keyBy=aD,jn.keys=mc,jn.keysIn=Ru,jn.map=ww,jn.mapKeys=function C5(z,le){var Be={};return le=Vs(le,3),Jd(z,function(Nt,Cn,Kn){Cd(Be,le(Nt,Cn,Kn),Nt)}),Be},jn.mapValues=function S5(z,le){var Be={};return le=Vs(le,3),Jd(z,function(Nt,Cn,Kn){Cd(Be,Cn,le(Nt,Cn,Kn))}),Be},jn.matches=function _A(z){return z1(Ou(z,1))},jn.matchesProperty=function bA(z,le){return $1(z,Ou(le,1))},jn.memoize=Cw,jn.merge=M5,jn.mergeWith=VS,jn.method=xA,jn.methodOf=wA,jn.mixin=tC,jn.negate=Sw,jn.nthArg=function CA(z){return z=Do(z),Fo(function(le){return G1(le,z)})},jn.omit=D5,jn.omitBy=function A5(z,le){return WS(z,Sw(Vs(le)))},jn.once=function ED(z){return TS(2,z)},jn.orderBy=function lD(z,le,Be,Nt){return null==z?[]:(Eo(le)||(le=null==le?[]:[le]),Eo(Be=Nt?x:Be)||(Be=null==Be?[]:[Be]),LC(z,le,Be))},jn.over=SA,jn.overArgs=CD,jn.overEvery=MA,jn.overSome=DA,jn.partial=GE,jn.partialRight=LS,jn.partition=cD,jn.pick=T5,jn.pickBy=WS,jn.property=JS,jn.propertyOf=function AA(z){return function(le){return null==z?x:S(z,le)}},jn.pull=lM,jn.pullAll=ES,jn.pullAllBy=function cM(z,le,Be){return z&&z.length&&le&&le.length?CE(z,le,Vs(Be,2)):z},jn.pullAllWith=function uM(z,le,Be){return z&&z.length&&le&&le.length?CE(z,le,x,Be):z},jn.pullAt=dM,jn.range=TA,jn.rangeRight=IA,jn.rearg=SD,jn.reject=function hD(z,le){return(Eo(z)?Ih:cw)(z,Sw(Vs(le,3)))},jn.remove=function hM(z,le){var Be=[];if(!z||!z.length)return Be;var Nt=-1,Cn=[],Kn=z.length;for(le=Vs(le,3);++Nt<Kn;){var fr=z[Nt];le(fr,Nt,z)&&(Be.push(fr),Cn.push(Nt))}return NC(z,Cn),Be},jn.rest=function MD(z,le){if("function"!=typeof z)throw new uu(Ye);return Fo(z,le=le===x?le:Do(le))},jn.reverse=WE,jn.sampleSize=function pD(z,le,Be){return le=(Be?hu(z,le,Be):le===x)?1:Do(le),(Eo(z)?sw:o3)(z,le)},jn.set=function k5(z,le,Be){return null==z?z:L_(z,le,Be)},jn.setWith=function O5(z,le,Be,Nt){return Nt="function"==typeof Nt?Nt:x,null==z?z:L_(z,le,Be,Nt)},jn.shuffle=function gD(z){return(Eo(z)?ow:l3)(z)},jn.slice=function fM(z,le,Be){var Nt=null==z?0:z.length;return Nt?(Be&&"number"!=typeof Be&&hu(z,le,Be)?(le=0,Be=Nt):(le=null==le?0:Do(le),Be=Be===x?Nt:Do(Be)),Sd(z,le,Be)):[]},jn.sortBy=vD,jn.sortedUniq=function bM(z){return z&&z.length?BC(z):[]},jn.sortedUniqBy=function xM(z,le){return z&&z.length?BC(z,Vs(le,2)):[]},jn.split=function tA(z,le,Be){return Be&&"number"!=typeof Be&&hu(z,le,Be)&&(le=Be=x),(Be=Be===x?xd:Be>>>0)?(z=Ma(z))&&("string"==typeof le||null!=le&&!ZE(le))&&!(le=td(le))&&pf(z)?Sp(Iu(z),0,Be):z.split(le,Be):[]},jn.spread=function DD(z,le){if("function"!=typeof z)throw new uu(Ye);return le=null==le?0:bl(Do(le),0),Fo(function(Be){var Nt=Be[le],Cn=Sp(Be,0,le);return Nt&&Zd(Cn,Nt),Ac(z,this,Cn)})},jn.tail=function wM(z){var le=null==z?0:z.length;return le?Sd(z,1,le):[]},jn.take=function EM(z,le,Be){return z&&z.length?Sd(z,0,(le=Be||le===x?1:Do(le))<0?0:le):[]},jn.takeRight=function CM(z,le,Be){var Nt=null==z?0:z.length;return Nt?Sd(z,(le=Nt-(le=Be||le===x?1:Do(le)))<0?0:le,Nt):[]},jn.takeRightWhile=function SM(z,le){return z&&z.length?hw(z,Vs(le,3),!1,!0):[]},jn.takeWhile=function MM(z,le){return z&&z.length?hw(z,Vs(le,3)):[]},jn.tap=function YM(z,le){return le(z),z},jn.throttle=function AD(z,le,Be){var Nt=!0,Cn=!0;if("function"!=typeof z)throw new uu(Ye);return xl(Be)&&(Nt="leading"in Be?!!Be.leading:Nt,Cn="trailing"in Be?!!Be.trailing:Cn),PS(z,le,{leading:Nt,maxWait:le,trailing:Cn})},jn.thru=xw,jn.toArray=jS,jn.toPairs=zS,jn.toPairsIn=$S,jn.toPath=function RA(z){return Eo(z)?rl(z,Hh):nd(z)?[z]:Pu(yS(Ma(z)))},jn.toPlainObject=YS,jn.transform=function P5(z,le,Be){var Nt=Eo(z),Cn=Nt||Mp(z)||J1(z);if(le=Vs(le,4),null==Be){var Kn=z&&z.constructor;Be=Cn?Nt?new Kn:[]:xl(z)&&Mf(Kn)?_f(F1(z)):{}}return(Cn?lu:Jd)(z,function(fr,Cr,Fr){return le(Be,fr,Cr,Fr)}),Be},jn.unary=function TD(z){return AS(z,1)},jn.union=DM,jn.unionBy=AM,jn.unionWith=TM,jn.uniq=function IM(z){return z&&z.length?Ep(z):[]},jn.uniqBy=function kM(z,le){return z&&z.length?Ep(z,Vs(le,2)):[]},jn.uniqWith=function OM(z,le){return le="function"==typeof le?le:x,z&&z.length?Ep(z,x,le):[]},jn.unset=function L5(z,le){return null==z||AE(z,le)},jn.unzip=zE,jn.unzipWith=CS,jn.update=function R5(z,le,Be){return null==z?z:HC(z,le,kE(Be))},jn.updateWith=function N5(z,le,Be,Nt){return Nt="function"==typeof Nt?Nt:x,null==z?z:HC(z,le,kE(Be),Nt)},jn.values=Q1,jn.valuesIn=function F5(z){return null==z?[]:I1(z,Ru(z))},jn.without=PM,jn.words=ZS,jn.wrap=function ID(z,le){return GE(kE(le),z)},jn.xor=LM,jn.xorBy=RM,jn.xorWith=NM,jn.zip=FM,jn.zipObject=function BM(z,le){return UC(z||[],le||[],vg)},jn.zipObjectDeep=function jM(z,le){return UC(z||[],le||[],L_)},jn.zipWith=HM,jn.entries=zS,jn.entriesIn=$S,jn.extend=US,jn.extendWith=Aw,tC(jn,jn),jn.add=FA,jn.attempt=XS,jn.camelCase=Y5,jn.capitalize=GS,jn.ceil=BA,jn.clamp=function B5(z,le,Be){return Be===x&&(Be=le,le=x),Be!==x&&(Be=(Be=Dd(Be))==Be?Be:0),le!==x&&(le=(le=Dd(le))==le?le:0),xf(Dd(z),le,Be)},jn.clone=function OD(z){return Ou(z,4)},jn.cloneDeep=function LD(z){return Ou(z,5)},jn.cloneDeepWith=function RD(z,le){return Ou(z,5,le="function"==typeof le?le:x)},jn.cloneWith=function PD(z,le){return Ou(z,4,le="function"==typeof le?le:x)},jn.conformsTo=function ND(z,le){return null==le||xE(z,le,mc(le))},jn.deburr=KS,jn.defaultTo=function mA(z,le){return null==z||z!=z?le:z},jn.divide=jA,jn.endsWith=function U5(z,le,Be){z=Ma(z),le=td(le);var Nt=z.length,Cn=Be=Be===x?Nt:xf(Do(Be),0,Nt);return(Be-=le.length)>=0&&z.slice(Be,Cn)==le},jn.eq=Qd,jn.escape=function V5(z){return(z=Ma(z))&&sx.test(z)?z.replace(v1,gC):z},jn.escapeRegExp=function W5(z){return(z=Ma(z))&&I2.test(z)?z.replace(pp,"\\$&"):z},jn.every=function JM(z,le,Be){var Nt=Eo(z)?c_:OC;return Be&&hu(z,le,Be)&&(le=x),Nt(z,Vs(le,3))},jn.find=qM,jn.findIndex=_S,jn.findKey=function h5(z,le){return mp(z,Vs(le,3),Jd)},jn.findLast=eD,jn.findLastIndex=bS,jn.findLastKey=function f5(z,le){return mp(z,Vs(le,3),h)},jn.floor=HA,jn.forEach=MS,jn.forEachRight=DS,jn.forIn=function p5(z,le){return null==z?z:uw(z,Vs(le,3),Ru)},jn.forInRight=function g5(z,le){return null==z?z:EE(z,Vs(le,3),Ru)},jn.forOwn=function m5(z,le){return z&&Jd(z,Vs(le,3))},jn.forOwnRight=function y5(z,le){return z&&h(z,Vs(le,3))},jn.get=XE,jn.gt=FD,jn.gte=BD,jn.has=function b5(z,le){return null!=z&&lS(z,le,Ue)},jn.hasIn=JE,jn.head=wS,jn.identity=Nu,jn.includes=function sD(z,le,Be,Nt){z=Lu(z)?z:Q1(z),Be=Be&&!Nt?Do(Be):0;var Cn=z.length;return Be<0&&(Be=bl(Cn+Be,0)),Dw(z)?Be<=Cn&&z.indexOf(le,Be)>-1:!!Cn&&Oh(z,le,Be)>-1},jn.indexOf=function eM(z,le,Be){var Nt=null==z?0:z.length;if(!Nt)return-1;var Cn=null==Be?0:Do(Be);return Cn<0&&(Cn=bl(Nt+Cn,0)),Oh(z,le,Cn)},jn.inRange=function j5(z,le,Be){return le=Df(le),Be===x?(Be=le,le=0):Be=Df(Be),function Mt(z,le,Be){return z>=Dl(le,Be)&&z<bl(le,Be)}(z=Dd(z),le,Be)},jn.invoke=E5,jn.isArguments=Sg,jn.isArray=Eo,jn.isArrayBuffer=jD,jn.isArrayLike=Lu,jn.isArrayLikeObject=Nl,jn.isBoolean=function HD(z){return!0===z||!1===z||Al(z)&&se(z)==fp},jn.isBuffer=Mp,jn.isDate=YD,jn.isElement=function UD(z){return Al(z)&&1===z.nodeType&&!B_(z)},jn.isEmpty=function VD(z){if(null==z)return!0;if(Lu(z)&&(Eo(z)||"string"==typeof z||"function"==typeof z.splice||Mp(z)||J1(z)||Sg(z)))return!z.length;var le=Vc(z);if(le==Qu||le==ed)return!z.size;if(N_(z))return!xg(z).length;for(var Be in z)if(ma.call(z,Be))return!1;return!0},jn.isEqual=function WD(z,le){return wi(z,le)},jn.isEqualWith=function zD(z,le,Be){var Nt=(Be="function"==typeof Be?Be:x)?Be(z,le):x;return Nt===x?wi(z,le,x,Be):!!Nt},jn.isError=KE,jn.isFinite=function $D(z){return"number"==typeof z&&$x(z)},jn.isFunction=Mf,jn.isInteger=RS,jn.isLength=Mw,jn.isMap=NS,jn.isMatch=function GD(z,le){return z===le||ui(z,le,BE(le))},jn.isMatchWith=function KD(z,le,Be){return Be="function"==typeof Be?Be:x,ui(z,le,BE(le),Be)},jn.isNaN=function ZD(z){return FS(z)&&z!=+z},jn.isNative=function XD(z){if(P3(z))throw new fo("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return ws(z)},jn.isNil=function QD(z){return null==z},jn.isNull=function JD(z){return null===z},jn.isNumber=FS,jn.isObject=xl,jn.isObjectLike=Al,jn.isPlainObject=B_,jn.isRegExp=ZE,jn.isSafeInteger=function qD(z){return RS(z)&&z>=-Ah&&z<=Ah},jn.isSet=BS,jn.isString=Dw,jn.isSymbol=nd,jn.isTypedArray=J1,jn.isUndefined=function e5(z){return z===x},jn.isWeakMap=function t5(z){return Al(z)&&Vc(z)==X0},jn.isWeakSet=function n5(z){return Al(z)&&"[object WeakSet]"==se(z)},jn.join=function sM(z,le){return null==z?"":cE.call(z,le)},jn.kebabCase=z5,jn.last=Md,jn.lastIndexOf=function oM(z,le,Be){var Nt=null==z?0:z.length;if(!Nt)return-1;var Cn=Nt;return Be!==x&&(Cn=(Cn=Do(Be))<0?bl(Nt+Cn,0):Dl(Cn,Nt-1)),le==le?function jx(Rr,ii,Jr){for(var ns=Jr+1;ns--;)if(Rr[ns]===ii)return ns;return ns}(z,le,Cn):T1(z,u_,Cn,!0)},jn.lowerCase=$5,jn.lowerFirst=G5,jn.lt=r5,jn.lte=i5,jn.max=function YA(z){return z&&z.length?k_(z,Nu,Me):x},jn.maxBy=function UA(z,le){return z&&z.length?k_(z,Vs(le,2),Me):x},jn.mean=function VA(z){return Lx(z,Nu)},jn.meanBy=function WA(z,le){return Lx(z,Vs(le,2))},jn.min=function zA(z){return z&&z.length?k_(z,Nu,wg):x},jn.minBy=function $A(z,le){return z&&z.length?k_(z,Vs(le,2),wg):x},jn.stubArray=rC,jn.stubFalse=iC,jn.stubObject=function kA(){return{}},jn.stubString=function OA(){return""},jn.stubTrue=function PA(){return!0},jn.multiply=GA,jn.nth=function aM(z,le){return z&&z.length?G1(z,Do(le)):x},jn.noConflict=function EA(){return lc._===this&&(lc._=sE),this},jn.noop=nC,jn.now=Ew,jn.pad=function K5(z,le,Be){z=Ma(z);var Nt=(le=Do(le))?gf(z):0;if(!le||Nt>=le)return z;var Cn=(le-Nt)/2;return mw(pg(Cn),Be)+z+mw(fg(Cn),Be)},jn.padEnd=function Z5(z,le,Be){z=Ma(z);var Nt=(le=Do(le))?gf(z):0;return le&&Nt<le?z+mw(le-Nt,Be):z},jn.padStart=function X5(z,le,Be){z=Ma(z);var Nt=(le=Do(le))?gf(z):0;return le&&Nt<le?mw(le-Nt,Be)+z:z},jn.parseInt=function J5(z,le,Be){return Be||null==le?le=0:le&&(le=+le),Kx(Ma(z).replace(Th,""),le||0)},jn.random=function H5(z,le,Be){if(Be&&"boolean"!=typeof Be&&hu(z,le,Be)&&(le=Be=x),Be===x&&("boolean"==typeof le?(Be=le,le=x):"boolean"==typeof z&&(Be=z,z=x)),z===x&&le===x?(z=0,le=1):(z=Df(z),le===x?(le=z,z=0):le=Df(le)),z>le){var Nt=z;z=le,le=Nt}if(Be||z%1||le%1){var Cn=Zx();return Dl(z+Cn*(le-z+Mx("1e-"+((Cn+"").length-1))),le)}return SE(z,le)},jn.reduce=function uD(z,le,Be){var Nt=Eo(z)?A1:h_,Cn=arguments.length<3;return Nt(z,Vs(le,4),Be,Cn,wf)},jn.reduceRight=function dD(z,le,Be){var Nt=Eo(z)?Tc:h_,Cn=arguments.length<3;return Nt(z,Vs(le,4),Be,Cn,wE)},jn.repeat=function Q5(z,le,Be){return le=(Be?hu(z,le,Be):le===x)?1:Do(le),ME(Ma(z),le)},jn.replace=function q5(){var z=arguments,le=Ma(z[0]);return z.length<3?le:le.replace(z[1],z[2])},jn.result=function I5(z,le,Be){var Nt=-1,Cn=(le=Cp(le,z)).length;for(Cn||(Cn=1,z=x);++Nt<Cn;){var Kn=null==z?x:z[Hh(le[Nt])];Kn===x&&(Nt=Cn,Kn=Be),z=Mf(Kn)?Kn.call(z):Kn}return z},jn.round=KA,jn.runInContext=Rr,jn.sample=function fD(z){return(Eo(z)?iw:s3)(z)},jn.size=function mD(z){if(null==z)return 0;if(Lu(z))return Dw(z)?gf(z):z.length;var le=Vc(z);return le==Qu||le==ed?z.size:xg(z).length},jn.snakeCase=eA,jn.some=function yD(z,le,Be){var Nt=Eo(z)?kh:c3;return Be&&hu(z,le,Be)&&(le=x),Nt(z,Vs(le,3))},jn.sortedIndex=function pM(z,le){return dw(z,le)},jn.sortedIndexBy=function gM(z,le,Be){return DE(z,le,Vs(Be,2))},jn.sortedIndexOf=function mM(z,le){var Be=null==z?0:z.length;if(Be){var Nt=dw(z,le);if(Nt<Be&&Qd(z[Nt],le))return Nt}return-1},jn.sortedLastIndex=function yM(z,le){return dw(z,le,!0)},jn.sortedLastIndexBy=function vM(z,le,Be){return DE(z,le,Vs(Be,2),!0)},jn.sortedLastIndexOf=function _M(z,le){if(null!=z&&z.length){var Nt=dw(z,le,!0)-1;if(Qd(z[Nt],le))return Nt}return-1},jn.startCase=nA,jn.startsWith=function rA(z,le,Be){return z=Ma(z),Be=null==Be?0:xf(Do(Be),0,z.length),le=td(le),z.slice(Be,Be+le.length)==le},jn.subtract=ZA,jn.sum=function XA(z){return z&&z.length?yp(z,Nu):0},jn.sumBy=function JA(z,le){return z&&z.length?yp(z,Vs(le,2)):0},jn.template=function iA(z,le,Be){var Nt=jn.templateSettings;Be&&hu(z,le,Be)&&(le=x),z=Ma(z),le=Aw({},le,Nt,iS);var Cr,Fr,Cn=Aw({},le.imports,Nt.imports,iS),Kn=mc(Cn),fr=I1(Cn,Kn),di=0,hi=le.interpolate||rg,yi="__p += '",Vi=P1((le.escape||rg).source+"|"+hi.source+"|"+(hi===ax?R2:rg).source+"|"+(le.evaluate||rg).source+"|$","g"),ms="//# sourceURL="+(ma.call(le,"sourceURL")?(le.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++$2+"]")+"\n";z.replace(Vi,function(Gs,Go,ta,rd,fu,id){return ta||(ta=rd),yi+=z.slice(di,id).replace(B2,q2),Go&&(Cr=!0,yi+="' +\n__e("+Go+") +\n'"),fu&&(Fr=!0,yi+="';\n"+fu+";\n__p += '"),ta&&(yi+="' +\n((__t = ("+ta+")) == null ? '' : __t) +\n'"),di=id+Gs.length,Gs}),yi+="';\n";var $s=ma.call(le,"variable")&&le.variable;if($s){if(P2.test($s))throw new fo("Invalid `variable` option passed into `_.template`")}else yi="with (obj) {\n"+yi+"\n}\n";yi=(Fr?yi.replace(rx,""):yi).replace(Uv,"$1").replace(M2,"$1;"),yi="function("+($s||"obj")+") {\n"+($s?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(Cr?", __e = _.escape":"")+(Fr?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+yi+"return __p\n}";var Oo=XS(function(){return ga(Kn,ms+"return "+yi).apply(x,fr)});if(Oo.source=yi,KE(Oo))throw Oo;return Oo},jn.times=function LA(z,le){if((z=Do(z))<1||z>Ah)return[];var Be=xd,Nt=Dl(z,xd);le=Vs(le),z-=xd;for(var Cn=cg(Nt,le);++Be<z;)le(Be);return Cn},jn.toFinite=Df,jn.toInteger=Do,jn.toLength=HS,jn.toLower=function sA(z){return Ma(z).toLowerCase()},jn.toNumber=Dd,jn.toSafeInteger=function s5(z){return z?xf(Do(z),-Ah,Ah):0===z?z:0},jn.toString=Ma,jn.toUpper=function oA(z){return Ma(z).toUpperCase()},jn.trim=function aA(z,le,Be){if((z=Ma(z))&&(Be||le===x))return f_(z);if(!z||!(le=td(le)))return z;var Nt=Iu(z),Cn=Iu(le);return Sp(Nt,p_(Nt,Cn),Nx(Nt,Cn)+1).join("")},jn.trimEnd=function lA(z,le,Be){if((z=Ma(z))&&(Be||le===x))return z.slice(0,v_(z)+1);if(!z||!(le=td(le)))return z;var Nt=Iu(z);return Sp(Nt,0,Nx(Nt,Iu(le))+1).join("")},jn.trimStart=function cA(z,le,Be){if((z=Ma(z))&&(Be||le===x))return z.replace(Th,"");if(!z||!(le=td(le)))return z;var Nt=Iu(z);return Sp(Nt,p_(Nt,Iu(le))).join("")},jn.truncate=function uA(z,le){var Be=30,Nt="...";if(xl(le)){var Cn="separator"in le?le.separator:Cn;Be="length"in le?Do(le.length):Be,Nt="omission"in le?td(le.omission):Nt}var Kn=(z=Ma(z)).length;if(pf(z)){var fr=Iu(z);Kn=fr.length}if(Be>=Kn)return z;var Cr=Be-gf(Nt);if(Cr<1)return Nt;var Fr=fr?Sp(fr,0,Cr).join(""):z.slice(0,Cr);if(Cn===x)return Fr+Nt;if(fr&&(Cr+=Fr.length-Cr),ZE(Cn)){if(z.slice(Cr).search(Cn)){var di,hi=Fr;for(Cn.global||(Cn=P1(Cn.source,Ma(Vv.exec(Cn))+"g")),Cn.lastIndex=0;di=Cn.exec(hi);)var yi=di.index;Fr=Fr.slice(0,yi===x?Cr:yi)}}else if(z.indexOf(td(Cn),Cr)!=Cr){var Vi=Fr.lastIndexOf(Cn);Vi>-1&&(Fr=Fr.slice(0,Vi))}return Fr+Nt},jn.unescape=function dA(z){return(z=Ma(z))&&D2.test(z)?z.replace(ix,rE):z},jn.uniqueId=function NA(z){var le=++_C;return Ma(z)+le},jn.upperCase=hA,jn.upperFirst=QE,jn.each=MS,jn.eachRight=DS,jn.first=wS,tC(jn,function(){var z={};return Jd(jn,function(le,Be){ma.call(jn.prototype,Be)||(z[Be]=le)}),z}(),{chain:!1}),jn.VERSION="4.17.21",lu(["bind","bindKey","curry","curryRight","partial","partialRight"],function(z){jn[z].placeholder=jn}),lu(["drop","take"],function(z,le){$o.prototype[z]=function(Be){Be=Be===x?1:bl(Do(Be),0);var Nt=this.__filtered__&&!le?new $o(this):this.clone();return Nt.__filtered__?Nt.__takeCount__=Dl(Be,Nt.__takeCount__):Nt.__views__.push({size:Dl(Be,xd),type:z+(Nt.__dir__<0?"Right":"")}),Nt},$o.prototype[z+"Right"]=function(Be){return this.reverse()[z](Be).reverse()}}),lu(["filter","map","takeWhile"],function(z,le){var Be=le+1,Nt=1==Be||3==Be;$o.prototype[z]=function(Cn){var Kn=this.clone();return Kn.__iteratees__.push({iteratee:Vs(Cn,3),type:Be}),Kn.__filtered__=Kn.__filtered__||Nt,Kn}}),lu(["head","last"],function(z,le){var Be="take"+(le?"Right":"");$o.prototype[z]=function(){return this[Be](1).value()[0]}}),lu(["initial","tail"],function(z,le){var Be="drop"+(le?"":"Right");$o.prototype[z]=function(){return this.__filtered__?new $o(this):this[Be](1)}}),$o.prototype.compact=function(){return this.filter(Nu)},$o.prototype.find=function(z){return this.filter(z).head()},$o.prototype.findLast=function(z){return this.reverse().find(z)},$o.prototype.invokeMap=Fo(function(z,le){return"function"==typeof z?new $o(this):this.map(function(Be){return qn(Be,z,le)})}),$o.prototype.reject=function(z){return this.filter(Sw(Vs(z)))},$o.prototype.slice=function(z,le){z=Do(z);var Be=this;return Be.__filtered__&&(z>0||le<0)?new $o(Be):(z<0?Be=Be.takeRight(-z):z&&(Be=Be.drop(z)),le!==x&&(Be=(le=Do(le))<0?Be.dropRight(-le):Be.take(le-z)),Be)},$o.prototype.takeRightWhile=function(z){return this.reverse().takeWhile(z).reverse()},$o.prototype.toArray=function(){return this.take(xd)},Jd($o.prototype,function(z,le){var Be=/^(?:filter|find|map|reject)|While$/.test(le),Nt=/^(?:head|last)$/.test(le),Cn=jn[Nt?"take"+("last"==le?"Right":""):le],Kn=Nt||/^find/.test(le);Cn&&(jn.prototype[le]=function(){var fr=this.__wrapped__,Cr=Nt?[1]:arguments,Fr=fr instanceof $o,di=Cr[0],hi=Fr||Eo(fr),yi=function(Go){var ta=Cn.apply(jn,Zd([Go],Cr));return Nt&&Vi?ta[0]:ta};hi&&Be&&"function"==typeof di&&1!=di.length&&(Fr=hi=!1);var Vi=this.__chain__,ms=!!this.__actions__.length,$s=Kn&&!Vi,Oo=Fr&&!ms;if(!Kn&&hi){fr=Oo?fr:new $o(this);var Gs=z.apply(fr,Cr);return Gs.__actions__.push({func:xw,args:[yi],thisArg:x}),new ku(Gs,Vi)}return $s&&Oo?z.apply(this,Cr):(Gs=this.thru(yi),$s?Nt?Gs.value()[0]:Gs.value():Gs)})}),lu(["pop","push","shift","sort","splice","unshift"],function(z){var le=dg[z],Be=/^(?:push|sort|unshift)$/.test(z)?"tap":"thru",Nt=/^(?:pop|shift)$/.test(z);jn.prototype[z]=function(){var Cn=arguments;if(Nt&&!this.__chain__){var Kn=this.value();return le.apply(Eo(Kn)?Kn:[],Cn)}return this[Be](function(fr){return le.apply(Eo(fr)?fr:[],Cn)})}}),Jd($o.prototype,function(z,le){var Be=jn[le];if(Be){var Nt=Be.name+"";ma.call(Nh,Nt)||(Nh[Nt]=[]),Nh[Nt].push({name:le,func:Be})}}),Nh[pw(x,2).name]=[{name:"wrapper",func:x}],$o.prototype.clone=function wC(){var z=new $o(this.__wrapped__);return z.__actions__=Pu(this.__actions__),z.__dir__=this.__dir__,z.__filtered__=this.__filtered__,z.__iteratees__=Pu(this.__iteratees__),z.__takeCount__=this.__takeCount__,z.__views__=Pu(this.__views__),z},$o.prototype.reverse=function qx(){if(this.__filtered__){var z=new $o(this);z.__dir__=-1,z.__filtered__=!0}else(z=this.clone()).__dir__*=-1;return z},$o.prototype.value=function fE(){var z=this.__wrapped__.value(),le=this.__dir__,Be=Eo(z),Nt=le<0,Cn=Be?z.length:0,Kn=function S3(z,le,Be){for(var Nt=-1,Cn=Be.length;++Nt<Cn;){var Kn=Be[Nt],fr=Kn.size;switch(Kn.type){case"drop":z+=fr;break;case"dropRight":le-=fr;break;case"take":le=Dl(le,z+fr);break;case"takeRight":z=bl(z,le-fr)}}return{start:z,end:le}}(0,Cn,this.__views__),fr=Kn.start,Cr=Kn.end,Fr=Cr-fr,di=Nt?Cr:fr-1,hi=this.__iteratees__,yi=hi.length,Vi=0,ms=Dl(Fr,this.__takeCount__);if(!Be||!Nt&&Cn==Fr&&ms==Fr)return YC(z,this.__actions__);var $s=[];e:for(;Fr--&&Vi<ms;){for(var Oo=-1,Gs=z[di+=le];++Oo<yi;){var Go=hi[Oo],rd=Go.type,fu=(0,Go.iteratee)(Gs);if(2==rd)Gs=fu;else if(!fu){if(1==rd)continue e;break e}}$s[Vi++]=Gs}return $s},jn.prototype.at=UM,jn.prototype.chain=function VM(){return SS(this)},jn.prototype.commit=function WM(){return new ku(this.value(),this.__chain__)},jn.prototype.next=function zM(){this.__values__===x&&(this.__values__=jS(this.value()));var z=this.__index__>=this.__values__.length;return{done:z,value:z?x:this.__values__[this.__index__++]}},jn.prototype.plant=function GM(z){for(var le,Be=this;Be instanceof B1;){var Nt=vS(Be);Nt.__index__=0,Nt.__values__=x,le?Cn.__wrapped__=Nt:le=Nt;var Cn=Nt;Be=Be.__wrapped__}return Cn.__wrapped__=z,le},jn.prototype.reverse=function KM(){var z=this.__wrapped__;if(z instanceof $o){var le=z;return this.__actions__.length&&(le=new $o(this)),(le=le.reverse()).__actions__.push({func:xw,args:[WE],thisArg:x}),new ku(le,this.__chain__)}return this.thru(WE)},jn.prototype.toJSON=jn.prototype.valueOf=jn.prototype.value=function ZM(){return YC(this.__wrapped__,this.__actions__)},jn.prototype.first=jn.prototype.head,Ic&&(jn.prototype[Ic]=function $M(){return this}),jn}();Kd?((Kd.exports=ug)._=ug,Dx._=ug):lc._=ug}).call(cp)}(Cv,Cv.exports);var Ob=Object.defineProperty,Pb=Object.defineProperties,s1=Object.getOwnPropertyDescriptors,Lb=Object.getOwnPropertySymbols,Rb=Object.prototype.hasOwnProperty,Nb=Object.prototype.propertyIsEnumerable,o1=(oe,y,x)=>y in oe?Ob(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,lf=(oe,y)=>{for(var x in y||(y={}))Rb.call(y,x)&&o1(oe,x,y[x]);if(Lb)for(var x of Lb(y))Nb.call(y,x)&&o1(oe,x,y[x]);return oe},Sv=(oe,y)=>Pb(oe,s1(y));function bd(oe,y,x){var re;const be=function Fu(oe){const[y,x]=oe.split(":");return{namespace:y,reference:x}}(oe);return(null==(re=y.rpcMap)?void 0:re[be.reference])||`https://rpc.walletconnect.com/v1/?chainId=${be.namespace}:${be.reference}&projectId=${x}`}function Gd(oe){return oe.includes(":")?oe.split(":")[1]:oe}function Mv(oe){return oe.map(y=>`${y.split(":")[0]}:${y.split(":")[1]}`)}function Dv(oe){var y,x,re,be;const Ee={};if(!jc(oe))return Ee;for(const[Ye,It]of Object.entries(oe)){const Jn=Xc(Ye)?[Ye]:It.chains,Yn=It.methods||[],ar=It.events||[],Tr=It.rpcMap||{},Qr=fc(Ye);Ee[Qr]=Sv(lf(lf({},Ee[Qr]),It),{chains:co(Jn,null==(y=Ee[Qr])?void 0:y.chains),methods:co(Yn,null==(x=Ee[Qr])?void 0:x.methods),events:co(ar,null==(re=Ee[Qr])?void 0:re.events),rpcMap:lf(lf({},Tr),null==(be=Ee[Qr])?void 0:be.rpcMap)})}return Ee}function jb(oe){return oe.includes(":")?oe.split(":")[2]:oe}function Xw(oe){const y={};for(const[x,re]of Object.entries(oe)){const be=re.methods||[],Ee=re.events||[],Ye=re.accounts||[],It=Xc(x)?[x]:re.chains?re.chains:Mv(re.accounts);y[x]={chains:It,methods:be,events:Ee,accounts:Ye}}return y}function Av(oe){return"number"==typeof oe?oe:oe.includes("0x")?parseInt(oe,16):oe.includes(":")?Number(oe.split(":")[1]):Number(oe)}const Hb={},nl=oe=>Hb[oe],Tv=(oe,y)=>{Hb[oe]=y};class Jw{constructor(y){this.name="polkadot",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(y,x),this.chainId=y,this.events.emit("default_chain_changed",`${this.name}:${y}`)}getAccounts(){const y=this.namespace.accounts;return y&&y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2])||[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;const be=Gd(x);y[be]=this.createHttpProvider(be,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||bd(y,this.namespace,this.client.core.projectId);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Dh(re,nl("disableProviderPing")))}}class Qw{constructor(y){this.name="eip155",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}request(y){var x=this;return(0,b.Z)(function*(){switch(y.request.method){case"eth_requestAccounts":case"eth_accounts":return x.getAccounts();case"wallet_switchEthereumChain":return yield x.handleSwitchChain(y);case"eth_chainId":return parseInt(x.getDefaultChain())}return x.namespace.methods.includes(y.request.method)?yield x.client.request(y):x.getHttpProvider().request(y.request)})()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(parseInt(y),x),this.chainId=parseInt(y),this.events.emit("default_chain_changed",`${this.name}:${y}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}createHttpProvider(y,x){const re=x||bd(`${this.name}:${y}`,this.namespace,this.client.core.projectId);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Au(re,nl("disableProviderPing")))}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;const be=parseInt(Gd(x));y[be]=this.createHttpProvider(be,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getAccounts(){const y=this.namespace.accounts;return y?[...new Set(y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2]))]:[]}getHttpProvider(){const y=this.chainId,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}handleSwitchChain(y){var x=this;return(0,b.Z)(function*(){var re,be;let Ee=y.request.params?null==(re=y.request.params[0])?void 0:re.chainId:"0x0";Ee=Ee.startsWith("0x")?Ee:`0x${Ee}`;const Ye=parseInt(Ee,16);if(x.isChainApproved(Ye))x.setDefaultChain(`${Ye}`);else{if(!x.namespace.methods.includes("wallet_switchEthereumChain"))throw new Error(`Failed to switch to chain 'eip155:${Ye}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);yield x.client.request({topic:y.topic,request:{method:y.request.method,params:[{chainId:Ee}]},chainId:null==(be=x.namespace.chains)?void 0:be[0]}),x.setDefaultChain(`${Ye}`)}return null})()}isChainApproved(y){return this.namespace.chains.includes(`${this.name}:${y}`)}}class qw{constructor(y){this.name="solana",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(y,x),this.chainId=y,this.events.emit("default_chain_changed",`${this.name}:${y}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}getAccounts(){const y=this.namespace.accounts;return y?[...new Set(y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2]))]:[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;const be=Gd(x);y[be]=this.createHttpProvider(be,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||bd(y,this.namespace,this.client.core.projectId);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Dh(re,nl("disableProviderPing")))}}class e2{constructor(y){this.name="cosmos",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(y,x),this.chainId=y,this.events.emit("default_chain_changed",`${this.name}:${this.chainId}`)}getAccounts(){const y=this.namespace.accounts;return y?[...new Set(y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2]))]:[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;const be=Gd(x);y[be]=this.createHttpProvider(be,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||bd(y,this.namespace,this.client.core.projectId);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Dh(re,nl("disableProviderPing")))}}class t2{constructor(y){this.name="cip34",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(y,x),this.chainId=y,this.events.emit("default_chain_changed",`${this.name}:${this.chainId}`)}getAccounts(){const y=this.namespace.accounts;return y?[...new Set(y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2]))]:[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{const re=this.getCardanoRPCUrl(x),be=Gd(x);y[be]=this.createHttpProvider(be,re)}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}getCardanoRPCUrl(y){const x=this.namespace.rpcMap;if(x)return x[y]}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||this.getCardanoRPCUrl(y);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Dh(re,nl("disableProviderPing")))}}class n2{constructor(y){this.name="elrond",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(y,x),this.chainId=y,this.events.emit("default_chain_changed",`${this.name}:${y}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}getAccounts(){const y=this.namespace.accounts;return y?[...new Set(y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2]))]:[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;const be=Gd(x);y[be]=this.createHttpProvider(be,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||bd(y,this.namespace,this.client.core.projectId);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Dh(re,nl("disableProviderPing")))}}class r2{constructor(y){this.name="multiversx",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){this.httpProviders[y]||this.setHttpProvider(y,x),this.chainId=y,this.events.emit("default_chain_changed",`${this.name}:${y}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}getAccounts(){const y=this.namespace.accounts;return y?[...new Set(y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2]))]:[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;const be=Gd(x);y[be]=this.createHttpProvider(be,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||bd(y,this.namespace,this.client.core.projectId);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);return new Ol(new Dh(re,nl("disableProviderPing")))}}class s2{constructor(y){this.name="near",this.namespace=y.namespace,this.events=nl("events"),this.client=nl("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(y){this.namespace=Object.assign(this.namespace,y)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const y=this.namespace.chains[0];if(!y)throw new Error("ChainId not found");return y.split(":")[1]}request(y){return this.namespace.methods.includes(y.request.method)?this.client.request(y):this.getHttpProvider().request(y.request)}setDefaultChain(y,x){if(this.chainId=y,!this.httpProviders[y]){const re=x||bd(`${this.name}:${y}`,this.namespace);if(!re)throw new Error(`No RPC url provided for chainId: ${y}`);this.setHttpProvider(y,re)}this.events.emit("default_chain_changed",`${this.name}:${this.chainId}`)}getAccounts(){const y=this.namespace.accounts;return y&&y.filter(x=>x.split(":")[1]===this.chainId.toString()).map(x=>x.split(":")[2])||[]}createHttpProviders(){const y={};return this.namespace.chains.forEach(x=>{var re;y[x]=this.createHttpProvider(x,null==(re=this.namespace.rpcMap)?void 0:re[x])}),y}getHttpProvider(){const y=`${this.name}:${this.chainId}`,x=this.httpProviders[y];if(typeof x>"u")throw new Error(`JSON-RPC provider for ${y} not found`);return x}setHttpProvider(y,x){const re=this.createHttpProvider(y,x);re&&(this.httpProviders[y]=re)}createHttpProvider(y,x){const re=x||bd(y,this.namespace);return typeof re>"u"?void 0:new Ol(new Dh(re,nl("disableProviderPing")))}}var o2=Object.defineProperty,a2=Object.defineProperties,l2=Object.getOwnPropertyDescriptors,Yb=Object.getOwnPropertySymbols,c2=Object.prototype.hasOwnProperty,Ub=Object.prototype.propertyIsEnumerable,Iv=(oe,y,x)=>y in oe?o2(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,H0=(oe,y)=>{for(var x in y||(y={}))c2.call(y,x)&&Iv(oe,x,y[x]);if(Yb)for(var x of Yb(y))Ub.call(y,x)&&Iv(oe,x,y[x]);return oe},a1=(oe,y)=>a2(oe,l2(y));class l1{constructor(y){this.events=new(po()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=y,this.logger=typeof y?.logger<"u"&&"string"!=typeof y?.logger?y.logger:(0,Ro.pino)((0,Ro.getDefaultLoggerOptions)({level:y?.logger||"error"})),this.disableProviderPing=y?.disableProviderPing||!1}static init(y){return(0,b.Z)(function*(){const x=new l1(y);return yield x.initialize(),x})()}request(y,x){var re=this;return(0,b.Z)(function*(){const[be,Ee]=re.validateChain(x);if(!re.session)throw new Error("Please call connect() before request()");return yield re.getProvider(be).request({request:H0({},y),chainId:`${be}:${Ee}`,topic:re.session.topic})})()}sendAsync(y,x,re){this.request(y,re).then(be=>x(null,be)).catch(be=>x(be,void 0))}enable(){var y=this;return(0,b.Z)(function*(){if(!y.client)throw new Error("Sign Client not initialized");return y.session||(yield y.connect({namespaces:y.namespaces,optionalNamespaces:y.optionalNamespaces,sessionProperties:y.sessionProperties})),yield y.requestAccounts()})()}disconnect(){var y=this;return(0,b.Z)(function*(){var x;if(!y.session)throw new Error("Please call connect() before enable()");yield y.client.disconnect({topic:null==(x=y.session)?void 0:x.topic,reason:Ka("USER_DISCONNECTED")}),yield y.cleanup()})()}connect(y){var x=this;return(0,b.Z)(function*(){if(!x.client)throw new Error("Sign Client not initialized");if(x.setNamespaces(y),yield x.cleanupPendingPairings(),!y.skipPairing)return yield x.pair(y.pairingTopic)})()}on(y,x){this.events.on(y,x)}once(y,x){this.events.once(y,x)}removeListener(y,x){this.events.removeListener(y,x)}off(y,x){this.events.off(y,x)}get isWalletConnect(){return!0}pair(y){var x=this;return(0,b.Z)(function*(){x.shouldAbortPairingAttempt=!1;let re=0;do{if(x.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(re>=x.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:be,approval:Ee}=yield x.client.connect({pairingTopic:y,requiredNamespaces:x.namespaces,optionalNamespaces:x.optionalNamespaces,sessionProperties:x.sessionProperties});be&&(x.uri=be,x.events.emit("display_uri",be)),yield Ee().then(Ye=>{x.session=Ye,x.namespaces||(x.namespaces=Xw(Ye.namespaces),x.persist("namespaces",x.namespaces))}).catch(Ye=>{if(Ye.message!==_v)throw Ye;re++})}while(!x.session);return x.onConnect(),x.session})()}setDefaultChain(y,x){try{if(!this.session)return;const[re,be]=this.validateChain(y);this.getProvider(re).setDefaultChain(be,x)}catch(re){if(!/Please call connect/.test(re.message))throw re}}cleanupPendingPairings(y={}){var x=this;return(0,b.Z)(function*(){x.logger.info("Cleaning up inactive pairings...");const re=x.client.pairing.getAll();if(nc(re)){for(const be of re)y.deletePairings?x.client.core.expirer.set(be.topic,0):yield x.client.core.relayer.subscriber.unsubscribe(be.topic);x.logger.info(`Inactive pairings cleared: ${re.length}`)}})()}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}checkStorage(){var y=this;return(0,b.Z)(function*(){y.namespaces=yield y.getFromStore("namespaces"),y.optionalNamespaces=(yield y.getFromStore("optionalNamespaces"))||{},y.client.session.length&&(y.session=y.client.session.get(y.client.session.keys[y.client.session.keys.length-1]),y.createProviders())})()}initialize(){var y=this;return(0,b.Z)(function*(){y.logger.trace("Initialized"),yield y.createClient(),yield y.checkStorage(),y.registerEventListeners()})()}createClient(){var y=this;return(0,b.Z)(function*(){y.client=y.providerOpts.client||(yield Tb.init({logger:y.providerOpts.logger||"error",relayUrl:y.providerOpts.relayUrl||"wss://relay.walletconnect.com",projectId:y.providerOpts.projectId,metadata:y.providerOpts.metadata,storageOptions:y.providerOpts.storageOptions,storage:y.providerOpts.storage,name:y.providerOpts.name})),y.logger.trace("SignClient Initialized")})()}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const y=[...new Set(Object.keys(this.session.namespaces).map(x=>fc(x)))];Tv("client",this.client),Tv("events",this.events),Tv("disableProviderPing",this.disableProviderPing),y.forEach(x=>{if(!this.session)return;const re=function Fb(oe,y){const x=Object.keys(y.namespaces).filter(be=>be.includes(oe));if(!x.length)return[];const re=[];return x.forEach(be=>{re.push(...y.namespaces[be].accounts)}),re}(x,this.session),be=Mv(re),Ee=function Bb(oe={},y={}){const x=Dv(oe),re=Dv(y);return Cv.exports.merge(x,re)}(this.namespaces,this.optionalNamespaces),Ye=a1(H0({},Ee[x]),{accounts:re,chains:be});switch(x){case"eip155":this.rpcProviders[x]=new Qw({namespace:Ye});break;case"solana":this.rpcProviders[x]=new qw({namespace:Ye});break;case"cosmos":this.rpcProviders[x]=new e2({namespace:Ye});break;case"polkadot":this.rpcProviders[x]=new Jw({namespace:Ye});break;case"cip34":this.rpcProviders[x]=new t2({namespace:Ye});break;case"elrond":this.rpcProviders[x]=new n2({namespace:Ye});break;case"multiversx":this.rpcProviders[x]=new r2({namespace:Ye});break;case"near":this.rpcProviders[x]=new s2({namespace:Ye})}})}registerEventListeners(){var y=this;if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",x=>{this.events.emit("session_ping",x)}),this.client.on("session_event",x=>{const{params:re}=x,{event:be}=re;if("accountsChanged"===be.name){const Ee=be.data;Ee&&nc(Ee)&&this.events.emit("accountsChanged",Ee.map(jb))}else if("chainChanged"===be.name){const Ee=re.chainId,Ye=re.event.data,It=fc(Ee),Jn=Av(Ee)!==Av(Ye)?`${It}:${Av(Ye)}`:Ee;this.onChainChanged(Jn)}else this.events.emit(be.name,be.data);this.events.emit("session_event",x)}),this.client.on("session_update",({topic:x,params:re})=>{var be;const{namespaces:Ee}=re,Ye=null==(be=this.client)?void 0:be.session.get(x);this.session=a1(H0({},Ye),{namespaces:Ee}),this.onSessionUpdate(),this.events.emit("session_update",{topic:x,params:re})}),this.client.on("session_delete",function(){var x=(0,b.Z)(function*(re){yield y.cleanup(),y.events.emit("session_delete",re),y.events.emit("disconnect",a1(H0({},Ka("USER_DISCONNECTED")),{data:re.topic}))});return function(re){return x.apply(this,arguments)}}()),this.on("default_chain_changed",x=>{this.onChainChanged(x,!0)})}getProvider(y){if(!this.rpcProviders[y])throw new Error(`Provider not found: ${y}`);return this.rpcProviders[y]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(y=>{var x;this.getProvider(y).updateNamespace(null==(x=this.session)?void 0:x.namespaces[y])})}setNamespaces(y){const{namespaces:x,optionalNamespaces:re,sessionProperties:be}=y;x&&Object.keys(x).length&&(this.namespaces=x),re&&Object.keys(re).length&&(this.optionalNamespaces=re),this.sessionProperties=be,this.persist("namespaces",x),this.persist("optionalNamespaces",re)}validateChain(y){const[x,re]=y?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[x,re];if(x&&!Object.keys(this.namespaces||{}).map(Ye=>fc(Ye)).includes(x))throw new Error(`Namespace '${x}' is not configured. Please call connect() first with namespace config.`);if(x&&re)return[x,re];const be=fc(Object.keys(this.namespaces)[0]);return[be,this.rpcProviders[be].getDefaultChain()]}requestAccounts(){var y=this;return(0,b.Z)(function*(){const[x]=y.validateChain();return yield y.getProvider(x).requestAccounts()})()}onChainChanged(y,x=!1){var re;if(!this.namespaces)return;const[be,Ee]=this.validateChain(y);x||this.getProvider(be).setDefaultChain(Ee),(null!=(re=this.namespaces[be])?re:this.namespaces[`${be}:${Ee}`]).defaultChain=Ee,this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",Ee)}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}cleanup(){var y=this;return(0,b.Z)(function*(){y.session=void 0,y.namespaces=void 0,y.optionalNamespaces=void 0,y.sessionProperties=void 0,y.persist("namespaces",void 0),y.persist("optionalNamespaces",void 0),y.persist("sessionProperties",void 0),yield y.cleanupPendingPairings({deletePairings:!0})})()}persist(y,x){this.client.core.storage.setItem(`${r1}/${y}`,x)}getFromStore(y){var x=this;return(0,b.Z)(function*(){return yield x.client.core.storage.getItem(`${r1}/${y}`)})()}}const Vb=l1,Y0=["eth_sendTransaction","personal_sign"],cf=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Ov=["chainChanged","accountsChanged"],u2=["chainChanged","accountsChanged","message","disconnect","connect"];var up=Object.defineProperty,aC=Object.defineProperties,Pv=Object.getOwnPropertyDescriptors,d2=Object.getOwnPropertySymbols,Gb=Object.prototype.hasOwnProperty,Kb=Object.prototype.propertyIsEnumerable,h2=(oe,y,x)=>y in oe?up(oe,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):oe[y]=x,xs=(oe,y)=>{for(var x in y||(y={}))Gb.call(y,x)&&h2(oe,x,y[x]);if(d2)for(var x of d2(y))Kb.call(y,x)&&h2(oe,x,y[x]);return oe},Zb=(oe,y)=>aC(oe,Pv(y));function c1(oe){return Number(oe[0].split(":")[1])}function Lv(oe){return`0x${oe.toString(16)}`}class Rv{constructor(){this.events=new Cs.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY="wc@2:ethereum_provider:",this.on=(y,x)=>(this.events.on(y,x),this),this.once=(y,x)=>(this.events.once(y,x),this),this.removeListener=(y,x)=>(this.events.removeListener(y,x),this),this.off=(y,x)=>(this.events.off(y,x),this),this.parseAccount=y=>this.isCompatibleChainId(y)?this.parseAccountId(y).address:y,this.signer={},this.rpc={}}static init(y){return(0,b.Z)(function*(){const x=new Rv;return yield x.initialize(y),x})()}request(y){var x=this;return(0,b.Z)(function*(){return yield x.signer.request(y,x.formatChainId(x.chainId))})()}sendAsync(y,x){this.signer.sendAsync(y,x,this.formatChainId(this.chainId))}get connected(){return!!this.signer.client&&this.signer.client.core.relayer.connected}get connecting(){return!!this.signer.client&&this.signer.client.core.relayer.connecting}enable(){var y=this;return(0,b.Z)(function*(){return y.session||(yield y.connect()),yield y.request({method:"eth_requestAccounts"})})()}connect(y){var x=this;return(0,b.Z)(function*(){if(!x.signer.client)throw new Error("Provider not initialized. Call init() first");x.loadConnectOpts(y);const{required:re,optional:be}=function u1(oe){const{chains:y,optionalChains:x,methods:re,optionalMethods:be,events:Ee,optionalEvents:Ye,rpcMap:It}=oe;if(!nc(y))throw new Error("Invalid chains");const Jn={chains:y,methods:re||Y0,events:Ee||Ov,rpcMap:xs({},y.length?{[c1(y)]:It[c1(y)]}:{})},Yn=Ee?.filter(ci=>!Ov.includes(ci)),ar=re?.filter(ci=>!Y0.includes(ci));if(!(x||Ye||be||null!=Yn&&Yn.length||null!=ar&&ar.length))return{required:y.length?Jn:void 0};const Qr={chains:[...new Set(Yn?.length&&ar?.length||!x?Jn.chains.concat(x||[]):x)],methods:[...new Set(Jn.methods.concat(null!=be&&be.length?be:cf))],events:[...new Set(Jn.events.concat(null!=Ye&&Ye.length?Ye:u2))],rpcMap:It};return{required:y.length?Jn:void 0,optional:x.length?Qr:void 0}}(x.rpc);try{const Ee=yield new Promise(function(){var It=(0,b.Z)(function*(Jn,Yn){var ar;x.rpc.showQrModal&&(null==(ar=x.modal)||ar.subscribeModal(Tr=>{!Tr.open&&!x.signer.session&&(x.signer.abortPairingAttempt(),Yn(new Error("Connection request reset. Please try again.")))})),yield x.signer.connect(Zb(xs({namespaces:xs({},re&&{[x.namespace]:re})},be&&{optionalNamespaces:{[x.namespace]:be}}),{pairingTopic:y?.pairingTopic})).then(Tr=>{Jn(Tr)}).catch(Tr=>{Yn(new Error(Tr.message))})});return function(Jn,Yn){return It.apply(this,arguments)}}());if(!Ee)return;const Ye=function ad(oe,y=[]){const x=[];return Object.keys(oe).forEach(re=>{y.length&&!y.includes(re)||x.push(...oe[re].accounts)}),x}(Ee.namespaces,[x.namespace]);x.setChainIds(x.rpc.chains.length?x.rpc.chains:Ye),x.setAccounts(Ye),x.events.emit("connect",{chainId:Lv(x.chainId)})}catch(Ee){throw x.signer.logger.error(Ee),Ee}finally{x.modal&&x.modal.closeModal()}})()}disconnect(){var y=this;return(0,b.Z)(function*(){y.session&&(yield y.signer.disconnect()),y.reset()})()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",y=>{const{params:x}=y,{event:re}=x;"accountsChanged"===re.name?(this.accounts=this.parseAccounts(re.data),this.events.emit("accountsChanged",this.accounts)):"chainChanged"===re.name?this.setChainId(this.formatChainId(re.data)):this.events.emit(re.name,re.data),this.events.emit("session_event",y)}),this.signer.on("chainChanged",y=>{const x=parseInt(y);this.chainId=x,this.events.emit("chainChanged",Lv(this.chainId)),this.persist()}),this.signer.on("session_update",y=>{this.events.emit("session_update",y)}),this.signer.on("session_delete",y=>{this.reset(),this.events.emit("session_delete",y),this.events.emit("disconnect",Zb(xs({},Ka("USER_DISCONNECTED")),{data:y.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",y=>{var x,re;this.rpc.showQrModal&&(null==(x=this.modal)||x.closeModal(),null==(re=this.modal)||re.openModal({uri:y})),this.events.emit("display_uri",y)})}switchEthereumChain(y){this.request({method:"wallet_switchEthereumChain",params:[{chainId:y.toString(16)}]})}isCompatibleChainId(y){return"string"==typeof y&&y.startsWith(`${this.namespace}:`)}formatChainId(y){return`${this.namespace}:${y}`}parseChainId(y){return Number(y.split(":")[1])}setChainIds(y){const x=y.filter(re=>this.isCompatibleChainId(re)).map(re=>this.parseChainId(re));x.length&&(this.chainId=x[0],this.events.emit("chainChanged",Lv(this.chainId)),this.persist())}setChainId(y){if(this.isCompatibleChainId(y)){const x=this.parseChainId(y);this.chainId=x,this.switchEthereumChain(x)}}parseAccountId(y){const[x,re,be]=y.split(":");return{chainId:`${x}:${re}`,address:be}}setAccounts(y){this.accounts=y.filter(x=>this.parseChainId(this.parseAccountId(x).chainId)===this.chainId).map(x=>this.parseAccountId(x).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(y){var x,re;const be=null!=(x=y?.chains)?x:[],Ee=null!=(re=y?.optionalChains)?re:[],Ye=be.concat(Ee);if(!Ye.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const It=be.length?y?.methods||Y0:[],Jn=be.length?y?.events||Ov:[],Yn=y?.optionalMethods||[],ar=y?.optionalEvents||[],Tr=y?.rpcMap||this.buildRpcMap(Ye,y.projectId),Qr=y?.qrModalOptions||void 0;return{chains:be?.map(ci=>this.formatChainId(ci)),optionalChains:Ee.map(ci=>this.formatChainId(ci)),methods:It,events:Jn,optionalMethods:Yn,optionalEvents:ar,rpcMap:Tr,showQrModal:!(null==y||!y.showQrModal),qrModalOptions:Qr,projectId:y.projectId,metadata:y.metadata}}buildRpcMap(y,x){const re={};return y.forEach(be=>{re[be]=this.getRpcUrl(be,x)}),re}initialize(y){var x=this;return(0,b.Z)(function*(){if(x.rpc=x.getRpcConfig(y),x.chainId=c1(x.rpc.chains.length?x.rpc.chains:x.rpc.optionalChains),x.signer=yield Vb.init({projectId:x.rpc.projectId,metadata:x.rpc.metadata,disableProviderPing:y.disableProviderPing,relayUrl:y.relayUrl,storageOptions:y.storageOptions}),x.registerEventListeners(),yield x.loadPersistedSession(),x.rpc.showQrModal){let re;try{const{WalletConnectModal:be}=yield t.e(283).then(t.bind(t,41283));re=be}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(re)try{x.modal=new re(xs({walletConnectVersion:2,projectId:x.rpc.projectId,standaloneChains:x.rpc.chains},x.rpc.qrModalOptions))}catch(be){throw x.signer.logger.error(be),new Error("Could not generate WalletConnectModal Instance")}}})()}loadConnectOpts(y){if(!y)return;const{chains:x,optionalChains:re,rpcMap:be}=y;x&&nc(x)&&(this.rpc.chains=x.map(Ee=>this.formatChainId(Ee)),x.forEach(Ee=>{this.rpc.rpcMap[Ee]=be?.[Ee]||this.getRpcUrl(Ee)})),re&&nc(re)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=re?.map(Ee=>this.formatChainId(Ee)),re.forEach(Ee=>{this.rpc.rpcMap[Ee]=be?.[Ee]||this.getRpcUrl(Ee)}))}getRpcUrl(y,x){var re;return(null==(re=this.rpc.rpcMap)?void 0:re[y])||`https://rpc.walletconnect.com/v1/?chainId=eip155:${y}&projectId=${x||this.rpc.projectId}`}loadPersistedSession(){var y=this;return(0,b.Z)(function*(){if(!y.session)return;const x=yield y.signer.client.core.storage.getItem(`${y.STORAGE_KEY}/chainId`),re=y.session.namespaces[`${y.namespace}:${x}`]?y.session.namespaces[`${y.namespace}:${x}`]:y.session.namespaces[y.namespace];y.setChainIds(x?[y.formatChainId(x)]:re?.accounts),y.setAccounts(re?.accounts)})()}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(y){return"string"==typeof y||y instanceof String?[this.parseAccount(y)]:y.map(x=>this.parseAccount(x))}}var uf=t(28016),cl=t(51126),lC=t(75414);const ea_WALLET_ID="@w3m/wallet_id",Xl={getCaipDefaultChain(oe){if(oe)return{id:`eip155:${oe.chainId}`,name:oe.name,imageId:Zi.EIP155NetworkImageIds[oe.chainId]}},hexStringToNumber(oe){const y=oe.startsWith("0x")?oe.slice(2):oe;return parseInt(y,16)},numberToHexString:oe=>`0x${oe.toString(16)}`,getUserInfo:oe=>(0,b.Z)(function*(){const[y,x]=yield Promise.all([Xl.getAddress(oe),Xl.getChainId(oe)]);return{chainId:x,address:y}})(),getChainId:oe=>(0,b.Z)(function*(){const y=yield oe.request({method:"eth_chainId"});return Number(y)})(),getAddress:oe=>(0,b.Z)(function*(){const[y]=yield oe.request({method:"eth_accounts"});return y})(),addEthereumChain:(oe,y)=>(0,b.Z)(function*(){yield oe.request({method:"wallet_addEthereumChain",params:[{chainId:Xl.numberToHexString(y.chainId),rpcUrls:y.rpcUrl,chainName:y.name,nativeCurrency:{name:y.currency,decimals:18,symbol:y.currency},blockExplorerUrls:y.explorerUrl,iconUrls:[Zi.EIP155NetworkImageIds[y.chainId]]}]})})()};var f2=t(31254),d1=t(59799);const ac=(0,d1.sj)({provider:void 0,providerType:void 0,address:void 0,chainId:void 0,isConnected:!1}),es={state:ac,subscribeKey:(oe,y)=>(0,f2.VW)(ac,oe,y),subscribe:oe=>(0,d1.Ld)(ac,()=>oe(ac)),setProvider(oe){oe&&(ac.provider=(0,d1.iH)(oe))},setProviderType(oe){ac.providerType=oe},setAddress(oe){ac.address=oe},setChainId(oe){ac.chainId=oe},setIsConnected(oe){ac.isConnected=oe},setError(oe){ac.error=oe},reset(){ac.provider=void 0,ac.address=void 0,ac.chainId=void 0,ac.providerType=void 0,ac.isConnected=!1,ac.error=void 0}};class Xb extends class $i{constructor(y){this.initPromise=void 0,this.setIsConnected=x=>{k.Ni.setIsConnected(x)},this.setCaipAddress=x=>{k.Ni.setCaipAddress(x)},this.setBalance=(x,re)=>{k.Ni.setBalance(x,re)},this.setProfileName=x=>{k.Ni.setProfileName(x)},this.setProfileImage=x=>{k.Ni.setProfileImage(x)},this.resetAccount=()=>{k.Ni.resetAccount()},this.setCaipNetwork=x=>{k.fB.setCaipNetwork(x)},this.getCaipNetwork=()=>k.fB.state.caipNetwork,this.setRequestedCaipNetworks=x=>{k.fB.setRequestedCaipNetworks(x)},this.getApprovedCaipNetworksData=()=>k.fB.getApprovedCaipNetworksData(),this.resetNetwork=()=>{k.fB.resetNetwork()},this.setConnectors=x=>{k.AA.setConnectors(x)},this.addConnector=x=>{k.AA.addConnector(x)},this.getConnectors=()=>k.AA.getConnectors(),this.resetWcConnection=()=>{k.lZ.resetWcConnection()},this.fetchIdentity=x=>k.Lr.fetchIdentity(x),this.setAddressExplorerUrl=x=>{k.Ni.setAddressExplorerUrl(x)},this.setSIWENonce=x=>{k.yD.setNonce(x)},this.setSIWESession=x=>{k.yD.setSession(x)},this.setSIWEStatus=x=>{k.yD.setStatus(x)},this.setSIWEMessage=x=>{k.yD.setMessage(x)},this.initControllers(y),this.initOrContinue()}open(y){var x=this;return(0,b.Z)(function*(){yield x.initOrContinue(),k.IN.open(y)})()}close(){var y=this;return(0,b.Z)(function*(){yield y.initOrContinue(),k.IN.close()})()}setLoading(y){k.IN.setLoading(y)}getThemeMode(){return k.u0.state.themeMode}getThemeVariables(){return k.u0.state.themeVariables}setThemeMode(y){k.u0.setThemeMode(y),(0,j.setColorTheme)(k.u0.state.themeMode)}setThemeVariables(y){k.u0.setThemeVariables(y),(0,j.setThemeVariables)(k.u0.state.themeVariables)}subscribeTheme(y){return k.u0.subscribe(y)}getState(){return{...k.Ie.state}}subscribeState(y){return k.Ie.subscribe(y)}getEvent(){return{...k.Xs.state}}subscribeEvents(y){return k.Xs.subscribe(y)}subscribeSIWEState(y){return k.yD.subscribe(y)}initControllers(y){k.fB.setClient(y.networkControllerClient),k.fB.setDefaultCaipNetwork(y.defaultChain),k.hD.setProjectId(y.projectId),k.hD.setIncludeWalletIds(y.includeWalletIds),k.hD.setExcludeWalletIds(y.excludeWalletIds),k.hD.setFeaturedWalletIds(y.featuredWalletIds),k.hD.setTokens(y.tokens),k.hD.setTermsConditionsUrl(y.termsConditionsUrl),k.hD.setPrivacyPolicyUrl(y.privacyPolicyUrl),k.hD.setCustomWallets(y.customWallets),k.hD.setEnableAnalytics(y.enableAnalytics),k.hD.setSdkVersion(y._sdkVersion),k.lZ.setClient(y.connectionControllerClient),y.siweControllerClient&&k.yD.setSIWEClient(y.siweControllerClient),y.metadata&&k.hD.setMetadata(y.metadata),y.themeMode&&k.u0.setThemeMode(y.themeMode),y.themeVariables&&k.u0.setThemeVariables(y.themeVariables)}initOrContinue(){var y=this;return(0,b.Z)(function*(){return!y.initPromise&&!Rs&&k.j1.isClient()&&(Rs=!0,y.initPromise=new Promise(function(){var x=(0,b.Z)(function*(re){yield Promise.all([Promise.resolve().then(t.bind(t,35509)),Promise.resolve().then(t.bind(t,15129))]);const be=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",be),re()});return function(re){return x.apply(this,arguments)}}())),y.initPromise})()}}{constructor(y){var x;const{ethersConfig:re,siweConfig:be,chains:Ee,defaultChain:Ye,tokens:It,chainImages:Jn,_sdkVersion:Yn,...ar}=y;if(!re)throw new Error("web3modal:constructor - ethersConfig is undefined");if(!ar.projectId)throw new Error("web3modal:constructor - projectId is undefined");const Tr={switchCaipNetwork:(ci=(0,b.Z)(function*(Br){const pi=hs.caipNetworkIdToNumber(Br?.id);if(pi)try{yield x.switchNetwork(pi)}catch(Ui){es.setError(Ui)}}),function(pi){return ci.apply(this,arguments)}),getApprovedCaipNetworksData:function(){var ci=(0,b.Z)(function*(){return new Promise(function(){var Br=(0,b.Z)(function*(pi){if(localStorage.getItem(ea_WALLET_ID)?.includes("walletConnect")){const ds=yield x.getWalletConnectProvider();if(!ds)throw new Error("networkControllerClient:getApprovedCaipNetworks - provider is undefined");const wo=ds.signer?.session?.namespaces,oo=wo?.eip155?.methods,ho=wo?.eip155?.chains;pi({supportsAllNetworks:oo?.includes("wallet_addEthereumChain")??!1,approvedCaipNetworkIds:ho})}else pi({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})});return function(pi){return Br.apply(this,arguments)}}())});return function(){return ci.apply(this,arguments)}}()},Qr={connectWalletConnect:function(){var ci=(0,b.Z)(function*(Br){const pi=yield x.getWalletConnectProvider();if(!pi)throw new Error("connectionControllerClient:getWalletConnectUri - provider is undefined");pi.on("display_uri",Ui=>{Br(Ui)}),yield pi.connect(),yield x.setWalletConnectProvider()});return function(pi){return ci.apply(this,arguments)}}(),connectExternal:function(){var ci=(0,b.Z)(function*({id:Br,info:pi,provider:Ui}){if("injected"===Br){const ds=re.injected;if(!ds)throw new Error("connectionControllerClient:connectInjected - provider is undefined");try{yield ds.request({method:"eth_requestAccounts"}),x.setInjectedProvider(re)}catch(wo){es.setError(wo)}}else if("eip6963"===Br&&pi&&Ui){try{yield Ui.request({method:"eth_requestAccounts"})}catch(ds){es.setError(ds)}x.setEIP6963Provider(Ui,pi.name)}else if("coinbaseWallet"===Br){const ds=re.coinbase;if(!ds)throw new Error("connectionControllerClient:connectCoinbase - connector is undefined");try{x.setCoinbaseProvider(re),yield ds.request({method:"eth_requestAccounts"})}catch(wo){es.setError(wo)}}});return function(pi){return ci.apply(this,arguments)}}(),checkInstalled:ci=>ci?!(re.injected&&!window?.ethereum)&&ci.some(Br=>Boolean(window.ethereum?.[String(Br)])):Boolean(window.ethereum),disconnect:function(){var ci=(0,b.Z)(function*(){const Br=es.state.provider,pi=es.state.providerType;localStorage.removeItem(ea_WALLET_ID),es.reset(),be?.options?.signOutOnDisconnect&&(yield be.signOut()),"walletConnect"===pi?yield Br.disconnect():Br&&Br.emit("disconnect")});return function(){return ci.apply(this,arguments)}}(),signMessage:function(){var ci=(0,b.Z)(function*(Br){const pi=es.state.provider;if(!pi)throw new Error("connectionControllerClient:signMessage - provider is undefined");return yield pi.request({method:"personal_sign",params:[Br,x.getAddress()]})});return function(pi){return ci.apply(this,arguments)}}()};var ci;super({networkControllerClient:Tr,connectionControllerClient:Qr,siweControllerClient:be,defaultChain:Xl.getCaipDefaultChain(Ye),tokens:hs.getCaipTokens(It),_sdkVersion:Yn??"html-ethers5-3.5.3",...ar}),x=this,this.hasSyncedConnectedAccount=!1,this.EIP6963Providers=[],this.options=void 0,this.options=y,this.metadata=re.metadata,this.projectId=ar.projectId,this.chains=Ee,this.createProvider(),es.subscribeKey("address",()=>{this.syncAccount()}),es.subscribeKey("chainId",()=>{this.syncNetwork(Jn)}),this.syncRequestedNetworks(Ee,Jn),this.syncConnectors(re),re.EIP6963&&typeof window<"u"&&(this.listenConnectors(re.EIP6963),this.checkActive6963Provider()),re.injected&&this.checkActiveInjectedProvider(re),re.coinbase&&this.checkActiveCoinbaseProvider(re)}getState(){const y=super.getState();return{...y,selectedNetworkId:hs.caipNetworkIdToNumber(y.selectedNetworkId)}}subscribeState(y){return super.subscribeState(x=>y({...x,selectedNetworkId:hs.caipNetworkIdToNumber(x.selectedNetworkId)}))}setAddress(y){const x=y?uf.getAddress(y):void 0;es.setAddress(x)}getAddress(){const{address:y}=es.state;return y&&uf.getAddress(y)}getError(){return es.state.error}getChainId(){return es.state.chainId}getIsConnected(){return es.state.isConnected}getWalletProvider(){return es.state.provider}getWalletProviderType(){return es.state.providerType}subscribeProvider(y){return es.subscribe(y)}disconnect(){return(0,b.Z)(function*(){const{provider:y,providerType:x}=es.state;localStorage.removeItem(ea_WALLET_ID),es.reset(),"injected"===x||"eip6963"===x?y?.emit("disconnect"):yield y.disconnect()})()}createProvider(){return!this.walletConnectProviderInitPromise&&typeof window<"u"&&(this.walletConnectProviderInitPromise=this.initWalletConnectProvider()),this.walletConnectProviderInitPromise}initWalletConnectProvider(){var y=this;return(0,b.Z)(function*(){const x={projectId:y.projectId,showQrModal:!1,rpcMap:y.chains?y.chains.reduce((re,be)=>(re[be.chainId]=be.rpcUrl,re),{}):{},optionalChains:[...y.chains.map(re=>re.chainId)],metadata:{name:y.metadata?y.metadata.name:"",description:y.metadata?y.metadata.description:"",url:y.metadata?y.metadata.url:"",icons:y.metadata?y.metadata.icons:[""]}};y.walletConnectProvider=yield Rv.init(x),yield y.checkActiveWalletConnectProvider()})()}getWalletConnectProvider(){var y=this;return(0,b.Z)(function*(){if(!y.walletConnectProvider)try{yield y.createProvider()}catch(x){es.setError(x)}return y.walletConnectProvider})()}syncRequestedNetworks(y,x){const re=y?.map(be=>({id:`eip155:${be.chainId}`,name:be.name,imageId:Zi.EIP155NetworkImageIds[be.chainId],imageUrl:x?.[be.chainId]}));this.setRequestedCaipNetworks(re??[])}checkActiveWalletConnectProvider(){var y=this;return(0,b.Z)(function*(){const x=yield y.getWalletConnectProvider(),re=localStorage.getItem(ea_WALLET_ID);x&&"walletConnect"===re&&(yield y.setWalletConnectProvider())})()}checkActiveInjectedProvider(y){const x=y.injected,re=localStorage.getItem(ea_WALLET_ID);x&&"injected"===re&&(this.setInjectedProvider(y),this.watchInjected(y))}checkActiveCoinbaseProvider(y){const x=y.coinbase,re=localStorage.getItem(ea_WALLET_ID);x&&"coinbaseWallet"===re&&(x._addresses&&x._addresses?.length>0?(this.setCoinbaseProvider(y),this.watchCoinbase(y)):(localStorage.removeItem(ea_WALLET_ID),es.reset()))}checkActive6963Provider(){const y=window?.localStorage.getItem(ea_WALLET_ID);if(y){const x=this.EIP6963Providers.find(re=>re.name===y);x&&this.setEIP6963Provider(x.provider,x.name)}}setWalletConnectProvider(){var y=this;return(0,b.Z)(function*(){window?.localStorage.setItem(ea_WALLET_ID,"walletConnect");const x=yield y.getWalletConnectProvider();x&&(es.setChainId(x.chainId),es.setProviderType("walletConnect"),es.setProvider(x),es.setIsConnected(!0),y.setAddress(x.accounts?.[0]),y.watchWalletConnect())})()}setInjectedProvider(y){var x=this;return(0,b.Z)(function*(){window?.localStorage.setItem(ea_WALLET_ID,"injected");const re=y.injected;if(re){const{address:be,chainId:Ee}=yield Xl.getUserInfo(re);be&&Ee&&(es.setChainId(Ee),es.setProviderType("injected"),es.setProvider(y.injected),es.setIsConnected(!0),x.setAddress(be),x.watchCoinbase(y))}})()}setEIP6963Provider(y,x){var re=this;return(0,b.Z)(function*(){if(window?.localStorage.setItem(ea_WALLET_ID,x),y){const{address:be,chainId:Ee}=yield Xl.getUserInfo(y);be&&Ee&&(es.setChainId(Ee),es.setProviderType("eip6963"),es.setProvider(y),es.setIsConnected(!0),re.setAddress(be),re.watchEIP6963(y))}})()}setCoinbaseProvider(y){var x=this;return(0,b.Z)(function*(){window?.localStorage.setItem(ea_WALLET_ID,"coinbaseWallet");const re=y.coinbase;if(re){const{address:be,chainId:Ee}=yield Xl.getUserInfo(re);be&&Ee&&(es.setChainId(Ee),es.setProviderType("coinbaseWallet"),es.setProvider(y.coinbase),es.setIsConnected(!0),x.setAddress(be),x.watchCoinbase(y))}})()}watchWalletConnect(){var y=this;return(0,b.Z)(function*(){const x=yield y.getWalletConnectProvider();function be(Ye){if(Ye){const It=Xl.hexStringToNumber(Ye);es.setChainId(It)}}const Ee=function(){var Ye=(0,b.Z)(function*(It){It.length>0&&(yield y.setWalletConnectProvider())});return function(Jn){return Ye.apply(this,arguments)}}();x&&(x.on("disconnect",function re(){localStorage.removeItem(ea_WALLET_ID),es.reset(),x?.removeListener("disconnect",re),x?.removeListener("accountsChanged",Ee),x?.removeListener("chainChanged",be)}),x.on("accountsChanged",Ee),x.on("chainChanged",be))})()}watchInjected(y){const x=y.injected;function be(Ye){const It=Ye?.[0];It?es.setAddress(uf.getAddress(It)):(localStorage.removeItem(ea_WALLET_ID),es.reset())}function Ee(Ye){if(Ye){const It="string"==typeof Ye?Xl.hexStringToNumber(Ye):Number(Ye);es.setChainId(It)}}x&&(x.on("disconnect",function re(){localStorage.removeItem(ea_WALLET_ID),es.reset(),x?.removeListener("disconnect",re),x?.removeListener("accountsChanged",be),x?.removeListener("chainChanged",Ee)}),x.on("accountsChanged",be),x.on("chainChanged",Ee))}watchEIP6963(y){function re(Ee){const Ye=Ee?.[0];Ye?es.setAddress(uf.getAddress(Ye)):(localStorage.removeItem(ea_WALLET_ID),es.reset())}function be(Ee){if(Ee){const Ye="string"==typeof Ee?Xl.hexStringToNumber(Ee):Number(Ee);es.setChainId(Ye)}}y.on("disconnect",function x(){localStorage.removeItem(ea_WALLET_ID),es.reset(),y.removeListener("disconnect",x),y.removeListener("accountsChanged",re),y.removeListener("chainChanged",be)}),y.on("accountsChanged",re),y.on("chainChanged",be)}watchCoinbase(y){const x=y.coinbase,re=localStorage.getItem(ea_WALLET_ID);function Ee(It){0===It.length?(localStorage.removeItem(ea_WALLET_ID),es.reset()):es.setAddress(It[0])}function Ye(It){if(It&&"coinbaseWallet"===re){const Jn=Number(It);es.setChainId(Jn)}}x&&(x.on("disconnect",function be(){localStorage.removeItem(ea_WALLET_ID),es.reset(),x?.removeListener("disconnect",be),x?.removeListener("accountsChanged",Ee),x?.removeListener("chainChanged",Ye)}),x.on("accountsChanged",Ee),x.on("chainChanged",Ye))}syncAccount(){var y=this;return(0,b.Z)(function*(){const x=es.state.address,re=es.state.chainId,be=es.state.isConnected;if(y.resetAccount(),be&&x&&re){const Ee=`eip155:${re}:${x}`;y.setIsConnected(be),y.setCaipAddress(Ee),yield Promise.all([y.syncProfile(x),y.syncBalance(x),y.getApprovedCaipNetworksData()]),y.hasSyncedConnectedAccount=!0}else!be&&y.hasSyncedConnectedAccount&&(y.resetWcConnection(),y.resetNetwork())})()}syncNetwork(y){var x=this;return(0,b.Z)(function*(){const re=es.state.address,be=es.state.chainId,Ee=es.state.isConnected;if(x.chains){const Ye=x.chains.find(It=>It.chainId===be);Ye&&(x.setCaipNetwork({id:`eip155:${Ye.chainId}`,name:Ye.name,imageId:Zi.EIP155NetworkImageIds[Ye.chainId],imageUrl:y?.[Ye.chainId]}),Ee&&re&&(x.setCaipAddress(`eip155:${be}:${re}`),x.setAddressExplorerUrl(Ye.explorerUrl?`${Ye.explorerUrl}/address/${re}`:void 0),x.hasSyncedConnectedAccount&&(yield x.syncBalance(re))))}})()}syncProfile(y){var x=this;return(0,b.Z)(function*(){if(1===es.state.chainId){const be=new cl.InfuraProvider("mainnet"),Ee=yield be.lookupAddress(y),Ye=yield be.getAvatar(y);Ee&&x.setProfileName(Ee),Ye&&x.setProfileImage(Ye)}else x.setProfileName(null),x.setProfileImage(null)})()}syncBalance(y){var x=this;return(0,b.Z)(function*(){const re=es.state.chainId;if(re&&x.chains){const be=x.chains.find(Ee=>Ee.chainId===re);if(be){const Ee=new cl.JsonRpcProvider(be.rpcUrl,{chainId:re,name:be.name});if(Ee){const Ye=yield Ee.getBalance(y),It=lC.formatEther(Ye);x.setBalance(It,be.currency)}}}})()}switchNetwork(y){var x=this;return(0,b.Z)(function*(){const re=es.state.provider,be=es.state.providerType;if(x.chains){const Ee=x.chains.find(Ye=>Ye.chainId===y);if("walletConnect"===be&&Ee){const Ye=re;if(Ye)try{yield Ye.request({method:"wallet_switchEthereumChain",params:[{chainId:Xl.numberToHexString(Ee.chainId)}]}),es.setChainId(y)}catch(It){if(4902!==It.code&&5e3!==It.code&&4902!==It?.data?.originalError?.code)throw new Error("Chain is not supported");yield Xl.addEthereumChain(Ye,Ee)}}else if("injected"===be&&Ee){const Ye=re;if(Ye)try{yield Ye.request({method:"wallet_switchEthereumChain",params:[{chainId:Xl.numberToHexString(Ee.chainId)}]}),es.setChainId(Ee.chainId)}catch(It){if(4902!==It.code&&5e3!==It.code&&4902!==It?.data?.originalError?.code)throw new Error("Chain is not supported");yield Xl.addEthereumChain(Ye,Ee)}}else if("eip6963"===be&&Ee){const Ye=re;if(Ye)try{yield Ye.request({method:"wallet_switchEthereumChain",params:[{chainId:Xl.numberToHexString(Ee.chainId)}]}),es.setChainId(Ee.chainId)}catch(It){if(4902!==It.code&&5e3!==It.code&&4902!==It?.data?.originalError?.code)throw new Error("Chain is not supported");yield Xl.addEthereumChain(Ye,Ee)}}else if("coinbaseWallet"===be&&Ee){const Ye=re;if(Ye)try{yield Ye.request({method:"wallet_switchEthereumChain",params:[{chainId:Xl.numberToHexString(Ee.chainId)}]}),es.setChainId(Ee.chainId)}catch(It){(4902===It.code||5e3===It.code||4902===It?.data?.originalError?.code)&&(yield Xl.addEthereumChain(Ye,Ee))}}}})()}syncConnectors(y){const x=[],re=Zi.ConnectorTypesMap.walletConnect;if(re&&x.push({id:"walletConnect",explorerId:Zi.ConnectorExplorerIds.walletConnect,imageId:Zi.ConnectorImageIds.walletConnect,imageUrl:this.options?.connectorImages?.walletConnect,name:Zi.ConnectorNamesMap.walletConnect,type:re}),y.injected){const be=Zi.ConnectorTypesMap.injected;be&&x.push({id:"injected",explorerId:Zi.ConnectorExplorerIds.injected,imageId:Zi.ConnectorImageIds.injected,imageUrl:this.options?.connectorImages?.injected,name:Zi.ConnectorNamesMap.injected,type:be})}y.coinbase&&x.push({id:"coinbaseWallet",explorerId:Zi.ConnectorExplorerIds.coinbaseWallet,imageId:Zi.ConnectorImageIds.coinbaseWallet,imageUrl:this.options?.connectorImages?.coinbaseWallet,name:Zi.ConnectorNamesMap.coinbaseWallet,type:"EXTERNAL"}),this.setConnectors(x)}eip6963EventHandler(y){if(y.detail){const{info:x,provider:re}=y.detail;if(!this.getConnectors().find(Ye=>Ye.name===x.name)){const Ye=Zi.ConnectorTypesMap.eip6963;Ye&&(this.addConnector({id:"eip6963",type:Ye,imageUrl:x.icon??this.options?.connectorImages?.eip6963,name:x.name,provider:re,info:x}),this.EIP6963Providers.push({name:x.name,provider:re}))}}}listenConnectors(y){if(typeof window<"u"&&y){const x=this.eip6963EventHandler.bind(this);window.addEventListener("eip6963:announceProvider",x),window.dispatchEvent(new Event("eip6963:requestProvider"))}}}var p2=t(85634);typeof window<"u"&&(window.Buffer||(window.Buffer=p2.lW),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var g2=t(96850);function m2(oe){const{enableEIP6963:y=!0,enableInjected:x=!0,enableCoinbase:re=!0,metadata:be,rpcUrl:Ee,defaultChainId:Ye}=oe;let It,Jn;const Yn={metadata:be};return x&&(Yn.injected=function ar(){return It||(typeof window>"u"||!window.ethereum?void 0:(It=window.ethereum,It))}()),re&&Ee&&Ye&&(Yn.coinbase=function Tr(){return Jn||(typeof window>"u"?void 0:(Jn=new g2.jp({appName:be.name,appLogoUrl:be.icons[0],darkMode:!1}).makeWeb3Provider(Ee,Ye),Jn))}()),y&&(Yn.EIP6963=!0),Yn}function U0(oe){return new Xb({...oe,_sdkVersion:"html-ethers5-3.5.3"})}},15129:(d,r,t)=>{"use strict";t.r(r),t.d(r,{W3mModal:()=>M});var e=t(15861),n=t(97392),s=t(35509),l=t(18858),u=t(45613);const f=l.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var g=function(w,P,C,_){var k,R=arguments.length,b=R<3?P:null===_?_=Object.getOwnPropertyDescriptor(P,C):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)b=Reflect.decorate(w,P,C,_);else for(var j=w.length-1;j>=0;j--)(k=w[j])&&(b=(R<3?k(b):R>3?k(P,C,b):k(P,C))||b);return R>3&&b&&Object.defineProperty(P,C,b),b};const p="scroll-lock";let M=class extends l.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.caipAddress=n.Ni.state.address,this.isSiweEnabled=n.yD.state.isSiweEnabled,this.initializeTheming(),n.QT.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",P=>P?this.onOpen():this.onClose()),n.yD.subscribeKey("isSiweEnabled",P=>{this.isSiweEnabled=P}),n.Ni.subscribe(P=>this.onNewAccountState(P))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(P=>P()),this.onRemoveKeyboardListener()}render(){return this.open?l.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(P){var C=this;return(0,e.Z)(function*(){P.target===P.currentTarget&&(yield C.handleClose())})()}handleClose(){var P=this;return(0,e.Z)(function*(){P.isSiweEnabled&&"success"!==n.yD.state.status&&(yield n.lZ.disconnect()),n.IN.close()})()}initializeTheming(){const{themeVariables:P,themeMode:C}=n.u0.state,_=s.UiHelperUtil.getColorTheme(C);(0,s.initializeTheming)(P,_)}onClose(){var P=this;return(0,e.Z)(function*(){P.onScrollUnlock(),yield P.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.KC.hide(),P.open=!1,P.onRemoveKeyboardListener()})()}onOpen(){var P=this;return(0,e.Z)(function*(){P.onScrollLock(),P.open=!0,yield P.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,P.onAddKeyboardListener()})()}onScrollLock(){const P=document.createElement("style");P.dataset.w3m=p,P.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(P)}onScrollUnlock(){const P=document.head.querySelector(`style[data-w3m="${p}"]`);P&&P.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const P=this.shadowRoot?.querySelector("wui-card");P?.focus(),window.addEventListener("keydown",C=>{if("Escape"===C.key)this.handleClose();else if("Tab"===C.key){const{tagName:_}=C.target;_&&!_.includes("W3M-")&&!_.includes("WUI-")&&P?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAccountState(P){var C=this;return(0,e.Z)(function*(){const{isConnected:_,caipAddress:R}=P;if(C.isSiweEnabled){_&&!C.caipAddress&&(C.caipAddress=R),_&&R&&C.caipAddress!==R&&(yield n.yD.signOut(),C.onSiweNavigation(),C.caipAddress=R);try{const b=yield n.yD.getSession();b&&!_?yield n.yD.signOut():_&&!b&&C.onSiweNavigation()}catch{_&&C.onSiweNavigation()}}})()}onSiweNavigation(){this.open?n.Pc.push("ConnectingSiwe"):n.IN.open({view:"ConnectingSiwe"})}};M.styles=f,g([(0,u.SB)()],M.prototype,"open",void 0),g([(0,u.SB)()],M.prototype,"caipAddress",void 0),g([(0,u.SB)()],M.prototype,"isSiweEnabled",void 0),M=g([(0,s.customElement)("w3m-modal")],M)},74515:(d,r,t)=>{"use strict";t.d(r,{fl:()=>J,iv:()=>p,Ts:()=>ee,Qu:()=>ue});var e=t(15861);const n=globalThis,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),u=new WeakMap;class f{constructor(q,de,te){if(this._$cssResult$=!0,te!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=q,this.t=de}get styleSheet(){let q=this.o;const de=this.t;if(s&&void 0===q){const te=void 0!==de&&1===de.length;te&&(q=u.get(de)),void 0===q&&((this.o=q=new CSSStyleSheet).replaceSync(this.cssText),te&&u.set(de,q))}return q}toString(){return this.cssText}}const p=(ie,...q)=>{const de=1===ie.length?ie[0]:q.reduce((te,N,E)=>te+(T=>{if(!0===T._$cssResult$)return T.cssText;if("number"==typeof T)return T;throw Error("Value passed to 'css' function must be a 'css' function result: "+T+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(N)+ie[E+1],ie[0]);return new f(de,ie,l)},w=s?ie=>ie:ie=>ie instanceof CSSStyleSheet?(q=>{let de="";for(const te of q.cssRules)de+=te.cssText;return(ie=>new f("string"==typeof ie?ie:ie+"",void 0,l))(de)})(ie):ie,{is:P,defineProperty:C,getOwnPropertyDescriptor:_,getOwnPropertyNames:R,getOwnPropertySymbols:b,getPrototypeOf:k}=Object,j=globalThis,I=j.trustedTypes,H=I?I.emptyScript:"",B=j.reactiveElementPolyfillSupport,Y=(ie,q)=>ie,ee={toAttribute(ie,q){switch(q){case Boolean:ie=ie?H:null;break;case Object:case Array:ie=null==ie?ie:JSON.stringify(ie)}return ie},fromAttribute(ie,q){let de=ie;switch(q){case Boolean:de=null!==ie;break;case Number:de=null===ie?null:Number(ie);break;case Object:case Array:try{de=JSON.parse(ie)}catch{de=null}}return de}},ue=(ie,q)=>!P(ie,q),X={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:ue};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;class J extends HTMLElement{static addInitializer(q){this._$Ei(),(this.l??=[]).push(q)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(q,de=X){if(de.state&&(de.attribute=!1),this._$Ei(),this.elementProperties.set(q,de),!de.noAccessor){const te=Symbol(),N=this.getPropertyDescriptor(q,te,de);void 0!==N&&C(this.prototype,q,N)}}static getPropertyDescriptor(q,de,te){const{get:N,set:E}=_(this.prototype,q)??{get(){return this[de]},set(T){this[de]=T}};return{get(){return N?.call(this)},set(T){const L=N?.call(this);E.call(this,T),this.requestUpdate(q,L,te)},configurable:!0,enumerable:!0}}static getPropertyOptions(q){return this.elementProperties.get(q)??X}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const q=k(this);q.finalize(),void 0!==q.l&&(this.l=[...q.l]),this.elementProperties=new Map(q.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const de=this.properties,te=[...R(de),...b(de)];for(const N of te)this.createProperty(N,de[N])}const q=this[Symbol.metadata];if(null!==q){const de=litPropertyMetadata.get(q);if(void 0!==de)for(const[te,N]of de)this.elementProperties.set(te,N)}this._$Eh=new Map;for(const[de,te]of this.elementProperties){const N=this._$Eu(de,te);void 0!==N&&this._$Eh.set(N,de)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(q){const de=[];if(Array.isArray(q)){const te=new Set(q.flat(1/0).reverse());for(const N of te)de.unshift(w(N))}else void 0!==q&&de.push(w(q));return de}static _$Eu(q,de){const te=de.attribute;return!1===te?void 0:"string"==typeof te?te:"string"==typeof q?q.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(q=>this.enableUpdating=q),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(q=>q(this))}addController(q){(this._$E_??=new Set).add(q),void 0!==this.renderRoot&&this.isConnected&&q.hostConnected?.()}removeController(q){this._$E_?.delete(q)}_$ES(){const q=new Map,de=this.constructor.elementProperties;for(const te of de.keys())this.hasOwnProperty(te)&&(q.set(te,this[te]),delete this[te]);q.size>0&&(this._$Ep=q)}createRenderRoot(){const q=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((ie,q)=>{if(s)ie.adoptedStyleSheets=q.map(de=>de instanceof CSSStyleSheet?de:de.styleSheet);else for(const de of q){const te=document.createElement("style"),N=n.litNonce;void 0!==N&&te.setAttribute("nonce",N),te.textContent=de.cssText,ie.appendChild(te)}})(q,this.constructor.elementStyles),q}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(q=>q.hostConnected?.())}enableUpdating(q){}disconnectedCallback(){this._$E_?.forEach(q=>q.hostDisconnected?.())}attributeChangedCallback(q,de,te){this._$AK(q,te)}_$EO(q,de){const te=this.constructor.elementProperties.get(q),N=this.constructor._$Eu(q,te);if(void 0!==N&&!0===te.reflect){const E=(void 0!==te.converter?.toAttribute?te.converter:ee).toAttribute(de,te.type);this._$Em=q,null==E?this.removeAttribute(N):this.setAttribute(N,E),this._$Em=null}}_$AK(q,de){const te=this.constructor,N=te._$Eh.get(q);if(void 0!==N&&this._$Em!==N){const E=te.getPropertyOptions(N),T="function"==typeof E.converter?{fromAttribute:E.converter}:void 0!==E.converter?.fromAttribute?E.converter:ee;this._$Em=N,this[N]=T.fromAttribute(de,E.type),this._$Em=null}}requestUpdate(q,de,te,N=!1,E){if(void 0!==q){if(te??=this.constructor.getPropertyOptions(q),!(te.hasChanged??ue)(N?E:this[q],de))return;this.C(q,de,te)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(q,de,te){this._$AL.has(q)||this._$AL.set(q,de),!0===te.reflect&&this._$Em!==q&&(this._$Ej??=new Set).add(q)}_$EP(){var q=this;return(0,e.Z)(function*(){q.isUpdatePending=!0;try{yield q._$Eg}catch(te){Promise.reject(te)}const de=q.scheduleUpdate();return null!=de&&(yield de),!q.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[N,E]of this._$Ep)this[N]=E;this._$Ep=void 0}const te=this.constructor.elementProperties;if(te.size>0)for(const[N,E]of te)!0!==E.wrapped||this._$AL.has(N)||void 0===this[N]||this.C(N,this[N],E)}let q=!1;const de=this._$AL;try{q=this.shouldUpdate(de),q?(this.willUpdate(de),this._$E_?.forEach(te=>te.hostUpdate?.()),this.update(de)):this._$ET()}catch(te){throw q=!1,this._$ET(),te}q&&this._$AE(de)}willUpdate(q){}_$AE(q){this._$E_?.forEach(de=>de.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(q)),this.updated(q)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(q){return!0}update(q){this._$Ej&&=this._$Ej.forEach(de=>this._$EO(de,this[de])),this._$ET()}updated(q){}firstUpdated(q){}}J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Y("elementProperties")]=new Map,J[Y("finalized")]=new Map,B?.({ReactiveElement:J}),(j.reactiveElementVersions??=[]).push("2.0.2")},13093:(d,r,t)=>{"use strict";t.d(r,{Al:()=>ye,Jb:()=>X,Ld:()=>J,dy:()=>ee,sY:()=>Ne});const e=globalThis,n=e.trustedTypes,s=n?n.createPolicy("lit-html",{createHTML:ze=>ze}):void 0,l="$lit$",u=`lit$${(Math.random()+"").slice(9)}$`,f="?"+u,g=`<${f}>`,p=document,M=()=>p.createComment(""),w=ze=>null===ze||"object"!=typeof ze&&"function"!=typeof ze,P=Array.isArray,C=ze=>P(ze)||"function"==typeof ze?.[Symbol.iterator],_="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,k=/>/g,j=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,H=/"/g,B=/^(?:script|style|textarea|title)$/i,Y=ze=>(ve,...Ce)=>({_$litType$:ze,strings:ve,values:Ce}),ee=Y(1),X=(Y(2),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),ie=new WeakMap,q=p.createTreeWalker(p,129);function de(ze,ve){if(!Array.isArray(ze)||!ze.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(ve):ve}const te=(ze,ve)=>{const Ce=ze.length-1,pe=[];let De,ne=2===ve?"<svg>":"",Te=R;for(let Le=0;Le<Ce;Le++){const at=ze[Le];let cn,_t,Xe=-1,dt=0;for(;dt<at.length&&(Te.lastIndex=dt,_t=Te.exec(at),null!==_t);)dt=Te.lastIndex,Te===R?"!--"===_t[1]?Te=b:void 0!==_t[1]?Te=k:void 0!==_t[2]?(B.test(_t[2])&&(De=RegExp("</"+_t[2],"g")),Te=j):void 0!==_t[3]&&(Te=j):Te===j?">"===_t[0]?(Te=De??R,Xe=-1):void 0===_t[1]?Xe=-2:(Xe=Te.lastIndex-_t[2].length,cn=_t[1],Te=void 0===_t[3]?j:'"'===_t[3]?H:I):Te===H||Te===I?Te=j:Te===b||Te===k?Te=R:(Te=j,De=void 0);const Re=Te===j&&ze[Le+1].startsWith("/>")?" ":"";ne+=Te===R?at+g:Xe>=0?(pe.push(cn),at.slice(0,Xe)+l+at.slice(Xe)+u+Re):at+u+(-2===Xe?Le:Re)}return[de(ze,ne+(ze[Ce]||"<?>")+(2===ve?"</svg>":"")),pe]};class N{constructor({strings:ve,_$litType$:Ce},pe){let De;this.parts=[];let ne=0,Te=0;const Le=ve.length-1,at=this.parts,[cn,_t]=te(ve,Ce);if(this.el=N.createElement(cn,pe),q.currentNode=this.el.content,2===Ce){const Xe=this.el.content.firstChild;Xe.replaceWith(...Xe.childNodes)}for(;null!==(De=q.nextNode())&&at.length<Le;){if(1===De.nodeType){if(De.hasAttributes())for(const Xe of De.getAttributeNames())if(Xe.endsWith(l)){const dt=_t[Te++],Re=De.getAttribute(Xe).split(u),Ft=/([.?@])?(.*)/.exec(dt);at.push({type:1,index:ne,name:Ft[2],strings:Re,ctor:"."===Ft[1]?Q:"?"===Ft[1]?fe:"@"===Ft[1]?_e:F}),De.removeAttribute(Xe)}else Xe.startsWith(u)&&(at.push({type:6,index:ne}),De.removeAttribute(Xe));if(B.test(De.tagName)){const Xe=De.textContent.split(u),dt=Xe.length-1;if(dt>0){De.textContent=n?n.emptyScript:"";for(let Re=0;Re<dt;Re++)De.append(Xe[Re],M()),q.nextNode(),at.push({type:2,index:++ne});De.append(Xe[dt],M())}}}else if(8===De.nodeType)if(De.data===f)at.push({type:2,index:ne});else{let Xe=-1;for(;-1!==(Xe=De.data.indexOf(u,Xe+1));)at.push({type:7,index:ne}),Xe+=u.length-1}ne++}}static createElement(ve,Ce){const pe=p.createElement("template");return pe.innerHTML=ve,pe}}function E(ze,ve,Ce=ze,pe){if(ve===X)return ve;let De=void 0!==pe?Ce._$Co?.[pe]:Ce._$Cl;const ne=w(ve)?void 0:ve._$litDirective$;return De?.constructor!==ne&&(De?._$AO?.(!1),void 0===ne?De=void 0:(De=new ne(ze),De._$AT(ze,Ce,pe)),void 0!==pe?(Ce._$Co??=[])[pe]=De:Ce._$Cl=De),void 0!==De&&(ve=E(ze,De._$AS(ze,ve.values),De,pe)),ve}class T{constructor(ve,Ce){this._$AV=[],this._$AN=void 0,this._$AD=ve,this._$AM=Ce}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(ve){const{el:{content:Ce},parts:pe}=this._$AD,De=(ve?.creationScope??p).importNode(Ce,!0);q.currentNode=De;let ne=q.nextNode(),Te=0,Le=0,at=pe[0];for(;void 0!==at;){if(Te===at.index){let cn;2===at.type?cn=new L(ne,ne.nextSibling,this,ve):1===at.type?cn=new at.ctor(ne,at.name,at.strings,this,ve):6===at.type&&(cn=new xe(ne,this,ve)),this._$AV.push(cn),at=pe[++Le]}Te!==at?.index&&(ne=q.nextNode(),Te++)}return q.currentNode=p,De}p(ve){let Ce=0;for(const pe of this._$AV)void 0!==pe&&(void 0!==pe.strings?(pe._$AI(ve,pe,Ce),Ce+=pe.strings.length-2):pe._$AI(ve[Ce])),Ce++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(ve,Ce,pe,De){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=ve,this._$AB=Ce,this._$AM=pe,this.options=De,this._$Cv=De?.isConnected??!0}get parentNode(){let ve=this._$AA.parentNode;const Ce=this._$AM;return void 0!==Ce&&11===ve?.nodeType&&(ve=Ce.parentNode),ve}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(ve,Ce=this){ve=E(this,ve,Ce),w(ve)?ve===J||null==ve||""===ve?(this._$AH!==J&&this._$AR(),this._$AH=J):ve!==this._$AH&&ve!==X&&this._(ve):void 0!==ve._$litType$?this.g(ve):void 0!==ve.nodeType?this.$(ve):C(ve)?this.T(ve):this._(ve)}k(ve){return this._$AA.parentNode.insertBefore(ve,this._$AB)}$(ve){this._$AH!==ve&&(this._$AR(),this._$AH=this.k(ve))}_(ve){this._$AH!==J&&w(this._$AH)?this._$AA.nextSibling.data=ve:this.$(p.createTextNode(ve)),this._$AH=ve}g(ve){const{values:Ce,_$litType$:pe}=ve,De="number"==typeof pe?this._$AC(ve):(void 0===pe.el&&(pe.el=N.createElement(de(pe.h,pe.h[0]),this.options)),pe);if(this._$AH?._$AD===De)this._$AH.p(Ce);else{const ne=new T(De,this),Te=ne.u(this.options);ne.p(Ce),this.$(Te),this._$AH=ne}}_$AC(ve){let Ce=ie.get(ve.strings);return void 0===Ce&&ie.set(ve.strings,Ce=new N(ve)),Ce}T(ve){P(this._$AH)||(this._$AH=[],this._$AR());const Ce=this._$AH;let pe,De=0;for(const ne of ve)De===Ce.length?Ce.push(pe=new L(this.k(M()),this.k(M()),this,this.options)):pe=Ce[De],pe._$AI(ne),De++;De<Ce.length&&(this._$AR(pe&&pe._$AB.nextSibling,De),Ce.length=De)}_$AR(ve=this._$AA.nextSibling,Ce){for(this._$AP?.(!1,!0,Ce);ve&&ve!==this._$AB;){const pe=ve.nextSibling;ve.remove(),ve=pe}}setConnected(ve){void 0===this._$AM&&(this._$Cv=ve,this._$AP?.(ve))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(ve,Ce,pe,De,ne){this.type=1,this._$AH=J,this._$AN=void 0,this.element=ve,this.name=Ce,this._$AM=De,this.options=ne,pe.length>2||""!==pe[0]||""!==pe[1]?(this._$AH=Array(pe.length-1).fill(new String),this.strings=pe):this._$AH=J}_$AI(ve,Ce=this,pe,De){const ne=this.strings;let Te=!1;if(void 0===ne)ve=E(this,ve,Ce,0),Te=!w(ve)||ve!==this._$AH&&ve!==X,Te&&(this._$AH=ve);else{const Le=ve;let at,cn;for(ve=ne[0],at=0;at<ne.length-1;at++)cn=E(this,Le[pe+at],Ce,at),cn===X&&(cn=this._$AH[at]),Te||=!w(cn)||cn!==this._$AH[at],cn===J?ve=J:ve!==J&&(ve+=(cn??"")+ne[at+1]),this._$AH[at]=cn}Te&&!De&&this.O(ve)}O(ve){ve===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,ve??"")}}class Q extends F{constructor(){super(...arguments),this.type=3}O(ve){this.element[this.name]=ve===J?void 0:ve}}class fe extends F{constructor(){super(...arguments),this.type=4}O(ve){this.element.toggleAttribute(this.name,!!ve&&ve!==J)}}class _e extends F{constructor(ve,Ce,pe,De,ne){super(ve,Ce,pe,De,ne),this.type=5}_$AI(ve,Ce=this){if((ve=E(this,ve,Ce,0)??J)===X)return;const pe=this._$AH,De=ve===J&&pe!==J||ve.capture!==pe.capture||ve.once!==pe.once||ve.passive!==pe.passive,ne=ve!==J&&(pe===J||De);De&&this.element.removeEventListener(this.name,this,pe),ne&&this.element.addEventListener(this.name,this,ve),this._$AH=ve}handleEvent(ve){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,ve):this._$AH.handleEvent(ve)}}class xe{constructor(ve,Ce,pe){this.element=ve,this.type=6,this._$AN=void 0,this._$AM=Ce,this.options=pe}get _$AU(){return this._$AM._$AU}_$AI(ve){E(this,ve)}}const ye={j:l,P:u,A:f,C:1,M:te,L:T,R:C,V:E,D:L,I:F,H:fe,N:_e,U:Q,B:xe};e.litHtmlPolyfillSupport?.(N,L),(e.litHtmlVersions??=[]).push("3.1.0");const Ne=(ze,ve,Ce)=>{const pe=Ce?.renderBefore??ve;let De=pe._$litPart$;if(void 0===De){const ne=Ce?.renderBefore??null;pe._$litPart$=De=new L(ve.insertBefore(M(),ne),ne,void 0,Ce??{})}return De._$AI(ze),De}},45613:(d,r,t)=>{"use strict";t.d(r,{Cb:()=>l,SB:()=>u});var e=t(74515);const n={attribute:!0,type:String,converter:e.Ts,reflect:!1,hasChanged:e.Qu},s=(f=n,g,p)=>{const{kind:M,metadata:w}=p;let P=globalThis.litPropertyMetadata.get(w);if(void 0===P&&globalThis.litPropertyMetadata.set(w,P=new Map),P.set(p.name,f),"accessor"===M){const{name:C}=p;return{set(_){const R=g.get.call(this);g.set.call(this,_),this.requestUpdate(C,R,f)},init(_){return void 0!==_&&this.C(C,void 0,f),_}}}if("setter"===M){const{name:C}=p;return function(_){const R=this[C];g.call(this,_),this.requestUpdate(C,R,f)}}throw Error("Unsupported decorator location: "+M)};function l(f){return(g,p)=>"object"==typeof p?s(f,g,p):((M,w,P)=>{const C=w.hasOwnProperty(P);return w.constructor.createProperty(P,C?{...M,wrapped:!0}:M),C?Object.getOwnPropertyDescriptor(w,P):void 0})(f,g,p)}function u(f){return l({...f,state:!0,attribute:!1})}},18858:(d,r,t)=>{"use strict";t.d(r,{oi:()=>s,iv:()=>e.iv,dy:()=>n.dy});var e=t(74515),n=t(13093);class s extends e.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const g=super.createRenderRoot();return this.renderOptions.renderBefore??=g.firstChild,g}update(g){const p=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(g),this._$Do=(0,n.sY)(p,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.Jb}}s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s}),globalThis.litElementPolyfillSupport?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.2")},35509:(d,r,t)=>{"use strict";t.r(r),t.d(r,{TransactionUtil:()=>Va,UiHelperUtil:()=>Sr,WuiAccountButton:()=>Xs,WuiAllWalletsImage:()=>Ho,WuiAvatar:()=>Wr,WuiButton:()=>_s,WuiCard:()=>Dn,WuiCardSelect:()=>Un,WuiCardSelectLoader:()=>Mo,WuiChip:()=>br,WuiConnectButton:()=>Ii,WuiCtaButton:()=>Ri,WuiEmailInput:()=>gr,WuiFlex:()=>wt,WuiGrid:()=>ba,WuiIcon:()=>Bo,WuiIconBox:()=>Co,WuiIconLink:()=>ft,WuiImage:()=>Ys,WuiInputElement:()=>kt,WuiInputNumeric:()=>er,WuiInputText:()=>In,WuiLink:()=>mi,WuiListAccordion:()=>dc,WuiListContent:()=>Rc,WuiListItem:()=>Yi,WuiListWallet:()=>Ya,WuiListWalletTransaction:()=>ha,WuiLoadingHexagon:()=>ao,WuiLoadingSpinner:()=>zi,WuiLoadingThumbnail:()=>Zr,WuiLogo:()=>_c,WuiLogoSelect:()=>Il,WuiNetworkButton:()=>bc,WuiNetworkImage:()=>et,WuiNoticeCard:()=>fl,WuiOtp:()=>_a,WuiQrCode:()=>ql,WuiSearchBar:()=>Ul,WuiSeparator:()=>wc,WuiShimmer:()=>Bi,WuiSnackbar:()=>ia,WuiTabs:()=>Ni,WuiTag:()=>qa,WuiText:()=>si,WuiTooltip:()=>Wl,WuiTransactionListItem:()=>Ca,WuiTransactionListItemLoader:()=>Tl,WuiTransactionVisual:()=>ys,WuiVisual:()=>Rn,WuiVisualThumbnail:()=>fi,WuiWalletImage:()=>aa,customElement:()=>vt,initializeTheming:()=>Pn,setColorTheme:()=>fn,setThemeVariables:()=>dn});var e=t(15861);const n=globalThis,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),u=new WeakMap;class f{constructor(rt,At,rn){if(this._$cssResult$=!0,rn!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=rt,this.t=At}get styleSheet(){let rt=this.o;const At=this.t;if(s&&void 0===rt){const rn=void 0!==At&&1===At.length;rn&&(rt=u.get(At)),void 0===rt&&((this.o=rt=new CSSStyleSheet).replaceSync(this.cssText),rn&&u.set(At,rt))}return rt}toString(){return this.cssText}}const g=Vt=>new f("string"==typeof Vt?Vt:Vt+"",void 0,l),p=(Vt,...rt)=>{const At=1===Vt.length?Vt[0]:rt.reduce((rn,vn,Wt)=>rn+(Nn=>{if(!0===Nn._$cssResult$)return Nn.cssText;if("number"==typeof Nn)return Nn;throw Error("Value passed to 'css' function must be a 'css' function result: "+Nn+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(vn)+Vt[Wt+1],Vt[0]);return new f(At,Vt,l)},w=s?Vt=>Vt:Vt=>Vt instanceof CSSStyleSheet?(rt=>{let At="";for(const rn of rt.cssRules)At+=rn.cssText;return g(At)})(Vt):Vt,{is:P,defineProperty:C,getOwnPropertyDescriptor:_,getOwnPropertyNames:R,getOwnPropertySymbols:b,getPrototypeOf:k}=Object,j=globalThis,I=j.trustedTypes,H=I?I.emptyScript:"",B=j.reactiveElementPolyfillSupport,Y=(Vt,rt)=>Vt,ee={toAttribute(Vt,rt){switch(rt){case Boolean:Vt=Vt?H:null;break;case Object:case Array:Vt=null==Vt?Vt:JSON.stringify(Vt)}return Vt},fromAttribute(Vt,rt){let At=Vt;switch(rt){case Boolean:At=null!==Vt;break;case Number:At=null===Vt?null:Number(Vt);break;case Object:case Array:try{At=JSON.parse(Vt)}catch{At=null}}return At}},ue=(Vt,rt)=>!P(Vt,rt),X={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:ue};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;class J extends HTMLElement{static addInitializer(rt){this._$Ei(),(this.l??=[]).push(rt)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(rt,At=X){if(At.state&&(At.attribute=!1),this._$Ei(),this.elementProperties.set(rt,At),!At.noAccessor){const rn=Symbol(),vn=this.getPropertyDescriptor(rt,rn,At);void 0!==vn&&C(this.prototype,rt,vn)}}static getPropertyDescriptor(rt,At,rn){const{get:vn,set:Wt}=_(this.prototype,rt)??{get(){return this[At]},set(Nn){this[At]=Nn}};return{get(){return vn?.call(this)},set(Nn){const rr=vn?.call(this);Wt.call(this,Nn),this.requestUpdate(rt,rr,rn)},configurable:!0,enumerable:!0}}static getPropertyOptions(rt){return this.elementProperties.get(rt)??X}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const rt=k(this);rt.finalize(),void 0!==rt.l&&(this.l=[...rt.l]),this.elementProperties=new Map(rt.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const At=this.properties,rn=[...R(At),...b(At)];for(const vn of rn)this.createProperty(vn,At[vn])}const rt=this[Symbol.metadata];if(null!==rt){const At=litPropertyMetadata.get(rt);if(void 0!==At)for(const[rn,vn]of At)this.elementProperties.set(rn,vn)}this._$Eh=new Map;for(const[At,rn]of this.elementProperties){const vn=this._$Eu(At,rn);void 0!==vn&&this._$Eh.set(vn,At)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(rt){const At=[];if(Array.isArray(rt)){const rn=new Set(rt.flat(1/0).reverse());for(const vn of rn)At.unshift(w(vn))}else void 0!==rt&&At.push(w(rt));return At}static _$Eu(rt,At){const rn=At.attribute;return!1===rn?void 0:"string"==typeof rn?rn:"string"==typeof rt?rt.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(rt=>this.enableUpdating=rt),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(rt=>rt(this))}addController(rt){(this._$E_??=new Set).add(rt),void 0!==this.renderRoot&&this.isConnected&&rt.hostConnected?.()}removeController(rt){this._$E_?.delete(rt)}_$ES(){const rt=new Map,At=this.constructor.elementProperties;for(const rn of At.keys())this.hasOwnProperty(rn)&&(rt.set(rn,this[rn]),delete this[rn]);rt.size>0&&(this._$Ep=rt)}createRenderRoot(){const rt=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((Vt,rt)=>{if(s)Vt.adoptedStyleSheets=rt.map(At=>At instanceof CSSStyleSheet?At:At.styleSheet);else for(const At of rt){const rn=document.createElement("style"),vn=n.litNonce;void 0!==vn&&rn.setAttribute("nonce",vn),rn.textContent=At.cssText,Vt.appendChild(rn)}})(rt,this.constructor.elementStyles),rt}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(rt=>rt.hostConnected?.())}enableUpdating(rt){}disconnectedCallback(){this._$E_?.forEach(rt=>rt.hostDisconnected?.())}attributeChangedCallback(rt,At,rn){this._$AK(rt,rn)}_$EO(rt,At){const rn=this.constructor.elementProperties.get(rt),vn=this.constructor._$Eu(rt,rn);if(void 0!==vn&&!0===rn.reflect){const Wt=(void 0!==rn.converter?.toAttribute?rn.converter:ee).toAttribute(At,rn.type);this._$Em=rt,null==Wt?this.removeAttribute(vn):this.setAttribute(vn,Wt),this._$Em=null}}_$AK(rt,At){const rn=this.constructor,vn=rn._$Eh.get(rt);if(void 0!==vn&&this._$Em!==vn){const Wt=rn.getPropertyOptions(vn),Nn="function"==typeof Wt.converter?{fromAttribute:Wt.converter}:void 0!==Wt.converter?.fromAttribute?Wt.converter:ee;this._$Em=vn,this[vn]=Nn.fromAttribute(At,Wt.type),this._$Em=null}}requestUpdate(rt,At,rn,vn=!1,Wt){if(void 0!==rt){if(rn??=this.constructor.getPropertyOptions(rt),!(rn.hasChanged??ue)(vn?Wt:this[rt],At))return;this.C(rt,At,rn)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(rt,At,rn){this._$AL.has(rt)||this._$AL.set(rt,At),!0===rn.reflect&&this._$Em!==rt&&(this._$Ej??=new Set).add(rt)}_$EP(){var rt=this;return(0,e.Z)(function*(){rt.isUpdatePending=!0;try{yield rt._$Eg}catch(rn){Promise.reject(rn)}const At=rt.scheduleUpdate();return null!=At&&(yield At),!rt.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[vn,Wt]of this._$Ep)this[vn]=Wt;this._$Ep=void 0}const rn=this.constructor.elementProperties;if(rn.size>0)for(const[vn,Wt]of rn)!0!==Wt.wrapped||this._$AL.has(vn)||void 0===this[vn]||this.C(vn,this[vn],Wt)}let rt=!1;const At=this._$AL;try{rt=this.shouldUpdate(At),rt?(this.willUpdate(At),this._$E_?.forEach(rn=>rn.hostUpdate?.()),this.update(At)):this._$ET()}catch(rn){throw rt=!1,this._$ET(),rn}rt&&this._$AE(At)}willUpdate(rt){}_$AE(rt){this._$E_?.forEach(At=>At.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(rt)),this.updated(rt)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(rt){return!0}update(rt){this._$Ej&&=this._$Ej.forEach(At=>this._$EO(At,this[At])),this._$ET()}updated(rt){}firstUpdated(rt){}}J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Y("elementProperties")]=new Map,J[Y("finalized")]=new Map,B?.({ReactiveElement:J}),(j.reactiveElementVersions??=[]).push("2.0.2");const ie=globalThis,q=ie.trustedTypes,de=q?q.createPolicy("lit-html",{createHTML:Vt=>Vt}):void 0,te="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,E="?"+N,T=`<${E}>`,L=document,F=()=>L.createComment(""),Q=Vt=>null===Vt||"object"!=typeof Vt&&"function"!=typeof Vt,fe=Array.isArray,_e=Vt=>fe(Vt)||"function"==typeof Vt?.[Symbol.iterator],xe="[ \t\n\f\r]",ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,Ne=/>/g,ze=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,Ce=/"/g,pe=/^(?:script|style|textarea|title)$/i,De=Vt=>(rt,...At)=>({_$litType$:Vt,strings:rt,values:At}),ne=De(1),Te=De(2),Le=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),cn=new WeakMap,_t=L.createTreeWalker(L,129);function Xe(Vt,rt){if(!Array.isArray(Vt)||!Vt.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==de?de.createHTML(rt):rt}const dt=(Vt,rt)=>{const At=Vt.length-1,rn=[];let vn,Wt=2===rt?"<svg>":"",Nn=ye;for(let rr=0;rr<At;rr++){const Mi=Vt[rr];let Js,go,Es=-1,Wa=0;for(;Wa<Mi.length&&(Nn.lastIndex=Wa,go=Nn.exec(Mi),null!==go);)Wa=Nn.lastIndex,Nn===ye?"!--"===go[1]?Nn=me:void 0!==go[1]?Nn=Ne:void 0!==go[2]?(pe.test(go[2])&&(vn=RegExp("</"+go[2],"g")),Nn=ze):void 0!==go[3]&&(Nn=ze):Nn===ze?">"===go[0]?(Nn=vn??ye,Es=-1):void 0===go[1]?Es=-2:(Es=Nn.lastIndex-go[2].length,Js=go[1],Nn=void 0===go[3]?ze:'"'===go[3]?Ce:ve):Nn===Ce||Nn===ve?Nn=ze:Nn===me||Nn===Ne?Nn=ye:(Nn=ze,vn=void 0);const Sa=Nn===ze&&Vt[rr+1].startsWith("/>")?" ":"";Wt+=Nn===ye?Mi+T:Es>=0?(rn.push(Js),Mi.slice(0,Es)+te+Mi.slice(Es)+N+Sa):Mi+N+(-2===Es?rr:Sa)}return[Xe(Vt,Wt+(Vt[At]||"<?>")+(2===rt?"</svg>":"")),rn]};class Re{constructor({strings:rt,_$litType$:At},rn){let vn;this.parts=[];let Wt=0,Nn=0;const rr=rt.length-1,Mi=this.parts,[Js,go]=dt(rt,At);if(this.el=Re.createElement(Js,rn),_t.currentNode=this.el.content,2===At){const Es=this.el.content.firstChild;Es.replaceWith(...Es.childNodes)}for(;null!==(vn=_t.nextNode())&&Mi.length<rr;){if(1===vn.nodeType){if(vn.hasAttributes())for(const Es of vn.getAttributeNames())if(Es.endsWith(te)){const Wa=go[Nn++],Sa=vn.getAttribute(Es).split(N),$l=/([.?@])?(.*)/.exec(Wa);Mi.push({type:1,index:Wt,name:$l[2],strings:Sa,ctor:"."===$l[1]?ct:"?"===$l[1]?Ve:"@"===$l[1]?Ct:ht}),vn.removeAttribute(Es)}else Es.startsWith(N)&&(Mi.push({type:6,index:Wt}),vn.removeAttribute(Es));if(pe.test(vn.tagName)){const Es=vn.textContent.split(N),Wa=Es.length-1;if(Wa>0){vn.textContent=q?q.emptyScript:"";for(let Sa=0;Sa<Wa;Sa++)vn.append(Es[Sa],F()),_t.nextNode(),Mi.push({type:2,index:++Wt});vn.append(Es[Wa],F())}}}else if(8===vn.nodeType)if(vn.data===E)Mi.push({type:2,index:Wt});else{let Es=-1;for(;-1!==(Es=vn.data.indexOf(N,Es+1));)Mi.push({type:7,index:Wt}),Es+=N.length-1}Wt++}}static createElement(rt,At){const rn=L.createElement("template");return rn.innerHTML=rt,rn}}function Ft(Vt,rt,At=Vt,rn){if(rt===Le)return rt;let vn=void 0!==rn?At._$Co?.[rn]:At._$Cl;const Wt=Q(rt)?void 0:rt._$litDirective$;return vn?.constructor!==Wt&&(vn?._$AO?.(!1),void 0===Wt?vn=void 0:(vn=new Wt(Vt),vn._$AT(Vt,At,rn)),void 0!==rn?(At._$Co??=[])[rn]=vn:At._$Cl=vn),void 0!==vn&&(rt=Ft(Vt,vn._$AS(Vt,rt.values),vn,rn)),rt}class sn{constructor(rt,At){this._$AV=[],this._$AN=void 0,this._$AD=rt,this._$AM=At}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(rt){const{el:{content:At},parts:rn}=this._$AD,vn=(rt?.creationScope??L).importNode(At,!0);_t.currentNode=vn;let Wt=_t.nextNode(),Nn=0,rr=0,Mi=rn[0];for(;void 0!==Mi;){if(Nn===Mi.index){let Js;2===Mi.type?Js=new Yt(Wt,Wt.nextSibling,this,rt):1===Mi.type?Js=new Mi.ctor(Wt,Mi.name,Mi.strings,this,rt):6===Mi.type&&(Js=new Tt(Wt,this,rt)),this._$AV.push(Js),Mi=rn[++rr]}Nn!==Mi?.index&&(Wt=_t.nextNode(),Nn++)}return _t.currentNode=L,vn}p(rt){let At=0;for(const rn of this._$AV)void 0!==rn&&(void 0!==rn.strings?(rn._$AI(rt,rn,At),At+=rn.strings.length-2):rn._$AI(rt[At])),At++}}class Yt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(rt,At,rn,vn){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=rt,this._$AB=At,this._$AM=rn,this.options=vn,this._$Cv=vn?.isConnected??!0}get parentNode(){let rt=this._$AA.parentNode;const At=this._$AM;return void 0!==At&&11===rt?.nodeType&&(rt=At.parentNode),rt}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(rt,At=this){rt=Ft(this,rt,At),Q(rt)?rt===at||null==rt||""===rt?(this._$AH!==at&&this._$AR(),this._$AH=at):rt!==this._$AH&&rt!==Le&&this._(rt):void 0!==rt._$litType$?this.g(rt):void 0!==rt.nodeType?this.$(rt):_e(rt)?this.T(rt):this._(rt)}k(rt){return this._$AA.parentNode.insertBefore(rt,this._$AB)}$(rt){this._$AH!==rt&&(this._$AR(),this._$AH=this.k(rt))}_(rt){this._$AH!==at&&Q(this._$AH)?this._$AA.nextSibling.data=rt:this.$(L.createTextNode(rt)),this._$AH=rt}g(rt){const{values:At,_$litType$:rn}=rt,vn="number"==typeof rn?this._$AC(rt):(void 0===rn.el&&(rn.el=Re.createElement(Xe(rn.h,rn.h[0]),this.options)),rn);if(this._$AH?._$AD===vn)this._$AH.p(At);else{const Wt=new sn(vn,this),Nn=Wt.u(this.options);Wt.p(At),this.$(Nn),this._$AH=Wt}}_$AC(rt){let At=cn.get(rt.strings);return void 0===At&&cn.set(rt.strings,At=new Re(rt)),At}T(rt){fe(this._$AH)||(this._$AH=[],this._$AR());const At=this._$AH;let rn,vn=0;for(const Wt of rt)vn===At.length?At.push(rn=new Yt(this.k(F()),this.k(F()),this,this.options)):rn=At[vn],rn._$AI(Wt),vn++;vn<At.length&&(this._$AR(rn&&rn._$AB.nextSibling,vn),At.length=vn)}_$AR(rt=this._$AA.nextSibling,At){for(this._$AP?.(!1,!0,At);rt&&rt!==this._$AB;){const rn=rt.nextSibling;rt.remove(),rt=rn}}setConnected(rt){void 0===this._$AM&&(this._$Cv=rt,this._$AP?.(rt))}}class ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(rt,At,rn,vn,Wt){this.type=1,this._$AH=at,this._$AN=void 0,this.element=rt,this.name=At,this._$AM=vn,this.options=Wt,rn.length>2||""!==rn[0]||""!==rn[1]?(this._$AH=Array(rn.length-1).fill(new String),this.strings=rn):this._$AH=at}_$AI(rt,At=this,rn,vn){const Wt=this.strings;let Nn=!1;if(void 0===Wt)rt=Ft(this,rt,At,0),Nn=!Q(rt)||rt!==this._$AH&&rt!==Le,Nn&&(this._$AH=rt);else{const rr=rt;let Mi,Js;for(rt=Wt[0],Mi=0;Mi<Wt.length-1;Mi++)Js=Ft(this,rr[rn+Mi],At,Mi),Js===Le&&(Js=this._$AH[Mi]),Nn||=!Q(Js)||Js!==this._$AH[Mi],Js===at?rt=at:rt!==at&&(rt+=(Js??"")+Wt[Mi+1]),this._$AH[Mi]=Js}Nn&&!vn&&this.O(rt)}O(rt){rt===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,rt??"")}}class ct extends ht{constructor(){super(...arguments),this.type=3}O(rt){this.element[this.name]=rt===at?void 0:rt}}class Ve extends ht{constructor(){super(...arguments),this.type=4}O(rt){this.element.toggleAttribute(this.name,!!rt&&rt!==at)}}class Ct extends ht{constructor(rt,At,rn,vn,Wt){super(rt,At,rn,vn,Wt),this.type=5}_$AI(rt,At=this){if((rt=Ft(this,rt,At,0)??at)===Le)return;const rn=this._$AH,vn=rt===at&&rn!==at||rt.capture!==rn.capture||rt.once!==rn.once||rt.passive!==rn.passive,Wt=rt!==at&&(rn===at||vn);vn&&this.element.removeEventListener(this.name,this,rn),Wt&&this.element.addEventListener(this.name,this,rt),this._$AH=rt}handleEvent(rt){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,rt):this._$AH.handleEvent(rt)}}class Tt{constructor(rt,At,rn){this.element=rt,this.type=6,this._$AN=void 0,this._$AM=At,this.options=rn}get _$AU(){return this._$AM._$AU}_$AI(rt){Ft(this,rt)}}const je={j:te,P:N,A:E,C:1,M:dt,L:sn,R:_e,V:Ft,D:Yt,I:ht,H:Ve,N:Ct,U:ct,B:Tt};ie.litHtmlPolyfillSupport?.(Re,Yt),(ie.litHtmlVersions??=[]).push("3.1.0");class St extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const rt=super.createRenderRoot();return this.renderOptions.renderBefore??=rt.firstChild,rt}update(rt){const At=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(rt),this._$Do=((Vt,rt,At)=>{const rn=At?.renderBefore??rt;let vn=rn._$litPart$;if(void 0===vn){const Wt=At?.renderBefore??null;rn._$litPart$=vn=new Yt(rt.insertBefore(F(),Wt),Wt,void 0,At??{})}return vn._$AI(Vt),vn})(At,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}}let Qt,Mn,zn;function Pn(Vt,rt){Qt=document.createElement("style"),Mn=document.createElement("style"),zn=document.createElement("style"),Qt.textContent=Ut(Vt).core.cssText,Mn.textContent=Ut(Vt).dark.cssText,zn.textContent=Ut(Vt).light.cssText,document.head.appendChild(Qt),document.head.appendChild(Mn),document.head.appendChild(zn),fn(rt)}function fn(Vt){Mn&&zn&&("light"===Vt?(Mn.removeAttribute("media"),zn.media="enabled"):(zn.removeAttribute("media"),Mn.media="enabled"))}function dn(Vt){Qt&&Mn&&zn&&(Qt.textContent=Ut(Vt).core.cssText,Mn.textContent=Ut(Vt).dark.cssText,zn.textContent=Ut(Vt).light.cssText)}function Ut(Vt){return{core:p`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${g(Vt?.["--w3m-color-mix-strength"]?`${Vt["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${g(Vt?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${g(Vt?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${g(Vt?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${g(Vt?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:p`
      :root {
        --w3m-color-mix: ${g(Vt?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${g(Vt?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:p`
      :root {
        --w3m-color-mix: ${g(Vt?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${g(Vt?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}St._$litElement$=!0,St.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:St}),globalThis.litElementPolyfillSupport?.({LitElement:St}),(globalThis.litElementVersions??=[]).push("4.0.2");const Jt=p`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,nt=p`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,$e=p`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function vt(Vt){return function(At){return"function"==typeof At?function it(Vt,rt){return customElements.get(Vt)||customElements.define(Vt,rt),rt}(Vt,At):function Ze(Vt,rt){const{kind:At,elements:rn}=rt;return{kind:At,elements:rn,finisher(vn){customElements.get(Vt)||customElements.define(Vt,vn)}}}(Vt,At)}}const Ht=p`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let Dn=class extends St{render(){return ne`<slot></slot>`}};Dn.styles=[Jt,Ht],Dn=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt}([vt("wui-card")],Dn);const mt={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:ue},bt=(Vt=mt,rt,At)=>{const{kind:rn,metadata:vn}=At;let Wt=globalThis.litPropertyMetadata.get(vn);if(void 0===Wt&&globalThis.litPropertyMetadata.set(vn,Wt=new Map),Wt.set(At.name,Vt),"accessor"===rn){const{name:Nn}=At;return{set(rr){const Mi=rt.get.call(this);rt.set.call(this,rr),this.requestUpdate(Nn,Mi,Vt)},init(rr){return void 0!==rr&&this.C(Nn,void 0,Vt),rr}}}if("setter"===rn){const{name:Nn}=At;return function(rr){const Mi=this[Nn];rt.call(this,rr),this.requestUpdate(Nn,Mi,Vt)}}throw Error("Unsupported decorator location: "+rn)};function Ke(Vt){return(rt,At)=>"object"==typeof At?bt(Vt,rt,At):((rn,vn,Wt)=>{const Nn=vn.hasOwnProperty(Wt);return vn.constructor.createProperty(Wt,Nn?{...rn,wrapped:!0}:rn),Nn?Object.getOwnPropertyDescriptor(vn,Wt):void 0})(Vt,rt,At)}function Xt(Vt){return Ke({...Vt,state:!0,attribute:!1})}const _n=p`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Zn=Te`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,xr=Te`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,mr=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Mr=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Ar=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Kt=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,o=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,a=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,v=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,D=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,O=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,G=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,K=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ce=Te`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,we=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ke=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Oe=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,tt=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,gt=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Pt=Te` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Ot=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,tn=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,pn=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,bn=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Fn=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Ae=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,lt=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Zt=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,mn=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tr=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Dr=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,or=Te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,zr=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,jr=Te`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,qr=Te`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,vi=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Qi=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,Ai=Te` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ss=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Hs=Te`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Fi=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,vo=Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Sn=Te`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,Hn=Te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,sr=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,kr=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,$r=Te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,li=Te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Ti=Te`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,vs=Te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,no=Te`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var _o=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};const Fa={allWallets:Zn,appStore:xr,chromeStore:ce,apple:mr,arrowBottom:Mr,arrowLeft:Ar,arrowRight:Kt,arrowTop:o,browser:a,checkmark:v,chevronBottom:D,chevronLeft:O,chevronRight:G,chevronTop:K,clock:we,close:ke,compass:tt,coinPlaceholder:Oe,copy:gt,cursor:Pt,desktop:Ot,disconnect:tn,discord:pn,etherscan:bn,extension:Fn,externalLink:Ae,facebook:lt,filters:Zt,github:mn,google:tr,helpCircle:Dr,infoCircle:or,mail:zr,mobile:jr,networkPlaceholder:qr,nftPlaceholder:vi,off:Qi,playStore:Ai,qrCode:ss,refresh:Hs,search:Fi,swapHorizontal:vo,swapHorizontalBold:Sn,swapVertical:Hn,telegram:sr,twitch:kr,twitter:$r,twitterIcon:li,verify:Ti,verifyFilled:vs,wallet:Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,walletConnect:Te`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,walletPlaceholder:no,warningCircle:Te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`};let Bo=class extends St{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,ne`${Fa[this.name]}`}};Bo.styles=[Jt,$e,_n],_o([Ke()],Bo.prototype,"size",void 0),_o([Ke()],Bo.prototype,"name",void 0),_o([Ke()],Bo.prototype,"color",void 0),Bo=_o([vt("wui-icon")],Bo);const oa=p`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var bo=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ys=class extends St{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return ne`<img src=${this.src} alt=${this.alt} />`}};Ys.styles=[Jt,$e,oa],bo([Ke()],Ys.prototype,"src",void 0),bo([Ke()],Ys.prototype,"alt",void 0),Ys=bo([vt("wui-image")],Ys);const Bs=p`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let ao=class extends St{render(){return ne`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ao.styles=[Jt,Bs],ao=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt}([vt("wui-loading-hexagon")],ao);const Da=p`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Ko=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let zi=class extends St{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,ne`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};zi.styles=[Jt,Da],Ko([Ke()],zi.prototype,"color",void 0),Ko([Ke()],zi.prototype,"size",void 0),zi=Ko([vt("wui-loading-spinner")],zi);const Gn=p`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var wr=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Zr=class extends St{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const rt=this.radius>50?50:this.radius,rn=36-rt;return ne`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${rt}
          stroke-dasharray="${116+rn} ${245+rn}"
          stroke-dashoffset=${360+1.75*rn}
        />
      </svg>
    `}};Zr.styles=[Jt,Gn],wr([Ke({type:Number})],Zr.prototype,"radius",void 0),Zr=wr([vt("wui-loading-thumbnail")],Zr);const xi=p`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Ki=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Bi=class extends St{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,ne`<slot></slot>`}};Bi.styles=[xi],Ki([Ke()],Bi.prototype,"width",void 0),Ki([Ke()],Bi.prototype,"height",void 0),Ki([Ke()],Bi.prototype,"borderRadius",void 0),Bi=Ki([vt("wui-shimmer")],Bi);const is=Vt=>(...rt)=>({_$litDirective$:Vt,values:rt});class Ds{constructor(rt){}get _$AU(){return this._$AM._$AU}_$AT(rt,At,rn){this._$Ct=rt,this._$AM=At,this._$Ci=rn}_$AS(rt,At){return this.update(rt,At)}update(rt,At){return this.render(...At)}}const qi=is(class extends Ds{constructor(Vt){if(super(Vt),1!==Vt.type||"class"!==Vt.name||Vt.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(Vt){return" "+Object.keys(Vt).filter(rt=>Vt[rt]).join(" ")+" "}update(Vt,[rt]){if(void 0===this.it){this.it=new Set,void 0!==Vt.strings&&(this.st=new Set(Vt.strings.join(" ").split(/\s/).filter(rn=>""!==rn)));for(const rn in rt)rt[rn]&&!this.st?.has(rn)&&this.it.add(rn);return this.render(rt)}const At=Vt.element.classList;for(const rn of this.it)rn in rt||(At.remove(rn),this.it.delete(rn));for(const rn in rt){const vn=!!rt[rn];vn===this.it.has(rn)||this.st?.has(rn)||(vn?(At.add(rn),this.it.add(rn)):(At.remove(rn),this.it.delete(rn)))}return Le}}),Rs=p`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var $i=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let si=class extends St{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const rt={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,ne`<slot class=${qi(rt)}></slot>`}};si.styles=[Jt,Rs],$i([Ke()],si.prototype,"variant",void 0),$i([Ke()],si.prototype,"color",void 0),$i([Ke()],si.prototype,"align",void 0),si=$i([vt("wui-text")],si);const Zi=Te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,hs=Te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Cs=Te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,po=Te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,fs=Te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ao=Te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Zs=Te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ps=Te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Po=Te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,jo=Te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ro=Te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,js=Te`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Zo=Te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ua=p`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var on=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};const Qn={browser:Zi,dao:hs,defi:Cs,defiAlt:po,eth:fs,layers:Ao,lock:Zs,login:ps,network:Po,nft:jo,noun:ro,profile:js,system:Zo};let Rn=class extends St{constructor(){super(...arguments),this.name="browser"}render(){return ne`${Qn[this.name]}`}};Rn.styles=[Jt,ua],on([Ke()],Rn.prototype,"name",void 0),Rn=on([vt("wui-visual")],Rn);const cr=Vt=>Vt??at,Sr={getSpacingStyles:(Vt,rt)=>Array.isArray(Vt)?Vt[rt]?`var(--wui-spacing-${Vt[rt]})`:void 0:"string"==typeof Vt?`var(--wui-spacing-${Vt})`:void 0,getFormattedDate:Vt=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(Vt),getHostName:Vt=>new URL(Vt).hostname,getTruncateString:({string:Vt,charsStart:rt,charsEnd:At,truncate:rn})=>Vt.length<=rt+At?Vt:"end"===rn?`${Vt.substring(0,rt)}...`:"start"===rn?`...${Vt.substring(Vt.length-At)}`:`${Vt.substring(0,Math.floor(rt))}...${Vt.substring(Vt.length-Math.floor(At))}`,generateAvatarColors(Vt){const At=Vt.toLowerCase().replace(/^0x/iu,"").substring(0,6),rn=this.hexToRgb(At),vn=[];for(let Wt=0;Wt<5;Wt+=1){const Nn=this.tintColor(rn,.15*Wt);vn.push(`rgb(${Nn[0]}, ${Nn[1]}, ${Nn[2]})`)}return`\n    --local-color-1: ${vn[0]};\n    --local-color-2: ${vn[1]};\n    --local-color-3: ${vn[2]};\n    --local-color-4: ${vn[3]};\n    --local-color-5: ${vn[4]};\n   `},hexToRgb(Vt){const rt=parseInt(Vt,16);return[rt>>16&255,rt>>8&255,255&rt]},tintColor(Vt,rt){const[At,rn,vn]=Vt;return[Math.round(At+(255-At)*rt),Math.round(rn+(255-rn)*rt),Math.round(vn+(255-vn)*rt)]},isNumber:Vt=>/^[0-9]+$/u.test(Vt),getColorTheme:Vt=>Vt||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},ri=p`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var jt=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let wt=class extends St{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Sr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Sr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Sr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Sr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Sr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Sr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Sr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Sr.getSpacingStyles(this.margin,3)};\n    `,ne`<slot></slot>`}};wt.styles=[Jt,ri],jt([Ke()],wt.prototype,"flexDirection",void 0),jt([Ke()],wt.prototype,"flexWrap",void 0),jt([Ke()],wt.prototype,"flexBasis",void 0),jt([Ke()],wt.prototype,"flexGrow",void 0),jt([Ke()],wt.prototype,"flexShrink",void 0),jt([Ke()],wt.prototype,"alignItems",void 0),jt([Ke()],wt.prototype,"justifyContent",void 0),jt([Ke()],wt.prototype,"columnGap",void 0),jt([Ke()],wt.prototype,"rowGap",void 0),jt([Ke()],wt.prototype,"gap",void 0),jt([Ke()],wt.prototype,"padding",void 0),jt([Ke()],wt.prototype,"margin",void 0),wt=jt([vt("wui-flex")],wt);const Et=p`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var kn=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Wr=class extends St{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return ne`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",ne`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const rt=Sr.generateAvatarColors(this.address);return this.style.cssText=rt,null}return this.dataset.variant="default",null}};Wr.styles=[Jt,Et],kn([Ke()],Wr.prototype,"imageSrc",void 0),kn([Ke()],Wr.prototype,"alt",void 0),kn([Ke()],Wr.prototype,"address",void 0),Wr=kn([vt("wui-avatar")],Wr);const Di=p`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Os=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Co=class extends St{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const rt=this.iconSize||this.size,At="lg"===this.size,Nn="gray"===this.background,rr="opaque"===this.background,Mi="accent-100"===this.backgroundColor&&rr||"success-100"===this.backgroundColor&&rr||"error-100"===this.backgroundColor&&rr||"inverse-100"===this.backgroundColor&&rr;let Js=`var(--wui-color-${this.backgroundColor})`;return Mi?Js=`var(--wui-icon-box-bg-${this.backgroundColor})`:Nn&&(Js=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${Js};\n       --local-bg-mix: ${Mi||Nn?"100%":At?"12%":"16%"};\n       --local-border-radius: var(--wui-border-radius-${At?"xxs":"xl"===this.size?"s":"3xl"});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,ne` <wui-icon color=${this.iconColor} size=${rt} name=${this.icon}></wui-icon> `}};Co.styles=[Jt,nt,Di],Os([Ke()],Co.prototype,"size",void 0),Os([Ke()],Co.prototype,"backgroundColor",void 0),Os([Ke()],Co.prototype,"iconColor",void 0),Os([Ke()],Co.prototype,"iconSize",void 0),Os([Ke()],Co.prototype,"background",void 0),Os([Ke({type:Boolean})],Co.prototype,"border",void 0),Os([Ke()],Co.prototype,"borderColor",void 0),Os([Ke()],Co.prototype,"icon",void 0),Co=Os([vt("wui-icon-box")],Co);const na=p`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button > wui-flex {
      border-radius: 0px;
      border: none;
      background: transparent;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Lo=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Xs=class extends St{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return ne`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${cr(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Sr.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const rt=this.networkSrc?ne`<wui-image src=${this.networkSrc}></wui-image>`:ne`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return ne`
        ${rt}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Xs.styles=[Jt,nt,na],Lo([Ke()],Xs.prototype,"networkSrc",void 0),Lo([Ke()],Xs.prototype,"avatarSrc",void 0),Lo([Ke()],Xs.prototype,"balance",void 0),Lo([Ke({type:Boolean})],Xs.prototype,"disabled",void 0),Lo([Ke({type:Boolean})],Xs.prototype,"isProfileName",void 0),Lo([Ke()],Xs.prototype,"address",void 0),Xs=Lo([vt("wui-account-button")],Xs);const Ur=p`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var ts=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let aa=class extends St{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let rt="xxs";return rt="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${rt});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),ne`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
      ${this.templateInstalledBadge()}
    `}templateVisual(){return this.imageSrc?ne`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?ne`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:ne`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}templateInstalledBadge(){return this.installed?ne`
        <wui-icon-box
          size=${this.badgeSize}
          iconSize=${this.badgeSize}
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      `:null}};aa.styles=[Jt,Ur],ts([Ke()],aa.prototype,"size",void 0),ts([Ke()],aa.prototype,"name",void 0),ts([Ke()],aa.prototype,"imageSrc",void 0),ts([Ke()],aa.prototype,"walletIcon",void 0),ts([Ke({type:Boolean})],aa.prototype,"installed",void 0),ts([Ke()],aa.prototype,"badgeSize",void 0),aa=ts([vt("wui-wallet-image")],aa);const As=p`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var ul=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ho=class extends St{constructor(){super(...arguments),this.walletImages=[]}render(){const rt=this.walletImages.length<4;return ne`${this.walletImages.slice(0,4).map(({src:At,walletName:rn})=>ne`
            <wui-wallet-image
              size="inherit"
              imageSrc=${At}
              name=${cr(rn)}
            ></wui-wallet-image>
          `)}
      ${rt?[...Array(4-this.walletImages.length)].map(()=>ne` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Ho.styles=[Jt,As],ul([Ke({type:Array})],Ho.prototype,"walletImages",void 0),Ho=ul([vt("wui-all-wallets-image")],Ho);const Qo=p`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ra=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let _s=class extends St{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const rt="md"===this.size?"paragraph-600":"small-600";return ne`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${rt} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?ne`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ne``}};_s.styles=[Jt,nt,Qo],ra([Ke()],_s.prototype,"size",void 0),ra([Ke({type:Boolean})],_s.prototype,"disabled",void 0),ra([Ke({type:Boolean})],_s.prototype,"fullWidth",void 0),ra([Ke({type:Boolean})],_s.prototype,"loading",void 0),ra([Ke()],_s.prototype,"variant",void 0),ra([Ke({type:Boolean})],_s.prototype,"hasIconLeft",void 0),ra([Ke({type:Boolean})],_s.prototype,"hasIconRight",void 0),_s=ra([vt("wui-button")],_s);const Qa=Te`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,vl=p`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Ba=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Mo=class extends St{constructor(){super(...arguments),this.type="wallet"}render(){return ne`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?ne` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Qa}`:ne`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Mo.styles=[Jt,nt,vl],Ba([Ke()],Mo.prototype,"type",void 0),Mo=Ba([vt("wui-card-select-loader")],Mo);const ja=Te`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,gn=p`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var He=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let et=class extends St{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const rt="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${rt?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${rt?"86px":"48px"};\n      --local-height: ${rt?"96px":"54px"};\n      --local-icon-size: ${rt?"42px":"24px"};\n    `,ne`${this.templateVisual()} ${rt?ja:Qa}`}templateVisual(){return this.imageSrc?ne`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:ne`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};et.styles=[Jt,gn],He([Ke()],et.prototype,"size",void 0),He([Ke()],et.prototype,"name",void 0),He([Ke()],et.prototype,"imageSrc",void 0),He([Ke({type:Boolean})],et.prototype,"selected",void 0),et=He([vt("wui-network-image")],et);const Rt=p`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var wn=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Un=class extends St{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return ne`
      <button data-selected=${cr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?ne`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${cr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:ne`
      <wui-wallet-image
        size="md"
        imageSrc=${cr(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Un.styles=[Jt,nt,Rt],wn([Ke()],Un.prototype,"name",void 0),wn([Ke()],Un.prototype,"type",void 0),wn([Ke()],Un.prototype,"imageSrc",void 0),wn([Ke({type:Boolean})],Un.prototype,"disabled",void 0),wn([Ke({type:Boolean})],Un.prototype,"selected",void 0),wn([Ke({type:Boolean})],Un.prototype,"installed",void 0),Un=wn([vt("wui-card-select")],Un);const ur=p`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var lr=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let br=class extends St{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const At="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return ne`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${At} color="inherit">
          ${this.title?this.title:Sr.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?ne`<wui-image src=${this.imageSrc}></wui-image>`:null}};br.styles=[Jt,nt,ur],lr([Ke()],br.prototype,"variant",void 0),lr([Ke()],br.prototype,"imageSrc",void 0),lr([Ke({type:Boolean})],br.prototype,"disabled",void 0),lr([Ke()],br.prototype,"icon",void 0),lr([Ke()],br.prototype,"href",void 0),lr([Ke()],br.prototype,"text",void 0),br=lr([vt("wui-chip")],br);const Gr=p`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Ei=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ii=class extends St{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const rt="md"===this.size?"paragraph-600":"small-600";return ne`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${rt} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?ne`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ii.styles=[Jt,nt,Gr],Ei([Ke()],Ii.prototype,"size",void 0),Ei([Ke({type:Boolean})],Ii.prototype,"loading",void 0),Ii=Ei([vt("wui-connect-button")],Ii);const Gi=p`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ji=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ri=class extends St{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return ne`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ri.styles=[Jt,nt,Gi],ji([Ke({type:Boolean})],Ri.prototype,"disabled",void 0),ji([Ke()],Ri.prototype,"label",void 0),ji([Ke()],Ri.prototype,"buttonLabel",void 0),Ri=ji([vt("wui-cta-button")],Ri);const Uo=(Vt,rt)=>{const At=Vt._$AN;if(void 0===At)return!1;for(const rn of At)rn._$AO?.(rt,!1),Uo(rn,rt);return!0},Ci=Vt=>{let rt,At;do{if(void 0===(rt=Vt._$AM))break;At=rt._$AN,At.delete(Vt),Vt=rt}while(0===At?.size)},Wi=Vt=>{for(let rt;rt=Vt._$AM;Vt=rt){let At=rt._$AN;if(void 0===At)rt._$AN=At=new Set;else if(At.has(Vt))break;At.add(Vt),yt(rt)}};function Ji(Vt){void 0!==this._$AN?(Ci(this),this._$AM=Vt,Wi(this)):this._$AM=Vt}function Ns(Vt,rt=!1,At=0){const rn=this._$AH,vn=this._$AN;if(void 0!==vn&&0!==vn.size)if(rt)if(Array.isArray(rn))for(let Wt=At;Wt<rn.length;Wt++)Uo(rn[Wt],!1),Ci(rn[Wt]);else null!=rn&&(Uo(rn,!1),Ci(rn));else Uo(this,Vt)}const yt=Vt=>{2==Vt.type&&(Vt._$AP??=Ns,Vt._$AQ??=Ji)};class qt extends Ds{constructor(){super(...arguments),this._$AN=void 0}_$AT(rt,At,rn){super._$AT(rt,At,rn),Wi(this),this.isConnected=rt._$AU}_$AO(rt,At=!0){rt!==this.isConnected&&(this.isConnected=rt,rt?this.reconnected?.():this.disconnected?.()),At&&(Uo(this,rt),Ci(this))}setValue(rt){if(void 0===this._$Ct.strings)this._$Ct._$AI(rt,this);else{const At=[...this._$Ct._$AH];At[this._$Ci]=rt,this._$Ct._$AI(At,this,0)}}disconnected(){}reconnected(){}}const Dt=()=>new An;class An{}const nr=new WeakMap,xt=is(class extends qt{render(Vt){return at}update(Vt,[rt]){const At=rt!==this.G;return At&&void 0!==this.G&&this.ot(void 0),(At||this.rt!==this.lt)&&(this.G=rt,this.ct=Vt.options?.host,this.ot(this.lt=Vt.element)),at}ot(Vt){if("function"==typeof this.G){const rt=this.ct??globalThis;let At=nr.get(rt);void 0===At&&(At=new WeakMap,nr.set(rt,At)),void 0!==At.get(this.G)&&this.G.call(this.ct,void 0),At.set(this.G,Vt),void 0!==Vt&&this.G.call(this.ct,Vt)}else this.G.value=Vt}get rt(){return"function"==typeof this.G?nr.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),nn=p`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var an=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let In=class extends St{constructor(){super(...arguments),this.inputElementRef=Dt(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const rt=`wui-size-${this.size}`;return ne` ${this.templateIcon()}
      <input
        ${xt(this.inputElementRef)}
        class=${rt}
        type=${this.type}
        enterkeyhint=${cr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${cr(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?ne`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};In.styles=[Jt,nt,nn],an([Ke()],In.prototype,"size",void 0),an([Ke()],In.prototype,"icon",void 0),an([Ke({type:Boolean})],In.prototype,"disabled",void 0),an([Ke()],In.prototype,"placeholder",void 0),an([Ke()],In.prototype,"type",void 0),an([Ke()],In.prototype,"keyHint",void 0),an([Ke()],In.prototype,"value",void 0),In=an([vt("wui-input-text")],In);const Xn=p`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var pr=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let gr=class extends St{constructor(){super(...arguments),this.disabled=!1}render(){return ne`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?ne`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};gr.styles=[Jt,Xn],pr([Ke()],gr.prototype,"errorMessage",void 0),pr([Ke({type:Boolean})],gr.prototype,"disabled",void 0),pr([Ke()],gr.prototype,"value",void 0),gr=pr([vt("wui-email-input")],gr);const Hr=p`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Yr=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let ft=class extends St{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return ne`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ft.styles=[Jt,nt,$e,Hr],Yr([Ke()],ft.prototype,"size",void 0),Yr([Ke({type:Boolean})],ft.prototype,"disabled",void 0),Yr([Ke()],ft.prototype,"icon",void 0),Yr([Ke()],ft.prototype,"iconColor",void 0),ft=Yr([vt("wui-icon-link")],ft);const ot=p`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Ge=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let kt=class extends St{constructor(){super(...arguments),this.icon="copy"}render(){return ne`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};kt.styles=[Jt,nt,ot],Ge([Ke()],kt.prototype,"icon",void 0),kt=Ge([vt("wui-input-element")],kt);const en=p`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var On=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let er=class extends St{constructor(){super(...arguments),this.disabled=!1}render(){return ne`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};er.styles=[Jt,nt,en],On([Ke({type:Boolean})],er.prototype,"disabled",void 0),er=On([vt("wui-input-numeric")],er);const hr=p`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Kr=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let mi=class extends St{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return ne`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};mi.styles=[Jt,nt,hr],Kr([Ke({type:Boolean})],mi.prototype,"disabled",void 0),Kr([Ke()],mi.prototype,"color",void 0),mi=Kr([vt("wui-link")],mi);const us=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Si=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Yi=class extends St{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return ne`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${cr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return ne`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return ne`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const rt=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",At="square-blue"===this.iconVariant?"mdl":"md";return ne`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${this.iconSize?this.iconSize:At}
          background="transparent"
          iconColor=${rt}
          backgroundColor=${rt}
          size=${At}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?ne`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ne``}chevronTemplate(){return this.chevron?ne`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Yi.styles=[Jt,nt,us],Si([Ke()],Yi.prototype,"icon",void 0),Si([Ke()],Yi.prototype,"iconSize",void 0),Si([Ke()],Yi.prototype,"variant",void 0),Si([Ke()],Yi.prototype,"iconVariant",void 0),Si([Ke({type:Boolean})],Yi.prototype,"disabled",void 0),Si([Ke()],Yi.prototype,"imageSrc",void 0),Si([Ke()],Yi.prototype,"alt",void 0),Si([Ke({type:Boolean})],Yi.prototype,"chevron",void 0),Si([Ke({type:Boolean})],Yi.prototype,"loading",void 0),Yi=Si([vt("wui-list-item")],Yi);var bs=(()=>{return(Vt=bs||(bs={})).approve="approved",Vt.bought="bought",Vt.borrow="borrowed",Vt.burn="burnt",Vt.cancel="canceled",Vt.claim="claimed",Vt.deploy="deployed",Vt.deposit="deposited",Vt.execute="executed",Vt.mint="minted",Vt.receive="received",Vt.repay="repaid",Vt.send="sent",Vt.sell="sold",Vt.stake="staked",Vt.trade="swapped",Vt.unstake="unstaked",Vt.withdraw="withdrawn",bs;var Vt})();const Ea=p`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var va=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let ys=class extends St{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[rt,At]=this.images,rn="NFT"===rt?.type;return this.style.cssText=`\n    --local-left-border-radius: ${rn?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};\n    --local-right-border-radius: ${(At?.url?"NFT"===At.type:rn)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};\n    `,ne`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[rt,At]=this.images,rn=rt?.type;return 2===this.images.length&&(rt?.url||At?.url)?ne`<div class="swap-images-container">
        ${rt?.url?ne`<wui-image src=${rt.url} alt="Transaction image"></wui-image>`:null}
        ${At?.url?ne`<wui-image src=${At.url} alt="Transaction image"></wui-image>`:null}
      </div>`:rt?.url?ne`<wui-image src=${rt.url} alt="Transaction image"></wui-image>`:"NFT"===rn?ne`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:ne`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let At,rt="accent-100";return At=this.getIcon(),this.status&&(rt=this.getStatusColor()),At?ne`
      <wui-icon-box
        size="xxs"
        iconColor=${rt}
        backgroundColor=${rt}
        background="opaque"
        icon=${At}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};ys.styles=[Ea],va([Ke()],ys.prototype,"type",void 0),va([Ke()],ys.prototype,"status",void 0),va([Ke()],ys.prototype,"direction",void 0),va([Ke({type:Boolean})],ys.prototype,"onlyDirectionIcon",void 0),va([Ke({type:Array})],ys.prototype,"images",void 0),va([Ke({type:Object})],ys.prototype,"secondImage",void 0),ys=va([vt("wui-transaction-visual")],ys);const da=p`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var lo=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ca=class extends St{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return ne`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${cr(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${cr(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${bs[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const rt=this.descriptions?.[0];return rt?ne`
          <wui-text variant="small-500" color="fg-200">
            <span>${rt}</span>
          </wui-text>
        `:null}templateSecondDescription(){const rt=this.descriptions?.[1];return rt?ne`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${rt}</span>
          </wui-text>
        `:null}};Ca.styles=[Jt,da],lo([Ke()],Ca.prototype,"type",void 0),lo([Ke({type:Array})],Ca.prototype,"descriptions",void 0),lo([Ke()],Ca.prototype,"date",void 0),lo([Ke({type:Boolean})],Ca.prototype,"onlyDirectionIcon",void 0),lo([Ke()],Ca.prototype,"status",void 0),lo([Ke()],Ca.prototype,"direction",void 0),lo([Ke({type:Array})],Ca.prototype,"images",void 0),Ca=lo([vt("wui-transaction-list-item")],Ca);const yc=p`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let Tl=class extends St{render(){return ne`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Tl.styles=[Jt,yc],Tl=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt}([vt("wui-transaction-list-item-loader")],Tl);const cc=p`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var hl=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let qa=class extends St{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,ne`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};qa.styles=[Jt,cc],hl([Ke()],qa.prototype,"variant",void 0),qa=hl([vt("wui-tag")],qa);const vc=p`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Ia=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ya=class extends St{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return ne`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?ne` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?ne` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?ne`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:ne`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?ne`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?ne`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Ya.styles=[Jt,nt,vc],Ia([Ke({type:Array})],Ya.prototype,"walletImages",void 0),Ia([Ke()],Ya.prototype,"imageSrc",void 0),Ia([Ke()],Ya.prototype,"name",void 0),Ia([Ke()],Ya.prototype,"tagLabel",void 0),Ia([Ke()],Ya.prototype,"tagVariant",void 0),Ia([Ke()],Ya.prototype,"icon",void 0),Ia([Ke()],Ya.prototype,"walletIcon",void 0),Ia([Ke({type:Boolean})],Ya.prototype,"installed",void 0),Ia([Ke({type:Boolean})],Ya.prototype,"disabled",void 0),Ia([Ke({type:Boolean})],Ya.prototype,"showAllWallets",void 0),Ya=Ia([vt("wui-list-wallet")],Ya);const Bl=p`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var sd=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let _c=class extends St{constructor(){super(...arguments),this.logo="google"}render(){return ne`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};_c.styles=[Jt,Bl],sd([Ke()],_c.prototype,"logo",void 0),_c=sd([vt("wui-logo")],_c);const Ad=p`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Oc=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Il=class extends St{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return ne`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Il.styles=[Jt,nt,Ad],Oc([Ke()],Il.prototype,"logo",void 0),Oc([Ke({type:Boolean})],Il.prototype,"disabled",void 0),Il=Oc([vt("wui-logo-select")],Il);const Jl=p`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Ql=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let bc=class extends St{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return ne`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?ne`<wui-image src=${this.imageSrc}></wui-image>`:ne`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};bc.styles=[Jt,nt,Jl],Ql([Ke()],bc.prototype,"imageSrc",void 0),Ql([Ke({type:Boolean})],bc.prototype,"disabled",void 0),bc=Ql([vt("wui-network-button")],bc);const Bn=p`
  :host {
    position: relative;
    display: block;
  }
`;var ka=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let _a=class extends St{constructor(){super(...arguments),this.length=6,this.numerics=[],this.valueArr=Array.from({length:this.length}).map(()=>""),this.handleKeyDown=(rt,At)=>{const vn=this.getInputElement(rt.target);if(!vn)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(rt.key)&&rt.preventDefault();const Nn=vn.selectionStart;switch(rt.key){case"ArrowLeft":Nn&&vn.setSelectionRange(Nn+1,Nn+1),this.focusInputField("prev",At);break;case"ArrowRight":case"Shift":this.focusInputField("next",At);break;case"Delete":case"Backspace":""===vn.value?this.focusInputField("prev",At):(vn.value="",this.valueArr[At]="")}},this.focusInputField=(rt,At)=>{if("next"===rt){const rn=At+1,vn=this.numerics[rn<this.length?rn:At],Wt=vn?this.getInputElement(vn):void 0;Wt&&Wt.focus()}if("prev"===rt){const rn=At-1,vn=this.numerics[rn>-1?rn:At],Wt=vn?this.getInputElement(vn):void 0;Wt&&Wt.focus()}}}firstUpdated(){const rt=this.shadowRoot?.querySelectorAll("wui-input-numeric");rt&&(this.numerics=Array.from(rt))}render(){return ne`
      <wui-flex gap="xxs">
        ${Array.from({length:this.length}).map((rt,At)=>ne`
            <wui-input-numeric
              @input=${rn=>this.handleInput(rn,At)}
              @keydown=${rn=>this.handleKeyDown(rn,At)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(rt,At){const vn=this.getInputElement(rt.target);if(vn){const Wt=vn.value;"insertFromPaste"===rt.inputType?this.handlePaste(vn,Wt,At):Sr.isNumber(Wt)&&rt.data?(vn.value=rt.data,this.valueArr[At]=rt.data,this.focusInputField("next",At)):(vn.value="",this.valueArr[At]="")}this.dispatchInputChangeEvent()}handlePaste(rt,At,rn){const vn=At[0];if(vn&&Sr.isNumber(vn)){rt.value=vn,this.valueArr[rn]=vn;const Nn=At.substring(1);if(rn+1<this.length&&Nn.length){const rr=this.numerics[rn+1],Mi=rr?this.getInputElement(rr):void 0;Mi&&this.handlePaste(Mi,Nn,rn+1)}else this.focusInputField("next",rn)}else rt.value="",this.valueArr[rn]=""}getInputElement(rt){return rt.shadowRoot?.querySelector("input")?rt.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const rt=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:rt,bubbles:!0,composed:!0}))}};_a.styles=[Jt,Bn],ka([Ke({type:Number})],_a.prototype,"length",void 0),_a=ka([vt("wui-otp")],_a);var to=t(3259);function Pc(Vt,rt,At){return Vt!==rt&&(Vt-rt<0?rt-Vt:Vt-rt)<=At+.1}const Td={generate(Vt,rt,At){const rn="#141414",Nn=[],rr=function wl(Vt,rt){const At=Array.prototype.slice.call(to.create(Vt,{errorCorrectionLevel:rt}).modules.data,0),rn=Math.sqrt(At.length);return At.reduce((vn,Wt,Nn)=>(Nn%rn==0?vn.push([Wt]):vn[vn.length-1].push(Wt))&&vn,[])}(Vt,"Q"),Mi=rt/rr.length,Js=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];Js.forEach(({x:Qs,y:To})=>{const Oa=(rr.length-7)*Mi*Qs,Wo=(rr.length-7)*Mi*To;for(let Io=0;Io<Js.length;Io+=1){const Ta=Mi*(7-2*Io);Nn.push(Te`
            <rect
              fill=${2===Io?rn:"transparent"}
              width=${0===Io?Ta-5:Ta}
              rx= ${0===Io?.45*(Ta-5):.45*Ta}
              ry= ${0===Io?.45*(Ta-5):.45*Ta}
              stroke=${rn}
              stroke-width=${0===Io?5:0}
              height=${0===Io?Ta-5:Ta}
              x= ${0===Io?Wo+Mi*Io+2.5:Wo+Mi*Io}
              y= ${0===Io?Oa+Mi*Io+2.5:Oa+Mi*Io}
            />
          `)}});const go=Math.floor((At+25)/Mi),Es=rr.length/2-go/2,Wa=rr.length/2+go/2-1,Sa=[];rr.forEach((Qs,To)=>{Qs.forEach((Oa,Wo)=>{!rr[To][Wo]||To<7&&Wo<7||To>rr.length-8&&Wo<7||To<7&&Wo>rr.length-8||To>Es&&To<Wa&&Wo>Es&&Wo<Wa||Sa.push([To*Mi+Mi/2,Wo*Mi+Mi/2])})});const $l={};return Sa.forEach(([Qs,To])=>{$l[Qs]?$l[Qs]?.push(To):$l[Qs]=[To]}),Object.entries($l).map(([Qs,To])=>{const Oa=To.filter(Wo=>To.every(pl=>!Pc(Wo,pl,Mi)));return[Number(Qs),Oa]}).forEach(([Qs,To])=>{To.forEach(Oa=>{Nn.push(Te`<circle cx=${Qs} cy=${Oa} fill=${rn} r=${Mi/2.5} />`)})}),Object.entries($l).filter(([Qs,To])=>To.length>1).map(([Qs,To])=>{const Oa=To.filter(Wo=>To.some(pl=>Pc(Wo,pl,Mi)));return[Number(Qs),Oa]}).map(([Qs,To])=>{To.sort((Wo,pl)=>Wo<pl?-1:1);const Oa=[];for(const Wo of To){const pl=Oa.find(Io=>Io.some(Ta=>Pc(Wo,Ta,Mi)));pl?pl.push(Wo):Oa.push([Wo])}return[Qs,Oa.map(Wo=>[Wo[0],Wo[Wo.length-1]])]}).forEach(([Qs,To])=>{To.forEach(([Oa,Wo])=>{Nn.push(Te`
              <line
                x1=${Qs}
                x2=${Qs}
                y1=${Oa}
                y2=${Wo}
                stroke=${rn}
                stroke-width=${Mi/1.25}
                stroke-linecap="round"
              />
            `)})}),Nn}},pu=p`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Hl=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let ql=class extends St{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,ne`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const rt="light"===this.theme?this.size:this.size-32;return Te`
      <svg height=${rt} width=${rt}>
        ${Td.generate(this.uri,rt,rt/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?ne`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:ne`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ql.styles=[Jt,pu],Hl([Ke()],ql.prototype,"uri",void 0),Hl([Ke({type:Number})],ql.prototype,"size",void 0),Hl([Ke()],ql.prototype,"theme",void 0),Hl([Ke()],ql.prototype,"imageSrc",void 0),Hl([Ke()],ql.prototype,"alt",void 0),ql=Hl([vt("wui-qr-code")],ql);const Xo=p`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let Ul=class extends St{constructor(){super(...arguments),this.inputComponentRef=Dt()}render(){return ne`
      <wui-input-text
        ${xt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const At=this.inputComponentRef.value?.inputElementRef.value;At&&(At.value="",At.focus(),At.dispatchEvent(new Event("input")))}};Ul.styles=[Jt,Xo],Ul=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt}([vt("wui-search-bar")],Ul);const eh=p`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Lc=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let ia=class extends St{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return ne`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ia.styles=[Jt,eh],Lc([Ke()],ia.prototype,"backgroundColor",void 0),Lc([Ke()],ia.prototype,"iconColor",void 0),Lc([Ke()],ia.prototype,"icon",void 0),Lc([Ke()],ia.prototype,"message",void 0),ia=Lc([vt("wui-snackbar")],ia);const Vl=p`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ua=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Ni=class extends St{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((rt,At)=>ne`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(At)}
          data-active=${At===this.activeTab}
        >
          <wui-icon size="xs" color="inherit" name=${rt.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${rt.label} </wui-text>
        </button>
      `)}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(rt){this.buttons&&this.animateTabs(rt,!1),this.activeTab=rt,this.onTabChange(rt)}animateTabs(rt,At){const rn=this.buttons[this.activeTab],vn=this.buttons[rt],Wt=rn?.querySelector("wui-text"),Nn=vn?.querySelector("wui-text"),rr=vn?.getBoundingClientRect(),Mi=Nn?.getBoundingClientRect();rn&&Wt&&!At&&rt!==this.activeTab&&(Wt.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),rn.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),vn&&rr&&Mi&&Nn&&(rt!==this.activeTab||At)&&(this.localTabWidth=`${Math.round(rr.width+Mi.width)+6}px`,vn.animate([{width:`${rr.width+Mi.width}px`}],{duration:At?0:500,fill:"forwards",easing:"ease"}),Nn.animate([{opacity:1}],{duration:At?0:125,delay:At?0:200,fill:"forwards",easing:"ease"}))}};Ni.styles=[Jt,nt,Vl],Ua([Ke({type:Array})],Ni.prototype,"tabs",void 0),Ua([Ke()],Ni.prototype,"onTabChange",void 0),Ua([Ke({type:Array})],Ni.prototype,"buttons",void 0),Ua([Ke({type:Boolean})],Ni.prototype,"disabled",void 0),Ua([Xt()],Ni.prototype,"activeTab",void 0),Ua([Xt()],Ni.prototype,"localTabWidth",void 0),Ua([Xt()],Ni.prototype,"isDense",void 0),Ni=Ua([vt("wui-tabs")],Ni);const il=p`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var zc=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Wl=class extends St{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return ne`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Wl.styles=[Jt,nt,il],zc([Ke()],Wl.prototype,"placement",void 0),zc([Ke()],Wl.prototype,"message",void 0),Wl=zc([vt("wui-tooltip")],Wl);const Id=p`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var ec=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let fi=class extends St{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,ne`${this.templateVisual()}`}templateVisual(){return this.imageSrc?ne`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:ne`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fi.styles=[Jt,Id],ec([Ke()],fi.prototype,"imageSrc",void 0),ec([Ke()],fi.prototype,"alt",void 0),ec([Ke({type:Boolean})],fi.prototype,"borderRadiusFull",void 0),fi=ec([vt("wui-visual-thumbnail")],fi);const Fu=p`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Yo=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let fl=class extends St{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return ne`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};fl.styles=[Jt,nt,Fu],Yo([Ke()],fl.prototype,"label",void 0),Yo([Ke()],fl.prototype,"description",void 0),Yo([Ke()],fl.prototype,"icon",void 0),fl=Yo([vt("wui-notice-card")],fl);const Ws=p`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgb(42, 42, 42), transparent);
    border-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var uc=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let dc=class extends St{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{const rt=this.shadowRoot?.querySelector(".heightContent");if(rt){this.scrollElement=rt;const At=rt?.scrollHeight;At&&At>100&&(this.enableAccordion=!0,this.scrollHeightElement=At,this.requestUpdate())}},0)}render(){return ne`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const rt=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),rt&&rt.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?ne` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};dc.styles=[Jt,nt,Ws],uc([Ke()],dc.prototype,"textTitle",void 0),uc([Ke()],dc.prototype,"overflowedContent",void 0),dc=uc([vt("wui-list-accordion")],dc);const Bu=p`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Gc=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let Rc=class extends St{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return ne`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?ne`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?ne` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:ne`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Rc.styles=[Jt,nt,Bu],Gc([Ke()],Rc.prototype,"imageSrc",void 0),Gc([Ke()],Rc.prototype,"textTitle",void 0),Gc([Ke()],Rc.prototype,"textValue",void 0),Rc=Gc([vt("wui-list-content")],Rc);const ad=p`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var xc=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let ha=class extends St{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return ne`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?ne`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:ne`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ha.styles=[Jt,nt,ad],xc([Ke()],ha.prototype,"amount",void 0),xc([Ke()],ha.prototype,"networkCurreny",void 0),xc([Ke()],ha.prototype,"networkImageUrl",void 0),xc([Ke()],ha.prototype,"receiverAddress",void 0),ha=xc([vt("wui-list-wallet-transaction")],ha);const zl=p`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var sl=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let ba=class extends St{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Sr.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Sr.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Sr.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Sr.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Sr.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Sr.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Sr.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Sr.getSpacingStyles(this.margin,3)};\n    `,ne`<slot></slot>`}};ba.styles=[Jt,zl],sl([Ke()],ba.prototype,"gridTemplateRows",void 0),sl([Ke()],ba.prototype,"gridTemplateColumns",void 0),sl([Ke()],ba.prototype,"justifyItems",void 0),sl([Ke()],ba.prototype,"alignItems",void 0),sl([Ke()],ba.prototype,"justifyContent",void 0),sl([Ke()],ba.prototype,"alignContent",void 0),sl([Ke()],ba.prototype,"columnGap",void 0),sl([Ke()],ba.prototype,"rowGap",void 0),sl([Ke()],ba.prototype,"gap",void 0),sl([Ke()],ba.prototype,"padding",void 0),sl([Ke()],ba.prototype,"margin",void 0),ba=sl([vt("wui-grid")],ba);const ju=p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var ol=function(Vt,rt,At,rn){var Nn,vn=arguments.length,Wt=vn<3?rt:null===rn?rn=Object.getOwnPropertyDescriptor(rt,At):rn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Wt=Reflect.decorate(Vt,rt,At,rn);else for(var rr=Vt.length-1;rr>=0;rr--)(Nn=Vt[rr])&&(Wt=(vn<3?Nn(Wt):vn>3?Nn(rt,At,Wt):Nn(rt,At))||Wt);return vn>3&&Wt&&Object.defineProperty(rt,At,Wt),Wt};let wc=class extends St{constructor(){super(...arguments),this.text=""}render(){return ne`${this.template()}`}template(){return this.text?ne`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};wc.styles=[Jt,ju],ol([Ke()],wc.prototype,"text",void 0),wc=ol([vt("wui-separator")],wc);var hc=t(90640);const Kc=["receive","deposit","borrow","claim"],gu=["withdraw","repay","burn"],Va={getTransactionGroupTitle:Vt=>Vt===hc.E.getYear()?"This Year":Vt,getTransactionImages(Vt){const[rt,At]=Vt,rn=Boolean(rt)&&Vt?.every(Nn=>Boolean(Nn.nft_info));return 2!==Vt?.length||rn?Vt?.length>1?Vt.map(Nn=>this.getTransactionImage(Nn)):[this.getTransactionImage(rt)]:[this.getTransactionImage(rt),this.getTransactionImage(At)]},getTransactionImage:Vt=>({type:Va.getTransactionTransferTokenType(Vt),url:Va.getTransactionImageURL(Vt)}),getTransactionImageURL(Vt){let rt=null;const At=Boolean(Vt?.nft_info),rn=Boolean(Vt?.fungible_info);return Vt&&At?rt=Vt?.nft_info?.content?.preview?.url:Vt&&rn&&(rt=Vt?.fungible_info?.icon?.url),rt},getTransactionTransferTokenType:Vt=>Vt?.fungible_info?"FUNGIBLE":Vt?.nft_info?"NFT":null,getTransactionDescriptions(Vt){const rt=Vt.metadata?.operationType,At=Vt.transfers,rn=Vt.transfers?.length>0,vn=Vt.transfers?.length>1,Wt=rn&&At?.every(Es=>Boolean(Es.fungible_info)),[Nn,rr]=At;let Mi=this.getTransferDescription(Nn),Js=this.getTransferDescription(rr);if(!rn)return"send"!==rt&&"receive"!==rt||!Wt?[Vt.metadata.status]:(Mi=Sr.getTruncateString({string:Vt.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),Js=Sr.getTruncateString({string:Vt.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[Mi,Js]);if(vn)return At.map(Es=>this.getTransferDescription(Es));let go="";return Kc.includes(rt)?go="+":gu.includes(rt)&&(go="-"),Mi=go.concat(Mi),[Mi]},getTransferDescription(Vt){let rt="";return Vt&&(Vt?.nft_info?rt=Vt?.nft_info?.name||"-":Vt?.fungible_info&&(rt=this.getFungibleTransferDescription(Vt)||"-")),rt},getFungibleTransferDescription(Vt){return Vt?[this.getQuantityFixedValue(Vt?.quantity.numeric),Vt?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:Vt=>Vt?parseFloat(Vt).toFixed(3):null}},6205:(d,r,t)=>{"use strict";t.d(r,{X:()=>g,x:()=>u});var e=t(94650),n=t(8139),s=t(33597);const l=["chart"];let u=(()=>{class p{constructor(w){this.ngZone=w,this.autoUpdateSeries=!0}ngOnInit(){n.E.schedule(()=>{this.createElement()})}ngOnChanges(w){n.E.schedule(()=>{this.autoUpdateSeries&&0===Object.keys(w).filter(P=>"series"!==P).length?this.updateSeries(this.series,!0):this.createElement()})}ngOnDestroy(){this.chartObj&&this.chartObj.destroy()}createElement(){const w={};this.annotations&&(w.annotations=this.annotations),this.chart&&(w.chart=this.chart),this.colors&&(w.colors=this.colors),this.dataLabels&&(w.dataLabels=this.dataLabels),this.series&&(w.series=this.series),this.stroke&&(w.stroke=this.stroke),this.labels&&(w.labels=this.labels),this.legend&&(w.legend=this.legend),this.fill&&(w.fill=this.fill),this.tooltip&&(w.tooltip=this.tooltip),this.plotOptions&&(w.plotOptions=this.plotOptions),this.responsive&&(w.responsive=this.responsive),this.markers&&(w.markers=this.markers),this.noData&&(w.noData=this.noData),this.xaxis&&(w.xaxis=this.xaxis),this.yaxis&&(w.yaxis=this.yaxis),this.grid&&(w.grid=this.grid),this.states&&(w.states=this.states),this.title&&(w.title=this.title),this.subtitle&&(w.subtitle=this.subtitle),this.theme&&(w.theme=this.theme),this.chartObj&&this.chartObj.destroy(),this.ngZone.runOutsideAngular(()=>{this.chartObj=new s(this.chartElement.nativeElement,w)}),this.render()}render(){return this.ngZone.runOutsideAngular(()=>this.chartObj.render())}updateOptions(w,P,C,_){return this.ngZone.runOutsideAngular(()=>this.chartObj.updateOptions(w,P,C,_))}updateSeries(w,P){return this.ngZone.runOutsideAngular(()=>this.chartObj.updateSeries(w,P))}appendSeries(w,P){this.ngZone.runOutsideAngular(()=>this.chartObj.appendSeries(w,P))}appendData(w){this.ngZone.runOutsideAngular(()=>this.chartObj.appendData(w))}toggleSeries(w){return this.ngZone.runOutsideAngular(()=>this.chartObj.toggleSeries(w))}showSeries(w){this.ngZone.runOutsideAngular(()=>this.chartObj.showSeries(w))}hideSeries(w){this.ngZone.runOutsideAngular(()=>this.chartObj.hideSeries(w))}resetSeries(){this.ngZone.runOutsideAngular(()=>this.chartObj.resetSeries())}zoomX(w,P){this.ngZone.runOutsideAngular(()=>this.chartObj.zoomX(w,P))}toggleDataPointSelection(w,P){this.ngZone.runOutsideAngular(()=>this.chartObj.toggleDataPointSelection(w,P))}destroy(){this.chartObj.destroy()}setLocale(w){this.ngZone.runOutsideAngular(()=>this.chartObj.setLocale(w))}paper(){this.ngZone.runOutsideAngular(()=>this.chartObj.paper())}addXaxisAnnotation(w,P,C){this.ngZone.runOutsideAngular(()=>this.chartObj.addXaxisAnnotation(w,P,C))}addYaxisAnnotation(w,P,C){this.ngZone.runOutsideAngular(()=>this.chartObj.addYaxisAnnotation(w,P,C))}addPointAnnotation(w,P,C){this.ngZone.runOutsideAngular(()=>this.chartObj.addPointAnnotation(w,P,C))}removeAnnotation(w,P){this.ngZone.runOutsideAngular(()=>this.chartObj.removeAnnotation(w,P))}clearAnnotations(w){this.ngZone.runOutsideAngular(()=>this.chartObj.clearAnnotations(w))}dataURI(w){return this.chartObj.dataURI(w)}}return p.\u0275fac=function(w){return new(w||p)(e.Y36(e.R0b))},p.\u0275cmp=e.Xpm({type:p,selectors:[["apx-chart"]],viewQuery:function(w,P){if(1&w&&e.Gf(l,7),2&w){let C;e.iGM(C=e.CRH())&&(P.chartElement=C.first)}},inputs:{chart:"chart",annotations:"annotations",colors:"colors",dataLabels:"dataLabels",series:"series",stroke:"stroke",labels:"labels",legend:"legend",markers:"markers",noData:"noData",fill:"fill",tooltip:"tooltip",plotOptions:"plotOptions",responsive:"responsive",xaxis:"xaxis",yaxis:"yaxis",grid:"grid",states:"states",title:"title",subtitle:"subtitle",theme:"theme",autoUpdateSeries:"autoUpdateSeries"},features:[e.TTD],decls:2,vars:0,consts:[["chart",""]],template:function(w,P){1&w&&e._UZ(0,"div",null,0)},styles:[""],changeDetection:0}),p})();window.ApexCharts=s;let g=(()=>{class p{}return p.\u0275fac=function(w){return new(w||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[[]]}),p})()},27804:(d,r,t)=>{"use strict";t.d(r,{CT:()=>X,e$:()=>ue,eT:()=>ie});var e=t(94650),n=t(36895),s=t(63527),l=t(21086),u=t(90352),f=t(8929),g=t(591),p=t(88514),M=t(34202),w=t(24850),P=t(2994),C=t(5154),_=t(57770),R=t(92198),b=t(87545),k=t(7625);const j=["container"],I=new e.OlP("LottieOptions");let B=(()=>{class te{constructor(E,T){this.ngZone=E,this.options=T,this.player$=function H(te,N){const E=te();return(E instanceof Promise?(0,s.D)(E).pipe((0,w.U)(L=>L.default||L)):(0,l.of)(E)).pipe((0,P.b)(L=>L.useWebWorker(N)),(0,C.d)({bufferSize:1,refCount:!0}))}(this.options.player,this.options.useWebWorker).pipe((0,_.QV)(u.Z))}loadAnimation(E){return this.player$.pipe((0,w.U)(T=>this.createAnimationItem(T,E)))}resolveOptions(E,T){return Object.assign({container:T,renderer:"svg",loop:!0,autoplay:!0},E)}createAnimationItem(E,T){return this.ngZone.runOutsideAngular(()=>E.loadAnimation(T))}}return te.\u0275fac=function(E){return new(E||te)(e.LFG(e.R0b),e.LFG(I))},te.\u0275prov=e.Yz7({token:te,factory:te.\u0275fac}),te})(),Y=(()=>{class te{constructor(E,T,L){this.ngZone=E,this.platformId=T,this.animationLoader=L,this.options=null,this.containerClass=null,this.styles=null,this.animationCreated=this.getAnimationItem(),this.complete=this.awaitAnimationItemAndStartListening("complete"),this.loopComplete=this.awaitAnimationItemAndStartListening("loopComplete"),this.enterFrame=this.awaitAnimationItemAndStartListening("enterFrame"),this.segmentStart=this.awaitAnimationItemAndStartListening("segmentStart"),this.configReady=this.awaitAnimationItemAndStartListening("config_ready"),this.dataReady=this.awaitAnimationItemAndStartListening("data_ready"),this.domLoaded=this.awaitAnimationItemAndStartListening("DOMLoaded"),this.destroy=this.awaitAnimationItemAndStartListening("destroy"),this.error=this.awaitAnimationItemAndStartListening("error"),this.destroy$=new f.xQ,this.loadAnimation$=new f.xQ,this.animationItem$=new g.X(null),this.setupLoadAnimationListener()}ngOnDestroy(){this.destroy$.next(),this.destroyAnimation()}loadAnimation(E,T){this.ngZone.runOutsideAngular(()=>this.loadAnimation$.next([E,T]))}getAnimationItem(){return(0,p.P)(()=>this.animationItem$).pipe((0,R.h)(E=>null!==E))}awaitAnimationItemAndStartListening(E){return this.getAnimationItem().pipe((0,b.w)(T=>new M.y(L=>{this.ngZone.runOutsideAngular(()=>{T.addEventListener(E,F=>{this.ngZone.runOutsideAngular(()=>{L.next(F)})})})})))}setupLoadAnimationListener(){this.loadAnimation$.pipe((0,R.h)(([T])=>(0,n.NF)(this.platformId)&&void 0!==T.options)).pipe((0,b.w)(([T,L])=>(this.destroyAnimation(),this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(T.options.currentValue,L)))),(0,k.R)(this.destroy$)).subscribe(T=>{this.ngZone.run(()=>this.animationItem$.next(T))})}destroyAnimation(){const E=this.animationItem$.getValue();null!==E&&(E.destroy(),this.animationItem$.next(null))}}return te.\u0275fac=function(E){return new(E||te)(e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(B))},te.\u0275dir=e.lG2({type:te,selectors:[["","lottie",""]],inputs:{options:"options",containerClass:"containerClass",styles:"styles"},outputs:{animationCreated:"animationCreated",complete:"complete",loopComplete:"loopComplete",enterFrame:"enterFrame",segmentStart:"segmentStart",configReady:"configReady",dataReady:"dataReady",domLoaded:"domLoaded",destroy:"destroy",error:"error"}}),te})(),ue=(()=>{class te extends Y{constructor(E,T,L){super(E,T,L),this.width=null,this.height=null,this.container=null}ngOnChanges(E){super.loadAnimation(E,this.container.nativeElement)}}return te.\u0275fac=function(E){return new(E||te)(e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(B))},te.\u0275cmp=e.Xpm({type:te,selectors:[["ng-lottie"]],viewQuery:function(E,T){if(1&E&&e.Gf(j,7),2&E){let L;e.iGM(L=e.CRH())&&(T.container=L.first)}},inputs:{width:"width",height:"height"},features:[e.qOj,e.TTD],decls:2,vars:6,consts:[[3,"ngStyle","ngClass"],["container",""]],template:function(E,T){1&E&&e._UZ(0,"div",0,1),2&E&&(e.Udp("width",T.width||"100%")("height",T.height||"100%"),e.Q6J("ngStyle",T.styles)("ngClass",T.containerClass))},directives:[n.PC,n.mk],encapsulation:2,changeDetection:0}),te})(),X=(()=>{class te{static forRoot(E){return{ngModule:te,providers:[B,{provide:I,useValue:E}]}}}return te.\u0275fac=function(E){return new(E||te)},te.\u0275mod=e.oAB({type:te}),te.\u0275inj=e.cJS({imports:[[n.ez]]}),te})(),J=(()=>{class te extends B{constructor(){super(...arguments),this.cache=new Map}ngOnDestroy(){this.cache.clear()}loadAnimation(E){return this.player$.pipe((0,w.U)(T=>{const L=this.createAnimationItem(T,this.transformOptions(E));return this.awaitConfigAndCache(E,L),L}))}awaitConfigAndCache(E,T){if(this.isAnimationConfigWithPath(E)){if(this.cache.has(E.path))return;T.addEventListener("config_ready",()=>{this.cache.set(E.path,JSON.stringify(T.animationData))})}}transformOptions(E){return this.isAnimationConfigWithPath(E)&&this.cache.has(E.path)?{...E,path:void 0,animationData:JSON.parse(this.cache.get(E.path))}:E}isAnimationConfigWithPath(E){return"string"==typeof E.path}}return te.\u0275fac=function(){let N;return function(T){return(N||(N=e.n5z(te)))(T||te)}}(),te.\u0275prov=e.Yz7({token:te,factory:te.\u0275fac}),te})(),ie=(()=>{class te{static forRoot(){return{ngModule:te,providers:[{provide:B,useClass:J}]}}}return te.\u0275fac=function(E){return new(E||te)},te.\u0275mod=e.oAB({type:te}),te.\u0275inj=e.cJS({}),te})()},59799:(d,r,t)=>{"use strict";t.d(r,{sj:()=>X,iH:()=>de,CO:()=>q,Ld:()=>ie}),Symbol();const n=Symbol(),f=Object.getPrototypeOf,g=new WeakMap,k=(N,E=!0)=>{g.set(N,E)},H=N=>"object"==typeof N&&null!==N,B=new WeakMap,Y=new WeakSet,[ue]=((N=Object.is,E=((ye,me)=>new Proxy(ye,me)),T=(ye=>H(ye)&&!Y.has(ye)&&(Array.isArray(ye)||!(Symbol.iterator in ye))&&!(ye instanceof WeakMap)&&!(ye instanceof WeakSet)&&!(ye instanceof Error)&&!(ye instanceof Number)&&!(ye instanceof Date)&&!(ye instanceof String)&&!(ye instanceof RegExp)&&!(ye instanceof ArrayBuffer)),L=(ye=>{switch(ye.status){case"fulfilled":return ye.value;case"rejected":throw ye.reason;default:throw ye}}),F=new WeakMap,Q=((ye,me,Ne=L)=>{const ze=F.get(ye);if((null==ze?void 0:ze[0])===me)return ze[1];const ve=Array.isArray(ye)?[]:Object.create(Object.getPrototypeOf(ye));return k(ve,!0),F.set(ye,[me,ve]),Reflect.ownKeys(ye).forEach(Ce=>{if(Object.getOwnPropertyDescriptor(ve,Ce))return;const pe=Reflect.get(ye,Ce),De={value:pe,enumerable:!0,configurable:!0};if(Y.has(pe))k(pe,!1);else if(pe instanceof Promise)delete De.value,De.get=()=>Ne(pe);else if(B.has(pe)){const[ne,Te]=B.get(pe);De.value=Q(ne,Te(),Ne)}Object.defineProperty(ve,Ce,De)}),Object.preventExtensions(ve)}),fe=new WeakMap,_e=[1,1],xe=(ye=>{if(!H(ye))throw new Error("object required");const me=fe.get(ye);if(me)return me;let Ne=_e[0];const ze=new Set,ve=(Re,Ft=++_e[0])=>{Ne!==Ft&&(Ne=Ft,ze.forEach(sn=>sn(Re,Ft)))};let Ce=_e[1];const De=Re=>(Ft,sn)=>{const Yt=[...Ft];Yt[1]=[Re,...Yt[1]],ve(Yt,sn)},ne=new Map,Le=Re=>{var Ft;const sn=ne.get(Re);sn&&(ne.delete(Re),null==(Ft=sn[1])||Ft.call(sn))},cn=Array.isArray(ye)?[]:Object.create(Object.getPrototypeOf(ye)),Xe=E(cn,{deleteProperty(Re,Ft){const sn=Reflect.get(Re,Ft);Le(Ft);const Yt=Reflect.deleteProperty(Re,Ft);return Yt&&ve(["delete",[Ft],sn]),Yt},set(Re,Ft,sn,Yt){const ht=Reflect.has(Re,Ft),ct=Reflect.get(Re,Ft,Yt);if(ht&&(N(ct,sn)||fe.has(sn)&&N(ct,fe.get(sn))))return!0;Le(Ft),H(sn)&&(sn=(N=>(N=>N&&(g.has(N)?g.get(N):f(N)===Object.prototype||f(N)===Array.prototype))(N)&&N[n]||null)(sn)||sn);let Ve=sn;if(sn instanceof Promise)sn.then(Ct=>{sn.status="fulfilled",sn.value=Ct,ve(["resolve",[Ft],Ct])}).catch(Ct=>{sn.status="rejected",sn.reason=Ct,ve(["reject",[Ft],Ct])});else{!B.has(sn)&&T(sn)&&(Ve=xe(sn));const Ct=!Y.has(Ve)&&B.get(Ve);Ct&&((Re,Ft)=>{if(ne.has(Re))throw new Error("prop listener already exists");if(ze.size){const sn=Ft[3](De(Re));ne.set(Re,[Ft,sn])}else ne.set(Re,[Ft])})(Ft,Ct)}return Reflect.set(Re,Ft,Ve,Yt),ve(["set",[Ft],sn,ct]),!0}});return fe.set(ye,Xe),B.set(Xe,[cn,(Re=++_e[1])=>(Ce!==Re&&!ze.size&&(Ce=Re,ne.forEach(([Ft])=>{const sn=Ft[1](Re);sn>Ne&&(Ne=sn)})),Ne),Q,Re=>(ze.add(Re),1===ze.size&&ne.forEach(([sn,Yt],ht)=>{if(Yt)throw new Error("remove already exists");const ct=sn[3](De(ht));ne.set(ht,[sn,ct])}),()=>{ze.delete(Re),0===ze.size&&ne.forEach(([sn,Yt],ht)=>{Yt&&(Yt(),ne.set(ht,[sn]))})})]),Reflect.ownKeys(ye).forEach(Re=>{const Ft=Object.getOwnPropertyDescriptor(ye,Re);"value"in Ft&&(Xe[Re]=ye[Re],delete Ft.value,delete Ft.writable),Object.defineProperty(cn,Re,Ft)}),Xe}))=>[xe,B,Y,N,E,T,L,F,Q,fe,_e])();function X(N={}){return ue(N)}function ie(N,E,T){const L=B.get(N);let F;!L&&console.warn("Please use proxy object");const Q=[];let _e=!1;const ye=(0,L[3])(me=>{Q.push(me),T?E(Q.splice(0)):F||(F=Promise.resolve().then(()=>{F=void 0,_e&&E(Q.splice(0))}))});return _e=!0,()=>{_e=!1,ye()}}function q(N,E){const T=B.get(N);!T&&console.warn("Please use proxy object");const[L,F,Q]=T;return Q(L,F(),E)}function de(N){return Y.add(N),N}},31254:(d,r,t)=>{"use strict";t.d(r,{VW:()=>n});var e=t(59799);function n(ie,q,de,te){let N=ie[q];return(0,e.Ld)(ie,()=>{const E=ie[q];Object.is(N,E)||de(N=E)},te)}Symbol()},15861:(d,r,t)=>{"use strict";function e(s,l,u,f,g,p,M){try{var w=s[p](M),P=w.value}catch(C){return void u(C)}w.done?l(P):Promise.resolve(P).then(f,g)}function n(s){return function(){var l=this,u=arguments;return new Promise(function(f,g){var p=s.apply(l,u);function M(P){e(p,f,g,M,w,"next",P)}function w(P){e(p,f,g,M,w,"throw",P)}M(void 0)})}}t.d(r,{Z:()=>n})},97582:(d,r,t)=>{"use strict";t.r(r),t.d(r,{__addDisposableResource:()=>T,__assign:()=>s,__asyncDelegator:()=>ue,__asyncGenerator:()=>ee,__asyncValues:()=>X,__await:()=>Y,__awaiter:()=>C,__classPrivateFieldGet:()=>te,__classPrivateFieldIn:()=>E,__classPrivateFieldSet:()=>N,__createBinding:()=>R,__decorate:()=>u,__disposeResources:()=>F,__esDecorate:()=>g,__exportStar:()=>b,__extends:()=>n,__generator:()=>_,__importDefault:()=>de,__importStar:()=>q,__makeTemplateObject:()=>J,__metadata:()=>P,__param:()=>f,__propKey:()=>M,__read:()=>j,__rest:()=>l,__runInitializers:()=>p,__setFunctionName:()=>w,__spread:()=>I,__spreadArray:()=>B,__spreadArrays:()=>H,__values:()=>k,default:()=>Q});var e=function(fe,_e){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(xe,ye){xe.__proto__=ye}||function(xe,ye){for(var me in ye)Object.prototype.hasOwnProperty.call(ye,me)&&(xe[me]=ye[me])})(fe,_e)};function n(fe,_e){if("function"!=typeof _e&&null!==_e)throw new TypeError("Class extends value "+String(_e)+" is not a constructor or null");function xe(){this.constructor=fe}e(fe,_e),fe.prototype=null===_e?Object.create(_e):(xe.prototype=_e.prototype,new xe)}var s=function(){return s=Object.assign||function(_e){for(var xe,ye=1,me=arguments.length;ye<me;ye++)for(var Ne in xe=arguments[ye])Object.prototype.hasOwnProperty.call(xe,Ne)&&(_e[Ne]=xe[Ne]);return _e},s.apply(this,arguments)};function l(fe,_e){var xe={};for(var ye in fe)Object.prototype.hasOwnProperty.call(fe,ye)&&_e.indexOf(ye)<0&&(xe[ye]=fe[ye]);if(null!=fe&&"function"==typeof Object.getOwnPropertySymbols){var me=0;for(ye=Object.getOwnPropertySymbols(fe);me<ye.length;me++)_e.indexOf(ye[me])<0&&Object.prototype.propertyIsEnumerable.call(fe,ye[me])&&(xe[ye[me]]=fe[ye[me]])}return xe}function u(fe,_e,xe,ye){var ze,me=arguments.length,Ne=me<3?_e:null===ye?ye=Object.getOwnPropertyDescriptor(_e,xe):ye;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Ne=Reflect.decorate(fe,_e,xe,ye);else for(var ve=fe.length-1;ve>=0;ve--)(ze=fe[ve])&&(Ne=(me<3?ze(Ne):me>3?ze(_e,xe,Ne):ze(_e,xe))||Ne);return me>3&&Ne&&Object.defineProperty(_e,xe,Ne),Ne}function f(fe,_e){return function(xe,ye){_e(xe,ye,fe)}}function g(fe,_e,xe,ye,me,Ne){function ze(Xe){if(void 0!==Xe&&"function"!=typeof Xe)throw new TypeError("Function expected");return Xe}for(var ne,ve=ye.kind,Ce="getter"===ve?"get":"setter"===ve?"set":"value",pe=!_e&&fe?ye.static?fe:fe.prototype:null,De=_e||(pe?Object.getOwnPropertyDescriptor(pe,ye.name):{}),Te=!1,Le=xe.length-1;Le>=0;Le--){var at={};for(var cn in ye)at[cn]="access"===cn?{}:ye[cn];for(var cn in ye.access)at.access[cn]=ye.access[cn];at.addInitializer=function(Xe){if(Te)throw new TypeError("Cannot add initializers after decoration has completed");Ne.push(ze(Xe||null))};var _t=(0,xe[Le])("accessor"===ve?{get:De.get,set:De.set}:De[Ce],at);if("accessor"===ve){if(void 0===_t)continue;if(null===_t||"object"!=typeof _t)throw new TypeError("Object expected");(ne=ze(_t.get))&&(De.get=ne),(ne=ze(_t.set))&&(De.set=ne),(ne=ze(_t.init))&&me.unshift(ne)}else(ne=ze(_t))&&("field"===ve?me.unshift(ne):De[Ce]=ne)}pe&&Object.defineProperty(pe,ye.name,De),Te=!0}function p(fe,_e,xe){for(var ye=arguments.length>2,me=0;me<_e.length;me++)xe=ye?_e[me].call(fe,xe):_e[me].call(fe);return ye?xe:void 0}function M(fe){return"symbol"==typeof fe?fe:"".concat(fe)}function w(fe,_e,xe){return"symbol"==typeof _e&&(_e=_e.description?"[".concat(_e.description,"]"):""),Object.defineProperty(fe,"name",{configurable:!0,value:xe?"".concat(xe," ",_e):_e})}function P(fe,_e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(fe,_e)}function C(fe,_e,xe,ye){return new(xe||(xe=Promise))(function(Ne,ze){function ve(De){try{pe(ye.next(De))}catch(ne){ze(ne)}}function Ce(De){try{pe(ye.throw(De))}catch(ne){ze(ne)}}function pe(De){De.done?Ne(De.value):function me(Ne){return Ne instanceof xe?Ne:new xe(function(ze){ze(Ne)})}(De.value).then(ve,Ce)}pe((ye=ye.apply(fe,_e||[])).next())})}function _(fe,_e){var ye,me,Ne,ze,xe={label:0,sent:function(){if(1&Ne[0])throw Ne[1];return Ne[1]},trys:[],ops:[]};return ze={next:ve(0),throw:ve(1),return:ve(2)},"function"==typeof Symbol&&(ze[Symbol.iterator]=function(){return this}),ze;function ve(pe){return function(De){return function Ce(pe){if(ye)throw new TypeError("Generator is already executing.");for(;ze&&(ze=0,pe[0]&&(xe=0)),xe;)try{if(ye=1,me&&(Ne=2&pe[0]?me.return:pe[0]?me.throw||((Ne=me.return)&&Ne.call(me),0):me.next)&&!(Ne=Ne.call(me,pe[1])).done)return Ne;switch(me=0,Ne&&(pe=[2&pe[0],Ne.value]),pe[0]){case 0:case 1:Ne=pe;break;case 4:return xe.label++,{value:pe[1],done:!1};case 5:xe.label++,me=pe[1],pe=[0];continue;case 7:pe=xe.ops.pop(),xe.trys.pop();continue;default:if(!(Ne=(Ne=xe.trys).length>0&&Ne[Ne.length-1])&&(6===pe[0]||2===pe[0])){xe=0;continue}if(3===pe[0]&&(!Ne||pe[1]>Ne[0]&&pe[1]<Ne[3])){xe.label=pe[1];break}if(6===pe[0]&&xe.label<Ne[1]){xe.label=Ne[1],Ne=pe;break}if(Ne&&xe.label<Ne[2]){xe.label=Ne[2],xe.ops.push(pe);break}Ne[2]&&xe.ops.pop(),xe.trys.pop();continue}pe=_e.call(fe,xe)}catch(De){pe=[6,De],me=0}finally{ye=Ne=0}if(5&pe[0])throw pe[1];return{value:pe[0]?pe[1]:void 0,done:!0}}([pe,De])}}}var R=Object.create?function(fe,_e,xe,ye){void 0===ye&&(ye=xe);var me=Object.getOwnPropertyDescriptor(_e,xe);(!me||("get"in me?!_e.__esModule:me.writable||me.configurable))&&(me={enumerable:!0,get:function(){return _e[xe]}}),Object.defineProperty(fe,ye,me)}:function(fe,_e,xe,ye){void 0===ye&&(ye=xe),fe[ye]=_e[xe]};function b(fe,_e){for(var xe in fe)"default"!==xe&&!Object.prototype.hasOwnProperty.call(_e,xe)&&R(_e,fe,xe)}function k(fe){var _e="function"==typeof Symbol&&Symbol.iterator,xe=_e&&fe[_e],ye=0;if(xe)return xe.call(fe);if(fe&&"number"==typeof fe.length)return{next:function(){return fe&&ye>=fe.length&&(fe=void 0),{value:fe&&fe[ye++],done:!fe}}};throw new TypeError(_e?"Object is not iterable.":"Symbol.iterator is not defined.")}function j(fe,_e){var xe="function"==typeof Symbol&&fe[Symbol.iterator];if(!xe)return fe;var me,ze,ye=xe.call(fe),Ne=[];try{for(;(void 0===_e||_e-- >0)&&!(me=ye.next()).done;)Ne.push(me.value)}catch(ve){ze={error:ve}}finally{try{me&&!me.done&&(xe=ye.return)&&xe.call(ye)}finally{if(ze)throw ze.error}}return Ne}function I(){for(var fe=[],_e=0;_e<arguments.length;_e++)fe=fe.concat(j(arguments[_e]));return fe}function H(){for(var fe=0,_e=0,xe=arguments.length;_e<xe;_e++)fe+=arguments[_e].length;var ye=Array(fe),me=0;for(_e=0;_e<xe;_e++)for(var Ne=arguments[_e],ze=0,ve=Ne.length;ze<ve;ze++,me++)ye[me]=Ne[ze];return ye}function B(fe,_e,xe){if(xe||2===arguments.length)for(var Ne,ye=0,me=_e.length;ye<me;ye++)(Ne||!(ye in _e))&&(Ne||(Ne=Array.prototype.slice.call(_e,0,ye)),Ne[ye]=_e[ye]);return fe.concat(Ne||Array.prototype.slice.call(_e))}function Y(fe){return this instanceof Y?(this.v=fe,this):new Y(fe)}function ee(fe,_e,xe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var me,ye=xe.apply(fe,_e||[]),Ne=[];return me={},ze("next"),ze("throw"),ze("return"),me[Symbol.asyncIterator]=function(){return this},me;function ze(Te){ye[Te]&&(me[Te]=function(Le){return new Promise(function(at,cn){Ne.push([Te,Le,at,cn])>1||ve(Te,Le)})})}function ve(Te,Le){try{!function Ce(Te){Te.value instanceof Y?Promise.resolve(Te.value.v).then(pe,De):ne(Ne[0][2],Te)}(ye[Te](Le))}catch(at){ne(Ne[0][3],at)}}function pe(Te){ve("next",Te)}function De(Te){ve("throw",Te)}function ne(Te,Le){Te(Le),Ne.shift(),Ne.length&&ve(Ne[0][0],Ne[0][1])}}function ue(fe){var _e,xe;return _e={},ye("next"),ye("throw",function(me){throw me}),ye("return"),_e[Symbol.iterator]=function(){return this},_e;function ye(me,Ne){_e[me]=fe[me]?function(ze){return(xe=!xe)?{value:Y(fe[me](ze)),done:!1}:Ne?Ne(ze):ze}:Ne}}function X(fe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var xe,_e=fe[Symbol.asyncIterator];return _e?_e.call(fe):(fe=k(fe),xe={},ye("next"),ye("throw"),ye("return"),xe[Symbol.asyncIterator]=function(){return this},xe);function ye(Ne){xe[Ne]=fe[Ne]&&function(ze){return new Promise(function(ve,Ce){!function me(Ne,ze,ve,Ce){Promise.resolve(Ce).then(function(pe){Ne({value:pe,done:ve})},ze)}(ve,Ce,(ze=fe[Ne](ze)).done,ze.value)})}}}function J(fe,_e){return Object.defineProperty?Object.defineProperty(fe,"raw",{value:_e}):fe.raw=_e,fe}var ie=Object.create?function(fe,_e){Object.defineProperty(fe,"default",{enumerable:!0,value:_e})}:function(fe,_e){fe.default=_e};function q(fe){if(fe&&fe.__esModule)return fe;var _e={};if(null!=fe)for(var xe in fe)"default"!==xe&&Object.prototype.hasOwnProperty.call(fe,xe)&&R(_e,fe,xe);return ie(_e,fe),_e}function de(fe){return fe&&fe.__esModule?fe:{default:fe}}function te(fe,_e,xe,ye){if("a"===xe&&!ye)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof _e?fe!==_e||!ye:!_e.has(fe))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===xe?ye:"a"===xe?ye.call(fe):ye?ye.value:_e.get(fe)}function N(fe,_e,xe,ye,me){if("m"===ye)throw new TypeError("Private method is not writable");if("a"===ye&&!me)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof _e?fe!==_e||!me:!_e.has(fe))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===ye?me.call(fe,xe):me?me.value=xe:_e.set(fe,xe),xe}function E(fe,_e){if(null===_e||"object"!=typeof _e&&"function"!=typeof _e)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof fe?_e===fe:fe.has(_e)}function T(fe,_e,xe){if(null!=_e){if("object"!=typeof _e&&"function"!=typeof _e)throw new TypeError("Object expected.");var ye;if(xe){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");ye=_e[Symbol.asyncDispose]}if(void 0===ye){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");ye=_e[Symbol.dispose]}if("function"!=typeof ye)throw new TypeError("Object not disposable.");fe.stack.push({value:_e,dispose:ye,async:xe})}else xe&&fe.stack.push({async:!0});return _e}var L="function"==typeof SuppressedError?SuppressedError:function(fe,_e,xe){var ye=new Error(xe);return ye.name="SuppressedError",ye.error=fe,ye.suppressed=_e,ye};function F(fe){function _e(ye){fe.error=fe.hasError?new L(ye,fe.error,"An error was suppressed during disposal."):ye,fe.hasError=!0}return function xe(){for(;fe.stack.length;){var ye=fe.stack.pop();try{var me=ye.dispose&&ye.dispose.call(ye.value);if(ye.async)return Promise.resolve(me).then(xe,function(Ne){return _e(Ne),xe()})}catch(Ne){_e(Ne)}}if(fe.hasError)throw fe.error}()}const Q={__extends:n,__assign:s,__rest:l,__decorate:u,__param:f,__metadata:P,__awaiter:C,__generator:_,__createBinding:R,__exportStar:b,__values:k,__read:j,__spread:I,__spreadArrays:H,__spreadArray:B,__await:Y,__asyncGenerator:ee,__asyncDelegator:ue,__asyncValues:X,__makeTemplateObject:J,__importStar:q,__importDefault:de,__classPrivateFieldGet:te,__classPrivateFieldSet:N,__classPrivateFieldIn:E,__addDisposableResource:T,__disposeResources:F}},46550:d=>{"use strict";d.exports=JSON.parse('{"MultiCall":"0x608060405234801561001057600080fd5b5060405161074f38038061074f83398181016040528101906100329190610362565b6000825190508082511461007b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100729061054d565b60405180910390fd5b60608167ffffffffffffffff8111801561009457600080fd5b506040519080825280602002602001820160405280156100c857816020015b60608152602001906001900390816100b35790505b50905060008090505b828110156101d45760008582815181106100e757fe5b6020026020010151905060608583815181106100ff57fe5b60200260200101519050600060608373ffffffffffffffffffffffffffffffffffffffff16836040516101329190610536565b6000604051808303816000865af19150503d806000811461016f576040519150601f19603f3d011682016040523d82523d6000602084013e610174565b606091505b5091509150816101aa576040518060200160405280600081525086868151811061019a57fe5b60200260200101819052506101c3565b808686815181106101b757fe5b60200260200101819052505b5050505080806001019150506100d1565b50606043826040516020016101ea92919061056d565b60405160208183030381529060405290508060208201f35b60008151905061021181610737565b92915050565b600082601f83011261022857600080fd5b815161023b610236826105ca565b61059d565b9150818183526020840193506020810190508385602084028201111561026057600080fd5b60005b8381101561029057816102768882610202565b845260208401935060208301925050600181019050610263565b5050505092915050565b600082601f8301126102ab57600080fd5b81516102be6102b9826105f2565b61059d565b9150818183526020840193506020810190508360005b8381101561030457815186016102ea888261030e565b8452602084019350602083019250506001810190506102d4565b5050505092915050565b600082601f83011261031f57600080fd5b815161033261032d8261061a565b61059d565b9150808252602083016020830185838301111561034e57600080fd5b6103598382846106f3565b50505092915050565b6000806040838503121561037557600080fd5b600083015167ffffffffffffffff81111561038f57600080fd5b61039b85828601610217565b925050602083015167ffffffffffffffff8111156103b857600080fd5b6103c48582860161029a565b9150509250929050565b60006103da8383610457565b905092915050565b60006103ed82610656565b6103f78185610679565b93508360208202850161040985610646565b8060005b85811015610445578484038952815161042685826103ce565b94506104318361066c565b925060208a0199505060018101905061040d565b50829750879550505050505092915050565b600061046282610661565b61046c818561068a565b935061047c8185602086016106f3565b61048581610726565b840191505092915050565b600061049b82610661565b6104a5818561069b565b93506104b58185602086016106f3565b80840191505092915050565b60006104ce6022836106a6565b91507f4572726f723a204172726179206c656e6774687320646f206e6f74206d61746360008301527f682e0000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b610530816106e9565b82525050565b60006105428284610490565b915081905092915050565b60006020820190508181036000830152610566816104c1565b9050919050565b60006040820190506105826000830185610527565b818103602083015261059481846103e2565b90509392505050565b6000604051905081810181811067ffffffffffffffff821117156105c057600080fd5b8060405250919050565b600067ffffffffffffffff8211156105e157600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561060957600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561063157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006106c2826106c9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156107115780820151818401526020810190506106f6565b83811115610720576000848401525b50505050565b6000601f19601f8301169050919050565b610740816106b7565b811461074b57600080fd5b5056fe","MultiCallStrict":"0x608060405234801561001057600080fd5b506040516107c73803806107c783398181016040528101906100329190610374565b6000825190508082511461007b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610072906105ba565b60405180910390fd5b60608167ffffffffffffffff8111801561009457600080fd5b506040519080825280602002602001820160405280156100c857816020015b60608152602001906001900390816100b35790505b50905060008090505b828110156101e65760008582815181106100e757fe5b6020026020010151905060608583815181106100ff57fe5b60200260200101519050600060608373ffffffffffffffffffffffffffffffffffffffff16836040516101329190610581565b6000604051808303816000865af19150503d806000811461016f576040519150601f19603f3d011682016040523d82523d6000602084013e610174565b606091505b50915091508181906101bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b39190610598565b60405180910390fd5b50808686815181106101ca57fe5b60200260200101819052505050505080806001019150506100d1565b50606043826040516020016101fc9291906105da565b60405160208183030381529060405290508060208201f35b600081519050610223816107af565b92915050565b600082601f83011261023a57600080fd5b815161024d61024882610637565b61060a565b9150818183526020840193506020810190508385602084028201111561027257600080fd5b60005b838110156102a257816102888882610214565b845260208401935060208301925050600181019050610275565b5050505092915050565b600082601f8301126102bd57600080fd5b81516102d06102cb8261065f565b61060a565b9150818183526020840193506020810190508360005b8381101561031657815186016102fc8882610320565b8452602084019350602083019250506001810190506102e6565b5050505092915050565b600082601f83011261033157600080fd5b815161034461033f82610687565b61060a565b9150808252602083016020830185838301111561036057600080fd5b61036b83828461076b565b50505092915050565b6000806040838503121561038757600080fd5b600083015167ffffffffffffffff8111156103a157600080fd5b6103ad85828601610229565b925050602083015167ffffffffffffffff8111156103ca57600080fd5b6103d6858286016102ac565b9150509250929050565b60006103ec8383610469565b905092915050565b60006103ff826106c3565b61040981856106f1565b93508360208202850161041b856106b3565b8060005b85811015610457578484038952815161043885826103e0565b9450610443836106e4565b925060208a0199505060018101905061041f565b50829750879550505050505092915050565b6000610474826106ce565b61047e8185610702565b935061048e81856020860161076b565b6104978161079e565b840191505092915050565b60006104ad826106ce565b6104b78185610713565b93506104c781856020860161076b565b80840191505092915050565b60006104de826106d9565b6104e8818561071e565b93506104f881856020860161076b565b6105018161079e565b840191505092915050565b600061051960228361071e565b91507f4572726f723a204172726179206c656e6774687320646f206e6f74206d61746360008301527f682e0000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b61057b81610761565b82525050565b600061058d82846104a2565b915081905092915050565b600060208201905081810360008301526105b281846104d3565b905092915050565b600060208201905081810360008301526105d38161050c565b9050919050565b60006040820190506105ef6000830185610572565b818103602083015261060181846103f4565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561062d57600080fd5b8060405250919050565b600067ffffffffffffffff82111561064e57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561067657600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561069e57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061073a82610741565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561078957808201518184015260208101905061076e565b83811115610798576000848401525b50505050565b6000601f19601f8301169050919050565b6107b88161072f565b81146107c357600080fd5b5056fe","MultiTokenBalanceAndAllowanceGetter":"0x608060405234801561001057600080fd5b506040516106dd3803806106dd833981810160405281019061003291906103a1565b60008351905060608167ffffffffffffffff8111801561005157600080fd5b5060405190808252806020026020018201604052801561008b57816020015b6100786102d2565b8152602001906001900390816100705790505b50905060008090505b828110156102a45760008682815181106100aa57fe5b602002602001015190506100bc6102d2565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561013c578673ffffffffffffffffffffffffffffffffffffffff16318160006002811061011657fe5b60200201818152505060008160016002811061012e57fe5b60200201818152505061027d565b8173ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b81526004016101759190610543565b60206040518083038186803b15801561018d57600080fd5b505afa1580156101a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c59190610408565b816000600281106101d257fe5b6020020181815250508173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e88886040518363ffffffff1660e01b815260040161021692919061055e565b60206040518083038186803b15801561022e57600080fd5b505afa158015610242573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102669190610408565b8160016002811061027357fe5b6020020181815250505b8084848151811061028a57fe5b602002602001018190525050508080600101915050610094565b50606043826040516020016102ba929190610587565b60405160208183030381529060405290508060208201f35b6040518060400160405280600290602082028036833780820191505090505090565b600081519050610303816106ae565b92915050565b600082601f83011261031a57600080fd5b815161032d610328826105e4565b6105b7565b9150818183526020840193506020810190508385602084028201111561035257600080fd5b60005b83811015610382578161036888826102f4565b845260208401935060208301925050600181019050610355565b5050505092915050565b60008151905061039b816106c5565b92915050565b6000806000606084860312156103b657600080fd5b600084015167ffffffffffffffff8111156103d057600080fd5b6103dc86828701610309565b93505060206103ed868287016102f4565b92505060406103fe868287016102f4565b9150509250925092565b60006020828403121561041a57600080fd5b60006104288482850161038c565b91505092915050565b600061043d83836104ce565b60408301905092915050565b60006104558383610525565b60208301905092915050565b61046a81610672565b82525050565b600061047b82610626565b6104858185610656565b93506104908361060c565b8060005b838110156104c15781516104a88882610431565b97506104b38361063c565b925050600181019050610494565b5085935050505092915050565b6104d781610631565b6104e18184610667565b92506104ec8261061c565b8060005b8381101561051d5781516105048782610449565b965061050f83610649565b9250506001810190506104f0565b505050505050565b61052e816106a4565b82525050565b61053d816106a4565b82525050565b60006020820190506105586000830184610461565b92915050565b60006040820190506105736000830185610461565b6105806020830184610461565b9392505050565b600060408201905061059c6000830185610534565b81810360208301526105ae8184610470565b90509392505050565b6000604051905081810181811067ffffffffffffffff821117156105da57600080fd5b8060405250919050565b600067ffffffffffffffff8211156105fb57600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b6000819050919050565b600081519050919050565b600060029050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600061067d82610684565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6106b781610672565b81146106c257600080fd5b50565b6106ce816106a4565b81146106d957600080fd5b5056fe","MultiTokenBalanceGetter":"0x608060405234801561001057600080fd5b506040516105023803806105028339818101604052810190610032919061029e565b60008251905060608167ffffffffffffffff8111801561005157600080fd5b506040519080825280602002602001820160405280156100805781602001602082028036833780820191505090505b50905060008090505b828110156101c357600085828151811061009f57fe5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610113578473ffffffffffffffffffffffffffffffffffffffff163183838151811061010257fe5b6020026020010181815250506101b5565b8073ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b815260040161014c91906103be565b60206040518083038186803b15801561016457600080fd5b505afa158015610178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019c91906102f2565b8383815181106101a857fe5b6020026020010181815250505b508080600101915050610089565b50606043826040516020016101d99291906103d9565b60405160208183030381529060405290508060208201f35b600081519050610200816104d3565b92915050565b600082601f83011261021757600080fd5b815161022a61022582610436565b610409565b9150818183526020840193506020810190508385602084028201111561024f57600080fd5b60005b8381101561027f578161026588826101f1565b845260208401935060208301925050600181019050610252565b5050505092915050565b600081519050610298816104ea565b92915050565b600080604083850312156102b157600080fd5b600083015167ffffffffffffffff8111156102cb57600080fd5b6102d785828601610206565b92505060206102e8858286016101f1565b9150509250929050565b60006020828403121561030457600080fd5b600061031284828501610289565b91505092915050565b600061032783836103a0565b60208301905092915050565b61033c81610497565b82525050565b600061034d8261046e565b6103578185610486565b93506103628361045e565b8060005b8381101561039357815161037a888261031b565b975061038583610479565b925050600181019050610366565b5085935050505092915050565b6103a9816104c9565b82525050565b6103b8816104c9565b82525050565b60006020820190506103d36000830184610333565b92915050565b60006040820190506103ee60008301856103af565b81810360208301526104008184610342565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561042c57600080fd5b8060405250919050565b600067ffffffffffffffff82111561044d57600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b60006104a2826104a9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6104dc81610497565b81146104e757600080fd5b50565b6104f3816104c9565b81146104fe57600080fd5b5056fe","UniswapReservesGetter":"0x608060405234801561001057600080fd5b5060405161051938038061051983398181016040528101906100329190610281565b60008151905060608167ffffffffffffffff8111801561005157600080fd5b506040519080825280602002602001820160405280156100805781602001602082028036833780820191505090505b50905060008090505b8281101561019157600084828151811061009f57fe5b6020026020010151905060008060008373ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156100f457600080fd5b505afa158015610108573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012c91906102c2565b63ffffffff1692506dffffffffffffffffffffffffffff1692506dffffffffffffffffffffffffffff16925080602083901b609085901b171760001b86868151811061017457fe5b602002602001018181525050505050508080600101915050610089565b50606043826040516020016101a79291906103a5565b60405160208183030381529060405290508060208201f35b6000815190506101ce816104d3565b92915050565b600082601f8301126101e557600080fd5b81516101f86101f382610402565b6103d5565b9150818183526020840193506020810190508385602084028201111561021d57600080fd5b60005b8381101561024d578161023388826101bf565b845260208401935060208301925050600181019050610220565b5050505092915050565b600081519050610266816104ea565b92915050565b60008151905061027b81610501565b92915050565b60006020828403121561029357600080fd5b600082015167ffffffffffffffff8111156102ad57600080fd5b6102b9848285016101d4565b91505092915050565b6000806000606084860312156102d757600080fd5b60006102e586828701610257565b93505060206102f686828701610257565b92505060406103078682870161026c565b9150509250925092565b600061031d8383610387565b60208301905092915050565b60006103348261043a565b61033e8185610452565b93506103498361042a565b8060005b8381101561037a5781516103618882610311565b975061036c83610445565b92505060018101905061034d565b5085935050505092915050565b61039081610475565b82525050565b61039f816104b9565b82525050565b60006040820190506103ba6000830185610396565b81810360208301526103cc8184610329565b90509392505050565b6000604051905081810181811067ffffffffffffffff821117156103f857600080fd5b8060405250919050565b600067ffffffffffffffff82111561041957600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600061046e82610499565b9050919050565b6000819050919050565b60006dffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b6104dc81610463565b81146104e757600080fd5b50565b6104f38161047f565b81146104fe57600080fd5b50565b61050a816104c3565b811461051557600080fd5b5056fe"}')}}]);