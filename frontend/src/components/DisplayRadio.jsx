import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayRadio() {
  const [radiosRandom, setRadiosRandom] = useState([]);

  useEffect(() => {
    axios
      .get("https://de1.api.radio-browser.info/json/stations?limit=100")
      .then((res) => {
        const tabRadios = [];
        for (let i = 0; i < 8; i += 1) {
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

  return (
    <div className="display_radios">
      {radiosRandom &&
        radiosRandom.map((station) => {
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

export default DisplayRadio;
