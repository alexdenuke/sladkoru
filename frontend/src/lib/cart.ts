export interface CartItem {
  productId: number;
  name: string;
  weightId: number;
  weight: number;
  price: number;
  quantity: number;
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const index = cart.findIndex(
    (i) => i.productId === item.productId && i.weightId === item.weightId
  );

  if (index !== -1) {
    cart[index].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem('cart');
}
