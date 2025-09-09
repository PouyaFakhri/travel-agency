"use client";
import { useState } from "react";
import Card from "../modules/Card";
import ArrowDown from "../icons/ArrowDown";

function ClientToursList({ data }) {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`${index >= 4 && !showAll ? "hidden xs:block" : ""}`}
          >
            <Card item={item} />
          </div>
        ))}
      </div>
      {!showAll && data.length > 4 && (
        <div className="flex justify-center mt-1 xs:hidden">
          <button
            onClick={handleShowMore}
            className="flex gap-2 font-VazirFd font-normal text-[13px] text-[#00000080] cursor-pointer leading-none"
          >
            مشاهده بیشتر
            <ArrowDown className="w-3 h-3 stroke-[#00000080] leading-none" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ClientToursList;
