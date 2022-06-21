"use strict";
exports.__esModule = true;
var common_1 = require("./common");
var products = [
    {
        id: 1,
        img: "images/pr1.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 2,
        img: "images/pr2.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 3,
        img: "images/pr2.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 4,
        img: "images/pr3.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 5,
        img: "images/pr2.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 6,
        img: "images/pr4.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
];
(0, common_1.setStorageItem)(common_1.storageKey.product, products);
function renderListProduct() {
    var listProduct = (0, common_1.getStorageItem)(common_1.storageKey.product);
    var html = "";
    if (listProduct) {
        listProduct.forEach(function (item) {
            html +=
                "<li class='product-item product-sale col-3 col-sm-6'> " +
                    "<div class='product-img'>" +
                    "<img src= " + item.img + " alt='T-Shirt Summer Vibes' />" +
                    "<div class='product-overlay'>" +
                    "<button id= " + item.id + " class='btn btn-primary btn-cart'>ADD TO CART</button>" +
                    " </div>" +
                    "</div>" +
                    "<h4>" + item.name + "</h4>" +
                    "<div class='item-price'>" +
                    "<span class='item-current-price'>$" + item.price + "</span>" +
                    "</div>" +
                    "</li>";
        });
        var productList = document.querySelector(".product-list");
        productList.innerHTML = html;
        var btnAddCart = document.querySelectorAll(".btn-cart");
        btnAddCart.forEach(function (item) {
            item.addEventListener("click", function () {
                addCart(item.id);
            });
        });
    }
}
function addCart(id) {
    var product = products.find(function (item) { return item.id.toString() === id; });
    var cart = (0, common_1.getStorageItem)(common_1.storageKey.cart) || {};
    if (cart[id]) {
        cart[id].qty += 1;
    }
    else {
        cart[id] = {
            id: id,
            img: product.img,
            name: product.name,
            price: product.price,
            qty: 1
        };
    }
    (0, common_1.setStorageItem)(common_1.storageKey.cart, cart);
    countQty();
}
function countQty() {
    var cart = (0, common_1.getStorageItem)(common_1.storageKey.cart);
    if (cart) {
        var count = Object.keys(cart).length;
        //   const countQty = document.querySelector('.qty') as HTMLElement;
        //  countQty .innerHTML = count;
        (0, common_1.setStorageItem)(common_1.storageKey.cart, cart);
    }
}
renderListProduct();
countQty();
