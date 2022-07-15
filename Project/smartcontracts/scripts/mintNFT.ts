import { Contract, ethers } from "ethers";
import "dotenv/config";
import * as nftCollectionJson from "../artifacts/contracts/NFTcollection.sol/NFTcollection.json";
// eslint-disable-next-line node/no-missing-import
import { NFTcollection } from "../typechain-types";

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);

  const provider = ethers.providers.getDefaultProvider("rinkeby");
  const signer = wallet.connect(provider);
  console.log(`Signer address is : ${signer.address}`);

  const nftCollectionAddress = "0x07B243308bd5039aBF9A49C713CC8F631bC25440"; // process.argv[2];
  const mintToAddress = process.argv[2];
  const nftIndex = process.argv[3];
  console.log(`Contract address is : ${nftCollectionAddress}`);

  const nftCollectionContract: NFTcollection = new Contract(
    nftCollectionAddress,
    nftCollectionJson.abi,
    signer
  ) as NFTcollection;

  const tx = await nftCollectionContract.safeMint(mintToAddress, nftIndex,{value: ethers.utils.parseEther("0.0000001")});
  console.log("Awaiting confirmations");
  await tx.wait();
  console.log(`Mint operation completed. Hash: ${tx.hash}`);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
