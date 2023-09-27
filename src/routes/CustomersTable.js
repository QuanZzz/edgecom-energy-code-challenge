import DataTable from "../components/DataTable";
import { usersInfo, usersInfoColumns } from "../utils/constants/usersInfo";
import { CUSTOMERS_TABLE_ROWS_NUMBERS } from "../utils/constants/constants";

export default function CustomersTable() {
  return(
    <DataTable 
      header="Customers Information"
      initialData={usersInfo}
      columns={usersInfoColumns}
      rowsSizes={CUSTOMERS_TABLE_ROWS_NUMBERS}
    />
  )
}