import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

function HeaderComponent() {
  return (
    <div className="header-bar">
      <div className="img-container">
        <img src={logo} />
      </div>
      <div className="profile-row">
        <p>Meu Perfil</p>
        <img className="avatar" src="https://api.adorable.io/avatars/150/eu.png" />
      </div>
    </div>
  );
}

export default HeaderComponent;
