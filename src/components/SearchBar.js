import PropTypes from 'prop-types';

const SearchBar = ({searchContent, setSearchContent}) => {
  return (
    <div className="flex items-center">
      <label htmlFor="searchBar">Search: </label>
      <input className='border w-60' type="search" placeholder='search by email, phone, name' value={searchContent} 
        onChange={(e) => setSearchContent(e.target.value)} />
    </div>
  );
}

SearchBar.propTypes = {
  searchContent: PropTypes.string,
  setSearchContent: PropTypes.func
}

export default SearchBar;