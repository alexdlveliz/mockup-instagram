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

        <div id="searchbar">
          <div id="searchbar-outline">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div id="actions">
          <button id="new-post">
            <i class="fas fa-plus-circle"></i> Add a new post
          </button>

          <button id="profile">
            Profile
            <img src="https://picsum.photos/200" alt="profile" />
          </button>

          <button id="notifications">
            <i class="far fa-bell"></i>
          </button>

          <button id="messages">
            <i class="far fa-envelope"></i>
          </button>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
