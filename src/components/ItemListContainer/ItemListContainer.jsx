import React from "react";
import { getProducts } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <>
      <h1 className="text-center m-4">{greeting}</h1>
      <div className="container">
      <div className="row">

      
        <ItemList items={products} />
        </div>
      </div>
      
    </>
  );
};

export default ItemListContainer;
