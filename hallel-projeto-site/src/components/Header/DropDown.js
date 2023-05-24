import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import './dropDown.css';


const DropDown = ({titulo, item1, link1, item2, link2}) => {
  return (
    <div className="Dropdown">
      <Dropdown id="dropdown">
        <Dropdown.Toggle className='tituloDrop' variant="sucess btn-lg" id="dropdown-basic">
          {titulo}
        </Dropdown.Toggle>

        <Dropdown.Menu id="menu">
          <Dropdown.Item to="toLink1" id="link1" className='itensdrop'>
            <Link id="toLink1" to={link1}>


              <label>{item1}</label>
            </Link>
          </Dropdown.Item>

          <div className="dropdown-divider"></div>

          <Dropdown.Item to="toLink2" id="link2" className="itensdrop">
            <Link id="toLink2" to={link2}>

              <label>{item2}</label>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default DropDown;
