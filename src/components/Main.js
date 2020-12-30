import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar,onEditProfile,onAddPlace,cards,onCardClick, onCardDelete, onCardLike}){
  const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className="content section">
        <section className="profile section">
          <div className="profile__section">
            <div className="profile__avatar">
              <img className="profile__avatarimage"
                    alt='Аватар профиля'
                    src={currentUser.avatar}
                    />
              <div className="profile__cover">
                <button type="button" className="profile__avatarbutton" onClick={onEditAvatar}></button>
              </div>
            </div>
            <div className="profile__intro">
              <div className="intro">
              <h1 className="intro__title">{currentUser.name}</h1>
                <p className="intro__subtitle">{currentUser.about}</p>
              </div>
              <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="profile__button" onClick={onAddPlace}></button>
        </section>
        <ul className="elements__list">
         {cards.map((card) => (
        <Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      ))}
       </ul>
      </div>
    )
}
export default Main;


