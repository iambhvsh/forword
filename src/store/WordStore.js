// WordStore.js
import { Store } from 'pullstate';

const loadFavouritesFromLocalStorage = () => {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
};

export const WordStore = new Store({
  favourites: loadFavouritesFromLocalStorage(),
});

export const addFavourite = (word) => {
  WordStore.update(s => {
    s.favourites.push(word);
    localStorage.setItem('favourites', JSON.stringify(s.favourites));
  });
};

export const removeFavourite = (word) => {
  WordStore.update(s => {
    s.favourites = s.favourites.filter(fav => fav !== word);
    localStorage.setItem('favourites', JSON.stringify(s.favourites));
  });
};

// Selectors.js
export const getFavourites = s => s.favourites;
