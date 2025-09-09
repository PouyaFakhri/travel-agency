"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Person from "src/components/icons/Person";
import SunFog from "src/components/icons/SunFog";
import ConvertCard from "src/components/icons/ConvertCard";

const links = [
  { href: "/profile", label: "پروفایل من", icon: Person },
  { href: "/profile/my-tours", label: "تورهای من", icon: SunFog },
  { href: "/profile/transactions", label: "تراکنش‌ها", icon: ConvertCard },
];

function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between mt-[90px] mb-8 md:mb-5 lg:mb-10 min-h-[60vh] font-YekanBakh">
      <ul className="w-full sm:w-[25%] md:w-[23%] sm:max-w-[284px] flex sm:flex-col sm:justify-start justify-between mb-2 border-b border-[#00000040] sm:border-none sm:gap-1">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                prefetch={true}
                className={`flex items-center gap-2 h-full pb-3 px-2 text-xs sm:text-sm transition-colors duration-200
                  ${isActive ? "text-[#28A745] border-b-1 border-b-[#28A745]" : "text-[#282828] hover:text-[#28A745] border-none"}
                  font-YekanBakh
                  sm:border sm:rounded-lg sm:px-3 sm:py-2
                  ${isActive ? "sm:border-[#28A745] sm:bg-[#E9F7EF]" : "sm:border-gray-300 sm:hover:border-[#28A745]"}
                `}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "fill-[#28A745] stroke-[#28A745]" : "fill-[#282828]"
                  }`}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <main className="w-full sm:w-[70%] md:w-[82%]">{children}</main>
    </div>
  );
}

export default ProfileLayout;
