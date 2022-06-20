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

var products = [
  {
    id: 1,
    img: "images/pr2.png",
    name: "White T-Shirt Summer",
    itemCurrent: "89.99",
  },
  {
    id: 2,
    img: "images/pr3.png",
    name: "T-Shirt Summer",
    itemCurrent: "89.99",
  },
  {
    id: 3,
    img: "images/pr4.png",
    name: "T-Shirt Summer",
    itemCurrent: "89.99",
  },
  {
    id: 4,
    img: "images/pr1.png",
    name: "T-Shirt Summer",
    itemCurrent: "89.99",
  },
  {
    id: 5,
    img: "images/pr3.png",
    name: "T-Shirt Summer",
    itemCurrent: "89.99",
  },
  {
    id: 6,
    img: "images/pr1.png",
    name: "T-Shirt Summer",
    itemCurrent: "89.99",
  },
];

saveLocal(lskey.product, products)

function renderListProduct() {
  var listProduct = JSON.parse(getLocal(lskey.product))
  var html = "";
  if (listProduct) {
   listProduct.forEach(function(listProduct) {
    html += `
    <li class="product-item product-sale col-3 col-sm-6">
    <div class="product-img" id="${listProduct.id}">
      <img src="${listProduct.img}" alt="T-Shirt Summer Vibes" />
      <div class="product-overlay">
        <button class="btn btn-primary btn-cart">ADD TO CART</button></div>
      </div>
    </div>
      <h4>${listProduct.name}</h4>
      <div class="item-price">
        <span class="item-current-price">$${listProduct.itemCurrent}</span>
      </div>
    </li>`;
   }); 
    document.querySelector(".product-list").innerHTML = html;
    var btnAddCart = document.querySelectorAll('.btn-cart');
    for(i = 0; i < btnAddCart.length; i++) {
      btnAddCart[i].addEventListener('click', addCart);
      btnAddCart[i].addEventListener('click', countProduct);
    }
  }
}
renderListProduct();

function addCart(e) {
var cartItem = {} 
var product = e.target.parentElement.parentElement.parentElement;
var id = product.querySelector('.product-img').getAttribute('id');
var img = product.querySelector(".product-img img").getAttribute("src");
var name = product.querySelector(".product-item h4").textContent;
var price = product.querySelector(".item-current-price").textContent;
var qty = 1;

var cart = getLocal(lskey.cart)
if(cart) {
  cartItem = JSON.parse(cart);
  Object.keys(cartItem).map((key, index) => {
    if (key == id) {
      qty = cartItem[key]['qty'] +1;
    }
  });
}
  cartItem[id] = {
    img: img,
    name: name,
    price: price,
    qty: qty,
  };
  saveLocal(lskey.cart, cartItem)
}
addCart()

function countProduct() {
  var cart = JSON.parse(getLocal(lskey.cart))
  if(cart) {
   var count =  Object.keys(cart).length;
  document.querySelector('.qty').innerHTML = count
  }
}
countProduct()

