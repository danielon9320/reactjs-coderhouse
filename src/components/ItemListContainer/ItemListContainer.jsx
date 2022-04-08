import React from "react";
import { getProducts } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    getProducts(categoryId).then(items => {
        setProducts(items)
    }).catch(err  => {
        console.log(err)
    }).finally(() => {
        setLoading(false)
    })

    return (() => {
        setProducts([])
    })          
}, [categoryId])

  return (
    <>
    {
      loading ? 
   
      <h1 className="text-center m-4">Cargando....</h1> :
      products.length ? 
      <div className="container">
      <div className="row">

      <h1 className="text-center m-4">{greeting}</h1>
        <ItemList items={products} />
        </div>
      </div> : <h1 className="text-center m-4">No se encontraron productos</h1>
    }
    </>
  );
};

export default ItemListContainer;
