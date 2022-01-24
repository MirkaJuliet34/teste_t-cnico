import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='header'>
            <Navbar/>
            <div className='intro'>
                <p>Elegante é ter um </p>
                <h1><span></span><span></span>Alfaiate</h1>
                <p className='details'> para chamar de seu.</p>
                <span>COMPRE HOJE, PAGUE EM ATÉ 3X COM 12% DE DESCONTO E TENHA 10 MESES PARA CONFECCIONAR!</span>
                
                <a href="#" className='header-btn'>Faça seu Orçamento</a>
            </div>
            
            

        </div>
    )
}

export default Header;