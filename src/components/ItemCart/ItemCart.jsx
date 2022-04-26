import React from 'react'
import { useContext } from 'react';
import "./ItemCart.css";
import   CartContext    from '../../context/CartContext';

const ItemCart = (product) => {
  console.log("lo q llega", product);
  const { removeItem } = useContext(CartContext);
  return (
    <div key={product.id} className="itemCart">
    <div>
        <img src={product.img} alt={product.name}/>
    </div>
    <div >
        <h2>{product.name}</h2>
        <p>{product.title}</p>
        <p> Cantidad: {product.quantity} </p>
    </div>
    <div>
    <button onClick={()=> removeItem(product.id)}>Eliminar Producto</button>
    </div>

</div>
  )
}

export default ItemCart