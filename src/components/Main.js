
function Main() {
  return (
  <main className="content">
  <section className="profile">
  <div className="profile__photo-container">
  <img className="profile__photo" src="#" alt="Аватар"/>
  <img className="profile__photo-edit-button" src="./images/edit_profile-pic.svg" alt="Редактировать."/>
  </div>
  <div className="profile__info">
    <h1 className="profile__title"></h1>
    <button className="profile__edit-button" type="button"></button>
    <h2 className="profile__subtitle"></h2>
  </div>
  <button className="profile__add-button"></button>
  </section>
  <section className="cards">
  </section>
  </main>
  )
}

export default Main
