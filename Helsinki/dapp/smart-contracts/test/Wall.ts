import { ethers } from 'hardhat'

import { assert } from 'chai'

describe('Helsinki', function () {
  async function deployContract() {
    const [alice] = await ethers.getSigners()
    const contractFactory = await ethers.getContractFactory('Helsinki')
    const contract = await (await contractFactory.deploy()).waitForDeployment()
    await contract.init(
      ethers.parseEther('1.0'),
      ethers.parseEther('0.1'),
      10,
      alice.address,
      2
    )
    return contract
  }

  it('data', async function () {
    const contract = await deployContract()
    const factoryContract = await ethers.getContractFactory('HelsinkiFactory')
    const factory = await (await factoryContract.deploy()).waitForDeployment()
    const [alice] = await ethers.getSigners()
    const tx = await factory.createProposal(
      BigInt(10 ** 18),
      BigInt(10 ** 18),
      1,
      alice.address,
      1
    )
    await tx.wait()
    const res = await factory.proposals(alice.address)
    console.log(res)
  })

  it.skip('should init proposal with correct data', async function () {
    const contract = await deployContract()

    const proposal = await contract.proposalStorage()
    const [alice] = await ethers.getSigners()

    assert(proposal.walletAddress === alice.address)
    assert(proposal.state.toString() == '0')
  })

  it.skip('should change state when security is deposited', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    const proposal = await contract.proposalStorage()

    assert(proposal.state.toString() == '1')
  })

  it.skip('should let user buy long tokens', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyLong({ value: ethers.parseEther('0.1') })

    const balance = await contract.balanceOf(alice.address, 0)

    assert(balance > 0)
  })

  it.skip('should let user buy short tokens', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    const balance = await contract.balanceOf(alice.address, 1)

    assert(balance > 0)
  })

  it.skip('should calculate interest', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    await contract.buyLong({ value: ethers.parseEther('1.0') })

    const proposal = await contract.proposalStorage()

    assert(proposal.state.toString() == '2')
    assert(proposal.interest.toString() == '10')
  })

  it.skip('should let user withdraw money', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    await contract.buyLong({ value: ethers.parseEther('1.0') })

    const balance1 = await alice.provider.getBalance(alice.address)

    await contract.withdraw()

    const balance2 = await alice.provider.getBalance(alice.address)

    assert(balance2 > balance1)
  })

  it.skip('should let user pay emi', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    await contract.buyLong({ value: ethers.parseEther('1.0') })

    await contract.withdraw()

    let proposal = await contract.proposalStorage()

    await contract.payEmi({ value: proposal.emiAmount })

    proposal = await contract.proposalStorage()

    assert(proposal.emisLeft.toString() == '9')
  })

  it.skip('should let user foreclose payment', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    await contract.buyLong({ value: ethers.parseEther('1.0') })

    await contract.withdraw()

    let proposal = await contract.proposalStorage()

    await contract.foreclose({ value: proposal.emisLeft * proposal.emiAmount })

    proposal = await contract.proposalStorage()

    assert(proposal.emisLeft.toString() == '0')
  })

  it.skip('should let longer win', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    await contract.buyLong({ value: ethers.parseEther('1.0') })

    await contract.withdraw()

    let proposal = await contract.proposalStorage()

    await contract.foreclose({
      value: proposal.emisLeft * proposal.emiAmount,
    })

    proposal = await contract.proposalStorage()
    const winner = await contract.winner()

    assert(winner.toString() == '0')
  })

  it.skip('should let longer sell token', async function () {
    const contract = await deployContract()

    const [alice] = await ethers.getSigners()
    const tx = await alice.sendTransaction({
      to: await contract.getAddress(),
      value: ethers.parseEther('0.1'),
    })

    await tx.wait()

    await contract.buyShort({ value: ethers.parseEther('0.1') })

    await contract.buyLong({ value: ethers.parseEther('1.0') })

    await contract.withdraw()
    let proposal = await contract.proposalStorage()

    await contract.foreclose({
      value: proposal.emisLeft * proposal.emiAmount,
    })

    proposal = await contract.proposalStorage()

    await contract.sellLong()
  })
})
