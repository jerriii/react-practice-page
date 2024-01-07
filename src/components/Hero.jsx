import { PropTypes } from "prop-types";
import "../App.css";

const Hero = ({ children, images }) => {
  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${images.navbarImage})`,
      }}
    >
      {children}
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  images: PropTypes.object,
};

export default Hero;
