"use strict";

var hre = require("hardhat");

function main() {
  var Smeshariky, smeshariky;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(hre.ethers.getContractFactory("Smeshariky"));

        case 2:
          Smeshariky = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(Smeshariky.deploy());

        case 5:
          smeshariky = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(smeshariky.deployed());

        case 8:
          console.log("My NFT deployed to:", smeshariky.address);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

main().then(function () {
  return process.exit(0);
})["catch"](function (error) {
  console.error(error);
  process.exit(1);
});