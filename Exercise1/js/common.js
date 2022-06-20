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