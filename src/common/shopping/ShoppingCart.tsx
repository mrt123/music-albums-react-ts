import { useAppSelector } from "../..";
import ShoppingItem from "./ShoopingItem";

const summaryStyle = {
  margin: "20px",
};

const ShoppingCart = () => {
  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);

  const itemsElements = shoppingCartItems.map((item, index) => {
    return <ShoppingItem key={index} item={item} />;
  });

  const totalPrice = shoppingCartItems.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  return (
    <>
      <div>{itemsElements}</div>
      <div style={summaryStyle}>
        Number of items: {shoppingCartItems.length}
      </div>
      <div style={summaryStyle}>Total price: {totalPrice}</div>
    </>
  );
};

export default ShoppingCart;
