import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className="card m-5" style={{width: "20rem"}}>
    <img src={item.img} className="card-img-top" alt="producto"/>
    <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.category}</p>
        <p className="card-text">${item.price}</p>
        
        <p className="card-text">Cantidad Disponible: {item.stock}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary"> Ver Detalles</Link>
       
    </div>
</div>
  )
}

export default Item