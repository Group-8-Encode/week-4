// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFTcollection is ERC721, AccessControl, ERC721Burnable {


    uint256 public cost = 0.0000001 ether;

    //mapping for token URIs
    mapping (uint256 => string) private _tokenURIs;

    constructor() ERC721("CryptoLasagna", "LSG") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }


    function safeMint(address to, uint256 tokenId) public payable {
        require(msg.value >= cost);
        _safeMint(to, tokenId);
    }


    //inspired by https://forum.openzeppelin.com/t/function-settokenuri-in-erc721-is-gone-with-pragma-0-8-0/5978/3
    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        //TODO allow only DEFAULT_ADMIN_ROLE to do that
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}