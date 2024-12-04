async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Calling mint with the account:", deployer.address);

    const alchemyAddress = "0xDC0Bd2DE742062DAC40d2Ed5723b84c73Bf9C814"; // Replace with your deployed USDT contract address
    const alchemyCt = await ethers.getContractFactory("Alchemy");
    const alchemyContract = alchemyCt.attach(alchemyAddress);

    const recipient = "0x9aC50Ab690Fd88F18429D610076e775279F53d7E"; // Replace with the recipient address
    const imgURI = "https://gateway.pinata.cloud/ipfs/QmTXPAUBoL1shmLA6zwqFdtro9t4iz9M6g6UByjhnaGx7w" // Replace with the IPFS URI

    const tx = await alchemyContract.safeMint(recipient, imgURI);
    await tx.wait();

    console.log(`Minted ${imgURI} NFT To ${recipient}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });