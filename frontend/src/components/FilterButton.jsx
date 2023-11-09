// import PropTypes from "prop-types";

function FilterButton(/* { isVisible, setIsVisible } */) {
  // function makeFilterSectionAppear(e) {
  //   e.target.style.display = "flex";
  // }
  function makeFilterSectionAppear() {
    const filterSection = document.querySelector(".filter-section");
    filterSection.style.display = "flex";
  }

  // function toggleVisibility() {
  //   setIsVisible(!isVisible);
  // }

  function handleClickOnFilterButton() {
    // toggleVisibility();
    makeFilterSectionAppear();
  }

  return (
    <button
      onClick={handleClickOnFilterButton}
      type="button"
      className="filter-button"
    >
      Filter
      <img src="/src/assets/filterIcon.png" alt="Filter icon" />
    </button>
  );
}

// FilterButton.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
//   setIsVisible: PropTypes.func.isRequired,
// };

export default FilterButton;
