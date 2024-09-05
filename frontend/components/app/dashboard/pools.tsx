import { useQuery } from "@apollo/client";
import client from "../../../lib/apolloClient";
import { GET_TRENDING_POOLS } from "../../../lib/queries";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

function TrendingPools() {
  const { loading, error, data } = useQuery(GET_TRENDING_POOLS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Trending Pools</h2>
      <ul>
        {data.pools.map(
          (pool: {
            id: Key | null | undefined;
            token0: {
              symbol:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            };
            token1: {
              symbol:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            };
            volumeUSD: string;
            totalValueLockedUSD: string;
          }) => (
            <li key={pool.id}>
              <strong>
                {pool.token0.symbol}/{pool.token1.symbol}
              </strong>
              <br />
              Volume: ${parseFloat(pool.volumeUSD).toFixed(2)}
              <br />
              Liquidity: ${parseFloat(pool.totalValueLockedUSD).toFixed(2)}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default TrendingPools;
