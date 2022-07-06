export default class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }
}

// export default class Storage {
//    static get(key) {
//     let item = null;
//     if (typeof window !== "undefined") {
//       item = localStorage.getItem(key);
//     }
//     return item;
//   }
//    static set(key: string, value: string) {
//     localStorage.setItem(key, value);
//   }
//    static remove(key: string): void {
//     localStorage.removeItem(key);
//   }
// }
