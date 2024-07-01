import { Store } from "pullstate";

// Load favourites from local storage
const loadFavouritesFromLocalStorage = () => {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
};

const WordStore = new Store({
  favourites: loadFavouritesFromLocalStorage(),
  popularWords: [],
  searchCount: 0
});

export default WordStore;

export const addToFavourites = (passedWord) => {
  const currentFavourites = WordStore.getRawState().favourites;
  const added = !currentFavourites.includes(passedWord);

  WordStore.update(s => {
    if (currentFavourites.includes(passedWord)) {
      s.favourites = currentFavourites.filter(word => word !== passedWord);
    } else {
      s.favourites = [...s.favourites, passedWord];
    }
    // Update local storage
    localStorage.setItem('favourites', JSON.stringify(s.favourites));
  });

  return added;
};
