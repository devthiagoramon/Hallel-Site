import React from "react";

const LeftLineInnerTabs = ({style}) => {
  return (
    <hr style={{ marginTop: 20, marginLeft: 30, width: "100%", transform: "rotate(90deg)", height: 5, color: "#138982", ...style }} />
  );
};

export default LeftLineInnerTabs;
