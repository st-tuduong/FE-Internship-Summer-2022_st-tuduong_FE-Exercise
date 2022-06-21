var products = [
  {
    id: 1,
    img: 'images/pr1.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 2,
    img: 'images/pr2.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 3,
    img: 'images/pr2.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 4,
    img: 'images/pr3.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 5,
    img: 'images/pr2.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 6,
    img: 'images/pr4.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
];

setStorageItem(lsShopping.product, products);

function renderListProduct() {
  var listProduct = getStorageItem(lsShopping.product);
  var html = "";
  if (listProduct) {
    listProduct.forEach(function (listProduct) {
      html += 
      "<li class='product-item product-sale col-3 col-sm-6'> " +
     "<div class='product-img'>"  + 
        "<img src= "+listProduct.img+" alt='T-Shirt Summer Vibes' />" +
        "<div class='product-overlay'>" +
          "<button id= "+listProduct.id+ " class='btn btn-primary btn-cart'>ADD TO CART</button>" +
       " </div>" +
      "</div>" +
      "<h4>"+listProduct.name+"</h4>" +
      "<div class='item-price'>" +
          "<span class='item-current-price'>$"+listProduct.price+"</span>" +
       "</div>" +
     "</li>" ;
    });
    document.querySelector(".product-list").innerHTML = html;
    var btnAddCart = document.querySelectorAll(".btn-cart");
    for (i = 0; i < btnAddCart.length; i++) {
      btnAddCart[i].addEventListener("click", addCart);
      btnAddCart[i].addEventListener("click", countQty);
    }
  }
}
renderListProduct();

function addCart(id) {
  var id = this.id
  var product = products.find(item => item.id.toString() === id)
  var cart = getStorageItem(lsShopping.cart) || {};
  if (cart[id]) {
    cart[id].qty += 1;
  } else {
    cart[id] = {
      id: id,
      img: product.img,
      name: product.name,
      price: product.price,
      qty: 1,
    };
  }
  setStorageItem(lsShopping.cart, cart);
}

function countQty() {
  var cart = getStorageItem(lsShopping.cart);
  if (cart) {
    var count = Object.keys(cart).length;
    document.querySelector(".qty").innerHTML = count;
  }
}

countQty()
