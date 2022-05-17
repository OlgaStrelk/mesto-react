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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
