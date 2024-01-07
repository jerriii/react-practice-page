import PropTypes from "prop-types";

const BestFeatures = ({ children }) => {
  return (
    <div className="best-features">
      <h1>Best Features</h1>
      <p>
        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
        zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
        bedrijfstak sinds.
      </p>
      {children}
    </div>
  );
};

BestFeatures.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BestFeatures;
