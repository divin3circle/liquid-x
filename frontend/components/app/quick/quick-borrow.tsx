import React from "react";
import { QuickScrollable } from "./quick-select";
import { IoIosSwap } from "react-icons/io";
import { Input } from "./quick-input";
import { FaCircle } from "react-icons/fa6";

function QuickBorrow() {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl p-4 rounded-xl w-full md:w-[80%] lg:w-[50%]">
      <h1 className="text-center text-2xl">
        Borrow <span className="text-[#2e59d1] kanit-bold">XNES</span> across
        chains
      </h1>
      <div className="flex items-center justify-between w-full my-4">
        <div className="flex flex-col my-4">
          <h1 className="text-gray-500 kanit-semibold ">Borrow</h1>
          <QuickScrollable />
        </div>
        <button className="bg-[#2e59d1] text-white px-4 py-2 rounded-md">
          <IoIosSwap />
        </button>
        <div className="flex flex-col my-4">
          <h1 className="text-gray-500 kanit-semibold ">Deposit</h1>
          <QuickScrollable />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <Input placeholder="0.00 XNES" className="" />
        <button className="bg-transparent text-white px-4 py-2 rounded-full">
          <FaCircle color="#2e59d1" />
        </button>
        <Input placeholder="0.00 POL" className="" />
      </div>
      <div className="flex items-center justify-center w-full md:w-[80%] my-8">
        <button className="bg-[#2e59d1] text-white px-4 py-2 rounded-md w-full">
          Borrow
        </button>
      </div>
    </div>
  );
}

export default QuickBorrow;
