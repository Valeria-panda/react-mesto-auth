  
import React, { useState, useRef } from 'react';
import Form from './Form';

function AuthorizeForm({onSubmit, title, submitButtonText, path,
    loginText, loginLink, autoCompleteEmail, autoCompletePassword, formId}){
       
       
       
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [emailValid, setEmailValid] = useState(false);
        const [passwordValid, setPasswordValid] = useState(false);

        const emailRef = useRef();
        const passwordRef = useRef();
      
        function handleChange(evt) {
          const { value } = evt.target;
          evt.target.name === 'email'
            ? setEmail(value)
            : setPassword(value);
          validate();
        }
      
        function validate() {
          setEmailError(emailRef.current.validationMessage);
          setPasswordError(passwordRef.current.validationMessage);
          !emailRef.current.validity.valid ? setEmailValid(false) : setEmailValid(true);
          !passwordRef.current.validity.valid ? setPasswordValid(false) : setPasswordValid(true);
        }

        function handleSubmit(evt) {
            evt.preventDefault();
            if (!email && !password) return;
            onSubmit(password, email);
            setEmail('');
            setPassword('');
        }

    
    
        return(
        <section className="authorize">
            <Form
                formId={formId}
                formName='signin'
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
                    ref={emailRef}
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

            <span className={`popup__input-error ${!emailValid && 'authorize__form-error_visible'}`} id='email-error'>
                {emailError}
            </span>

            </lable>

            <lable htmlFor="password" className="authorize__form-label">
                <input 
                    ref={passwordRef}
                    id="password" 
                    type="password" 
                    placeholder="Пароль" 
                    className="authorize__form-input"
                    name='password'
                    value={password || ''}
                    minLength='8'
                    maxLength='30'
                    autoComplete={autoCompletePassword}
                    required
                    onChange={handleChange}
                />
                <span className={`popup__input-error ${!passwordValid && 'authorize__form-error_visible'}`}
                        id='password-error'>
                    {passwordError}
                </span>
            </lable>
            
            </Form>

        </section>
    )
}
export default AuthorizeForm;