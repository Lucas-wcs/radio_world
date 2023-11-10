import propTypes from "prop-types";
import "../sass/_searchBar.scss";

function SearchBar({ searchValue, setSearchValue }) {
  function handleSearchBarChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="container-search-bar">
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="search"
          name="search-bar"
          placeholder="Search for a radio station by name"
          value={searchValue}
          onChange={handleSearchBarChange}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchValue: propTypes.string.isRequired,
  setSearchValue: propTypes.func.isRequired,
};

export default SearchBar;
