import { useQuery } from "@tanstack/react-query";
import api from "src/config/api";

export const UseGetBasket = () => {
  const GetBasket = () => {
    return api.get(`/basket`);
  };
  return useQuery({
    queryFn : GetBasket , 
    queryKey : ["UseGetBasket"]
  })
};
