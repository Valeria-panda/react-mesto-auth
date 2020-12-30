import React from 'react';
import { Link } from 'react-router-dom';

function Form
({
    formName,
    formId,
    onSubmit,
    onClose,
    title,
    children,
    isLoading,
    submitButtonText,
    isPopup,
    path,
    loginText,
    loginLink
})
    {
        return(
            <form 
            formName={formName} 
            formId={formId}
            onSubmit={onSubmit}
            className={`${isPopup && 'popup__form'} popup__form_type_${formName}`}>
                <h2 className="popup__title">{title}</h2>
                {children}

                <button type="submit" className={`popup__submit ${isLoading && 'popup__submit'}`}>
                        {isLoading ? `Сохранение...` : submitButtonText}
                </button>

                {isPopup && (<button type="reset" className="popup__button" onClick={onClose}/>)}

                {!isPopup && (<span className="authorize__form-quest">{loginText}<Link to={path} className="authorize__form-quest authorize__form-link">{loginLink}</Link></span>)}

            </form>
        )

}

export default Form;