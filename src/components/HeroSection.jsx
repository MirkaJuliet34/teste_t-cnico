import React from 'react';
import herosectiontimage from '../images/terno3.png';
import quadr from '../images/quadro3.png';
import painting from '../images/quadro4.png';
import { Button } from 'bootstrap';



function HeroSection() {
    return (
        <div className='herosection'>
            <div className='herosection-img'>
              <img src={herosectiontimage} alt=''/>
            </div>
            <div className='herosection-text'>
            <h6>Alfaiataria<br/></h6>
            <p>- totalmente  feito a mão  sob medida</p>
            </div>
            <div className='quadro-img-text'>
            <a href='#' className='quadro-img'>
                <img src={quadr} alt="quadr" />
                <img src={painting} alt="painting" />
                <a href="#" className='herosection-btn'>Quero um orçamento</a>
            </a>
            </div>
            
            </div>
    )
}

export default HeroSection;