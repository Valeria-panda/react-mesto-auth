import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip({ isOpen, onClose, loggedIn, message }) {
  
    return (
      <PopupWithForm
        formName='infoTooltip'
        formId="infoTooltip"
        isOpen={isOpen}
        onClose={onClose}
        loggedIn={loggedIn}
      >
        <img src={message.iconPath} alt='Иконка авторизации' className='form__icon' />
        <p className='form__text'>{message.text}</p>

      </PopupWithForm>
    );
  }
export default InfoTooltip;