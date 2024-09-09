import React from "react";
import { Meteors } from "../../ui/meteors";
import { CreditCardChart } from "./credit-chart";

function CreditCard() {
  return (
    <div className="w-full px-2">
      <div className=" w-full relative lg:max-w-xs">
        <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-xl" />
        <div className="relative shadow-lg bg-[#fcfcfc] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h1 className="kanit-bold text-xl">Credit Score</h1>
            </div>
            <div className="">
              <button className="border px-4 py-1 rounded-lg hover:bg-[#2e59d1] kanit-regular text-sm hover:text-white transition-all duration-300 border-[#2e59d1] text-gray-500 ">
                Calculate
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <CreditCardChart />
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={5} />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
