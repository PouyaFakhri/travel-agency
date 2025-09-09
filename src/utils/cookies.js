import Cookies from "js-cookie";

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const setCookie = (name, value, minutes) => {
  const now = new Date();
  now.setTime(now.getTime() + minutes * 60 * 1000);
  Cookies.set(name, value, { expires: now });
};

export const removeCookie = (name) => {
  Cookies.remove(name);
};
