import React from 'react';
import headerLogo from '../images/headerlogo.svg';

import { Link, useLocation } from 'react-router-dom';
import AuthInfo from './AuthInfo';

function Header
  ({
    loggedIn, email, signOut
  }) 
 
  {

  const { pathname } = useLocation();
  const linkText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
  const linkPath = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

  return (
    <header className="header section">
     <img className="header__logo-image" src={headerLogo} alt="логотип сайта"/>
     {loggedIn
        ? (<>
          <AuthInfo email={email} signOut={signOut} />
        </>)
        : (<Link to={linkPath} className="link header__link">{linkText}</Link>)
      }
    </header>
  );
}

export default Header;