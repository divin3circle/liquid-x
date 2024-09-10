## LIQUIDX - Frontend

Liquid-X is a cross-chain lending and borrowing application built on the Optimism, Base, and Polygon blockchains. The protocol is designed to offer seamless asset transfers and decentralized finance (DeFi) services across multiple blockchain networks. By leveraging advanced technologies such as Chainlink CCIP for cross-chain interoperability, GraphQL for efficient data querying, Web3.js for frontend and backend integration, and Foundry for smart contract development, Liquid-X aims to create a fluid and user-friendly DeFi experience.

## Technologies Used

- Next.js
- GraphQL
- The Graph
- Tailwind CSS
- TypeScript
- React
- Solidity
- Foundry
- Web3.js
- Recharts
- Appollo Client

## Bounties Targeting

### 1. The Graph & GraphQL

- Implement GraphQL for efficient data querying from Uniswap tvl data
- Integrate The Graph for blockchain data indexing
- Developed subgraphs that indexed Liquid-X's lending and borrowing events

#### Subgraph Development

1. [liquidx-addresses](https://thegraph.com/studio/subgraph/liquidx-adresses/endpoints)
1. [liquidx-burns](https://api.studio.thegraph.com/proxy/88585/liquidx/version/latest/graphql)
1. [pricefeedsv0.0.1](https://api.studio.thegraph.com/proxy/88585/pricefeeds-liquidx-v1/v0.0.1/graphql)

### 2. Optimism

- Deployed LiquidX subgraphs on the Optimism testnet
- LiquidX main router is deployed on the Optimism mainnet, hence all communication between other EVM chains and LiquidX is done through the Optimism chain.

### 3. Base

- Depositor and minter contracts are deployed on the Base testnet, allowing users to borrow and deposit assets on the Base chain without selling their assets on other chains.
