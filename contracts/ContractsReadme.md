## Overview

This project consists of a set of smart contracts designed to facilitate cross-chain token operations such as minting, burning, depositing, and redeeming. The primary contracts involved are `MainRouter`, `Depositor`, and `Minter`. These contracts interact with each other and with Chainlink's Cross-Chain Interoperability Protocol (CCIP) to enable seamless token operations across different blockchain networks.

## Contracts

### 1. MainRouter

The `MainRouter` contract is the central hub that coordinates cross-chain operations. It handles deposits, minting, burning, and redeeming of tokens. It also calculates fees for these operations and ensures that the necessary conditions are met before executing any transaction.

#### Key Functions:
- `mint`: Initiates the minting process on a destination chain.
- `depositAndMint`: Handles token deposits and subsequent minting on a different chain.
- `burnAndMint`: Handles token burning and subsequent minting on a different chain.
- `deposit`: Handles token deposits.
- `burn`: Handles token burning.
- `liquidate`: Handles liquidation of a user's position.
- `getRedeemFee`: Calculates the fee for redeeming tokens.
- `getMintFee`: Calculates the fee for minting tokens.
- `getMaximumAllowedMinting`: Returns the maximum amount of tokens a user is allowed to mint.
- `getUserFractionToLTV`: Returns the user's fraction to Loan-to-Value (LTV) ratio.
- `getUserHealthFactor`: Returns the user's health factor.
- `calculateUserFractionToLTV`: Calculates the user's fraction to LTV ratio.
- `calculateHealthFactor`: Calculates the user's health factor.
- `calculateFraction`: Helper function to calculate fractions.
- `checkHealthFactor`: Checks if the user's health factor is above the minimum threshold.
- `checkExceedMaxLTV`: Checks if the user's fraction to LTV ratio exceeds the maximum allowed.
- `calculateLTV`: Calculates the user's LTV ratio.
- `convertCreditToLTV`: Converts user credit to LTV ratio.
- `getUserOverallInformation`: Returns the user's overall collateral and minted amounts.
- `getUserOnChainInformation`: Returns the user's collateral and minted amounts on a specific chain.
- `getUserMintedOverall`: Returns the total amount of tokens minted by a user.
- `getUserMintedOnChain`: Returns the amount of tokens minted by a user on a specific chain.

### 2. Depositor

The `Depositor` contract handles the deposit of tokens and interacts with the `MainRouter` to facilitate cross-chain operations. It also calculates the fees for deposit and mint operations.

#### Key Functions:
- `deposit`: Allows users to deposit tokens.
- `depositAndMint`: Allows users to deposit tokens and mint new tokens on a different chain.
- `getDepositFee`: Calculates the fee for deposit operations.
- `getDepositAndMintFee`: Calculates the fee for deposit and mint operations.
- `getDeposited`: Returns the amount of tokens deposited by a user.
- `withdrawFeePay`: Allows users to withdraw their fee payments.

### 3. Minter

The `Minter` contract handles the minting and burning of tokens. It interacts with the `MainRouter` to facilitate cross-chain minting and burning operations. It also calculates the fees for these operations.

#### Key Functions:
- `getBurnAndMintFee`: Calculates the fee for burn and mint operations.
- `getMinted`: Returns the amount of tokens minted by a user.
- `getFeePay`: Returns the fee paid by a user.
- `getDsc`: Returns the DSC token contract.
- `getMainRouter`: Returns the address of the `MainRouter` contract.

## Interaction

### Cross-Chain Operations

1. **Deposit and Mint**:
   - User calls `depositAndMint` on the `Depositor` contract.
   - `Depositor` contract calculates the fee using `getDepositAndMintFee`.
   - `Depositor` contract calls `depositAndMint` on the `MainRouter` contract.
   - `MainRouter` contract handles the deposit and initiates the mint operation on the destination chain.

2. **Burn and Mint**:
   - User calls `burn` on the `Minter` contract.
   - `Minter` contract calculates the fee using `getBurnAndMintFee`.
   - `Minter` contract calls `burnAndMint` on the `MainRouter` contract.
   - `MainRouter` contract handles the burn and initiates the mint operation on the destination chain.

3. **Redeem**:
   - User calls `redeem` on the `MainRouter` contract.
   - `MainRouter` contract calculates the fee using `getRedeemFee`.
   - `MainRouter` contract handles the redeem operation and transfers the tokens to the receiver.

### Fee Calculation

Fees for cross-chain operations are calculated using the `getFee` function from the `IRouterClient` interface. This function takes into account the gas limit and other parameters to determine the appropriate fee for the operation.

## Deployment

When deploying the contracts, ensure that the addresses of the `MainRouter`, `Depositor`, and `Minter` contracts are correctly set. The `msg.sender` will automatically be the address that initiates the transaction. However, when calling functions from other contracts, you might need to pass the contract address as the `sender`.

### Example Deployment

1. Deploy the `MainRouter` contract.
2. Deploy the `Depositor` contract, passing the address of the `MainRouter` contract.
3. Deploy the `Minter` contract, passing the address of the `MainRouter` contract.

## Conclusion

This set of contracts provides a robust framework for cross-chain token operations. By leveraging Chainlink's CCIP, the contracts ensure secure and efficient token transfers across different blockchain networks. The `MainRouter`, `Depositor`, and `Minter` contracts work together to handle deposits, minting, burning, and redeeming of tokens, with appropriate fee calculations and validations.
