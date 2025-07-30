import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Musculación en Casa</h2>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
