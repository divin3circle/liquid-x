import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import QuickBorrow from "@/components/app/quick/quick-borrow";
import React from "react";

function Quick() {
  return (
    <div className="w-full">
      <DashboardNavbar />
      <div className="flex items-center justify-center h-screen">
        <QuickBorrow />
      </div>
    </div>
  );
}

export default Quick;
