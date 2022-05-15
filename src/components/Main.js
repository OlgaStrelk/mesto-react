import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function Main() {
  let [isModalOpen, setModalIsOpen] = useState(false);
  function handleEditAvatarClick() {
    setModalIsOpen(true);
  }

  // const handleEditProfileClick = () => {

  // }
  // const handleAddPlaceClick = () => {

  // }
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
          onClick={handleEditAvatarClick}
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

      {isModalOpen && <PopupWithForm />}
    </main>
  );
}

export default Main;
