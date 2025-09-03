import { NavLink } from "react-router-dom";
import './navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <h1>Kalo Jo</h1>
            <div className="navbar-links">
            <NavLink to="/" title="Home" end>Home</NavLink>
            <NavLink to="/about" title="About">About</NavLink>
            <NavLink to="/projects" title="Projects">Projects</NavLink>
            </div>
        </div>
    )

}

export default Navbar