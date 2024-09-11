"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import wbtc from "../../../public/wbtc.svg";
import usdt from "../../../public/tether.svg";
import xaut from "../../../public/gold.svg";
import ckes from "../../../public/kes.webp";
import eth from "../../../public/wrapped-ether-weth-seeklogo.svg";
import link from "../../../public/link.svg";
import avax from "../../../public/avalanche.svg";
import op from "../../../public/optimism.svg";
import getBalance from "../../../web3/getBalance";
import NetworkInformation from "../../../lib/network-information.json";
import { getDepositedAmount } from "../../../web3/getDeposited.js";
//import { BlockchainInteractions } from "../../../web3/namespace";
import Web3Service from "../../../web3/web3Service";

function Deposit() {
  const [balances, setBalances] = useState<any>({});
  const [depositedBalances, setDepositedBalances] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const walletAddress = "0x57AB4e29d13E063D791Ec02116cef032314F787B";
  const chainId = 80002;
  const [ensName, setEnsName] = useState("");
  const web3Service = Web3Service;

  useEffect(() => {
    async function fetchBalances() {
      setLoading(true);
      const tokens = [
        "WBTC",
        "WETH",
        "LINK",
        "AVAX",
        "CKES",
        "XAUT",
        "USDT",
        "OP",
      ];
      const newBalances: any = {};
      for (const token of tokens) {
        const balance = await getBalance(chainId, token, walletAddress);
        newBalances[token] = balance;
      }
      setBalances(newBalances);
      // console.log(newBalances);
      setLoading(false);
    }
    fetchBalances();
  }, []);

  useEffect(() => {
    async function fetchDepositedBalances() {
      setLoading(true);
      const tokens = Object.keys(NetworkInformation[chainId].TOKEN);
      const newBalances: Record<string, string> = {};
      const newDepositedBalances: Record<string, string> = {};

      for (const token of tokens) {
        newBalances[token] = await getBalance(chainId, token, walletAddress);
        newDepositedBalances[token] = await getDepositedAmount(
          chainId,
          token,
          walletAddress
        );
      }

      setBalances(newBalances);
      setDepositedBalances(newDepositedBalances);
      setLoading(false);
    }
    fetchDepositedBalances();
  }, [walletAddress, chainId]);

  useEffect(() => {
    async function fetchEnsName() {
      if (walletAddress) {
        await web3Service.connect("mainnet"); // or whichever network you're using
        const name = await web3Service.getEnsName(walletAddress);
        setEnsName(name || "");
      }
    }
    fetchEnsName();
  }, [walletAddress]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-ring loading-md"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto w-full mt-4">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="md:text-lg text-base text-gray-700 border-none ">
              <th>Asset</th>
              <th>Deposited</th>
              <th>In Wallet</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={wbtc}
                        alt="wbtc"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Wrapped Bitcoin</div>
                    <div className="text-sm opacity-50">WBTC</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.WBTC ? depositedBalances.WBTC : "--"}</td>
              <td>{balances.WBTC ? balances.WBTC : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={usdt}
                        alt="usdt"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Tether USD</div>
                    <div className="text-sm opacity-50">USDT</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.USDT ? depositedBalances.USDT : "--"}</td>
              <td>{balances.USDT ? balances.USDT : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={xaut}
                        alt="xaut"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Gold</div>
                    <div className="text-sm opacity-50">XAUt</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.XAUT ? depositedBalances.XAUT : "--"}</td>
              <td>{balances.XAUT ? balances.XAUT : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={ckes}
                        alt="ckes"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Kenyan Shilling</div>
                    <div className="text-sm opacity-50">cKES</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.CKES ? depositedBalances.CKES : "--"}</td>
              <td>{balances.CKES ? balances.CKES : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 5 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask h-12 w-12">
                      <Image
                        src={eth}
                        alt="weth"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Wrapped Ethereum</div>
                    <div className="text-sm opacity-50">WETH</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.WETH ? depositedBalances.WETH : "--"}</td>
              <td>{balances.WETH ? balances.WETH : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 6 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={link}
                        alt="link"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Chainlink</div>
                    <div className="text-sm opacity-50">LINK</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.LINK ? depositedBalances.LINK : "--"}</td>
              <td>{balances.LINK ? balances.LINK : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 7 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={op}
                        alt="op"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Optimism</div>
                    <div className="text-sm opacity-50">OP</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.OP ? depositedBalances.OP : "--"}</td>
              <td>{balances.OP ? balances.OP : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
            {/* row 8 */}
            <tr className="border-none">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-full h-12 w-12">
                      <Image
                        src={avax}
                        alt="avax"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Avalanche</div>
                    <div className="text-sm opacity-50">AVAX</div>
                  </div>
                </div>
              </td>
              <td>{depositedBalances.AVAX ? depositedBalances.AVAX : "--"}</td>
              <td>{balances.AVAX ? balances.AVAX : "--"}</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <p>ENS Name: {ensName || "Not set"}</p>
    </div>
  );
}

export default Deposit;
