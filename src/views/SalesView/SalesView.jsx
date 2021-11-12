import PropTypes from "prop-types";
import SupportView from "../SupportView/SupportView";
import { StyledSalesView, StyledPercentageView } from "./SalesView.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { SubTitle, BoldText } from "../../components/StyledComponents";
import { findPercentage } from "../../utils/helper";

function SalesView({ sales }) {
  const { uploads, successfulUploads, linesAttempted, linesSaved } = sales;
  return (
    <StyledSalesView>
      <div className="sales">
        <div className="sales__content">
          <h3>
            <FontAwesomeIcon color="rgb(40, 166, 229)" icon={faUpload} />
            Sales
          </h3>
          <FontAwesomeIcon color="rgb(183, 179, 178)" icon={faInfoCircle} />
        </div>

        <p>
          You had <BoldText>{uploads} uploads </BoldText>and
          <BoldText> {linesSaved} lines</BoldText> added.
        </p>
      </div>
      <div className="percentage">
        <PercentageView
          total={uploads}
          successes={successfulUploads}
          title="upload success"
        />
        <PercentageView
          total={linesAttempted}
          successes={linesSaved}
          title="lines saved"
        />
      </div>
    </StyledSalesView>
  );
}

const PercentageView = ({ total, successes, title }) => {
  const percent = findPercentage(total, successes);
  return (
    <StyledPercentageView>
      <p>{percent}%</p>
      <SubTitle>{title.toUpperCase()}</SubTitle>
    </StyledPercentageView>
  );
};

SupportView.propTypes = {
  sales: PropTypes.shape({
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number,
  }),
};

PercentageView.propTypes = {
  total: PropTypes.number.isRequired,
  successes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SalesView;
