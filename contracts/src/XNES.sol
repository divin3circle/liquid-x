// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20Burnable, ERC20} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract XNES is ERC20Burnable, Ownable {
    error XNES__AmountMustBeMoreThanZero();
    error XNES__BurnAmountExceedsBalance();
    error XNES__NotZeroAddress();

    constructor() ERC20("XNES", "XNES") Ownable(msg.sender) {}

    function burn(uint256 _amount) public override onlyOwner {
        uint256 balance = balanceOf(msg.sender);
        if (_amount <= 0) {
            revert XNES__AmountMustBeMoreThanZero();
        }
        if (balance < _amount) {
            revert XNES__BurnAmountExceedsBalance();
        }
        super.burn(_amount);
    }

    function mint(
        address _to,
        uint256 _amount
    ) external onlyOwner returns (bool) {
        if (_to == address(0)) {
            revert XNES__NotZeroAddress();
        }

        if (_amount <= 0) {
            revert XNES__AmountMustBeMoreThanZero();
        }

        _mint(_to, _amount);
        return true;
    }
}
