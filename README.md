# Liquid-X

![Liquid-X Banner](https://via.placeholder.com/800x200.png)

**Liquid-X** is a cross-chain lending and borrowing application built on the **Optimism**, **Base**, and **Polygon** blockchains. The protocol is designed to offer seamless asset transfers and decentralized finance (DeFi) services across multiple blockchain networks. By leveraging advanced technologies such as **GraphQL** for efficient data querying, **Web3.js** for frontend and backend integration, and **Foundry** for smart contract development, Liquid-X aims to create a fluid and user-friendly DeFi experience.

## Key Features

- **Cross-Chain Compatibility**: Effortlessly borrow and lend assets across Optimism, Base, and Polygon networks.
- **Three Core Smart Contracts**:
  - **Minter**: Handles minting of protocol-specific tokens.
  - **MainRouter**: Facilitates communication and data exchange between supported blockchains.
  - **Depositor**: Manages collateral deposits securely, ensuring a robust lending and borrowing mechanism.
- **Burn-and-Mint Bridging Mechanism**: Allows seamless asset bridging between different blockchain networks, ensuring liquidity and security.
- **GraphQL Integration**: Utilizes GraphQL to enable fast and efficient querying of data from on-chain contracts.
- **Web3.js Integration**: Provides a robust framework for Web3 functionalities, supporting both frontend and backend operations.

## Architecture Overview

Liquid-X is built around a modular architecture that ensures scalability and flexibility:

1. **Minter**: This smart contract is responsible for minting new tokens in the Liquid-X ecosystem, which can be used as collateral or for liquidity provision.
2. **MainRouter**: Acts as the backbone of the protocol, managing communication and data flow between different blockchains. It orchestrates cross-chain transactions and ensures that data integrity is maintained across all networks.
3. **Depositor**: Manages the depositing of collateral onto the protocol. It ensures the security and transparency of collateral management, which is crucial for maintaining trust and stability within the system.

The **burn-and-mint** mechanism enables the bridging of assets by burning tokens on the source blockchain and minting them on the destination blockchain, facilitating a smooth and secure cross-chain experience.

### ER Diagram

Below is an ER Diagram representing the key entities and their relationships within the Liquid-X protocol:

![ER Diagram](https://via.placeholder.com/600x400.png)

## RWA Integration

Liquid-X is moving towards the integration of **Real World Assets (RWA)** as collateral options. By allowing traditional assets such as real estate, invoices, commodities, and more to be tokenized and used as collateral, Liquid-X aims to bridge the gap between traditional finance and decentralized finance. 

The integration of RWAs will provide:

- **Increased Collateral Options**: Users will have access to a wider range of assets to use as collateral, reducing reliance on crypto assets alone.
- **Lower Risk and Higher Stability**: RWAs tend to be less volatile than cryptocurrencies, providing a more stable form of collateral that can help mitigate risks associated with high volatility in crypto markets.
- **Broader Access to Liquidity**: By enabling RWAs as collateral, Liquid-X opens up new opportunities for liquidity providers and borrowers, potentially increasing the overall liquidity and usability of the platform.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **Yarn** or **npm**
- **Foundry** (for smart contract development)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/divin3circle/liquid-x.git
    cd liquid-x
    ```

2. Install the required dependencies:
    ```bash
    yarn install
    # or
    npm install
    ```

3. Compile the smart contracts using Foundry:
    ```bash
    forge build
    ```

### Running the Application

To start the frontend:

```bash
yarn start
# or
npm start
```

The application will be available at `http://localhost:3000`.

### Running Tests

To run the tests for the smart contracts:

```bash
forge test
```

## What's Next?

### Support for More Blockchains

We aim to expand Liquid-X's cross-chain capabilities by adding support for more blockchain networks, such as Ethereum mainnet, Binance Smart Chain, Avalanche, and others. This expansion will further enhance interoperability and offer more choices for users looking to lend and borrow across multiple networks.

### Enhanced Collateral Options

We plan to support more types of collateral, including **zkEVM-compatible tokens** and other native tokens from various blockchains. This will provide a more diversified range of assets that can be used as collateral, increasing the flexibility and appeal of the Liquid-X platform.

### Deep Integration of Real World Assets (RWAs)

Building on our current efforts, Liquid-X will continue to explore and implement deeper integration of RWAs. Our future roadmap includes partnerships with traditional financial institutions to tokenize various assets and offer them as collateral within the protocol. This move will significantly enhance liquidity and attract a more diverse range of users, including institutional investors and traditional finance players.

## Contributing

We welcome contributions from the community! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
