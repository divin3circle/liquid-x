// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {XNES} from "../../src/XNES.sol";

contract DeployXNES is Script {
    function run() external returns (XNES) {
        // Start broadcasting transactions
        vm.startBroadcast();

        // Deploy the DSC contract
        XNES xnes = new XNES();

        // Stop broadcasting transactions
        vm.stopBroadcast();
        return xnes;
    }
}
