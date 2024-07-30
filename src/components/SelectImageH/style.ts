import styled from "styled-components";

export const SelectImageHContainer = styled.section`
  border: 0.5px solid #252525;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  min-height: 35px;
  max-height: 35px;
  width: 95%;
  background-color: #fafafa;

  input {
    display: none;
  }

  label {
    font-size: 16px;
    font-weight: 600;
  }

  hr {
    transform: rotateX("90deg");
  }
`;
