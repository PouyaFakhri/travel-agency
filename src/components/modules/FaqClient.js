"use client";

import { useState } from "react";

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "چگونه تور  رزرو  کنم؟",
      answer:
        "از طریق سایت یا اپلیکیشن تورینو، تور مورد نظر خود را از لیست انتخاب کنید، جزئیات را بررسی کرده و با وارد کردن اطلاعات مسافران و پرداخت آنلاین ، رزرو خود را تکمیل کنید.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M9 14h6m-6 4h6m-6-8h6"
          />
        </svg>
      ),
    },
    {
      question: "سیاست استرداد چیست؟",
      answer:
        "می‌توانید تا ۴۸ ساعت قبل از شروع سفر درخواست استرداد ثبت کنید. ۱۰٪ هزینه‌های اداری کسر شده و وجه باقی‌مانده ظرف ۷ روز کاری بازگردانده می‌شود.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      ),
    },
    {
      question: "آیا پشتیبانی  ۲۴/۷  دارید؟",
      answer:
        "بله، تیم پشتیبانی تورینو به صورت ۲۴ ساعته از طریق چت آنلاین، ایمیل و تماس تلفنی در دسترس است.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      question: "تورهای خارجی چه شرایطی دارند؟",
      answer:
        "تورهای خارجی ممکن است شرایط ویژه‌ای برای رزرو و استرداد داشته باشند. لطفاً جزئیات تور را در صفحه مربوطه بررسی کنید یا با پشتیبانی تماس بگیرید.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen mt-[70px] mb-[30px] flex items-center justify-center sm:p-4 font-YekanBakh">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl py-6 px-3 sm:p-10 transition-all duration-300 hover:shadow-3xl z-10 border border-gray-100/50">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-10">
          پرسش‌های متداول
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          پاسخ به رایج‌ترین سوالات شما درباره خدمات تورینو
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-xl shadow-lg border border-gray-100/50 transition-all duration-300 hover:shadow-xl group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer flex items-center justify-between p-1 py-3 text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <div className="min-w-8 min-h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-all duration-200">
                    {faq.icon}
                  </div>
                  <h2 className="text-[14px] sm:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h2>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4" : "max-h-0"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
