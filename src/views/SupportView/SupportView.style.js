import styled from "styled-components";

export const StyledSupportView = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 60px repeat(2, minmax(150px, max-content));
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "title title title"
    "icon name ."
    "icon email phone";
  @media (max-width: 768px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 60px repeat(2, 1fr);
    grid-template-areas:
      "title title title"
      "icon name name"
      "icon email email"
      "icon phone phone";
  }
  .support__title {
    grid-area: title;
  }

  .support__icon {
    grid-area: icon;
    width: 50px;
    height: 50px;
    background-color: rgb(250, 203, 44);
    border-radius: 5px;
    display: grid;
    place-items: center;
  }

  .support__name {
    grid-area: name;
    align-self: center;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .support__email {
    grid-area: email;
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .support__phone {
    grid-area: phone;
    justify-self: center;
    @media (max-width: 768px) {
      justify-self: start;
    }
  }

  .fa-envelope {
    padding-right: 5px;
  }

  p {
    font-size: 0.9rem;
  }
`;
