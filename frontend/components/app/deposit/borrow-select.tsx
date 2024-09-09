import * as React from "react";
import pol from "../../../public/polygon.svg";
import base from "../../../public/base.svg";
import op from "../../../public/optimism.svg";
import ethereum from "../../../public/eth.svg";

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

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[150px] border-[.5px] border-gray-300">
        <SelectValue
          placeholder="Chain"
          className="placeholder:text-gray-500"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est" className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Image src={ethereum} alt="ethereum" width={16} height={16} />
              <p>Ethereum</p>
            </div>
          </SelectItem>
          <SelectItem value="cst">
            <div className="flex items-center gap-2">
              <Image src={pol} alt="ethereum" width={16} height={16} />
              <p>Polygon Amoy</p>
            </div>
          </SelectItem>
          <SelectItem value="mst">
            <div className="flex items-center gap-2">
              <Image src={base} alt="ethereum" width={16} height={16} />
              <p>Base Sepolia</p>
            </div>
          </SelectItem>
          <SelectItem value="pst">
            <div className="flex items-center gap-2">
              <Image src={op} alt="ethereum" width={16} height={16} />
              <p>Optimism Sepolia</p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
