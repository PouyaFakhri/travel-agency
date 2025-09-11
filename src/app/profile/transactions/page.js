"use client";

import { UseGetUserTransactions } from "src/services/queries";
import uuidToOrderNumber from "src/utils/uuidToOrderNumber";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function formatToJalali(dateString) {
  const date = new DateObject({
    date: dateString,
    calendar: persian,
    locale: persian_fa,
  });
  return date.format("HH:mm - YYYY/MM/DD ");
}

function Page() {
  const { data, isLoading, isFetched, isError } = UseGetUserTransactions();

  const isEmpty = !isLoading && isFetched && (!data || data.length === 0);
  const hasData = !isLoading && isFetched && data?.length > 0;

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center text-red-500 font-YekanBakh">
        خطا در دریافت اطلاعات
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-start mt-[10px] sm:mt-0 mb-8 md:mb-5 lg:mb-10 min-h-[60vh] font-YekanBakh md:px-4">
      {isLoading && (
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[900px] h-40 sm:h-48 md:h-56 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      )}

      {isEmpty && (
        <div className="w-full flex items-center justify-center max-w-[350px] sm:max-w-[500px] md:max-w-[600px]">
          <div className="w-full flex items-center justify-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-5 md:p-8 shadow-xl animate-fadeIn">
            <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-md mb-6 pt-5">
              هنوز هیچ توری خریداری نکرده‌اید
            </p>
          </div>
        </div>
      )}

      {hasData && (
        <ul className="w-full border-1 border-[#00000040] rounded-[10px] flex flex-col gap-3">
          <li className="flex p-2 justify-between rounded-t-[10px] bg-[#DBDBDB] font-YekanBakh text-xs md:text-[14px] text-[#282828CC] lg:pl-10 lg:pr-5">
            <h2 className="min-w-[75px] md:min-w-[100px] lg:min-w-[115px] text-center lg:pl-10">
              تاریخ و ساعت
            </h2>
            <h2 className="min-w-[55px] md:min-w-[60px] lg:min-w-[65px] text-center">
              مبلغ(تومان)
            </h2>
            <h2 className="hidden md:block min-w-[135px] text-center">
              نوع تراکنش
            </h2>
            <h2 className="min-w-[60px] md:min-w-[75px] text-center">
              شماره سفارش
            </h2>
          </li>
          {data.map((item, index) => (
            <li
              key={index}
              className="w-full font-VazirFd text-[#282828] font-light p-2 flex justify-between items-center gap-2  lg:pl-10 lg:pr-5"
            >
              <p className="text-[9px] md:text-[12px] lg:text-[14px] min-w-[75px] md:min-w-[100px] lg:min-w-[115px] text-center ">
                {formatToJalali(item.createdAt)}
              </p>
              <p className="text-[13px] md:text-[14px] min-w-[55px] md:min-w-[60px] lg:min-w-[65px] text-center">
                {item.amount.toLocaleString()}
              </p>
              <p className="hidden md:block text-[14px] min-w-[135px] text-center">
                ثبت نام در تور گردشگری
              </p>
              <p className="text-[13px] min-w-[60px] md:min-w-[75px]  text-center">
                {uuidToOrderNumber(item.id)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
