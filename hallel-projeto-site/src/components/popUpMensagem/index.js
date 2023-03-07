import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./popUpMensagem.css";

const PopUpMensagem = (props) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setInterval(() => {
        setHide(true)
    }, 4000);
  }, []);

  return (
    <div>
      {hide === false ? (
        <motion.div
          className="containerPopUp"
          style={{ backgroundColor: props.color }}
          initial={{x:"+100px"}}
          animate={{x:"0"}}
        >
          <motion.div className="innerPopUp">
            <a className="textPopUp">{props.mensagem}</a>
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PopUpMensagem;
