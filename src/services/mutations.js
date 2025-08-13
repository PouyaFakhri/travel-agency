import { useMutation } from "@tanstack/react-query";
import api from "src/config/api";
import { useQueryClient } from "@tanstack/react-query";

export const UseSendOtp = () => {
  const sendOtp = (phone) => {
    return api.post("/auth/send-otp", phone);
  };
  return useMutation({
    mutationFn: sendOtp,
    mutationKey: ["sendOtp"],
  });
};

export const UseCheckOtp = () => {
  const checkOtp = (data) => {
    return api.post("/auth/check-otp", data);
  };
  return useMutation({
    mutationFn: checkOtp,
    mutationKey: ["checkOtp"],
  });
};

export const UseAddToBasket = () => {
  const queryClient = useQueryClient();
  const AddToBasket = (tourId) => {
    return api.post(`/basket/${tourId}`);
  };
  return useMutation({
    mutationFn: AddToBasket,
    mutationKey: ["AddToBasket"],
    onSuccess : queryClient.invalidateQueries(["GetBasket"])
  })
  
};
