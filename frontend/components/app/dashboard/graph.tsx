"use Client";
import React, { useEffect } from "react";
import { format } from "date-fns";

type TSupportedChains = "Ethereum" | "Polygon" | "Base";
type TGraphData = {
  date: number;
  tvl: number;
};

type TGraphDataFormatted = {
  date: string;
  tvl: number;
};

function DashboardGraph() {
  const [chain, setChain] = React.useState<TSupportedChains>("Ethereum");
  const [data, setData] = React.useState<TGraphDataFormatted[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    const fetchTvl = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.llama.fi/v2/historicalChainTvl/${chain}`
        );
        const data = await response.json();
        const sevenMonthsData = data.slice(2114, 2324);
        const formattedData = sevenMonthsData.map((item: TGraphData) => {
          return {
            date: format(new Date(item.date * 1000), "dd-MM-yyyy"),
            tvl: item.tvl,
          };
        });
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTvl();
  }, [chain]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return <div>DashboardGraph</div>;
}

export default DashboardGraph;
