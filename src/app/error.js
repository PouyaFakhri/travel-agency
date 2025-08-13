"use client";
import { useEffect } from "react";
import ServerError from "src/components/templates/ServerError";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isServerError =
    error.message.includes("اتصال با سرور برقرار نشد") ||
    error.message.includes("Network Error") ||
    error.message.includes("ERR_NETWORK");

  return (
    <div>
      {isServerError ? (
        <ServerError />
      ) : (
        <div className="w-full flex flex-col gap-5 items-center justify-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-5 xs:p-6 sm:p-7 md:p-9 lg:p-10 shadow-xl animate-fadeIn font-YekanBakh mt-[38%] xs:mt-[40%] sm:mt-[43%] mb-4 md:mb-5 lg:mb-7">
          <div className="text-4xl xs:text-5xl">😕</div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-700">
            🛑 خطایی رخ داده!
          </h3>
          <button
            onClick={() => reset()}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            تلاش دوباره
          </button>
        </div>
      )}
    </div>
  );
}
