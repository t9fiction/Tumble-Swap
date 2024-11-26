// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.27;
pragma abicoder v2;

import {TransferHelper} from "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import {ISwapRouter} from "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SingleSwapToken {
    ISwapRouter public constant SWAPROUTER = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    error SingleSwapToken__InvalidFeeValue(uint24);

    function swapExactInputSingle(
        uint256 _amountIn,
        uint256 _amountOutMinimum,
        uint24 _transactionDeadlineInMinutes,
        uint24 _fees
    ) external returns (uint256 _amountOut) {
        // Validate _fees value
        if (_fees != 10 && _fees != 500 && _fees != 3000) {
            revert SingleSwapToken__InvalidFeeValue(_fees);
        }

        uint256 duration = _transactionDeadlineInMinutes * 60;

        // Transfer the specified amount of WETH to this contract.
        TransferHelper.safeTransferFrom(WETH, msg.sender, address(this), _amountIn);

        // Approve the router to spend WETH
        TransferHelper.safeApprove(WETH, address(SWAPROUTER), _amountIn);

        /**
         *
         * @param sqrtPriceLimitX96
         *  We set this to zero - which makes this parameter inactive.
         *  In production, this value can be used to set the limit for the price the swap will
         *  push the pool to, which can help protect against price impact or for setting up logic
         *  in a variety of price-relevant mechanisms.
         */
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: WETH,
            tokenOut: DAI,
            fee: _fees,
            recipient: msg.sender,
            deadline: block.timestamp + duration,
            amountIn: _amountIn,
            amountOutMinimum: _amountOutMinimum,
            sqrtPriceLimitX96: 0
        });

        // The call to `exactInputSingle` executes the swap.
        _amountOut = SWAPROUTER.exactInputSingle(params);
    }

    function swapExactOutputSingle(
        uint256 _amountOut,
        uint256 _amountInMaximum,
        uint24 _fees,
        uint24 _transactionDeadlineInMinutes
    ) external returns (uint256 _amountIn) {
        // Validate _fees value
        if (_fees != 10 && _fees != 500 && _fees != 3000) {
            revert SingleSwapToken__InvalidFeeValue(_fees);
        }

        uint256 duration = _transactionDeadlineInMinutes * 60;

        TransferHelper.safeTransferFrom(WETH, msg.sender, address(this), _amountInMaximum);

        TransferHelper.safeApprove(DAI, address(SWAPROUTER), _amountInMaximum);

        ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter.ExactOutputSingleParams({
            tokenIn: WETH,
            tokenOut: DAI,
            fee: _fees,
            recipient: msg.sender,
            deadline: block.timestamp + duration,
            amountOut: _amountOut,
            amountInMaximum: _amountInMaximum,
            sqrtPriceLimitX96: 0
        });

        _amountIn = SWAPROUTER.exactOutputSingle(params);

        if(_amountIn < _amountInMaximum){
            TransferHelper.safeApprove(WETH,address(SWAPROUTER),0);
            TransferHelper.safeTransfer(WETH, msg.sender, _amountInMaximum - _amountIn);
        }
    }
}
