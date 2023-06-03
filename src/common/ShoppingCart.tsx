import { useAppSelector } from "..";

const ShoppingCart = () => {
  // Na podstawie jakiej czesci stanu reduxa mielibysmy stworzyc liste itemów?

  const shoppingCartItems = useAppSelector((state) => state.shoppingCart.items);

  const itemsElements = shoppingCartItems.map((item, index) => {
    return (
      <div key={index}>
        {item.label} {item.price}
      </div>
    );
  });

  // Jak zrobic zeby JSX byl budowany bardziej dynamicznie?
  return <div>{itemsElements}</div>;
};

export default ShoppingCart;
