import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import editProfilePhoto from '../images/edit_profile-pic.svg';
import api from '../utils/Api';
import Card from './Card';


function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(()=> {
    api.getCards()
    .then((res) => {
      setCards(res);
    }, [])
})

function handleCardLike(card) {
  // Снова проверяем, есть ли уже лайк на этой карточке
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  console.log('click',isLiked)

  // Отправляем запрос в API и получаем обновлённые данные карточки
  api.changeLikeCardStatus(card._id, !isLiked)
  .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    // Обновляем стейт
    setCards(newCards);
  });
}

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo-container">
          <img className="profile__photo" src={currentUser.avatar} alt="Аватар"/>
          <img className="profile__photo-edit-button" src={editProfilePhoto} alt="Редактировать." onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
          <h2 className="profile__subtitle">{currentUser.about}</h2>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((item) => (<Card card={item} onCardLike={handleCardLike} onCardClick={props.onCardClick} key={item._id} link={item.link} name={item.name} likes={item.likes.length}/>))}
      </section>
    </main>
  )
}

export default Main
