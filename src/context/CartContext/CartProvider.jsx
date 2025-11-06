import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [ficha, setFicha] = useState(false)
    const exists = (id) => {
        const exist = cart.some(p => p.id === id)
        if (exist) {
            setFicha(false)
        } else {
            setFicha(true)
        }
        return exist;
    }
    const addItem = (item) => {
        if (exists(item.id)) {
            return 
        } else {
            return setCart([...cart, item])
        }
    }
    const deleteItem = (id) => {
        const filtered = cart.filter((j) => j.id !== id)
        setCart(filtered)
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotalItems = () => {
        if (cart.length) {
            return cart.length
        }
    }
    const values = {
        cart, ficha,exists, addItem, clearCart, getTotalItems, deleteItem
    }
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}