import { Module } from '@nestjs/common';
import { NftCollectionService } from './nft-collection.service';
import { NftCollectionController } from './nft-collection.controller';

@Module({
  controllers: [NftCollectionController],
  providers: [NftCollectionService]
})
export class NftCollectionModule {}
