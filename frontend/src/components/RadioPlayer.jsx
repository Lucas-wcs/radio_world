/* Function pour faire fonctionner la radio (play,pause, next,previous) */
import PropTypes from "prop-types";
import "../styles/_RadioPlayer.scss";

function RadioPlayer({
  stations,
  audioPlaying,
  currentStationIndex,
  toggleAudio,
  playNextStation,
  playPreviousStation,
}) {
  return (
    <div className="container-radio">
      <div className="container-global">
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
};

export default RadioPlayer;
