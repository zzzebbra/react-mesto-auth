import React from 'react'
import editProfilePhoto from '../images/edit_profile-pic.svg'

function Main(props) {

  return (
    <main className="content">
    <section className="profile">
    <div className="profile__photo-container">
    <img className="profile__photo" src="#" alt="Аватар"/>
    <img className="profile__photo-edit-button" src={editProfilePhoto} alt="Редактировать." onClick={props.onEditAvatar}/>
    </div>
    <div className="profile__info">
      <h1 className="profile__title"></h1>
      <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
      <h2 className="profile__subtitle"></h2>
    </div>
    <button className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="cards">
    </section>
    </main>
  )


}

export default Main
