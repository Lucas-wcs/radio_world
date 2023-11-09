import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import RadioPlayer from "./RadioPlayer";

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

  return (
    <div className="container-display-radio">
      <div className="search-feature">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="display_radios">
        {radiosRandom &&
          radiosRandom
            .filter((radio) =>
              radio.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((station, selectedCurrentStationIndex) => {
              return (
                <div className="space4" key={station.stationuuid}>
                  <div className="rond">
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setCurrentStationIndex(selectedCurrentStationIndex);
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
