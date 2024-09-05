"use client";

import DashboardGraph from "@/components/app/dashboard/graph";
import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import React from "react";

function Dashboard() {
  return (
    <div className="h-screen w-full bg-[#ffff]">
      <DashboardNavbar />
      <div className="h-full">
        <DashboardGraph />
      </div>
    </div>
  );
}

export default Dashboard;
