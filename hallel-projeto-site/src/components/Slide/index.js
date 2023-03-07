import Img1 from "../../images/slide.jpeg";
import Img2 from "../../images/slide2.jpg";
import Img3 from "../../images/slide3.jpeg";
import Img4 from "../../images/slide4.jpeg";
import Img5 from "../../images/slide5.jpeg";
import "./style.css";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

//  images controls
const Slide = (props) => {
  const images = [Img1, Img2, Img3, Img4];

  const carrosel = useRef();
  const [width, setWidht] = useState(0);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  render() {
    return (
      <div className="slider fadee" style={{"margin-top": "5rem"}}>
        <input type="radio" id="r1" />
        <input type="radio" id="r2" />
        <input type="radio" id="r3" />
        <input type="radio" id="r4" />
        <input type="radio" id="r5" />

        <div className="slide">
          <img src={Img1} alt="Img 1" />
        </div>

        <div className="slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkLWFx6VJN3T-ofayrB4GtQA0JLTABv1Cyw&usqp=CAU"
            alt="Img 2"
          />
        </div>

        <div className="slide">
          <img src={Img3} alt="Img 3" />
        </div>

        <div className="slide">
          <img src={Img4} alt="Img 4" />
        </div>

        <div className="slide">
          <img src={Img5} alt="Img 5" />
        </div>

        {this.state.role != null &&
          this.state.role === "ROLE_USER" &&
          this.state.eventos.map((evento) => {
            return (
              <motion.div
                className="imagem"
                key={imagem}
              >
                <img src={imagem} alt="img" />
                <div className="legenda">
                  <a href="">Testeeeee</a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide;
