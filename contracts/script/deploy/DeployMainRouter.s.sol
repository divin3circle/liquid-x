//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {Script} from "../../lib/forge-std/src/Script.sol";
import {Parameters} from "../Parameters.sol";
import {MainRouter} from "../../src/MainRouter.sol";

contract DeployMainRouter is Script, Parameters {
    function run() external returns (MainRouter) {
        vm.startBroadcast();
        MainRouter mainRouter = new MainRouter(
            CHAIN_SELECTOR_OPTIMISM_SEPOLIA,
            CCIP_ROUTER_OPTIMISM,
            OPTIMISM_FUNCTIONS_ROUTER,
            OPTIMISM_SEPOLIA_DON_ID
        );
        vm.stopBroadcast();
        return mainRouter;
    }
}
