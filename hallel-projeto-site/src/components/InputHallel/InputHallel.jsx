import styled from "styled-components";

const InputHallel = styled.input`
  border-radius: 3px;
  outline: rgba(0, 0, 0, 0.3) solid 0.5px;
  width: 95%;
  padding: 8px;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.00938em;
  &:focus {
    outline: #3498db solid 2px;
    outline-offset: 3px;
    border-spacing: 5px;
  }
`;

export default InputHallel;