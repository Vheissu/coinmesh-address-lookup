import { customElement } from 'aurelia-framework';
import { WalletHttpWrapper } from '../services/wallet-http-wrapper';

@customElement('lookup')
export class Lookup {
    static inject = [WalletHttpWrapper];
}