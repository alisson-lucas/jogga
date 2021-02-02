import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";

import './styles.css';

import user from '../../assets/user.png';
import whatsapp from '../../assets/whatsapp.png'

function SemiFooter() {
  return (
    <div className="semiFooter-container">
        <div className="semiFooter-title">
            <span>Conquiste mais clientes com Digital</span>
        </div>
        <div className="divider">
            <div className="left-side">
                <div className="left-label">
                 <span>Solução digital de vendas para você ter mais leads e vender mais.</span>
                </div>
                <img src={user} alt="user"/>
            </div>
            <div className="right-side">
                <div className="left-label">
                    <span>Com a Jogga você terá:</span>
                </div>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="20px"/>
                        <span>Site otimizado para geração de leads</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="40px"/>
                        <span>Equipe especializada em mídia digital responsável pelo planejamento, execução, análise e otimização de suas campanhas.</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="25px"/>
                        <span>Anúncios nas principais mídias sociais com objetivo de converter seu público em leads</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="20px"/>
                        <span>Banco de dados com todas as chamadas recebidas</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="20px"/>
                        <span>Banco de dados com todas as chamadas recebidas</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="40px"/>
                        <span>Painel de controle para visualizar dados de suas chamadas, como, leads gerados, canais, total investido, retorno sob investimento e mais!</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="20px"/>
                        <span>Integração com as principais plataformas de CRM</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="20px"/>
                        <span>Equipe de criação para produção de peças destinadas exclusivamente à anúncios</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="20px"/>
                        <span>Relatórios individuais</span>
                    </div>
                </li>
                <li>
                    <div className="text-check">
                        <AiOutlineCheck size="30px"/>
                        <span>Atendimento especializado de uma empresa Google Premier Partner e Facebook Marketing Partner</span>
                    </div>
                </li>
            </div>
        </div>
        <div className="contact-card-container">
            <div className="contact-card">
                <div className="texts">
                    <span>Fale com nosso time de especialistas. </span>
                    <span id="sublabel">Nós apresentaremos as melhores soluções digitais para seu negócio. </span>
                </div>
                <img src={whatsapp} alt="contact"/>
            </div>
        </div>
    </div>
  );
}

export default SemiFooter;