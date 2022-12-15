
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="container">

     <h2>Shopping Cart</h2>
     <BrowserRouter>
     <NavBar/>
        <Routes>
          <Route path="/" element={<ProductList/>} exact  />
          

          <Route path="/cart" element={<Cart/>} exact  />
        </Routes>
      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
