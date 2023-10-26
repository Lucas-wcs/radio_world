import { useState } from "react";
import SearchBar from "./SearchBar";

function DisplayRadio() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="search-feature">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* <FilterButton /> */}
      </div>
      {/* <FilterSection /> */}
      <div className="radios">
        {/* //TODO: replace the array by the API data */}
        {radiosDataForTest
          .filter((radio) =>
            radio.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((radio) => (
            <div className="radio" key={radio.id}>
              <img className="radio__icon" src={radio.icon} alt={radio.name} />
              <p className="radio__name">{radio.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DisplayRadio;
