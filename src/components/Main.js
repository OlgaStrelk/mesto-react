import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function Main() {
  let [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  let [isMouseEnterButton, setMouseEnterButton] = useState(false);
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleMouseEnter = () => {
    setMouseEnterButton(true);
  };

  const handleMouseLeave = () => {
    setMouseEnterButton(false);
  };

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
          onClick={handleEditProfileClick}
        ></button>

        <p className="profile__description"></p>

        <div className="profile__user-pic" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isMouseEnterButton && <button
            className="profile__button profile__button_type_edit-user-pic"
            type="button"
            aria-label="Редактировать аватар"
            onClick={handleEditAvatarClick}
          ></button>}
        </div>

        <button
          className="profile__button profile__button_type_add-card"
          type="button"
          aria-label="Добавить новое место"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="cards"></section>

      {isEditProfilePopupOpen && (
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
        >
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            autoComplete="off"
            name="name"
            id="form-field-name"
            className="popup__field popup__field_type_name"
            placeholder="Ваше имя"
          />

          <span id="form-field-name-error" className="popup__error"></span>

          <input
            required
            minLength="2"
            maxLength="200"
            type="text"
            autoComplete="off"
            name="occupation"
            id="form-field-job"
            className="popup__field popup__field_type_job"
            placeholder="Чем вы занимаетесь?"
          />

          <span id="form-field-job-error" className="popup__error"></span>
        </PopupWithForm>
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          title="Новое место"
          name="add-card"
          isOpen={isAddPlacePopupOpen}
        >
          <input
            required
            minLength="2"
            maxLength="30"
            type="text"
            name="place"
            className="popup__field"
            id="form-field-place"
            placeholder="Название"
          />

          <span id="form-field-place-error" className="popup__error"></span>

          <input
            required
            type="url"
            name="link"
            className="popup__field"
            id="form-field-link"
            placeholder="Ссылка на картинку"
          />

          <span id="form-field-link-error" className="popup__error"></span>
        </PopupWithForm>
      )}
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          title="Обновить аватар"
          name="edit-user-pic"
          isOpen={isEditAvatarPopupOpen}
        >
          <input
            required
            type="url"
            name="link"
            className="popup__field"
            id="form-field-user-pic"
            placeholder="Ссылка на аватар"
          />

          <span id="form-field-user-pic-error" className="popup__error"></span>
        </PopupWithForm>
      )}
    </main>
  );
}

export default Main;

/*<div className="popup popup_type_add-card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close popup__close_type_add-card"
            aria-label="Закрыть"
          ></button>

          <h2 className="popup__title">Новое место</h2>

          <form
            name="edit-form"
            className="popup__form popup__form_type_add-card"
            noValidate
          >
            <input
              required
              minLength="2"
              maxLength="30"
              type="text"
              name="place"
              className="popup__field"
              id="form-field-place"
              placeholder="Название"
            />

            <span id="form-field-place-error" className="popup__error"></span>

            <input
              required
              type="url"
              name="link"
              className="popup__field"
              id="form-field-link"
              placeholder="Ссылка на картинку"
            />

            <span id="form-field-link-error" className="popup__error"></span>

            <button
              type="submit"
              className="popup__submit"
              aria-label="Создать"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>

          <h2 className="popup__title">Вы уверены?</h2>
          <form
            name="delete-form"
            className="popup__form popup__form_type_delete-card"
            noValidate
          >
            <button
              type="submit"
              className="popup__submit"
              aria-label="Создать"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-user-pic">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>

          <h2 className="popup__title">Обновить аватар</h2>
          <form
            name="delete-form"
            className="popup__form"
            noValidate
          >
            <input
              required
              type="url"
              name="link"
              className="popup__field"
              id="form-field-user-pic"
              placeholder="Ссылка на аватар"
            />

            <span
              id="form-field-user-pic-error"
              className="popup__error"
            ></span>

            <button
              type="submit"
              className="popup__submit"
              aria-label="Создать"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>*/
