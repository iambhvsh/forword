import { WordStore } from "./store";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const searchWord = async (word, returnOne = true) => {

    const response = await fetch(`${ API_URL }${ word.toLowerCase() }`);
    const data = await response.json();

    return returnOne ? data[0] : data;
}

export const fetchPopularWords = async () => {

    const words = ["mobile", "applications", "ionic", "framework"];

    words.forEach(async word => {

        const wordData = await searchWord(word, false);
        WordStore.update(s => { s.popularWords = [ ...s.popularWords, wordData[0] ]});
    });
import { setupIonicReact } from '@ionic/react';
import { WordStore } from './store';

// Configure Ionic React settings
export const configureIonicReact = () => {
  setupIonicReact({
    mode: 'ios', // Set the default mode to iOS
    rippleEffect: false, // Disable ripple effects globally
    // Add more global configuration options as needed
  });
}

export const searchWord = async (word, returnOne = true) => {
  const response = await fetch(`${API_URL}${word.toLowerCase()}`);
  const data = await response.json();
  return returnOne ? data[0] : data;
}

export const fetchPopularWords = async () => {
  const words = ["mobile", "applications", "ionic", "framework"];

  words.forEach(async word => {
    const wordData = await searchWord(word, false);
    WordStore.update(s => { s.popularWords = [...s.popularWords, wordData[0]] });
  });
}

// Call the configureIonicReact function to set up Ionic React
configureIonicReact();
