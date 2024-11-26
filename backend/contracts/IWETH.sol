// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "./IERC20.sol";

interface IWETH is IERC20 {
    event Deposit(address indexed dst, uint256 wad);
    event Withdrawal(address indexed src, uint256 wad);

    // Deposit ETH into WETH
    function deposit() external payable;

    // Withdraw WETH to ETH
    function withdraw(uint256 amount) external;
}
