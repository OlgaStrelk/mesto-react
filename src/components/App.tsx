import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import { register, authorize, checkToken } from "../utils/AuthAPI";

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
  const [tooltipStatus, setTooltipStatus] = useState();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getProfile()
        .then((data) => {
          setCurrentUser(data);
        })

        .catch((err) =>
          console.log(`При загрузке данных пользователя: ${err}`)
        );
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((err) =>
          console.log(`При загрузке первоначального массива карточек: ${err}`)
        );
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          setEmail(res.data.email);
          setLoggedIn(true);
          navigate("/");
        })
        .catch(() => {
          localStorage.removeItem("jwt");
        });
    }
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
    setTooltipStatus();
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

  const onRegister = ({ email, password }) => {
    register(email, password)
      .then(() => {
        navigate("/sign-in");
        setTooltipStatus({
          text: "Вы успешно зарегистрировались",
          iconType: "success",
        });
      })
      .catch(() => {
        setTooltipStatus({
          text: "Что-то пошло не так!  Попробуйте ещё раз.",
          iconType: "error",
        });
      });
  };

  const onLogin = ({ email, password }) => {
    authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        setEmail(email);
        navigate("/");
      })
      .catch(() => {
        setTooltipStatus({
          text: "Что-то пошло не так! Попробуйте ещё раз.",
          iconType: "error",
        });
      });
  };

  const onSignOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/sign-in");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__container">
            <Header email={email} onSignOut={onSignOut} />
            <Routes>
              {/* <ProtectedRoute
                exact
                path="/"
                loggedIn={isLoggedIn}
              > */}
              <Route
                path="/"
                element={
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
                }
              />

              {/* </ProtectedRoute> */}

              <Route
                path="/sign-up"
                element={<Register onRegister={onRegister} />}
              />

              <Route path="/sign-in" element={<Login onLogin={onLogin} />} />

              {/* <Route path="*">
                {isLoggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" />}
              </Route> */}
            </Routes>
            {/* <PopupWithForm
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

            <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
            <Footer />
            <InfoTooltip
              isOpen={!!tooltipStatus}
              onClose={closeAllPopups}
              status={tooltipStatus}
            /> */}
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
