import { Web3 } from "web3";
import { Chain, EnsPlugin } from "@namespace-ens/web3-plugin-ens";
import { getProvider } from "./getBalance";
import { AbiItem } from "web3-utils";

// Import the ABI for your CustomNamespace contract
import CustomNamespaceABI from "../../contracts/abi/Namespace.json";

export class NamespaceService {
  private web3: Web3;
  private chainId: number;
  private customNamespaceContract: any;

  constructor(chainId: number) {
    const provider = getProvider(chainId);
    this.web3 = new Web3(provider);
    this.chainId = chainId;
    this.initializeEnsPlugin();
    this.initializeCustomNamespace();
  }

  private initializeEnsPlugin() {
    let chain: Chain;
    switch (this.chainId) {
      case 1:
        chain = Chain.Mainnet;
        break;
      case 11155111:
        chain = Chain.Sepolia;
        break;
      case 11155420: // Optimism Sepolia
        chain = Chain.Sepolia;
        break;
      default:
        throw new Error(`Unsupported chain ID for ENS: ${this.chainId}`);
    }
    this.web3.registerPlugin(new EnsPlugin(chain));
  }

  private initializeCustomNamespace() {
    const customNamespaceAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with your actual contract address
    this.customNamespaceContract = new this.web3.eth.Contract(
      CustomNamespaceABI as AbiItem[],
      customNamespaceAddress
    );
  }

  // ENS methods
  async setAddress(name: string, address: string) {
    return await this.web3.ens.setAddress(name, address);
  }

  async getAddress(name: string) {
    return await this.web3.ens.getAddress(name);
  }

  async setName(name: string) {
    return await this.web3.ens.setName(name);
  }

  async getName(address: string) {
    const node = await this.web3.ens.node(address);
    return await this.web3.ens.getName(node);
  }

  async setTextRecords(
    name: string,
    recordsToUpdate: Array<{ key: string; value: string }>,
    recordsToRemove: string[]
  ) {
    return await this.web3.ens.setTextRecords(
      name,
      recordsToUpdate,
      recordsToRemove
    );
  }

  async getTextRecords(name: string, recordKeys: string[]) {
    return await this.web3.ens.getTextRecords(name, recordKeys);
  }

  // Custom Namespace methods
  async registerCustomNamespace(name: string) {
    const accounts = await this.web3.eth.getAccounts();
    const registrationFee = await this.customNamespaceContract.methods
      .registrationFee()
      .call();
    return await this.customNamespaceContract.methods
      .registerNamespace(name)
      .send({
        from: accounts[0],
        value: registrationFee,
      });
  }

  async transferCustomNamespace(name: string, to: string) {
    const accounts = await this.web3.eth.getAccounts();
    return await this.customNamespaceContract.methods
      .transferNamespace(name, to)
      .send({
        from: accounts[0],
      });
  }

  async getCustomNamespaceOwner(name: string) {
    return await this.customNamespaceContract.methods
      .getNamespaceOwner(name)
      .call();
  }

  async getOwnedCustomNamespaces(address: string) {
    return await this.customNamespaceContract.methods
      .getOwnedNamespaces(address)
      .call();
  }
}
