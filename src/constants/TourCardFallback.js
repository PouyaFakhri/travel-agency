const TourCardFallback = () => {
  <div className="w-screen sm:bg-[#F3F3F3] bg-white pt-0 sm:pt-2 pb-10 animate-pulse">
    <div className="w-[85%] mx-auto mt-[65px] sm:mt-[80px] md:mt-[90px] flex flex-col items-center gap-2 sm:border-[#00000033] sm:border-[1px] bg-[#FFFFFF] sm:rounded-[10px] p-0 sm:p-5">
      <div className="flex w-full flex-col xs:flex-row gap-4">
        <div className="rounded-[12px] bg-gray-300 w-full xs:max-w-[220px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[380px] h-[200px] mb-3"></div>
        <div className="flex flex-col gap-4 mb-2 xs:pr-2 w-full">
          <div className="flex justify-between items-center sm:items-start sm:pr-2 xs:flex-col xs:gap-2 xs:mb-3">
            <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-gray-300 rounded w-[60%]" />
            <div className="h-4 sm:h-5 md:h-6 lg:h-7 bg-gray-300 rounded w-[30%]" />
          </div>
          <div className="flex flex-wrap gap-4 items-start font-YekanBakh text-[#7D7D7D] font-normal text-[13px] mb-2 xs:pr-2 mp:gap-2 lg:gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 w-[100px]">
                <div className="w-5 h-5 bg-gray-300 rounded-full" />
                <div className="h-4 bg-gray-300 rounded w-[60%]" />
              </div>
            ))}
          </div>
          <div className="hidden font-VazirFd mp:block text-[10px] font-normal text-[#282828CC] pr-2 pb-2 lg:pt-3">
            <div className="bg-gray-300 h-6 w-24 rounded" />
          </div>
        </div>
      </div>
      <div className="flex relative w-full justify-between items-center font-VazirFd pb-17 mp:pb-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="hidden sm:flex flex-col gap-1 sm:flex-1 md:flex"
          >
            <div className="flex gap-1 justify-center">
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <div className="w-[60px] h-3 bg-gray-300 rounded" />
            </div>
            <div className="w-[70px] h-4 bg-gray-300 rounded mx-auto" />
          </div>
        ))}
        <div className="absolute w-full bottom-0 mp:bottom-19 mp:flex-row-reverse mp:left-0 mp:w-1/2 lg:w-[52%] flex justify-between items-center font-VazirFd">
          <div className="px-4 sm:px-5 md:px-5 lg:px-7 py-2 rounded-[10px] bg-gray-300 w-[120px] h-[40px]"></div>
          <div className="w-24 h-6 bg-gray-300 rounded mp:hidden" />
        </div>
      </div>
    </div>
  </div>;
};

export default TourCardFallback
