import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";

import "./NavBar.css";

    function NavBar(){
    const { cart } = useContext(CartContext);
    const cartItemNumber= cart.reduce((count, curItem) => {
        return count + curItem.quantity;
      }, 0)

   return ( <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)
}

export default NavBar;
