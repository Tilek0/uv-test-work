import {Injectable} from '@angular/core';
import {Web3Provider} from '@ethersproject/providers';
import {HelpInfo, walletInfo} from 'app/auth/helpers';
import {environment} from 'environments/environment';
import {ForceDeltaClient} from 'localModules/metaforcesdk';
import {MetaPaymentClient} from 'localModules/metapaymentsdk';
import {BehaviorSubject, Subject} from 'rxjs';
import {BigNumber, BigNumberish, ethers} from 'ethers';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { MyWeb3ModalService } from './web3Modal.service';
import {
    CapacityResponse,
    ForceBuybackHistoryResponse,
    ForceSwapBuyHistoryResponse,
    ForceSwapOrderChangesResponse, MachineResponse,
    MfsBuybackOrderRequest, MyWaveResponse,
    NftChip,
    NftChipResponse, Tariff,
    VESTING_TARIFFS,
    VestingInfo, WaveChipResponse, WaveResponse,
    Web3ForceSwapOrder
} from 'localModules/metaforcesdk/types';

declare let window: any;

// import { providers } from 'ethers'
@Injectable({
    providedIn: 'root',
})
export class WalletService {
    public isBaksSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    provider: Web3Provider;
    currentProvider: any;
    private ForceDeltaClient: ForceDeltaClient;
    private MetaPaymentClient: MetaPaymentClient;
    isDisconnect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public _unsubscribeWallet = new Subject();

    constructor(
        private helpInfo: HelpInfo,
        private _router: Router,
        private http: HttpClient,
        private myWeb3ModalService: MyWeb3ModalService
    ) {
        this.callbackFn = this.callbackFn.bind(this);
    }

    isConnect(): boolean {
        return !!this.helpInfo.userInfo.value;
    }

    getUserId() {
        return this.ForceDeltaClient.getUserID();
    }

//   getHistoryPricesMFS(amount?:number) {
//     return this.ForceDeltaClient.getHistoryPricesMFS(amount);
//   }

    disconect() {
        localStorage.setItem('walletConnect', JSON.stringify(false));
        localStorage.setItem('walletconnect', JSON.stringify(''));
        localStorage.setItem('chainId', null);
        localStorage.setItem('provider', null);
        this.helpInfo.walletInfo.next(undefined);
        this.helpInfo.userInfo.next(null);
        this.isDisconnect.next(true);
        this.ForceDeltaClient = undefined;
        this.MetaPaymentClient = undefined;
        this.helpInfo.walletAddress.next(null);
    }

    getMyInfo(wallet: string): any {
        return this.http.post(
            'https://bk.meta-force.space/api/v1/users/methods/getaccaount',
            {account: wallet}
        );
    }

    getMaticPrice() {
        return this.http.get(
            ' https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT'
        );
    }

    getUsersInfoInMarketingBinaryTree(levelStart: number, levelEnd: number) {
        return this.ForceDeltaClient.getUsersInfoInMarketingBinaryTree(
            levelStart,
            levelEnd
        );
    }

    getUsersInfoInMarketingLevelTree(
        pack: number,
        levelStart: number,
        levelEnd: number
    ) {
        return this.ForceDeltaClient.getUsersInfoInMarketingLevelTree(
            pack,
            levelStart,
            levelEnd
        );
    }

    getDirectReferalUserInfo(userId: number) {
        return this.ForceDeltaClient.getDirectReferalUserInfo(userId);
    }
    

     checkSignature(): Promise<boolean>{
        return  this.ForceDeltaClient.checkSignature()
    }

  

    getBalancesOnPayment(userId: number) {
        return this.ForceDeltaClient.getBalancesOnPayment(userId);
    }

    getUserActivityFactor() {
        return this.ForceDeltaClient.getUserActivityFactor();
    }

    getAvatar(userId: number) {
        return this.ForceDeltaClient.getAvatar(userId);
    }

    getLostCoint() {
        return this.ForceDeltaClient.getLostStableCoin('1 millennium');
    }

