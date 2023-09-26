import PropTypes from 'prop-types';

const SortDropdown = ({setSortBy, columns}) => {
  return(
    <div className="flex sm:hidden py-1">
      <label htmlFor="sortByDropdown">
        Sort by:
      </label>
      <select
        name="sortBy"
        id="sortByDropdown"
        className="bg-transparent"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Please select an option</option>
        {columns?.map((column) => (
          <option key={column.key} value={column.key}>
            {column.header}
          </option>
        ))}
      </select>
    </div>
  )
}

SortDropdown.propTypes = {
  setSortBy: PropTypes.func,
  columns: PropTypes.array
}

export default SortDropdown;