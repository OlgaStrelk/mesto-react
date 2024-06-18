import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(name, link);
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        required
        minLength="2"
        maxLength="30"
        type="text"
        name="place"
        value={name}
        onChange={handleNameChange}
        className="popup__field"
        id="form-field-place"
        placeholder="Название"
      />

      <span id="form-field-place-error" className="popup__error"></span>

      <input
        required
        type="url"
        name="link"
        value={link}
        onChange={handleLinkChange}
        className="popup__field"
        id="form-field-link"
        placeholder="Ссылка на картинку"
      />

      <span id="form-field-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
