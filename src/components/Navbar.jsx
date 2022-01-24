import React from 'react';
import logo from '../../src/images/logo1.png';

function Navbar() {
    return (
        <nav>
            <a href='#' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#'>Empresa</a></li>
                <li><a href='#'>Camisaria</a></li>
                <li><a href='#'>Alfaiataria</a></li>
                <li><a href='#'>Depoimentos</a></li>
                <li><a href='#'>Contato</a></li>
            </ul>
            
        </nav>
    )
}

export default Navbar;