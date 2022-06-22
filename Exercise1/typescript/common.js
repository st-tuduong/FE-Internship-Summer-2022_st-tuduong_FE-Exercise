var storageKey = {
    product: 'product',
    cart: 'cart'
};
function getStorageItem(key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return null;
}
function setStorageItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}
