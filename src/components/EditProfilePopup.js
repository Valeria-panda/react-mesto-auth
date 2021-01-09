import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const {isOpen, onClose, onUpdateUser, isLoading } = props
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    if(evt.target.name === 'name')
      setName(evt.target.value)
  }
  function handleChangeDescription(evt) {
    if(evt.target.name === 'about')
      setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

    return (
      <PopupWithForm
        name='popup'
        id = 'popup-edit-form'
        title='Редактировать профиль'
        submitButtonText='Сохранить'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        isLoading={isLoading}  
      >
        <label htmlFor='name' className="popup__input-label">
        <input  
          name="name"
          value={name || ''}
          className="popup__input popup__input_name" 
          type="text" 
          required 
          pattern='[А-Яа-яA-Za-z -]{1,}'
          placeholder="Введите имя" 
          minLength ="2" 
          maxLength ="40" 
          autoComplete="off"
          onChange={handleChangeName}
        />
        <span className='popup__input-error' id="name-error"></span>
        </label>
        <label htmlFor='about' className="popup__input-label">
        <input 
          type='text'
          name="about" 
          className="popup__input popup__input_job" 
          value={description || ''}
          required 
          placeholder="Чем вы занимаетесь?" 
          minLength ="2" 
          maxLength ="200" 
          autoComplete="off"
          onChange={handleChangeDescription}
        />
        <span className='popup__input-error' id="about-error"></span>
        </label>
        </PopupWithForm>
    );
  }
export default EditProfilePopup;