import { useState, useEffect } from "react";
import axios from "axios";
// TODO: refactor to use the API from an external file
// import { getCountryData } from "../services/countryData";
// import { getStyleData } from "../services/styleData";

function FilterSection() {
  const [filterCriteriaButton, setFilterCriteriaButton] = useState(0);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataStyle, setDataStyle] = useState([]);

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

  function toggleOptionActiveState() {
    const filterSection = document.querySelector(".filter-section");
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("mousedown", () => {
        options.forEach((oneOption) => {
          oneOption.classList.remove("is-active");
        });
        option.classList.add("is-active");
        filterSection.style.display = "none";
      });
    });
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
        />
      </div>
      <div className="filter-options-wrapper">
        {filterCriteriaButton
          ? dataCountry.map((country) => (
              <div className="options">
                <button
                  onClick={toggleOptionActiveState}
                  type="button"
                  className="option"
                >
                  <p key={country.name}>{country.name}</p>
                </button>
              </div>
            ))
          : dataStyle.map((tag) => (
              <div className="options">
                <button
                  onClick={toggleOptionActiveState}
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

export default FilterSection;
