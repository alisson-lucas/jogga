import React from 'react';

import './styles.css';

import face from '../../assets/anuncio-face.png';
import siteopt from '../../assets/sites-otimizados.png';
import crm from '../../assets/crm.png';
import painel from '../../assets/painel.png';
import banco from '../../assets/banco.png';
import plane from '../../assets/plane.png';
import artes from '../../assets/artes.png';
import relatorios from '../../assets/relatorios.png';
import otm from '../../assets/otm.png';
import suporte from '../../assets/suporte.png';

function Body() {
  return (
      <div className="body-container">
          <div className="body-header">
              <div className="header-left">
                  <span>COMO PODEMOS AJUDAR</span>
              </div>
              <div className="header-right">
                  <span>O Brasil tem mais de 150 milhões de usuários online, 
                    em redes sociais e consultando informações antes de compra.
                    Nossa solução traz seu negócio para o ambiente digital, melhorando a eficiência 
                    de seus resultados e dando acesso às informações necessárias para cada venda.</span>
              </div>
              <div className="body-options-container">
                  <ul>
                    <li>
                        <div className="options">
                            <img src={face} alt="face"/>
                            <span>ANÚNCIOS PARA FACEBOOK, INSTAGRAM, GOOGLE E OUTROS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={siteopt} alt="face"/>
                            <span>SITE OTIMIZADO PARA VENDAS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={crm} alt="face"/>
                            <span>INTEGRAÇÃO COM CRM</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={painel} alt="face"/>
                            <span>PAINEL DE RESULTADOS EM TEMPO REAL</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={banco} alt="face"/>
                            <span>BANCO DE CHAMADAS RECEBIDAS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={plane} alt="face"/>
                            <span>PLANEJAMENTO DE ANÚNCIOS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={artes} alt="face"/>
                            <span>CRIAÇÃO DE ARTES DE ANÚNCIOS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={relatorios} alt="face"/>
                            <span>RELATÓRIOS INDIVIDUAIS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={otm} alt="face"/>
                            <span>OTIMIZAÇÃO DE ANÚNCIOS</span>
                        </div>
                    </li>
                    <li>
                        <div className="options">
                            <img src={suporte} alt="face"/>
                            <span>SUPORTE ESPECIALIZADO</span>
                        </div>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Body;