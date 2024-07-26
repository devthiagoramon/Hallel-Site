import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin: 3.75rem;
  display: grid;
  width: 90%;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  border: 1px ${(props) => props.theme.mainColors.text} solid;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const LeftProfContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  place-items: center;

  img,
  svg {
    color: ${(props) => props.theme.mainColors.text};
  }

  h1 {
    margin: 0;
  }
  span {
    font-size: 18px;
  }
`;

export const ListProfile = styled.ul`
  margin-top: 1.875rem;
  width: 100%;
  padding: 0;
`;

export const ItemListProfile = styled.li<{ $selected?: boolean }>`
  color: ${(props) =>
    props.$selected
      ? props.theme.mainColors.whiteText
      : props.theme.mainColors.text};
  text-decoration: none;
  text-indent: none;
  font-size: 22px;
  list-style-type: none;
  padding: 0.5rem 1rem;
  font-weight: 500;

  background-color: ${(props) =>
    props.$selected
      ? props.theme.mainColors.principal
      : "transparent"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.$selected
        ? props.theme.mainColors.principal
        : "rgba(0, 0, 0, 0.2)"};
  }

  &:last-child {
    color: ${(props) => props.theme.mainColors.error};
  }
`;

export const RightProfContainer = styled.section`
  width: 100%;
  height: 100%;
  border: 1px ${(props) => props.theme.mainColors.text} solid;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 105px auto;
`;

export const TitleContainerRightProfCont = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-height: 105px;
  border-bottom: 1px ${(props) => props.theme.mainColors.text} solid;
  height: 100%;
`;
