import React from 'react';
import herotimage from '../images/terno2.png';
import quadro from '../images/quadro1.png';
import quad from '../images/quadro2.png';


function Hero() {
    return (
        <div className='hero'>
            <div className='hero-image'>
              <img src={herotimage} alt=''/>
            </div>
            <div className='hero-text'>
                    <h6>Camisaria</h6>
                    <p>- confeccionadas artesanalmente</p>
            <div className='ret-text-box'> 
                <a href='#' className='ret'>
                    <img src={quadro} alt="quadro" />
                    <img src={quad} alt="quad" />
                    <a href="#" className='hero-btn'>Quero um orçamento</a>
                </a>
            </div>
            <div className='hero-btn-button'>
                
            </div>
            </div>
        </div>
    )
}

export default Hero;