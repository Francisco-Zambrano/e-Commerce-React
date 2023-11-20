import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const quantityOnCart = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
    }
    
    const totalToPay = () => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    }

    const clear = () => {
        setCart([]);
    }
    
    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    }


    return (
        <CartContext.Provider value={{cart, setCart, quantityOnCart, totalToPay, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )

}