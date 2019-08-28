import React from 'react';

import './index.css';

import logo from '../../assets/logo.png';

function HeaderComponent() {
  return (
    <div className='header-bar'>
      <div className='img-container'>
        <img src={logo} />
      </div>
      <div>
        <p>Meu Perfil</p>
      </div>
    </div>
  );
}

export default HeaderComponent;
