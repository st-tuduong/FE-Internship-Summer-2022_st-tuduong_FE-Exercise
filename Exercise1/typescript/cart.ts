const renderListCart = () => {
  const listCart = getStorageItem(storageKey.cart)
  let html = "";
  let count = 0;
  if (listCart) {
    Object.keys(listCart).map(function(key: any) {
      let price = listCart[key].price;
      let qty = listCart[key].qty;
      count = price * qty;
      let total = count.toFixed(2);
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
              <button id="${listCart[key].id}" class="js-quantity-down"> - </button>
                <input class="js-quantity-input" value="${listCart[key].qty}">
              <button id="${listCart[key].id}" class="js-quantity-up"> + </button>
            </div>
          </td>
          <td class="cart-total">
            <p class="js-cart-totalprice">$${total}</p>
          </td>
          <td class="cart-delete">
            <button id="${listCart[key].id}" class="js-quantity-delete"><i class="fa fa-times"></i></button>
          </td>
        </tr>`;
    })
    const cartList = document.querySelector('tbody');
    cartList.innerHTML = html;
    let btnIncrease = document.querySelectorAll('.js-quantity-up');
    btnIncrease.forEach(function(item){
      item.addEventListener('click', function(e) {
        doChangeItemQuantity(this, true);
      });
    })

    let btnDecrease = document.querySelectorAll('.js-quantity-down');
    btnDecrease.forEach(function(item){
      item.addEventListener('click', function(e) {
        doChangeItemQuantity(this, false);
      });
    })

    let btnDelete = document.querySelectorAll('.js-quantity-delete');
    btnDelete.forEach(function(item) {
      item.addEventListener('click',function(e) {
        removeProduct(this);
      });
    })
  }
}

const doChangeItemQuantity = (btn: any, isIncreased: boolean) => {
  let id = btn.id
  let listCart = getStorageItem(storageKey.cart);
  let cartItem = listCart[id]
  let qty = cartItem.qty
  let price = cartItem.price;
  if (isIncreased) {
    qty = parseInt(qty) + 1;
    totalPrice();
  } else if (qty > 1){
    qty = parseInt(qty) - 1;
    totalPrice();
    }
    else {
      delete listCart[id];
      btn.closest('tr').remove();
      setStorageItem(storageKey.cart, listCart);
      totalPrice();
    }
  let total = (price * qty).toFixed(2);
  btn.closest('tr').querySelector('.js-cart-totalprice').innerHTML = '$' + total
  btn.closest('tr').querySelector('.js-quantity-input').setAttribute('value', qty);
  listCart[id].qty = qty;
  setStorageItem(storageKey.cart, listCart);
  totalQty();
  totalPrice();
}

const removeProduct = (btnDelete: any) => {
  let getId = btnDelete.id
  const listCart = getStorageItem(storageKey.cart);
  if(listCart[getId]) {
    delete listCart[getId]
   btnDelete.closest('tr').remove();
    setStorageItem(storageKey.cart, listCart);
    totalQty();
    totalPrice();
  }
}

const totalQty = () =>{
  let $countQty = document.querySelector('.qty');
  const cart = getStorageItem(storageKey.cart);
  if (cart) {
    let count = Object.keys(cart).length;
    $countQty.innerHTML = count.toString();
    setStorageItem(storageKey.cart, cart);
  }
}

const totalPrice = () => {
  let $total = document.querySelector('.price-total');
  const cartList = getStorageItem(storageKey.cart);
  let total = 0;
  if (cartList) {
    Object.keys(cartList).map(function(key){
      let price = cartList[key].price;
      let qty = cartList[key].qty;
      let subTotal = (+price *+ qty).toFixed(2);
      total += +subTotal;
      $total.innerHTML = '$' + total.toFixed(2).toString();
    });
  }
}

renderListCart();
totalQty();
totalPrice();