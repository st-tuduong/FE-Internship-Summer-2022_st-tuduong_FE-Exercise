var renderListCart = function () {
    var listCart = getStorageItem(storageKey.cart);
    var html = "";
    var count = 0;
    if (listCart) {
        Object.keys(listCart).map(function (key) {
            var price = listCart[key].price;
            var qty = listCart[key].qty;
            count = price * qty;
            var total = count.toFixed(2);
            html += "\n          <tr>\n          <td class=\"cart-product\">\n            <img src=\"".concat(listCart[key].img, "\" alt=\"\">\n          </td>\n          <td class=\"cart-description\">\n            <h4><a href=\"#\">").concat(listCart[key].name, "</a></h4>\n          </td>\n          <td class=\"cart-price\">\n            <p>$").concat(listCart[key].price, "</p>\n          </td>\n          <td class=\"cart-quantity\">\n            <div class=\"cart-quantitybutton\">\n              <button id=\"").concat(listCart[key].id, "\" class=\"js-quantity-down\"> - </button>\n                <input class=\"js-quantity-input\" value=\"").concat(listCart[key].qty, "\">\n              <button id=\"").concat(listCart[key].id, "\" class=\"js-quantity-up\"> + </button>\n            </div>\n          </td>\n          <td class=\"cart-total\">\n            <p class=\"js-cart-totalprice\">$").concat(total, "</p>\n          </td>\n          <td class=\"cart-delete\">\n            <button id=\"").concat(listCart[key].id, "\" class=\"js-quantity-delete\"><i class=\"fa fa-times\"></i></button>\n          </td>\n        </tr>");
        });
        var cartList = document.querySelector('tbody');
        cartList.innerHTML = html;
        var btnIncrease = document.querySelectorAll('.js-quantity-up');
        btnIncrease.forEach(function (item) {
            item.addEventListener('click', function (e) {
                doChangeItemQuantity(this, true);
            });
        });
        var btnDecrease = document.querySelectorAll('.js-quantity-down');
        btnDecrease.forEach(function (item) {
            item.addEventListener('click', function (e) {
                doChangeItemQuantity(this, false);
            });
        });
        var btnDelete = document.querySelectorAll('.js-quantity-delete');
        btnDelete.forEach(function (item) {
            item.addEventListener('click', function (e) {
                removeProduct(this);
            });
        });
    }
};
var doChangeItemQuantity = function (btn, isIncreased) {
    var id = btn.id;
    var listCart = getStorageItem(storageKey.cart);
    var cartItem = listCart[id];
    var qty = cartItem.qty;
    var price = cartItem.price;
    if (isIncreased) {
        qty = parseInt(qty) + 1;
        totalPrice();
    }
    else if (qty > 1) {
        qty = parseInt(qty) - 1;
        totalPrice();
    }
    else {
        delete listCart[id];
        btn.closest('tr').remove();
        setStorageItem(storageKey.cart, listCart);
        totalPrice();
    }
    var total = (price * qty).toFixed(2);
    btn.closest('tr').querySelector('.js-cart-totalprice').innerHTML = '$' + total;
    btn.closest('tr').querySelector('.js-quantity-input').setAttribute('value', qty);
    listCart[id].qty = qty;
    setStorageItem(storageKey.cart, listCart);
    totalQty();
    totalPrice();
};
var removeProduct = function (btnDelete) {
    var getId = btnDelete.id;
    var listCart = getStorageItem(storageKey.cart);
    if (listCart[getId]) {
        delete listCart[getId];
        btnDelete.closest('tr').remove();
        setStorageItem(storageKey.cart, listCart);
        totalQty();
        totalPrice();
    }
};
var totalQty = function () {
    var $countQty = document.querySelector('.qty');
    var cart = getStorageItem(storageKey.cart);
    if (cart) {
        var count = Object.keys(cart).length;
        $countQty.innerHTML = count.toString();
        setStorageItem(storageKey.cart, cart);
    }
};
var totalPrice = function () {
    var $total = document.querySelector('.price-total');
    var cartList = getStorageItem(storageKey.cart);
    var total = 0;
    if (cartList) {
        Object.keys(cartList).map(function (key) {
            var price = cartList[key].price;
            var qty = cartList[key].qty;
            var subTotal = (+price * +qty).toFixed(2);
            total += +subTotal;
            $total.innerHTML = '$' + total.toFixed(2).toString();
        });
    }
};
renderListCart();
totalQty();
totalPrice();
