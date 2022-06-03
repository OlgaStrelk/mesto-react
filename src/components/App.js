import React, { useState, useEffect } from "react";
import { Route, useHistory, Switch, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";
import { api } from "../utils/API";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from './InfoTooltip';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [selectedCard, handleCardClick] = useState(null);
  const [cardDelete, setCardDelete] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setCurrentUser(data);
      })

      .catch((err) => console.log(`При загрузке данных пользователя: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) =>
        console.log(`При загрузке первоначального массива карточек: ${err}`)
      );
  }, []);

  const handleUpdateUser = (userUpdate) => {
    api
      .editProfile(userUpdate.name, userUpdate.about)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((err) =>
        console.log(`При обновлении информации о пользователе: ${err}`)
      )
      .then(() => closeAllPopups());
  };

  const handleUpdateAvatar = ({ avatar }) => {
    api
      .changeUserPic(avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
      })
      .catch((err) =>
        console.log(`При обновлении аватара пользователя: ${err}`)
      )
      .then(() => closeAllPopups());
  };

  const handleAddPlaceSubmit = (name, link) => {
    api
      .addCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.log(`При добавлении новой карточки: ${err}`))
      .then(() => closeAllPopups());
  };

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
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(`При изменении состояния лайка: ${err}`));
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
            <Switch>
              <Route exact path="/">
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

                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
                />

                <AddPlacePopup
                  onClose={closeAllPopups}
                  isOpen={isAddPlacePopupOpen}
                  onAddCard={handleAddPlaceSubmit}
                ></AddPlacePopup>

                <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
                />

                <ImagePopup
                  selectedCard={selectedCard}
                  onClose={closeAllPopups}
                />
              </Route>
              <Route path="/sign-up">
                <Register />
              </Route>
              <Route path="/sign-in">
                <Login />
              </Route>
              <Route path="*">
                {isLoggedIn ? <Redirect to="/" /> : <Redirect to="" />}
              </Route>
            </Switch>
            <Footer />
            <InfoTooltip isOpen={false}/>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
