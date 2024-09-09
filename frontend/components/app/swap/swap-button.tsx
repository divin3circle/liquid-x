import React from "react";
import { SelectScrollable } from "./swap-select";
import { IoIosSwap } from "react-icons/io";
import { Input } from "./custom-input";

function SwapComponent() {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl p-4 rounded-xl w-full md:w-[80%] lg:w-[50%]">
      <h1 className="text-center text-2xl">
        Swap <span className="text-[#2e59d1] kanit-bold">XNES</span> across
        chains
      </h1>
      <div className="flex items-center justify-between w-full my-4">
        <div className="flex flex-col my-4">
          <h1 className="text-gray-500 kanit-semibold ">From</h1>
          <SelectScrollable />
        </div>
        <button className="bg-[#2e59d1] text-white px-4 py-2 rounded-md">
          <IoIosSwap />
        </button>
        <div className="flex flex-col my-4">
          <h1 className="text-gray-500 kanit-semibold ">To</h1>
          <SelectScrollable />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-[80%]">
        <Input placeholder="0.00 XNES" className="" />
      </div>
      <div className="flex items-center justify-center w-full md:w-[80%] my-8">
        <button className="bg-[#2e59d1] text-white px-4 py-2 rounded-md w-full">
          Swap
        </button>
      </div>
    </div>
  );
}

export default SwapComponent;
