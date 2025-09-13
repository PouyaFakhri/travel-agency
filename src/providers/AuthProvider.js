"use client";

import { useRouter } from "next/navigation";
import { UseGetUserProfile } from "src/services/queries";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = UseGetUserProfile();

  useEffect(() => {
    if (!isPending && !data) {
      router.push("/");
    }
  }, [data, isPending, router]);

  return children;
}

export default AuthProvider;