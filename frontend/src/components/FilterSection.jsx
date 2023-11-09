import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getDataCountry from "../services/countryData";
import getDataStyle from "../services/styleData";

function FilterSection({
  setStyleSearchValue,
  setCountrySearchValue,
  isVisible,
}) {
  const [filterCriteriaButton, setFilterCriteriaButton] = useState(0);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataStyle, setDataStyle] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function handleSearchBarChange(event) {
    setSearchValue(event.target.value);
  }

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

  useEffect(() => {
    getDataStyle()
      .then((styleData) => setDataStyle(styleData))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getDataCountry()
      .then((countryData) => setDataCountry(countryData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={`filter-section ${isVisible && "is-visible"}`}>
      <button
        type="button"
        onClick={makeFilterSectionDisappear}
        className="close-icon-wrapper"
      >
        <img src="/src/assets/closeIcon.svg" alt="Close icon" />
      </button>
      <div className="filter-criteria-wrapper">
        <button
          type="button"
          onClick={handleFilterCriteriaActiveState}
          className={`filter-criteria ${!filterCriteriaButton && "is-active"}`}
          value={0}
        >
          Style
        </button>
        <button
          type="button"
          onClick={handleFilterCriteriaActiveState}
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
                    <p>{country.name}</p>
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
                    <p>{tag.name}</p>
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
  isVisible: PropTypes.bool.isRequired,
};

export default FilterSection;
