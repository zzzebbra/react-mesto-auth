import React from 'react'

function ImagePopup(props) {
  return (
    <div className={ props.card ? `popup popup-zoom popup_opened` : 'popup popup-zoom'}>
    <div className="popup__container_zoom">
      <img src={props.card.link} className="popup__image_zoom" alt={props.card.name}/>
      <button type="button" className="popup__close-button popup__close-button_zoom" onClick = {props.onClose}></button>
      <p className="popup__caption_zoom">{props.card.name}</p>
    </div>
  </div>
  )
}

export default ImagePopup
