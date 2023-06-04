import { useAppSelector } from "../..";
import ShoppingItem from "./ShoopingItem";

const summaryStyle = {
  margin: "20px",
};

const ShoppingCart = () => {
  const shoppingCartState = useAppSelector((state) => state.shoppingCart);

  const itemsElements = shoppingCartState.items.map((item, index) => {
    return <ShoppingItem key={index} item={item} />;
  });

  return (
    <>
      <div>{itemsElements}</div>
      <div style={summaryStyle}>
        Number of items: {shoppingCartState.numberOfItems}
      </div>
      <div style={summaryStyle}>
        Total price: {shoppingCartState.totalPrice.toFixed(2)}
      </div>
    </>
  );
};

export default ShoppingCart;
