import "../sass/_filterSection.scss";

function FilterSection() {
  function makeFilterSectionDisappear() {
    const filterSection = document.querySelector(".filter-section");
    filterSection.style.display = "none";
  }

  function toggleFilterCriteriaActiveState() {
    const filterCriteria = document.querySelectorAll(".filter-criteria");
    filterCriteria.forEach((criteria) => {
      criteria.addEventListener("click", () => {
        filterCriteria.forEach((oneCriteria) => {
          oneCriteria.classList.remove("is-active");
        });
        criteria.classList.add("is-active");
      });
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
          onClick={toggleFilterCriteriaActiveState}
          type="button"
          className="filter-criteria is-active"
        >
          <p className="criteria-item">Country</p>
        </button>
        <button
          onClick={toggleFilterCriteriaActiveState}
          type="button"
          className="filter-criteria"
        >
          <p className="criteria-item">Style</p>
        </button>
      </div>
      <div className="options">
        <button
          onClick={toggleOptionActiveState}
          type="button"
          className="option is-active"
        >
          India
        </button>
        <button
          onClick={toggleOptionActiveState}
          type="button"
          className="option"
        >
          China
        </button>
        <button
          onClick={toggleOptionActiveState}
          type="button"
          className="option"
        >
          Japan
        </button>
        <button
          onClick={toggleOptionActiveState}
          type="button"
          className="option"
        >
          Korea
        </button>
        <button
          onClick={toggleOptionActiveState}
          type="button"
          className="option"
        >
          Thailand
        </button>
        <button
          onClick={toggleOptionActiveState}
          type="button"
          className="option"
        >
          Vietnam
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
