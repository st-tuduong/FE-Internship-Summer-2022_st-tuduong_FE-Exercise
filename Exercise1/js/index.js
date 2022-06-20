const products  = [
    {
        id: 1,
        img: 'images/pr2.png',
        name: 'White T-Shirt Summer',
        itemCurrent: '89.99',
    },
    {
        id: 2,
        img: 'images/pr3.png',
        name: 'T-Shirt Summer',
        itemCurrent: '89.99',
    },
    {
      id: 3,
      img: 'images/pr4.png',
      name: 'T-Shirt Summer',
      itemCurrent: '89.99',
  },
  {
    id: 4,
    img: 'images/pr1.png',
    name: 'T-Shirt Summer',
    itemCurrent: '89.99',
},
{
  id: 5,
  img: 'images/pr3.png',
  name: 'T-Shirt Summer',
  itemCurrent: '89.99',
},
{
  id: 6,
  img: 'images/pr1.png',
  name: 'T-Shirt Summer',
  itemCurrent: '89.99',
}
]

localStorage.setItem('listProducts', JSON.stringify(products))

function renderListProduct() {
    let getProduct = JSON.parse(localStorage.getItem('listProducts'))
    let productsContent = ""
    if(getProduct){
        Object.keys(getProduct).map((key, value) => {
            productsContent += `
            <li class="product-item product-sale col-3 col-sm-6">
              <a  href="#" class="product-link">
                <img src="${getProduct[key]['img']}" alt="T-Shirt Summer Vibes" />
                <button class="btn btn-primary btn-cart"  onclick="addCart(${getProduct[key].id})">ADD TO CART</button>
                <h4>${getProduct[key]['name']}</h4>
                <div class="item-price">
                  <span class="item-current-price">$${getProduct[key]['itemCurrent']}</span>
                </div>
              </a>
            </li>`;
        }); 
      document.querySelector('.product-list').innerHTML = productsContent
    }
}

renderListProduct()

