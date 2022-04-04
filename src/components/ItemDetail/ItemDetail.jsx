import React from "react";
import './ItemDetail.css'


const ItemDetail = (prod) => {
  return (
    <>
      <div key={prod.id} className="container mt-5">
      <div className="row justify-content-center text-center align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 pb-5">
          <img src={prod.img} className="itemDetail-img" alt="Imagen Producto"></img>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h3 className="fw-bold">{prod.name}</h3>
          <h4>${prod.price}</h4>
          <p>{prod.description}</p>
          <h5>Stock: {prod.stock}</h5>
          <div className="d-flex justify-content-center">
          
                                <button className="btn btn-danger bg-gradient me-3 mt-3">Ir al carrito</button>
                           

        </div>
      </div>

      </div>
      </div>
    </>
  );
};

export default ItemDetail;
