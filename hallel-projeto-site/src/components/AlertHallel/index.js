import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import "./alert_hallel.css";

const AlertHallel = ({text, style}) => {
  return (
    <div style={style} className="cont-alert-hallel">
      <FiAlertCircle size={20} />
      <label>{text}</label>
    </div>
  );
};

export default AlertHallel;
