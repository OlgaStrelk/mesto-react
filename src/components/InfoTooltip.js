import React from "react";
// import successIcon from "../images/success-pic.svg";
// import errorIcon from "../images/error-pic.svg";

function InfoTooltip({ isOpen }) {
  return (
    <div className={`popup ${isOpen && "popup_is-opened"}`}>
      <div className="popup__content">
        <form className="popup__form" noValidate>
          <button type="button" className="popup__close"></button>
          <div>
            <img className="popup__icon" alt="" /> {/* successIcon || errorIcon*/}
            <p className="popup__status-message"></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
