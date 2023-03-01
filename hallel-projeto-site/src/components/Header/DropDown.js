import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import './dropDown.css';


function DropDown() {
  return (
    <div className="Dropdown">
      <Dropdown id='dropdown'>
        <Dropdown.Toggle variant="sucess btn-lg" id="dropdown-basic">
          Igreja
        </Dropdown.Toggle>

        <Dropdown.Menu id="menu">
          <Dropdown.Item id='link'>
            <Link to="/sobre">Quem somos</Link>
          </Dropdown.Item>

          <div className="dropdown-divider"></div>

          <Dropdown.Item id="link" className="qmSomos">
            <Link to="/fundadora">Fundadora</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default DropDown;
