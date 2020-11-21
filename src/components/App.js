import React from 'react';
import  '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../utils/utils';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
const [isEditProfilePopupOpen, setPopupProfileState] = React.useState(false);
const [isAddPlacePopupOpen, setPopupPlaceState] = React.useState(false);
const [isEditAvatarPopupOpen, setPopupAvatarState] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(false);
const [currentUser, setCurrentUser] = React.useState({});

function closeAllPopups() {
  setPopupProfileState(false);
  setPopupPlaceState(false);
  setPopupAvatarState(false);
  setSelectedCard('');
}

function handleCardClick(card) {
  setSelectedCard(card);
}

function handleEditProfileClick() {
  setPopupProfileState(true);
}

function handleAddPlaceClick() {
  setPopupPlaceState(true)
}

function handleEditAvatarClick() {
  setPopupAvatarState(true)
}

function handleUpdateUser(props) {
  api.setUserInfo(props.name, props.description)
  .then((res) => {
    setCurrentUser(res)
  })
  closeAllPopups()
}

function handleUpdateAvatar(props) {
  api.updateAvatar(props.avatar)
  .then((res) => {
    setCurrentUser(res)
  })
  closeAllPopups()
}

React.useEffect(() => {
  api.getUserInfo()
    .then((res) => {
      setCurrentUser(res)
    });
}, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    <Header/>
    <Main
    onEditProfile = {handleEditProfileClick}
    onAddPlace = {handleAddPlaceClick}
    onEditAvatar = {handleEditAvatarClick}
    onCardClick = {handleCardClick}/>
    <Footer/>
    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm
      name = 'place'
      title = 'Новое место'
      isOpen = {isAddPlacePopupOpen}
      submitButton = 'Создать'
      onClose = {closeAllPopups}>
        <input type="text" name="place-name" id="place-name" className="popup__input popup__input_place-name"
          placeholder="Название" minLength="2" maxLength="30" required/>
        <p className="popup__input-error-message" id="place-name-error"></p>
        <input type="url" name="place-url" id="place-url" className="popup__input popup__input_url"
          placeholder="Ссылка на картинку" required/>
        <p className="popup__input-error-message" id="place-url-error"></p>
    </PopupWithForm>
    <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <PopupWithForm
      name = "delete"
      title = 'Вы уверены?'
      closeButton = 'popup__close-button_delete'
      deleteButton = 'popup__submit-button_delete'
      submitButton = 'Да'>
    </PopupWithForm>

    <ImagePopup
      card = {selectedCard}
      onClose = {closeAllPopups}>
    </ImagePopup>
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
