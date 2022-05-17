import React, { useState } from "react";

function Card(props) {
  
  const handleClick = () => {
    props.onCardClick([props.card, true]);
  }

  return (
    <div className="cards__item">
      <img src={props.card.link} alt={props.card.name} className="cards__image" onClick={handleClick}/>

      <button type="button" className="cards__remove"></button>

      <div className="cards__caption">
        <h2 className="cards__title">{props.card.name}</h2>

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
