// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {Parameters} from "../Parameters.sol";
import {MainRouter} from "../../src/MainRouter.sol";
import {Depositor} from "../../src/Depositor.sol";
import {ChainConfig} from "../config/ChainConfig.s.sol";
import {TokenConfig} from "../config/TokenConfigs.s.sol";

contract DeployDeposit is Script, Parameters {
    function run() external returns (Depositor depositor) {
        ChainConfig config = new ChainConfig();
        ChainConfig.ChainComponent memory component = config.run();

        TokenConfig tokenConfig = new TokenConfig();
        TokenConfig.Token memory token = tokenConfig.run();

        address router = component.router;
        uint64 chainSelector = component.chainSelector;

        vm.startBroadcast();

        depositor = new Depositor(
            chainSelector,
            router,
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            OPTIMISM_SEPOLIA_MAIN_ROUTER
        );

        depositor.setAllowedToken(token.wbtc.token, true);
        depositor.setAllowedToken(token.weth.token, true);
        depositor.setAllowedToken(token.link.token, true);
        depositor.setAllowedToken(token.avax.token, true);
        depositor.setAllowedToken(token.ckes.token, true);
        depositor.setAllowedToken(token.gold.token, true);
        depositor.setAllowedToken(token.usdt.token, true);
        depositor.setAllowedToken(token.op.token, true);

        depositor.setAllowedDestinationChain(
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            true
        );
        depositor.setAllowedSourceChain(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, true);
        depositor.setAllowedSender(OPTIMISM_SEPOLIA_MAIN_ROUTER, true);

        vm.stopBroadcast();
    }
}
