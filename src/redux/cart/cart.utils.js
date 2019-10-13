export const addItemToCart = (cartItems, newCartItem) => {
  // Will return null if not found
  const existingItem = cartItems.find(
    cartItem => cartItem.id === newCartItem.id
  );

  if (existingItem) {
    // return new cartItems array
    // increase quantity of matching cartItem
    return cartItems.map(cartItem =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // else add and set quantity to 1
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
