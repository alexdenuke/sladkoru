

export interface CartItem {
    productId: number
    name: string
    weightId: number
    weight: number
    price: number
    quantity: number
  }

export function addToCart(item: CartItem) {
    if (typeof window === 'undefined') return
  
    const stored = localStorage.getItem('cart')
    const cart: CartItem[] = stored ? JSON.parse(stored) : []
  
    const existingItemIndex = cart.findIndex(
      (i) => i.productId === item.productId && i.weightId === item.weightId
    )
  
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += item.quantity
    } else {
      cart.push(item)
    }
  
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  

 export function getCart(): CartItem[] {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  }