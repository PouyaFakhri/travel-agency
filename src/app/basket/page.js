"use client";

import Link from "next/link";
import { UseGetBasket } from "src/services/queries";
import { UseCheckOut } from "src/services/mutations";
import ProfileForm from "src/components/modules/ProfileForm";
import AuthProvider from "src/providers/AuthProvider";

function Page() {
  const { mutate } = UseCheckOut();
  const { data, isLoading } = UseGetBasket();
  return (
    <AuthProvider>
      <div className="w-[100%] flex items-start justify-center mt-[35%] xs:mt-[25%] sm:mt-[20%] md:mt-[13%] lg:mt-[10%] mb-8 md:mb-5 lg:mb-10 min-h-[60vh]">
        {isLoading && (
          <div className="w-full flex flex-col items-center justify-center gap-6 min-h-[60vh] animate-pulse">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200" />
            <div className="h-6 w-48 md:w-64 bg-gray-200 rounded-md" />
            <div className="h-4 w-64 md:w-80 bg-gray-200 rounded-md" />
            <div className="h-4 w-56 md:w-72 bg-gray-200 rounded-md" />
            <div className="w-full max-w-md p-4 space-y-4 bg-gray-100 rounded-2xl shadow">
              <div className="h-10 w-full bg-gray-200 rounded-md" />
              <div className="h-10 w-full bg-gray-200 rounded-md" />
              <div className="h-10 w-full bg-gray-200 rounded-md" />
              <div className="h-10 w-full bg-gray-200 rounded-md" />
              <div className="h-12 w-1/2 bg-gray-200 rounded-full mx-auto" />
            </div>
          </div>
        )}
        {!isLoading && (!data || Object.keys(data).length === 0) && (
          <div className="w-[100%] flex items-center justify-center max-w-[350px] md:max-w-[500px] lg:max-w-[600px]">
            <div className="w-[90%] flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-5 md:p-8 shadow-xl animate-fadeIn font-YekanBakh">
              <div className="bg-green-100 text-green-600 rounded-full p-6 mb-4 shadow-md">
                <span className="text-4xl md:text-5xl">🛒</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-2">
                سبد خرید شما خالی است
              </h3>
              <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-md mb-6">
                هنوز هیچ توری انتخاب نکرده اید
              </p>
              <Link
                href="/"
                className=" px-6 py-3 text-white text-lg md:text-2xl font-bold rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                لیست تور ها
              </Link>
            </div>
          </div>
        )}
        {!isLoading && data && Object.keys(data).length > 0 && (
          <ProfileForm mutate={mutate} data={data} />
        )}
      </div>
    </AuthProvider>
  );
}

export default Page;
