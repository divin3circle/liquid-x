// app/page.tsx (Server Component)

import { createClient, gql } from "urql";
import { cacheExchange, fetchExchange } from "@urql/core";

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
};

type PoolsData = {
  pools: Pool[];
};

const ExampleComponent = ({ data }: { data: PoolsData | undefined }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const client = createClient({
  url: "https://gateway.thegraph.com/api/{api-key}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
  exchanges: [cacheExchange, fetchExchange],
});

const DATA_QUERY = gql`
  {
    pools(orderBy: volumeUSD, orderDirection: desc, first: 10) {
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
      <ExampleComponent data={result.data} />
    </div>
  );
}
