// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {Parameters} from "../Parameters.sol";
import {MainRouter} from "../../src/MainRouter.sol";
import {Minter} from "../../src/Minter.sol";
import {ChainConfig} from "../config/ChainConfig.s.sol";

contract DeployMinter is Script, Parameters {
    function run() external returns (Minter minter) {
        ChainConfig config = new ChainConfig();
        ChainConfig.ChainComponent memory component = config.run();

        address router = component.router;
        uint64 chainSelector = component.chainSelector;

        vm.startBroadcast();
        minter = new Minter(
            chainSelector,
            router,
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            OPTIMISM_SEPOLIA_MAIN_ROUTER
        );

        minter.setAllowedDestinationChain(
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            true
        );
        minter.setAllowedSourceChain(CHAIN_SELECTOR_OPTIMISM_SEPOLIA, true);
        minter.setAllowedSender(OPTIMISM_SEPOLIA_MAIN_ROUTER, true);

        vm.stopBroadcast();
    }
}
