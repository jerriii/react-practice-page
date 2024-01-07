import "../App.css";
import PropTypes from "prop-types";

const Navbar = ({ images }) => {
  return (
    <div className="navbar">
      <img src={images.logoImage} alt="logo" />
      <div className="navbar-links">
        <ul className="color-white">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </div>
      <button className="button bg-color-lightpink color-black">BUTTON</button>
    </div>
  );
};

Navbar.propTypes = {
  images: PropTypes.object,
};

export default Navbar;
