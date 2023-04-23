import { useEffect } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import { getAlbumsFromItunesAlbumData } from "./itunesDataTransformer";
import { useAppDispatch, useAppSelector } from "../../state/store";
import { fetchAndSetAlbumsThunk } from "../../state/itunesAlbumsDataSlice";

const ItunesAlbumList = () => {
  const albumsData = useAppSelector((state) => state.itunesAlbumsData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAndSetAlbumsThunk);
  }, [dispatch]);

  const albumData = getAlbumsFromItunesAlbumData(albumsData.data);

  const albumComponents = albumData.map((album) => {
    return (
      <Album
        key={album.number}
        number={album.number}
        coverImageUrl={album.coverImageUrl}
        description={album.description}
      />
    );
  });

  return (
    <>
      <PageTitle title="Top Albums" />
      <CircleLoader show={albumsData.loading} />
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;
