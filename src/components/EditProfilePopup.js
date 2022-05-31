import React, { useContext, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [job, setJob] = useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setJob(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: job,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        required
        minLength="2"
        maxLength="40"
        type="text"
        autoComplete="off"
        name="name"
        value={name}
        onChange={handleNameChange}
        id="form-field-name"
        className="popup__field popup__field_type_name"
        placeholder="Ваше имя"
      />

      <span id="form-field-name-error" className="popup__error"></span>

      <input
        required
        minLength="2"
        maxLength="200"
        type="text"
        autoComplete="off"
        name="occupation"
        value={job}
        onChange={handleJobChange}
        id="form-field-job"
        className="popup__field popup__field_type_job"
        placeholder="Чем вы занимаетесь?"
      />

      <span id="form-field-job-error" className="popup__error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
