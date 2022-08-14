import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateAds } from "modules/types/ads";
import adsService from "./adsService";

interface state {
  ads: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
  isCreated: any;
  myAds: any
}

const initialState: state = {
  ads: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isCreated: false,
  message: "",
  myAds: null
}

// Create an Ad
export const createAd = createAsyncThunk(
  "ads/createAd",
  async (ads: ICreateAds, thunkAPI) => {
    try {
      return await adsService.createAdvert(ads);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all ads
export const getAllAdvert = createAsyncThunk("ads/getAllAdvert", async () => {
  try {
    return await adsService.getAllAds();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
});

// get ads created by me
export const getAdsCreatedByMe = createAsyncThunk(
  "ads/getAdsCreatedByMe",
  async () => {
    try {
      return await adsService.getMyAds();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }
);

// Surf ads
export const surfAdvert = createAsyncThunk(
  "ads/surfAdvert",
  async (id: string, thunkAPI) => {
    try {
      return await adsService.surfAds(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Deposit ads
export const depSatoshi = createAsyncThunk(
  "ads/depSatoshi",
  async (amount: number, thunkAPI) => {
    try {
      return await adsService.depositSatoshi(amount);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    // createAd
    builder.addCase(createAd.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(createAd.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isCreated: true,
        ads: payload
      });
    });
    builder.addCase(createAd.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        ads: null,
        isSuccess: false
      });
    });

    //get all advert
    builder.addCase(getAllAdvert.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(getAllAdvert.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        ads: payload
      });
    });
    builder.addCase(getAllAdvert.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        ads: null,
        isSuccess: false
      });
    });

    // get ads created by me
    builder.addCase(getAdsCreatedByMe.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(getAdsCreatedByMe.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        myAds: payload
      });
    });
    builder.addCase(getAdsCreatedByMe.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        myAds: null,
        isSuccess: false
      });
    });

    //Surf advert
    builder.addCase(surfAdvert.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(surfAdvert.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        ads: payload
      });
    });
    builder.addCase(surfAdvert.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        ads: null,
        isSuccess: false
      });
    });

    // Deposit satoshi
    builder.addCase(depSatoshi.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(depSatoshi.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: payload
      });
    });
    builder.addCase(depSatoshi.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        isSuccess: false
      });
    });
  }
});

export const { reset } = adsSlice.actions 
export default adsSlice.reducer