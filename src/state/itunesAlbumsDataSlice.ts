import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItunesAlbumDataEntry } from "../pages/ItunesAlbumList/itunesDataTransformer";

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
