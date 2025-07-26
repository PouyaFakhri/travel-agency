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
        <div className="flex items-center justify-center bg-gray-100 p-1">
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-green-200 animate-fade-in">
            <h2 className="text-2xl font-VazirFd text-red-500 mb-4">
              🛑 خطایی رخ داده!
            </h2>
            <p className="text-gray-700 mb-6">
              {error.message}
            </p>
            <button
              onClick={() => reset()}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
            >
              تلاش دوباره
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
