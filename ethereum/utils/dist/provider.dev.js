"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var provider;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  provider = new _ethers.ethers.providers.Web3Provider(window.ethereum);
} else {
  provider = new _ethers.ethers.providers.JsonRpcProvider();
}

var _default = provider;
exports["default"] = _default;