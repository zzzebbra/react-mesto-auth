import  '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
    <Header/>
    <Main/>
    <Footer/>

    <div class="popup popup-place">
    <div class="popup__container">
      <h2 class="popup__header">Новое место</h2>
      <form class="popup__form" action="#" name="popup_form popup_form_place" novalidate>
        <button type="button" class="popup__close-button"></button>
        <input type="text" name="place-name" id="place-name" class="popup__input popup__input_place-name"
          placeholder="Название" minlength="2" maxlength="30" required/>
        <p class="popup__input-error-message" id="place-name-error"></p>
        <input type="url" name="place-url" id="place-url" class="popup__input popup__input_url"
          placeholder="Ссылка на картинку" required/>
        <p class="popup__input-error-message" id="place-url-error"></p>
        <button type="submit" class="popup__submit-button">Создать</button>
      </form>
    </div>
  </div>
  <div class="popup popup-zoom">
    <div class="popup__container_zoom">
      <img src="#" class="popup__image_zoom" alt="Фото места."/>
      <button type="button" class="popup__close-button popup__close-button_zoom"></button>
      <p class="popup__caption_zoom"></p>
    </div>
  </div>
  <div class="popup popup-delete">
    <div class="popup__container_delete">
      <h2 class="popup__header popup__header_delete">Вы уверены?</h2>
      <button type="button" class="popup__close-button popup__close-button_delete"></button>
      <button type="submit" class="popup__submit-button popup__submit-button_delete">Да</button>
    </div>
  </div>
  <div class="popup popup-userpic">
    <div class="popup__container popup__container_userpic">
      <h2 class="popup__header">Обновить аватар</h2>
      <form class="popup__form" action="#" name="popup_form popup_form_userpic" novalidate>
      <button type="button" class="popup__close-button popup__close-button_userpic"></button>
      <input type="url" name="userpic-url" id="userpic-url" class="popup__input popup__input_url"
        placeholder="Ссылка на картинку" required/>
        <p class="popup__input-error-message" id="userpic-url-error"></p>
      <button type="submit" class="popup__submit-button">Сохранить</button>
    </form>
    </div>
  </div>
  <template class="card-template">
    <div class="card">
      <img src="/" class="card__photo" alt="Фото места."/>
      <button class="card__delete-button"></button>
      <h2 class="card__text"></h2>
      <button type="button" class="card__like"></button>
      <p class="card__like-counter">0</p>
    </div>
  </template>
  </div>
  );
}

export default App;
