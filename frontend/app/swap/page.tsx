import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import SwapComponent from "@/components/app/swap/swap-button";
import React from "react";

function Swap() {
  return (
    <div className="w-full">
      <DashboardNavbar />
      <div className="flex items-center justify-center h-screen">
        <SwapComponent />
      </div>
    </div>
  );
}

export default Swap;
