import React, {  useReducer } from "react";

import CartContext from "./CartContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./CartReducer";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Smart watch", price: 29.99 },
    { id: "p2", title: "Samsung Watch", price: 9.99 },
    { id: "p3", title: "Apple Watch", price: 14.59 },
    { id: "p4", title: "Classic Watch", price: 50.29 }
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 500);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 500);
  };
   

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        total:cartState.total,
        itemCount:cartState.itemCount,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;
