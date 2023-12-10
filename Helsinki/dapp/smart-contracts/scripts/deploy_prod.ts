import { ethers } from 'hardhat'

async function main() {
  // Deploy all contracts
  const masterContract = await ethers.deployContract('Helsinki')
  await masterContract.waitForDeployment()

  const factoryContract = await ethers.deployContract('HelsinkiFactory')
  await factoryContract.waitForDeployment()

  await factoryContract.setMaster(await masterContract.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
