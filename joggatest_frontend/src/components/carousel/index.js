import React from 'react';
import {Carousel} from 'react-bootstrap';
import './styles.css';

import logo from '../../assets/logo1.png';
import whatsapp from '../../assets/whatsapp.png';
import telefone from '../../assets/telefone.png';
import modelo from '../../assets/modelo.png';
import partners from '../../assets/partners.png';

import Form from '../form/index';

function CarouselComponent() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <div className="carousel-container">
        <div className="header-container">
            <img src={logo} alt="jogga" />
          <div className="right-container">
            <img src={whatsapp} alt="jogga" />
            <img src={telefone} alt="jogga" />
          </div>
        </div>
        <div className="body-carousel-container">
          <img src={modelo} alt='modelo' />
          <div className="text-container">
            <span id="txt1">Conquiste mais clientes a um clique de distância</span>
            <br/>
            <span id="txt2">Use anúncios no FACEBOOK, INSTAGRAM e GOOGLE e 
            apareça para os clientes certos, nos locais certos </span>
            <img src={partners} alt="partners"/>
          </div>
        </div>
      </div>
      </Carousel.Item>
        {/* <Carousel.Item>
        <img
            className="d-block w-100"
            src={Retangulo}
            alt="First slide"
            />
        <div className="container">

        </div>
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item> */}
    
    </Carousel>
    <Form />
    </>
  );
}

export default CarouselComponent;