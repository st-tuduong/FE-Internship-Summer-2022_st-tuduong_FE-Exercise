export var storageKey;
(function (storageKey) {
    storageKey["PRODUCT"] = "product";
    storageKey["CART"] = "cart";
})(storageKey || (storageKey = {}));
;
export var getStorageItem = function (key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return null;
};
export var setStorageItem = function (key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
};
