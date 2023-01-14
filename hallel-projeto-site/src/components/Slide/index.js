import Img1 from "../../images/slide.jpeg";
import Img2 from '../../images/slide2.jpeg';
import Img3 from '../../images/slide3.jpeg';
import Img4 from '../../images/slide4.jpeg';
import Img5 from '../../images/slide5.jpeg';
import './style.css';

import React, { Component } from 'react'

//  images controls
class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: document.getElementsByClassName("slide"),
      slidePosition: 0,
      time: 0
    }
    this.autoShow = this.autoShow.bind(this)
    this.SlideShow = this.SlideShow.bind(this)
    this.currentSlide = this.currentSlide.bind(this)
  }

  componentDidMount() {
    this.autoShow()
  }

  autoShow() {
    let state = this.state

    for (let i = 0; i < state.slides.length; i++)
      state.slides[i].style.display = "none";

    state.slidePosition++

    if (state.slidePosition > state.slides.length)
      state.slidePosition = 1;

    state.slides[state.slidePosition-1].style.display = "block";

    this.setState({time:setTimeout(this.autoShow, 10000)})
  }

  SlideShow(n) {
    let state = this.state

    if (n > state.slides.length)
      state.slidePosition = 1;

    if (n < 1)
      state.slidePosition = state.slides.length;

    for (let i = 0; i < state.slides.length; i++)
      state.slides[i].style.display = "none";

    state.slides[state.slidePosition - 1].style.display = "block"
  }

  currentSlide(n) {
    let state = this.state;

    this.SlideShow(state.slidePosition = n);
    clearTimeout(state.time)
    this.autoShow()
  }

  render() {

    return (
      <div className="slider fadee">
        <input type="radio" id="r1" />
        <input type="radio" id="r2" />
        <input type="radio" id="r3" />
        <input type="radio" id="r4" />
        <input type="radio" id="r5" />

        <div className="slide">
          <img src={Img1} alt="Img 1" />
        </div>

        <div className="slide">
          <img src={Img2} alt="Img 2" />
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

        <div className="navigation-manual">
          <label htmlFor="r1" className="manual-btn" onClick={() => this.currentSlide(0)} ></label>
          <label htmlFor="r2" className="manual-btn" onClick={() => this.currentSlide(1)} ></label>
          <label htmlFor="r3" className="manual-btn" onClick={() => this.currentSlide(2)} ></label>
          <label htmlFor="r4" className="manual-btn" onClick={() => this.currentSlide(3)} ></label>
          <label htmlFor="r5" className="manual-btn" onClick={() => this.currentSlide(4)} ></label>
        </div>

      </div>
    )
  }
}

export default Slide;