import { PropTypes } from "prop-types";
const Features = ({ children }) => {
  return <div className="features">{children}</div>;
};

Features.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Features;
