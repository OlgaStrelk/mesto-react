import "./index.css";

function App() {
  return (
    <div className="App page">
      <div className="page__container">
        <header className="header">
          <div className="header__logo"></div>
        </header>

        <main className="content">
          <section className="profile">
            <div className="profile__name">
              <h1 className="profile__title"></h1>
            </div>

            <button
              className="profile__button profile__button_type_edit-description"
              type="button"
              aria-label="Редактировать профиль"
            ></button>

            <p className="profile__description"></p>

            <div className="profile__user-pic">
              <button
                className="profile__button profile__button_type_edit-user-pic"
                type="button"
                aria-label="Редактировать аватар"
              ></button>
            </div>

            <button
              className="profile__button profile__button_type_add-card"
              type="button"
              aria-label="Добавить новое место"
            ></button>
          </section>

          <section className="cards"></section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_profile">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_type_profile"
              aria-label="Закрыть"
            ></button>

            <h2 className="popup__title">Редактировать профиль</h2>

            <form
              name="edit-form"
              className="popup__form popup__form_type_profile"
              novalidate
            >
              <input
                required
                minlength="2"
                maxlength="40"
                type="text"
                autocomplete="off"
                name="name"
                id="form-field-name"
                className="popup__field popup__field_type_name"
                placeholder="Ваше имя"
              />

              <span id="form-field-name-error" className="popup__error"></span>

              <input
                required
                minlength="2"
                maxlength="200"
                type="text"
                autocomplete="off"
                name="occupation"
                id="form-field-job"
                className="popup__field popup__field_type_job"
                placeholder="Чем вы занимаетесь?"
              />

              <span id="form-field-job-error" className="popup__error"></span>

              <button
                type="submit"
                className="popup__submit"
                aria-label="Сохранить"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_add-card">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_type_add-card"
              aria-label="Закрыть"
            ></button>

            <h2 className="popup__title">Новое место</h2>

            <form
              name="edit-form"
              className="popup__form popup__form_type_add-card"
              novalidate
            >
              <input
                required
                minlength="2"
                maxlength="30"
                type="text"
                name="place"
                className="popup__field"
                id="form-field-place"
                placeholder="Название"
              />

              <span id="form-field-place-error" className="popup__error"></span>

              <input
                required
                type="url"
                name="link"
                className="popup__field"
                id="form-field-link"
                placeholder="Ссылка на картинку"
              />

              <span id="form-field-link-error" className="popup__error"></span>

              <button
                type="submit"
                className="popup__submit"
                aria-label="Создать"
              >
                Создать
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_type_delete-card"
              aria-label="Закрыть"
            ></button>

            <h2 className="popup__title">Вы уверены?</h2>
            <form
              name="delete-form"
              className="popup__form popup__form_type_delete-card"
              novalidate
            >
              <button
                type="submit"
                className="popup__submit"
                aria-label="Создать"
              >
                Да
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_edit-user-pic">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_type_edit-user-pic"
              aria-label="Закрыть"
            ></button>

            <h2 className="popup__title">Обновить аватар</h2>
            <form
              name="delete-form"
              className="popup__form popup__form_type_edit-user-pic"
              novalidate
            >
              <input
                required
                type="url"
                name="link"
                className="popup__field"
                id="form-field-user-pic"
                placeholder="Ссылка на аватар"
              />

              <span
                id="form-field-user-pic-error"
                className="popup__error"
              ></span>

              <button
                type="submit"
                className="popup__submit"
                aria-label="Создать"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_big-image">
          <div className="popup__container popup__container_type_img">
            <button
              type="button"
              className="popup__close popup__close_type_big-image"
              aria-label="Закрыть"
            ></button>

            <img className="popup__image" src="#" />

            <p className="popup__caption"></p>
          </div>
        </div>
        <template id="card-template">
          <div className="cards__item">
            <img src="#" alt="" className="cards__image" />

            <button type="button" className="cards__remove"></button>

            <div className="cards__caption">
              <h2 className="cards__title"></h2>

              <button
                className="cards__like"
                type="button"
                aria-label="Нравится"
              ></button>
              <span className="cards__like-count"></span>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}

export default App;
