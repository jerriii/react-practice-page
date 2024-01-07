import PropTypes from "prop-types";

const FeaturesContent = ({ images }) => {
  return (
    <>
      <div className="features-content">
        <img src={images.featuresImage1} alt="#" />
        <div className="features-info">
          <h1>Easy To Customize</h1>
          <p>
            Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija
            Lorem Ipsum is de stan.
          </p>
        </div>
      </div>
      <div className="features-content">
        <img src={images.featuresImage2} alt="#" />
        <div className="features-info">
          <h1>Awesome Design</h1>
          <p>
            Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija
            Lorem Ipsum is de stan.
          </p>
        </div>
      </div>
      <div className="features-content">
        <img src={images.featuresImage3} alt="#" />
        <div className="features-info">
          <h1>Easy To Use</h1>
          <p>
            Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija
            Lorem Ipsum is de stan.
          </p>
        </div>
      </div>
    </>
  );
};

FeaturesContent.propTypes = {
  images: PropTypes.object,
};

export default FeaturesContent;
