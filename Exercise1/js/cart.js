var cart = {}
var cartItem = {}
// const btnCart= document.getElementsByClassName('.btn-cart')
// btnCart.addEventListener("click", addCart )

function addCart(id) {
  var getImg = document.querySelector('.product-link img').getAttribute('src')
  var getName = document.querySelector('.product-link h4').textContent
  var getPrice = document.querySelector('.item-current-price').textContent
  // var getID = document.querySelector('.product-link').getAttribute('id')
  // console.log(getID)
  // console.log(document.getElementsByClassName('product-link'))
  var getQty = 1

cart = localStorage.getItem('cart')
if(cart) {
  cartItem = JSON.parse(cart)
  Object.keys(cartItem).map((key, index) => {
    if (key == id) {
      getQty = cartItem[key]['qty'] + 1
    }
  })
}
cartItem[id] = {
  "img"   : getImg,
  "name"  : getName,
  "price" : getPrice,
  "qty"   : getQty
}
localStorage.setItem("cart", JSON.stringify(cartItem))
}

function renderListCart() {
  var getCart = JSON.parse(localStorage.getItem('cart'))
  var cartContent = ""
  var count = 0
  if(getCart){
      Object.keys(getCart).map((key, index) => {
        var getPrice = getCart[key]['price'].slice(1)
        var getQty = getCart[key]['qty']
        count = getPrice * getQty
				var total = count.toFixed(2)
          cartContent += `
          <tr>
          <td class="cart-product">
            <a href=""><img src="${getCart[key]['img']}" alt=""></a>
          </td>
          <td class="cart-description">
            <h4><a href="#">${getCart[key]['name']}</a></h4>
          </td>
          <td class="cart-price">
            <p>${getCart[key]['price']}</p>
          </td>
          <td class="cart-quantity">
            <div class="cart-quantitybutton">
              <a class="cart_quantityup" href="" onclick=increaseQty(${getCart[key].id})> + </a>
              <input class="cart-quantityinput" type="text" name="quantity" value="${getCart[key]['qty']}" autocomplete="off" size="2">
              <a class="cart-quantitydown" href="" onclick=decreaseQty()> - </a>
            </div>
          </td>
          <td class="cart-total">
            <p class="cart-totalprice">$${total}</p>
          </td>
          <td class="cart-delete">
            <a class="cart-quantitydelete" href=""><i class="fa fa-times"></i></a>
          </td>
        </tr>`;
      }); 
    document.querySelector('tbody').innerHTML = cartContent
  }
}
renderListCart()

function increaseQty(id) {
  console.log(id)
  var qty =   document.querySelector('.cart-quantityinput').getAttribute('value')
  console.log(qty)
  var price = document.querySelector('.cart-price p').textContent
  var getProduct = JSON.parse(localStorage.getItem('cart'))
  qty = parseInt(qty) + 1
  document.querySelector('.cart-quantityinput').setAttribute('value', qty)
  //  qty.val(parseInt(qty.val())+1)
  // tong = qty.val() * parseInt(price)
  // var t= document.querySelector('cart-totalprice').
  // thanhtien =parseInt(thanhtien) + parseInt(Price) 
  // $("span.thanhtien").text("$" + thanhtien)
  Object.keys(getProduct).map(function(key, index){
      if(key == id) {
        getProduct[key].qty ++
      }
  })
  localStorage.setItem("cart",JSON.stringify(getProduct))
}

increaseQty()

function decreaseQty() {
  var qty =   document.querySelector('.cart-quantityinput').getAttribute('value')
  console.log(qty)
  var price = document.querySelector('.cart-price p').textContent
  var getProduct = JSON.parse(localStorage.getItem('cart'))
  qty = parseInt(qty) - 1
  var g =document.querySelector('.cart-quantityinput').setAttribute('value', qty)
  console.log(g)
  //  qty.val(parseInt(qty.val())+1)
  // tong = qty.val() * parseInt(price)
  // var t= document.querySelector('cart-totalprice').
  // thanhtien =parseInt(thanhtien) + parseInt(Price) 
  // $("span.thanhtien").text("$" + thanhtien)
  // Object.keys(getProduct).map(function(key, index){
  //     getProduct[key]["qty"] ++
  // })
  localStorage.setItem("cart",JSON.stringify(getProduct))
}

decreaseQty()

function removeProduct() {

}


