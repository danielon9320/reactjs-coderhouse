import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (quantity) => {
    console.log(quantity)
  }
  return (
    <>
    <h1>{greeting}</h1>
    <ItemCount initial={1} stock={20} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer