import { Link } from "react-router-dom";

interface Props {
  numberOfItems: number;
}

const numerOfItemsStyle = {
  borderRadius: "50%",
  padding: "4px",
  background: "orange",
  border: "2px solid black",
};

const linkStyle = {
  textDecoration: "none",
};

const ShoppingCartIcon = ({ numberOfItems }: Props) => {
  return (
    <Link to="/shopping-cart" style={linkStyle}>
      🛒<span style={numerOfItemsStyle}>{numberOfItems}</span>
    </Link>
  );
};

export default ShoppingCartIcon;
