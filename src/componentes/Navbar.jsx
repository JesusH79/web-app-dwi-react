import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/articulos" className="navbar__link">Articulos</Link>
        </li>
        <li className="navbar__item">
          <Link to="/busqueda" className="navbar__link">Busqueda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;