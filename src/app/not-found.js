import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-2 md:flex-row-reverse md:justify-between lg:justify-evenly items-center justify-center text-center font-YekanBakh pt-[40px] mt-[20px] mb-[40px]">
      <div className="w-[322px] h-[322px] md:w-[444px] md:h-[444px] lg:w-[555px] lg:h-[555px]">
        <Image
          src="/Images/Error TV.jpg"
          alt="خطای 404"
          width={555}
          height={555}
          sizes="(max-width: 768px) 322px, (max-width: 1024px) 444px, 555px"
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-5">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#282828] mb-3">
          صفحه مورد نظر یافت نشد!
        </h2>
        <Link
          href="/"
          prefetch={true}
          className="font-semibold text-[20px] lg:text-[28px] text-[#28A745] px-6 py-3 bg-[#D8FFE1] rounded-2xl shadow hover:bg-[#218838] hover:text-white transition-all duration-300"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}