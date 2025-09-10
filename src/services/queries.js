
import { useQuery } from "@tanstack/react-query";
import api from "src/config/api";

export const UseGetBasket = () => {
  const GetBasket = () => {
    return api.get(`/basket`);
  };
  return useQuery({
    queryFn: GetBasket,
    queryKey: ["GetBasket"],
    initialData: {},
  });
};

export const UseGetUserProfile = () => {
  const GetUserProfile = () => {
    return api.get("/user/profile");
  };
  return useQuery({
    queryFn: GetUserProfile,
    queryKey: ["GetUserProfile"],
  });
};

export const UseGetUserTours = () => {
  const GetUserTours = () => {
    return api.get("/user/tours");
  };
  return useQuery({
    queryFn: GetUserTours,
    queryKey: ["GetUserTours"],
  });
};

export const UseGetUserTransactions = () => {
  const GetUserTransactions = () => {
    return api.get("/user/transactions");
  };
  return useQuery({
    queryFn: GetUserTransactions,
    queryKey: ["GetUserTransactions"],
  });
};
