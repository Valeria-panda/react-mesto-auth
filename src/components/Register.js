import { React } from "react";
import AuthorizeForm from './AuthorizeForm';

function Register({ onRegister }){
    function submitForm(password, email) {
        onRegister(password, email);
      }
    

    return(
        <AuthorizeForm
            title='Регистрация'
            submitButtonText='Зарегистрироваться'
            path='/sign-in'
            loginText='Уже зарегистрированы?'
            loginLink='Войти'
            onSubmit={submitForm}
        />
    )
}

export default Register;