import React from "react";
import TrendingPools from "@/components/app/dashboard/pools";
import { Component } from "@/components/app/dashboard/testgraph";
import DashboardNavbar from "@/components/app/navbar/ui-navbar";
import { createClient, gql } from "urql";
import { cacheExchange, fetchExchange } from "@urql/core";
import { TVLData } from "@/components/app/dashboard/tvl-data";

const client = createClient({
  url: `https://gateway.thegraph.com/api/${process.env.SUBGRAPH_API}/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm`,
  exchanges: [cacheExchange, fetchExchange],
});

const DATA_QUERY = gql`
  {
    uniswapDayDatas(first: 10, orderBy: date, orderDirection: desc) {
      date
      tvlUSD
    }
  }
`;

export default async function Dashboard() {
  //@ts-ignore
  const result = await client.query(DATA_QUERY).toPromise();

  if (result.stale) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (result.error) {
    return (
      <div>
        <p>Error: {result.error.message}</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-[#ffff]">
      <DashboardNavbar />
      <div className="h-full flex flex-col gap-4">
        {/* <DashboardGraph /> */}
        <TVLData data={result.data?.uniswapDayDatas} />
        {/* <Component /> */}
        <TrendingPools />
      </div>
    </div>
  );
}
