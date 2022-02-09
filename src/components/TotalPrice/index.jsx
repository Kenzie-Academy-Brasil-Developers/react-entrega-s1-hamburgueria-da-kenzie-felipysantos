import "./style.css";

const TotalPrice = ({ currentSale }) => {
  return (
    <span className="totalPrice">
      <p>Total</p>
      R$
      {currentSale.length !== 0
        ? currentSale
            .reduce((prev, next) => prev + next.price, 0)
            .toFixed(2)
            .replace(".", ",")
        : `0,00`}
    </span>
  );
};
export default TotalPrice;
