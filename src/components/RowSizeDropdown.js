import PropTypes from 'prop-types';

const RowSizeDropdown = ({rowsSizes, setPageSize}) => {
  return(
    <div className="flex py-1">
      <label htmlFor="rowSizesDropdown">
        Rows number:
      </label>
      <select
        name="rowsNumbers"
        id="rowSizesDropdown"
        className="bg-transparent"
        onChange={(e) => setPageSize(parseInt(e.target.value))}
      >
        <option value="">Please select row number</option>
        {rowsSizes?.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  )
}

RowSizeDropdown.propTypes = {
  rowsSizes: PropTypes.array,
  setPageSize: PropTypes.func
}

export default RowSizeDropdown;