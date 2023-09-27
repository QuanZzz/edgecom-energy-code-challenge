import DataTable from "../components/DataTable";
import { cryptosInfo, cryptosInfoColumns } from "../utils/constants/cryptosInfo";
import { CRYPTO_TABLE_ROWS_NUMBERS } from "../utils/constants/constants";

export default function CryptosTable() {
  return (
    <DataTable
      header="Crypto Prices"
      initialData={cryptosInfo}
      columns={cryptosInfoColumns}
      rowsSizes={CRYPTO_TABLE_ROWS_NUMBERS}
    />
  )
}