    getBalance() {
        return this.ForceDeltaClient.getBalancesOnWallet();
    }

    getBuyMFS(count): Promise<any> {
        throw new Error('getBuyMFS: Method has deprecated');
        // return this.ForceDeltaClient.buyMFS(count);
    }

    getLevelPack() {
        return this.ForceDeltaClient.getPacks();
    }

    getRevenueDAI(timeInterval: string = '1 millennium', amountDiv: number = 12) {
        return this.ForceDeltaClient.getRevenueStable(timeInterval, amountDiv);
    }

    getRevenueMFS(timeInterval: string = '1 millennium', amountDiv: number = 12) {
        return this.ForceDeltaClient.getRevenueMFS(timeInterval, amountDiv);
    }

    getRevenueDAIWithUserID(
        timeInterval: string = '1 millennium',
        amountDiv: number = 1,
        userId: number
    ) {
        return this.ForceDeltaClient.getRevenueStable(
            timeInterval,
            amountDiv,
            userId
        );
    }

    getFlagRenewedForVestingMFS (level:number) {
        return this.ForceDeltaClient.getFlagRenewedForVestingMFS(level);
    }

    renewPackForVestingMFS (level:number){
        return this.ForceDeltaClient.renewPackForVestingMFS(level) ;
    }

    getRevenueMFSWithUserID(
        timeInterval: string = '1 millennium',
        amountDiv: number = 1,
        userId: number
    ) {
        return this.ForceDeltaClient.getRevenueMFS(timeInterval, amountDiv, userId);
    }

    activationPack(level: number, amount: number, forMFS: boolean) {
        console.log('activationPack', level, amount, forMFS)
        return this.ForceDeltaClient.activationPack(
            level,
            amount,
            forMFS
        );
    }

    getTotalPossibilityForByingMFS(): Promise<any> {
        throw new Error('getTotalPossibilityForByingMFS: Method has deprecated');
        // return this.ForceDeltaClient.getTotalPossibilityForByingMFS();
    }

    getRequestIds() {
        return this.ForceDeltaClient.getRequestIds();
    }

    getRequestInfo(id: number) {
        return this.ForceDeltaClient.getRequest(id);
    }

    createRequestMfs(countDAI: string) {
        return this.ForceDeltaClient.createRequestMfs(countDAI);
    }

    deleteRequestMfs(requestId: number) {
        return this.ForceDeltaClient.deleteRequestMfs(requestId);
    }

    renewPackForMFS(level: number, amount: number, forMFS: boolean) {
        return this.ForceDeltaClient.renewPackForMFS(level, amount, forMFS);
    }
    renewPackForSetHMFS(level: number, amount: number, amountsHMFS: string[]) {
        return this.ForceDeltaClient.renewPackForSetHMFS(
            level,
            amount,
            amountsHMFS
        );
    }

    
    getTree(sizePage: number, numberPage: number, userId: number = -1) {
        if (userId > -1) {
            return this.ForceDeltaClient.getDirectReferalPage(
                sizePage,
                numberPage,
                userId
            );
        } else {
            return this.ForceDeltaClient.getDirectReferalPage(sizePage, numberPage);
        }
    }


    getRecentActivity(sizePage: number, numberPage: number) {
        return this.ForceDeltaClient.getRecentActivity(sizePage, numberPage);
    }

    getUserInfo() {
        this.ForceDeltaClient.getUserInfo().then(x => {
            this.helpInfo.userInfo.next(x);
        });
    }

    getUserInfoWithThen() {
        return this.ForceDeltaClient.getUserInfo();
    }

    getUserInfoOther(userId) {
        return this.ForceDeltaClient.getUserInfo(userId);
    }

    getStats() {
        return this.ForceDeltaClient.getStats();
    }

    getCountHolders() {
        return this.ForceDeltaClient.getCountHolders();
    }


    convertHMFSToMFS(level = 0,amount:string){
        return this.ForceDeltaClient.convertHMFSToMFS(level,amount);
    }

