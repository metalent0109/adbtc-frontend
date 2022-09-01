import { useState } from "react"
import { ICreateUser, ILoginUser, IRegGoogleData } from "interfaces/user";
import authService from "services/authService";

const init_user: string | null = localStorage.getItem("jwtToken");
const init_jwtTokenId: string | null = localStorage.getItem("jwtTokenId");

const useAuth = () => {
  const set_init_user = init_user ? init_user : null;
  const set_init_jwtTokenId = init_jwtTokenId ? init_jwtTokenId : null;
  const [user, setUser] = useState<any>(set_init_user);
  const [jwtTokenId, setJwtTokenId] = useState<any>(set_init_jwtTokenId);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [surfSuccess, setSurfSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<any>("");
  const [users, setUsers] = useState<Array<any>>([]);
  const [userData, setUserData] = useState<any>(null);

  // Register user
  const registerUser = async (user: ICreateUser) => {
    try {
      const data = await authService.register(user);
      setIsSuccess(true);
      setUser(data);
      return user;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setIsError(true);
      setMessage(message);
      setUser(null);
      setJwtTokenId(null);
      setIsSuccess(false);
      return message;
    }
  }

  // Register with google
  const regGoogleAuthenticationData = async (user: IRegGoogleData) => {
    try {
      const data = await authService.registerWithGoogleAuthData(user);
      setIsSuccess(true);
      setUser(data);
      return user;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setIsError(true);
      setMessage(message);
      setUser(null);
      setJwtTokenId(null);
      setIsSuccess(false);
      return message;
    }
  }

  // Login User
  const loginUser = async (user: ILoginUser) => {
    try {
      const data = await authService.login(user);
      setIsSuccess(true);
      setUser(data);
      return user;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setIsError(true);
      setMessage(message);
      setUser(null);
      setJwtTokenId(null);
      setIsSuccess(false);
      return message;
    }
  }

  // Get all users
  const getAllUsers = async () => {
    try {
      const data = await authService.getAll();
      setIsSuccess(true);
      setUsers(data);
      return users;

    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setIsError(true);
      setMessage(message);
      setUsers([]);
      return message;
    }
  }

  // Get Me
  const getAUser = async () => {
    try {
      const data = await authService.getMe();
      setIsSuccess(true);
      setUserData(data);
      return userData;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setIsError(true);
      setMessage(message);
      setUserData(null);
      return message;
    }
  }

  // signupWithGoogle
  const signupWithGoogle = async () => {
    try {
      const data = await authService.regWithGoogle();
      setIsSuccess(true);
      setUser(data.token);
      setJwtTokenId(data.token.id);
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
        setUser(null);
        setJwtTokenId(null);
      return message;
    }
  }

  // save surfing balance

  const updateSurfingBalance = async (surfingAmount: any, id: string) => {
    console.log("id", id);
    try {
      const data = await authService.updateSurfingBalance(surfingAmount, id);
      setMessage(data);
      setSurfSuccess(true);
    } catch(error: any) {
      if(error.response.status == 401) {
        const message = 'Your escrow amount is insufficient. Please escrow your bill first.';
        setMessage(message);
      } else {
        setMessage('Error!');
      }
      setIsError(true);
      setSurfSuccess(false);
      setUserData(null);
    }
  }

  // password reset
  const passwordReset = async (data: any) => {
    try {
      data = await authService.reset(data);
      setIsSuccess(true);
      setMessage(data);
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
      return message;
    }
  }

  //logout
  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsSuccess(false);
  }

  const reset = () => {
    setIsSuccess(false);
    setIsError(false);
    setMessage("");
  };
  
  return {
    user,
    isError,
    isSuccess,
    message,
    isLoading,
    userData,
    surfSuccess,
    registerUser,
    regGoogleAuthenticationData,
    loginUser,
    passwordReset,
    getAUser,
    updateSurfingBalance,
    logout,
    reset
  }
}

export default useAuth;
