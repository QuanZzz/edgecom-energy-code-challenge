import PropTypes from 'prop-types';
import { SORT_BY } from '../utils/constants/constants';

const SortDropdown = ({setSortBy}) => {
  return(
    <div className="flex">
      <label htmlFor="sortByDropdown">
        Sort by:
      </label>
      <select
        name="sortBy"
        id="sortByDropdown"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Please select an option</option>
        {SORT_BY?.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  )
}

SortDropdown.propTypes = {
  setSortBy: PropTypes.func
}

export default SortDropdown;