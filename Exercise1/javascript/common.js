;
export var storageKey;
(function (storageKey) {
    storageKey["PRODUCT"] = "product";
    storageKey["CART"] = "cart";
})(storageKey || (storageKey = {}));
;
export const getStorageItem = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key) || '');
    }
    return null;
};
export const setStorageItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};
