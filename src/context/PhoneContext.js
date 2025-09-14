"use client";

import { createContext, useState } from "react";

export const PhoneContext = createContext();
export const PhoneContextProvider = ({ children }) => {
  const [phone, setPhone] = useState({ mobile: "" });
  return (
    <PhoneContext.Provider value={{phone, setPhone}}>
      {children}
    </PhoneContext.Provider>
  );
};
