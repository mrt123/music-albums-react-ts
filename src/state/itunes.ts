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

const getSecondsSinceLastRequest = (
  lastReceivedDateString: string | null
): number | null => {
  if (lastReceivedDateString === null) return null;
  const dateOfLastRequest = new Date(lastReceivedDateString);
  const now = new Date();
  const milisecondsSinceLastRequest =
    now.getTime() - dateOfLastRequest.getTime();
  const secondsSinceLastRequest = milisecondsSinceLastRequest / 1000;
  return secondsSinceLastRequest;
};

export const fetchAlbumsDataWhenNeeded = async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state = getState();
  const dataExists = state.albumsData.dataEntries.length;
  const secondsSinceLastRequest = getSecondsSinceLastRequest(
    state.albumsData.dataLastReceivedISOString
  );

  if (
    !dataExists ||
    (secondsSinceLastRequest !== null && secondsSinceLastRequest > 15)
  ) {
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
