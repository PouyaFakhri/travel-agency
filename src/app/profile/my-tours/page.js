"use client";

import TourCard from "src/components/modules/TourCard";
import { UseGetUserTours } from "src/services/queries";

function Page() {
  const { data, isLoading, isFetched, isError } = UseGetUserTours();
  console.log(data);
  const isEmpty = !isLoading && isFetched && (!data || data.length === 0);
  const hasData = !isLoading && isFetched && data?.length > 0;

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center text-red-500">
        خطا در دریافت اطلاعات
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-start mt-[10px] sm:mt-0 mb-8 md:mb-5 lg:mb-10 min-h-[60vh] px-4">
      {isLoading && (
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex flex-col justify-center gap-4 w-full">
            <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[900px] h-40 sm:h-48 md:h-56 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[900px] h-40 sm:h-48 md:h-56 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      )}

      {isEmpty && (
        <div className="w-full flex items-center justify-center max-w-[350px] sm:max-w-[500px] md:max-w-[600px]">
          <div className="w-full flex items-center justify-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-5 md:p-8 shadow-xl animate-fadeIn font-YekanBakh">
            <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-md mb-6 pt-5">
              هنوز هیچ توری خریداری نکرده‌اید
            </p>
          </div>
        </div>
      )}

      {hasData && <TourCard data={data} />}
    </div>
  );
}

export default Page;
