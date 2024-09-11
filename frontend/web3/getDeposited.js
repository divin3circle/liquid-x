import Web3 from "web3";
import DepositorABI from "../abi/Depositor.json";
import MainRouterABI from "../abi/MainRouter.json";
import NetworkInformation from "../lib/network-information.json";
import { getProvider } from "./getBalance";

function getNameOfDecimals(decimals) {
  return decimals == 6 ? "mwei" : "ether";
}

async function getDepositedAmount(desChainId, tokenSymbol, walletAddress) {
  const provider = getProvider(desChainId);
  const web3 = new Web3(provider);

  const DEPOSITOR_ADDRESS = NetworkInformation[desChainId].DEPOSITOR_ADDRESS;
  const depositorContract = new web3.eth.Contract(
    DepositorABI,
    DEPOSITOR_ADDRESS
  );

  const tokenInfo = NetworkInformation[desChainId]["TOKEN"][tokenSymbol];
  const deposited = await depositorContract.methods
    .getDeposited(walletAddress, tokenInfo.address)
    .call();

  return web3.utils.fromWei(deposited, getNameOfDecimals(tokenInfo.decimals));
}

async function getDepositedValue(desChainId, tokenSymbol, walletAddress) {
  const provider = getProvider(11155420);
  const web3 = new Web3(provider);

  const MAIN_ROUTER_ADDRESS =
    NetworkInformation[desChainId]?.MAIN_ROUTER_ADDRESS?.trim();

  if (!MAIN_ROUTER_ADDRESS) {
    console.error(`Main Router address not found for chain ID ${desChainId}`);
    return "0";
  }

  console.log(`Using Main Router address: ${MAIN_ROUTER_ADDRESS}`);

  const mainRouterContract = new web3.eth.Contract(
    MainRouterABI,
    MAIN_ROUTER_ADDRESS
  );

  const CHAIN_SELECTOR = NetworkInformation[desChainId]?.CHAIN_SELECTOR;
  const tokenInfo = NetworkInformation[desChainId]?.["TOKEN"]?.[tokenSymbol];

  if (!CHAIN_SELECTOR || !tokenInfo) {
    console.error(
      `Chain selector or token info not found for chain ID ${desChainId} and token ${tokenSymbol}`
    );
    return "0";
  }

  try {
    const depositedAmount = await mainRouterContract.methods
      .getUserDepositedAmount(
        walletAddress.trim(),
        CHAIN_SELECTOR,
        tokenInfo.address.trim()
      )
      .call();
    const depositedValue = await mainRouterContract.methods
      .getUserCollateralValue(
        walletAddress.trim(),
        CHAIN_SELECTOR,
        tokenInfo.address.trim()
      )
      .call();
    const nameOfDecimals = getNameOfDecimals(tokenInfo.decimals);
    const depositedValueFormat = web3.utils.fromWei(
      depositedValue,
      nameOfDecimals
    );

    return depositedValueFormat;
  } catch (error) {
    console.error("Error in getDepositedValue:", error);
    return "0";
  }
}

async function getTotalDepositedValueOnChain(desChainId, walletAddress) {
  const provider = getProvider(11155420);
  const web3 = new Web3(provider);
  const MAIN_ROUTER_ADDRESS =
    NetworkInformation[desChainId].MAIN_ROUTER_ADDRESS;
  const mainRouterContract = new web3.eth.Contract(
    MainRouterABI,
    MAIN_ROUTER_ADDRESS
  );
  const CHAIN_SELECTOR = NetworkInformation[desChainId].CHAIN_SELECTOR;

  const { totalCollateral, totalMinted } = await mainRouterContract.methods
    .getUserOnChainInformation(walletAddress, CHAIN_SELECTOR)
    .call();
  const totalCollateralFormat = web3.utils.fromWei(totalCollateral, "ether");
  return totalCollateralFormat;
}

async function getTotalDepositedValueOverallChain(walletAddress) {
  const provider = getProvider(11155420);
  const web3 = new Web3(provider);

  const MAIN_ROUTER_ADDRESS =
    NetworkInformation[avalancheFujiChainId].MAIN_ROUTER_ADDRESS;
  const mainRouterContract = new web3.eth.Contract(
    MainRouterABI,
    MAIN_ROUTER_ADDRESS
  );

  const { totalCollateral, totalMinted } = await mainRouterContract.methods
    .getUserOverallInformation(walletAddress)
    .call();

  const totalCollateralFormat = web3.utils.fromWei(totalCollateral, "ether");
  return totalCollateralFormat;
}

async function main() {
  const walletAddress = "0x57AB4e29d13E063D791Ec02116cef032314F787B";
  const desChainId = 80002;
  const depositedAmountOnchain = await getDepositedAmount(
    desChainId,
    "WBTC",
    walletAddress
  );
  const depositedValueOnchain = await getDepositedValue(
    desChainId,
    "WBTC",
    walletAddress
  );
  const totalDepositedValueOnChain = await getTotalDepositedValueOnChain(
    desChainId,
    walletAddress
  );
  const totalDepositedValueOverallChain =
    await getTotalDepositedValueOverallChain(walletAddress);
}

main();
export {
  getDepositedAmount,
  getDepositedValue,
  getTotalDepositedValueOnChain,
  getTotalDepositedValueOverallChain,
};
