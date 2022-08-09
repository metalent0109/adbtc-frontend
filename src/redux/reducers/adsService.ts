import api from "api/api";
import { ICreateAds } from "modules/types/ads";

// create an Ad
const createAdvert = async (adData: ICreateAds) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  await api
    .post("ads/createAds", adData, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((ads) => {
      return ads.data.ad.insertedId;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
};

// Get all ads
const getAllAds = async () => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  const response = await api.get("ads/getAllAds", {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const randomIndex = Math.floor(Math.random() * response.data.allAds.length);
  const item = response.data.allAds[randomIndex];
  return item;
};

// Get ads created by me
const getMyAds = async () => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  const response = await api.get("ads/getMyAds", {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  return response.data.ads;
};

// Surf ads
const surfAds = async (url: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  await api
    .post("ads/surfAds", url, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((surf) => {
      return surf.data.message;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
};

// Deposit satoshi
const depositSatoshi = async (amount: number) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  await api
    .post("ads/depositSatoshi", amount, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((satoshi) => {
      return satoshi.data.message;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
};

const adsService = {
  createAdvert,
  getAllAds,
  getMyAds,
  surfAds,
  depositSatoshi
};

export default adsService;
