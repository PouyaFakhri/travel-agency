"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneSchema } from "src/utils/schema";
import Close from "../icons/Close";

function SendOtpForm({closeHandler}) {
  const schema = phoneSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* Close Button */}
      <Close
        onClick={() => closeHandler() }
        className="absolute left-[5%] top-[5%] cursor-pointer"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[85%] h-full flex flex-col items-center justify-around"
      >
        {/* title */}
        <h2 className="w-full text-center font-semibold text-[22px] sm:text-[24px] md:text-[28px] text-[#282828]">
          ورود به تورینو
        </h2>
        {/* input section */}
        <div className="w-full text-center flex flex-col gap-2.5 md:gap-4.5">
          <label htmlFor="phone" className="font-light text-right">
            شماره موبایل خود را وارد کنید
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="0912***6654"
            {...register("phone")}
            className="border-[#00000040] border-[1px] border-solid h-[54px] leading-[54px] px-3 rounded-[6px] placeholder:text-[15px] font-VazirFd font-light text-right text[#00000080] focus:outline-none focus:ring-2 focus:ring-[#28A745]"
          />
          <p className="w-full h-1 text-red-600 text-xs mt-1.5 text-right pr-1 ">
            {errors.phone?.message}
          </p>
        </div>
        {/* submit button */}
        <button className="w-full font-VazirFd font-medium text-[18px] text-white bg-[#28A745] h-[54px] leading-[54px] text-center border-[#00000040] border-[1px] border-solid rounded-[6px] cursor-pointer hover:bg-[#24943d] transition-colors duration-200 ">
          ارسال کد تایید
        </button>
      </form>
    </>
  );
}

export default SendOtpForm;
