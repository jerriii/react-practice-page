import PropTypes from "prop-types";
import { useState } from "react";

const ScreenShotSlider = ({ images }) => {
  const screenShots = [
    { id: 1, url: images.screenShots1, alt: "screenshot1" },
    { id: 2, url: images.screenShots2, alt: "screenshot2" },
    { id: 3, url: images.screenShots3, alt: "screenshot3" },
    { id: 4, url: images.screenShots4, alt: "screenshot4" },
    { id: 5, url: images.screenShots5, alt: "screenshot5" },
  ];
  const length = screenShots.length;

  const [activeImageNum, setActiveImageNum] = useState(1);
  const showPreviousImage = activeImageNum > 0;
  const showNextImage = activeImageNum < length - 1;
  const nextSlide = () => {
    setActiveImageNum(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setActiveImageNum(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(screenShots) || screenShots.length <= 0) {
    return null;
  }

  return (
    <div className="screenshots-slider">
      {showPreviousImage && (
        <div className="left" onClick={prevSlide}>
          <img
            src={screenShots[activeImageNum - 1].url}
            alt={screenShots[activeImageNum - 1].alt}
          />
        </div>
      )}
      {screenShots.map((currentSlide, ind) => {
        return (
          <div
            className={
              ind === activeImageNum ? "currentSlide active" : "currentSlide"
            }
            key={ind}
          >
            {ind === activeImageNum && (
              <img src={currentSlide.url} className="image" />
            )}
          </div>
        );
      })}
      {showNextImage && (
        <div className="right" onClick={nextSlide}>
          <img
            src={screenShots[activeImageNum + 1].url}
            alt={screenShots[activeImageNum + 1].alt}
          />
        </div>
      )}
    </div>
  );
};

ScreenShotSlider.propTypes = {
  images: PropTypes.object,
};

export default ScreenShotSlider;
