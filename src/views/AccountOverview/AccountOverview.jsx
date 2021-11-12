import React from "react";
import SupportView from "../SupportView/SupportView";
import SalesView from "../SalesView/SalesView";
import StyledAccountOverview from "./AccountOverview.style";
import PropTypes from "prop-types";

export const AccountOverview = ({ data }) => {
  const { supportContact, salesOverview } = data;
  return (
    <StyledAccountOverview>
      <div className="support_section">
        <h1>Account Overview</h1>
        <SupportView contact={supportContact} />
      </div>
      <SalesView sales={salesOverview} />
    </StyledAccountOverview>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountOverview;
