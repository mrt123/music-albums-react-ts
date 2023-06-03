import { useAppDispatch } from "../..";
import shoppingCartSlice from "../../state/shoppingCartSlice";
import AddToCartButton from "../AddToCartButton";
import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
  alignItems: "center",
  margin: "30px 20px 30px 20px",
  fontSize: "12px",
  background: "#353a45",
  padding: "10px",
};

export interface AlbumProps {
  number: number;
  coverImageUrl: string;
  description: AlbumDescriptionProps;
}

const Album = ({ number, coverImageUrl, description }: AlbumProps) => {
  const dispatch = useAppDispatch();

  const onButtonClick = () => {
    dispatch(
      shoppingCartSlice.actions.addItem({ price: 1, label: "Jakis Label" })
    );
  };

  return (
    <div style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
      />
      <AddToCartButton onClick={onButtonClick} />
    </div>
  );
};

export default Album;
