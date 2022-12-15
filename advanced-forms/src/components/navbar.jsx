import { NavLink } from "react-router-dom";
import logo from "../_assets/logo.png";
import "./navbar.css";

function Navbar() {
    return (
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="sub-header">
          <h1>Survey Tool</h1>
          <ul className="ul">
            <li>
              <NavLink to="/survey" className="navlink">
                Sample Survey
              </NavLink>
            </li>
            <li>
              <NavLink to="/sensory" className="navlink">
                Sensory Preferences
              </NavLink>
            </li>
            <li>
              <NavLink to="/report" className="navlink">
                Report
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact className="navlink"> 
              Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;