import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Img1 from "../../images/Segunda.png";
import Img2 from "../../images/Terça.png";
import Img3 from "../../images/Quarta.png";
import Img4 from "../../images/Quinta.png";
import Img5 from "../../images/Sexta.png";
import Img6 from "../../images/Sabado.png";
import Img7 from "../../images/Domingo.png";
import "./styleProg.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SlideProg = (props) => {
  const configuracoes = {
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'scale(0.9)';
  }

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'scale(0.8)';
  }

  return (

    <div className="destaque">
      <h3 style={{textAlign:'center',fontSize:'40px', color:'#003015',marginTop:'6rem',marginBottom:'-0.5rem'}}>Programação Semanal</h3>
      <Slider {...configuracoes}>
      
      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img1} alt="Produto 1" />
          <div className="texto-promocao">
            <span className="nome-produto">Segunda</span>
            
            <div className="promocao">
              
              <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
      

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img2} alt="Produto 2" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Terça</span>
            
            <div className="promocao">
              
            <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img3} alt="Produto 3" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Quarta</span>
            
            <div className="promocao">
              
            <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img4} alt="Produto 4" />
         
          <div className="texto-promocao">
            <span className="nome-produto">Quinta</span>
           
            <div className="promocao">
              
            <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img5} alt="Produto 5" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Sexta</span>
            
            <div className="promocao">
             
            <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img6} alt="Produto 5" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Sábado</span>
            
            <div className="promocao">
             
            <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={Img7} alt="Produto 6" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Domingo</span>
            
            <div className="promocao">
              
            <a href="#" className="valorPromocao">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>

    

  );
};

export default SlideProg;
