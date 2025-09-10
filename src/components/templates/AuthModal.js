"use client";

import { useState } from "react";
import SendOtpForm from "../modules/SendOtpForm";
import CheckOtpForm from "../modules/CheckOtpForm";

function AuthModal({ modalState }) {
  const { isAuthModalOn, setIsAuthModalOn, phone, setPhone, setIsLogin } = modalState;
  const [step, setStep] = useState(1);

  const closeHandler = () => {
    setTimeout(() => setIsAuthModalOn(false), 300);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-screen h-screen bg-black/5 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${
        isAuthModalOn ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeHandler}
    >
      <div
        className={`flex items-center justify-center font-YekanBakh absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] xs:w-[370px] sm:w-[400px] md:w-[450px] xl:w-[561px] h-[362px] bg-white shadow-modal rounded-[20px] pt-[8%] pb-[5%] sm:pt-[4%] sm:pb-[2%] md:pt-[3%] md:pb-[2%] xl:pt-[1%] xl:pb-[1%] transition-transform duration-300 ${
          isAuthModalOn ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {step === 1 ? (
          <SendOtpForm
            closeHandler={closeHandler}
            setStep={setStep}
            setPhone={setPhone}
            phone={phone}
          />
        ) : (
          <CheckOtpForm
            setStep={setStep}
            setIsLogin={setIsLogin}
            phone={phone}
            setIsAuthModalOn={setIsAuthModalOn}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;
