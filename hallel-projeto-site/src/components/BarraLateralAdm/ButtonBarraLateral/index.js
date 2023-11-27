import React from "react";
import "./button_barra_lateral.css";

const ButtonBarraLateral = ({
  handleClickButtonLateral,
  icon,
  selected,
  text,
  to,
}) => {
  return (
    <div
      style={{
        background: selected ? "rgba(24, 75, 72, 0.76)" : "transparent",
        borderRadius: 6,
      }}
      onClick={() => handleClickButtonLateral(to)}
      className="container_button_brl"
    >
      {icon}
      <label>{text}</label>
    </div>
  );
};

export default ButtonBarraLateral;
