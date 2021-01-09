import BadRequest from '../components/BadRequest';
import NotAuth from '../components/NotAuth';

export const baseUrl = 'https://auth.nomoreparties.co';

// запрос на регистрацию

export const register = (password, email) => fetch(`${baseUrl}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          if (err.error) {
            throw new BadRequest(err.error);
          } else {
            throw new BadRequest(err.message);
          }
        });
    }
    return res.json();
  });

// Отправляем запрос за авторизацию

  export const authorize = (password, email) => fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      if (res.status === 400) {
        throw new BadRequest('Не передано одно из полей');
      }
      else if (res.status === 401) {
        throw new NotAuth('Пользователь с таким email не найден');
      }
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data.token;
      }
    });

// Отправляем запрос за получение токена

  export const getContent = (token) => {
    return fetch(`${baseUrl}/users/me`, {
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