import Button from "../Button";

const Product = ({ children, onClick, id, element }) => (
  
  <li id={id}>
    <img src={element.img} alt={element.name} />
    <p>{element.name}</p>
    <span>{element.category}</span>
    <div className="content-bottom">
      <span>R$ {element.price.toFixed(2)}</span>
      <Button onClick={() => onClick(element)} className="purchase">{children}</Button>
    </div>
  </li>
);
export default Product;
