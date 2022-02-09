import Button from "../Button";

const CartCard = ({ children, onClick, element }) => (
  <li>
    <div>
      <img src={element.img} alt={element.name} />
      <div>
        <p>{element.name}</p>
        <span>{element.category}</span>
      </div>
    </div>
    <div>
      <Button onClick={() => onClick(element)} className="purchase">
        {children}
      </Button>
    </div>
  </li>
);
export default CartCard;
