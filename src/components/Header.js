import React from 'react';
import headerLogo from '../images/headerlogo.svg';
import HeaderAuthorizeInfo from './HeaderAuthorizeInfo';

function Header
  ({
    loggedIn, email, signOut
  }) 
 
  {
    const enter = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
    const enterPath = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

  return (
    <header className="header section">
     <img className="header__logo-image" src={headerLogo} alt="логотип сайта"/>
     {loggedIn  ? (<><HeaderAuthorizeInfo email={email} signOut={signOut}/></>)
                : (<Link to={enterPath} className="link header__link">{enter}</Link>)
                }
    </header>
  );
}

export default Header;