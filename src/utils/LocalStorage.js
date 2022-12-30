const setInLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
  // JSON.parse();
}

const LocalStorageCustom = {
  setInLocalStorage,
  getFromLocalStorage
}

export default LocalStorageCustom;
