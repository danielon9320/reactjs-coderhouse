import React from "react";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const handleOnAdd = (count) => {
    setQuantity(count);
    addToCart({ id, name, price, img }, count);
  };
  return (
    <>
      <div key={id} className="container mt-5">
        <div className="row justify-content-center text-center align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 pb-5">
            <img
              src={img}
              className="itemDetail-img"
              alt="Imagen Producto"
            ></img>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3 className="fw-bold">{name}</h3>
            <h4>${price}</h4>
            <p className="text-right">{description}</p>
            <h5>Stock: {stock}</h5>
            <div className="d-flex justify-content-center">
              {quantity === 0 ? (
                <ItemCount initial={1} max={stock} onAdd={handleOnAdd} />
              ) : (
                <div className="d-flex justify-content-center">
                   <Link
                  to="/cart"
                  className="btn btn-danger bg-gradient me-3 mt-3">
                  Ir al carrito
                </Link>
                <Link to="/">
                  <button className="btn btn-danger bg-gradient me-3 mt-3">Seguir Comprando</button>
                </Link>
                </div>
               
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
