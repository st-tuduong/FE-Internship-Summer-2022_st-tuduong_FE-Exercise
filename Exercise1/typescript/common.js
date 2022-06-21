"use strict";
exports.__esModule = true;
exports.setStorageItem = exports.getStorageItem = exports.storageKey = void 0;
exports.storageKey = {
    product: 'product',
    cart: 'cart'
};
function getStorageItem(key) {
    return JSON.parse(localStorage.getItem(key) || ' ');
}
exports.getStorageItem = getStorageItem;
function setStorageItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}
exports.setStorageItem = setStorageItem;
