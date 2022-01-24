import React from 'react';
import terno from '../images/terno1.png';



function Clothes() {
    return (
        <div className='clothes'>
            <h5>Condição Imperdível<br/></h5>
            <span>Compre hoje e garanta:</span>
            <p>- 12% de desconto e pagamento em até 3x sem juros;<br/>
                  - Até 10 meses para confeccionar sua roupa. Não se <br/>preocupe se suas medidas aumentaram ou diminuíram,<br/> estará sempre elegante;<br/>
                  - Condição muito especial por tempo limitado;<br/>
                  - Poder presentear alguém com uma roupa de alta costura,<br/> exclusiva.<br/>
            </p>
            <a href="#" className='clothes-btn'>Faça seu Orçamento</a>
            
            <a href='#' className='ret'>
                <img src={terno} alt="terno" />
            </a>
        </div>
    )
}

export default Clothes;