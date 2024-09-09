import React from "react";
import { Meteors } from "../../ui/meteors";
import { SelectScrollable } from "./borrow-select";

function BorrowCard() {
  return (
    <div className="w-full px-2">
      <div className=" w-full relative lg:max-w-xs">
        <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-xl" />
        <div className="relative shadow-lg bg-[#fcfcfc] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h1 className="kanit-bold text-xl">Borrow</h1>
            </div>
            <div className="">
              <SelectScrollable />
            </div>
          </div>

          <h1 className="font-bold text-base text-gray-500 mb-4 relative z-50 text-center my-2">
            Total amount borrowed on Polygon Amoy
          </h1>

          <h1 className="kanit-regular font-bold text-2xl relative z-50 text-center w-full my-2">
            $0.00
          </h1>

          <div className="flex justify-between items-center w-full mt-4">
            <button className="border px-4 py-1 rounded-lg hover:bg-[#2e59d1] kanit-regular text-sm hover:text-white transition-all duration-300 border-[#2e59d1] text-gray-500 ">
              Borrow
            </button>
            <button className="border px-4 py-1 rounded-lg hover:bg-[#2e59d1] kanit-regular text-sm hover:text-white transition-all duration-300 border-[#2e59d1] text-gray-500 ">
              Repay
            </button>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={5} />
        </div>
      </div>
    </div>
  );
}

export default BorrowCard;
