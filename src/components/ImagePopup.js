
import React from 'react';

function ImagePopup({isOpen, onClose, link, name}) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__background popup__background_photo"></div>
        <div className="popup__photo-container">
          <button type="reset" className="popup__button" onClick={onClose}></button>
            <img className="popup__image" src={link} alt={name}/>
            <h2 className="popup__title popup__title_photo">{name}</h2>
        </div>
    </div>
  );
}

export default ImagePopup;

