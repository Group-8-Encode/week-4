import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NftCollectionService } from './nft-collection.service';
import { MintNftDto } from './dtos/mint-nft.dto';
import { SetTokenUriDto } from './dtos/set-token-uri.dto';


@Controller('nft-collection')
@ApiTags('nft-collection')
export class NftCollectionController {
  constructor(private readonly nftCollectionService: NftCollectionService) {}

  /*
  @Get('nft-owned/:address')
  @ApiOperation({
    summary: 'NFT owned',
    description: 'Gets the NFTs owned by the provided address',
  })
  @ApiResponse({
    status: 200,
    description: 'NFT owned',
    type: Number,
  })
  @ApiResponse({
    status: 503,
    description: 'The server is not connected to valid provider',
    type: HttpException,
  })
  async getNFTOwned(@Param('address') address: string){
    try{
      const result = await this.nftCollectionService.
    }
  }
  */

  @Post('mint-NFT')

  @ApiOperation({
    summary: 'Mint NFT',
    description:
      'Requests the server to mint a NFT to a provided address',
  })
  @ApiResponse({
    status: 200,
    description: 'NFT minted',
    type: Number,
  })
  @ApiResponse({
    status: 401,
    description: 'Missing signature',
    type: HttpException,
  })
  @ApiResponse({
    status: 403,
    description: 'Wrong signature',
    type: HttpException,
  })
  @ApiResponse({
    status: 500,
    description: 'Invalid signature',
    type: HttpException,
  })
  @ApiResponse({
    status: 503,
    description: 'Server Error',
    type: HttpException,
  })
  async mintNFT(@Body() mintNftDto: MintNftDto) {
    /*
    const signature = mintNftDto.signature;
    if (!signature || signature.length == 0)
      throw new HttpException('Missing signature', 401);
    let signatureValid = false;
    try {
      signatureValid = this.nftCollectionService.checkSignature(
        mintNftDto.address,
        mintNftDto.amount,
        signature,
      );
    } catch (error) {
      throw new HttpException("Invalid signature: " + error.message, 500);
    }
    if (!signatureValid) throw new HttpException('Signature does not match with the requested address', 403);
    */
    try {
      const result = await this.nftCollectionService.safeMintNft(
        mintNftDto.address,
        mintNftDto.amount,
      );
      return result;
    } catch (error) {
      throw new HttpException(error.message, 503);
    }
  }


  @Post('Set-token-URI')

  @ApiOperation({
    summary: 'Set token uri',
    description:
      'Requests the server to add an URI to the NFT index',
  })
  @ApiResponse({
    status: 200,
    description: 'uri added',
    type: Number,
  })
  @ApiResponse({
    status: 401,
    description: 'Missing signature',
    type: HttpException,
  })
  @ApiResponse({
    status: 403,
    description: 'Wrong signature',
    type: HttpException,
  })
  @ApiResponse({
    status: 500,
    description: 'Invalid signature',
    type: HttpException,
  })
  @ApiResponse({
    status: 503,
    description: 'Server Error',
    type: HttpException,
  })
  async setTokenUri(@Body() setTokenUriDto: SetTokenUriDto) {
    try {
      const result = await this.nftCollectionService.setTokenUri(
        setTokenUriDto.id,
        setTokenUriDto.uri,
      );
      return result;
    } catch (error) {
      throw new HttpException(error.message, 503);
    }
  }
}
