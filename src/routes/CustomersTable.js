import { useEffect, useMemo, useState } from "react";
import MobileTale from "../components/MobileTable"
import { usersInfo } from "../utils/constants/usersInfo"
import Pagination from "../components/pagination/Pagination";
import DataTable from "../components/DataTable";
import RowSizeDropdown from "../components/RowSizeDropdown";
import { PAGE_SIZE, PHONE, EMAIL_ALPHA_ASC, CREATED_AT_NEW_TO_OLD } from "../utils/constants/constants";
import SortDropdown from "../components/SortDropdown";

const INITIAL_USERS_INFO = usersInfo;

export default function CustomersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [sortBy, setSortBy] = useState(null);
  const [displayedUsers, setDisplayedUsers] = useState(null);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return INITIAL_USERS_INFO.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  useEffect(() => {
    let currentPageUsers = [...currentTableData];

    if(sortBy === PHONE) {
      currentPageUsers.sort((a, b) => a.phone.localeCompare(b.phone));
    }else if(sortBy === EMAIL_ALPHA_ASC) {
      currentPageUsers.sort((a, b) => a.email.localeCompare(b.email));
    }else if(sortBy === CREATED_AT_NEW_TO_OLD) {
      currentPageUsers.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA - dateB;
      });
    }else {
      currentPageUsers.sort((a, b) => a.name.localeCompare(b.name));
    }

    setDisplayedUsers(currentPageUsers);
  }, [currentTableData, sortBy])

  return(
    <div className="h-full w-full flex flex-col items-center text-xxl p-4">
      <div className="text-xxl font-brand font-bold">Customers Information</div>
      <div className="pl-3 w-full flex flex-col items-left">
        <RowSizeDropdown setPageSize={setPageSize} />
        <SortDropdown setSortBy={setSortBy} />
      </div>
      <MobileTale usersInfo={displayedUsers} />
      <DataTable usersInfo={displayedUsers} setSortBy={setSortBy} />
      <Pagination 
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={INITIAL_USERS_INFO.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}