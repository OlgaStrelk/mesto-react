import React from "react";

function ImagePopup(props) {
  const { selectedCard, onClose } = props;
  let card = selectedCard[0];
  let isOpen = selectedCard[1];
  return (
    <div
      className={`popup popup_type_big-image ${isOpen && "popup_is-opened"}`}
    >
      <div className="popup__container popup__container_type_img">
        <button
          type="button"
          className="popup__close popup__close_type_big-image"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <img className="popup__image" src={card.link} alt={card.name}/>

        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
