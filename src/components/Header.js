import React from 'react';
import logo from '../assets/logo-facebook.png';


function Header(){
    return (
      <header>
        <nav>
          <img src={logo} />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }

export default Header;