import classnames from 'classnames';
import PropTypes from 'prop-types';

const DataTableBaseComponent = ({ data, columns, setSortBy, isDark}) => {
  if(!data) {
    return;
  }

  return (
    <table className="w-full hidden sm:table w-full my-4">
      <thead className="text-left">
        <tr>
          {columns.map((column) => (
            <th 
              key={column.key} 
              className={classnames("p-3 font-bold text-base", column.columnClassname)}
            >
              <span className="inline-flex items-center flex-nowrap">
                <button onClick={() => setSortBy(column.key)}>
                  <span className="break-all line-clamp-1">{column.header}</span>
                </button>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={classnames("border-b bg-transparent text-left text-gray-900", {
                "text-white": isDark
              })}
            >
              {columns.map((column) => (
                <td 
                  key={column.key}
                  className={classnames("sm:w-3/12 pr-8 pl-3 py-3", column.columnClassname)}
                >
                  <div className="font-medium my-1 font-brand text-base">
                    {row[column.key]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

DataTableBaseComponent.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  setSortBy: PropTypes.func,
  isDark: PropTypes.bool
}

export default DataTableBaseComponent;