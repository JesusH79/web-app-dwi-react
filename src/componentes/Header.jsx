import React from "react";

const Header = () => {
    const logo = 'https://cdn-icons-png.flaticon.com/512/2823/2823437.png';
    return(
        <header className="header__header">
            <img className='header__img' alt='logo' src={logo}></img>
            <p className='header__titulo'><span>INVENTARIO INTERNO DEL DEPTO DE MTTO</span></p>
        </header>
    );
};

export default Header;