import React from 'react'
import './card.css'

const Card = ({item,name, price, cartIncreament, setCart}) => {
    function cartHadnler(){
        cartIncreament();
        setCart((cart) =>[...cart, item ])
    }
  return (
    <div className='card'>
        <h2>{name}</h2>
        <p>Price : {price}</p>
        <button onClick={cartHadnler}>Add To Cart</button>
    </div>
  )
}



export default Card