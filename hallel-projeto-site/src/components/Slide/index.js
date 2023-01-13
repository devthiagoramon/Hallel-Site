import './style.css';
import Img1 from "../../images/slide.jpeg";
import Img2 from '../../images/slide2.jpeg';
import Img3 from '../../images/slide3.jpeg';
import Img4 from '../../images/slide4.jpeg';
import Img5 from '../../images/slide5.jpeg';

//  images controls
var time = 0
var slidePosition = 0

function autoShow() {
  var i;
  var slides = document.getElementsByClassName("slide");

  for (i = 0; i < slides.length; i++)
    slides[i].style.display = "none";

  slidePosition++;

  if (slidePosition > slides.length)
    slidePosition = 1;

  slides[slidePosition - 1].style.display = "block";

  time = setTimeout(autoShow, 10000)
}

autoShow()

function SlideShow(n) {
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length)
    slidePosition = 1;

  if (n < 1)
    slidePosition = slides.length;

  for (var i = 0; i < slides.length; i++)
    slides[i].style.display = "none";

  slides[slidePosition - 1].style.display = "block"
}

function currentSlide(n) {
  SlideShow(slidePosition = n);
  clearTimeout(time)
  autoShow()
}

function Slide() {
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
        <label htmlFor="r1" className="manual-btn" onClick={() => currentSlide(0)} ></label>
        <label htmlFor="r2" className="manual-btn" onClick={() => currentSlide(1)} ></label>
        <label htmlFor="r3" className="manual-btn" onClick={() => currentSlide(2)} ></label>
        <label htmlFor="r4" className="manual-btn" onClick={() => currentSlide(3)} ></label>
        <label htmlFor="r5" className="manual-btn" onClick={() => currentSlide(4)} ></label>
      </div>

    </div>
  );
}



export default Slide;