import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";
import { api } from "../utils/API";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [selectedCard, handleCardClick] = useState(null);
  const [cardDelete, setCardDelete] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setCurrentUser(data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardDeleteRequest = (card) => {
    setCardDelete(card);
    setDeleteCardPopupOpen(true);
  };

  const handleCardDelete = (e) => {
    e.preventDefault();
    api
      .deleteCard(cardDelete._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardDelete._id));
        setDeleteCardPopupOpen(false);
      })
      .catch((err) => console.log(`При удалении карточки: ${err}`));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__container">
            <Header />
            <Main
              cards={cards}
              onEditeProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              selectedCard={selectedCard}
              onCardDelete={handleCardDeleteRequest}
            />

            <PopupWithForm
              title="Вы уверены?"
              name="delete-card"
              isOpen={isDeleteCardPopupOpen}
              onClose={closeAllPopups}
              buttonText="Да"
              onSubmit={handleCardDelete}
            ></PopupWithForm>

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
