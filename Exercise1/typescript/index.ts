const products: any = [
  {
    id: 1,
    img: "images/pr1.png",
    name: "White T-Shirt Summer",
    price: "89.99",
  },
  {
    id: 2,
    img: "images/pr2.png",
    name: "White T-Shirt Summer",
    price: "89.99",
  },
  {
    id: 3,
    img: "images/pr2.png",
    name: "White T-Shirt Summer",
    price: "89.99",
  },
  {
    id: 4,
    img: "images/pr3.png",
    name: "White T-Shirt Summer",
    price: "89.99",
  },
  {
    id: 5,
    img: "images/pr2.png",
    name: "White T-Shirt Summer",
    price: "89.99",
  },
  {
    id: 6,
    img: "images/pr4.png",
    name: "White T-Shirt Summer",
    price: "89.99",
  },
];

setStorageItem(storageKey.product, products);

const renderListProduct = () => {
  const listProduct = getStorageItem(storageKey.product);
  let html = "";
  if (listProduct) {
    listProduct.forEach(function (item: any) {
      html +=
        "<li class='product-item product-sale col-3 col-sm-6'> " +
          "<div class='product-img'>" +
            "<img src= " +item.img + " alt='T-Shirt Summer Vibes' />" +
          "<div class='product-overlay'>" +
            "<button id= "+item.id +" class='btn btn-primary btn-cart'>ADD TO CART</button>" +
          " </div>" +
          "</div>" +
          "<h4>" +item.name +"</h4>" +
          "<div class='item-price'>" +
            "<span class='item-current-price'>$" +item.price +"</span>" +
          "</div>" +
        "</li>";
    });
    const productList = document.querySelector(".product-list") as HTMLElement;
    productList.innerHTML = html;
    const btnAddCart = document.querySelectorAll(".btn-cart");
    btnAddCart.forEach(function (item: any) {
      item.addEventListener("click", function() {
        addCart(item.id);
      });
    });
  }
}

const addCart = (id: number) => {
  const product = products.find((item: any) => item.id.toString() === id);
  const cart = getStorageItem(storageKey.cart) || {};
  if (cart[id]) {
    cart[id].qty += 1;
  } else {
    cart[id] = {
      id: id,
      img: product.img,
      name: product.name,
      price: product.price,
      qty: 1
    };
  }
  setStorageItem(storageKey.cart, cart);
  countQty();
}

const countQty = () =>{
  let $countQty = document.querySelector('.qty');
  const cart = getStorageItem(storageKey.cart);
  if (cart) {
    let count = Object.keys(cart).length;
    $countQty.innerHTML = count.toString();
    setStorageItem(storageKey.cart, cart);
  }
}


renderListProduct();
countQty();
