import axios from "axios";
import { ICreateUser, ILoginUser } from "modules/types/user";
import jwt_decode from "jwt-decode";

const API_URL = "/api/user/";

// Get a User
const getMe = async () => {
  const id = localStorage.getItem("jwtTokenId");
  const response = await axios.get(API_URL + `user/${id}`);
  return response.data;
};
// Get all Users
const getAll = async () => {
  const id = localStorage.getItem("jwtTokenId");
  const response = await axios.get(API_URL + `users/${id}`);
  return response.data;
};

// Register user
const register = async (userData: ICreateUser) => {
  await axios
    .post(API_URL + "signup", userData)
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

// Login User
const login = async (userData: ILoginUser) => {
  await axios
    .post(API_URL + "login", userData)
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
  const response = await axios.post(API_URL + "resetpassword", userData);
  console.log(response.data);

  return response.data;
};

// Register with google
const regWithGoogle = async () => {
  const response = await axios.post(API_URL + "registerWithGoogle");
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
  login,
  reset,
  regWithGoogle,
  logout
};

export default authService;