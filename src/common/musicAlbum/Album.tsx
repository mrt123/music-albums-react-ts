import { useAppDispatch, useAppSelector } from "../..";
import { increment } from "../../state/counterSlice";
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
    dispatch(increment()); // same as dispatch({ type: 'increment'}) with supporting reducer
  };

  const value = useAppSelector((state) => state.counter.value);

  return (
    <div style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
      />
      <button onClick={onButtonClick}>{value}</button>
    </div>
  );
};

export default Album;
