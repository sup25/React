import './navabar.css';
import PropTypes from 'prop-types';
const Navbar = (props) => {
    //we have passed props.title in logo  
    return (
        <nav className="navbar">
            <a href="/" className="navbar-link">{props.title}</a>
            <a href="/" className="navbar-link">Home</a>
            <a href="/about" className="navbar-link">About</a>
            <a href="/contact" className="navbar-link">Contact</a>


        </nav>
    );
}

//if we remove  title: "logo" from <Navbar/> it still shows logo due to assigning the value 
//in default props
Navbar.defaultProps = {
    title: "logo",
    home: "this is home",

}
//dont forget to import Porptype
//the string checks if the value we passed is string or not if not it shows error,
//if we set isRequired, it will show error if we didn't pass the value in title
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}




export default Navbar;
