import React from "react";
import { Route, Link, Routes } from "react-router-dom";

function Header({ email, onSignOut }) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  let isMain;
  // const isMain = useRouteMatch({ path: "/", exact: true });

  return (
    <header
      className={`header  ${isMenuOpen ? "header_menu-open" : ""} 
    ${isMain ? "header_page-main" : ""}`}
    >
      <div className="header__logo"></div>
      {/* <Routes>
        <Route path="/"> */}
      <button
        className="header__burger"
        type="button"
        aria-label="меню"
        onClick={toggleMenu}
      ></button>
      <div className="header__container">
        <p className="header__user">{email}</p>
        <button className="header__logout" onClick={onSignOut}>
          Выйти
        </button>
      </div>
      {/* </Route> */}
      {/* <Route path="/sign-up">
          <Link className="header__auth-link" to="sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__auth-link" to="sign-up">
            Регистрация
          </Link>
        </Route>
      </Routes> */}
      //{" "}
    </header>
  );
}

export default Header;
