"use client";

import { PhoneContextProvider } from "src/context/PhoneContext";
import { AuthContextProvider } from "src/context/AuthContext";

function ContextProvider({ children }) {
  return (
    <AuthContextProvider>
      <PhoneContextProvider>{children}</PhoneContextProvider>
    </AuthContextProvider>
  );
}

export default ContextProvider;
