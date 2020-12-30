import React, { useState }  from 'react';
import PopupWithForm from './PopupWithForm';



function AddPlacePopup({isOpen,onClose, onAddPlace, isLoading }) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeCardName(evt) {
    if(evt.target.name === 'name')
      setName(evt.target.value)
      // : setLink(evt.target.value);
  }
  function handleChangeCardLink(evt) {
    if(evt.target.name === 'link')
      // ? setName(evt.target.value)
      setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      formName='popup'
      formId = 'popup-addCard'
      title='Новое место'
      submitButtonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label htmlFor='name' className="popup__input-label">
            <input 
            id='name'
            name='name'
            value={name || ''}
            placeholder='Название'
            minLength='1'
            maxLength='30'
            required
            onChange={handleChangeCardName}
            className="popup__input popup__input_name"
            type="text" 
            autoComplete="off"
             />
            <span className='popup__input-error' 
            
          id='name-error' id="name-error"></span>
        </label>
        <label htmlFor='link' className="popup__input-label">   
          <input 
          type='url'
          id='link'
          name='link'
          value={link || ''}
          placeholder='Ссылка на картинку'
          required
          onChange={handleChangeCardLink}
          className="popup__input popup__input_link" 
          autoComplete="off" 
          minLength ="2" 
          maxLength ="200"/>
          <span className='popup__input-error' id="link-error"></span>
        </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
