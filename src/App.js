import React, { Component } from 'react';
import './index.css';
import flame from './assets/r-o-flame-logo-hi.png';
import corgi from './assets/images.jpg';
import kitchen from './assets/kitchen-349749-crop.jpg';
import hob from './assets/pexels-photo-gas-stove.jpeg';

import Contact from './components/Contact';
import CheckTrade from './components/CheckTrade';

class App extends Component {

  render() {

    const imgWidth = {
      width:'40px'
    }

    return (
      <div className="container">
        <header className="page-top">
          <div className="business-logo">
              <img src={flame} className="business-logo__logo-img" alt="logo" />
          </div>
          <div className="corgi">
            <img src={corgi} className="corgi__corgi-logo" alt="corgi logo" />
          </div>
        </header>
        <main>
          <section className="contact-banner">
            <img src={kitchen} alt="kitchen" className="contact-banner__kitchen-img"/>
              <div className="contact-banner__image-text">
                <ul className="contact-banner__locations">
                  <li className="contact-banner__locations--location-item">CROYDON</li>
                  <li className="contact-banner__locations--location-item">&bull; PURLEY</li>
                </ul>
                <p className="contact-banner__please-call">PLEASE CALL!</p>
                <p className="contact-banner__phone-number">020 3654 6774</p>
              </div>
          </section>
          <section className="page-middle clearfix">
            <div className="services">
              <h3 className="services__heading">Our Services</h3>
              <p className="services__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Contact />
          </section>
          <section className="page-bottom clearfix">
            <CheckTrade />
            <div className="gas-hob">
              <img src={hob} className="gas-hob__img" alt="gas hob" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
