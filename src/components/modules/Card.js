import Image from "next/image";
import Link from "next/link";

function Card({ item }) {
  return (
    <div className="border-[#0000001F] rounded-[10px] shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <Image
        src={`/Images/${item.destination.name}.png`}
        width={279}
        height={159}
        alt="تور ها"
        className="rounded-t-[10px] w-full h-auto"
      />
      <div className="px-3 py-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {item.title}
        </h3>
        <p className="w-[80%] text-sm text-gray-600 truncate">
          {item.options.join(" - ")}
        </p>
      </div>
      <div className="flex justify-between items-center px-2 py-1 border-t border-[#0000001F]">
        <Link
          href={`/tours/${item?.id}`}
          className="bg-[#28A745] hover:bg-green-700 transition-colors duration-200 text-white text-[15px] rounded-sm px-6 py-2 leading-none cursor-pointer"
        >
          رزرو
        </Link>
        <div className="flex items-center gap-1 h-6 font-VazirFd">
          <p className="text-[16px] leading-none text-[#009ECA]">
            {item.price.toLocaleString()}
          </p>
          <p className="text-xs leading-none text-[#282828CC]">تومان</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
