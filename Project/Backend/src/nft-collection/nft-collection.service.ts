import { Injectable } from '@nestjs/common';
import { ProviderService } from 'src/shared/services/provider/provider.service';
import { SignerService } from 'src/shared/services/signer/signer.service';
import { ethers } from 'ethers';
import * as NftCollectionContract from 'src/assets/contracts/NFTcollection.json';


@Injectable()
export class NftCollectionService {
    contractPublicInstance: ethers.Contract;
    contractSignedInstance: ethers.Contract;
  
    constructor(
      private providerService: ProviderService,
      private signerService: SignerService,
    ) {
      this.setupContractInstances();
    }
  
    setupContractInstances() {
      const contractAddress = process.env.NFT_COLLECTION_CONTRACT_ADDRESS;
      if (!contractAddress || contractAddress.length === 0) return;
      this.contractPublicInstance = new ethers.Contract(
        contractAddress,
        NftCollectionContract.abi,
        this.providerService.provider,
      );
      this.contractSignedInstance = new ethers.Contract(
        contractAddress,
        NftCollectionContract.abi,
        this.signerService.signer,
      );
    }
  
  
    async safeMintNft(address: string, amount: number) {
      const tx = await this.contractSignedInstance.safeMint(
        address,
        {value: ethers.utils.parseEther(amount.toFixed(18))},
        //{value: ethers.utils.parseEther("0.01")},
      );
      return tx.wait();
    }
  
    async setTokenUri(id: number, uri: string) {
      const tx = await this.contractSignedInstance.setTokenURI(
        id,
        uri,
      );
      return tx.wait();
    }
  
    checkSignature(address: string, amount: number, signature: string) {
      const signatureObject = {address: address, amount: amount};
      const signatureMessage = JSON.stringify(signatureObject);
      const signerAddress = ethers.utils.verifyMessage(signatureMessage, signature);
      return signerAddress == address;
    }
  }