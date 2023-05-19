import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import './dropDown.css';


const DropDown = ({titulo, item1, link1, item2, link2}) => {
  return (
    <div className="Dropdown">
      <Dropdown id='dropdown'>
        <Dropdown.Toggle variant="sucess btn-lg" id="dropdown-basic">
          {titulo}
        </Dropdown.Toggle>

        <Dropdown.Menu id="menu">
          <Dropdown.Item id='link'>
            <Link to={link1}>{item1}</Link>
          </Dropdown.Item>

          <div className="dropdown-divider"></div>

          <Dropdown.Item id="link" className="qmSomos">
            <Link to = {link2}>{item2}</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default DropDown;
