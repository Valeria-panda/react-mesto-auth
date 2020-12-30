import { React } from "react";
import AuthorizeForm from './AuthorizeForm';

function Login(){
    

    return(
        <AuthorizeForm
            title='Вход'
            submitButtonText='Войти'
            path='/sign-in'
            loginText='Ещё не зарегистрированы?'
            loginLink='Регистрация'
            onSubmit={onSubmit}
            autoCompleteEmail='email'
            autoCompletePassword='current-password'
        />
    )
}

export default Login;