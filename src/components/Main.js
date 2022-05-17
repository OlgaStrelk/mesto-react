import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/API";

function Main(props) {
  const {
    onClose,
    onEditeProfile,
    onEditAvatar,
    onAddPlace,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
  } = props;

  let [isMouseEnterButton, setMouseEnterButton] = useState(false);
  let [state, setState] = useState({
    userName: "",
    userDesciption: "",
    userAvatar: "",
  });

  React.useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        console.log(data);
        setState({
          userName: data.name,
          userDesciption: data.about,
          userAvatar: data.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <h1 className="profile__title">{state.userName}</h1>
        </div>

        <button
          className="profile__button profile__button_type_edit-description"
          type="button"
          aria-label="Редактировать профиль"
          onClick={onEditeProfile}
        ></button>

        <p className="profile__description">{state.userDescription}</p>

        <div
          className="profile__user-pic"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${state.userAvatar})` }}
        >
          {isMouseEnterButton && (
            <button
              className="profile__button profile__button_type_edit-user-pic"
              type="button"
              aria-label="Редактировать аватар"
              onClick={onEditAvatar}
            ></button>
          )}
        </div>

        <button
          className="profile__button profile__button_type_add-card"
          type="button"
          aria-label="Добавить новое место"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="cards"></section>

      {isEditProfilePopupOpen && (
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={onClose}
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
          <button type="submit" class="popup__submit" aria-label="Сохранить">
            Сохранить
          </button>
        </PopupWithForm>
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          title="Новое место"
          name="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={onClose}
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
          <button type="submit" className="popup__submit" aria-label="Создать">
            Создать
          </button>
        </PopupWithForm>
      )}
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          title="Обновить аватар"
          name="edit-user-pic"
          isOpen={isEditAvatarPopupOpen}
          onClose={onClose}
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
          <button type="submit" className="popup__submit" aria-label="Создать">
            Сохранить
          </button>
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
