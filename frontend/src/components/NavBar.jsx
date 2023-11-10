import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

function NavBar({
  searchValue,
  setSearchValue,
  styleSearchValue,
  countrySearchValue,
  radiosRandom,
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
            styleSearchValue={styleSearchValue}
            countrySearchValue={countrySearchValue}
          />
        </div>
        <div className="container-filter">
          <FilterButton />
        </div>
      </div>
      {/*
      <div className="logoRS">
        <div className="RS1">
          <img src="/twitter.png" alt="Twitter logo" />
          <img src="/instagram.png" alt="Insta logo" />
        </div>
        <div className="RS2">
          <img src="/Facebook.png" alt="Fb logo" />
          <img src="/courrier.png" alt="Contact logo" className="courrier" />
        </div>
      </div> */}
    </div>
  );
}

NavBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  styleSearchValue: PropTypes.string.isRequired,
  countrySearchValue: PropTypes.string.isRequired,
  radiosRandom: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      favicon: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
