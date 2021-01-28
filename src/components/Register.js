import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext'


function Register(props) {
  return(
    <div className="register">

        <form className="register__form" action="#" name="register_form" onSubmit={props.onSubmit} noValidate>
        <h2 className="register__header">Регистрация</h2>
        <input
          type="email"
          name="register-email"
          id="register-email"
          className="register__input register__input_email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          //onChange={(evt) => setName(evt.target.value)}
          required
        />
        <p className="popup__input-error-message" id="name-error"></p>
        <input
          type="password"
          name="register-password"
          id="register-password"
          className="register__input register__input_password"
          placeholder="Пароль"
          minLength="2"
          maxLength="200"
          //onChange={(evt) => setDescription(evt.target.value)}
          required
        />
        <p className="popup__input-error-message" id="description-error"></p>
          <button type="submit" className="register__submit-button">{props.submitButton}</button>
          <a className="register__form-link" id="register__form-link" href='sign-in'><p>Уже зарегистрированы? Войти</p></a>
        </form>
    </div>
  )
}

export default Register
