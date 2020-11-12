import React from 'react'

function ImagePopup() {
  return (
    <div className="popup popup-zoom">
    <div className="popup__container_zoom">
      <img src="#" className="popup__image_zoom" alt="Фото места."/>
      <button type="button" className="popup__close-button popup__close-button_zoom"></button>
      <p className="popup__caption_zoom"></p>
    </div>
  </div>
  )
}

export default ImagePopup
