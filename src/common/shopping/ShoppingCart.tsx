import { useAppSelector } from "../..";
import ShoppingItem from "./ShoopingItem";

const ShoppingCart = () => {
  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);

  const itemsElements = shoppingCartItems.map((item, index) => {
    return <ShoppingItem key={index} item={item} />;
  });

  return <div>{itemsElements}</div>;
};

export default ShoppingCart;
