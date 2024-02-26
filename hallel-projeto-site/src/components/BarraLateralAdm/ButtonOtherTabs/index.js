import React from "react";
import "../ButtonBarraLateral/button_barra_lateral.css";

const ButtonInnerTabs = ({
  style,
  selected,
  handleClickButtonLateral,
  to,
  text,
}) => {
  return (
    <div
      style={{
        background: selected ? "rgba(24, 75, 72, 0.76)" : "transparent",
        borderRadius: 6,
        ...style,
      }}
      onClick={() => handleClickButtonLateral(to)}
      className="container_button_brl"
    >
      <label>{text}</label>
    </div>
  );
};

export default ButtonInnerTabs;