    hold(level = 0,amount:string){
        return this.ForceDeltaClient.hold(level,amount);
    }

    unHold(depositId: number){
        return this.ForceDeltaClient.unhold(depositId)
    }

    withdrawHMFS(depositId: number,amount: string){
        return this.ForceDeltaClient.withdrawHMFS(depositId,amount)
    }

    getDepositIds(idUser?: number){
        return this.ForceDeltaClient.getDepositIds(idUser)
    }
    getDeposit(id: number){
        return this.ForceDeltaClient.getDeposit(id)
    }

    getOutHMFSLevelFromDeposit(id: number){
        return this.ForceDeltaClient.getOutHMFSLevelFromDeposit(id)
    }

    setTypeReward(type: number): Promise<any> {
        throw new Error('setTypeReward: Method has deprecated');
        // return this.ForceDeltaClient.setTypeReward(type);
    }

    getPossibilityForBuyingMFSPage(): Promise<any> {
        throw new Error('getPossibilityForBuyingMFSPage: Method has deprecated');
        // return this.ForceDeltaClient.getPossibilityForBuyingMFSPage(10, 0);
    }

    getAddressesTokens() {
        this.ForceDeltaClient.getAddressesTokens().then(x => {
            this.helpInfo.tokenAddress.next(x);
        });
    }

    calcUSDInMFS(amount) {
        return this.ForceDeltaClient.calcUSDInMFS(amount);
    }

    calcMFSInUSD(amount) {
        return this.ForceDeltaClient.calcMFSInUSD(amount);
    }

    getRequestedMFS(amountUSD) {
        return this.ForceDeltaClient.getRequestedMFS(amountUSD);
    }

    checkGasEnoughForActivation(
        level: number,
        ammount: number,
        forMFS: boolean
    ) {
        return this.ForceDeltaClient.checkGasEnoughForActivation(
            level,
            ammount,
            forMFS
        );
    }

    checkGasEnoughForRenew(
        level: number,
        amount: number,
        amountMFSForBuying: string
    ): Promise<any> {
        throw new Error("checkGasEnoughForRenew: Method has deprecated");
        // return this.ForceDeltaClient.checkGasEnoughForRenew(
        //     level,
        //     amount,
        //     amountMFSForBuying
        // );
    }

    async getMatic(wallet: string) {
        return +ethers.utils.formatUnits(await this.provider.getBalance(wallet));
    }

    getUnitedVerseContractsAddresses() {
        this.ForceDeltaClient.getUnitedVerseContractsAddresses().then(x => {
            let newArray = [];
            x.forEach(element => {
                newArray.push(element.toLowerCase());
            });
            this.helpInfo.unitedVerseContractsAddresses.next(newArray);
        });
    }

    addToPayment(address: string, amount: number) {
        return this.MetaPaymentClient.add(address, amount + '');
    }

    getBalanceOtherToken(token: string) {
        return this.MetaPaymentClient.getBalance(token);
    }

    claimAll(token) {
        return this.MetaPaymentClient.claimAll(token);
    }

    claim(token: string, amount: number) {
        return this.MetaPaymentClient.claim(token, amount + '');
    }

    getReservedAddress() {
        return this.MetaPaymentClient.getReservedAddress();
    }

    checkEnoughCoins(token: string, userId: number, requredAmount: string) {
        return this.MetaPaymentClient.checkEnoughCoins(
            token,
            userId,
            requredAmount
        );
    }

    getDirectPaymentStatus() {
        return this.MetaPaymentClient.getDirectPaymentStatus();
    }

    setDirectPaymentStatus(status: boolean) {
        return this.MetaPaymentClient.setDirectPaymentStatus(status);
    }

    callbackFn(accept: boolean) {
        if (accept && this.helpInfo.expectainModalStep.value === 2) {
            this.helpInfo.expectainModalStep.next(
                this.helpInfo.expectainModalStep.value + 1
            );
        }
        if (!accept) {
            this.helpInfo.expectainModalStep.next(1);
            this.helpInfo.expectainModalIsOpen.next(false);
        }
    }

