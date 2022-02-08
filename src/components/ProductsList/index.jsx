import Product from "../Product";
const ProductList = ({ children, onClick }) => {
  return (
    <ul>
      
      {children.map((element) => (
        <Product onClick={onClick} key={element.id} id={element.id} element={element}>Add to cart</Product>
      ))}
    </ul>
  );
};
export default ProductList;
