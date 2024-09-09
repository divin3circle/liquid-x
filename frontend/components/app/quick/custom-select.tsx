import * as React from "react";
import pol from "../../../public/polygon.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import wbtc from "../../../public/wbtc.svg";
import usdt from "../../../public/tether.svg";
import xaut from "../../../public/gold.svg";
import ckes from "../../../public/kes.webp";
import eth from "../../../public/wrapped-ether-weth-seeklogo.svg";
import link from "../../../public/link.svg";
import avax from "../../../public/avalanche.svg";

export function CustomSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[50px] md:w-[70px] border-none shadow-none border-gray-200">
        <SelectValue
          placeholder="Token"
          className="placeholder:text-gray-500 placeholder:text-[0.2rem]"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est" className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Image src={wbtc} alt="wbtc" width={16} height={16} />
              <p className="text-base">WBTC</p>
            </div>
          </SelectItem>
          <SelectItem value="cst">
            <div className="flex items-center gap-2">
              <Image src={eth} alt="eth" width={16} height={16} />
              <p className="text-base">WETH</p>
            </div>
          </SelectItem>
          <SelectItem value="mst">
            <div className="flex items-center gap-2">
              <Image src={usdt} alt="base" width={16} height={16} />
              <p className="text-base">USDT</p>
            </div>
          </SelectItem>
          <SelectItem value="pst">
            <div className="flex items-center gap-2">
              <Image src={xaut} alt="gold" width={16} height={16} />
              <p className="text-base">XAUt</p>
            </div>
          </SelectItem>
          <SelectItem value="ast">
            <div className="flex items-center gap-2">
              <Image src={link} alt="link" width={16} height={16} />
              <p className="text-base">LINK</p>
            </div>
          </SelectItem>
          <SelectItem value="kst">
            <div className="flex items-center gap-2">
              <Image src={ckes} alt="ckes" width={16} height={16} />
              <p className="text-base">cKES</p>
            </div>
          </SelectItem>
          <SelectItem value="avst">
            <div className="flex items-center gap-2">
              <Image src={avax} alt="link" width={16} height={16} />
              <p className="text-base">AVAX</p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
