import PropTypes from 'prop-types';
import { ROWS_NUMBERS } from '../utils/constants/constants';

const RowSizeDropdown = ({setPageSize}) => {
  return(
    <div className="flex py-1">
      <label htmlFor="rowSizesDropdown">
        Rows number:
      </label>
      <select
        name="rowsNumbers"
        id="rowSizesDropdown"
        className="bg-transparent"
        onChange={(e) => setPageSize(e.target.value)}
      >
        <option value="">Please select row number</option>
        {ROWS_NUMBERS?.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  )
}

RowSizeDropdown.propTypes = {
  setPageSize: PropTypes.func
}

export default RowSizeDropdown;