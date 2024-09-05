"use Client";
import { format } from "date-fns";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import eth from "../../../public/eth.svg";
import bsc from "../../../public/base.svg";
import pol from "../../../public/polygon.svg";
import Image from "next/image";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TSupportedChains = "Ethereum" | "Polygon" | "Base";
type TGraphData = {
  date: number;
  tvl: number;
};

type TGraphDataFormatted = {
  date: string;
  tvl: number;
};

const chartConfig = {
  desktop: {
    label: "Total Value Locked",
    color: "#f5b700",
  },
} satisfies ChartConfig;

//https://api.llama.fi/v2/historicalChainTvl/Polygon

function DashboardGraph() {
  const [chain, setChain] = React.useState<TSupportedChains>("Ethereum");
  const [data, setData] = React.useState<TGraphDataFormatted[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const description = `The total value locked (TVL) in DeFi on ${chain} over the last 7 months.`;

  React.useEffect(() => {
    const fetchTvl = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.llama.fi/v2/historicalChainTvl/${chain}`
        );
        const data = await response.json();
        const sevenMonthsData = data.slice(2114, 2324);
        console.log(sevenMonthsData);

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
    <Card className="md:mx-2">
      <CardHeader>
        <CardTitle className="md:w-[30%]">
          <Select>
            <SelectTrigger className="text-gray-500">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <Image src={eth} alt="ethereum" width={10} height={10} />
                  <h1>Ethereum</h1>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ethereum" className="">
                <div className="flex items-center gap-2">
                  <Image src={eth} alt="ethereum" width={10} height={10} />
                  <h1>Ethereum</h1>
                </div>
              </SelectItem>
              <SelectItem value="bsc">
                <div className="flex items-center gap-2">
                  <Image src={bsc} alt="base" width={10} height={10} />
                  <h1>Base</h1>
                </div>
              </SelectItem>
              <SelectItem value="polygon">
                <div className="flex items-center gap-2">
                  <Image src={pol} alt="polygon" width={10} height={10} />
                  <h1>Polygon</h1>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
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

export default DashboardGraph;
