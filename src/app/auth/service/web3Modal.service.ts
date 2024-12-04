import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { EthersStoreUtilState } from '@web3modal/scaffold-utils/ethers';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyWeb3ModalService {
  modal: BehaviorSubject<any> = new BehaviorSubject<any>('');
  // 1. Get projectId
  projectId = environment.projectId;

  // 2. Set chains
  mainnet = {
    chainId: 137,
    name: 'Polygon Mainnet',
    currency: 'MATIC',
    explorerUrl: 'https://mumbai.polygonscan.com',
    rpcUrl: 'https://polygon-bor-rpc.publicnode.com',
  };

  mumbai = {
    chainId: 80002,
    name: 'Amoy',
    currency: 'MATIC',
    explorerUrl: 'https://www.oklink.com/amoy',
    rpcUrl: 'https://rpc-amoy.polygon.technology    ',
  };

  // 3. Create modal
  metadata = {
    name: 'Metaforce',
    description: 'Metaverse where virtuality meets reality',
    url: window.location.host,
    icons: [`${window.location.origin}/favicon.ico`],
  };

  constructor() {}

  openModal(opts) {
    this.modal.value.open(opts);
  }
  closeModal() {
    this.modal.value.close();
  }
  subscribeProvider(callBack: (newState: EthersStoreUtilState) => void) {
    this.modal.value.subscribeProvider(callBack);
  }

  isConnected() {
    return this.modal.value.getIsConnected();
  }

  getProvider() {
    return this.modal.value.getWalletProvider();
  }

  getWalletProviderType() {
    return this.modal.value.getWalletProviderType();
  }

  disconect() {
    this.modal.value.disconnect();
  }
}
