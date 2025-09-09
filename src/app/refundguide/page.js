import { RefundGuideSteps } from "src/constants/Arrays";

export const metadata = {
  title: "راهنمای استرداد | تورینو",
  description: "قوانین و مراحل استرداد وجه تورهای تورینو"
};

export default function RefundGuidePage() {

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-1 sm:p-4 font-YekanBakh mt-[80px] lg:mt-[20px] mb-[30px]">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-300 hover:shadow-3xl z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
          راهنمای استرداد وجه
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          مراحل و شرایط استرداد وجه تورها و رزروهای شما به شرح زیر است:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RefundGuideSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg shadow-2xl hover:bg-[#22f854cc] cursor-pointer rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group animate-fade-in"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 group-hover:scale-110 transition-all duration-200">
                {step.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
