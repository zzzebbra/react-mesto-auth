import React from 'react'

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
    <img onClick={handleClick} src={props.link} className="card__photo" alt={props.name}/>
    <button className="card__delete-button"></button>
    <h2 className="card__text">{props.name}</h2>
    <button type="button" className="card__like"></button>
    <p className="card__like-counter">{props.likes}</p>
    </div>
  )
}
export default Card;
