import React, { Component } from 'react';
import './style.css';

import Web3 from 'web3';

class Block extends Component { 
  render() {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://23.251.130.84:8545'));
    var blockNumber = web3.eth.blockNumber;
    var gasPrice = web3.eth.gasPrice.toString(10);
    return (
      <div>
        <div className="col-xs-12">
          <h1 className="text-center">Bekijk onze meest recente vacatures op Jobcatcher</h1>
          <p className="lead text-center">In 2018 hebben we al {web3.eth.getBlockTransactionCount(blockNumber)} aanvragen voor onze klanten in behandeling mogen nemen</p>
        </div>

        <div className="col-md-12">
            <async-loader color="white" when="request/getlatestrequests"></async-loader>
        </div>
        <div className="Block">
          <h2>Block Info: {blockNumber}</h2>
          <h3> Mining Info: {web3.eth.mining}  Our hashrate is: {web3.eth.hashrate} and the gasprice is : {gasPrice}</h3>
        </div>
        
      </div>
    );
  }
}
export default Block;