import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { StyledSupportView } from "./SupportView.style";
import { SubTitle, BoldText } from "../../components/StyledComponents";
import PropTypes from "prop-types";

function SupportView({ contact }) {
  const { name, email } = contact;
  return (
    <StyledSupportView>
      <SubTitle className="support__title">YOUR FEEFO SUPPORT CONTACT</SubTitle>
      <div aria-hidden className="support__icon">
        S
      </div>
      <BoldText aria-label={`${name}.`} className="support__name">
        {name}
      </BoldText>
      <p className="support__email">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          {email}
        </a>
      </p>
      <p className="support__phone">020 3363 4208</p>
    </StyledSupportView>
  );
}

SupportView.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default SupportView;
