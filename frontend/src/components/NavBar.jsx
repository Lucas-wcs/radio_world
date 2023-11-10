import React from "react";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

function NavBar({searchValue, setSearchValue, styleSearchValue, countrySearchValue, radiosRandom}) {
  return (
    <div className="navbar">
      <div className="container-logo">
        <img
          src="src/images/Radio_World.png"
          className="logoRW"
          alt="Radio World logo"
        />
      </div>
      <div className="search-feature">
        <div className="Searchbar">
          <SearchBar radiosRandom={radiosRandom} searchValue={searchValue} setSearchValue={setSearchValue} styleSearchValue={styleSearchValue} countrySearchValue={countrySearchValue}/>
        </div>
        <div className="container-filter">
          <FilterButton/>
        </div>
      </div>
      <div className="logoRS">
        <div className="RS1">
          <img src="/twitter.png" alt="Twitter logo" />
          <img src="/instagram.png" alt="Insta logo" />
        </div>
        <div className="RS2">
          <img src="/Facebook.png" alt="Fb logo" />
          <img src="/courrier.png" alt="Contact logo" className="courrier" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
