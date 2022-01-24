import React from 'react';
import ret from '../images/renee2.png';
import renee from '../images/renee3.png';


function About() {
    return (
        <div className='about'>
            <h3>“Faço roupas com o Renee Trajar há mais de duas décadas, o <br/>serviço é impecável em todos os detalhes, desde a costura ao <br/>caimento. O Renee tem uma equipe de mestre!”<br/><p>Nelson Garey</p><br/>
            <span>Advogado  |  Nelson Garey Advogados Associados</span></h3>
            <span></span>
            
            <a href='#' className='ret'>
                <img src={ret} alt="ret" />
                <img src={renee} alt="renee" />
            </a>
        </div>
    )
}

export default About;
