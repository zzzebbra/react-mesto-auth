import React from 'react'
import editProfilePhoto from '../images/edit_profile-pic.svg'
import api from '../utils/Api'
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=> {
    api.getUserInfo()
    .then((res) => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })

    api.getCards()
    .then((res) => {
      setCards(res);
    }, [])
})

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo-container">
          <img className="profile__photo" src={userAvatar} alt="Аватар"/>
          <img className="profile__photo-edit-button" src={editProfilePhoto} alt="Редактировать." onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
          <h2 className="profile__subtitle">{userDescription}</h2>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((item) => (<Card card={item} onCardClick={props.onCardClick} key={item._id} link={item.link} name={item.name} likes={item.likes.length}/>))}
      </section>
    </main>
  )
}

export default Main
