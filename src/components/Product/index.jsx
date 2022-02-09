import Button from "../Button";
import "./style.css";

const Product = ({ children, onClick, element }) => (
  <li>
    <img src={element.img} alt={element.name} />
    <p>{element.name}</p>
    <span>{element.category}</span>

    <span>R$ {element.price.toFixed(2).replace(".", ",")}</span>
    <Button onClick={() => onClick(element)} className="purchase">
      {children}
    </Button>
  </li>
);
export default Product;
