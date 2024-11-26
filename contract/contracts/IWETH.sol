// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IWETH {
    // Deposit event to notify when Ether is deposited and WETH is minted
    event Deposited(address indexed sender, uint256 amount);
    
    // Withdraw event to notify when WETH is burned and Ether is withdrawn
    event Withdrawn(address indexed sender, uint256 amount);

    // Transfer event (standard ERC20)
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    // Approval event (standard ERC20)
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /// @notice Deposit Ether and mint WETH
    function deposit() external payable;

    /// @notice Withdraw WETH and receive Ether
    /// @param amount The amount of WETH to withdraw
    function withdraw(uint256 amount) external;

    /// @notice Transfer tokens to another address
    /// @param to The recipient address
    /// @param amount The amount to transfer
    /// @return success Boolean indicating whether the transfer succeeded
    function transfer(address to, uint256 amount) external returns (bool success);

    /// @notice Approve an address to spend tokens on behalf of the caller
    /// @param spender The address that is allowed to spend tokens
    /// @param amount The amount of tokens to approve
    /// @return success Boolean indicating whether the approval succeeded
    function approve(address spender, uint256 amount) external returns (bool success);

    /// @notice Get the remaining allowance for a spender on behalf of the owner
    /// @param owner The address of the token owner
    /// @param spender The address of the spender
    /// @return remaining The remaining allowance
    function allowance(address owner, address spender) external view returns (uint256 remaining);

    /// @notice Get the balance of a specific address
    /// @param account The address to query
    /// @return balance The balance of the address
    function balanceOf(address account) external view returns (uint256 balance);

    /// @notice Get the total token supply
    /// @return totalSupply The total supply of tokens
    function totalSupply() external view returns (uint256 totalSupply);

    /// @notice Transfer tokens from one address to another
    /// @param from The sender's address
    /// @param to The recipient's address
    /// @param amount The amount to transfer
    /// @return success Boolean indicating whether the transfer succeeded
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool success);

    /// @notice Get the name of the token
    /// @return name The name of the token
    function name() external view returns (string memory);

    /// @notice Get the symbol of the token
    /// @return symbol The symbol of the token
    function symbol() external view returns (string memory);

    /// @notice Get the number of decimals used by the token
    /// @return decimals The number of decimals
    function decimals() external view returns (uint8);
}
