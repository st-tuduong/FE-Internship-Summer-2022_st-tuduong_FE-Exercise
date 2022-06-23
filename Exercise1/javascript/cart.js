import { getStorageItem, setStorageItem, storageKey } from "./common.js";
const renderListCart = () => {
    const listCart = getStorageItem(storageKey.CART) || {};
    let html = ``;
    let count = 0;
    if (listCart) {
        Object.keys(listCart).map((key) => {
            let price = listCart[key].price;
            let qty = listCart[key].qty;
            count = +price * qty;
            let total = count.toFixed(2);
            html += `
          <tr>
          <td class='cart-product'>
            <img src='${listCart[key].img}' alt=''>
          </td>
          <td class='cart-description'>
            <h4><a>${listCart[key].name}</a></h4>
          </td>
          <td class=''>
            <p>$${listCart[key].price}</p>
          </td>
          <td class='cart-quantity'>
            <div class='cart-quantitybutton'>
              <button id='${listCart[key].id}' class='js-quantity-down'> - </button>
                <input class='js-quantity-input' value='${listCart[key].qty}'>
              <button id='${listCart[key].id}' class='js-quantity-up'> + </button>
            </div>
          </td>
          <td class='cart-total'>
            <p class='js-cart-totalprice'>$${total}</p>
          </td>
          <td class="cart-delete">
            <button id='${listCart[key].id}' class='js-quantity-delete'><i class='fa fa-times'></i></button>
          </td>
        </tr>`;
        });
        const cartList = document.querySelector('tbody');
        cartList.innerHTML = html;
        const btnIncrease = document.querySelectorAll('.js-quantity-up');
        btnIncrease.forEach((item) => {
            item.addEventListener('click', (e) => {
                doChangeItemQuantity(item, true);
            });
        });
        const btnDecrease = document.querySelectorAll('.js-quantity-down');
        btnDecrease.forEach((item) => {
            item.addEventListener('click', (e) => {
                doChangeItemQuantity(item, false);
            });
        });
        const btnDelete = document.querySelectorAll('.js-quantity-delete');
        btnDelete.forEach((item) => {
            item.addEventListener('click', (e) => {
                removeProduct(item);
            });
        });
    }
};
const doChangeItemQuantity = (btn, isIncreased) => {
    const id = btn.id;
    const listCart = getStorageItem(storageKey.CART);
    const cartItem = listCart[id];
    let qty = cartItem.qty;
    let price = cartItem.price;
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
    let total = (price * qty).toFixed(2);
    btn.closest('tr').querySelector('.js-cart-totalprice').innerHTML = '$' + total;
    btn.closest('tr').querySelector('.js-quantity-input').setAttribute('value', qty);
    listCart[id].qty = qty;
    setStorageItem(storageKey.CART, listCart);
    totalQty();
    totalPrice();
};
const removeProduct = (btnDelete) => {
    const getId = btnDelete.id;
    const listCart = getStorageItem(storageKey.CART);
    if (listCart[getId]) {
        delete listCart[getId];
        btnDelete.closest('tr').remove();
        setStorageItem(storageKey.CART, listCart);
        totalQty();
        totalPrice();
    }
};
const totalQty = () => {
    const countQty = document.querySelector('.qty');
    const cart = getStorageItem(storageKey.CART);
    if (cart) {
        let count = Object.keys(cart).length;
        countQty.innerHTML = count.toString();
        setStorageItem(storageKey.CART, cart);
    }
};
const totalPrice = () => {
    const elementTotal = document.querySelector('.price-total');
    const cartList = getStorageItem(storageKey.CART);
    let total = 0;
    if (cartList) {
        Object.keys(cartList).map((key) => {
            let price = cartList[key].price;
            let qty = cartList[key].qty;
            let subTotal = (+price * +qty).toFixed(2);
            total += +subTotal;
            elementTotal.innerHTML = '$' + total.toFixed(2).toString();
        });
    }
};
renderListCart();
totalQty();
totalPrice();
