import React, { useState, useEffect } from "react";

const stations = [
  { name: "Station 1", source: "http://stream.bestfm.sk/128.mp3" },
  { name: "Station 2", source: "http://stream.funradio.sk:8000/fun128.mp3" },
  { name: "Station 3", source: "https://ais-sa2.cdnstream1.com/2447_192.mp3" },
];

/* Function pour faire fonctionner la radio (play,pause, next,previous) */

function RadioPlayer() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  };

  /* station suivante */

  const playNextStation = () => {
    if (currentStationIndex < stations.length - 1) {
      setCurrentStationIndex(currentStationIndex + 1);
    } else {
      setCurrentStationIndex(0);
    }
    setAudioPlaying(true);
  };

  /* station précédente */

  const playPreviousStation = () => {
    if (currentStationIndex > 0) {
      setCurrentStationIndex(currentStationIndex - 1);
    } else {
      setCurrentStationIndex(stations.length - 1);
    }
    setAudioPlaying(true);
  };

  /* Play-pause */

  useEffect(() => {
    const audioElement = document.getElementById("audioPlayer");
    if (audioElement) {
      audioElement.src = stations[currentStationIndex].source;
      if (audioPlaying) {
        audioElement.play();
      }
    }
  }, [currentStationIndex, audioPlaying]);

  return (
    <div>
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
        </div>
      </div>
      {/* Lecteur audio caché */}
      <audio
        id="audioPlayer"
        src={stations[currentStationIndex].source}
        autoPlay={audioPlaying}
        style={{ display: "none" }}
      >
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default RadioPlayer;
