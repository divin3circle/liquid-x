"use client";

import DashboardGraph from "@/components/app/dashboard/graph";
import TrendingPools from "@/components/app/dashboard/pools";
import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import React from "react";

function Dashboard() {
  return (
    <div className="h-screen w-full bg-[#ffff]">
      <DashboardNavbar />
      <div className="h-full">
        <DashboardGraph />
        <TrendingPools />
      </div>
    </div>
  );
}

export default Dashboard;
