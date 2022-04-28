import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, cleaningCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1>No hay productos en el carrito</h1>
        <Link to={"/"}> Ver Productos </Link>
      </>
    );
  }
  return (
    <div className="container">
      <h1 className="text-center">Carrito</h1>
      <div className="row mt-4 align-items-center text-center">
      </div>
      {cart.map((product) => {
        return <ItemCart key={product.id} {...product}></ItemCart>;
      })}
      <div className="d-flex justify-content-center m-2">
        <h3>Precio Total: <b>${getTotal()}</b></h3>
      </div>
      <div className="d-flex justify-content-center m-2">
      <button className="btn btn-danger bg-gradient m-3" onClick={() => cleaningCart()}> Vaciar Carrito </button>
      <Link to={"/"}>
        <button className="btn btn-danger bg-gradient m-3"> Procesar Compra</button>
      </Link>
      </div>
      
      
      
    </div>
  );
};

export default Cart;
