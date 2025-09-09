"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { supportSchema } from "src/utils/schema";
import Link from "next/link";

export default function SupportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(supportSchema),
  });
  const [messages, setMessages] = useState([
    { sender: "support", text: "سلام! چطور می‌تونم به شما کمک کنم؟ 😊" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    const userMsg = { sender: "user", text: data.message };
    setMessages((prev) => [...prev, userMsg]);
    reset();
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "support",
          text: "پیام شما دریافت شد ! بعد از بررسی پاسخ داده خواهد شد.",
        },
      ]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="flex items-start justify-center sm:p-4 font-YekanBakh">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6 z-10">
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl flex flex-col h-[70vh] overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-white">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A9 9 0 1118.364 4.56M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border border-white animate-pulse"></span>
            </div>
            <div>
              <p className="font-bold text-lg">پشتیبانی تورینو</p>
              <p className="text-xs text-blue-100">آنلاین</p>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } animate-slide-in`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-2xl text-sm animate-pulse">
                  در حال تایپ...
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-1 sm:px-3 py-3 flex items-center gap-3 border-t bg-white"
          >
            <div className="relative flex-1">
              <input
                type="text"
                {...register("message")}
                placeholder="پیام خود را بنویسید..."
                className="w-full px-2 py-2 text-[14px] sm:text-base sm:px-5 sm:py-2  border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder:text-gray-400"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 absolute -bottom-6 left-0 animate-pulse">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-2 py-2 text-[14px] sm:text-base cursor-pointer sm:px-5 sm:py-2 rounded-full font-normal sm:font-semibold text-white flex items-center gap-2 transition-all duration-200 ${
                isLoading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95"
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              )}
              ارسال
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-1/3 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            راه‌های دیگر ارتباط با ما
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-600">support@torino.com</p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-sm text-gray-600">021-1840</p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-gray-600"> پشتیبانی ۲۴/۷ ساعته </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              سوالات متداول
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/buyguide" prefetch={true} className="text-sm text-gray-600 cursor-pointer hover:text-blue-500 transition-colors">
                چگونه تور رزرو کنم؟
              </Link>
              <Link href="/refundguide" prefetch={true} className="text-sm text-gray-600 cursor-pointer hover:text-blue-500 transition-colors">
                سیاست استرداد چیست؟
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
