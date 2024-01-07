import PropTypes from "prop-types";

const HowItWorksDetails = ({ children }) => {
  return (
    <div className="how-it-works-details">
      <h1>How It Work?</h1>
      {children}
      <p>
        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
        bnzetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
        bedrijfstak sinds de 16esss eeuw, toen een onbekende drukker een zethaak
        met letters nam en ze husselde om een font- catalogus te maken.
      </p>
      <p>
        overleefd maar is ook, vrijwel onveranderd, overgenomen in
        elektronischess letterzetting. Het is in de jaren 60 populair geworden
        met de introductie van Letraset vellen Lorem Ipsum passages.
      </p>
    </div>
  );
};

HowItWorksDetails.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HowItWorksDetails;
