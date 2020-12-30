import { React } from "react";
import AuthorizeForm from 'AuthorizeForm';

function login(){
    

    return(
        <AuthorizeForm
            title='Вход'
            submitButtonText='Войти'
            path='/sign-in'
            loginText='Ещё не зарегистрированы?'
            loginLink='Регистрация'
            onSubmit={submitForm}
            autoCompleteEmail='email'
            autoCompletePassword='current-password'
        />
    )
}

export default Login;