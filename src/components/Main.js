import React, { useState } from "react";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__name">
          <h1 className="profile__title"></h1>
        </div>

        <button
          className="profile__button profile__button_type_edit-description"
          type="button"
          aria-label="Редактировать профиль"
        ></button>

        <p className="profile__description"></p>

        <div className="profile__user-pic">
          <button
            className="profile__button profile__button_type_edit-user-pic"
            type="button"
            aria-label="Редактировать аватар"
          ></button>
        </div>

        <button
          className="profile__button profile__button_type_add-card"
          type="button"
          aria-label="Добавить новое место"
        ></button>
      </section>

      <section className="cards"></section>
    </main>
  );
}

export default Main;
