"use client";
import { format } from "date-fns";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Total Value Locked",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type TSupportedChains = "Ethereum" | "Polygon" | "Base";
type TGraphData = {
  date: number;
  tvl: number;
};

type TGraphDataFormatted = {
  date: string;
  tvl: number;
};

export function Component() {
  const [chain, setChain] = React.useState<TSupportedChains>("Ethereum");
  const [data, setData] = React.useState<TGraphDataFormatted[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchTvl = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.llama.fi/v2/historicalChainTvl/${chain}`
        );
        const data = await response.json();
        const sevenMonthsData = data.slice(2114, 2324);

        const groupedData: Record<string, TGraphDataFormatted> =
          sevenMonthsData.reduce(
            (acc: Record<string, TGraphDataFormatted>, item: TGraphData) => {
              const month = format(new Date(item.date * 1000), "dd MMMM");
              if (!acc[month]) {
                acc[month] = { date: month, tvl: 0 };
              }
              acc[month].tvl += item.tvl;
              return acc;
            },
            {}
          );
        const formattedData = Object.values(groupedData);
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

  return (
    <Card className="shadow-none border-0 ">
      <CardHeader>
        <CardTitle>{chain}</CardTitle>
        <CardDescription>
          TVL in DeFi on {chain} over the last 7 months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="tvl"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              className="h-96"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              February - September 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
