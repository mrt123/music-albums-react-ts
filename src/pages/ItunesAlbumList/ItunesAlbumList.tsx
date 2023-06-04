import { useEffect } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import { getAlbumsFromItunesAlbumData } from "./itunesDataTransformer";
import { fetchAlbumsData } from "../../state/itunesAlbumsDataSlice";
import { useAppDispatch, useAppSelector } from "../..";

const ItunesAlbumList = () => {
  const dispatch = useAppDispatch();
  const albumsData = useAppSelector((state) => state.albumsData);

  useEffect(() => {
    dispatch(fetchAlbumsData);
  }, [dispatch]);

  const albumData =
    !albumsData.isLoading && albumsData.dataEntries
      ? getAlbumsFromItunesAlbumData(albumsData.dataEntries)
      : [];

  const albumComponents = albumData?.map((album) => {
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
      <CircleLoader show={albumsData.isLoading} />
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;
