import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { card } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `${
    isOwn ? "cards__remove-button" : "cards__remove-button_hidden"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = ` ${
    !isLiked ? "cards__like" : "cards__like cards__like_is-active"
  }`;

  const handleClick = () => {
    props.onCardClick(card);
  };

  const handleLikeClick = () => {
    props.onCardLike(card);
  };

  function handleDeleteClick() {
    props.onCardDelete(card);
  }

  return (
    <div className="cards__item">
      <img
        src={card.link}
        alt={card.name}
        className="cards__image"
        onClick={handleClick}
      />

      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>

      <div className="cards__caption">
        <h2 className="cards__title">{card.name}</h2>

        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Нравится"
          onClick={handleLikeClick}
        ></button>
        <span className="cards__like-count"></span>
      </div>
    </div>
  );
}

export default Card;
