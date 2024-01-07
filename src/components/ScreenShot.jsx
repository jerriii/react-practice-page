import PropTypes from "prop-types";

const ScreenShot = ({ children }) => {
  return (
    <div className="screenshots">
      <h1>App Screenshots</h1>
      <p>
        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
        zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
        bedrijfstak sinds.
      </p>
      {children}
    </div>
  );
};

ScreenShot.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenShot;
