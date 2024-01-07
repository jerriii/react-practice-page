import PropTypes from "prop-types";

const HowItWorksImage = ({ images }) => {
  return (
    <div className="how-it-works-image">
      <img src={images.howItWorksForeground} alt="how it works" />
    </div>
  );
};

HowItWorksImage.propTypes = {
  images: PropTypes.object,
};

export default HowItWorksImage;
