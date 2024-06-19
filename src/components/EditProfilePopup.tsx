import React, { useContext, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [userName, setUserName] = useState();
  const [job, setJob] = useState();
let currentUser
  React.useEffect(() => {
    setUserName();
    setJob();
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: userName,
      about: job,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      formName="profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        required
        minLength="2"
        maxLength="40"
        value={userName || ''}
        type="text"
        autoComplete="off"
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
        value={job || ''}
        type="text"
        autoComplete="off"
        name="occupation"
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
