import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import { api } from "../utils/API";
import ImagePopup from "./ImagePopup";

function Main(props) {
  const {
    onClose,
    onEditeProfile,
    onEditAvatar,
    onAddPlace,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
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

  React.useEffect(() => {
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

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

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

      <section className="cards"></section>

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
          <button type="submit" className="popup__submit" aria-label="Создать">
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

          <span id="form-field-user-pic-error" className="popup__error"></span>
          <button type="submit" className="popup__submit" aria-label="Создать">
            Сохранить
          </button>
        </PopupWithForm>
      )}
      <ImagePopup selectedCard={selectedCard} onClose={onClose} />
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} selectedCard={selectedCard} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
