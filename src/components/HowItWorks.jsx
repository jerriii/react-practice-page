import PropTypes from "prop-types";
import images from "../assets/images";

const HowItWorks = ({ children }) => {
  return (
    <div
      className="how-it-works"
      style={{ backgroundImage: `url(${images.howItWorksBackground})` }}
    >
      {children}
    </div>
  );
};

HowItWorks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HowItWorks;
