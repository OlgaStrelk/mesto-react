import React from "react";

const PopupWithForm = ({
  title,
  formName,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) => {
  return (
    <div
      className={`popup poup_type_${formName} ${isOpen && "popup_is-opened"}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className={`popup__close popup__close_type_${formName}`}
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <h2 className="popup__title">{title}</h2>
        <form
          name={formName}
          className={`popup__form popup__form_type_${formName}`}
          onSubmit={onSubmit}
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
  );
};

export default PopupWithForm;
