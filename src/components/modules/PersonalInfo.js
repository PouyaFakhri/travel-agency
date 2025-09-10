"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-multi-date-picker";
import { CustomPersianFa } from "src/utils/calenderCustom";
import persian from "react-date-object/calendars/persian";
import DateObject from "react-date-object";
import Edit from "../icons/Edit";
import Calender from "../icons/Calender";
import ArrowDown from "../icons/ArrowDown";
import { profilePersonalSchema } from "src/utils/schema";

function PersonalInfo({
  userDetails,
  isOnEditPersonalDetails,
  setIsOnEditPersonalDetails,
  setUserDetails,
  submitHandler,
}) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(profilePersonalSchema),
    defaultValues: {
      firstName: userDetails.firstName || "",
      lastName: userDetails.lastName || "",
      nationalCode: userDetails.nationalCode || "",
      gender: userDetails.gender || "",
      birthDate: userDetails.birthDate || "",
    },
    mode: "onChange",
  });

  const handleCancel = () => {
    reset({
      firstName: "",
      lastName: "",
      nationalCode: "",
      gender: "",
      birthDate: "",
    });
    setIsOnEditPersonalDetails(false);
  };

  const [isOpenGen, setIsOpenGen] = useState(false);
  const genders = ["مرد", "زن"];

  const persianToEnglishNumbers = (str) =>
    str.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));

  const onSubmit = (data) => {
    const normalizedDate = persianToEnglishNumbers(data.birthDate);
    const gregorianBirthDate = new DateObject({
      date: normalizedDate,
      calendar: persian,
    })
      .convert("gregorian")
      .format("YYYY-MM-DD");

    const genderMap = {
      مرد: "male",
      زن: "female",
    };

    const finalData = {
      ...userDetails,
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      gender: genderMap[data.gender] || data.gender,
      birthDate: gregorianBirthDate,
    };
    setUserDetails(finalData);
    submitHandler(finalData);
  };

  return (
    <div className="flex flex-col gap-4 border border-[#00000033] text-[#000000] rounded-[10px] p-4 md:relative md:pb-10 md:pl-10 ">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-YekanBakh">اطلاعات شخصی</h3>
        <button
          className="flex gap-1 items-center text-[#009ECA] hover:text-[#007A9E] text-[13px] transition"
          onClick={() => setIsOnEditPersonalDetails(true)}
        >
          <Edit className="w-3 h-3" /> ویرایش
        </button>
      </div>
      {isOnEditPersonalDetails ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-0 font-YekanBakh md:flex-row md:flex-wrap md:justify-between md:gap-5 md:pb-10"
        >
          <div className="flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] lg:min-w-[260px] sm:flex-1 ">
            <input
              type="text"
              {...register("firstName")}
              className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                errors.firstName ? "border-red-500" : "border-[#00000080]"
              }`}
              placeholder="نام"
            />
            <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
              {errors.firstName?.message || ""}
            </p>
          </div>
          <div className="flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] lg:min-w-[260px] sm:flex-1 ">
            <input
              type="text"
              {...register("lastName")}
              className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                errors.lastName ? "border-red-500" : "border-[#00000080]"
              }`}
              placeholder="نام خانوادگی"
            />
            <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
              {errors.lastName?.message || ""}
            </p>
          </div>
          <div className="flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] lg:min-w-[260px] sm:flex-1 ">
            <input
              type="text"
              {...register("nationalCode")}
              className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                errors.nationalCode ? "border-red-500" : "border-[#00000080]"
              }`}
              placeholder="کدملی"
            />
            <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
              {errors.nationalCode?.message || ""}
            </p>
          </div>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="relative flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] lg:min-w-[260px] sm:flex-1 ">
                <button
                  type="button"
                  onClick={() => setIsOpenGen((prev) => !prev)}
                  className={`w-full h-[47px] p-3 border rounded-[5px] flex justify-between items-center bg-white text-[14px] text-[#282828] ${
                    errors.gender ? "border-red-500" : "border-[#00000080]"
                  }`}
                >
                  <span
                    className={value ? "text-[#282828]" : "text-[#00000080]"}
                  >
                    {value || "جنسیت"}
                  </span>
                  <ArrowDown
                    className={`stroke-black w-3 h-3 ${
                      isOpenGen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-200`}
                  />
                </button>
                <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
                  {errors.gender?.message || ""}
                </p>
                {isOpenGen && (
                  <ul className="absolute top-[60px] left-0 w-full bg-white border border-[#0000001F] rounded-[5px] shadow-lg z-50">
                    {genders.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          onChange(item);
                          setIsOpenGen(false);
                        }}
                        className="p-2 cursor-pointer hover:bg-gray-100 border-b border-[#0000001F] last:border-0 text-[14px] font-YekanBakh"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          />
          <Controller
            name="birthDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="relative  md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] lg:min-w-[260px] sm:flex-1 w-full">
                <DatePicker
                  value={value}
                  onChange={(date) => onChange(date)}
                  calendar={persian}
                  className="myDatePicker"
                  locale={CustomPersianFa}
                  range={false}
                  editable={false}
                  inputMode="none"
                  maxDate={new DateObject({ calendar: persian })}
                  onlyShowInRange={false}
                  hideYearPicker={false}
                  hideMonthPicker={false}
                  minDate={
                    new DateObject({
                      calendar: persian,
                      year: 1300,
                      month: 1,
                      day: 1,
                    })
                  }
                  placeholder="تاریخ تولد"
                  calendarPosition="bottom"
                  render={(value, openCalendar) => (
                    <div
                      className={`!w-full flex items-center justify-start px-3 h-[47px] border rounded-[5px] cursor-pointer bg-white font-YekanBakh text-[14px] text-[#282828]  ${
                        errors.birthDate
                          ? "border-red-500"
                          : "border-[#00000080]"
                      }`}
                      onClick={openCalendar}
                    >
                      <Calender className="ml-2" />
                      {value || "تاریخ تولد"}
                    </div>
                  )}
                />
                <p className="text-red-500 text-[10px] h-[23px] pt-2 font-IranianSans sm:absolute sm:top-[100%]">
                  {errors.birthDate?.message || ""}
                </p>
              </div>
            )}
          />
          <div className="flex gap-2 mt-4 md:absolute md:bottom-[20px] md:left-[20px] md:max-w-[260px] md:min-w-[200px] md:flex-1">
            <button
              type="submit"
              className="w-full bg-[#28A745] hover:bg-[#218838] text-white py-2 rounded-[5px] transition text-[14px] font-YekanBakh"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-[#6B7280] hover:bg-[#4B5563] text-white py-2 rounded-[5px] transition text-[14px] font-YekanBakh"
            >
              لغو
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
          <div className="flex justify-between md:justify-start md:gap-5 items-center text-[14px]">
            <p className="text-[#7D7D7D]">نام و نام خانوادگی</p>
            {userDetails.firstName || userDetails.lastName ? (
              <p className="text-[#282828]  text-[14px] font-semibold font-YekanBakh">
                {userDetails.firstName} {userDetails.lastName}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>
          <div className="flex justify-between md:justify-start md:gap-5 items-center text-[14px]">
            <p className="text-[#7D7D7D]">کدملی</p>
            {userDetails.nationalCode &&
            userDetails.nationalCode.trim() !== "" ? (
              <p className="text-[#282828] text-[14px] font-VazirFd">
                {userDetails.nationalCode}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>
          <div className="flex justify-between md:justify-start md:gap-5 items-center text-[14px]">
            <p className="text-[#7D7D7D]">جنسیت</p>
            {userDetails.gender ? (
              <p className="text-[#282828]  text-[14px] font-semibold font-YekanBakh">
                {userDetails.gender}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>
          <div className="flex justify-between md:justify-start md:gap-5 items-center text-[14px]">
            <p className="text-[#7D7D7D]">تاریخ تولد</p>
            {userDetails.birthDate ? (
              <p className="text-[#282828] text-[14px] font-VazirFd">
                {userDetails.birthDate}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
