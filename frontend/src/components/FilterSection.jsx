import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";


function FilterSection({ searchValue, setSearchValue, setStyleSearchValue, setCountrySearchValue }) {
  const [filterCriteriaButton, setFilterCriteriaButton] = useState(0);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataStyle, setDataStyle] = useState([]);

  function handleSearchBarChange(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://de1.api.radio-browser.info/json/countries?order=name")
      .then((response) => {
        setDataCountry(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  useEffect(() => {
    axios
      .get("https://de1.api.radio-browser.info/json/tags?order=stationcount")
      .then((response) => {
        setDataStyle(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  function makeFilterSectionDisappear() {
    const filterSection = document.querySelector(".filter-section");
    filterSection.style.display = "none";
  }

  function handleFilterCriteriaActiveState(e) {
    setFilterCriteriaButton(parseInt(e.target.value, 10));
  }

  function handleClickOnOptionButton(e) {
    if (filterCriteriaButton) {
      setCountrySearchValue(e.target.textContent);
    } else {
      setStyleSearchValue(e.target.textContent);
    }
  }

  function handleClickOnResetButton() {
    setSearchValue("");
    setCountrySearchValue("");
    setStyleSearchValue("");
  }

  return (
    <div className="filter-section">
      <button
        type="button"
        onClick={makeFilterSectionDisappear}
        className="close-icon-wrapper"
      >
        <img src="/src/assets/closeIcon.svg" alt="Close icon" />
      </button>
      <div className="filter-criteria-wrapper">
        <button
          onClick={handleFilterCriteriaActiveState}
          type="button"
          value={0}
          className={`filter-criteria ${!filterCriteriaButton && "is-active"}`}
        >
          Style
        </button>
        <button
          onClick={handleFilterCriteriaActiveState}
          type="button"
          className={`filter-criteria ${filterCriteriaButton && "is-active"}`}
          value={1}
        >
          Country
        </button>
      </div>
      <div className="filter-section-search-bar">
        <input
          type="search"
          name="filter-section-search-bar"
          placeholder="Search for criteria"
          value={searchValue}
          onChange={handleSearchBarChange}
        />
      </div>
      <div className="filter-options-wrapper">
        {filterCriteriaButton
          ? dataCountry
              .filter((country) =>
                country.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((country) => (
                <div className="options">
                  <button
                    onClick={handleClickOnOptionButton}
                    type="button"
                    className="option"
                  >
                    <p key={country.name}>{country.name}</p>
                  </button>
                </div>
              ))
          : dataStyle
              .filter((tag) =>
                tag.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((tag) => (
                <div className="options">
                  <button
                    onClick={handleClickOnOptionButton}
                    type="button"
                    className="option"
                  >
                    <p key={tag.name}>{tag.name}</p>
                  </button>
                </div>
              ))}
      </div>
      <div className="reset-button-wrapper">
        <button
          type="button"
          className="reset-button"
          onClick={handleClickOnResetButton}
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}

FilterSection.propTypes = {
  setStyleSearchValue: PropTypes.func.isRequired,
  setCountrySearchValue: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default FilterSection;
