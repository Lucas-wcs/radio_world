import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

function NavBar({
  searchValue,
  setSearchValue,
  radiosRandom,
  isVisible,
  setIsVisible,
}) {
  return (
    <div className="navbar">
      <div className="container-logo">
        <img
          src="src/images/Radio_World.png"
          className="logoRW"
          alt="Radio World logo"
        />
      </div>
      {/* <img
        src="src/images/heart.png"
        className="favoriteButton"
        alt="favoriteButton"
      /> */}

      <div className="search-feature">
        <div className="Searchbar">
          <SearchBar
            radiosRandom={radiosRandom}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="container-filter">
          <FilterButton isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  searchValue: "",
  radiosRandom: [],
};

NavBar.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
  radiosRandom: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      favicon: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
  isVisible: PropTypes.number.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default NavBar;
