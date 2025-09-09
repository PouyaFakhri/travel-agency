"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "src/utils/schema";
import Link from "next/link";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSent(true);
    setIsLoading(false);
    reset();
  };

  return (
    <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-3xl font-YekanBakh">
      {sent ? (
        <div className="flex flex-col items-center gap-6 text-center py-12">
          <div className="bg-blue-100 text-blue-700 p-6 rounded-xl shadow-md text-base sm:text-lg font-semibold transition-all duration-500 animate-pulse">
            پیام شما با موفقیت ارسال شد ✅
          </div>
          <Link
            href="/"
            prefetch={true}
            className="w-full max-w-xs bg-blue-600 text-white py-3 rounded-full font-semibold text-base sm:text-lg text-center shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4">
            فرم تماس با ما
          </h2>
          {[
            {
              label: "نام و نام خانوادگی",
              name: "name",
              type: "text",
              icon: (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              ),
            },
            {
              label: "ایمیل",
              name: "email",
              type: "email",
              icon: (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
            {
              label: "شماره تماس",
              name: "phone",
              type: "tel",
              icon: (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              ),
            },
            {
              label: "پیام شما",
              name: "message",
              type: "textarea",
              icon: (
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              ),
            },
          ].map((field, index) => (
            <div key={index} className="relative">
              <label className="block mb-2 font-medium text-gray-700">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <div className="relative">
                  <textarea
                    rows={4}
                    {...register(field.name)}
                    className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      errors[field.name]
                        ? "border-red-500 ring-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <div className="absolute top-3 left-3">{field.icon}</div>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type={field.type}
                    {...register(field.name)}
                    className={`w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      errors[field.name]
                        ? "border-red-500 ring-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <div className="absolute top-3 left-3">{field.icon}</div>
                </div>
              )}
              <p
                id={`${field.name}-error`}
                className="text-red-500 text-xs min-h-[20px] pt-1 font-YekanBakh"
              >
                {errors[field.name]?.message || ""}
              </p>
            </div>
          ))}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#28A745] hover:bg-green-700 cursor-pointer text-white py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                در حال ارسال...
              </span>
            ) : (
              "ارسال پیام"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
