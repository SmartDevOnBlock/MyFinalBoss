const hre = require("hardhat");

async function main() {

  const Smeshariky = await hre.ethers.getContractFactory("Smeshariky");
  const smeshariky = await Smeshariky.deploy();

  await smeshariky.deployed();

  console.log("My NFT deployed to:", smeshariky.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  
