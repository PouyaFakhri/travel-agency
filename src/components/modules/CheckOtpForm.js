"use client";

import OtpInput from "react-otp-input";
import { useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";

function CheckOtpForm({setStep}) {
  const [otp, setOtp] = useState("");
  const onOtpSubmit = () => {
    console.log(otp);
  };
  return (
    <>
       {/* Back Button */}
      <ArrowLeft
        onClick={() => setStep(1)}
        className="absolute left-[5%] top-[5%] cursor-pointer"
      />
      <div className="w-[85%] h-full flex flex-col items-center justify-around">
        {/* title */}
        <h2 className="w-full text-center font-semibold text-[22px] text-[#282828] sm:text-[24px] md:text-[28px]">
          کد تایید را وارد کنید
        </h2>
        {/* input section */}
        <div className="w-full text-center flex flex-col gap-5.5 ">
          <label htmlFor="phone" className="font-light text-right">
            کد تایید به شماره 09224526847 ارسال شد
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderInput={(props) => (
              <input
                {...props}
                className="!direction-ltr mx-auto !w-[15%] sm:!w-[13%] md:!w-[12%] h-11 sm:h-12 md:h-13 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}
            renderSeparator={<span className="mx-1">-</span>}
            containerStyle={{
              direction: "ltr",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <p>تا ارسال مجدد کد</p>
        </div>
        {/* submit button */}
        <button
          onClick={onOtpSubmit}
          className="w-full font-VazirFd font-medium text-[18px] text-white bg-[#28A745] h-[54px] leading-[54px] text-center border-[#00000040] border-[1px] border-solid rounded-[6px] cursor-pointer hover:bg-[#24943d] transition-colors duration-200 "
        >
          تأیید
        </button>
      </div>
    </>
  );
}

export default CheckOtpForm;
