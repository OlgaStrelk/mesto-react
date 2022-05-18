import React from "react";

const PopupWithForm = (props) => {
  const { title, name, isOpen, onClose, children, buttonText } = props;
  return (
    <>
      <div className={`popup poup_type_${name} ${isOpen && "popup_is-opened"}`}>
        <div className="popup__container">
          <button
            type="button"
            className="popup__close popup__close_type_${name}"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>

          <h2 className="popup__title">{title}</h2>
          <form
            name="${name}"
            className="popup__form popup__form_type_${name}"
            noValidate
          >
            {children}
            <button
                type="submit"
                className="popup__submit"
                aria-label={buttonText}
              >
                {buttonText}
              </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupWithForm;
