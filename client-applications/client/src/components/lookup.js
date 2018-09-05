import { customElement } from 'aurelia-framework';
import { WalletHttpWrapper } from '../services/wallet-http-wrapper';

@customElement('lookup')
export class Lookup {
    static inject = [WalletHttpWrapper];
    wallet;

    address = '';
    result;

    constructor(wallet) {
        this.wallet = wallet;
    }

    async doLookup() {
        this.result = await this.wallet.post('getreceivedbyaddress', {
            address: this.address
        });

        this.address = '';
    }
}