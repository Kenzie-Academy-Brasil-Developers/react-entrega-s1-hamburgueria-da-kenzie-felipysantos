import Product from "../Product";
import "./style.css";
const ProductList = ({ children, onClick }) => {
  return (
    <ul className="productList">
      {children.map((element) => (
        <Product
          onClick={onClick}
          key={element.id}
          id={element.id}
          element={element}
        >
          Add to cart
        </Product>
      ))}
    </ul>
  );
};
export default ProductList;
