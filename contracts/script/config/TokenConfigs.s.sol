// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {Parameters} from "../Parameters.sol";
import {ERC20Mock} from "../Mocks/ERC20Mock.sol";

contract TokenConfig is Script, Parameters {
    struct BaseToken {
        uint64 chainSelector;
        address token;
        address priceFeed;
    }

    struct Token {
        BaseToken wbtc;
        BaseToken weth;
        BaseToken link;
        BaseToken avax;
        BaseToken ckes;
        BaseToken gold;
        BaseToken usdt;
        BaseToken op;
    }

    function run() external view returns (Token memory token) {
        if (block.chainid == AVALANCHE_FUJI_CHAIN_ID) {
            return getAvalancheFujiToken();
        } else if (block.chainid == ETHEREUM_SEPOLIA_CHAIN_ID) {
            return getEthereumSepoliaToken();
        } else if (block.chainid == ARBITRUM_SEPOLIA_CHAIN_ID) {
            return getArbitrumSepoliaToken();
        } else if (block.chainid == POLYGON_AMOY_CHAIN_ID) {
            return getPolygonAmoyToken();
        } else if (block.chainid == BASE_SEPOLIA_CHAIN_ID) {
            return getBaseSepoliaToken();
        } else if (block.chainid == OPTIMISM_SEPOLIA_CHAIN_ID) {
            return getOptimismSepoliaToken();
        }
    }

    function getAvalancheFujiToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_AVAX, AVAX_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_CKES, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_XAU, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_AVALANCHE_FUJI, AVALANCHE_FUJI_OP, OP_PRICE_FEED);
    }

    function getEthereumSepoliaToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_AVAX, AVAX_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_UNI, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_USDC, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, ETHEREUM_SEPOLIA_OP, OP_PRICE_FEED);
    }

    function getArbitrumSepoliaToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_AVAX, AVAX_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_CKES, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_XAU, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, ARBITRUM_SEPOLIA_OP, OP_PRICE_FEED);
    }

    function getPolygonAmoyToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_AVAX, AVAX_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_CKES, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_XAU, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_POLYGON_AMOY, POLYGON_AMOY_OP, OP_PRICE_FEED);
    }

    function getBaseSepoliaToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_AVAX, AVAX_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_CKES, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_XAU, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_BASE_SEPOLIA, BASE_SEPOLIA_OP, USDT_PRICE_FEED);
    }

    function getOptimismSepoliaToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_AVAX, OP_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_CKES, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_XAU, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_OP, OP_PRICE_FEED);
    }

    function getLiskSepoliaToken() public pure returns (Token memory token) {
        token.wbtc = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_WBTC, BTC_PRICE_FEED);
        token.weth = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_WETH, ETH_PRICE_FEED);
        token.link = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_LINK, LINK_PRICE_FEED);
        token.avax = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_AVAX, OP_PRICE_FEED);
        token.ckes = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_CKES, CKES_PRICE_FEED);
        token.gold = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_XAU, XAU_PRICE_FEED);
        token.usdt = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_USDT, USDT_PRICE_FEED);
        token.op = BaseToken(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, OPTIMISM_SEPOLIA_OP, OP_PRICE_FEED);
    }
}
