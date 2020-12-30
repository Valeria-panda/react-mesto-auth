import React from 'react';
import Form  from './Form';

function PopupWithForm
  ({ 
    isOpen,
    formId,
    onSubmit,
    onClose,
    formName,
    title,
    children,
    submitButtonText,
    disabled,
    isLoading,
  })
  {
    return(
         <section className={`popup ${isOpen && 'popup_opened'}`}>
          <div className="popup__background"></div>

          <Form
            formId={formId}
            isPopup={true}
            formName={formName}
            onSubmit={onSubmit}
            onClose={onClose}
            isLoading={isLoading}
            title={title}
            children={children}
            disabled={disabled}
            submitButtonText={submitButtonText}
          ></Form>

      </section>
    )

}

export default PopupWithForm;