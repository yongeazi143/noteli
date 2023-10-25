const storage = {
  set: (key, text) => {
    localStorage.setItem(key, JSON.stringify(text));
  },
  get: (key, defaultText) => {
    const text = localStorage.getItem(key);
    return text ? JSON.parse(text) : defaultText;
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
export default storage;
