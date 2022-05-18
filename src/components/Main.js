import { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../utils/API";

function Main(props) {
  const {
    onEditeProfile,
    onEditAvatar,
    onAddPlace,
    onCardClick,
    selectedCard,
  } = props;
  const [isMouseEnterButton, setMouseEnterButton] = useState(false);
  const [stateProfile, setStateProfile] = useState({
    userName: "",
    userDesciption: "",
    userAvatar: "",
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
    api
      .getProfile()
      .then((data) => {
        setStateProfile({
          userName: data.name,
          userDesciption: data.about,
          userAvatar: data.avatar,
        });
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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__name">
          <h1 className="profile__title">{stateProfile.userName}</h1>
        </div>

        <button
          className="profile__button profile__button_type_edit-description"
          type="button"
          aria-label="Редактировать профиль"
          onClick={onEditeProfile}
        ></button>

        <p className="profile__description">{stateProfile.userDescription}</p>

        <div
          className="profile__user-pic"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${stateProfile.userAvatar})` }}
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
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
