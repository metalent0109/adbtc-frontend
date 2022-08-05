import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateUser, ILoginUser, IRegGoogleData } from "modules/types/user";
import authService from "./authService";

const user: string | null = localStorage.getItem("jwtToken");
const jwtTokenId: string | null = localStorage.getItem("jwtTokenId");

interface state {
  user: any;
  jwtTokenId: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
  users: [];
}

const initialState: state = {
  user: user ? user : null,
  jwtTokenId: jwtTokenId ? jwtTokenId : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  users: []
};

// Register user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: ICreateUser, thunkAPI) => {
    try {
      return await authService.register(user);
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

// Register with google
export const regGoogleAuthenticationData = createAsyncThunk(
  "auth/regGoogleAuthenticationData",
  async (user: IRegGoogleData, thunkAPI) => {
    try {
      return await authService.registerWithGoogleAuthData(user)
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
)

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user: ILoginUser, thunkAPI) => {
    try {
      return await authService.login(user);
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
// password reset
export const passwordReset = createAsyncThunk(
  "auth/passwordReset",
  async (data: any, thunkAPI) => {
    try {
      return await authService.reset(data);
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
// signinWithGoogle
export const signupWithGoogle = createAsyncThunk(
  "auth/signupWithGoogle",
  async () => {
    try {
      return await authService.regWithGoogle();
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

// Get Me
export const getAUser = createAsyncThunk("auth/getAUser", async () => {
  try {
    return await authService.getMe();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
});
// Get Me
export const getAllUsers = createAsyncThunk("auth/getAllUsers", async () => {
  try {
    return await authService.getAll();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
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
    // Create User
    builder.addCase(registerUser.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload,
      });
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        user: null,
        jwtTokenId: null,
        isSuccess: false
      });
    });

    // Register Google data
    builder.addCase(regGoogleAuthenticationData.pending, (state) => {
      return (state = { ...state, isLoading: true })
    })
    builder.addCase(regGoogleAuthenticationData.fulfilled, (state,{ payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload
      })
    })
    builder.addCase(regGoogleAuthenticationData.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        user: null, 
        jwtTokenId: null,
        isSuccess: false
      })
    })

    // Login User
    builder.addCase(loginUser.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload
      });
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        user: null,
        jwtTokenId: null,
        isSuccess: false
      });
    });

    // Get All Users
    builder.addCase(getAllUsers.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isSuccess: true,
        users: payload
      });
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      return (state = {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
        users: [],
        isSuccess: false
      });
    });

    // // Get a user
    builder.addCase(getAUser.pending, (state) => {
        return (state = { ...state, isLoading: true });
      });
      builder.addCase(getAUser.fulfilled, (state, { payload }) => {
        return (state = {
          ...state,
          isLoading: false,
          isSuccess: true,
          user: payload.token
        });
      });
      builder.addCase(getAUser.rejected, (state, { payload }) => {
        return (state = {
          ...state,
          isLoading: false,
          isError: true,
          message: payload,
          user: null,
          isSuccess: false
        });
      });

      // Create a user via google
      builder.addCase(signupWithGoogle.pending, (state) => {
        return (state = { ...state, isLoading: true });
      });
      builder.addCase(signupWithGoogle.fulfilled, (state, { payload }) => {
        return (state = {
          ...state,
          isLoading: false,
          isSuccess: true,
          user: payload.token,
          jwtTokenId: payload.token.id
        });
      });
      builder.addCase(signupWithGoogle.rejected, (state, { payload }) => {
        return (state = {
          ...state,
          isLoading: false,
          isError: true,
          message: payload,
          user: null,
          jwtTokenId: null,
          isSuccess: false
        });
      });
      // Reset Password
      builder.addCase(passwordReset.pending, (state) => {
        return (state = { ...state, isLoading: true });
      });
      builder.addCase(passwordReset.fulfilled, (state, { payload }) => {
        return (state = {
          ...state,
          isLoading: false,
          isSuccess: true,
          message: payload
        });
      });
      builder.addCase(passwordReset.rejected, (state, { payload }) => {
        return (state = {
          ...state,
          isLoading: false,
          isError: true,
          message: payload
        });
      });

      // logout 
      builder.addCase(logout.fulfilled, (state) => {
        return (state = {
          ...state,
          user: null
        });
      });
  }
});


export const { reset } = authSlice.actions 
export default authSlice.reducer