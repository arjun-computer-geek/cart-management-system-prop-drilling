import React, { useEffect, useState } from 'react'
import Card from './Card'
import cards from './card-data'

const ProductListingPage = () => {
    // states Variable
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() =>{
        let total = 0;
        cart.map(item => total += item.price)
        setTotalPrice(total)
    },[cart])

    // fuctions
    const addToCart =() =>{
         setCartItemCount((a) => a + 1)
    }
    const removeFromCart = (id) => {
        // const tempItem = [...cart]
        // const newItem = tempItem.filter((item, i) => (i != id))
        // setCart(newItem)
        setCart(cart.filter((item, i) => (i !== id)))
        setCartItemCount((num) => num -1)
    }
  return (
    <>  
        <div className='card-container'>
            {cards.map(card => <Card key={card.id} item={card} name={card.name} price={card.price} cartIncreament={addToCart} setCart={setCart}/>)}
        </div>
        <h1>Cart: {cartItemCount}</h1>
        <div className='card-container'>
            {cart.map((item, index) => 
            <div key={index} className='card'>
                <h2>{item.name}</h2>
                <p>Price : {item.price}</p>
                <button 
                    onClick={() => removeFromCart(index)}
                >Remove From Cart</button>
            </div>)}
        </div>
        <h1>Total Price : {totalPrice}</h1>
    </>
  )
}
export default ProductListingPage