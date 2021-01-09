import React from 'react';
import { Link } from 'react-router-dom';

function Form
({
    formName,
    formId,
    onSubmit,
    title,
    children,
    isLoading,
    submitButtonText,
    isPopup,
    path,
    loginText,
    loginLink,
    noConfirm,
    disabled,
    onClose
})
    {
        return(
            <form 
            name={formName} 
            id={formId}
            onSubmit={onSubmit}
            className={`${isPopup && 'popup__form'} popup__form_type_${formName}`}>
                
                <h2 className={`${!isPopup && 'authorize__form-title'} popup__title`}>{title}</h2>
                {children}

                {!noConfirm
          && (<button type="submit" className={`${!isPopup && 'authorize__form-button'} popup__submit`}
                        disabled={disabled}>
                        {isLoading ? `Сохранение...` : submitButtonText}
                </button>)}

                {isPopup && (<button type="reset" className="popup__button" onClick={onClose}/>)}

                {!isPopup && (<span className="authorize__form-quest">{loginText}<Link to={path} className="authorize__form-quest authorize__form-link">{loginLink}</Link></span>)}

            </form>
        )

}

export default Form;