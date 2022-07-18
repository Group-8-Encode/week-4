import { ApiProperty } from '@nestjs/swagger';

class AttributesDto {
  trait_type: string;
  value: string;
}

export class MetadataDto {
  @ApiProperty({
    required: true,
    description: 'NFT Name',
    examples: ['CryptoLasagne', 'CryptoPizza', 'Group8NFTLasagne'],
  })
  name: string;
  @ApiProperty({
    required: false,
    description: 'Description for this NFT',
  })
  description?: string;
  @ApiProperty({
    required: false,
    description: "CID of the IPFS's hosted NFT image",
    example: 'QmVPruSe7kZXpvjkzN5NZzfUj9BahEumv6R2w4rwQP6ZNb',
  })
  cid?: string;
  @ApiProperty({
    required: false,
    description: 'Given attribute size for this NFT',
    example: [
      { trait_type: 'flavour of Lasagne', value: 'Chicken' },
      { trait_type: 'size of lasagna', value: 'small' },
    ],
  })
  attributes?: AttributesDto[];
}