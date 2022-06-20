var lskey = {
  product: 'product',
  cart: 'cart'
}

function getLocal(key) {
  return localStorage.getItem(key) ? localStorage.getItem(key) : []
}

function saveLocal(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

function renderListCart() {
  var listCart =getLocal(lskey.cart)
  var html = "";
  var count = 0;
  if (listCart) {
    var cart = JSON.parse(listCart);
    Object.keys(cart).map((key, index) => {
      var price = cart[key]["price"].slice(1);
      var qty = cart[key]["qty"];
      count = price * qty;
      var total = count.toFixed(2);
      html += `
          <tr>
          <td class="cart-product">
            <img src="${cart[key]["img"]}" alt="">
          </td>
          <td class="cart-description">
            <h4><a href="#">${cart[key]["name"]}</a></h4>
          </td>
          <td class="cart-price">
            <p>${cart[key]["price"]}</p>
          </td>
          <td class="cart-quantity">
            <div class="cart-quantitybutton">
              <button id="${key}" class="quantity-down" onclick=decreaseQty()> - </button>
                <input class="quantity-input" value="${cart[key]["qty"]}">
              <button id="${key}" class="quantity-up")> + </button>
            </div>
          </td>
          <td class="cart-total">
            <p class="cart-totalprice">$${total}</p>
          </td>
          <td class="cart-delete">
            <button id="${key}" class="quantity-delete"><i class="fa fa-times"></i></button>
          </td>
        </tr>`;
    });
    document.querySelector("tbody").innerHTML = html;
    var btnIncrease = document.querySelectorAll('.quantity-up');
    for(i = 0; i < btnIncrease.length; i++) {
      btnIncrease[i].addEventListener('click', increaseQty);
    }

    var btnDecrease = document.querySelectorAll('.quantity-down');
    for(i = 0; i < btnDecrease.length; i++) {
      btnDecrease[i].addEventListener('click', decreaseQty);
    }

    var btnDelete = document.querySelectorAll('.quantity-delete');
    for(i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click', removeProduct);
    }
  }
}
renderListCart();

function totalCart () {

}

function increaseQty(e) {
  var cart = e.target.parentElement.parentElement.parentElement;
  var id = cart.querySelector(".quantity-up").getAttribute("id");
  var qty = cart.querySelector(".quantity-input").getAttribute("value");
  var price = cart.querySelector(".cart-price p").textContent.slice(1);
  qty = parseInt(qty) + 1;
  var count = 0;
  count = price * qty
  var total = count.toFixed(2)
  cart.querySelector('.cart-totalprice').innerHTML = "$" + total 
  cart.querySelector(".quantity-input").setAttribute("value", qty);

  var product = JSON.parse(getLocal(lskey.cart))
  Object.keys(product).map(function (key, index) {
    if (key == id) {
      product[key].qty += 1;
    }
  });
  saveLocal(lskey.cart, product)
}
// increaseQty();

function decreaseQty(e, isIncrease) {
  var cart = e.target.parentElement.parentElement.parentElement;
  var id = cart.querySelector(".quantity-down").getAttribute("id");
  var qty = cart.querySelector(".quantity-input").getAttribute("value");
  var price = cart.querySelector(".cart-price p").textContent.slice(1);
  qty = parseInt(qty) - 1;
  count = price * qty
  var total = count.toFixed(2)
  cart.querySelector('.cart-totalprice').innerHTML = "$" + total 
  cart.querySelector(".quantity-input").setAttribute("value", qty);

  var product = JSON.parse(getLocal(lskey.cart))
  Object.keys(product).map(function (key, index) {
    if (key == id) {
      product[key].qty -= 1;
    }
  });
  saveLocal(lskey.cart, product)
}
// decreaseQty();

function removeProduct(e) {
  var cart = e.target.parentElement.parentElement.parentElement;
  var id = cart.querySelector('.quantity-delete').getAttribute('id');
    
  var product = JSON.parse(getLocal(lskey.cart));
  if(product) {
    Object.keys(product).map(function(key, index) {
      if(key == id) {
        delete product[key];
        cart.parentNode.removeChild(cart);
      }
    });
    saveLocal(lskey.cart, product)
  }
}

// removeProduct()

function total(e) {
  var cart = e.target.parentElement.parentElement.parentElement;
  var sum = cart.querySelector('cart-totalprice').textContent.slice(1);

}
