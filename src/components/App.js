import React from 'react';
import  '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
const [isEditProfilePopupOpen, setPopupProfileState] = React.useState(false);
const [isAddPlacePopupOpen, setPopupPlaceState] = React.useState(false);
const [isEditAvatarPopupOpen, setPopupAvatarState] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});
const [currentUser, setCurrentUser] = React.useState({});
const [cards, setCards] = React.useState([]);

React.useEffect(()=> {
  api.getCards()
  .then((res) => {
    setCards(res);
  })
}, [])

function handleCardLike(card) {
// Снова проверяем, есть ли уже лайк на этой карточке
const isLiked = card.likes.some(i => i._id === currentUser._id);

// Отправляем запрос в API и получаем обновлённые данные карточки
api.changeLikeCardStatus(card._id, isLiked)
  .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    // Обновляем стейт
    setCards(newCards);
  });
}

function handleCardDelete(card) {
  api.deleteMyCard(card._id)
    .then((newCard) => {
      const newCards = cards.filter((c) => card._id !== newCard._id);
      setCards(newCards)
    })
}

function closeAllPopups() {
  setPopupProfileState(false);
  setPopupPlaceState(false);
  setPopupAvatarState(false);
  setSelectedCard({});
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
    });
  closeAllPopups()
}

function handleUpdateAvatar(props) {
  api.updateAvatar(props.avatar)
    .then((res) => {
      setCurrentUser(res)
    });
  closeAllPopups()
}

function handleAddPlaceSubmit(props) {
  api.addNewCard(props.name, props.link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
    });
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
          onCardClick = {handleCardClick}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
          cards = {cards}/>
        <Footer/>
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}/>
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
