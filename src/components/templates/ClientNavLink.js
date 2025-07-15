"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ClientNavLink({ navLinks }) {
  const pathName = usePathname();
  return (
    <nav className="flex items-center sm:gap-3 md:gap-[14px] lg:gap-10 xl:gap-16 sm:text-[12px] md:text-sm">
      {navLinks.map(({ href, label }) => {
        const isActive = pathName === href || pathName.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`relative pb-1 font-medium transition-colors duration-200 ${
              isActive
                ? "text-[#28A745] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#28A745]"
                : "text-[#282828] hover:text-[#28A745]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default ClientNavLink;
