const networkInfo = require("../lib/network-information.json");

export const NETWORKS = {
  BASE_SEPOLIA: {
    chainId: 84532,
    rpcUrl: process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL,
    name: "Base Sepolia",
  },
  POLYGON_AMOY: {
    chainId: 80002,
    rpcUrl: process.env.NEXT_PUBLIC_POLYGON_AMOY_RPC_URL,
    name: "Polygon Amoy",
  },
  OPTIMISM_SEPOLIA: {
    chainId: 11155420,
    rpcUrl: process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL,
    name: "Optimism Sepolia",
  },
};

export const CONTRACTS = networkInfo;
