import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav style={{
      backgroundColor: "#4B0082",
      display: "flex",
      justifyContent: 'space-around',
      alignItems: "center",
      padding: "2rem",
      gap: "1rem",
      borderRadius: "8px",
    }}>
            <Link to="/" style={{color: 'white'}}>Home</Link>
            <Link to="/about" style={{color: 'white'}}>About</Link>
            <Link to="/services" style={{color: 'white'}}>Services</Link>
            <Link to="/contact" style={{color: 'white'}}>Contact</Link>
        </nav>
    );
}
export default Navbar;