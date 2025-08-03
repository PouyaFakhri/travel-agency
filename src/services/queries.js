import { useQuery } from "@tanstack/react-query";
import api from "src/config/api";

// export const UseGetTours = () => {
//   const queryFn = (query) => {
//     return api.get(`/tour?`);
//   };
//   return useQuery({
//     queryFn : queryFn , 
//     queryKey : ["UseGetTours"]
//   })
// };

// export const UseGetTourDetails = () => {
//   const queryFn = (id) => {
//     return api.get(`/tour`)
//   }
// }