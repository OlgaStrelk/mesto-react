import React, { useContext, useState } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const {
    onEditeProfile,
    onEditAvatar,
    onAddPlace,
    cards,
    onCardClick,
    selectedCard,
    onCardDelete,
    onCardLike,
  } = props;

  const currentUser = useContext(CurrentUserContext);
  const [isMouseEnterButton, setMouseEnterButton] = useState(false);

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
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
