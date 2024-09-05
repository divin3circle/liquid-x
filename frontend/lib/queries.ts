import { gql } from "@apollo/client";

export const GET_TRENDING_POOLS = gql`
  {
    pools(orderBy: volumeUSD, orderDirection: desc, first: 5) {
      id
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      volumeUSD
      totalValueLockedUSD
    }
  }
`;
