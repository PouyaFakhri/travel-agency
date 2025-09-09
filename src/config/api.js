import axios from "axios";
import { getCookie, setCookie, removeCookie } from "src/utils/cookies";
import { toast } from "react-toastify";

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
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await getNewToken();

        if (res && (res.status === 200 || res.status === 201)) {
          const newAccessToken = res.data.accessToken;
          const newRefreshToken = res.data.refreshToken;
          setCookie("accessToken", newAccessToken, 30); // 30 دقیقه
          setCookie("refreshToken", newRefreshToken, 10080); // 7 روز (10080 دقیقه)
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        toast.error("لطفاً وارد  حساب کاربری خود شوید");
        setTimeout(() => {
          window.location.href = "/";
        }, 400);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (refreshToken) {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
      { refreshToken }
    );
  } else {
    throw new Error("Refresh token not found");
  }
};
