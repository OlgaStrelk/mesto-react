import React, { useState } from "react";

function Card(props) {
  const { card } = props;
  return (
    <div className="cards__item">
      <img src={card.link} alt={card.name} className="cards__image" />

      <button type="button" className="cards__remove"></button>

      <div className="cards__caption">
        <h2 className="cards__title">{card.name}</h2>

        <button
          className="cards__like"
          type="button"
          aria-label="Нравится"
        ></button>
        <span className="cards__like-count"></span>
      </div>
    </div>
  );
}

export default Card;
