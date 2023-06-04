import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItunesAlbumDataEntry } from "../pages/ItunesAlbumList/itunesDataTransformer";
import { AppDispatch, RootState } from "..";

interface ItunesAlbumsDataState {
  dataEntries: ItunesAlbumDataEntry[];
  isLoading: boolean;
  dataLastReceivedISOString: string | null;
  numberOfRequestsPerformed: number;
}

const albumsSlice = createSlice({
  name: "itunesAlbumsData",
  initialState: {
    dataEntries: [],
    isLoading: false,
    dataLastReceivedISOString: null,
    numberOfRequestsPerformed: 0,
  } as ItunesAlbumsDataState,
  reducers: {
    requestData: (state) => {
      state.isLoading = true;
      state.numberOfRequestsPerformed += 1;
    },
    addData: (state, action: PayloadAction<ItunesAlbumDataEntry[]>) => {
      state.dataEntries = action.payload;
      state.isLoading = false;
      state.dataLastReceivedISOString = new Date().toISOString();
    },
  },
});

export default albumsSlice;

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

export const fetchAlbumsData = async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  dispatch(albumsSlice.actions.requestData());

  const fetchResponse = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );

  await addDelay();

  const fetchedData =
    (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

  dispatch(albumsSlice.actions.addData(fetchedData.feed.entry));
};
