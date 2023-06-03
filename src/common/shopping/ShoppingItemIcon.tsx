interface Props {
  imageUrl: string | undefined;
}

const getStyle = (imageUrl: string | undefined) => {
  return {
    width: "30px",
    minWidth: "30px",
    height: "30px",
    background: "blue",
    backgroundImage: imageUrl === undefined ? "none" : `url("${imageUrl}")`,
    backgroundSize: "contain",
    borderRadius: "20%",
    margin: "10px",
  };
};

const ShoopingItemIcon = ({ imageUrl }: Props) => {
  return <div style={getStyle(imageUrl)}></div>;
};

export default ShoopingItemIcon;
