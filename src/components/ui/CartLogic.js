'use client'

/**
 * Adds an item to the cart in localStorage.
 */
export default function addToCart(id, name, price, img) {
  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : [];

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price, img, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}


/**
 * Removes an item from the cart in localStorage.
 */
export function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
}
