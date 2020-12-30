
import React, { useState }  from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import '../index.css';
import { api } from '../utils/Api.js';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import ImagePopup from '../components/ImagePopup.js';
import EditAvatarPopup from '../components/EditAvatarPopup.js';
import EditProfilePopup from '../components/EditProfilePopup.js';
import AddPlacePopup from '../components/AddPlacePopup.js';
import ConfirmPopup from './ConfirmPopup.js';
import ProtectedRoute from './ProtectedRoute';
import { CurrentUserContext }  from '../contexts/CurrentUserContext.js'
import Login from './Login';
import Register from './Register';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });

  const [currentUser, setCurrentUser] = useState({})
  const [cardToDelete, setCardToDelete] = useState({});
  const [isLoading, setLoading] = useState(false);

  // авторизация
  const [loggedIn, setLoggedIn] = (false);
  //данные о текущем пользователе
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((currentUserInfoData) => {
        setCurrentUser(currentUserInfoData);
      })
      .catch((err) =>
        console.log(`Ошибка при загрузке информации о пользователе: ${err}`)
      );
  }, []);

  //Открыть попап аватара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  //Открыть попап профииля
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  //Открыть попап карточки
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  // открыть фулсайз фото
  function handleCardClick(card) {
    const { link, name } = card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch((err) =>
        console.log(`Ошибка при постановке лайка: ${err}`)
    );
  } 
   //Удалить карточку после подтверждения
   function handleConfirm() {
    api
      .deleteCard(cardToDelete._id)
      .then(() =>{
        setCards(cards.filter((item) => item !== cardToDelete))
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));
    
  }
  //Кликнуть на удаление карточки
  function handleCardDelete(card) {
    setConfirmPopupOpen(true);
    setCardToDelete(card);
  }
  //Закрыть все попапы
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
    setConfirmPopupOpen(false);
  }
  //Обновить аватар
  function handleUpdateAvatar(newAvatar) {
      setLoading(true);
      api
        .setUserAvatar(newAvatar)
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => console.log(`Ошибка при обновлении аватара: ${err}`))
        .finally(() => setLoading(false));
        
  }
  //Обновить данные пользователя
  function handleUpdateUser(userData) {
      setLoading(true);
      api
        .updateUserInfo(userData)
        .then((newUser) => {
          setCurrentUser(newUser);
          closeAllPopups();
        })
        .catch((err) => `Ошибка при обновлении информации о пользователе: ${err}`)
        .finally(() => setLoading(false));
      
  }
  //Получить данные карточек с фото
  React.useEffect(() => {
      api
        .getInitialCards()
        .then((cardData) => {
          setCards(cardData);
        })
        .catch((err) => console.log(`Ошибка при загрузке карточек: ${err}`));
  }, []);
  
  function handleAddPlace(card) {
      setLoading(true);
      api
        .postNewCard(card)
        .then((newCard) => setCards([newCard, ...cards]))
        .catch((err) =>
          console.log(`Ошибка при добавлении новой карточки: ${err}`)
        )
        .finally(() => setLoading(false));
      closeAllPopups();
  }
    
  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <div className="page">
            <Header/>
            <Switch>
              <Route>
                {/* при октрытии страницы проверить авторизован ли пол-ель? если нет,  переадресуем его логинится */}
                {loggedIn ? <Redirect to='/'/> : <Redirect to='/login'/>}
              </Route>
             <ProtectedRoute path='/main' loggedIn={loggedIn} component={Main}/>
             {/* роут авторизации пользователя(входа с паролем)*/}
             <Route path='/login'>
               <Login/>
             </Route>
             {/* роут регистрации пользователя*/}
             <Route path='/register'>
               <Register/>
             </Route>
            </Switch>

            <Main  
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                cards={cards}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete} 
            />
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading}
            />
            <EditAvatarPopup
              onUpdateAvatar={handleUpdateAvatar}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              isLoading={isLoading}
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlace}
            />
            <ConfirmPopup
              isOpen={isConfirmPopupOpen}
              onClose={closeAllPopups}
              onConfirmDelete={handleConfirm}
            />
          
            <ImagePopup 
            name={selectedCard.name}
            link={selectedCard.link}
            isOpen={selectedCard.isImageOpen}
            onClose={closeAllPopups}
            />
            <Footer />
          </div>
        </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
