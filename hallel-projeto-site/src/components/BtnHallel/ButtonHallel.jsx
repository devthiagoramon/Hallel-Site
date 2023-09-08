import "./btnHallel.css";
import styled from "styled-components";

const BtnHallel = styled.button`
  background-color: ${(props) => (props.primario ? "#311b06" : "white")};
  color: #f4f4fa;
  height: 40px;
  border-radius: 12px;
  border-width: 0;
  width: fit-content;
  width: 125px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 8px;
  &:hover {
    background-color: rgba(49, 27, 6, 0.89);
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  transition: all 0.4s ease 0s;
`;

export default BtnHallel;
