"use client";

import DashboardGraph from "@/components/app/dashboard/graph";
import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import React from "react";

function Dashboard() {
  return (
    <div className="w-full h-screen">
      <DashboardNavbar />
      <div>
        <DashboardGraph />
      </div>
    </div>
  );
}

export default Dashboard;
