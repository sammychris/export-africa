'use client'
const saveToLocalStorage = (key, data) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  const loadFromLocalStorage = (key) => {
    try {
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return null;
    }
  };
  
  export { saveToLocalStorage, loadFromLocalStorage };
  