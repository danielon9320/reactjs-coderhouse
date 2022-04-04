import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-4">
      <div className="card mt-5">
        <img src={item.img} className="card-img-products" alt={item.name} />
      </div>
      <div className="card-body text-center">
        <h4 className="card-title">{item.name}</h4>
        <h5 className="card-text">{item.category}</h5>
        <h5 className="card-text">${item.price}</h5>
      </div>
      <div className="card-footer text-center">
        <Link to={`/item/${item.id}`} className="btn btn-danger bg-gradient">
          {" "}
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
