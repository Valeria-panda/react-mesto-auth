  
import React from 'react';
import Form from './Form';

function AuthorizeForm({title, submitButtonText, path,
    loginText, loginLink, onSubmit, autoCompleteEmail, autoCompletePassword}){
    return(
        <section className="authorize">
            <Form
                formId={formId}
                formName='entrance'
                title={title}
                submitButtonText={submitButtonText}
                isPopup={false}
                path={path}
                loginText={loginText}
                loginLink={loginLink}
                onSubmit={handleSubmit}
            >
            <lable htmlFor="email" className="authorize__form-label">
                <input 
                    id="email" 
                    type="email" 
                    placeholder="Email" 
                    className="authorize__form-input"
                    name='email'
                    value={email || ''}
                    minLength='6'
                    maxLength='40'
                    autoComplete={autoCompleteEmail}
                    required
                    onChange={handleChange}
                />
            </lable>

            <lable htmlFor="pass" className="authorize__form-label">
                <input 
                    id="pass" 
                    type="password" 
                    placeholder="Пароль" 
                    className="authorize__form-input"
                    name='pass'
                    value={pass || ''}
                    minLength='8'
                    maxLength='30'
                    autoComplete={autoCompletePassword}
                    required
                    onChange={handleChange}
                />
            </lable>
            
            </Form>

        </section>
    )
}
export default AuthorizeForm;