import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import RadioPlayer from "./RadioPlayer";
import FilterButton from "./FilterButton";
import FilterSection from "./FilterSection";

function DisplayRadio({
  radiosRandom,
  toggleAudio,
  audioPlaying,
  playNextStation,
  playPreviousStation,
  currentStationIndex,
  setCurrentStationIndex,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
                <div className="space4" key={station.stationuuid}>
                  {console.info(station.stationuuid)}
                  <div className="rond">
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setCurrentStationIndex(currentStationIndex);
                      }}
                      type="button"
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
      {radiosRandom.length > 0 && openModal && (
        <RadioPlayer
          closeModal={setOpenModal}
          stations={radiosRandom}
          audioPlaying={audioPlaying}
          currentStationIndex={currentStationIndex}
          toggleAudio={toggleAudio}
          playNextStation={playNextStation}
          playPreviousStation={playPreviousStation}
          // favicon={radiosRandom.favicon}
          // name={radiosRandom.name}
        />
      )}
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
  audioPlaying: PropTypes.bool.isRequired,
  currentStationIndex: PropTypes.number.isRequired,
  toggleAudio: PropTypes.func.isRequired,
  playNextStation: PropTypes.func.isRequired,
  playPreviousStation: PropTypes.func.isRequired,
  setCurrentStationIndex: PropTypes.func.isRequired,
};

export default DisplayRadio;
