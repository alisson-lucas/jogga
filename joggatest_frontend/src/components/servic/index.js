import React from 'react';

import './styles.css';

import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import telefone from '../../assets/telefone.png';
import ford from '../../assets/ford.png';
import audi from '../../assets/audi.png';
import jaguar from '../../assets/jaguar.png';
import jaguarWay from '../../assets/jaguar-way.png';
import crm from '../../assets/crm.png';
import fioriFiat from '../../assets/fiori-fiat.png';
import fiori from '../../assets/fiori.png';
import hmb from '../../assets/hmb.png';
import lexus from '../../assets/lexus.png';
import madrisa from '../../assets/mardisa.png';
import moura from '../../assets/moura.png';
import muma from '../../assets/muma.png';
import jcpm from '../../assets/jcpm.png';
import toyolex from '../../assets/toyolex.png';

  
function Servic() {
  return (
    <div className="service-container">
        <div className="service-header">
            <div className="header-content">
                <span>NOSSOS SERVIÇOS</span>
                <span id="subtitle">Na Jogga, nós entendemos a importância de cada venda. 
                Por isso, criamos uma solução completa para atração de clientes.
                Para que você e sua equipe se preocupem apenas em fechar negócios.</span>
            </div>
        </div>
        <div className="service-card-container">
            <img src={card1} alt="card" />
            <img src={card2} alt="card" />
        </div>
        <div className="partners-container">
            <div className="partners-container-header">
                <div className="partners-container-header-card">
                    <div className="partners-container-header-card-content">
                        <span>FALE COM NOSSO TIME DE ESPECIALISTAS.</span>
                        <span id="subtitle">Nós apresentaremos as melhores soluções
                        digitais para seu negócio.</span>
                    </div>
                    <div className="phone">
                        <img src={telefone} alt="telefone"/>
                    </div>
                </div>
            </div>
            <div className="brands">
                <span>QUEM CONFIA NA GENTE</span>
                <ul>
                    <li>
                        <div className="brands-grid">
                            <img src={ford} alt="ford"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={audi} alt="audi"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={moura} alt="moura"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={lexus} alt="lexus"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={fioriFiat} alt="fioriFiat"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={fiori} alt="fiori"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={jaguarWay} alt="jaguarWay"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={hmb} alt="hmb"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={madrisa} alt="madrisa"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={muma} alt="muma"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={toyolex} alt="toyolex"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={jcpm} alt="jcpm"/>
                        </div>
                    </li>
                    <li>
                        <div className="brands-grid">
                            <img src={jaguar} alt="jaguar"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Servic;