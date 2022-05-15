import React from "react";

const PopupWithForm = ({ isModalOpen, setModalIsOpen }) => {
  return (
    <>
      <div
        className={isModalOpen ? "popup popup_is-opened" : "popup popup_type_profile"}
        onClick={() => setModalIsOpen(false)}
      >
        <div className="popup__container" onClick={e => e.stopPropagation()}>
          <button
            type="button"
            className="popup__close popup__close_type_profile"
            aria-label="Закрыть"
          ></button>

          <h2 className="popup__title">Редактировать профиль</h2>

          <form
            name="edit-form"
            className="popup__form popup__form_type_profile"
            noValidate
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

            <button
              type="submit"
              className="popup__submit"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
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
            className="popup__close popup__close_type_delete-card"
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
            className="popup__close popup__close_type_edit-user-pic"
            aria-label="Закрыть"
          ></button>

          <h2 className="popup__title">Обновить аватар</h2>
          <form
            name="delete-form"
            className="popup__form popup__form_type_edit-user-pic"
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
      </div>
    </>
  );
};

export default PopupWithForm;
