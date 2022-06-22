const storageKey = {
  product: 'product', 
  cart: 'cart'
};

function getStorageItem (key: string) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
}

function setStorageItem (key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  