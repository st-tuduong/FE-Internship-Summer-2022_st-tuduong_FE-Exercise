import { Cart, getStorageItem, Product, setStorageItem, storageKey } from "./common.js";

const products : Product[]= [
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
    img: 'images/pr3.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 4,
    img: 'images/pr4.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 5,
    img: 'images/pr1.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 6,
    img: 'images/pr3.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 7,
    img: 'images/pr2.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
  {
    id: 8,
    img: 'images/pr4.png',
    name: 'White T-Shirt Summer',
    price: '89.99',
  },
];

setStorageItem(storageKey.PRODUCT, products);

const renderListProduct = () => {
  const listProduct : Product[] = getStorageItem(storageKey.PRODUCT);
  let html = ``;
  if (listProduct) {
    listProduct.forEach((item: Product) => {
      html += `<li class='product-item product-sale col-3 col-sm-6'>
                <div class='product-img'>
                  <img src= '${item.img}' alt='T-Shirt Summer Vibes' />
                  <div class='product-overlay'>
                    <button id= '${item.id}' class='btn btn-primary js-btn-cart'>ADD TO CART</button>
                  </div>
                </div>
                <h4>'${item.name}'</h4>
                <div class='item-price'>
                  <span class='item-current-price'>$'${item.price}'</span>
                </div>
              </li>`;
    });
    const productList = document.querySelector('.product-list') as HTMLElement;
    productList.innerHTML = html;
    const btnAddCart = document.querySelectorAll('.js-btn-cart');
    btnAddCart.forEach((item: Element) => {
      item.addEventListener('click', () => {
        addCart(+item.id);
      });
    });
  }
};

const addCart = (id: number) => {
  const product: Product = products.find((item: Product) => item.id === id)!;
  const cart = getStorageItem(storageKey.CART) || {};
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
  setStorageItem(storageKey.CART, cart);
  countQty();
};

const countQty = () => {
  const countQty = document.querySelector('.qty') as Element;
  const cart: Cart[] = getStorageItem(storageKey.CART) || {};
  if (cart) {
    let count: number = Object.keys(cart).length;
    countQty.innerHTML = count.toString();
    setStorageItem(storageKey.CART, cart);
  }
};

renderListProduct();
countQty();
