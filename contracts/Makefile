# Load environment variables from .env file
ifneq (,$(wildcard .env))
    include .env
    export
endif

install_libs:
	@forge install smartcontractkit/chainlink-brownie-contracts --no-commit && forge install smartcontractkit/ccip@ccip-develop --no-commit && forge install smartcontractkit/chainlink-local --no-commit && forge install OpenZeppelin/openzeppelin-contracts --no-commit

update_abi:
	@forge build --silent && jq '.abi' out/$(CONTRACT).sol/$(CONTRACT).json > abi/$(CONTRACT).json


.PHONY: deploy_avalanche_fuji deploy_ethereum_sepolia deploy_arbitrum_sepolia deploy_polygon_amoy deploy_optimism_sepolia deploy_base_sepolia deploy_all