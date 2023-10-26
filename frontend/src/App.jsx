import { useState } from "react";
// import FilterButton from "./components/FilterButton";
import FilterSection from "./components/FilterSection";
import SearchBar from "./components/SearchBar";
import "./sass/_app.scss";

// TODO: Replace this array by the API data
const radiosDataForTest = [
  {
    id: 1,
    name: "a",
    icon: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    name: "b",
    icon: "https://placekitten.com/300/300",
  },
  {
    id: 3,
    name: "c",
    icon: "https://loremflickr.com/300/300/lion",
  },
  {
    id: 4,
    name: "d",
    icon: "https://source.unsplash.com/random/300x300",
  },
  {
    id: 5,
    name: "e",
    icon: "https://loremflickr.com/300/300/books",
  },
  {
    id: 6,
    name: "f",
    icon: "https://loremflickr.com/300/300/mount",
  },
  {
    id: 7,
    name: "g",
    icon: "https://loremflickr.com/300/300/dog",
  },
  {
    id: 8,
    name: "h",
    icon: "https://loremflickr.com/300/300/car",
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <div className="search-feature">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* <FilterButton /> */}
      </div>
      <FilterSection />
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

export default App;
