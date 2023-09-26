import PropTypes from 'prop-types';

const DarkModeCheckbox = ({isDark, setIsDark}) => {
  return (
    <div className="flex items-center">
      <input 
        type="checkbox" 
        id="darkMode" 
        checked={isDark} 
        onChange={() => setIsDark(!isDark)} 
      />
      <label className="pl-1">Dark Mode</label>
    </div>
  );
}

DarkModeCheckbox.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func
}

export default DarkModeCheckbox;