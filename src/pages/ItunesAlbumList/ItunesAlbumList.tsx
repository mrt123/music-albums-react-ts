import { useEffect } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import {
  getAlbumsFromItunesAlbumData,
  ItunesAlbumDataEntry,
} from "./itunesDataTransformer";
import { useAppDispatch, useAppSelector } from "../../state/store";
import {
  requestFetchingOfALbums,
  setFetchAlbumsSuccess,
} from "../../state/itunesAlbumsDataSlice";

const addDelay = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};

interface ItunesTopAlbumsResponseData {
  feed: {
    entry: ItunesAlbumDataEntry[];
  };
}

const ItunesAlbumList = () => {
  const albumsData = useAppSelector((state) => state.itunesAlbumsData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      const fetchResponse = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );

      await addDelay();

      const fetchedData =
        (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

      dispatch(setFetchAlbumsSuccess({ data: fetchedData.feed.entry }));
    };

    fetchAndSetAlbums();
    dispatch(requestFetchingOfALbums());
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
