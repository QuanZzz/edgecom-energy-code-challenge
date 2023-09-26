import PropTypes from 'prop-types';

const SearchBar = ({searchContent, setSearchContent}) => {
  return (
    <div className="flex items-center py-1">
      <label className='pr-1' htmlFor="searchBar">Search: </label>
      <input 
        className="border w-60 pl-1 bg-transparent" 
        type="search" 
        placeholder="Search for..." 
        value={searchContent} 
        onChange={(e) => setSearchContent(e.target.value)} />
    </div>
  );
}

SearchBar.propTypes = {
  searchContent: PropTypes.string,
  setSearchContent: PropTypes.func
}

export default SearchBar;