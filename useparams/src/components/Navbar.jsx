import './navabar.css';
import { Link } from "react-router-dom";
const Navbar = () => {

    return (

        <nav className="navbar">
            <Link to='/' className="navbar-link">Logo</Link>
            <Link to='/' className="navbar-link">Home</Link>
            <Link to='/about' className="navbar-link">About</Link>
            <Link className="navbar-link">Contact</Link>


        </nav>

    );
}






export default Navbar;
