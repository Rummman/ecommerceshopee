export const initCart = () => {
  return localStorage.setItem("cart", "[]");
};

export const getCart = () => {
  const cartString = localStorage.getItem("cart");

  if (!cartString) {
    return [];
  }
  const result = JSON.parse(cartString);
  return result;
};

export const addItem = (item) => {
  const cart = getCart();
  console.log(cart) ;
  const existingItem = cart.find((element) => element.id === item.id);
  if (existingItem) {
    existingItem.amount += parseInt(item.amount);
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCart = (item) => {
  const cart = getCart();
  const existingItem = cart.find((element) => element.id === item.id);
  existingItem.amount = parseInt(item.amount);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const deleteItem = (id) => {
  const cart = getCart();
  const updatedCart = cart.filter((item)=> item.id !== id) 
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const setUpdatedCart = (cart)=>{
  localStorage.setItem("cart", JSON.stringify(cart));
}
