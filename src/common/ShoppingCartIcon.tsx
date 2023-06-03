interface Props {
  numberOfItems: number;
}

const numerOfItemsStyle = {
  borderRadius: "50%",
  padding: "4px",
  background: "orange",
  border: "2px solid black",
};

const ShoppingCartIcon = ({ numberOfItems }: Props) => {
  return (
    <div>
      🛒<span style={numerOfItemsStyle}>{numberOfItems}</span>
    </div>
  );
};

export default ShoppingCartIcon;
