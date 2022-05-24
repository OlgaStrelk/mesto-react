import React, { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../utils/API";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const {
    onEditeProfile,
    onEditAvatar,
    onAddPlace,
    onCardClick,
    selectedCard,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const [isMouseEnterButton, setMouseEnterButton] = useState(false);

  const [cards, setCards] = useState([]);

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

  const handleMouseEnter = () => {
    setMouseEnterButton(true);
  };

  const handleMouseLeave = () => {
    setMouseEnterButton(false);
  };
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__name">
          <h1 className="profile__title">{currentUser.name}</h1>
        </div>

        <button
          className="profile__button profile__button_type_edit-description"
          type="button"
          aria-label="Редактировать профиль"
          onClick={onEditeProfile}
        ></button>

        <p className="profile__description">{currentUser.about}</p>

        <div
          className="profile__user-pic"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
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

      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            selectedCard={selectedCard}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
