function FilterButton() {
  // function makeFilterSectionAppear(e) {
  //   e.target.style.display = "flex";
  // }
  function makeFilterSectionAppear() {
    const filterSection = document.querySelector(".filter-section");
    filterSection.style.display = "flex";
  }

  return (
    <button
      onClick={makeFilterSectionAppear}
      type="button"
      className="filter-button"
    >
      Filter
      <img src="/src/assets/filterIcon.png" alt="Filter icon" />
    </button>
  );
}

export default FilterButton;
