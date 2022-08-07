import { ICreateUser, ILoginUser, IRegGoogleData } from "modules/types/user";
import jwt_decode from "jwt-decode";
import api from "api/api";

// Get a User
const getMe = async () => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || '{}');
  const response = await api.get("user", {
    headers: {
      "authorization": `Bearer ${token}`
    }
  });
  return response.data;
};
// Get all Users
const getAll = async () => {
  const token = localStorage.getItem("jwtToken");
  const response = await api.get("users", {
    headers: {
      "authorization": `Bearer ${token}`
    }
  });
  return response.data;
};

// Register user
const register = async (userData: ICreateUser) => {
  await api
    .post("signup", userData)
    .then((user) => {
      localStorage.setItem("jwtToken", JSON.stringify(user.data.token));
      let decoded: any = jwt_decode(JSON.stringify(user.data.token));
      console.log(decoded);
      localStorage.setItem("jwtTokenId", decoded.id.id);
      return user.data.token;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
  // const response = await axios.post(API_URL + "signup", userData);
  // console.log(response.data);

  // if (response.data) {
  //   localStorage.setItem("jwtToken", JSON.stringify(response.data.token));
  //   let decoded: any = jwt_decode(JSON.stringify(response.data.token));
  //   console.log(decoded);
  //   localStorage.setItem("jwtTokenId", decoded.id.id);
  //   return response.data;
  // } else {
  //   return response.data.error;
  // }
};

// Register with Google Auth Data
const registerWithGoogleAuthData = async (userData: IRegGoogleData) => {
  await api
    .post("regWithGoggleAuth", userData)
    .then((user) => {
      localStorage.setItem("jwtToken", JSON.stringify(user.data.token));
      let decoded: any = jwt_decode(JSON.stringify(user.data.token));
      console.log(decoded);
      localStorage.setItem("jwtTokenId", decoded.id.id);
      return user.data.token;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
};

// Login User
const login = async (userData: ILoginUser) => {
  await api
    .post("login", userData)
    .then((user) => {
      localStorage.setItem("jwtToken", JSON.stringify(user.data.token));
      let decoded: any = jwt_decode(JSON.stringify(user.data.token));
      console.log(decoded);
      localStorage.setItem("jwtTokenId", decoded.id.id);
      return user.data.token;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
};

// Reset password
const reset = async (userData: string) => {
  const response = await api.post("resetpassword", userData);
  console.log(response.data);

  return response.data;
};

// Register with google
const regWithGoogle = async () => {
  const response = await api.post("registerWithGoogle");
  console.log(response.data);
  if (response.data) {
    localStorage.setItem("jwtToken", JSON.stringify(response.data.token));
    localStorage.setItem("jwtTokenId", JSON.stringify(response.data.token.id));
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("jwtTokenId");
};

const authService = {
  getMe,
  getAll,
  register,
  registerWithGoogleAuthData,
  login,
  reset,
  regWithGoogle,
  logout
};

export default authService;
