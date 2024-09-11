import Web3 from "web3";
import { NETWORKS, CONTRACTS } from "./contracts";
import { BlockchainInteractions } from "./namespace";
import { EnsService } from "./namespace";

class Web3Service {
  constructor() {
    this.web3 = null;
    this.network = null;
    this.mainRouter = null;
    this.ensService = null;
  }

  async connect(networkName) {
    const network = NETWORKS[networkName];
    if (!network) throw new Error(`Network ${networkName} not supported`);

    this.web3 = new Web3(new Web3.providers.HttpProvider(network.rpcUrl));
    this.network = network;

    try {
      const chainId = await this.web3.eth.getChainId();
      if (chainId !== network.chainId) {
        throw new Error(
          `Connected to wrong chain. Expected ${network.chainId}, got ${chainId}`
        );
      }
      console.log(`Connected to ${network.name}`);
      this.mainRouter = new BlockchainInteractions.MainRouter(chainId);
      this.ensService = new EnsService(chainId);
      return true;
    } catch (error) {
      console.error("Connection failed:", error);
      return false;
    }
  }

  async loadMainRouterContract() {
    if (!this.web3) throw new Error("Web3 not initialized");
    const address = CONTRACTS[this.network.chainId].MAIN_ROUTER_ADDRESS;
    if (!address) throw new Error("MainRouter contract address not found");
    this.mainRouter = new this.web3.eth.Contract(MainRouterABI, address);
  }

  async getAccounts() {
    if (!this.web3) throw new Error("Web3 not initialized");
    return this.web3.eth.getAccounts();
  }

  async deposit(tokenAddress, amount, from) {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.deposit(tokenAddress, amount).send({ from });
  }

  async mint(receiver, amount, from) {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.mint(receiver, amount).send({ from });
  }

  async burn(amount, from) {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.burn(amount).send({ from });
  }

  async redeem(tokenAddress, amount, from) {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.redeem(tokenAddress, amount).send({ from });
  }

  async getTokenPrice(tokenAddress) {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.getTokenPrice(tokenAddress).call();
  }

  async getAllowedTokensOnChain(chainSelector) {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods
      .getAllowedTokensOnChain(chainSelector)
      .call();
  }

  async getOptimismDepositor() {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.getOptimismDepositor().call();
  }

  async getOptimismMinter() {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.getOptimismMinter().call();
  }

  async getCCIPGasLimit() {
    if (!this.mainRouter) throw new Error("MainRouter contract not loaded");
    return this.mainRouter.methods.getCCIPGasLimit().call();
  }

  // Add more methods as needed for your specific use cases

  // Add ENS-related methods
  async setEnsAddress(name, address) {
    if (!this.ensService) throw new Error("ENS service not initialized");
    return this.ensService.setAddress(name, address);
  }

  async getEnsAddress(name) {
    if (!this.ensService) throw new Error("ENS service not initialized");
    return this.ensService.getAddress(name);
  }

  async setEnsName(name) {
    if (!this.ensService) throw new Error("ENS service not initialized");
    return this.ensService.setName(name);
  }

  async getEnsName(address) {
    if (!this.ensService) throw new Error("ENS service not initialized");
    return this.ensService.getName(address);
  }

  // Add more ENS-related methods as needed
}

export default new Web3Service();
