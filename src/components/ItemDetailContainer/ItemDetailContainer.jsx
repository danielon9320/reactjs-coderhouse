import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncmock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true)
  const { productId } = useParams();

  useEffect(()=>{
    setLoading(true)

    getProductById(productId).then(prod => {
      setProduct(prod)
    }).catch(error => {
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })
  },[productId])

  if(loading){
    return <h1 className="text-center m-4">Cargando...</h1>
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
