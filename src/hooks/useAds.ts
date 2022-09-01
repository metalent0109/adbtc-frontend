import { ICreateAds } from "interfaces/ads";
import { useState } from "react"
import adsService from "services/adsService";

const useAds = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isUpdated, setIsUpdated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<any>("");
    const [isCreated, setIsCreated] = useState<any>(null);
    const [myAds, setMyAds] = useState<Array<any>>([]);
    const [ads, setAds] = useState<any>(null);
    const [fundSuccess, setFundSuccess] = useState<boolean>(false);

    // Create an Ad
    const createAd = async (adData: ICreateAds) => {
        try {
            const data = await adsService.createAdvert(adData);
            // console.log("use_data:", data);
            setIsCreated(true);  
            setAds(data);
            // console.log("ads:", ads);
            return ads;
        } catch (error: any) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        setIsError(true);
        setMessage(message);
        setAds(null);
        return message;
        }
    }

     //update advert by id
    const updateAdvert = async (adData: ICreateAds, id: string) => {
        try {
            const data = await adsService.updateAdvert(adData, id);
            setMessage(data);
            setIsSuccess(true);
            setIsUpdated(true);
        } catch (error: any) {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setIsError(true);
            setMessage(message);
            setAds(null);
            return message;
        }
    }

    // Get all ads
    const getAllAdvert = async () => {
        try {
            const data = await adsService.getAllAds();
            setIsCreated(true); 
            setIsSuccess(true);
            setAds(data);
            // console.log("ads:", ads);
            return ads;
        } catch (error: any) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            setIsError(true);
            setMessage(message);
            setAds(null);
            return message;
        }
    }

    // Get ads created by me
    const getAdsCreatedByMe = async () => {
        try {
            const data = await adsService.getMyAds();
            setIsSuccess(true);
            setIsLoading(true);
            setMyAds(data);
            return myAds;
        } catch (error: any) {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setIsError(true);
            setMessage(message);
            setMyAds([]);
            return message;
        }
    } 

    // Surf ads
    const surfAdvert = async (id: string) => {
        try {
            const data = await adsService.surfAds(id);
            setAds(data);
            setIsSuccess(true);
        } catch (error: any) {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setIsError(true);
            setMessage(message);
            setAds(null);
            return message;
        }
    }

    // Fund ads
    const fundSatoshi = async (id: string) => {
        try {
            const data = await adsService.fundSatoshi(id);
            setFundSuccess(true);
            setMessage(data);
        } catch (error: any) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        setIsError(true);
        setMessage(message);
        setFundSuccess(false);
        return message;
        }
    }

    // Get ad by id
    const getAdById = async (id: string) => {
        try {
            const data = await adsService.getAdById(id);
            setAds(data);
            setIsLoading(true);
            return data;
        } catch (error: any) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        setIsError(true);
        setMessage(message);
        setAds(null)
        return message;
        }
    }

    // Get surf ad by id
    const getSurfAdById = async (id: string) => {
        try {
            const data = await adsService.getSurfAdById(id);
            setAds(data);
            setIsLoading(true);
            return data;
        } catch (error: any) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        setIsError(true);
        setMessage(message);
        setAds(null)
        return message;
        }
    }

    //reset
    const reset = () => {
        setIsSuccess(false);
        setIsError(false);
        setMessage("");
    }


    return { 
        ads,
        isError,
        isSuccess,
        isLoading,
        message,
        isCreated,
        isUpdated,
        myAds,
        fundSuccess,
        createAd,
        updateAdvert,
        getAdsCreatedByMe, 
        getAllAdvert, 
        surfAdvert,
        fundSatoshi,
        getAdById,
        getSurfAdById,
        reset 
    };
};



export default useAds;
