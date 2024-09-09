// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Script } from "forge-std/Script.sol";
import { Parameters } from "../Parameters.sol";
import { MainRouter } from "../../src/MainRouter.sol";
import { TokenConfig } from "../config/TokenConfigs.s.sol";

contract SetOptimism is Script, Parameters {
    function run() external {
        MainRouter mainRouter = MainRouter(payable(OPTIMISM_SEPOLIA_MAIN_ROUTER));
        vm.startBroadcast();
        mainRouter.setOptimismDepositor(OPTIMISM_SEPOLIA_DEPOSITOR);
        mainRouter.setOptimismMinter(OPTIMISM_SEPOLIA_MINTER);
        vm.stopBroadcast();
        
    }
}