import { NavLink } from "react-router-dom";
import logo from "../_assets/logo.png";

function Navbar() {

    return(
        <>
            <img src={logo} alt="logo"/>
            <h1>Survey Tool</h1>
            <ul>
                <li><NavLink to="/survey">Sample Survey</NavLink></li>
                <li><NavLink to="/sensory">Sensory Preferences</NavLink></li>
                <li><NavLink to="/report">Report</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </>
    );
}

export default Navbar;