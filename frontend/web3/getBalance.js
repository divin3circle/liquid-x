import Web3 from "web3";
const NetworkInformation = require("../lib/network-information.json");
const ERC20MockABI = require("../../contracts/abi/ERC20Mock.json");

function getRpcUrl(chainId) {
  let rpcUrl;
  if (chainId == 80002) {
    rpcUrl = POLYGON_AMOY_RPC_URL;
  } else if (chainId == 11155420) {
    rpcUrl = OPTIMISM_SEPOLIA_RPC_URL;
  } else if (chainId == 84532) {
    rpcUrl = BASE_SEPOLIA_RPC_URL;
  }
  return rpcUrl;
}

function getProvider(chainId) {
  const rpcUrl = getRpcUrl(chainId);
  return new Web3(new Web3.providers.HttpProvider(rpcUrl));
}
async function getBalance(chainId, tokenSymbol, walletAddress) {
  try {
    const web3 = getProvider(chainId);
    const tokenInfo = NetworkInformation[chainId]["TOKEN"][tokenSymbol];
    const tokenAddress = tokenInfo.address;
    const tokenDecimals = tokenInfo.decimals;
    const tokenContract = new web3.eth.Contract(ERC20MockABI, tokenAddress);
    const balance = await tokenContract.methods.balanceOf(walletAddress).call();
    const balanceFormat = balance / 10 ** tokenDecimals;
    return balanceFormat.toString();
  } catch (error) {
    console.error(`Error fetching balance for ${tokenSymbol}:`, error);
    return "0";
  }
}

async function main() {
  const walletAddress = "0x57AB4e29d13E063D791Ec02116cef032314F787B";
  const chainId = 80002;
  const wbtcBalance = await getBalance(chainId, "WBTC", walletAddress);
  const wethBalance = await getBalance(chainId, "WETH", walletAddress);
  const linkBalance = await getBalance(chainId, "LINK", walletAddress);
  const avaxBalance = await getBalance(chainId, "AVAX", walletAddress);
  const ckesBalance = await getBalance(chainId, "CKES", walletAddress);
  const goldBalance = await getBalance(chainId, "XAUT", walletAddress);
  const opBalance = await getBalance(chainId, "OP", walletAddress);
}

module.exports = {
  getBalance,
};
