import React from 'react';
import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props) {

  return (
  <PopupWithForm
    name = 'profile'
    title = 'Редактировать профиль'
    isOpen = {props.isOpen}
    submitButton = 'Сохранить'
    onClose = {props.onClose}>
      <input type="text" name="name" id="name" className="popup__input popup__input__profile_name" placeholder="Имя" minLength="2"
        maxLength="40" required/>
      <p className="popup__input-error-message" id="name-error"></p>
      <input type="text" name="description" id="description" className="popup__input  popup__input_description"
        placeholder="Описание" minLength="2" maxLength="200" required/>
      <p className="popup__input-error-message" id="description-error"></p>
</PopupWithForm>
)
}

export default EditProfilePopup;
