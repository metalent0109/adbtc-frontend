import { ICreateUser, ILoginUser, IRegGoogleData } from "interfaces/user";
import jwt_decode from "jwt-decode";
import axios from "./api/axios";

// Get a User
const getMe = async () => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || '{}');
  const response = await axios.get("user/user", {
    headers: {
      "authorization": `Bearer ${token}`
    }
  });
  return response.data;
};

// Get all Users
const getAll = async () => {
  const token = localStorage.getItem("jwtToken");
  const response = await axios.get("user/users", {
    headers: {
      "authorization": `Bearer ${token}`
    }
  });
  return response.data;
};

// Register user
const register = async (userData: ICreateUser) => {
  return await axios
    .post("user/signup", userData)
    .then((user) => {
      localStorage.setItem("jwtToken", JSON.stringify(user.data.token));
      let decoded: any = jwt_decode(JSON.stringify(user.data.token));
      localStorage.setItem("jwtTokenId", decoded.id.id);
      return user.data.token;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

// Register with Google Auth Data
const registerWithGoogleAuthData = async (userData: IRegGoogleData) => {
  return await axios
    .post("user/regWithGoggleAuth", userData)
    .then((user) => {
      localStorage.setItem("jwtToken", JSON.stringify(user.data.token));
      let decoded: any = jwt_decode(JSON.stringify(user.data.token));
      localStorage.setItem("jwtTokenId", decoded.id.id);
      return user.data.token;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

// Login User
const login = async (userData: ILoginUser) => {
  return await axios
    .post("user/login", userData)
    .then((user) => {
      localStorage.setItem("jwtToken", JSON.stringify(user.data.token));
      let decoded: any = jwt_decode(JSON.stringify(user.data.token));
      localStorage.setItem("jwtTokenId", decoded.id.id);
      return user.data.token;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

// Reset password
const reset = async (userData: string) => {
  const response = await axios.post("user/resetpassword", userData);

  return response.data;
};

// Register with google
const regWithGoogle = async () => {
  const response = await axios.post("user/registerWithGoogle");
  if (response.data) {
    localStorage.setItem("jwtToken", JSON.stringify(response.data.token));
    localStorage.setItem("jwtTokenId", JSON.stringify(response.data.token.id));
  }
  return response.data;
};

// update surf balance
const updateSurfingBalance = async (surfingAmount: any, id: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .put(`user/updateSurfingBalance/${id}`, {surfingAmount}, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((updatedUser) => {
      return updatedUser.data.message;
    })
}

//deposit fund
const depositFund = async(depositAmount: any) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .put(`user/depositFund`, {depositAmount}, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((updatedUser) => {
      return updatedUser.data.message;
    })
}

//delete advert
const deleteAdvert = async (id: string, url: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  alert(`Are you sure to delete this ads with advertisement ${url}`)
  await axios
  .delete(`ads/deleteAds/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then((deletdAd) => {
    return deletdAd.data
  })
  .catch((error) => {
    return error.response.data.error;
  });
}

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
  updateSurfingBalance,
  depositFund,
  deleteAdvert,
  logout
};

export default authService;
