
export const BASE_URL = 'http://www.api.s-mesto.students.nomoreparties.co';

// Отправляем запрос за регистрацию
export const register = (password, email) => {
    return fetch(`${BASE_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  };


// Отправляем запрос за авторизацию

  export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
    .then((res => res.json()))
    .then((data) => {
        if (data.token) {
            localStorage.setItem('jwt', data.token);
            return data.token;
        }
    })
    .catch(err => console.log(err))
  };

// Отправляем запрос за получение токена

  export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => data)
  }