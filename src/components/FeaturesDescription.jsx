import PropTypes from "prop-types";

const FeaturesDescription = ({ children }) => {
  return <div className="features-description">{children}</div>;
};

FeaturesDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeaturesDescription;
