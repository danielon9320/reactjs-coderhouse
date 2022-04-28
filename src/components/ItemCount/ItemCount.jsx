import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, max, onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
      if(count < max){
        setCount(count + 1);
      }
    
  };

  const decrement = () => {
    if(count > initial){
      setCount(count - 1);
    }
    
  };
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center">
    <button onClick={decrement} className="btn btn-dark">-</button>
      <h3 className="m-3"> {count} </h3>
      <button onClick={increment} className="btn btn-dark">+</button>
    </div>
      <div className="d-flex justify-content-center">
      <button onClick={() => onAdd(count)} className="btn btn-danger bg-gradient mt-3">Agregar al carrito</button>
      </div>
      
    </div>
  );
};

export default ItemCount;
