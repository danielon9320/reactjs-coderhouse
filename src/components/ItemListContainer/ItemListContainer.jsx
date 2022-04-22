import React from "react";
//import { getProducts } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from '../../services/firebase';


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    // getProducts(categoryId).then(items => {
    //     setProducts(items)
    // }).catch(err  => {
    //     console.log(err)
    // }).finally(() => {
    //     setLoading(false)
    // })

    const collectionRef = categoryId
    ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
    : collection(firestoreDb, 'products')

    getDocs(collectionRef).then(querySnapshot => {
      console.log(querySnapshot);
      const products = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setProducts(products);
      
    }).catch(error => {
      console.log(error);
    }).finally(()=>{
      setLoading(false);
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
