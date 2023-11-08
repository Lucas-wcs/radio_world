import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import FilterSection from "./FilterSection";

function DisplayRadio({ radiosRandom }) {
  const [searchValue, setSearchValue] = useState("");
  const [styleSearchValue, setStyleSearchValue] = useState("");
  const [countrySearchValue, setCountrySearchValue] = useState("");
  return (
    <div className="container-display-radio">
      <div className="search-feature">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <FilterButton />
      </div>
      <FilterSection
        styleSearchValue={styleSearchValue}
        countrySearchValue={countrySearchValue}
        setStyleSearchValue={setStyleSearchValue}
        setCountrySearchValue={setCountrySearchValue}
      />
      <div className="display_radios">
        {radiosRandom &&
          radiosRandom
            .filter((radio) =>
              radio.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .filter((radio) =>
              radio.tags.toLowerCase().includes(styleSearchValue.toLowerCase())
            )
            .filter((radio) =>
              radio.country
                .toLowerCase()
                .includes(countrySearchValue.toLowerCase())
            )
            .map((station) => {
              return (
                <div className="space4">
                  <div className="rond">
                    <button
                      type="button"
                      key={station.stationuuid}
                      className="radio"
                    >
                      <img
                        src={station.favicon}
                        alt="favicon"
                        className="favicon"
                      />
                      <p>{station.name}</p>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

DisplayRadio.propTypes = {
  radiosRandom: PropTypes.arrayOf(
    PropTypes.shape({
      stationuuid: PropTypes.string.isRequired,
      favicon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplayRadio;
