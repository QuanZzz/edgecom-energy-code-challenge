import PropTypes from 'prop-types';
import DarkModeCheckbox from './DarkModeCheckbox';

const TableHeader = ({label, isDark, setIsDark}) => {
  return (
    <div className="px-3 flex w-full items-center justify-between">
      <div className="text-xxl font-brand font-bold">{label}</div>
      <DarkModeCheckbox isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

TableHeader.propTypes = {
  label: PropTypes.string,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func
}

export default TableHeader;