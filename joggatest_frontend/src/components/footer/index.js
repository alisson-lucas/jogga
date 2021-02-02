import React from 'react';

import './styles.css';

import Logo from '../../assets/logo2.png';

function Footer() {
  return (
      <div className="footer-container">
        <div className="footer-text">
            <span>Politica de privacidade</span>
        </div>
        <div className="footer-logo">
            <img src={Logo} alt="logo"/>
        </div>

      </div>
  );
}

export default Footer;