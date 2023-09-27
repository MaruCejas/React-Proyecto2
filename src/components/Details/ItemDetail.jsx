import React from 'react'

const ItemDetail = ( { item }) => {
    
  return (
    <div>
        <h4>{item.title}</h4>
        <img src="" alt="" />
        <p> description: {item.description}</p>
        <p> price: {item.price}</p>
        <p> category:{item.category}</p>

    </div>
  )
}

export default ItemDetail