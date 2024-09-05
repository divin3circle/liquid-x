import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { createClient, gql } from "urql";
import { cacheExchange, fetchExchange } from "@urql/core";
import { FaArrowDown } from "react-icons/fa6";

type Pool = {
  id: string;
  token0: {
    symbol: string;
    name: string;
  };
  token1: {
    symbol: string;
    name: string;
  };
  volumeUSD: string;
  totalValueLockedUSD: string;
  liquidity: string;
  feeTier: string;
  txCount: string;
};

type PoolsData = {
  pools: Pool[];
};

const TableComponent = ({ data }: { data: PoolsData | undefined }) => {
  if (!data) {
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-ring loading-lg"></span>
    </div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold kanit-bold text-primary-500">
          Trending Pools
        </h1>
        <h1 className="text-sm font-bold px-4 kanit-bold bg-gray-100 rounded-md p-2 flex items-center justify-between gap-1">
          <span>Uniswarp</span>
          <FaArrowDown className="inline-block" size={14} />
        </h1>
      </div>
      <Table>
        <TableCaption>A list of trending pools on Uniswarp.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Symbol</TableHead>
            <TableHead>Volume(USD)</TableHead>
            <TableHead>Liquidity(USD)</TableHead>
            <TableHead className="text-right">Transactions</TableHead>
            <TableHead className="text-right">TVL(USD)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.pools.map((pool) => {
            const volumeInUSDBillions = (
              parseFloat(pool.volumeUSD) / 1e9
            ).toFixed(2);
            const liquidityInUSDBillions = (
              parseFloat(pool.liquidity) / 1e12
            ).toFixed(2);
            const tvlInUSDBillions = (
              parseFloat(pool.totalValueLockedUSD) / 1e6
            ).toFixed(2);
            return (
              <TableRow key={pool.id}>
                <TableCell className="font-medium">
                  {pool.token0.symbol} / {pool.token1.symbol}
                </TableCell>
                <TableCell>{volumeInUSDBillions} B</TableCell>
                <TableCell>{liquidityInUSDBillions} T</TableCell>
                <TableCell className="text-right">
                  {Number(pool.txCount).toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {tvlInUSDBillions} M
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

const client = createClient({
  url: `https://gateway.thegraph.com/api/${process.env.SUBGRAPH_API}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
  exchanges: [cacheExchange, fetchExchange],
});

const DATA_QUERY = gql`
  {
    pools(orderBy: volumeUSD, orderDirection: desc, first: 3) {
      id
      token0 {
        symbol
        name
      }
      token1 {
        symbol
        name
      }
      volumeUSD
      totalValueLockedUSD
      liquidity
      feeTier
      txCount
    }
  }
`;

export default async function TrendingPools() {
  const result = await client.query(DATA_QUERY, {}).toPromise();

  if (result.error) {
    return (
      <div>
        <p>Error: {result.error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <TableComponent data={result.data} />
    </div>
  );
}
