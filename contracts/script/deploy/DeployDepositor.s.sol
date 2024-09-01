// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {Parameters} from "../Parameters.sol";
import {Depositor} from "../../src/Depositor.sol";

contract DeployDepositor is Script {
    function run() external returns (Depositor depositor) {
        // Retrieve chain configuration

        ChainConfig.ChainComponent memory chainConfig = Parameters
            .getChainConfig();

        // Start broadcasting transactions
        vm.startBroadcast();

        // Deploy the Depositor contract
        depositor = new Depositor(
            chainConfig.chainSelector,
            chainConfig.router,
            Parameters.AVALANCHE_FUJI_CHAIN_SELECTOR,
            Parameters.AVALANCHE_FUJI_MAIN_ROUTER
        );

        // Stop broadcasting transactions
        vm.stopBroadcast();
    }
}
