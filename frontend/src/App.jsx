import "./sass/_app.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DisplayRadio from "./components/DisplayRadio";

function App() {
  const [radiosRandom, setRadiosRandom] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://de1.api.radio-browser.info/json/stations?limit=4000")
      .then((res) => {
        const tabRadios = [];
        for (let i = 0; i < 200; i += 1) {
          const randomRadio =
            res.data[Math.floor(Math.random() * res.data.length)];
          if (
            randomRadio.favicon !== "" &&
            randomRadio.name !== "" &&
            randomRadio.stationuuid !== "" &&
            randomRadio.tags !== "" &&
            randomRadio.country !== "" &&
            randomRadio.codec === "MP3"
          ) {
            const verifName = randomRadio.name;
            const verifUUID = randomRadio.stationuuid;
            if (
              !tabRadios.find(({ stationuuid }) => stationuuid === verifUUID) &&
              !tabRadios.find(({ name }) => name === verifName)
            ) {
              tabRadios.push(randomRadio);
            } else {
              i -= 1;
            }
          } else {
            i -= 1;
          }
        }
        setRadiosRandom(tabRadios);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'API.",
          error
        );
        setIsLoading(false);
      });
  }, []);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  };

  const playNextStation = () => {
    if (currentStationIndex < radiosRandom.length - 1) {
      setCurrentStationIndex(currentStationIndex + 1);
    } else {
      setCurrentStationIndex(0);
    }
    setAudioPlaying(true);
  };

  const playPreviousStation = () => {
    if (currentStationIndex > 0) {
      setCurrentStationIndex(currentStationIndex - 1);
    } else {
      setCurrentStationIndex(radiosRandom.length - 1);
    }
    setAudioPlaying(true);
  };

  useEffect(() => {
    const audioElement = document.getElementById("audioPlayer");
    if (audioElement) {
      audioElement.src = radiosRandom[currentStationIndex].url;

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
      {isLoading && (
        <div>
          <img
            src="public\Radio_World.png"
            alt="logo"
            className="loadingLogo"
          />
        </div>
      )}
      <div>
        <DisplayRadio
          radiosRandom={radiosRandom}
          toggleAudio={toggleAudio}
          audioPlaying={audioPlaying}
          currentStationIndex={currentStationIndex}
          playPreviousStation={playPreviousStation}
          playNextStation={playNextStation}
          setCurrentStationIndex={setCurrentStationIndex}
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
