import ShoopingItemIcon from "./ShoppingItemIcon";

interface Item {
  label: string;
  price: number;
  imageUrl: string | undefined;
}

interface Props {
  item: Item;
}

const itemLabelStyle = {
  display: "inline-block",
  width: "350px",
  whiteSpace: "nowrap" as "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "green",
  padding: "10px",
  fontSize: "18px",
};

const priceStyle = {
  display: "inline-block",
  padding: "10px",
  color: "yellow",
  fontSize: "18px",
};

const itemWrapperStyle = {
  display: "flex",
  justifyContent: "space-evenly",
};

const ShoppingItem = ({ item }: Props) => {
  return (
    <div style={itemWrapperStyle}>
      <ShoopingItemIcon imageUrl={item.imageUrl} />
      <span style={itemLabelStyle}>{item.label}</span>
      <span style={priceStyle}>{item.price}</span>
    </div>
  );
};

export default ShoppingItem;
