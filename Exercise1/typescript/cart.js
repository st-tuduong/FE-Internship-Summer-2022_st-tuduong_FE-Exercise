"use strict";
exports.__esModule = true;
var common_1 = require("./common");
function renderListCart() {
    var listCart = (0, common_1.getStorageItem)(common_1.storageKey.cart);
    var html = "";
    var count = 0;
    if (listCart) {
        Object.keys(listCart).map(function (key) {
            var price = listCart[key].price;
            console.log(price);
            var qty = listCart[key].qty;
            count = price * qty;
            var total = count.toFixed(2);
            html += "\n          <tr>\n          <td class=\"cart-product\">\n            <img src=\"".concat(listCart[key].img, "\" alt=\"\">\n          </td>\n          <td class=\"cart-description\">\n            <h4><a href=\"#\">").concat(listCart[key].name, "</a></h4>\n          </td>\n          <td class=\"cart-price\">\n            <p>$").concat(listCart[key].price, "</p>\n          </td>\n          <td class=\"cart-quantity\">\n            <div class=\"cart-quantitybutton\">\n              <button id=\"").concat(listCart[key].id, "\" class=\"quantity-down\"> - </button>\n                <input class=\"quantity-input\" value=\"").concat(listCart[key].qty, "\">\n              <button id=\"").concat(listCart[key].id, "\" class=\"quantity-up\"> + </button>\n            </div>\n          </td>\n          <td class=\"cart-total\">\n            <p class=\"cart-totalprice\">$").concat(total, "</p>\n          </td>\n          <td class=\"cart-delete\">\n            <button id=\"").concat(listCart[key].id, "\" class=\"quantity-delete\"><i class=\"fa fa-times\"></i></button>\n          </td>\n        </tr>");
        });
        var cartList = document.querySelector('tbody');
        cartList.innerHTML = html;
        var btnIncrease = document.querySelectorAll('.quantity-up');
        btnIncrease.forEach(function (item) {
            item.addEventListener('click', function () {
                doChangeItemQuantity(item.id, true);
            });
        });
        var btnDecrease = document.querySelectorAll('.quantity-down');
        btnDecrease.forEach(function (item) {
            item.addEventListener('click', function (e) {
                doChangeItemQuantity(item.id, false);
            });
        });
        var btnDelete = document.querySelectorAll('.quantity-delete');
        btnDelete.forEach(function (item) {
            item.addEventListener('click', removeProduct);
        });
    }
}
function doChangeItemQuantity(btn, isIncreased) {
    var id = btn.id;
    var listCart = (0, common_1.getStorageItem)(common_1.storageKey.cart);
    var cartItem = listCart[id];
    var qty = cartItem.qty;
    var price = cartItem.price;
    if (isIncreased) {
        qty = parseInt(qty) + 1;
    }
    else {
        qty = parseInt(qty) - 1;
    }
    var total = (price * qty).toFixed(2);
    btn.closest('tr').querySelector('.cart-totalprice').innerHTML = '$' + total;
    btn.closest('tr').querySelector('.quantity-input').setAttribute('value', qty);
    listCart[id].qty = qty;
    setStorageItem(lsShopping.cart, listCart);
}
function removeProduct(id) {
    var id = this.id;
    var listCart = (0, common_1.getStorageItem)(common_1.storageKey.cart);
    if (listCart[id]) {
        delete listCart[id];
        this.closest('tr').remove();
        setStorageItem(common_1.storageKey.cart, listCart);
    }
}
renderListCart();
