import React from 'react';
import './styles.css';

import Carousel from '../../components/carousel/index';
import Body from '../../components/body/index';
import Servic from '../../components/servic/index';
import SemiFooter from '../../components/semiFooter/index';
import Footer from '../../components/footer/index';


function home() {
  return (
    <div className="home-container">
      <Carousel />
      <Body />
      <Servic />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default home;