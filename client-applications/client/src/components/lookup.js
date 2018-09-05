import { customElement } from 'aurelia-framework';
import { HttpWrapper } from '../services/http-wrapper';

@customElement('lookup')
export class Lookup {
    static inject = [HttpWrapper];
    wallet;

    address = '';
    result;

    constructor(wallet) {
        this.wallet = wallet;

        this.wallet.post('addresses/listaddresses').then(res => {
            console.log(res);
        }); 
    }

    doLookup() {
        this.wallet.post('addresses/getreceivedbyaddress', {
            address: this.address
        })
        .then(res => {
            this.result = JSON.parse(res.response);
            this.address = '';
        })
        .catch(e => {
            console.error(e);
        })
    }
}