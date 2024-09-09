"use client";
import Image from "next/image";
import React from "react";
import wbtc from "../../../public/wbtc.svg";
import usdt from "../../../public/tether.svg";
import xaut from "../../../public/gold.svg";
import ckes from "../../../public/kes.webp";
import eth from "../../../public/wrapped-ether-weth-seeklogo.svg";
import link from "../../../public/link.svg";
import avax from "../../../public/avalanche.svg";
import op from "../../../public/optimism.svg";

function deposit() {
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
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
              <td>100</td>
              <td>10</td>
              <th className="flex items-center gap-3 text-[#2e59d1]">
                <button className="btn btn-ghost btn-sm">Deposit</button>
                <button className="btn btn-ghost btn-sm">Withdraw</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default deposit;
