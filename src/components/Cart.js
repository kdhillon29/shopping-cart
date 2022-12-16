import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import "./Cart.css"

function Cart() {
    const {cart,total,itemCount,addProductToCart,removeProductFromCart} =useContext(CartContext)
    console.log(cart)
    return ( 
        <main className="shopping-cart">
        {cart.length <= 0 && <h2 style={{textAlign:'center'}}> Cart Empty!</h2>}
        <ul>
          {cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <input type="number" value={cartItem.quantity} />
              <button onClick={()=>addProductToCart(cartItem)} class="btn btn-secondary ">+</button>
              <button onClick={removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )} class="btn btn-secondary ml-1 ">-</button>
              </div>
             
              
              <div>
                <button
                  onClick={removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      {  itemCount &&  <div> <h2>Total:{total} of {itemCount} products </h2></div>}
      </main>
     );
}

export default Cart;