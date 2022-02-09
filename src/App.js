import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import ProductList from "./components/ProductsList";
import Loading from "./components/Loading";
import Cart from "./components/Cart";
import Input from "./components/Input";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setProducts(response);
      });
  }, []);

  const handleClick = (productId) => {
    const includesItem = currentSale.includes(productId);
    return includesItem ? (currentSale) : (setCurrentSale([...currentSale, productId]));
  };

  const showResults = (value) => {
    const filteredItem = products.filter((element) =>element.name.toLowerCase() === value.target.value.toLowerCase())
    setFilteredProducts(filteredItem)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2><strong>Burguer</strong> kenzie</h2>
        <form onSubmit={showResults}>
          <Input placeholder="Input a product name" onChange={(e) => showResults(e)}/>
          <Button onClick={(e) => e.preventDefault()} type="submit" className="Search-button">search</Button>
        </form>
      </header>
      <main>
        <section>
          {loading ? (
            <Loading />
          ) : (
            filteredProducts.length !== 0 ? <ProductList onClick={handleClick}>{filteredProducts}</ProductList> :<ProductList onClick={handleClick}>{products}</ProductList>
          )}
        </section>
        <section>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </section>
      </main>
    </div>
  );
}

export default App;
