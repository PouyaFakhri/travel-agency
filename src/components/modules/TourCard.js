import { Cities } from "src/constants/Cities";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Sunfog2 from "../icons/Sunfog2";
import Airplane2 from "../icons/Airplane2";
import uuidToOrderNumber from "src/utils/uuidToOrderNumber";

function TourCard({ data }) {
  return (
    <div className="w-full m-0 flex flex-col gap-4 md:border-1 md:rounded-[10px] md:border-[#00000033] md:py-3 md:px-5">
      {data.map((item, index) => {
        const startDate = new DateObject({
          date: item.startDate,
          calendar: persian,
          locale: persian_fa,
        });
        const endDate = new DateObject({
          date: item.endDate,
          calendar: persian,
          locale: persian_fa,
        });
        const today = new DateObject({ calendar: persian, locale: persian_fa });
        const isExpired = today.valueOf() > endDate.valueOf();
        return (
          <div
            key={index}
            className="relative w-full pt-6 pb-2 border-1 rounded-[10px] border-[#00000033] flex flex-col gap-4 font-YekanBakh"
          >
            <div className="max-w-[88%] md:max-w-[60%] px-3 py-4 flex justify-between gap-4">
              <div className="flex gap-1 items-center">
                <Sunfog2 />
                <h2 className="text-xs md:text-sm">{item.title}</h2>
              </div>
              <div className="flex gap-1 items-center">
                <Airplane2 />
                <h2 className="text-xs md:text-sm">سفر با {item.fleetVehicle}</h2>
              </div>
            </div>
            <div className="flex px-3 justify-between md:justify-start md:gap-3 max-w-[98%] mb-2">
              <h2 className="font-semibold text-sm">
                {Cities[+item.origin.id - 1][0]} به{" "}
                {Cities[+item.destination.id - 1][0]}
              </h2>
              <h2 className="font-VazirFd text-xs md:text-sm font-[400] text-[#00000099] min-w-[112px]">
                <span className="w-1 h-1 rounded-full bg-[#00000099] inline-block ml-1"></span>{" "}
                {startDate.format("dddd D MMMM YYYY")}
              </h2>
            </div>
            <div className="flex px-3 justify-between md:justify-start md:gap-3 max-w-[98%]">
              <h2 className="font-semibold text-sm">تاریخ برگشت</h2>
              <h2 className="font-VazirFd text-xs md:text-sm font-[400] text-[#00000099] min-w-[112px]">
                <span className="w-1 h-1 rounded-full bg-[#00000099] inline-block ml-1"></span>
                {endDate.format("dddd D MMMM YYYY")}
              </h2>
            </div>
            <div className="flex px-3 items-center justify-between md:justify-start md:gap-3 border-t-1 border-[#00000033] pt-2">
              <div className="flex items-center gap-2">
                <p className="text-[10px] md:text-sm font-[400] text-[#00000080]">
                  شماره تور
                </p>
                <p className="font-VazirFd text-[8px] md:text-[10px]">{uuidToOrderNumber(item.id)}</p>
              </div>
              <p className="w-[1px] h-[30px] bg-[#00000033]"></p>
              <div className="flex items-center gap-2">
                <p className="text-[10px] md:text-sm font-[400] text-[#00000080]">
                  مبلغ پرداخت شده 
                </p>
                <div className="flex items-center gap-1 font-VazirFd">
                  <p className="text-[8px] md:text-[10px] leading-none">
                    {item.price.toLocaleString()}
                  </p>
                  <p className="text-[8px] font-[300] leading-none text-[#282828CC]">
                    تومان
                  </p>
                </div>
              </div>
            </div>
            <p
              className={`absolute py-[4px] px-[8px] top-[10px] left-[10px] text-[6px] md:text-[9px] lg:text-[12px] rounded-[27px] ${
                isExpired
                  ? "text-[#28A745] bg-[#28A7454D]"
                  : "text-[#D1B900] bg-[#D1B9004D]"
              }`}
            >
              {isExpired ? "به اتمام رسیده" : "در حال برگزاری"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TourCard;
