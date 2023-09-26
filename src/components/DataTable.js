import classnames from 'classnames';
import PropTypes from 'prop-types';
import { PHONE, EMAIL_ALPHA_ASC, CREATED_AT_NEW_TO_OLD, NAME_ALPHA_ASC } from '../utils/constants/constants';

const DataTable = ({usersInfo, setSortBy, isDark}) => {
  if(!usersInfo) {
    return;
  }

  return (
    <table className="w-full hidden sm:table w-full my-4">
      <thead className="text-left">
        <tr>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <button onClick={() => setSortBy(NAME_ALPHA_ASC)}>
                <span className="break-all line-clamp-1">Name</span>
              </button>
            </span>
          </th>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <button onClick={() => setSortBy(PHONE)}>
              <span className="break-all line-clamp-1">Phone</span>
              </button>
            </span>
          </th>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <button onClick={() => setSortBy(EMAIL_ALPHA_ASC)}>
                <span className="break-all line-clamp-1">Email</span>
              </button>
            </span>
          </th>
          <th className="sm:w-3/12 p-3 font-bold text-base">
            <span className="inline-flex items-center flex-nowrap">
              <button onClick={() => setSortBy(CREATED_AT_NEW_TO_OLD)}>
                <span className="break-all line-clamp-1">Created At</span>
              </button>
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
            <tr 
              key={u.created_at} 
              className={classnames("border-b bg-transparent text-left text-gray-900", {
                "text-white": isDark
              })}
            >
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium my-1 font-brand text-base">
                  {u.name}
                </div>
              </td>
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium my-1 font-brand text-base">
                  {u.phone}
                </div>
              </td>
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium my-1 font-brand text-base">
                  {u.email}
                </div>
              </td>
              <td className="sm:w-3/12 pr-8 pl-3 py-3">
                <div className="font-medium my-1 font-brand text-base">
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
  usersInfo: PropTypes.array,
  setSortBy: PropTypes.func,
  isDark: PropTypes.bool
}

export default DataTable;