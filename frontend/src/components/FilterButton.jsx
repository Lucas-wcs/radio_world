import "../sass/_filterButton.scss";

const FilterButton = () => {
  return (
    <button className="filter-button">
      Filter
      <span className="icon-container">
        <img src="/src/assets/filterIcon.png" />
      </span>
    </button>
  );
};

export default FilterButton;
