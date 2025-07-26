"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function QueryProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          // برای خطای شبکه یا 500 تلاش دوباره نکن
          if (
            error.message.includes("Network Error") ||
            error.message.includes("ERR_NETWORK") ||
            error.message.includes("خطا در ارتباط با سرور")
          ) {
            return false;
          }
          return failureCount < 2; // برای بقیه خطاها تا 2 بار تلاش کن
        },
        retryDelay: 1000,
        cacheTime: 0, // غیرفعال کردن کش برای درخواست‌های ناموفق
        onError: (error) => {
          if (
            error.message.includes("Network Error") ||
            error.message.includes("ERR_NETWORK") ||
            error.message.includes("خطا در ارتباط با سرور")
          ) {
            throw new Error("خطا در ارتباط با سرور");
          }
          console.error("Query error:", error.message);
        },
      },
      mutations: {
        onError: (error) => {
          if (
            error.message.includes("Network Error") ||
            error.message.includes("ERR_NETWORK") ||
            error.message.includes("خطا در ارتباط با سرور")
          ) {
            throw new Error("خطا در ارتباط با سرور");
          }
          console.error("Mutation error:", error.message);
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
