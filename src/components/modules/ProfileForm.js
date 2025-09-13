"use client";

import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { CustomPersianFa } from "src/utils/calenderCustom";
import Calender from "../icons/Calender";
import Person from "src/components/icons/Person";
import ArrowDown from "../icons/ArrowDown";
import { BasketSchema } from "src/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import persian from "react-date-object/calendars/persian";
import DateObject from "react-date-object";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { UseGetUserProfile } from "src/services/queries";
import { toast } from "react-toastify";

function ProfileForm({ mutate, data }) {
  const persianToEnglishNumbers = (str) =>
    str.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
  const router = useRouter();
  const genders = ["مرد", "زن"];
  const { data: predata } = UseGetUserProfile();
  const [isOpenGen, setIsOpenGen] = useState(false);
  const schema = BasketSchema();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      gender: "",
      nationalId: "",
      birthDate: "",
    },
  });
  const formatNationalCode = (code) => {
    if (!code) return "";
    return code.toString().padStart(10, "0");
  };
  
  useEffect(() => {
    if (predata) {
      reset({
        fullName:
          predata.firstName && predata.lastName
            ? `${predata.firstName} ${predata.lastName}`
            : "",
        gender: predata.gender === "male" ? "مرد" : "زن",
        nationalId: formatNationalCode(predata.nationalCode) || "",
        birthDate: predata.birthDate
          ? new DateObject({ date: predata.birthDate, calendar: persian })
          : null,
      });
    }
  }, [predata, reset]);

  const onSubmit = (data) => {
    const normalizedDate = persianToEnglishNumbers(data.birthDate);
    const gregorianBirthDate = new DateObject({
      date: normalizedDate,
      calendar: persian,
    })
      .convert("gregorian")
      .format("YYYY-MM-DD");

    const finalData = {
      nationalCode: data.nationalId,
      fullName: data.fullName,
      gender: data.gender,
      birthDate: gregorianBirthDate,
    };
    mutate(finalData, {
      onSuccess: () => {
        router.push("/payment?status=success");
      },
      onError: () => {
        router.push("/payment?status=fail");
      },
      isPending: () => {
        toast.loading(" در حال ارسال اطلاعات");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-[100%] flex flex-col sm:flex-row gap-4"
    >
      <div className="border-1 rounded-[10px] border-[#00000033] p-4 sm:pb-10  flex flex-col gap-2 sm:flex-1 md:flex-row md:flex-wrap md:justify-between md:gap-5">
        <div className="flex gap-1 items-center md:w-[100%]">
          <Person />
          <h2 className="font-VazirFd text-2xl font-normal">مشخصات مسافر</h2>
        </div>
        <div className="mt-4 md:max-w-[260px] md:mt-0 md:min-w-[260px] md:max-h-[50px] md:flex-1">
          <input
            type="text"
            {...register("fullName")}
            className={`w-full px-3 py-2 border h-[47px] focus:outline-[#28A745] rounded-[5px] font-YekanBakh text-[14px] text-[#282828] ${
              errors.fullName
                ? "border-red-500 outline-none"
                : "border-[#00000080]"
            }`}
            placeholder="نام و نام خانوادگی"
          />
          <p className="text-red-500 text-[10px] h-[23px] pt-2 font-IranianSans sm:absolute sm:top-[100%]">
            {errors.fullName?.message || ""}
          </p>
        </div>
        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="relative md:max-w-[260px] md:min-w-[260px] md:max-h-[50px] md:flex-1 w-full font-YekanBakh">
                <button
                  type="button"
                  onClick={() => setIsOpenGen((prev) => !prev)}
                  className={`w-full h-[47px] p-3 border rounded-[5px] flex justify-between items-center bg-white transition-colors duration-200 ${
                    errors.gender ? "border-red-500" : "border-[#00000080]"
                  }`}
                >
                  <span className="text-[#00000080]">{value || "جنسیت"}</span>
                  <span>
                    <ArrowDown
                      className={`stroke-black w-3 h-3 ${
                        isOpenGen ? "rotate-180" : "rotate-0"
                      } transition-transform duration-200`}
                    />
                  </span>
                </button>
                <p className="text-red-500 text-[10px] h-[23px] pt-2 font-IranianSans sm:absolute sm:top-[100%]">
                  {errors.gender?.message || ""}
                </p>
                {isOpenGen && (
                  <ul className="absolute top-[70%] sm:top-[100%] left-0 mt-1 w-full bg-white border border-[#0000001F] rounded-[5px] shadow-lg z-50 transition-all duration-200">
                    {genders.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          onChange(item);
                          setIsOpenGen(false);
                        }}
                        className="p-2 cursor-pointer hover:bg-gray-100 border-b border-[#0000001F] last:border-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }}
        />
        <div className="md:max-w-[260px] md:min-w-[260px] md:flex-1">
          <input
            type="text"
            {...register("nationalId")}
            className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-[#28A745] font-YekanBakh text-[14px] text-[#282828]  ${
              errors.nationalId
                ? "border-red-500 outline-none"
                : "border-[#00000080]"
            }`}
            placeholder="کد ملی"
          />
          <p className="text-red-500 text-[10px] h-[23px] pt-2 font-IranianSans sm:absolute sm:top-[100%]">
            {errors.nationalId?.message || ""}
          </p>
        </div>
        <div>
          <Controller
            name="birthDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="relative md:max-w-[260px] md:min-w-[260px] md:flex-1 w-full">
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
        </div>
      </div>
      <div className="flex flex-col gap-4 border-[1px] border-[#0000001A] rounded-[10px] p-4 sm:flex-1 sm:max-w-[320px] sm:max-h-[240px]">
        <div className="flex justify-between items-center ">
          <h2 className="font-semibold text-2xl">{data.title}</h2>
          <p className="font-VazirFd font-normal text-[#7D7D7D]">
            {data.options[0]}
          </p>
        </div>
        <div className="w-full h-px bg-[repeating-linear-gradient(to_right,black_0,black_10px,transparent_10px,transparent_20px)] border-b-[#00000033] mb-1.5"></div>
        <div className="flex font-VazirFd justify-between items-center">
          <p>قیمت نهایی</p>
          <p className="text-[10px] font-normal text-[#282828CC]">
            <span className="font-medium text-2xl pl-1 text-[#009ECA]">
              {data.price.toLocaleString()}
            </span>
            تومان
          </p>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#28A745] hover:bg-green-700 text-white py-2 rounded-[10px] transition-colors font-VazirFd font-normal text-2xl"
        >
          ثبت و خرید نهایی
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
