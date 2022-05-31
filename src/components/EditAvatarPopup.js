import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-user-pic"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
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
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
