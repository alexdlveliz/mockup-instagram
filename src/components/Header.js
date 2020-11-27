// React
import React from 'react';

// Assets
import Logo from '../assets/images/instagram-logo.png';
import './styles/Header.scss';

function Header() {
  return (
    <React.Fragment>
      <header>
        <div id="logo">
          <img src={Logo} alt="Logo" />
          <h1>Instagram</h1>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
