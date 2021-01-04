  
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
        const [inputType, setInputType] = useState('password');
      
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
          !passwordRef.current.validity.valid
            ? setPasswordValid(false)
            : setPasswordValid(true);
        }
        function handleSubmit(evt) {
            evt.preventDefault();
            if (!email && !password) return;
            onSubmit(password, email);
            setEmail('');
            setPassword('');
          }
          function handleShowPassword() {
            inputType === 'password' ? setInputType('text') : setInputType('password');
          }
    
    
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

            <span className={`form__input-error ${!emailValid && 'form__input-error_active'}`} id='email-error'>
                {emailError}
            </span>

            </lable>

            <lable htmlFor="password" className="authorize__form-label">
                <input 
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
                <button type='button' className={`form__input_password form__input_password_${inputType} button`}
                        onClick={handleShowPassword}
                        onKeyDown={(evt) => evt.preventDefault}></button>
                <span className={`form__input-error ${!passwordValid && 'form__input-error_active'}`}
                        id='password-error'>
                    {passwordError}
                </span>
            </lable>
            
            </Form>

        </section>
    )
}
export default AuthorizeForm;