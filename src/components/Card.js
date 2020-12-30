import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {


function handleClick() {
    onCardClick(card);
}
   const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
    `elements__delete ${isOwn ? 'elements__delete_visible' : 'elements__delete'}`
    ); 
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    const cardLikeButtonClassName = `elements__text-like ${
      isLiked && 'elements__text-like_active'
    }`;

      function handleLikeClick() {
        onCardLike(card);
      }
    
      function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="elements__item">
            <img className="elements__item-img" src={card.link}
                alt={card.name}
                onClick={handleClick}/>
            <button type="button" 
            className={cardDeleteButtonClassName}
            onClick={handleDeleteClick} >
            </button>
            <div className="elements__text">
            <h3 className="elements__text-title">{card.name}</h3>
            <div className="elements__text_count">
            <button type="button"  
            className={cardLikeButtonClassName}
            onClick={handleLikeClick} >
          </button>
            <div className="elements__text-likecounter">{card.likes.length}</div>
            </div>
            </div>
        </li>
        
    )

}

export default Card;