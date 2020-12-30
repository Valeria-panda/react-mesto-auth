import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({isOpen, onClose, onConfirmDelete, isLoading}) {
  
  function handleSubmit(evt) {
    evt.preventDefault();
    onConfirmDelete();
  }

    return (
      <PopupWithForm
        formName='popup'
        formId = 'popup-deleteCards'
        title='Вы уверенны?'
        submitButtonText='Да'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      ></PopupWithForm>
    );
  }
export default ConfirmPopup;