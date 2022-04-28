import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCart = (product) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div key={product.id} className=" my-3 row align-items-center">

    
      <div className="col-lg-2 col-sm-3">
        <img src={product.img} alt="foto producto" style={{ width: 150 }} />
      </div>
      <div className="col-lg-2 col-sm-3">
        <p className="text-center">Artista:</p>
        <h5 className="text-center">{product.name}</h5>
      </div>
      <div className="col-lg-2 col-sm-3">
        <p className="text-center">Precio:</p>
        <h5 className="text-center">${product.price} </h5>
      </div>
      <div className="col-lg-2 col-sm-3">
        <p className="text-center">Cantidad:</p>
        <h5 className="text-center">{product.quantity} </h5>
      </div>
      <div className="col-lg-2 col-sm-3">
      <p className="text-center">Subtotal</p>
        <h5 className="text-center">${product.quantity * product.price} </h5>
      </div>

      <div className="col-lg-2 col-sm-1">
        <button onClick={() => removeItem(product.id)} className="btn btn-danger bg-gradient m-3"> Eliminar</button>
      </div>

    </div>
  );
};

export default ItemCart;
