import { ethers } from 'hardhat'

const main = async () => {
    try {
        const [ deployer ] = await ethers.getSigners()
        const ERC20 = await ethers.getContractFactory('MyToken')
        const deployed = await ERC20.deploy(deployer.address)

        console.log('Contract deployed to:', deployed.target)

        await deployed.mint(deployer.address, ethers.parseEther('100000'))
    } catch (error: Error | any) {
        throw new Error(error.message)
    }
}

main().then(() => {
    main()
})