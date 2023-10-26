import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayRadio() {
  const [radiosRandom, setRadiosRandom] = useState([]);

  useEffect(() => {
    console.info("hello");
    axios
      .get("https://de1.api.radio-browser.info/json/stations?limit=100")
      .then((res) => {
        if (
          res.data.favicon !== "" &&
          res.data.name !== "" &&
          res.data.serveruuid !== "" &&
          res.data.tags !== "" &&
          res.data.country !== ""
        ) {
          const randomRadios = [];
          for (let i = 0; i < 8; i += 1) {
            randomRadios.push(
              res.data[Math.floor(Math.random() * res.data.length)]
            );
          }
          setRadiosRandom(randomRadios);
        }
      });
  }, []);

  return (
    <div className="display_radio">
      {radiosRandom &&
        radiosRandom.map((station) => {
          return (
            <div key={station.stationuuid}>
              <img src={station.favicon} alt="favicon" />
              <p>{station.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayRadio;
