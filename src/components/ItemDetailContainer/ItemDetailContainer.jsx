import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from "firebase/firestore";
import LoaderSecondary from "../LoaderSecondary/LoaderSecondary";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true)
  const { productId } = useParams();

  useEffect(()=>{
    setLoading(true)


    const docRef = doc(firestoreDb, 'products', productId);
    
    getDoc(docRef).then(querySnapshot => {
      const product = { id: querySnapshot.id, ...querySnapshot.data() }
      setProduct(product);
    }).catch(error => {
      console.log(error)
    }).finally(()=>{
      setLoading(false);
    })
  },[productId])

  if(loading){
    return <LoaderSecondary></LoaderSecondary>
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
