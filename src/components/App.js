import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  let [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

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
          />
          <Footer />
          <div className="popup popup_type_big-image">
            <div className="popup__container popup__container_type_img">
              <button
                type="button"
                className="popup__close popup__close_type_big-image"
                aria-label="Закрыть"
              ></button>

              <img className="popup__image" src="#" />

              <p className="popup__caption"></p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
