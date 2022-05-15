import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
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
  );
}

export default App;
