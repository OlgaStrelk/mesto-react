import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  let [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  let [selectedCard, handleCardClick] = useState([" ", false]);

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    handleCardClick([" ", false]);
  };

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onClose={closeAllPopups}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            onEditeProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            selectedCard={selectedCard}
          />
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
              <button
                type="submit"
                className="popup__submit"
                aria-label="Сохранить"
              >
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
              <button
                type="submit"
                className="popup__submit"
                aria-label="Создать"
              >
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
            </PopupWithForm>
          )}
          <ImagePopup selectedCard={selectedCard} onClose={onClose} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
