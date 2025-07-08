"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthModal from "../templates/AuthModal";

import Burger from "../icons/Burger";
import LogIn from "../icons/LogIn";
import Person from "../icons/Person";
import Home from "../icons/Home";
import Airplane from "../icons/Airplane";
import Volume from "../icons/Volume";
import Call from "../icons/Call";

const navLinks = [
  { href: "/", label: "صفحه ی اصلی", icon: Home },
  { href: "/services", label: "خدمات گردشگری", icon: Airplane },
  { href: "/about", label: "درباره ی ما", icon: Volume },
  { href: "/contact", label: "تماس با ما", icon: Call },
];

function Header() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOn , setIsAuthModalOn] = useState(false)
   const [phone , setPhone] = useState("")

  return (
    <header className="w-full flex items-center justify-between font-YekanBakh py-3.5 relative">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden cursor-pointer"
      >
        <Burger />
      </button>

      <LogIn className="sm:hidden cursor-pointer" onClick={() => setIsAuthModalOn(true)}  />

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/5 backdrop-blur-[0.5px] z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav
            className={`fixed top-0 right-0 z-50 sm:hidden flex flex-col gap-8 w-1/2 h-screen rounded-xl py-8 pr-3 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathName === href || pathName.startsWith(href + "/");
              const textClass = isActive ? "text-[#28A745]" : "text-[#282828]";
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
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

      {/* Desktop logo & navigation */}
      <div className="hidden sm:flex items-center sm:gap-5 lg:gap-10 xl:gap-20">
        <Link href="/">
          <Image
            src="/Images/Logo.png"
            width={146}
            height={44}
            alt="Torino Logo"
            priority
            className="sm:w-[100px] md:w-[146px]"
          />
        </Link>

        <nav className="flex items-center sm:gap-2 md:gap-5 lg:gap-10 xl:gap-16 sm:text-[14px]">
          {navLinks.map(({ href, label }) => {
            const isActive = pathName === href || pathName.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-1 font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#28A745] after:Absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#28A745]"
                    : "text-[#282828] hover:text-[#28A745]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Desktop login/register */}
      <div className="hidden sm:flex items-center border-2 border-[#28A745] rounded-lg sm:px-1 md:px-1.5 xl:px-2 sm:py-1 md:py-1.5 font-VazirFd font-medium sm:text-[15px] md:text-lg text-[#28A745] hover:bg-[#28A745]/10 transition-all duration-200 cursor-pointer" onClick={() => setIsAuthModalOn(true)}  >
        <button className="flex items-center gap-1 cursor-pointer ">
          <Person className="sm:w-5  sm:h-5 md:w-6 md:h-6" />
          <span>ورود</span>
        </button>
        <span className="mx-1 w-[1.5px] h-[20px] bg-[#28A745]" />
        <button className="cursor-pointer">ثبت نام</button>
      </div>
      {isAuthModalOn && <AuthModal modalState={{setIsAuthModalOn , isAuthModalOn , phone , setPhone}} />}
    </header>
  );
}

export default Header;
