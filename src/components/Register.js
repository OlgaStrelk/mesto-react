import React from "react";
import { Link } from "react-router-dom";

function Register() {


  return (
    <div className="auth-form">
      <form className="auth-form__form">
        <div className="auth-form__container">
          <h3 className="auth-form__title">Регистрация</h3>
          <label className="auth-form__input">
            <input
              type="email"
              name="email"
              id="email"
              className="auth-form__field"
              placeholder="Email"
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
              required
            />
          </label>
        </div>
        <div className="auth-form__container">
          <button className="auth-form__button" type="submit">
            Зарегистрироваться
          </button>
          <p className="auth-form__text">
            Уже зарегистрированы?{" "}
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
