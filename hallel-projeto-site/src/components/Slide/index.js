import './style.css';
import Img1 from '../../images/slide.jpeg';
import Img2 from '../../images/slide2.jpeg';
import Img3 from '../../images/slide3.jpeg';
import Img4 from '../../images/slide4.jpeg';
import Img5 from '../../images/slide5.jpeg';

function Slide() {
  return(
    
      <div className="slider fadee">
    <input type="radio" id="r1" />
    <input type="radio" id="r2" />
    <input type="radio" id="r3" />
    <input type="radio" id="r4" />
    <input type="radio" id="r5" />

    <div className="slide">
      <img src= {Img1} alt="Img 1"/>
    </div>

    <div className="slide">
      <img src={Img2} alt="Img 2"/>
    </div>

    <div className="slide">
      <img src={Img3} alt="Img 3"/>
    </div>

    <div className="slide">
      <img src= {Img4} alt="Img 4"/>
    </div>

    <div className="slide">
      <img src={Img5} alt="Img 5"/>
    </div>

    <div className="navigation-manual">
      <label for="r1" class="manual-btn" onclick="currentSlide(0)"></label>
      <label for="r2" class="manual-btn" onclick="currentSlide(1)"></label>
      <label for="r3" class="manual-btn" onclick="currentSlide(2)"></label>
      <label for="r4" class="manual-btn" onclick="currentSlide(3)"></label>
      <label for="r5" class="manual-btn" onclick="currentSlide(4)"></label>
    </div>
    
  </div>
    );
}


export default Slide;