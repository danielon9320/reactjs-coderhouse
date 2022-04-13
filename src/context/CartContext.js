import { createContext, useState } from "react";
import React from 'react'
const Context = createContext()

export const CartContextProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);

    const addItem = (product, cantidadAAgregar) => {

        const producto = isInCart(product);
        if (producto) {
            producto.quantity += cantidadAAgregar;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
        } else {
            setCart([...cart, { ...product, quantity: cantidadAAgregar }]);
        }

    }
    //Función auxiliar que me determina si el producto está o no en el cart por ID
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    //limpia todo el carrito
    const clearCart = () => {
        setCart([]);
    }

    //elimina item del carrito
    const removeItem = (producto) =>{
        if(isInCart(producto))
        {   // esto no funciona
            //cart.delete(producto);
        }
    } 

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }
    return (
        <Context.Provider value={{ 
            cart, 
            addItem, removeItem, isInCart,
            clearCart,
            getQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context