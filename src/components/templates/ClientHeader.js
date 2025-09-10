"use client";

import { useState, useEffect, useRef } from "react";
import { removeCookie } from "src/utils/cookies";
import Link from "next/link";
import AuthModal from "../templates/AuthModal";
import { usePathname, useRouter } from "next/navigation";
import Burger from "../icons/Burger";
import LogIn from "../icons/LogIn";
import Person from "../icons/Person";
import Home from "../icons/Home";
import Airplane from "../icons/Airplane";
import Volume from "../icons/Volume";
import Call from "../icons/Call";
import ArrowDown from "../icons/ArrowDown";
import LogOut from "../icons/LogOut";
import Basket from "../icons/Basket";

const navLinks = [
  { href: "/", label: "صفحه ی اصلی", icon: Home },
  { href: "/buyguide", label: "راهنمای خرید  ", icon: Airplane },
  { href: "/aboutus", label: "درباره ی ما", icon: Volume },
  { href: "/contact", label: "تماس با ما", icon: Call },
];

function ClientHeader({ isAuthenticated, phoneNumber }) {
  const pathName = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAuthModalOn, setIsAuthModalOn] = useState(false);
  const [isLogin, setIsLogin] = useState(isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phone, setPhone] = useState({ mobile: "" });

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathName]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    setIsLogin(false);
    setIsDropdownOpen(false);
    setPhone("");
  };

  const basketHandler = () => {
    if (isLogin) {
      router.prefetch("/basket");
      router.push("/basket");
    } else {
      setIsAuthModalOn(true);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={() => setIsMobileNavOpen(true)}
        className="sm:hidden cursor-pointer"
      >
        <Burger />
      </button>
      <div className={`flex ${isLogin ? "gap-0" : "gap-1"}`}>
        {isLogin ? (
          <div className="relative">
            <button
              ref={buttonRef}
              className="flex h-full items-center justify-center gap-1 rounded-lg sm:px-1 sm:py-1 font-VazirFd font-medium sm:text-[15px] md:text-lg text-[#28A745] hover:bg-[#28A745]/10 transition-all duration-200 cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <Person className="w-[14px] h-[14px] sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-[#28A745]" />
              <span className="font-VazirFd h-full flex items-center justify-center font-medium text-sm md:text-base lg:text-lg text-[#28A745]">
                {phone.mobile || phoneNumber}
              </span>
              <ArrowDown
                className={`w-4 h-4 stroke-[#28A745] sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[120%] bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-sm font-YekanBakh"
              >
                <div className="flex items-center justify-start pr-1.5 gap-2 h-[44px] leading-[44px] rounded-t-lg text-[#282828] bg-[#F4F4F4] hover:bg-[#28A745]/10">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#D9D9D9]">
                    <Person className="w-4 h-4 fill-[#696969]" />
                  </div>
                  <p className="font-VazirFd font-medium text-[#10411B] text-sm sm:text-lg">
                    {phone.mobile || phoneNumber}
                  </p>
                </div>
                <Link
                  href="/profile"
                  prefetch={true}
                  className="flex items-center justify-start p-2 gap-1.5 text-[12px] sm:text-sm h-[35px] leading-[35px] sm:h-[54px] sm:leading-[54px] text-[#282828] hover:bg-[#28A745]/10"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Person className="w-5 h-5 fill-white stroke-[#282828] stroke-[1.5px]" />
                  <p>اطلاعات حساب کاربری</p>
                </Link>
                <div className="border-t border-gray-300 w-full sm:w-[90%] md:w-[80%] mx-auto"></div>
                <Link
                  href="/"
                  className="flex items-center justify-start p-2 gap-1.5 text-[12px] sm:text-sm h-[35px] leading-[35px] sm:h-[54px] sm:leading-[54px] text-[#D40000] hover:bg-[#28A745]/10"
                  onClick={handleLogout}
                >
                  <LogOut />
                  <p>خروج از حساب کاربری</p>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <LogIn
              className="sm:hidden cursor-pointer"
              onClick={() => setIsAuthModalOn(true)}
            />
            <div
              className="hidden sm:flex items-center border-2 border-[#28A745] rounded-lg sm:px-1 md:px-1.5 xl:px-2 sm:py-1 md:py-1.5 font-VazirFd font-medium sm:text-[15px] mp:text-lg text-[#28A745] hover:bg-[#28A745]/10 transition-all duration-200 cursor-pointer"
              onClick={() => setIsAuthModalOn(true)}
            >
              <button className="flex items-center gap-1 cursor-pointer">
                <Person className="sm:w-5 sm:h-5 md:w-6 md:h-6 fill-[#28A745]" />
                <span>ورود</span>
              </button>
              <span className="mx-1 w-[1.5px] h-[20px] bg-[#28A745]" />
              <button className="cursor-pointer">ثبت نام</button>
            </div>
          </>
        )}
        <div
          className={`flex items-center justify-center rounded-lg ${
            isLogin
              ? "border-none min-w-[30px] min-h-[40px]"
              : "border-[1.5px] sm:border-[1.6px] border-[#28A745] rounded-[8px] min-w-[40px] min-h-[40px]"
          } cursor-pointer hover:bg-[#28A745]/10 transition-all duration-200`}
        >
          <Basket
            className="w-6 h-6 stroke-[#28A745]"
            onClick={basketHandler}
          />
        </div>
      </div>
      {isMobileNavOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/5 backdrop-blur-[0.5px] z-40 sm:hidden"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <nav
            className={`fixed top-0 right-0 z-50 sm:hidden flex flex-col gap-8 w-1/2 h-screen rounded-xl py-8 pr-3 bg-white transition-transform duration-300 ease-in-out ${
              isMobileNavOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive =
                pathName === href || pathName.startsWith(href + "/");
              const textClass = isActive ? "text-[#28A745]" : "text-[#282828]";
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch={true}
                  onClick={() => setIsMobileNavOpen(false)}
                  className={`flex items-center gap-2 ${textClass} hover:text-[#28A745] transition-colors duration-200`}
                >
                  <Icon className={textClass} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </>
      )}
      {isAuthModalOn && (
        <AuthModal
          modalState={{
            setIsAuthModalOn,
            isAuthModalOn,
            phone,
            setPhone,
            setIsLogin,
          }}
        />
      )}
    </>
  );
}

export default ClientHeader;
