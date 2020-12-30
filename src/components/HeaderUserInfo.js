import React from 'react';

function HeaderUserInfo({ email, signOut }) {
  return (
    <div className='header__user-auth_info'>
      <span>{email}</span>
      <button className='header__user-auth_out' onClick={signOut}>Выйти</button>
    </div>
  );
}

export default HeaderUserInfo;