import React from 'react'
//import CurrentUserContext from '../contexts/CurrentUserContext'
//onSubmit={props.onSubmit}


function Login(props) {
  return(
    <div className="login">
        <form className="login__form" action="#" name="login_form" onSubmit={props.handleLogin} noValidate>
        <h2 className="login__header">Вход</h2>
        <input
          type="email"
          name="login-email"
          id="login-email"
          className="login__input login__input_email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          //onChange={(evt) => setName(evt.target.value)}
          required
        />
        <p className="popup__input-error-message" id="name-error"></p>
        <input
          type="password"
          name="login-password"
          id="login-password"
          className="login__input login__input_password"
          placeholder="Пароль"
          minLength="2"
          maxLength="200"
          //onChange={(evt) => setDescription(evt.target.value)}
          required
        />
        <p className="popup__input-error-message" id="description-error"></p>
          <button type="submit" className="login__submit-button">{props.submitButton}</button>
        </form>
    </div>
  )
}

export default Login
