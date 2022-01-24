import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import president from '../images/president.png';
import mensagem from '../images/mensagem1.png';
import attorney from '../images/attorney.png';
import mens from '../images/mensagem2.png';
import counter from '../images/counter.png';
import msg from '../images/mensagem3.png';
import jurist from '../images/jurist.png';
import mensgm from '../images/mensagem4.png';
import partner from '../images/partner.png';
import mensag from '../images/mensagem5.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider_container">
         <h1 className="slider_title">Depoimentos</h1>
        <Slider {...settings}>
        <div className="card-wrapper">
              <div className="card-image">
                <img src={president} alt="president" />
              </div>
            <ul class="social-text">
            <img src={mensagem} alt="mensagem1" />
            </ul>
            <div className="details">
              <p>Josimar Henrique da Silva <span class="job-title">| Diretor Presidente  |  Grupo Hebron</span></p>
            </div>
            </div>
            <div className="card-wrapper">
              <div className="card-image">
              <img src={attorney} alt="attorney" />
              </div>
            <ul class="social-text">
            <img src={mens} alt="mensagem2" />
            </ul>
            <div className="details">
              <p>William H. M. Garey <span class="job-title">Advogado  |   Nelson Garey Advogados Associados</span></p>
            </div>
            </div>
            <div className="card-wrapper">
              <div className="card-image">
              <img src={counter} alt="counter" />
              </div>
            <ul class="social-text">
            <img src={msg} alt="mensagem3" />
            </ul>
            <div className="details">
              <p>Domingos Orestes Chiomento <span class="job-title">| DOC Contabilidade Empresarial</span></p>
            </div>
            </div>
            <div className="card-wrapper">
              <div className="card-image">
              <img src={jurist} alt="jurist" />
              </div>
            <ul class="social-text">
            <img src={mensgm} alt="mensagem4" />
            </ul>
            <div className="details">
              <p>José Mauro Marques <span class="job-title">| Advogado</span></p>
            </div>
            </div>
            <div className="card-wrapper">
              <div className="card-image">
              <img src={partner} alt="partner" />
              </div>
            <ul class="social-text">
            <img src={mensag} alt="mensagem5" />
            </ul>
            <div className="details">
              <p>Custódio Pereira <span class="job-title">| Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP</span></p>
            </div>
            </div>
        </Slider>
      </div>
    );
  }
}