    async getAccountInfo(provider: Web3Provider) {
        this.provider = provider;
        console.log('this.provider', this.provider.getSigner());
        const {chainId} = await this.provider.getNetwork();
        // console.log('network', chainId);
        this.ForceDeltaClient = new ForceDeltaClient(
          
            this.provider.getSigner(),
            this.callbackFn
        );

        this.MetaPaymentClient = new MetaPaymentClient( chainId,this.provider.getSigner());
        this.getMaticPrice().subscribe((x: any) => {
            this.helpInfo.maticPrice.next(x.price);
        });
        
        try {
            const userId = await this.getUserId();
            this.helpInfo.userId.next(userId);
        } catch (error) {
            
            if (error.errorName === 'MetaCoreNotRegistered') {
                localStorage.setItem('walletConnect', JSON.stringify(false));
                
                this.isDisconnect.next(true);
                window.location.href = environment.metaCoreNotRegistered;
            }
        }
        // this.getUserId().then(
        //   id => {
        //     this.helpInfo.userId.next(id);
        //   },
        //   error => {
        //     if (error.errorName === 'MetaCoreNotRegistered') {
        //       localStorage.setItem('walletConnect', JSON.stringify(false));
        //
        //       this.isDisconnect.next(true);
        //       window.location.href = environment.metaCoreNotRegistered;
        //     }
        //   }
        // );
        let nameWallet = this.provider.connection.url.toUpperCase();

        this.provider.listAccounts().then(x => {
            if (x.length > 0) {
                this.helpInfo.walletAddress.next(x[0]);
            } else {
                this.isDisconnect.next(true);
                this.helpInfo.walletAddress.next(null);
                this.helpInfo.userInfo.next(null);
                this.helpInfo.walletInfo.next(undefined);
            }
        });
        let walletInfo: walletInfo = {} as walletInfo;
        walletInfo.signer = this.provider.getSigner();

        walletInfo.isConnect = true;
        this.isDisconnect.next(false);
        this.provider.getGasPrice().then(x => {
            let costMatic = x.toNumber();
        });
        this.provider.getNetwork().then(x => {
            walletInfo.chainId = x.chainId;
            this.helpInfo.walletInfo.next(walletInfo);
            
            this.getAddressesTokens();
            this.getUnitedVerseContractsAddresses();
            Promise.all([this.getStats(), this.ForceDeltaClient.getUserInfo()]).then(
                x => {
                    
                    this.helpInfo.stats.next(x[0]);
                    this.helpInfo.userInfo.next(x[1]);
                }
            );
        });
       
        // alert(this._router.url);
        if (this._router.url.startsWith('/connect-wallet')) {
            this._router.navigate(['/pages/overview']);
        }
    }

    isConnectStart() {
        if (window.ethereum) {
            let isConnect = localStorage.getItem('walletConnect');
            if (isConnect) {
                if (!JSON.parse(isConnect)) {
                    localStorage.setItem('walletConnect', JSON.stringify(false));
                    localStorage.setItem('account', null);
                    this._router.navigate(['/connect-wallet']);
                    this.isDisconnect.next(true);
                    return;
                }
            }

            window.ethereum.on('chainChanged', (chainId: string) => {
                console.log('chainChanged', chainId);
                const oldChainId = localStorage.getItem('chainId');
                if (localStorage.getItem('chainId') !== chainId) {
                    if (chainId) {
                        localStorage.setItem('chainId', chainId);
                        if (oldChainId) {
                            location.reload();
                        }
                    }
                }
            });
            window.ethereum.on('accountsChanged', accounts => {
                if (accounts.length > 0) {
                    let currentWallet = this.helpInfo.walletAddress.value;
                    this.helpInfo.walletAddress.next(accounts[0]);
                    if (currentWallet !== null && currentWallet.length > 0) {
                        localStorage.setItem('walletConnect', JSON.stringify(false));
                        localStorage.setItem('account', null);
                        // alert('1111');
                        location.reload();
                    }
                    let nameWallet = this.provider.connection.url.toUpperCase();
                } else {
                    this.isDisconnect.next(true);
                    if (this.helpInfo.walletAddress.value !== null) {
                        this.helpInfo.walletAddress.next(null);
                        localStorage.setItem('walletConnect', JSON.stringify(false));
                        localStorage.setItem('account', null);
                        this._router.navigate(['/connect-wallet']);
                    }
                }
            });
        } else {
            localStorage.setItem('walletConnect', JSON.stringify(false));
            this._router.navigate(['/connect-wallet']);
        }
    }

