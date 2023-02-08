"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _alchemySdk = require("alchemy-sdk");

var config = {
  apiKey: "wx3PDuj4KQN49JXE5czZ-HXP8zLs2E9K",
  network: _alchemySdk.Network.ETH_GOERLI
};
var alchemy = new _alchemySdk.Alchemy(config);
var _default = alchemy;
exports["default"] = _default;