"use client";

import { useRouter } from "next/navigation";

import { UseGetUserProfile } from "src/services/queries";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = UseGetUserProfile();

  useEffect(() => {
    if (!data && !isPending) router.push("/");
  }, [isPending]);

  return children;
}

export default AuthProvider;
