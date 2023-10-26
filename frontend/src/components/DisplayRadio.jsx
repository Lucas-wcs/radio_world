import PropTypes from "prop-types";

function DisplayRadio({ radiosRandom }) {
  return (
    <div className="display_radios">
      {radiosRandom &&
        radiosRandom.map((station) => {
          return (
            <div key={station.stationuuid} className="radio">
              <img src={station.favicon} alt="favicon" className="favicon" />
              <p>{station.name}</p>
            </div>
          );
        })}
    </div>
  );
}

DisplayRadio.propTypes = {
  radiosRandom: PropTypes.arrayOf(
    PropTypes.shape({
      stationuuid: PropTypes.string.isRequired,
      favicon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplayRadio;
