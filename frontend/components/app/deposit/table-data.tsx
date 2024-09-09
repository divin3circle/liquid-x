import wbtc from "../../../public/wbtc.svg";
import usdt from "../../../public/tether.svg";
import xaut from "../../../public/gold.svg";
import ckes from "../../../public/kes.webp";
import eth from "../../../public/eth.svg";
import link from "../../../public/link.svg";

type Collateral = {
  asset: string;
  deposited: number;
  inWallet: number;
  symbol: string;
  actions: any; //TODO: type this
};

export const collaterals: Collateral[] = [
  {
    asset: "Wrapped Bitcoin",
    deposited: 100,
    inWallet: 10,
    symbol: "WBTC",
    actions: "Deposit",
  },
  {
    asset: "Tether",
    deposited: 100,
    inWallet: 10,
    symbol: "USDT",
    actions: "Deposit",
  },
  {
    asset: "Avaalanche",
    deposited: 100,
    inWallet: 10,
    symbol: "AVAX",
    actions: "Deposit",
  },
  {
    asset: "GOLD",
    deposited: 100,
    inWallet: 10,
    symbol: "XAUt",
    actions: "Deposit",
  },
  {
    asset: "Wrapped Ethereum",
    deposited: 100,
    inWallet: 10,
    symbol: "WETH",
    actions: "Deposit",
  },
  {
    asset: "Chainlink",
    deposited: 100,
    inWallet: 10,
    symbol: "LINK",
    actions: "Deposit",
  },
];
