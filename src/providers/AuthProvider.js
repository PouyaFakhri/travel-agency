"use client";

import { useRouter } from "next/navigation";

import { UseGetUserProfile } from "src/services/queries";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = UseGetUserProfile();

  useEffect(() => {
    if (!data?.data && !isPending) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <p className=" m-auto bg-blue-100 text-blue-500 w-fit animate-ping">
        Loading...
      </p>
    );

  return children;
}

export default AuthProvider;
