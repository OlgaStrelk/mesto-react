import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password });
  }
  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__container">
          <h3 className="auth-form__title">Регистрация</h3>
          <label className="auth-form__input">
            <input
              type="email"
              name="email"
              id="email"
              className="auth-form__field"
              placeholder="Email"
              onChange={handleEmailChange}
              required
            />
          </label>
          <label className="auth-form__input">
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form__field"
              placeholder="Пароль"
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>
        <div className="auth-form__container">
          <button className="auth-form__button" type="submit">
            Зарегистрироваться
          </button>
          <p className="auth-form__text">
            Уже зарегистрированы?
            <Link className="auth-form__link" to="/sign-in">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
