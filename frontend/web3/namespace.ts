import { Web3 } from "web3";
import { Chain, EnsPlugin } from "@namespace-ens/web3-plugin-ens";
import { getProvider } from "./getBalance";

export class EnsService {
  private web3: Web3;
  private chainId: number;

  constructor(chainId: number) {
    const provider = getProvider(chainId);
    this.web3 = new Web3(provider);
    this.chainId = chainId;
    this.initializeEnsPlugin();
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
      default:
        throw new Error(`Unsupported chain ID for ENS: ${this.chainId}`);
    }
    this.web3.registerPlugin(new EnsPlugin(chain));
  }

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
}
