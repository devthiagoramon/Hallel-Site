import styled from "styled-components";

export const CardEventosContainer = styled.div`
  min-height: 300px;
  min-width: 300px;
  max-width: 300px;
  max-height: 370px;
  border-radius: 1rem;

  background-color: transparent;

  img {
    transition: 0.5s;
    width: 100%;
    height: 180px;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0 2px 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.mainColors.whiteText};
    box-shadow: rgba(0, 0, 0, 0.3) 0 2px 5px;
    cursor: pointer;
    img {
      transition: 0.5s;
      border-radius: 1rem 1rem 0 0;
      box-shadow: none;
    }

    .image_not_found {
      border-radius: 1rem 1rem 0 0;
    }
  }
`;

export const InfoCardEventosContainer = styled.div`
  width: 100%;
  padding: 8px;

  .date {
    margin-top: 1rem;
    color: ${(props) => props.theme.mainColors.secondary};
    font-size: 18px;
    font-weight: 500;
  }

  .title {
    margin: 0;
    padding: 0;
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.mainColors.text};
  }

  .local {
    font-size: 12px;
    font-weight: 400;
    margin-top: 6px;
  }
`;
