import React from "react";
import Link from "next/link";

async function Page({ searchParams }) {
  const params = await searchParams;
  const isSuccess = params.status === "success";

  return (
    <div className="w-full flex items-start justify-center mt-[35%] xs:mt-[25%] sm:mt-[20%] md:mt-[13%] lg:mt-[10%] mb-8 md:mb-5 lg:mb-10 min-h-[50vh]">
      <div className="w-full flex items-center justify-center px-4">
        <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl px-4 py-6 sm:p-8 shadow-xl animate-fadeIn font-YekanBakh">
          <div
            className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full flex items-center justify-center mb-5 pt-5 shadow-md ${
              isSuccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl leading-none">{isSuccess ? "✈️" : "⚠️"}</div>
          </div>
          <h2
            className={`font-extrabold mb-3 text-lg sm:text-2xl md:text-3xl ${
              isSuccess ? "text-green-700" : "text-red-700"
            }`}
          >
            {isSuccess ? "رزرو شما با موفقیت انجام شد" : "متأسفانه مشکلی پیش آمد"}
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base px-2">
            {isSuccess
              ? "آماده‌ی یک سفر خاطره‌انگیز باشید"
              : "پرداخت شما انجام نشد. در صورت کسر وجه، مبلغ طی ۲۴ ساعت بازگردانده خواهد شد."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
            <Link
              href="/"
              prefetch={true}
              className="w-full sm:w-auto px-6 py-3 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition-transform transform hover:-translate-y-1 shadow-lg text-sm sm:text-base"
            >
              بازگشت به صفحه اصلی
            </Link>
            {isSuccess && (
              <Link
                href="/profile/my-tours"
                prefetch={true}
                className="w-full sm:w-auto px-6 py-3 text-blue-700 font-bold rounded-full border border-blue-600 hover:bg-blue-50 transition-transform transform hover:-translate-y-1 shadow-md text-sm sm:text-base"
              >
                مشاهده رزروهای من
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
