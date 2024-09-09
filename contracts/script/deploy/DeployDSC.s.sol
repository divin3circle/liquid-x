// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {DSC} from "../../src/DSC.sol";

contract DeployDSC is Script {
    function run() external returns (DSC) {
        // Start broadcasting transactions
        vm.startBroadcast();

        // Deploy the DSC contract
        DSC dsc = new DSC();

        // Stop broadcasting transactions
        vm.stopBroadcast();
        return dsc;
    }
}
