import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Badge from 'react-bootstrap/Badge'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import "./CartWidget.css";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <>
    <Link to={'/cart'}>
            <FaShoppingCart size="2rem" color="white" className="position-relative"/>
          
         <Badge pill bg="danger">
         { getQuantity() }
         </Badge>           
    </Link>

    </>

  )
}

export default CartWidget




