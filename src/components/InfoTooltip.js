import React from "react";
import successIcon from "../images/successPic.svg";
import errorIcon from "../images/errorPic.svg";

function InfoTooltip({ isOpen, onClose, status }) {
  console.log(status);

  const icons = {
    success: successIcon,
    error: errorIcon,
  };

  return (
    <div className={`popup ${isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <form className="popup__form" noValidate>
          <div>
            <img
              className="popup__icon"
              src={icons[status?.iconType]}
              alt={status?.text}
            />
            <p className="popup__status-message">{status?.text}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
