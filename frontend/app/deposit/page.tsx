import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import React from "react";
import Card from "../../components/app/deposit/card";
import CreditCard from "@/components/app/deposit/credit-card";
import DepositAssets from "@/components/app/deposit/deposit";

function Deposit() {
  return (
    <div className="w-full">
      <DashboardNavbar />
      <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">
        <div className="flex flex-col gap-10 md:ml-2 items-center justify-center flex-2">
          <Card />
          <CreditCard />
        </div>
        <div className="flex-1 mb-4">
          <DepositAssets />
        </div>
      </div>
    </div>
  );
}

export default Deposit;
