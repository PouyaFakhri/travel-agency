import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import ClientHeader from "../templates/ClientHeader";
import ClientNavLink from "../templates/ClientNavLink";
import { Suspense } from "react";
import { jwtDecode } from "jwt-decode";

const navLinks = [
  { href: "/", label: "صفحه ی اصلی" },
  { href: "/services", label: "خدمات گردشگری" },
  { href: "/about", label: "درباره ی ما" },
  { href: "/contact", label: "تماس با ما" },
];

const NavFallback = () => (
  <div className="flex items-center sm:gap-2 md:gap-5 lg:gap-10 xl:gap-16 sm:text-[14px]">
    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
  </div>
);

const ButtonFallback = () => (
  <div className="w-24 h-8 bg-gray-200 rounded-lg animate-pulse" />
);

export default async function Header() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  let phoneNumber = "";
  let isAuthenticated = false;
  if (accessToken) {
    try {
      phoneNumber = jwtDecode(accessToken)?.mobile;
      isAuthenticated = true;
    } catch (err) {
      console.error("توکن نامعتبر است");
    }
  }
  return (
    <header className="w-full fixed max-w-screen flex items-center justify-between font-YekanBakh py-3.5 px-[7.5%] [box-shadow:0px_1px_4px_0px_#00000040] border-b-[#10411B] bg-white z-2000 ;">
      <div className="hidden sm:flex items-center sm:gap-5 lg:gap-10 xl:gap-20">
        <Link href="/">
          <Image
            src="/Images/Logo.png"
            width={146}
            height={44}
            alt="Torino Logo"
            priority
            className="sm:w-[90px] md:w-[146px]"
          />
        </Link>
        <Suspense fallback={<NavFallback />}>
          <ClientNavLink navLinks={navLinks} />
        </Suspense>
      </div>
      <Suspense fallback={<ButtonFallback />}>
        <ClientHeader
          isAuthenticated={isAuthenticated}
          phoneNumber={phoneNumber}
        />
      </Suspense>
    </header>
  );
}
