import React from 'react';
import howitworkimage from '../images/reneer.png';

function Howitwork() {
    return (
        <div className='how-it-works'>
            <div className='how-it-works-model'>
              <img src={howitworkimage} alt=''/>
            </div>
            <div className='howitwork-text'>
                    <h2>Renee Trajar</h2>
                        <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos <br/> profissionais experientes e altamente qualificados.<br/> Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.</p>
                        <span> “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação<br/> ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.” </span>
                        
                        <a href="#profile" className='howitwork-btn'>Agende uma visita!</a>
            </div>
        </div>
    )
}

export default Howitwork;