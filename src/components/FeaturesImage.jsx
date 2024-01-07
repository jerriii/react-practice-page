import PropTypes from "prop-types";

const FeaturesImage = ({ images }) => {
  return (
    <div className="features-image">
      <img src={images.aboutImage} alt="about" />
    </div>
  );
};

FeaturesImage.propTypes = {
  images: PropTypes.object,
};
export default FeaturesImage;
