import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import React from "react";
import Card from "../../components/app/deposit/card";
import CreditCard from "@/components/app/deposit/credit-card";
import DepositAssets from "@/components/app/deposit/deposit";

function Deposit() {
  return (
    <div className="w-full">
      <DashboardNavbar />
      <div className="flex flex-col gap-2 md:ml-2 items-center justify-center">
        <Card />
        <CreditCard />
      </div>
      <DepositAssets />
    </div>
  );
}

export default Deposit;
