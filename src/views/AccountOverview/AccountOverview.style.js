import styled from "styled-components";

const lgPadding = 50;
const smPadding = 30;

const StyledAccountOverview = styled.div`
  background-color: rgb(242, 242, 242);
  width: calc(100vw - ${lgPadding * 2}px);
  max-width: 1000px;
  padding: ${lgPadding}px;

  @media (max-width: 768px) {
    width: calc(100vw - ${smPadding * 2}px);
    padding: ${smPadding}px;
  }
  .support_section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
      height: fit-content;
    }
    h1 {
      font-weight: 300;
    }
  }
`;

export default StyledAccountOverview;
