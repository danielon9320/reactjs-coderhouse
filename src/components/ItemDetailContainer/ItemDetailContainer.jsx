import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemById } from "../../asyncmock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getItemById(id).then((prod) => {
      setProduct(prod);
      setShow(true);
    });
  }, [id, show]);

  return (
    <div>
      {show ? (
        <ItemDetail {...product} />
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="spinner-border text-danger sp"
            
            role="status"
          ></div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
