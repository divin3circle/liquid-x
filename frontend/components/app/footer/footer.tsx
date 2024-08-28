import React from "react";
import polygon from "../../../public/polygon.svg";
import icp from "../../../public/icp.svg";
import eth from "../../../public/eth.svg";
import avalanche from "../../../public/avalanche.svg";
import optimism from "../../../public/optimism.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-neutral-100 to-white w-full">
      <footer className="">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Explore LiquidX Today
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Start defragmenting your DeFi journey with LiquidX today. Get
              started with a free account and experience unified liquidity
              management across multiple blockchains effortlessly.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded-full border border-primary-600 px-12 py-3 text-sm font-medium text-primary-600 hover:bg-indigo-600 hover:text-white ease-in transition-all duration-150"
            >
              Start Defragmenting
            </a>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>

            <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end items-center">
              <li>
                <a
                  href="https://www.polygon.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <Image src={polygon} alt="Polygon" width={25} height={25} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.avax.network/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <Image src={avalanche} alt="Polygon" width={25} height={25} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.optimism.io/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <Image src={optimism} alt="Polygon" width={25} height={25} />
                </a>
              </li>

              <li>
                <a
                  href="https://ethereum.org/en/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <Image src={eth} alt="Polygon" width={25} height={25} />
                </a>
              </li>

              <li>
                <a
                  href="https://internetcomputer.org/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <Image src={icp} alt="Polygon" width={25} height={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
