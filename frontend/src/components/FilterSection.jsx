import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// TODO: refactor to use the API from an external file
// import { getCountryData } from "../services/countryData";
// import { getStyleData } from "../services/styleData";

function FilterSection({
  // styleSearchValue,
  // countrySearchValue,
  setStyleSearchValue,
  setCountrySearchValue,
}) {
  const [filterCriteriaButton, setFilterCriteriaButton] = useState(0);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataStyle, setDataStyle] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  function handleFilterCriteriaActiveState() {
    const filterCriteria = document.querySelectorAll(".filter-criteria");
    filterCriteria.forEach((criteria) => {
      criteria.addEventListener("click", () => {
        filterCriteria.forEach((oneCriteria) => {
          oneCriteria.classList.remove("is-active");
        });
        criteria.classList.add("is-active");
      });
      if (criteria.classList.contains("is-active")) {
        setFilterCriteriaButton(1);
      } else {
        setFilterCriteriaButton(0);
      }
    });
  }

  function handleClickOnOptionButton() {
    const clickedOptionButton = document.querySelectorAll(".option");
    clickedOptionButton.forEach((optionButton) => {
      optionButton.addEventListener("click", () => {
        if (filterCriteriaButton) {
          setCountrySearchValue(optionButton.textContent);
        } else {
          setStyleSearchValue(optionButton.textContent);
        }
      });
    });
    makeFilterSectionDisappear();
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
          className="filter-criteria is-active"
        >
          Style
        </button>
        <button
          onClick={handleFilterCriteriaActiveState}
          type="button"
          className="filter-criteria"
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
    </div>
  );
}

FilterSection.propTypes = {
  // styleSearchValue: PropTypes.string.isRequired,
  // countrySearchValue: PropTypes.string.isRequired,
  setStyleSearchValue: PropTypes.func.isRequired,
  setCountrySearchValue: PropTypes.func.isRequired,
};

export default FilterSection;
