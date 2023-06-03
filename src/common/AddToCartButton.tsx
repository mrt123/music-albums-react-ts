const buttonStyle = {
  background: "rgb(237, 92, 145)",
  cursor: "pointer",
  border: "none",
  borderRadius: "4px",
  padding: "12px",
};

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button data-testid="addToCartButton" style={buttonStyle} onClick={onClick}>
      Add
    </button>
  );
};

export default AddToCartButton;
