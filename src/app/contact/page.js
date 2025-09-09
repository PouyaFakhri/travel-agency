import ContactForm from "src/components/modules/ContactForm";
import { contactUsValues } from "src/constants/Arrays";

export const metadata = {
  title: "تماس با ما | تورینو",
  description: "راه‌های ارتباط با تورینو، فرم تماس و اطلاعات پشتیبانی"
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 sm:p-6 font-YekanBakh mt-[80px] mb-[30px]">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 text-center transition-all duration-300 hover:shadow-3xl z-10 border border-gray-100/50 mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          تماس با تورینو
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          با تیم پشتیبانی ما از طریق فرم تماس، ایمیل، تلفن یا آدرس دفتر ارتباط
          برقرار کنید. ما{" "}
          <span className="font-semibold text-[#28A745]">۲۴/۷ ساعته</span> در
          کنار شما هستیم!
        </p>
      </div>
      <div className="w-full max-w-6xl grid md:grid-cols-2 md:gap-8">
        <ContactForm />
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 max-h-12">
          {contactUsValues.map((info, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group animate-fade-in"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition-all duration-200">
                {info.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-sm text-gray-600">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
