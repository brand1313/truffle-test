pragma solidity ^0.6.11;

import "../node_modules/@openzeppelin/contracts/GSN/Context.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

//SPDX-License-Identifier: UNLICENSED
/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract PROTtoken is Context, ERC20 {
    
    address private owner;
    
    modifier onlyOwner () {
        require(_msgSender() == owner);
        _;
    }
    
    /**
     * @dev Constructor that gives _msgSender() all of existing tokens.
     */
    constructor () public ERC20("PROT", "prot") {
        owner = _msgSender();
        _mint(_msgSender(), 1212000000 * (10**18));
    }
    
    function mint(uint256 _amount) public onlyOwner {
        _mint(_msgSender(), _amount * (10**18));
    } 
    
    function burn(uint256 _amount) public onlyOwner {
        _burn(_msgSender(), _amount * (10**18));
    }
}