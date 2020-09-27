const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf-8');

var input = {
    language: 'Solidity',
    sources: {
        'practice.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ 'abi', 'evm.bytecode' ]
            }
        }
    }
  }; 
  
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  
  module.exports = output.contracts['practice.sol']['Inbox'];