import { useState } from "react";
import Product from "../Product";

const Cart = ({ currentSale, setCurrentSale }) => {

  const [cart, setCart] = useState([])

  
  
  const remove = (removeElement) => {
    setCurrentSale(currentSale.filter((element) => element !== removeElement))
 
    
  }
  return (
    <div>
      <p>Cart</p>
      <ul>
        {currentSale.map((element) => <Product key={element.id} element={element} onClick={() => remove(element)}>x</Product>)}
      </ul>

      
    </div>
  );
};
export default Cart
