//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Script} from "../../lib/forge-std/src/Script.sol";
import {Parameters} from "../Parameters.sol";
import {MainRouter} from "../../src/MainRouter.sol";
import {TokenConfig} from "../config/TokenConfigs.s.sol";

contract DeployMainRouter is Script, Parameters {
    function run() external returns (MainRouter) {
        vm.startBroadcast();
        MainRouter mainRouter = new MainRouter(
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            CCIP_ROUTER_OPTIMISM,
            OPTIMISM_FUNCTIONS_ROUTER,
            OPTIMISM_SEPOLIA_DON_ID
        );

        mainRouter.setSubscriptionID(OPTIMISM_SEPOLIA_SUBSCRIPTION_ID);
        TokenConfig tokensConfig = new TokenConfig();

        addAllowedToken(mainRouter, tokensConfig.getAvalancheFujiToken());
        addAllowedToken(mainRouter, tokensConfig.getEthereumSepoliaToken());
        addAllowedToken(mainRouter, tokensConfig.getPolygonAmoyToken());
        addAllowedToken(mainRouter, tokensConfig.getBaseSepoliaToken());
        addAllowedToken(mainRouter, tokensConfig.getOptimismSepoliaToken());
        addAllowedToken(mainRouter, tokensConfig.getArbitrumSepoliaToken());

        mainRouter.setAllowedDestinationChain(
            CHAIN_SELECTOR_AVALANCHE_FUJI,
            true
        );
        mainRouter.setAllowedDestinationChain(
            CHAIN_SELECTOR_ETHEREUM_SEPOLIA,
            true
        );
        mainRouter.setAllowedDestinationChain(
            CHAIN_SELECTOR_POLYGON_AMOY,
            true
        );
        mainRouter.setAllowedDestinationChain(
            CHAIN_SELECTOR_BASE_SEPOLIA,
            true
        );
        mainRouter.setAllowedDestinationChain(
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            true
        );
        mainRouter.setAllowedDestinationChain(
            CHAIN_SELECTOR_ARBITRUM_SEPOLIA,
            true
        );

        mainRouter.setAllowedSourceChain(CHAIN_SELECTOR_AVALANCHE_FUJI, true);
        mainRouter.setAllowedSourceChain(CHAIN_SELECTOR_ETHEREUM_SEPOLIA, true);
        mainRouter.setAllowedSourceChain(CHAIN_SELECTOR_POLYGON_AMOY, true);
        mainRouter.setAllowedSourceChain(CHAIN_SELECTOR_BASE_SEPOLIA, true);
        mainRouter.setAllowedSourceChain(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, true);
        mainRouter.setAllowedSourceChain(CHAIN_SELECTOR_ARBITRUM_SEPOLIA, true);

        vm.stopBroadcast();
        return mainRouter;
    }

    function addAllowedToken(
        MainRouter mainRouter,
        TokenConfig.Token memory token
    ) public {
        mainRouter.addAllowedToken(
            token.wbtc.chainSelector,
            token.wbtc.token,
            token.wbtc.priceFeed,
            18
        );
        mainRouter.addAllowedToken(
            token.weth.chainSelector,
            token.weth.token,
            token.weth.priceFeed,
            18
        );
        mainRouter.addAllowedToken(
            token.link.chainSelector,
            token.link.token,
            token.link.priceFeed,
            18
        );
        mainRouter.addAllowedToken(
            token.avax.chainSelector,
            token.avax.token,
            token.avax.priceFeed,
            18
        );
        mainRouter.addAllowedToken(
            token.ckes.chainSelector,
            token.ckes.token,
            token.ckes.priceFeed,
            18
        );
        mainRouter.addAllowedToken(
            token.gold.chainSelector,
            token.gold.token,
            token.gold.priceFeed,
            6
        );
        mainRouter.addAllowedToken(
            token.usdt.chainSelector,
            token.usdt.token,
            token.usdt.priceFeed,
            6
        );
        mainRouter.addAllowedToken(
            token.op.chainSelector,
            token.op.token,
            token.op.priceFeed,
            18
        );
    }
}
