import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItunesAlbumDataEntry } from "../pages/ItunesAlbumList/itunesDataTransformer";
import { AppDispatch, RootState } from "./store";
import { addDelay } from "../dataMocking/fakeFetch";

interface AlbumDataState {
  data: ItunesAlbumDataEntry[];
  loading: boolean;
}

const initialState: AlbumDataState = {
  data: [],
  loading: false,
};

const itunesAlbumsDataSlice = createSlice({
  name: "albumsData",
  initialState: initialState,
  reducers: {
    requestFetchingOfALbums: (state: AlbumDataState) => {
      state.loading = true;
    },
    setFetchAlbumsSuccess: (
      state: AlbumDataState,
      action: PayloadAction<{ data: ItunesAlbumDataEntry[] }>
    ) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    setFetchAlbumsFailed: () => {
      // TODO: poinformowac state o nieudaniu sie fetcha
    },
  },
});

interface ItunesTopAlbumsResponseData {
  feed: {
    entry: ItunesAlbumDataEntry[];
  };
}

export const fetchAndSetAlbumsThunk = async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state = getState();

  if (!state.itunesAlbumsData.data.length) {
    dispatch(requestFetchingOfALbums());
    const fetchResponse = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );

    await addDelay();

    const fetchedData =
      (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

    dispatch(setFetchAlbumsSuccess({ data: fetchedData.feed.entry }));
  }
};

export default itunesAlbumsDataSlice;

export const { requestFetchingOfALbums, setFetchAlbumsSuccess } =
  itunesAlbumsDataSlice.actions;
