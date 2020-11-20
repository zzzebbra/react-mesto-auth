import React from 'react'

function PopupWithForm(props) {

  return (
    <div className={ props.isOpen ? `popup popup-${props.name} popup_opened` : `popup popup-${props.name}` }>
      <div className={`popup__container popup__container_${props.name}`}>
        <h2 className="popup__header">{props.title}</h2>
        <form className="popup__form" action="#" name="popup_form" noValidate>
          <button type="button" onClick = {props.onClose} className={`popup__close-button ${props.closeButton}`}></button>
          {props.children}
          <button type="submit" className={`popup__submit-button ${props.deleteButton}`}>{props.submitButton}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm

