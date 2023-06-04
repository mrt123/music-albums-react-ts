import { useEffect, useState } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import {
  getAlbumsFromItunesAlbumData,
  ItunesAlbumDataEntry,
} from "./itunesDataTransformer";
import albumsSlice from "../../state/itunesAlbumsDataSlice";
import { useAppDispatch } from "../..";

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
  const [albumDataEntries, setAlbumDataEntries] = useState<
    ItunesAlbumDataEntry[] | null
  >(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      dispatch(albumsSlice.actions.requestData());

      const fetchResponse = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );

      await addDelay();

      const fetchedData =
        (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

      dispatch(albumsSlice.actions.addData(fetchedData.feed.entry));
      setAlbumDataEntries(fetchedData.feed.entry);
    };

    fetchAndSetAlbums();
  }, [dispatch]);

  const albumData = albumDataEntries
    ? getAlbumsFromItunesAlbumData(albumDataEntries)
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
      <CircleLoader show={albumDataEntries === null} />
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;
