import { getStorageItem, setStorageItem, storageKey } from "./common.js";
var renderListCart = function () {
    var listCart = getStorageItem(storageKey.CART) || {};
    var html = "";
    var count = 0;
    if (listCart) {
        Object.keys(listCart).map(function (key) {
            var price = listCart[key].price;
            var qty = listCart[key].qty;
            count = +price * qty;
            var total = count.toFixed(2);
            html += "\n          <tr>\n          <td class='cart-product'>\n            <img src='".concat(listCart[key].img, "' alt=''>\n          </td>\n          <td class='cart-description'>\n            <h4><a>").concat(listCart[key].name, "</a></h4>\n          </td>\n          <td class=''>\n            <p>$").concat(listCart[key].price, "</p>\n          </td>\n          <td class='cart-quantity'>\n            <div class='cart-quantitybutton'>\n              <button id='").concat(listCart[key].id, "' class='js-quantity-down'> - </button>\n                <input class='js-quantity-input' value='").concat(listCart[key].qty, "'>\n              <button id='").concat(listCart[key].id, "' class='js-quantity-up'> + </button>\n            </div>\n          </td>\n          <td class='cart-total'>\n            <p class='js-cart-totalprice'>$").concat(total, "</p>\n          </td>\n          <td class=\"cart-delete\">\n            <button id='").concat(listCart[key].id, "' class='js-quantity-delete'><i class='fa fa-times'></i></button>\n          </td>\n        </tr>");
        });
        var cartList = document.querySelector('tbody');
        cartList.innerHTML = html;
        var btnIncrease = document.querySelectorAll('.js-quantity-up');
        btnIncrease.forEach(function (item) {
            item.addEventListener('click', function (e) {
                doChangeItemQuantity(item, true);
            });
        });
        var btnDecrease = document.querySelectorAll('.js-quantity-down');
        btnDecrease.forEach(function (item) {
            item.addEventListener('click', function (e) {
                doChangeItemQuantity(item, false);
            });
        });
        var btnDelete = document.querySelectorAll('.js-quantity-delete');
        btnDelete.forEach(function (item) {
            item.addEventListener('click', function (e) {
                removeProduct(item);
            });
        });
    }
};
var doChangeItemQuantity = function (btn, isIncreased) {
    var id = btn.id;
    var listCart = getStorageItem(storageKey.CART);
    var cartItem = listCart[id];
    var qty = cartItem.qty;
    var price = cartItem.price;
    if (isIncreased) {
        qty = parseInt(qty) + 1;
        totalQty();
        totalPrice();
    }
    else if (qty > 1) {
        qty = parseInt(qty) - 1;
        totalQty();
        totalPrice();
    }
    else {
        delete listCart[id];
        btn.closest('tr').remove();
        setStorageItem(storageKey.CART, listCart);
        totalQty();
        totalPrice();
    }
    var total = (price * qty).toFixed(2);
    btn.closest('tr').querySelector('.js-cart-totalprice').innerHTML = '$' + total;
    btn.closest('tr').querySelector('.js-quantity-input').setAttribute('value', qty);
    listCart[id].qty = qty;
    setStorageItem(storageKey.CART, listCart);
    totalQty();
    totalPrice();
};
var removeProduct = function (btnDelete) {
    var getId = btnDelete.id;
    var listCart = getStorageItem(storageKey.CART);
    if (listCart[getId]) {
        delete listCart[getId];
        btnDelete.closest('tr').remove();
        setStorageItem(storageKey.CART, listCart);
        totalQty();
        totalPrice();
    }
};
var totalQty = function () {
    var countQty = document.querySelector('.qty');
    var cart = getStorageItem(storageKey.CART);
    if (cart) {
        var count = Object.keys(cart).length;
        countQty.innerHTML = count.toString();
        setStorageItem(storageKey.CART, cart);
    }
};
var totalPrice = function () {
    var elementTotal = document.querySelector('.price-total');
    var cartList = getStorageItem(storageKey.CART);
    var total = 0;
    if (cartList) {
        Object.keys(cartList).map(function (key) {
            var price = cartList[key].price;
            var qty = cartList[key].qty;
            var subTotal = (+price * +qty).toFixed(2);
            total += +subTotal;
            elementTotal.innerHTML = '$' + total.toFixed(2).toString();
        });
    }
};
renderListCart();
totalQty();
totalPrice();
