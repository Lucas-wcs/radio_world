import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

function DisplayRadio({ radiosRandom }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="display_radios">
      <div className="search-feature">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {radiosRandom &&
        radiosRandom
          .filter((radio) =>
            radio.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((station) => {
            return (
              <div key={station.stationuuid} className="radio">
                <img src={station.favicon} alt="favicon" className="favicon" />
                <p>{station.name}</p>
              </div>
            );
          })}
    </div>
  );
}

DisplayRadio.propTypes = {
  radiosRandom: PropTypes.arrayOf(
    PropTypes.shape({
      stationuuid: PropTypes.string.isRequired,
      favicon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplayRadio;
