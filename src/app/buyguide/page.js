import { buyGuideSteps } from "src/constants/Arrays";

export const metadata = {
  title: "راهنمای خرید | تورینو",
  description: "راهنمای قدم به قدم خرید تور از تورینو",
};

export default function BuyGuidePage() {
  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center p-1 sm:p-6 mt-[80px] lg:mt-[30px] mb-[30px] font-YekanBakh">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-300 hover:shadow-3xl z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
          راهنمای خرید تور
        </h1>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {buyGuideSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative group w-full md:w-1/5 sm:min-h-[164px]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 cursor-pointer flex items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg md:text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-green-700 z-10">
                {index + 1}
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-[200px]">
                  {step.description}
                </p>
              </div>

              {index < buyGuideSteps.length && index > 0 && (
                <>
                  <div className="hidden md:block absolute top-7 left-1/2 w-[calc(100%-3.5rem)] h-1 bg-gradient-to-r from-green-600 to-blue-500 transform translate-x-7"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
