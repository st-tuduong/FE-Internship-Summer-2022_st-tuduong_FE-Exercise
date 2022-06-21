export const storageKey = {
  product: 'product', 
  cart: 'cart'
};

export function getStorageItem (key : string) {
    return JSON.parse(localStorage.getItem(key) || ' ');
  }

  export function setStorageItem (key : string, value : any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
