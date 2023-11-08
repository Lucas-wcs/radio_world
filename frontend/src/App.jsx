import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DisplayRadio from "./components/DisplayRadio";

function App() {
  const [radiosRandom, setRadiosRandom] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://de1.api.radio-browser.info/json/stations?limit=100")
      .then((res) => {
        const tabRadios = [];
        for (let i = 0; i < 16; i += 1) {
          const randomRadio =
            res.data[Math.floor(Math.random() * res.data.length)];
          if (
            randomRadio.favicon !== "" &&
            randomRadio.name !== "" &&
            randomRadio.stationuuid !== "" &&
            randomRadio.tags !== "" &&
            randomRadio.country !== ""
          ) {
            const verifUUID = randomRadio.stationuuid;
            if (
              !tabRadios.find(({ stationuuid }) => stationuuid === verifUUID)
            ) {
              tabRadios.push(randomRadio);
            } else {
              i -= 1;
            }
          } else {
            i -= 1;
          }
          setRadiosRandom(tabRadios);
        }
      });
  }, []);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  };

  /* station suivante */

  const playNextStation = () => {
    if (currentStationIndex < radiosRandom.length - 1) {
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
      setCurrentStationIndex(radiosRandom.length - 1);
    }
    setAudioPlaying(true);
  };

  /* Play-pause */

  useEffect(() => {
    const audioElement = document.getElementById("audioPlayer");
    if (audioElement) {
      audioElement.src = radiosRandom[currentStationIndex].url;
      console.warn("currentStationIndex : ", currentStationIndex);

      audioElement.addEventListener("canplay", () => {
        if (audioPlaying) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      });
    }
  }, [currentStationIndex, audioPlaying]);

  return (
    <div className="main">
      <NavBar />
      <DisplayRadio
        radiosRandom={radiosRandom}
        toggleAudio={toggleAudio}
        audioPlaying={audioPlaying}
        currentStationIndex={currentStationIndex}
        playPreviousStation={playPreviousStation}
        playNextStation={playNextStation}
      />
      <Footer />
    </div>
  );
}

export default App;
