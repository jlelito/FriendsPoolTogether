const path = require("path");
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {

  contracts_build_directory: path.join(__dirname, "src/abis"),
  networks: {
    develop: {
      port: 7545
    },

    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },

    ropsten: {
      provider: function(){
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`
          )
      },
      gasPrice: 100000000000,
      network_id: 3
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`
          )
      },
      gasPrice: 100000000000,
      network_id: 4
    },

    
  },
  
  compilers: {
    solc: {
       version: "0.5.12",    
    }
  }
  
  
}
