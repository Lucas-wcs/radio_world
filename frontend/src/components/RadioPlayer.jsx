/* Function pour faire fonctionner la radio (play,pause, next,previous) */
import PropTypes from "prop-types";
import React from "react";

function RadioPlayer({
  stations,
  audioPlaying,
  currentStationIndex,
  toggleAudio,
  playNextStation,
  playPreviousStation,
  closeModal,
}) {
  return (
    <div type="button" className="container-radio">
      <div type="button" className="int-content">
        <div className="container-animation">
          <div className="animation">
            <img
              src="./Cassette.png"
              alt="Cassette"
              className="c1"
              style={{
                animation: audioPlaying ? "loop 2s linear infinite" : "none",
              }}
            />
            <img
              src="./Cassette2.png"
              alt="Cassette2"
              className="c2"
              style={{
                animation: audioPlaying ? "loop 2s linear infinite" : "none",
              }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => closeModal(false)}
          className="button"
        >
          X
        </button>
        <div className="container-button">
          <div
            className="prevStation"
            onClick={playPreviousStation}
            aria-hidden="true"
            type="button"
          >
            <img src="/precedent.png" alt="precedent" />
          </div>
          <div className="playMusic" onClick={toggleAudio} aria-hidden="true">
            {audioPlaying ? (
              <img src="/pause.png" alt="Pause" />
            ) : (
              <img src="/play.png" alt="Play" />
            )}
          </div>
          <div
            className="nextStation"
            onClick={playNextStation}
            aria-hidden="true"
          >
            <img src="/suivant.png" alt="suivant" />
          </div>
          {/* <div
            className="btn" onclick={() => closeModal(false)}>
            X
          </div> */}
        </div>
      </div>
      {/* Lecteur audio caché */}
      <audio
        id="audioPlayer"
        src={stations[currentStationIndex].url}
        autoPlay={audioPlaying}
        style={{ display: "none" }}
      >
        <track kind="captions" />
      </audio>
    </div>
  );
}

RadioPlayer.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string.isRequired })
  ).isRequired,
  audioPlaying: PropTypes.bool.isRequired,
  currentStationIndex: PropTypes.number.isRequired,
  toggleAudio: PropTypes.func.isRequired,
  playNextStation: PropTypes.func.isRequired,
  playPreviousStation: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default RadioPlayer;
