"use client";
import { format } from "date-fns";
import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type UniswapDayData = {
  __typename: string;
  date: number;
  tvlUSD: string;
};
type FormattedData = {
  date: string;
  tvlUSD: number;
};

const chartConfig = {
  desktop: {
    label: "Total Value Locked",
    color: "#2e59d1",
  },
} satisfies ChartConfig;

type TSupportedChains = "Ethereum" | "Polygon" | "Base";

export function TVLData({ data }: { data: UniswapDayData[] }) {
  const [chain, setChain] = React.useState<TSupportedChains>("Ethereum");
  const formattedData: FormattedData[] = React.useMemo(() => {
    return data.map((item) => ({
      date: format(new Date(item.date * 1000), "yyyy-MM-dd"),
      tvlUSD: parseFloat(item.tvlUSD),
    }));
  }, [data]);

  const totalTVL = React.useMemo(
    () => formattedData.reduce((acc, curr) => acc + curr.tvlUSD, 0),
    [formattedData]
  );

  if (formattedData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Card className="shadow-none border-0 mx-2 my-4">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-2 sm:py-6">
          <CardTitle>TVL on Uniswarp</CardTitle>
          <CardDescription>
            Showing Total Value Locked for the last {formattedData.length} days
          </CardDescription>
          <CardDescription>Network: MATIC</CardDescription>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">Total TVL</span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              $
              {totalTVL.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formattedData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                className=""
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis
                tickFormatter={(value) => `$${(value / 1e6).toFixed(0)}M`}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="tvl"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                    // @ts-ignore
                    valueFormatter={(value: any) =>
                      `$${value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}`
                    }
                  />
                }
              />
              <Bar
                dataKey="tvlUSD"
                fill={`#2e59d1`}
                className="hover:bg-red-500 transition-all duration-300 ease-in-out hover:scale-95"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
