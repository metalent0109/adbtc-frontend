import axios from "./api/axios";
import { ICreateAds } from "interfaces/ads";

// create an Ad
const createAdvert = async (adData: ICreateAds) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
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

// update an Ad
const updateAdvert = async (adData: ICreateAds, id: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .put(`ads/updateAds/${id}`, adData, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((updatedAd) => {
      return updatedAd.data.message;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
};


// Get all ads
const getAllAds = async () => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  const response = await axios.get("ads/getAllAds", {
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
  const response = await axios.get("ads/getMyAds", {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  return response.data.ads;
};

// Get ad by id
const getAdById = async(id: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .get(`ads/getAdById/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((adById) => {
      return adById.data.ads;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
}

// Get surf ad by id
const getSurfAdById = async(id: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .get(`ads/getSurfAdById/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((adById) => {
      return adById.data.ads;
    })
    .catch((error) => {
      console.log(error.response.data.error);
      return error.response.data.error;
    });
}

// Surf ads
const surfAds = async (id: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .get(`ads/surfAds/${id}`, {
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

// Fund satoshi
const fundSatoshi = async (id: string) => {
  const token = JSON.parse(localStorage.getItem("jwtToken") || "{}");
  return await axios
    .get(`ads/fundSatoshi/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((satoshi) => {
      return satoshi.data.message;
    })
    .catch((error) => {
      return error.response.data.error;
    });
};

const adsService = {
  createAdvert,
  updateAdvert,
  getAllAds,
  getMyAds,
  getAdById,
  getSurfAdById,
  surfAds,
  fundSatoshi
};

export default adsService;
