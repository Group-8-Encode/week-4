import { ApiProperty } from '@nestjs/swagger';

export class SetTokenUriDto {
  @ApiProperty({
    required: true,
    description: 'Token Id (need to be already minted)',
    example: 1,
    minimum: 1,
  })
  id: number;

  @ApiProperty({
    required: true,
    description: 'URI of the NFT',
    example: 'https://ipfs.io/ipfs/QmXYypNAq1E8mghVLKZSZsqv7QqTdoJvDV4DL4prMbymjr/1.png',
    minLength: 42,
    maxLength: 42,
  })
  uri: string;


}