    async getMyNftChips(level?: number, limit?: number): Promise<NftChipResponse> {
        return await this.ForceDeltaClient.getMyNftChips(level, limit);
    }

    async getMyWaveChips(): Promise<WaveChipResponse> {
        return await this.ForceDeltaClient.getMyWaveChips();
    }

    async getMyWaves(status?: string): Promise<MyWaveResponse> {
        return await this.ForceDeltaClient.getMyWaves(status);
    }

    async getMyActiveWavesCount(): Promise<any> {
        return await this.ForceDeltaClient.getMyActiveWavesCount();
    }

    async getMyWave(waveId: string): Promise<MyWaveResponse> {
        return await this.ForceDeltaClient.getMyWave(waveId);
    }

    async getWaveById(waveId: string): Promise<WaveResponse> {
        return await this.ForceDeltaClient.getWaveById(waveId);
    }

    async getMyWaveCapacity(waveId: string): Promise<CapacityResponse> {
        return await this.ForceDeltaClient.getMyWaveCapacity(waveId);
    }

    async getStartedMachines(): Promise<MachineResponse> {
        return await this.ForceDeltaClient.getStartedMachines();
    }

    public async getBuyback(amount: string) {
        return await this.ForceDeltaClient.getBuyback(amount);
    }

    public async createForceSwapOrder(amount: string) {
        return await this.ForceDeltaClient.createForceSwapOrder(amount);
    }

    public async cancelForceSwapOrder() {
        return await this.ForceDeltaClient.cancelForceSwapOrder();
    }

    public async getMyForceSwapOrderId(): Promise<string | null> {
        return await this.ForceDeltaClient.getMyForceSwapOrderId();
    }

    public async getMyForceSwapOrder(): Promise<Web3ForceSwapOrder | null> {
        return await this.ForceDeltaClient.getMyForceSwapOrder();
    }

    async getMyForceSwapOrdersHistory(): Promise<ForceSwapOrderChangesResponse> {
        return await this.ForceDeltaClient.getMyForceSwapOrdersHistory();
    }

    async getForceSwapOrdersCount(): Promise<number> {
        return await this.ForceDeltaClient.getForceSwapOrdersCount();
    }

    getUVv2UpgradeDate(): Date {
        return this.ForceDeltaClient.getUVv2UpgradeDate();
    }

    async buyMfsFromForceSwap(amount: string) {
        return await this.ForceDeltaClient.buyMfsFromForceSwap(amount);
    }

    async getMyForceSwapBuyHistory(): Promise<ForceSwapBuyHistoryResponse> {
        return await this.ForceDeltaClient.getMyForceSwapBuyHistory();
    }

    async getMyForceBuybackHistory(): Promise<ForceBuybackHistoryResponse> {
        return await this.ForceDeltaClient.getMyForceBuybackHistory();
    }

    async getBuyBackPoolBalance() : Promise<BigNumber> {
        return await this.ForceDeltaClient.getBuyBackPoolBalance();
    }

    async fetchVestingInfo() : Promise<VestingInfo> {
        return await this.ForceDeltaClient.fetchVestingInfo();
    }

    // !DEPRECATED
    // async getMyVestingTariff() : Promise<Tariff> {
    //     return await this.ForceDeltaClient.getMyVestingTariff();
    // }

