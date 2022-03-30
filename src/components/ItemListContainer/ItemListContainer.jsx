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
      <h1>{greeting}</h1>
      <div className="row row-cols-2">
        <ItemList items={products} />
      </div>
      
    </>
  );
};

export default ItemListContainer;
