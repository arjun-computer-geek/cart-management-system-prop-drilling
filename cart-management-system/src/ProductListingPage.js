import React, { useState } from 'react'
import Card from './Card'
import cards from './card-data'

const ProductListingPage = () => {
    // states Variable
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cart, setCart] = useState([]);


    // fuctions
    const addToCart =() =>{
         setCartItemCount((a) => a + 1)
    }
    const removeFromCart = (id) => {
        // const tempItem = [...cart]
        // const newItem = tempItem.filter((item, i) => (i != id))
        // setCart(newItem)
        setCart(cart.filter((item, i) => (i != id)))
        setCartItemCount((num) => num -1)
    }
  return (
    <>  
        <div className='card-container'>
            {cards.map(card => <Card key={card.id} item={card} name={card.name} price={card.price} cartIncreament={addToCart} setCart={setCart}/>)}
        </div>
        <h1>Cart: {cartItemCount}</h1>
        <div>
            {cart.map((item, index) => 
            <div key={index} className='card'>
                <h2>{item.name}</h2>
                <p>Price : {item.price}</p>
                <button 
                    onClick={() => removeFromCart(index)}
                >Remove From Cart</button>
            </div>)}
        </div>
    </>
  )
}
export default ProductListingPage