// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const _scarDustToken = "0x3fE0fa80e5243Bc34773A633F1164466652884A5";
  const _rewardToken = "0xc778417e063141139fce010982780140aa0cd5ab"; // Rinkeby WETH Testnet Address
  const _tokenDistributor = "0xc48d384aa1D768c80a4d573a7122230e1faae007";

  const FeeSharingSystem = await ethers.getContractFactory("FeeSharingSystem");
  const feeSharingSystem = await FeeSharingSystem.deploy(
    _scarDustToken,
    _rewardToken,
    _tokenDistributor
  );

  await feeSharingSystem.deployed();

  console.log("FeeSharingSystem deployed to:", feeSharingSystem.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
