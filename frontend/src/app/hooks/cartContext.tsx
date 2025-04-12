'use client'

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react'
import {
    getCart as getCartFromStorage,
    addToCart as addToStorage,
    clearCart as clearFromStorage,
    CartItem,
} from '@/lib/cart'

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    clearCart: () => void
    updateQuantity: (productId: number, weightId: number, amount: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        setCart(getCartFromStorage())
    }, [])

    const addToCart = (item: CartItem) => {
        addToStorage(item)
        setCart(getCartFromStorage())
    }

    const clearCart = () => {
        clearFromStorage()
        setCart([])
    }

    const updateQuantity = (productId: number, weightId: number, amount: number) => {
        const cart = getCartFromStorage()

        const index = cart.findIndex(
            (item) => item.productId === productId && item.weightId === weightId
        )

        if (index !== -1) {
            cart[index].quantity += amount

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1)
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            setCart(cart)
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used inside CartProvider')
    return context
}
