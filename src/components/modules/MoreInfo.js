import Image from "next/image";
import Phone from "../icons/Phone";
import Link from "next/link";

function MoreInfo() {
  return (
    <div className="w-[85%] mx-auto flex flex-col sm:flex-row gap-5 font-VazirFd mt-19 mb-19  rounded-[10px] border-[#00000040] border-[1px] pb-4 sm:pb-0">
      <div className="!relative w-full sm:w-[70%] bg-[#28A745] pb-16 pt-2 sm:pt-9 sm:pb-18 md:pt-12 md:pb-20 lg:pt-15 lg:pb-22 pr-2 sm:pr-4 md:pr-6 lg:pr-12 rounded-t-[10px] sm:rounded-[10px] font-YekanBakh text-[20px] xxs:text-[22px] xxs:[word-spacing:2px] text-white font-extrabold sm:text-[28px] md:text-[32px] lg:text-[48px]">
        <h3> خرید تلفنی از <span className="text-[#10411B]"> تورینو </span></h3>
        <p className="text-[13px] xxs:text-[14px] font-normal sm:text-[17px] md:text-[21px] lg:text-[32px]">به هر کجا که میخواهید !</p>
        <Image
          src="/Images/Phone-Call.png"
          width={195}
          height={158}
          alt="خرید تلفنی"
          className="absolute sm:w-[230px] sm:h-auto md:w-[260px] lg:w-[308px] -left-[7px] bottom-0"
        />
      </div>
      <div className="flex sm:flex-col sm:w-[30%] justify-between items-center sm:justify-center sm:gap-4 px-6" >
        <div className="flex items-center justify-center gap-2">
          <a href="tel:0211840" className=" text-[#282828] font-bold text-xl md:text-[24px] lg:text-[28px]">
            021-1840
          </a>
          <Phone className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
        </div>
        <Link
          href="/buyguide"
          prefetch={true}
          className="bg-[#10411B] py-2 px-3 sm:px-3 md:px-6 lg:px-9  xxs:px-4 rounded-[9px] cursor-pointer text-white text-[14px] font-medium md:text-[16px] hover:bg-[#28A745] transition-colors duration-200"
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default MoreInfo;
