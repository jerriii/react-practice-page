import PropTypes from "prop-types";

const Stats = ({ children, images }) => {
  return (
    <div
      className="stats color-white"
      style={{ backgroundImage: `url(${images.statsBackground})` }}
    >
      {children}
    </div>
  );
};

Stats.propTypes = {
  children: PropTypes.node.isRequired,
  images: PropTypes.object,
};

export default Stats;
