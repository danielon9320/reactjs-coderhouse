import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import "./CartWidget.css";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <>
    <Link to={'/cart'}>
          <img src={require('../assets/img/shopping-cart.png')} class="w-50" id="img" alt="imagen carrito"></img>
          { getQuantity() }
          </Link>

    </>

  )
}

export default CartWidget




