import { WhyTorinoBenefits } from "src/constants/Arrays";

export const metadata = {
  title: "چرا تورینو | تورینو",
  description: "مزایای استفاده از تورینو و خدمات گردشگری ما"
};

export default function WhyTorinoPage() {

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 font-YekanBakh mt-[80px]">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 text-center transition-all duration-300 hover:shadow-3xl z-10 border border-gray-100/50 mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          چرا تورینو؟
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          تورینو با تکیه بر{" "}
          <span className="font-semibold text-[#28A745]">
            کیفیت، امنیت و رضایت مشتری
          </span>
          ، تجربه‌ای بی‌نظیر از سفرهای داخلی و خارجی ارائه می‌دهد. ما همراه شما
          هستیم تا هر سفر به خاطره‌ای فراموش‌نشدنی تبدیل شود.
        </p>
      </div>
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
          مزایای انتخاب تورینو
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WhyTorinoBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg shadow-2xl hover:bg-[#22f854cc] cursor-pointer rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group animate-fade-in"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition-all duration-200">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
