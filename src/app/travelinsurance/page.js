import {
  TravelInsuranceCoverages,
  TravelInsuranceSteps,
} from "src/constants/Arrays";

export const metadata = {
  title: "بیمه مسافرتی | تورینو",
  description: "اطلاعات کامل بیمه مسافرتی تورینو و پوشش‌ها و شرایط ویژه آن"
};

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-[80px] mb-[30px] p-4 sm:p-6 font-YekanBakh">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 text-center transition-all duration-300 hover:shadow-3xl z-10 border border-gray-100/50 mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          بیمه مسافرتی تورینو
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          با بیمه مسافرتی تورینو، سفری امن و بدون دغدغه را تجربه کنید. پوشش کامل
          برای{" "}
          <span className="font-semibold text-[#28A745]">
            حوادث، بیماری‌ها، تأخیرها و حمایت حقوقی
          </span>{" "}
          در سراسر جهان
        </p>
      </div>
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
          پوشش‌های بیمه مسافرتی
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TravelInsuranceCoverages.map((coverage, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg shadow-2xl hover:bg-[#22f854cc] cursor-pointer rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group animate-fade-in"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition-all duration-200">
                {coverage.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {coverage.title}
              </h3>
              <p className="text-sm text-gray-600">{coverage.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
          مراحل دریافت بیمه
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {TravelInsuranceSteps.map((step, index) => (
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

              {index < TravelInsuranceSteps.length && index > 0 && (
                <>
                  <div className="hidden md:block absolute top-7 left-1/2 w-[200%] h-1 bg-gradient-to-r from-green-600 to-blue-500 transform translate-x-7"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
