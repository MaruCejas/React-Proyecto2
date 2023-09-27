import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [ item, setItems] = useState({})
    const getData = () => {
        fetch("https://fakestoreapi.com/products")
             .then( response => response.json())
             .then( data => setItems(data))
             .catch( error => console.log(error))
      }

      useEffect( () => {
        getData()
      },[])

  return (
    <>
      <ItemDetail item={item} />
    
    </>
  )
}

export default ItemDetailContainer