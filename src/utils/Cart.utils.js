
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const RemoveFromCart = (cartItems, ItemToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToDelete.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== ItemToDelete.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === ItemToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
