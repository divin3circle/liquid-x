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
import { format, fromUnixTime } from "date-fns";
type Transfer = {
  value: string;
  transactionHash: string;
  to: string;
  id: string;
  from: string;
  blockTimestamp: string;
  blockNumber: string;
};

type TransfersData = {
  transfers: Transfer[];
};

const TableComponent = ({ data }: { data: TransfersData | undefined }) => {
  console.log(data);
  if (!data) {
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-ring loading-lg"></span>
    </div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold kanit-bold text-primary-500">
          Transfer History(DSC)
        </h1>
        <h1 className="text-sm font-bold px-4 kanit-bold bg-gray-100 rounded-md p-2 flex items-center justify-between gap-1">
          <span>Uniswarp</span>
          <FaArrowDown className="inline-block" size={14} />
        </h1>
      </div>
      <Table>
        <TableCaption>A list of recent DSC transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">txHash</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead className="text-right">Value(DSC)</TableHead>
            <TableHead className="text-right">Receiver</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.transfers.map((transfer) => {
            return (
              <TableRow key={transfer.id}>
                <TableCell className="font-medium">
                  {transfer.transactionHash.substring(0, 6)}...
                </TableCell>
                <TableCell>
                  {format(
                    fromUnixTime(parseInt(transfer.blockTimestamp)),
                    "dd MMM yyyy"
                  )}
                </TableCell>
                <TableCell>{transfer.from.substring(0, 16)}...</TableCell>
                <TableCell className="text-right">
                  {Number(transfer.value).toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {transfer.to.substring(0, 16)}
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
  url: ` https://api.studio.thegraph.com/query/88585/liquidx-adresses/version/latest`,
  exchanges: [cacheExchange, fetchExchange],
});

const DATA_QUERY = gql`
  {
    transfers(orderBy: blockTimestamp, orderDirection: desc) {
      value
      transactionHash
      to
      id
      from
      blockTimestamp
      blockNumber
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
