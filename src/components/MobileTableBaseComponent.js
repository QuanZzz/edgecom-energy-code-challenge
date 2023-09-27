import classnames from 'classnames';
import PropTypes from 'prop-types';

const MobileTableBaseComponent = ({data, columns, isDark}) => {
  if(!data) {
    return;
  }

  return (
    <div className="max-w-md w-full sm:hidden bg-transparent my-4">
      {data.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={classnames("w-full flex flex-col border-b p-3 text-gray-900", {
              "text-white": isDark
            })}
          >
            {columns.map((column) => (
              <div 
                key={column.key} 
                className={classnames("font-medium my-1 font-bold font-brand text-base", 
                column.columnClassname)}
              >
                {row[column.key]}
              </div>
            ))
            }
          </div>
        )
      )}
    </div>
  )
}

MobileTableBaseComponent.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  isDark: PropTypes.bool
}
  
export default MobileTableBaseComponent;