import { getStorageItem, setStorageItem, storageKey } from "./common.js";
var products = [
    {
        id: 1,
        img: 'images/pr1.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 2,
        img: 'images/pr2.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 3,
        img: 'images/pr3.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 4,
        img: 'images/pr4.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 5,
        img: 'images/pr1.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 6,
        img: 'images/pr3.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 7,
        img: 'images/pr2.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
    {
        id: 8,
        img: 'images/pr4.png',
        name: 'White T-Shirt Summer',
        price: '89.99',
    },
];
setStorageItem(storageKey.PRODUCT, products);
var renderListProduct = function () {
    var listProduct = getStorageItem(storageKey.PRODUCT);
    var html = "";
    if (listProduct) {
        listProduct.forEach(function (item) {
            html += "<li class='product-item product-sale col-3 col-sm-6'>\n                <div class='product-img'>\n                  <img src= '".concat(item.img, "' alt='T-Shirt Summer Vibes' />\n                  <div class='product-overlay'>\n                    <button id= '").concat(item.id, "' class='btn btn-primary js-btn-cart'>ADD TO CART</button>\n                  </div>\n                </div>\n                <h4>'").concat(item.name, "'</h4>\n                <div class='item-price'>\n                  <span class='item-current-price'>$'").concat(item.price, "'</span>\n                </div>\n              </li>");
        });
        var productList = document.querySelector('.product-list');
        productList.innerHTML = html;
        var btnAddCart = document.querySelectorAll('.js-btn-cart');
        btnAddCart.forEach(function (item) {
            item.addEventListener('click', function () {
                addCart(item.id);
            });
        });
    }
};
var addCart = function (id) {
    var product = products.find(function (item) { return item.id.toString() === id; });
    var cart = getStorageItem(storageKey.CART) || {};
    if (cart[id]) {
        cart[id].qty += 1;
    }
    else {
        cart[id] = {
            id: id,
            img: product.img,
            name: product.name,
            price: product.price,
            qty: 1,
        };
    }
    setStorageItem(storageKey.CART, cart);
    countQty();
};
var countQty = function () {
    var countQty = document.querySelector('.qty');
    var cart = getStorageItem(storageKey.CART) || {};
    if (cart) {
        var count = Object.keys(cart).length;
        countQty.innerHTML = count.toString();
        setStorageItem(storageKey.CART, cart);
    }
};
renderListProduct();
countQty();
