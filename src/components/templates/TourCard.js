"use client";
import Image from "next/image";
import BackingCalender from "../icons/BackingCalender";
import Bime from "../icons/Bime";
import Bus from "../icons/Bus";
import GoingCalender from "../icons/GoingCalender";
import Map from "../icons/Map";
import Routing from "../icons/Routing";
import Star from "../icons/Star";
import TourPerson from "../icons/TourPerson";
import Zarfiat from "../icons/Zarfiat";
import { UseShamsiDater } from "src/hooks/UseShamsiDater";
import { Cities } from "src/constants/Cities";
import { UseAddToBasket } from "src/services/mutations";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function TourCard({ tourData }) {
  const router = useRouter();
  const { mutate } = UseAddToBasket();
  const clickHandler = () => {
    mutate(tourData.id , {
      onSuccess: () => {
        toast.success("با موفقیت به سبد خرید اضافه شد");
        router.push("/basket");
      },
    });
  };
  return (
    <div className="w-screen sm:bg-[#F3F3F3] bg-white pt-0 sm:pt-2 pb-10 xs:pb-6 ">
      <div className="w-[85%] relative mx-auto mt-[80px] md:mt-[90px] flex flex-col items-center gap-2 sm:border-[#00000033] sm:border-[1px] bg-[#FFFFFF] sm:rounded-[10px] p-0 pb-12 sm:p-5 mp:pb-0">
        <div className="flex w-full flex-col xs:flex-row gap-4 ">
          <Image
            src={`/Images/${tourData.destination.name}.png`}
            width={397}
            height={265}
            alt="تور ها"
            className="rounded-[12px] w-[100%] xs:max-w-[220px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[380px]  h-auto min-h-[200px] mb-3"
          />
          <div className="flex flex-col gap-4 mb-2 xs:pr-2">
            <div className="flex justify-between items-center sm:items-start sm:pr-2 xs:flex-col xs:gap-2 xs:mb-3">
              <h2 className="font-YekanBakh font-bold text-2xl sm:text-[26px] md:text-[28px] lg:text-[32px]">
                {tourData.title}
              </h2>
              <p className="font-VazirFd font-normal text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] text-[#282828]">
                {tourData.options[0]}
              </p>
            </div>
            <div className="w-full flex justify-between flex-wrap gap-4 overflow-auto items-start font-YekanBakh text-[#7D7D7D] font-normal text-[13px] mb-2 xs:pr-2 mp:gap-2 lg:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <TourPerson className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <p className="sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  تورلیدر از مبدا
                </p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 ">
                <Map className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <p className="sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  برنامه سفر
                </p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 ">
                <Star className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <p className="sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  تضمین کیفیت
                </p>
              </div>
            </div>
            <p className="hidden font-VazirFd mp:block text-[10px] font-normal text-[#282828CC] pr-2 pb-2 lg:pt-3">
              <span className="font-medium text-2xl pl-1 text-[#009ECA]">
                {tourData.price.toLocaleString()}
              </span>
              تومان
            </p>
          </div>
        </div>
        <div className="w-full overflow-x-auto justify-between items-center scroll-smooth font-VazirFd flex gap-3 xs:gap-5 sm:gap-6 pb-5 md:gap-0 mp:pb-0 sm:mb-10">
          <div className="flex flex-col gap-1 min-w-[50px] flex-1">
            <div className="flex gap-1 justify-center">
              <Routing className="w-4 h-4 xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
              <p className="font-normal text-[15px] text-[#444444] text-center line-clamp-1">
                مبدا
              </p>
            </div>
            <p className="font-medium text-[14px] text-center text-[#282828]">
              {Cities[Number(tourData.origin.id) - 1][0]}
            </p>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px] flex-1 md:border-x-[1px] md:border-[#00000040]">
            <div className="flex gap-1 justify-center">
              <GoingCalender className="w-4 h-4 xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
              <p className="font-normal text-[15px] text-[#444444] text-center line-clamp-1">
                تاریخ رفت
              </p>
            </div>
            <p className="font-medium text-[14px] text-center text-[#282828]">
              {UseShamsiDater(tourData.startDate)}
            </p>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px] flex-1">
            <div className="flex gap-1 justify-center">
              <BackingCalender className="w-4 h-4 xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
              <p className="font-normal text-[15px] text-[#444444] text-center line-clamp-1">
                تاریخ برگشت
              </p>
            </div>
            <p className="font-medium text-[14px] text-center text-[#282828]">
              {UseShamsiDater(tourData.endDate)}
            </p>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px] flex-1 md:border-x-[1px] md:border-[#00000040]">
            <div className="flex gap-1 justify-center">
              <Bus className="w-4 h-4 xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
              <p className="font-normal text-[15px] text-[#444444] text-center line-clamp-1">
                حمل و نقل
              </p>
            </div>
            <p className="font-medium text-[14px] text-center text-[#282828]">
              {tourData.fleetVehicle}
            </p>
          </div>
          <div className="flex flex-col gap-1 min-w-[60px] flex-1 md:border-l-[1px] md:border-[#00000040]">
            <div className="flex gap-1 justify-center">
              <Zarfiat className="w-4 h-4 xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
              <p className="font-normal text-[15px] text-[#444444] text-center line-clamp-1">
                ظرفیت
              </p>
            </div>
            <p className="font-medium text-[14px] text-center text-[#282828]">
              {tourData.availableSeats}
            </p>
          </div>
          <div className="flex flex-col gap-1 min-w-[90px] flex-1">
            <div className="flex gap-1 justify-center">
              <Bime className="w-4 h-4 xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
              <p className="font-normal text-[15px] text-[#444444] text-center line-clamp-1">
                بیمه
              </p>
            </div>
            <p className="font-medium text-[14px] text-center text-[#282828]">
              {tourData.insurance ? "50 هزار دیناری" : "ندارد"}
            </p>
          </div>
        </div>

        <div className="absolute w-full bottom-0  mp:bottom-25 lg:bottom-24 mp:left-0 mp:w-fit flex justify-between items-center font-VazirFd sm:p-5  ">
          <button
            onClick={clickHandler}
            className="px-4 sm:px-5 md:px-5 lg:px-7 py-1 rounded-[10px] bg-[#28A745] text-white font-normal text-xl sm:text-[21px] md:text-[22px] lg:text-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200"
          >
            رزرو و خرید
          </button>
          <p className="text-[10px] font-normal text-[#282828CC] mp:hidden">
            <span className="font-medium text-2xl pl-1 text-[#009ECA]">
              {tourData.price.toLocaleString()}
            </span>
            تومان
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
