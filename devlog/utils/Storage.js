class Storage {
  constructor() {}

  static setItem(key, item) {
    // if (typeof window !== "undefined") {
    localStorage.setItem(key, item);
    // }
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }
}

export default Storage;
