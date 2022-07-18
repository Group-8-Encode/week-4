import { ApiProperty } from '@nestjs/swagger';

export class MintNftDto {
  @ApiProperty({
    required: true,
    description: 'Address that will receive the NFT',
    example: '0xc046cB6389571B43D09008828D6bC25e9997904E',
    minLength: 42,
    maxLength: 42,
  })
  address: string;

  @ApiProperty({
    required: true,
    description: 'Amount of tokens to be minted',
    example: 0.0000001,
    minimum: 0.000000000000000001,
  })
  amount: number;

}
