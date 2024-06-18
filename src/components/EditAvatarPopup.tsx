import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputValue = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputValue.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      formName="edit-user-pic"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputValue}
        required
        type="url"
        name="link"
        className="popup__field"
        id="form-field-user-pic"
        placeholder="Ссылка на аватар"
      />

      <span id="form-field-user-pic-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
