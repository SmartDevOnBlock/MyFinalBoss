"use strict";

require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */


var ALCHEMY_API_KEY = "wx3PDuj4KQN49JXE5czZ-HXP8zLs2E9K";
var GOERLI_PRIVATE_KEY = "f39113af7ce801ebc0e0aa05caef943413730b09b76bb7d280dc365ce661be83";
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './ethereum/artifacts'
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/".concat(ALCHEMY_API_KEY),
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};