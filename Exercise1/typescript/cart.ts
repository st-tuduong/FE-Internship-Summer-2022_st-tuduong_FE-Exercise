import { getStorageItem, storageKey } from "./common";

function renderListCart() {
  const listCart = getStorageItem(storageKey.cart);
  let html = "";
  let count = 0;
  if (listCart) {
    Object.keys(listCart).map(function(key) {
      var price = listCart[key].price;
      console.log(price)
      var qty = listCart[key].qty;
      count = price * qty;
      var total = count.toFixed(2);
      html += `
          <tr>
          <td class="cart-product">
            <img src="${listCart[key].img}" alt="">
          </td>
          <td class="cart-description">
            <h4><a href="#">${listCart[key].name}</a></h4>
          </td>
          <td class="cart-price">
            <p>$${listCart[key].price}</p>
          </td>
          <td class="cart-quantity">
            <div class="cart-quantitybutton">
              <button id="${listCart[key].id}" class="quantity-down"> - </button>
                <input class="quantity-input" value="${listCart[key].qty}">
              <button id="${listCart[key].id}" class="quantity-up"> + </button>
            </div>
          </td>
          <td class="cart-total">
            <p class="cart-totalprice">$${total}</p>
          </td>
          <td class="cart-delete">
            <button id="${listCart[key].id}" class="quantity-delete"><i class="fa fa-times"></i></button>
          </td>
        </tr>`;
    })

    let cartList = document.querySelector('tbody') as HTMLElement;
   cartList .innerHTML = html;
    let btnIncrease = document.querySelectorAll('.quantity-up');
    btnIncrease.forEach(function(item){
      item.addEventListener('click', function() {
        doChangeItemQuantity(item.id, true)
      });
    })

    

    let  btnDecrease = document.querySelectorAll('.quantity-down');
    btnDecrease.forEach(function(item){
      item.addEventListener('click', function(e) {
        doChangeItemQuantity(item.id, false)
      });
    })

    let btnDelete = document.querySelectorAll('.quantity-delete');
    btnDelete.forEach(function(item) {
      item.addEventListener('click', removeProduct);
    })
}
}

function doChangeItemQuantity(btn : number, isIncreased : any) {
  var id = btn.id;
  var listCart = getStorageItem(storageKey.cart);
  var cartItem = listCart[id]
  var qty = cartItem.qty
  var price = cartItem.price;

  if (isIncreased) {
    qty = parseInt(qty) + 1;
  } else {
    qty = parseInt(qty) - 1;
  }
  var total = (price * qty).toFixed(2);
  btn.closest('tr').querySelector('.cart-totalprice').innerHTML = '$' + total
  btn.closest('tr').querySelector('.quantity-input').setAttribute('value', qty);
  listCart[id].qty = qty;
  setStorageItem(lsShopping.cart, listCart);
}

function removeProduct(id) {
  var id = this.id
  var listCart = getStorageItem(storageKey.cart);
  if(listCart[id]) {
    delete listCart[id]
   this.closest('tr').remove();
    setStorageItem(storageKey.cart, listCart)
  }
}

renderListCart();
