import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import cart from "../assets/icons/cart.svg"

import "./NavBar.css";

    function NavBar(){
    const { itemCount } = useContext(CartContext);
    

   return ( <header className="main-navigation">
    <nav>
      <ul className="">
        <li>
          <NavLink to="/"><h2>Products </h2></NavLink>
        </li>
        <li>
          <NavLink to="/cart"><img src={cart} alt="cart" width="50"></img>
          {itemCount && <span className="count">{itemCount}  </span>} </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)
}

export default NavBar;
