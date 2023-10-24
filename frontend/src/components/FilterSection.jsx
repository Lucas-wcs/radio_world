import "../sass/_filterSection.scss";

const FilterSection = () => {
  return (
    <div className="filter-section">
      <div className="close-icon-wrapper">
        <img src="/src/assets/closeIcon.svg" alt="Close icon" />
      </div>
      <div className="filter-criteria-wrapper">
        <div className="filter-criteria">
          <p className="criteria-item">Country</p>
        </div>
        <div className="filter-criteria">
          <p className="criteria-item">Style</p>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <p className="option-item">India</p>
        </div>
        <div className="option">
          <p className="option-item">China</p>
        </div>
        <div className="option">
          <p className="option-item">Japan</p>
        </div>
        <div className="option">
          <p className="option-item">Korea</p>
        </div>
        <div className="option">
          <p className="option-item">Thailand</p>
        </div>
        <div className="option">
          <p className="option-item">Vietnam</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
