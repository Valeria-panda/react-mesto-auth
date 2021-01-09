import React, {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading }) {

  const inputRef = useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: inputRef.current.value });
  }

  return (
    <PopupWithForm
      name='popup'
      id = 'popup-editavatar-form'
      title='Обновить аватар'
      submitButtonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
     <label htmlFor='avatar' className="popup__input-label">
          <input 
            ref={inputRef}
            type='url'
            name="avatar" 
            className="popup__input popup__input_avatar" 
            required 
            placeholder="Ссылка на аватар"
          />
          <span className='popup__input-error' id="avatar-error"></span>
        </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
