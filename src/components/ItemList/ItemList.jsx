import React from 'react'
import Item from '../Item/Item'
const ItemList = ({items}) => {
  return (
    <>
          {
            items.map(prod=><Item key={prod.id} className="col" item={prod}/>)
        }
    </>
  )
}

export default ItemList