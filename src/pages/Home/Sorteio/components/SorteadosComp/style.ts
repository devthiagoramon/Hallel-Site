import styled from "styled-components";

export const SorteadoCompContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 16px;
  max-width: 300px;

  .infos {
    color: ${(props) => props.theme.mainColors.text};

    .name_user {
      font-size: 24px;
      font-weight: 500;
      margin-top: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      margin-top: 0.5rem;
      font-size: 16px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
