# Load environment variables from .env file
ifneq (,$(wildcard .env))
    include .env
    export
endif

update_abi:
	@forge build --silent && jq '.abi' out/$(CONTRACT).sol/$(CONTRACT).json > abi/$(CONTRACT).json

deploy_main_router:
	@forge script script/deploy/DeployMainRouter.s.sol:DeployMainRouter --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast --verify --etherscan-api-key $(OPTIMISM_API_KEY) -vvvv

# Target for Optimism Sepolia
deploy_depositor:
	@forge script script/deploy/DeployDepositor.s.sol:DeployDeposit --rpc-url $(POLYGON_AMOY_RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast --skip-simulation --gas-limit 10000000 --verify --etherscan-api-key $(POLYGON_API_KEY) -vvvv

deploy_minter:
	@forge script script/deploy/DeployMinter.s.sol:DeployMinter --rpc-url $(BASE_SEPOLIA_RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast --skip-simulation --gas-limit 5000000 --verify --etherscan-api-key $(POLYGON_API_KEY) -vvvv

mint_token:	
	@forge script script/interactions/MintToken.s.sol:MintToken --sig "mintToken(address)" $(USER) --rpc-url $(RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --skip-simulation --gas-limit 5000000 --broadcast -vvvv

deposit_token:
	@forge script script/interactions/Deposit.s.sol:Deposit --sig "deposit(address,uint256,uint256)" $(TOKEN) $(AMOUNT) $(ETHER) --rpc-url $(RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

deposit_and_mint:
	@forge script script/interactions/DepositAndMint.s.sol:DepositAndMint --sig "depositAndMint(address,uint256,uint64,address,uint256,uint256)" $(TOKEN) $(AMOUNT) $(CHAIN_SELECTOR) $(MINTER) $(AMOUNT_TO_MINT) $(ETHER) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --rpc-url $(RPC_URL) --broadcast

setCCIPFee:
	@forge script script/interactions/SetCCIPFee.s.sol:SetCCIPFee --sig "setFee(uint256)" $(FEE) --rpc-url $(RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

redeem_token:
	@forge script script/interactions/Redeem.s.sol:Redeem -sig "redeem(uint64,address,address,uint256,uint256)" $(CHAIN_SELECTOR) $(DEPOSITOR) $(TOKEN) $(AMOUNT) $(ETHER) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

mint:
	@forge script script/interactions/Mint.s.sol:Mint --sig  "mint(uint64,address,uint256,uint256)" $(CHAIN_SELECTOR) $(MINTER) $(AMOUNT) $(ETHER) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

burn:
	@forge script script/interactions/Burn.s.sol:Burn --sig "burn(uint256,uint256)" $(AMOUNT) $(ETHER) --rpc-url $(RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

setOptimism:
	@forge script script/interactions/MainRouterSetOptimism.s.sol:SetAvalanche --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

setAllowedSender:
	@forge script script/interactions/SetAllowedSender.s.sol:SetAllowedSender --sig "setAllowedSender(address,address)" $(CONTRACT) $(SENDER) --rpc-url $(RPC_URL) --account $(ACCOUNT) --sender $(OWNER_ADDRESS) --broadcast

getTotalCollateral:
	cast call $(MAIN_ROUTER) "getUserOverallCollateralValue(address)(uint256)" $(USER) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL)

getUSDDepositedTokenOnChain:
	cast call $(MAIN_ROUTER) "getUserCollateralValue(address,uint64,address)(uint256)" $(USER) $(CHAIN_SELECTOR) $(TOKEN) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL)

getDepositedTokenOnChain:
	cast call $(MAIN_ROUTER) "getUserDepositedAmount(address,uint64,address)(uint256)" $(USER) $(CHAIN_SELECTOR) $(TOKEN) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL)

getUSDDepositedOnChain:
	cast call $(MAIN_ROUTER) "getUserCollateralOnChainValue(address,uint64)(uint256)" $(USER) $(CHAIN_SELECTOR) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL)

getTotalMinted:
	cast call $(MAIN_ROUTER) "getUserMintedOverall(address)(uint256)" $(USER) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL)

getCredit:
	forge script script/interaction/GetCredit.s.sol:GetCredit --sig "getCredit(address,string[])(bytes32)" $(USER) $(ARGS) --rpc-url $(OPTIMISM_SEPOLIA_RPC_URL) --account $(ACC) --sender $(SENDER) --broadcast

.PHONY: deploy_avalanche_fuji deploy_ethereum_sepolia deploy_arbitrum_sepolia deploy_polygon_amoy deploy_optimism_sepolia deploy_base_sepolia deploy_all