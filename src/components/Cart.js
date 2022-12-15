import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import "./Cart.css"

function Cart() {
    const {cart,removeProductFromCart} =useContext(CartContext)
    console.log(cart)
    return ( 
        <main className="shopping-cart">
        {cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
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
      </main>
     );
}

export default Cart;