const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiled_code = require('./compile.js');
_interface = compiled_code.abi;
_bytecode = compiled_code.evm.bytecode.object;

const provider = new HDWalletProvider(
    'tent flight tenant scatter arch ivory library stamp second oval divorce absorb',
    'https://ropsten.infura.io/v3/8027d1a798934400aeee4fcd1d9ddd49'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(accounts[1]);

    const result = await new web3.eth.Contract(_interface).
    deploy({ data: _bytecode}).
    send({ gas: '1000000', from: accounts[0]});
    
    console.log(_interface);
    console.log("Contract deployed to: ", result.options.address);
};
deploy();