import styled from "styled-components";

const padding = 20;
const borderColor = "rgb(222, 222, 222)";
const shadowColor = "rgb(232, 232, 232)";

const StyledSalesView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px ${shadowColor};

  .sales {
    padding: ${padding}px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sales__content {
    display: flex;
    justify-content: space-between;
  }

  .fa-upload {
    margin-right: 10px;
  }
  .percentage {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${borderColor};
  }
`;

const StyledPercentageView = styled.div`
  width: 50%;
  height: 50px;
  padding: ${padding}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :nth-child(1) {
    border-right: 1px solid ${borderColor};
  }

  p {
    color: green;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export { StyledSalesView, StyledPercentageView };
