// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Parameters {
    // CCIP Router addresses for different networks
    address public constant CCIP_ROUTER_AVALANCHE_FUJI =
        0xF694E193200268f9a4868e4Aa017A0118C9a8177;
    address public constant CCIP_ROUTER_OPTIMISM =
        0x114A20A10b43D4115e5aeef7345a1A71d2a60C57;
    address public constant CCIP_ROUTER_POLYGON_AMOY =
        0x9C32fCB86BF0f4a1A8921a9Fe46de3198bb884B2;
    address public constant CCIP_ROUTER_ETHEREUM_SEPOLIA =
        0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59;
    address public constant CCIP_ROUTER_BASE_SEPOLIA =
        0xD3b06cEbF099CE7DA4AcCf578aaebFDBd6e88a93;
    address public constant CCIP_ROUTER_ARBITRUM_SEPOLIA =
        0x2a9C5afB0d0e4BAb2BCdaE109EC4b0c4Be15a165;

    // Chain Selector Numbers
    uint64 public constant CHAIN_SELECTOR_AVALANCHE_FUJI = 14767482510784806043;
    uint64 public constant CHAIN_SELECTOR_OPTIMISM_SEPOLIA =
        5224473277236331295;
    uint64 public constant CHAIN_SELECTOR_POLYGON_AMOY = 16281711391670634445;
    uint64 public constant CHAIN_SELECTOR_ETHEREUM_SEPOLIA =
        16015286601757825753;
    uint64 public constant CHAIN_SELECTOR_BASE_SEPOLIA = 10344971235874465080;
    uint64 public constant CHAIN_SELECTOR_ARBITRUM_SEPOLIA =
        3478487238524512106;

    // Chain IDs for different networks
    uint64 public constant AVALANCHE_FUJI_CHAIN_ID = 43113;
    uint64 public constant ETHEREUM_SEPOLIA_CHAIN_ID = 11155111;
    uint64 public constant ARBITRUM_SEPOLIA_CHAIN_ID = 421614;
    uint64 public constant POLYGON_AMOY_CHAIN_ID = 80002;
    uint64 public constant BASE_SEPOLIA_CHAIN_ID = 84532;
    uint64 public constant OPTIMISM_SEPOLIA_CHAIN_ID = 11155420;

    // Token addresses for different networks
    // These will be replaced with actual addresses
    address public constant OPTIMISM_SEPOLIA_WBTC =
        0x93C6300dde76c66360E43B8e04bc7dcD35641944;
    address public constant OPTIMISM_SEPOLIA_WETH =
        0xC27EdEfA70C53135EC229F1EcC7c2219adA0914c;
    address public constant OPTIMISM_SEPOLIA_LINK =
        0xE4a9eE5CBe3EBA7760Fe1DA4566cE97ef1fA5674;
    address public constant OPTIMISM_SEPOLIA_AVAX =
        0x4D90A816133C48C90Db46881c92a73E4E91A09CB;
    address public constant OPTIMISM_SEPOLIA_CKES =
        0xEd270f83c58bc698bE7fCa3de4FF935069c6d431;
    address public constant OPTIMISM_SEPOLIA_XAU =
        0xdAa065d31736606d5bfa059EE528624eE379a73d;
    address public constant OPTIMISM_SEPOLIA_USDT =
        0xD898bc60Fc9d5837D86DE609100Af6Ea9825C035;
    address public constant OPTIMISM_SEPOLIA_OP =
        0x9b5328599cEfEcd181b237f7138b298A9428692A;

    // Base Sepolia
    address public constant BASE_SEPOLIA_WBTC =
        0x5701139aE00FbB6060681803CD577d69053bB5b8;
    address public constant BASE_SEPOLIA_WETH =
        0x979CCbA756D0AF02390cBCd039D186935Bd8C815;
    address public constant BASE_SEPOLIA_LINK =
        0xf4c2fb6fe04c6f99B36Fa9f0391971c4E5247afD;
    address public constant BASE_SEPOLIA_AVAX =
        0x93C6300dde76c66360E43B8e04bc7dcD35641944;
    address public constant BASE_SEPOLIA_CKES =
        0xC27EdEfA70C53135EC229F1EcC7c2219adA0914c;
    address public constant BASE_SEPOLIA_XAU =
        0xE4a9eE5CBe3EBA7760Fe1DA4566cE97ef1fA5674;
    address public constant BASE_SEPOLIA_USDT =
        0x4D90A816133C48C90Db46881c92a73E4E91A09CB;
    address public constant BASE_SEPOLIA_OP =
        0xEd270f83c58bc698bE7fCa3de4FF935069c6d431;

    // Polygon Amoy
    address public constant POLYGON_AMOY_WBTC =
        0x5B1141AB6250e2c89A13Ed4E65EDfcDc088BB4b5;
    address public constant POLYGON_AMOY_WETH =
        0x85c16AB9B36c2b80a1Faef7E0fb5Ad86685BEBf9;
    address public constant POLYGON_AMOY_LINK =
        0xC84Cb1F362A5c39B77D8D355012691bD32513183;
    address public constant POLYGON_AMOY_AVAX =
        0x32BD7647043E3B72E2BA5492C74a7887600B2F99;
    address public constant POLYGON_AMOY_CKES =
        0x976abA97272DC6bE8C93ea134FE273D8F9Bb99f2;
    address public constant POLYGON_AMOY_XAU =
        0x85fF250e0bFa6c32211489838A4B91B0EB9dB1FF;
    address public constant POLYGON_AMOY_USDT =
        0x61c9f0Cc4213CBB609bA0E216D54470B0d498C68;
    address public constant POLYGON_AMOY_OP =
        0x49F06a3C04430889FF7ce29D27D1672c82bbBA86;

    // Avalanche Fuji
    address public constant AVALANCHE_FUJI_WBTC =
        0x0804BfEC3ef24bc6CA0eb399D108CC0313d86d9c;
    address public constant AVALANCHE_FUJI_WETH =
        0x51353BFb9fB8baE6d70b896401937C64E96BAcB9;
    address public constant AVALANCHE_FUJI_LINK =
        0x3001d62eBc86ab3A4eF91aFed766BB70182e251c;
    address public constant AVALANCHE_FUJI_AVAX =
        0xD28f8454873CEb4de41d537257044510c3A1d616;
    address public constant AVALANCHE_FUJI_CKES =
        0x6cC55345982d82e3E6dC704a64cdbD58a6421b7A;
    address public constant AVALANCHE_FUJI_XAU =
        0x620476fe1Bc36a37530b416B7d658024D5966b08;
    address public constant AVALANCHE_FUJI_USDT =
        0xAcA1eA8547E247a3125Da273b16C17Badc4f0812;
    address public constant AVALANCHE_FUJI_OP =
        0xf3138B59cAcbA1a4d7d24fA7b184c20B3941433e;

    // Arbitrum Sepolia
    address public constant ARBITRUM_SEPOLIA_WBTC =
        0xF6905F1E4ad86f8C3a1Ebfca3E04a9e4d2adDD0D;
    address public constant ARBITRUM_SEPOLIA_WETH =
        0x9a24BD7833859d2364EaD5A4aF4b16799693DF12;
    address public constant ARBITRUM_SEPOLIA_LINK =
        0x244ec7F5753b2Fc10d0C2bAaB1AB55850E73a3AB;
    address public constant ARBITRUM_SEPOLIA_AVAX =
        0xe257e2a67407144C918acaD5e11c2582F77c0B1a;
    address public constant ARBITRUM_SEPOLIA_CKES =
        0x32B8F75d2AC926a0a906F24df3e8Fe2bA17Bd80a;
    address public constant ARBITRUM_SEPOLIA_XAU =
        0xDFf5Ba9FCff83cE455e45De7572B6259b0E7D7dE;
    address public constant ARBITRUM_SEPOLIA_USDT =
        0x98EeB02BC20c5e7079983e8F0D0D839dFc8F74fA;
    address public constant ARBITRUM_SEPOLIA_OP =
        0x75b86D7B224Fd88f785BB5FaC5e261D9EFde3047;

    // Ethereum Sepolia
    address public constant ETHEREUM_SEPOLIA_WBTC =
        0x4aa3B1639d45Cb98a67790b8509E47bD7aa16D2A;
    address public constant ETHEREUM_SEPOLIA_WETH =
        0x9124d3b5DfD072bB2d6cf3e3A59430d2a5D8A55D;
    address public constant ETHEREUM_SEPOLIA_LINK =
        0x31A4Ae750C0e8d477Dd39AF3662F93e69021AA50;
    address public constant ETHEREUM_SEPOLIA_AVAX =
        0xdd36FB413B4470ab5CE67F975c6A2B192e6F84ba;
    address public constant ETHEREUM_SEPOLIA_UNI =
        0x492E85cD024A271C4F19d8B7E9050Ef2bbFeDcCA;
    address public constant ETHEREUM_SEPOLIA_USDC =
        0x65Ae0010421814B1303778Bc82a599f63028d899;
    address public constant ETHEREUM_SEPOLIA_USDT =
        0xB3718E52781F9Fc1C0b72A2966C2616E6d962a1C;
    address public constant ETHEREUM_SEPOLIA_OP =
        0x902Be1A15cf92e4b59ae756bA869Da531A267937;

    // Depositor addresses for different networks
    address public constant AVALANCHE_FUJI_DEPOSITOR =
        0x1111111111111111111111111111111111111111;
    address public constant ETHEREUM_SEPOLIA_DEPOSITOR =
        0x1111111111111111111111111111111111111111;
    address public constant ARBITRUM_SEPOLIA_DEPOSITOR =
        0x1111111111111111111111111111111111111111;
    address public constant POLYGON_AMOY_DEPOSITOR =
        0xcc7ccB496a8fda44Ae146A53DCC915b814df3Cfd;
    address public constant BASE_SEPOLIA_DEPOSITOR =
        0x0d98C55d41f8b28d2E3BF3E3665308fAa032C73d;
    address public constant OPTIMISM_SEPOLIA_DEPOSITOR =
        0x961b2ae0Fb373f3a41E1f9a4be80028868c64483;

    // Minter addresses for different networks
    // @Dancan254: These will be replaced with actual addresses
    address public constant AVALANCHE_FUJI_MINTER =
        0x1111111111111111111111111111111111111111;
    address public constant ETHEREUM_SEPOLIA_MINTER =
        0x1111111111111111111111111111111111111111;
    address public constant ARBITRUM_SEPOLIA_MINTER =
        0x1111111111111111111111111111111111111111;
    address public constant POLYGON_AMOY_MINTER =
        0x952F13984971588f3ed84718d72e3feBc7f665Af;
    address public constant BASE_SEPOLIA_MINTER =
        0xFc64C331d32267DbCBe81E386D55297baAe14aB8;
    address public constant OPTIMISM_SEPOLIA_MINTER =
        0x8435A9E33ed2EC66E5aC063DA5055a67B6229a07;

    //Optimism_MainRouter
    //Needs to be updated with the actual addressS
    address public constant OPTIMISM_SEPOLIA_MAIN_ROUTER =
        0x5A33f51C1D8595b8D3deb708bc8D116F403896ef;

    //Optimism PriceFeedAddress
    address public constant BTC_PRICE_FEED =
        0x3015aa11f5c2D4Bd0f891E708C8927961b38cE7D;
    address public constant ETH_PRICE_FEED =
        0x61Ec26aA57019C486B10502285c5A3D4A4750AD7;
    address public constant LINK_PRICE_FEED =
        0x53f91dA33120F44893CB896b12a83551DEDb31c6;
    address public constant AVAX_PRICE_FEED =
        0xcacB7778Cba5C5526E6EBbA0A1aE74B4c310084B;
    address public constant CKES_PRICE_FEED =
        0x280eE98Cb396513DB0aBa22318d9B6F8AbbAa6D8;
    address public constant XAU_PRICE_FEED =
        0xa6932B792e4b4FfA1e78e63671f42d0aff02eD73;
    address public constant USDT_PRICE_FEED =
        0xF83696ca1b8a266163bE252bE2B94702D4929392;
    address public constant OP_PRICE_FEED =
        0x8907a105E562C9F3d7F2ed46539Ae36D87a15590;

    //Optimism Functions Router
    address public constant OPTIMISM_FUNCTIONS_ROUTER =
        0xC17094E3A1348E5C7544D4fF8A36c28f2C6AAE28;
    bytes32 public constant OPTIMISM_SEPOLIA_DON_ID =
        0x66756e2d6f7074696d69736d2d7365706f6c69612d3100000000000000000000;
    uint64 public constant OPTIMISM_SEPOLIA_SUBSCRIPTION_ID = 228;

    //XNES Token
    address public constant POLYGON_AMOY_XNES =
        0x15c51Cdd0b53789711C43a2d6C624dB20D52086E;
    address public constant BASE_SEPOLIA_XNES =
        0x8a9cdc4D0357b0020fab701C197df3BF9488DFFD;
    address public constant OPTIMISM_SEPOLIA_XNES =
        0x8a9cdc4D0357b0020fab701C197df3BF9488DFFD;
}
