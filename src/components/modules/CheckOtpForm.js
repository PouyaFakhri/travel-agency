"use client";

import OtpInput from "react-otp-input";
import { useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import { UseCountdownTimer } from "src/hooks/UseCountdownTimer";
import { UseSendOtp } from "src/services/mutations";
import { UseCheckOtp } from "src/services/mutations";
import { toast } from "react-toastify";
import { setCookie } from "src/utils/cookies";
import { toEnglishDigits } from "src/utils/toEnglishDigits";
import { useContext } from "react";
import { PhoneContext } from "src/context/PhoneContext";
import { AuthContext } from "src/context/AuthContext";

function CheckOtpForm({ setStep, setIsAuthModalOn }) {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { phone } = useContext(PhoneContext);
  const [otp, setOtp] = useState("");
  const { formattedTime, reset, isRunning } = UseCountdownTimer(120);
  const { mutate: sendOtpMutate, isPending: sendOtpIsPending } = UseSendOtp();
  const { mutate: checkOtpMutate, isPending: checkOtpIsPending } =
    UseCheckOtp();

  const resendCodeHandler = () => {
    if (sendOtpIsPending) return;
    sendOtpMutate(phone, {
      onSuccess: (res) => {
        toast.success(res?.message);
        toast(res?.code);
        reset();
        setOtp("");
      },
      onError: () => {
        toast.error("خطایی رخ داده است");
      },
    });
  };

  const CheckOtpHandler = () => {
    if (otp.length !== 6) {
      toast.error("کد تأیید باید ۶ رقم باشد");
      return;
    }
    if (checkOtpIsPending) return;
    checkOtpMutate(
      {
        mobile: phone.mobile,
        code: otp,
      },
      {
        onSuccess: (res) => {
          toast.success(res?.message || "با موفقیت وارد شدید");
          setCookie("accessToken", res?.accessToken, 30);
          setCookie("refreshToken", res?.refreshToken, 10080);
          setIsAuthenticated(true);
          setIsAuthModalOn(false);
        },
        onError: (err) => {
          if (err?.response?.status === 400) {
            toast.error("کد وارد شده فاقد اعتبار است");
          } else {
            toast.error("خطایی رخ داده است");
          }
        },
      }
    );
  };

  const handleOtpChange = (val) => {
    const englishVal = toEnglishDigits(val);
    setOtp(englishVal);
  };

  return (
    <>
      <ArrowLeft
        onClick={() => setStep(1)}
        className="absolute stroke-black left-[5%] top-[5%] cursor-pointer"
      />
      <div className="w-[85%] h-full flex flex-col items-center justify-around">
        <h2 className="w-full text-center font-semibold text-[22px] text-[#282828] sm:text-[24px] md:text-[28px]">
          کد تایید را وارد کنید
        </h2>
        <div className="w-full text-center flex flex-col gap-5.5">
          <label htmlFor="phone" className="font-light text-right">
            کد تایید به شماره {phone.mobile} ارسال شد
          </label>
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={6}
            isInputNum
            renderInput={(props) => (
              <input
                {...props}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
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
          {isRunning ? (
            <p>
              <span>{formattedTime}</span> تا ارسال مجدد کد
            </p>
          ) : (
            <button
              onClick={resendCodeHandler}
              className="w-fit self-center cursor-pointer hover:text-[#28A745] transition-colors duration-200"
            >
              ارسال مجدد کد
            </button>
          )}
        </div>
        <button
          onClick={CheckOtpHandler}
          className="w-full font-VazirFd font-medium text-[18px] text-white bg-[#28A745] h-[54px] leading-[54px] text-center border-[#00000040] border-[1px] border-solid rounded-[6px] cursor-pointer hover:bg-[#24943d] transition-colors duration-200"
        >
          تأیید
        </button>
      </div>
    </>
  );
}

export default CheckOtpForm;
