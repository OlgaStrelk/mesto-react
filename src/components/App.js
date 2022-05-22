import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, handleCardClick] = useState(null);

  useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setCurrentUser({
          userName: data.name,
          userDesciption: data.about,
          userAvatar: data.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    handleCardClick(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditeProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            selectedCard={selectedCard}
          />

          <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
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

          <PopupWithForm
            title="Новое место"
            name="add-card"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText="Создать"
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
          <PopupWithForm
            title="Обновить аватар"
            name="edit-user-pic"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
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
          </PopupWithForm>
          <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
          <Footer />
        </div>
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
