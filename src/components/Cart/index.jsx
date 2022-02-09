import CartCard from "../CartCard";
import "./style.css"
import { FiX } from "react-icons/fi";
import TotalPrice from "../TotalPrice";
import Button from "../Button"
const Cart = ({ currentSale, setCurrentSale }) => {
  const remove = (removeElement) => {
    setCurrentSale(currentSale.filter((element) => element !== removeElement));
  };
  const removeAll = (removeAll) => {
    setCurrentSale([]);
  };
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {currentSale.map((element) => (
          <CartCard
            key={element.id}
            element={element}
            onClick={() => remove(element)}
          >
            <FiX/>
          </CartCard>
        ))}
      </ul>
      <div>
          <TotalPrice currentSale={currentSale}></TotalPrice>
      </div>
      <Button onClick={removeAll} className="removeItems">Remove All</Button>

    </div>
  );
};
export default Cart;
