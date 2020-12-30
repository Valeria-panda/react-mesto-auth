import { React } from "react";
import AuthorizeForm from 'AuthorizeForm';

function Register(){
    

    return(
        <AuthorizeForm
            title='Регистрация'
            submitButtonText='Зарегистрироваться'
            path='/sign-up'
            loginText='Ещё не зарегистрированы?'
            loginLink='Регистрация'
            onSubmit={submitForm}
        />
    )
}

export default Register;