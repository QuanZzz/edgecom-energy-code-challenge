import PropTypes from 'prop-types';

const DataTable = ({usersInfo}) => {
  if(!usersInfo) {
    return;
  }

  return (
    <table className="w-full hidden sm:table w-full my-4">
      <thead className="text-left">
        <tr>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <span className="break-all line-clamp-1">Name</span>
            </span>
          </th>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <span className="break-all line-clamp-1">Phone</span>
            </span>
          </th>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <span className="break-all line-clamp-1">Email</span>
            </span>
          </th>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <span className="break-all line-clamp-1">Created At</span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {usersInfo.map((u) => {
          const date = new Date(u.created_at);

          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short"
          });

          return(
            <tr key={u.created_at} className="border-b bg-white text-left">
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium text-gray-900 my-1 font-brand text-base">
                  {u.name}
                </div>
              </td>
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium text-gray-900 my-1 font-brand text-base">
                  {u.phone}
                </div>
              </td>
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium text-gray-900 my-1 font-brand text-base">
                  {u.email}
                </div>
              </td>
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium text-gray-900 my-1 font-brand text-base">
                  {formattedDate}
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

DataTable.propTypes = {
  usersInfo: PropTypes.array
}

export default DataTable;