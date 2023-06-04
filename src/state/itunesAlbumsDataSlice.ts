import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItunesAlbumDataEntry } from "../pages/ItunesAlbumList/itunesDataTransformer";

interface ItunesAlbumsDataState {
  dataEntries: ItunesAlbumDataEntry[];
  isLoading: boolean;
  dataLastReceivedISOString: string;
}

const albumsSlice = createSlice({
  name: "itunesAlbumsData",
  initialState: {
    isLoading: false,
  } as ItunesAlbumsDataState,
  reducers: {
    requestData: (state) => {
      state.isLoading = true;
    },
    addData: (state, action: PayloadAction<ItunesAlbumDataEntry[]>) => {
      state.dataEntries = action.payload;
      state.isLoading = false;
      state.dataLastReceivedISOString = new Date().toISOString();
    },
  },
});

export default albumsSlice;
