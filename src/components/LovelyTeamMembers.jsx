import PropTypes from "prop-types";

const LovelyTeamMembers = ({ images }) => {
  return (
    <div className="lovely-team-members">
      <h1>Lovely Team Members</h1>
      <p>
        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
        zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
        bedrijfstak sinds.
      </p>
      <div className="members-profile">
        <img src={images.member1} alt="image1" />
        <img src={images.member2} alt="image2" />
        <img src={images.member3} alt="image3" />
        <img src={images.member4} alt="image4" />
      </div>
    </div>
  );
};

LovelyTeamMembers.propTypes = {
  images: PropTypes.any,
};

export default LovelyTeamMembers;
