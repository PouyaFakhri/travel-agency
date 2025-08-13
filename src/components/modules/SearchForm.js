"use client";

import { Controller, useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import DateObject from "react-date-object";
import Destination from "../icons/Destination";
import Location from "../icons/Location";
import Calender from "../icons/Calender";
import { CustomPersianFa } from "src/utils/calenderCustom";
import { useSearchParams } from "next/navigation";

const originCities = [
  ["تهران", "1"],
  ["سنندج", "2"],
  ["اصفهان", "4"],
].map(([label, value]) => ({ label, value }));

const destinationCities = [
  ["سلیمانیه", "5"],
  ["مادرید", "3"],
  ["هولیر", "6"],
  ["مازندران", "7"],
  ["سنندج", "2"],
  ["آفرود سنتر", "8"],
  ["ایتالیا", "9"],
].map(([label, value]) => ({ label, value }));

const convertDateObjectToISO = (dateObject) => {
  if (
    !dateObject ||
    !dateObject.year ||
    !dateObject.month?.number ||
    !dateObject.day
  ) {
    return "";
  }
  const persianDate = new DateObject({
    calendar: persian,
    year: dateObject.year,
    month: dateObject.month.number,
    day: dateObject.day,
  });
  const gregorianDate = persianDate.convert();
  const date = new Date(
    gregorianDate.year,
    gregorianDate.month.number - 1,
    gregorianDate.day,
    0,
    0,
    0
  );
  return date.toISOString().split("T")[0] + "T00:00:00.000Z";
};

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      originId: searchParams.get("originId") || "",
      destinationId: searchParams.get("destinationId") || "",
      date: {
        from: searchParams.get("startDate")
          ? new DateObject(searchParams.get("startDate"))
          : null,
        to: searchParams.get("endDate")
          ? new DateObject(searchParams.get("endDate"))
          : null,
      },
    },
  });

  const [isOpenOrigin, setIsOpenOrigin] = useState(false);
  const [isOpenDest, setIsOpenDest] = useState(false);
  const originRef = useRef(null);
  const destRef = useRef(null);
  const today = new DateObject({ calendar: persian, locale: CustomPersianFa });

  useEffect(() => {
    const originId = searchParams.get("originId") || "";
    const destinationId = searchParams.get("destinationId") || "";
    const date = {
      from: searchParams.get("startDate")
        ? new DateObject(searchParams.get("startDate"))
        : null,
      to: searchParams.get("endDate")
        ? new DateObject(searchParams.get("endDate"))
        : null,
    };
    reset({
      originId,
      destinationId,
      date,
    });
    const handleClickOutside = (event) => {
      if (originRef.current && !originRef.current.contains(event.target)) {
        setIsOpenOrigin(false);
      }
      if (destRef.current && !destRef.current.contains(event.target)) {
        setIsOpenDest(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSubmit = (data) => {
    const flatData = {
      destinationId: data.destinationId,
      originId: data.originId,
      startDate: data.date?.from ? convertDateObjectToISO(data.date.from) : "",
      endDate: data.date?.to ? convertDateObjectToISO(data.date.to) : "",
    };
    const queryString = new URLSearchParams(
      Object.entries(flatData).reduce((acc, [key, val]) => {
        if (val) acc[key] = val;
        return acc;
      }, {})
    ).toString();
    router.push(`/?${queryString}`);
    reset({
      originId: "",
      destinationId: "",
      date: { from: null, to: null },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[85%] mx-auto flex flex-col items-center sm:justify-between gap-2 sm:flex-row md:w-[75%] lg:w-[60%] sm:border-1 sm:p-1 sm:rounded-[20px] sm:h-[61px] md:h-[71px] sm:border-[#00000026] sm:mb-8"
      noValidate
    >
      <div className="flex w-full gap-2 sm:w-[40%] lg:w-[45%] sm:h-full">
        <Controller
          name="originId"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative w-full sm:w-1/2 sm:h-full" ref={originRef}>
              <div className="flex flex-col sm:h-full">
                <button
                  type="button"
                  onClick={() => setIsOpenOrigin(!isOpenOrigin)}
                  className={`w-full h-[47px] p-3 sm:!h-full border rounded-lg sm:border-0 sm:rounded-0 flex justify-between items-center bg-white transition-colors duration-200 ${
                    errors.originId ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <span className="flex items-center gap-2 font-IranianSans text-[#00000080] cursor-pointer">
                    <Location className="w-[18px] h-[18px]" />
                    {originCities.find((item) => item.value === value)?.label ||
                      "مبدا"}
                  </span>
                </button>
                <p className="text-red-500 text-[10px] h-[23px] font-IranianSans pt-2 sm:absolute sm:top-[100%] md:text-[11px] lg:text-[12px] ">
                  {errors.originId?.message || ""}
                </p>
              </div>
              {isOpenOrigin && (
                <ul className="absolute  sm:top-[155%] w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-opacity duration-200 -mt-5">
                  <li className="font-VazirFd font-light text-[13px] text-[#282828B2] bg-[#F8F8F8] p-1">
                    پرتردد
                  </li>
                  {originCities.map((item) => (
                    <li
                      key={item.value}
                      onClick={() => {
                        onChange(item.value);
                        setIsOpenOrigin(false);
                      }}
                      className="p-2 cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-2 border-b-1 border-[#0000001F]"
                    >
                      <Location className="w-5 h-5" />
                      <span className="font-YekanBakh font-normal text-sm text-[#282828]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        />

        <Controller
          name="destinationId"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative w-full sm:w-1/2 sm:h-full " ref={destRef}>
              <div className="flex flex-col sm:h-full">
                <button
                  type="button"
                  onClick={() => setIsOpenDest(!isOpenDest)}
                  className={`w-full h-[47px] p-3 border rounded-lg sm:border-0 sm:!h-full sm:border-r-1 sm:border-l-1 sm:rounded-none flex justify-between items-center bg-white font-IranianSans transition-colors duration-200 ${
                    errors.destinationId
                      ? "border-red-500 sm:border-[#00000033]"
                      : "border-gray-300"
                  }`}
                >
                  <span className="flex items-center gap-2 font-IranianSans text-[#00000080] cursor-pointer ">
                    <Destination className="w-[18px] h-[18px]" />
                    {destinationCities.find((item) => item.value === value)
                      ?.label || "مقصد"}
                  </span>
                </button>
                <p className="text-red-500 text-[10px] h-[23px] pt-2 font-IranianSans sm:absolute sm:top-[100%]">
                  {errors.destinationId?.message || ""}
                </p>
              </div>
              {isOpenDest && (
                <ul className="absolute sm:top-[155%] w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-opacity duration-200 -mt-5">
                  <li className="font-VazirFd font-light text-[13px] text-[#282828B2] bg-[#F8F8F8] p-1">
                    پرتردد
                  </li>
                  {destinationCities.map((item) => (
                    <li
                      key={item.value}
                      onClick={() => {
                        onChange(item.value);
                        setIsOpenDest(false);
                      }}
                      className="p-2 cursor-pointer hover:bg-gray-100 flex items-center justify-start gap-2 border-b-1 border-[#0000001F]"
                    >
                      <Destination className="w-5 h-5" />
                      <span className="font-YekanBakh font-normal text-sm text-[#282828]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        />
      </div>

      <Controller
        name="date"
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="relative w-full sm:w-[45%] lg:w-[30%] sm:h-full flex mb-6 sm:mb-0 ">
            <div className=" w-full min-h-[51.4] !h-full flex sm:items-center sm:justify-start !sm:h-full sm:flex-row overflow-x-hidden">
              <DatePicker
                value={
                  value?.from && value?.to
                    ? [new DateObject(value.from), new DateObject(value.to)]
                    : value?.from
                    ? [new DateObject(value.from)]
                    : []
                }
                onChange={(dates) => {
                  if (Array.isArray(dates)) {
                    onChange({
                      from: dates[0] || null,
                      to: dates[1] || null,
                    });
                  } else {
                    onChange({ from: dates || null, to: null });
                  }
                }}
                calendar={persian}
                locale={CustomPersianFa}
                range
                editable={false}
                inputMode="none"
                minDate={today}
                placeholder="تاریخ"
                mapDays={({ date }) => {
                  const isBeforeToday =
                    date.toDate().getTime() < today.toDate().getTime();
                  if (isBeforeToday) {
                    return {
                      disabled: true,
                      style: {
                        backgroundColor: "#f3f4f6",
                        color: "#9ca3af",
                        textDecoration: "line-through",
                        cursor: "not-allowed",
                      },
                    };
                  }
                }}
                calendarPosition="bottom"
                render={(value, openCalendar) => (
                  <div
                    className={`!w-full flex items-center justify-center h-[47px] !sm:h-full sm:border-none pr-3 border rounded-lg 
                      !font-IranianSans !text-[#00000080] text-normal bg-white cursor-pointer transition-colors duration-200 ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      }`}
                    onClick={openCalendar}
                  >
                    <span className="flex h-full !w-full items-center justify-start gap-2 !font-IranianSans text-[#00000080]">
                      <Calender />
                      {value || "تاریخ"}
                    </span>
                  </div>
                )}
              />
              <p className="text-red-500 text-[10px] h-[23px] pt-2 font-IranianSans absolute top-[100%]">
                {errors.date?.message}
              </p>
            </div>
          </div>
        )}
      />

      <button
        type="submit"
        className="bg-[#28A745] !font-YekanBakh cursor-pointer text-white sm:h-[82%] text-[20px] font-normal p-2 rounded-[16px] w-full sm:w-1/5 lg:w-1/4 sm:max-w-[190px] mb-4 sm:mb-0 hover:bg-green-700 transition-colors duration-200 sm:text-[21px] md:text-[22px] lg:text-[24px] "
      >
        جستجو
      </button>
    </form>
  );
}
