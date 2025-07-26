import axios from "axios";
import { getCookie, setCookie, removeCookie } from "src/utils/cookies";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;
    if (
      !error.response &&
      (error.message.includes("Network Error") ||
        error.message.includes("ERR_NETWORK"))
    ) {
      return Promise.reject(new Error("خطا در ارتباط با سرور"));
    }
    if (error.response?.status === 500) {
      return Promise.reject(new Error("خطا در ارتباط با سرور"));
    }
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await getNewToken();
      if (res?.response?.status === 201) {
        setCookie("accessToken", res?.response?.data.accessToken, 30);
        setCookie("refreshToken", res?.response?.data.refreshToken, 360);
        return api(originalRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error);
  }
);

export default api;

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (refreshToken) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      { refreshToken }
    );
    return res;
  } else {
    return;
  }
};
