import PropTypes from "prop-types";

const BestFeaturesCardContainer = ({ children }) => {
  return <div className="best-features-card-container">{children}</div>;
};

BestFeaturesCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BestFeaturesCardContainer;
