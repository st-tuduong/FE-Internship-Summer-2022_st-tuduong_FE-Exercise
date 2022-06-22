export interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface Cart {
  id: number;
  img: string;
  name: string;
  price: number;
  qty: number;
}

export enum storageKey {
  PRODUCT = 'product', 
  CART = 'cart'
};

export const getStorageItem = (key: string) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  return null;
};

export const setStorageItem = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  