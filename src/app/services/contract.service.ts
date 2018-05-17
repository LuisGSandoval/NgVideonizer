import Web3 from 'web3';
import { Injectable } from '@angular/core';
declare let require: any;
declare let window: any;

let tokenAbi = require('./tokenABI.json');


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x8d56f252eeff5fd190f93ef7e27cae1be9e05bf075c39089be534e97b6f5edb5";
  constructor() {
    // if (typeof window.web3 !== 'undefined') {
    //   // Use Mist/MetaMask's provider
    //   this._web3 = new Web3(window.web3.currentProvider);
    //   console.log(this._web3.version.network)
    //   if (this._web3.version.network !== '4') {
    //     alert('Please connect to the Rinkeby network');
    //   }
    // } else {
    //   console.warn(
    //     'Please use a dapp browser like mist or MetaMask plugin for chrome'
    //   );
		// }
		

		// this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
		// // this._tokenContract = this._web3.eth.contract(tokenAbi).at("0x8d56f252eeff5fd190f93ef7e27cae1be9e05bf075c39089be534e97b6f5edb5");
  }

  // public async getAccount(): Promise<string> {
  //   if (this._account == null) {
  //     this._account = await new Promise((resolve, reject) => {
  //       this._web3.eth.getAccounts((err, accs) => {
  //         if (err != null) {
  //           alert('There was an error fetching your accounts.');
  //           return;
  //         }
  
  //         if (accs.length === 0) {
  //           alert(
  //             'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
  //           );
  //           return;
  //         }
  //         resolve(accs[0]);
  //       })
  //     }) as string;
  
  //     this._web3.eth.defaultAccount = this._account;
  //   }
  
  //   return Promise.resolve(this._account);
  // }



  // public async setAge(ageSelected): Promise<number> {
  //   let account = await this.getAccount();
  //   console.log(ageSelected)
  //   return new Promise((resolve, reject) => {
  //     let _web3 = this._web3;
  //     this._tokenContract.setAge(ageSelected, function (err, result) {
  //       if(err != null) {
  //         reject(err);
  //       }
  
  //       resolve(_web3.fromWei(result));
  //     });
  //   }) as Promise<number>;
	// }
	
	// setAge(ageSelected){
	// 	this._tokenContract.setAge(ageSelected, (err,res)=>{
	// 		if(err){
	// 			alert('Please try again.')
	// 			return;
	// 		}
	// 		console.log(ageSelected + ', sin errores');
	// 	})
	// }


}
