import axios from "axios";
import "../sass/_filterSection.scss";
import { useState } from "react";

function FilterSection() {
  const [filterCriteriaButton, setFilterCriteriaButton] = useState(0);

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
      option.addEventListener("click", () => {
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
      {filterCriteriaButton ? (
        <div className="options">
          <button
            onClick={toggleOptionActiveState}
            type="button"
            className="option is-active"
          >
            {console.info(() =>
              axios
                .get(
                  "https://de1.api.radio-browser.info/json/countries?order=name"
                )
                .then((response) => response.data[0].name)
                .catch((error) => console.error(error))
            )}
          </button>
        </div>
      ) : (
        <div className="options">
          <button
            onClick={toggleOptionActiveState}
            type="button"
            className="option is-active"
          >
            Casual
          </button>
          <button
            onClick={toggleOptionActiveState}
            type="button"
            className="option"
          >
            Business
          </button>
          <button
            onClick={toggleOptionActiveState}
            type="button"
            className="option"
          >
            Formal
          </button>
          <button
            onClick={toggleOptionActiveState}
            type="button"
            className="option"
          >
            Party
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterSection;
