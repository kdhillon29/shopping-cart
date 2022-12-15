import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import Product from "./Product";

// const products = [
//     { id: "p1", title: "Smart Watch", price: 29.99 },
//     { id: "p2", title: "Apple Watch 3", price: 9.99 },
//     { id: "p3", title: "Swiss Watch", price: 0.99 },
//     { id: "p4", title: "Samsung Watch", price: 2.99 }
//   ];

function ProductList() {
       const {products}  =useContext(CartContext)
       console.log(products)
    return (
       
            <div className="d-flex row gap-5">

           {products.map((product,index)=><Product key={index} product={product}/>)}
            </div>
           

       
      );
}

export default ProductList;