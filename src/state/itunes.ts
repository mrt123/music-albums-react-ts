import { AppDispatch, RootState } from "..";
import { ItunesAlbumDataEntry } from "../pages/ItunesAlbumList/itunesDataTransformer";
import albumsSlice from "./itunesAlbumsDataSlice";

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

export const fetchAlbumsDataWhenNeeded = async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state = getState();
  const dataExists = state.albumsData.dataEntries.length;

  if (!dataExists) {
    dispatch(albumsSlice.actions.requestData());

    const fetchResponse = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );

    await addDelay();

    const fetchedData =
      (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

    dispatch(albumsSlice.actions.addData(fetchedData.feed.entry));
  }
};
