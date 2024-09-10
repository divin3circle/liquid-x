// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {Parameters} from "../Parameters.sol";
import {MainRouter} from "../../src/MainRouter.sol";
import {TokenConfig} from "../config/TokenConfigs.s.sol";

contract SetSource is Script, Parameters {
    function run() external {
        MainRouter mainRouter = MainRouter(
            payable(OPTIMISM_SEPOLIA_MAIN_ROUTER)
        );
        vm.startBroadcast();
        mainRouter.setSource(
            "const user = args[0];const apiResponse = await Functions.makeHttpRequest({url: `https://beta.credprotocol.com/api/score/address/${user}/`,headers: {'Authorization': `Token 97f9cd871643f218af486654b8a64329e1c30fc4`},});if (apiResponse.error) {throw Error('Request failed');}const { data } = apiResponse;return Functions.encodeUint256(data.value);"
        );
        vm.stopBroadcast();
    }
}
