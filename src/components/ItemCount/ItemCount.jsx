import React from "react";
import { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    
      setCount(count + 1);
    
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
