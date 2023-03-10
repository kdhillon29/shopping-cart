import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({product}) {
    console.log(product)
    const {title,price,img} =product
      const {addProductToCart} =useContext(CartContext)
      const notify = () => {
        console.log('toaat')
        toast('Item Added', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
      function addProduct(product){
        addProductToCart(product)
        notify()

      }
    return (
       

        <div  className="card  col-md-4 col-6 mt-2">
            <ToastContainer />
           <div className="mx-auto w-50" style={{ width:"150px", height:"150px",overflow:"hidden"}} >

            <img className='mx-auto img-thumbnail '
                src={`assets/${img}`}
                alt="product"
                >
            </img>
           </div>
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <p className="card-text">${price}</p>
                    <a href="/product" className="btn details px-auto">view details</a><br />
                    <button onClick={()=>addProduct(product)}  className="btn btn-primary px-5 m-1">Buy</button>
                </div>
            </div>
        </div>
);
}

export default Product;