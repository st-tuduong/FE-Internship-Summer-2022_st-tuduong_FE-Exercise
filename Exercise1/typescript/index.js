var products = [
    {
        id: 1,
        img: "images/pr1.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 2,
        img: "images/pr2.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 3,
        img: "images/pr2.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 4,
        img: "images/pr3.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 5,
        img: "images/pr2.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
    {
        id: 6,
        img: "images/pr4.png",
        name: "White T-Shirt Summer",
        price: "89.99"
    },
];
setStorageItem(storageKey.product, products);
var renderListProduct = function () {
    var listProduct = getStorageItem(storageKey.product);
    var html = "";
    if (listProduct) {
        listProduct.forEach(function (item) {
            html +=
                "<li class='product-item product-sale col-3 col-sm-6'> " +
                    "<div class='product-img'>" +
                    "<img src= " + item.img + " alt='T-Shirt Summer Vibes' />" +
                    "<div class='product-overlay'>" +
                    "<button id= " + item.id + " class='btn btn-primary btn-cart'>ADD TO CART</button>" +
                    " </div>" +
                    "</div>" +
                    "<h4>" + item.name + "</h4>" +
                    "<div class='item-price'>" +
                    "<span class='item-current-price'>$" + item.price + "</span>" +
                    "</div>" +
                    "</li>";
        });
        var productList = document.querySelector(".product-list");
        productList.innerHTML = html;
        var btnAddCart = document.querySelectorAll(".btn-cart");
        btnAddCart.forEach(function (item) {
            item.addEventListener("click", function () {
                addCart(item.id);
            });
        });
    }
};
var addCart = function (id) {
    var product = products.find(function (item) { return item.id.toString() === id; });
    var cart = getStorageItem(storageKey.cart) || {};
    if (cart[id]) {
        cart[id].qty += 1;
    }
    else {
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
};
var countQty = function () {
    var $countQty = document.querySelector('.qty');
    var cart = getStorageItem(storageKey.cart);
    if (cart) {
        var count = Object.keys(cart).length;
        $countQty.innerHTML = count.toString();
        setStorageItem(storageKey.cart, cart);
    }
};
renderListProduct();
countQty();