    async isTariffAvailable(tariff: VESTING_TARIFFS) : Promise<boolean> {
        return await this.ForceDeltaClient.isTariffAvailable(tariff);
    }

    async selectVestingTariff(tariff: number) {
        return await this.ForceDeltaClient.selectVestingTariff(tariff);
    }

    async getVestingTariffAmounts() : Promise<BigNumber[]> {
        return await this.ForceDeltaClient.getVestingTariffAmounts();
    }

    // !DEPRECATED
    // async getVestingFundAmount() : Promise<BigNumber> {
    //     return await this.ForceDeltaClient.getVestingFundAmount();
    // }

    // Buyback order request - предложить свою цену
    async getMyMfsBuybackOrderRequests(): Promise<MfsBuybackOrderRequest[]> {
        return await this.ForceDeltaClient.getMyMfsBuybackOrderRequests();
    }

    async createMfsBuybackOrderRequest(amount: BigNumber, price: BigNumber): Promise<MfsBuybackOrderRequest> {
        return await this.ForceDeltaClient.createMfsBuybackOrderRequest(amount, price);
    }

    public async fetchBuyBackMFSPrice() : Promise<BigNumber> {
        return await this.ForceDeltaClient.fetchBuyBackMFSPrice();
    }

    async createExtendChipsBatchRequest(waveId: BigNumber, machineIds: BigNumber[], chipIndexes: BigNumber[], totalExtendAmount: BigNumber): Promise<any> {
        return await this.ForceDeltaClient.createExtendChipsBatchRequest(waveId, machineIds, chipIndexes, totalExtendAmount);
    }

    async createFillChipsBatchRequest(waveId: BigNumber, machineIds: BigNumber[], chipIndexes: BigNumber[], totalExtendAmount: BigNumber): Promise<any> {
        return await this.ForceDeltaClient.createFillChipsBatchRequest(waveId, machineIds, chipIndexes, totalExtendAmount);
    }

    async createGetUserRewardOreRequest(waveId: BigNumber, machineIds: BigNumber[], chipIndexes: BigNumber[]): Promise<any> {
        return await this.ForceDeltaClient.createGetUserRewardOreRequest(waveId, machineIds, chipIndexes);
    }

    async createCalculateProfitForFillRequest(waveId: BigNumber, machineIds: BigNumber[], chipIndexes: BigNumberish[], fillAmount: BigNumber): Promise<any> {
        return await this.ForceDeltaClient.createCalculateProfitForFillRequest(waveId, machineIds, chipIndexes, fillAmount);
    }

    async createClaimRewardOreRequest(waveId: BigNumber, machineIds: BigNumber[], chipIndexes: BigNumber[]): Promise<any> {
        return await this.ForceDeltaClient.createClaimRewardOreRequest(waveId, machineIds, chipIndexes);
    }

    async createStartGameRequest(): Promise<any> {
        return await this.ForceDeltaClient.createStartGameRequest();
    }

    async createGameAvailableRewardRequest(): Promise<any> {
        return await this.ForceDeltaClient.createGameAvailableRewardRequest();
    }

    async getTransactionStatus(hash: string): Promise<any> {
        return await this.ForceDeltaClient.getTransactionStatus(hash);
    }

    async getMyButtonGameInfo(): Promise<any> {
        return await this.ForceDeltaClient.getMyButtonGameInfo();
    }

    async getMyChipsQueue(): Promise<any> {
        return await this.ForceDeltaClient.getMyChipsQueue();
    }

    // HOTFIX
    async getMachineCompletedInWavePrepared(): Promise<any> {
        return await this.ForceDeltaClient.getMachineCompletedInWavePrepared();
    }

    async getPreparedMachineInfo(): Promise<any> {
        return await this.ForceDeltaClient.getPreparedMachineInfo();
    }

    async getMyPreparedMachineInfo(): Promise<any> {
        return await this.ForceDeltaClient.getMyPreparedMachineInfo();
    }
}
