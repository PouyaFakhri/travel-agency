"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowLeft from "../icons/ArrowLeft";
import WhyTorino from "../icons/WhyTorino";
import Ticket from "../icons/Ticket";
import Message from "../icons/Message";
import Heart from "../icons/Heart";

const images = [
  "/images/Slider-1.png",
  "/images/Slider-2.jpg",
  "/images/Slider-3.jpg",
  "/images/Slider-4.jpg",
];

export default function CardStackSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 2000);
    return () => clearInterval(timerRef.current);
  }, []);

  const getPosition = (i) => {
    const relativeIndex = (i - index + images.length) % images.length;

    if (relativeIndex === 0) {
      return { zIndex: 3, x: 0, scale: 1, opacity: 1 };
    } else if (relativeIndex === 1) {
      return { zIndex: 2, x: -40, scale: 0.9, opacity: 0.9 };
    } else if (relativeIndex === 2) {
      return { zIndex: 1, x: -80, scale: 0.8, opacity: 0.7 };
    } else {
      return { zIndex: 0, x: -120, scale: 0.7, opacity: 0.5 };
    }
  };

  return (
    <div className="w-full mx-auto max-w-[85%] flex flex-col items-center">
      <div className="relative w-full flex flex-col sm:flex-row items-right sm:justify-between mx-auto ltr overflow-hidden mb-6 pr-15 sm:pr-0 xl:px-10 pb-10">
        <div className="flex flex-col sm:max-w-[45%] gap-2 text-2xl font-extrabold font-vazirmatn ">
          <div className="relative flex gap-2 -mr-14 sm:mr-0 mb-4 self-start">
            <WhyTorino />
            <h2>
              {" "}
              چرا <span className="text-[#28A745]"> تورینو </span> ؟{" "}
            </h2>
            <span className="absolute right-[11px] top-[4px] text-white font-[900]">
              ؟
            </span>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:gap-4">
            <h4 className="font-vazirmatn font-medium sm:text-lg md:text-xl lg:text-2xl">
              تور طبیعت گردی و تاریخی{" "}
            </h4>
            <p className="font-IranianSans text-justify pl-3 sm:font-light md:font-normal  sm:text-xs md:text-sm lg:text-xl text-[#282828]">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>
        <div className="relative w-[255px] h-[284px] sm:w-[295px] sm:h-[324px] md:w-[335px] md:h-[374px] lg:w-[389px] lg:h-[479px] pb-10 overflow-visible -mr-14 xs:mr-12 sm:mr-0 sm:ml-21">
          {images.map((img, i) => {
            const { x, scale, zIndex, opacity } = getPosition(i);

            return (
              <motion.div
                key={i}
                className="absolute top-0 right-0 w-[255px] h-[284px] sm:w-[295px] sm:h-[324px] md:w-[335px] md:h-[374px] lg:w-[389px] lg:h-[479px] rounded-3xl overflow-hidden"
                style={{ zIndex }}
                animate={{ x, scale, opacity }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src={img}
                  alt={`card-${i}`}
                  fill
                  className="object-cover rounded-3xl"
                />
              </motion.div>
            );
          })}
          <div className="absolute -bottom-10 transform translate-x-[-50%] left-[50%] mt-4 flex items-center gap-2 md:gap-3">
            <button onClick={prev} className="cursor-pointer">
              <ArrowLeft className="w-6 h-6 stroke-[#10411B] rotate-180 text-green-600" />
            </button>
            <p className="text-xl font-medium font-VazirFd text-gray-600">
              {images.length} / <span className="text-black">{index + 1}</span>
            </p>
            <button onClick={next} className="cursor-pointer">
              <ArrowLeft className="w-6 h-6 stroke-[#10411B] text-green-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col gap-6 sm:gap-2 md:gap-6 sm:flex-row items-center justify-between mx-auto py-6 sm:px-1 px-3 md:px-2 font-VazirFd ">
        <p className="border-t-[1px] top-0 absolute w-[100vw] m-0 p-0 border-[#00000033] -right-[7.5vw] left-0"></p>
        <div className="flex gap-2 w-full items-center">
          <Ticket className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:min-w-[104px] lg:h-[104px] min-w-[64px] max-w-[104px] " />
          <div className="flex flex-col h-16 sm:h-18 md:h-20 lg:h-[104px] justify-start pt-[3%] text-[#282828]">
            <h4 className="font-bold text-[14px] md:text-[17px] lg:text-[22px] self-start">
              بصرفه ترین قیمت
            </h4>
            <p className="text-[12px] line-clamp-2  sm:text-[13px] md:text-[14px] lg:text-[16px] font-light ">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full items-center">
          <Message className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:min-w-[104px] lg:h-[104px] min-w-[64px] max-w-[104px] " />
          <div className="flex flex-col h-16 sm:h-18 md:h-20 lg:h-[104px] justify-start pt-[3%] text-[#282828]">
            <h4 className="font-bold text-[14px] md:text-[17px] lg:text-[22px]">
              پشتیبانی
            </h4>
            <p className="text-[12px] line-clamp-2  sm:text-[13px] md:text-[14px] lg:text-[16px] font-light">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full items-center">
          <Heart className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-[104px] lg:h-[104px] min-w-[64px] " />
          <div className="flex flex-col h-16 sm:h-18 md:h-20 lg:h-[104px] justify-start pt-[3%] text-[#282828]">
            <h4 className="font-bold text-[14px] md:text-[17px] lg:text-[22px]">
              رضایت کاربران
            </h4>
            <p className="text-[12px] line-clamp-2  sm:text-[13px] md:text-[14px] lg:text-[16px] font-light">
              رضایت بیش از 10هزار کاربر از تور های ما.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
