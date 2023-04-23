import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItunesAlbumDataEntry } from "../pages/ItunesAlbumList/itunesDataTransformer";

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

export default itunesAlbumsDataSlice;

export const { requestFetchingOfALbums, setFetchAlbumsSuccess } =
  itunesAlbumsDataSlice.actions;
