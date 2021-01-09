
import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip(props) {
  const { isOpen, onClose, loggedIn, message } = props;

  return (
    <PopupWithForm
      formName='infoTooltip'
      noConfirm={true}
      isOpen={isOpen}
      onClose={onClose}
      loggedIn={loggedIn}
      isPopup={true}
    >
      <img src={message.iconPath} alt='Иконка авторизации' className='form__icon' />
      <p className='infoToolTip__text'>{message.text}</p>

    </PopupWithForm >
  );
}

export default InfoTooltip;