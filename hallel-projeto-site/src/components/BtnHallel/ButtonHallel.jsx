import "./btnHallel.css";
import styled from "styled-components";

const BtnHallel = styled.button`

  background-color: ${(props) => {
    if (props.primario) {
      return "#311b06";
    } else if (props.secundario) {
      return "#060831";
    } else if (props.sucesso) {
      return "#28a745";
    } else if (props.deletar) {
      return "#dc3545";
    } else {
      return "white";
    }
  }};
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
    filter: brightness(0.9);
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  transition: all 0.4s ease 0s;
`;

export default BtnHallel;
