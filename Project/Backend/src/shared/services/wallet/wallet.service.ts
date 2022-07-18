import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class WalletService {
  wallet: ethers.Wallet;


  constructor() {
    this.setupWallet();
  }

  setupWallet() {
    const EXPOSED_KEY = "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

    const seed = process.env.ADMIN_WALLET_SEED;
    //if (!seed || seed.length === 0) return;
    //this.wallet = ethers.Wallet.fromMnemonic(seed);
    this.wallet =
    process.env.ADMIN_WALLET_SEED && process.env.ADMIN_WALLET_SEED.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.ADMIN_WALLET_SEED)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  }

  walletAddress() {
    return this.wallet.address;
  }
}
