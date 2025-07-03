import Image from "next/image";
import Link from "next/link";

// Footer link sections
const footerSections = [
  {
    title: "تورینو",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
      { label: "چرا تورینو", href: "/why-torino" },
      { label: "بیمه مسافرتی", href: "/travel-insurance" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "پشتیبانی آنلاین", href: "/support" },
      { label: "راهنمای خرید", href: "/buy-guide" },
      { label: "راهنمای استرداد", href: "/refund-guide" },
      { label: "پرسش و پاسخ", href: "/faq" },
    ],
  },
];

// List of certification logos
const footerLogos = [
  {
    src: "/Images/Aira.png",
    alt: "لوگوی ایرآ",
  },
  {
    src: "/Images/samandehi.png",
    alt: "لوگوی ساماندهی",
  },
  {
    src: "/Images/Ecunion.png",
    alt: "لوگوی اتحادیه کشوری",
  },
  {
    src: "/Images/Passenger.png",
    alt: "نماد اعتماد مسافران",
  },
  {
    src: "/Images/Airline.png",
    alt: "لوگوی شرکت هواپیمایی",
  },
];

function Footer() {
  return (
    <footer className="w-full flex flex-col gap-2.5 font-YekanBakh">
      {/* Top separator line (dashed style on mobile) */}
      <div className="w-full h-px bg-[repeating-linear-gradient(to_right,black_0,black_10px,transparent_10px,transparent_20px)] xs:bg-none xs:border-t xs:border-[#00000033] xs:h-0 mb-1.5"></div>
      <div className=" w-full flex flex-col xs:flex-row gap-5.5 xs:gap-0 ">
        {/* Link sections */}
        <nav className="w-full flex justify-between xs:justify-start xs:w-2/3 xs:gap-4 sm:w-1/2 md:w-1/3 text-[#282828]">
          {footerSections.map((section) => (
            <ul
              key={section.title}
              className="flex flex-col gap-1 items-start w-1/2 xs:w-fit"
            >
              <li>
                <h2 className="font-semibold text-[22px] xs:text-[20px] sm:text[24px] mb-1">
                  {section.title}
                </h2>
              </li>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="xs:text-[18px] hover:text-[#28A745] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
        <div className=" w-full flex xs:flex-col-reverse xs:gap-2.5 xs:w-1/3 sm:w-1/2 md:w-2/3 justify-between ">
          {/* Certification and trust logos */}
          <div
            className="flex flex-wrap justify-start xs:justify-end gap-4 w-1/2 xs:w-full xs:gap-1 sm:gap-4 "
          >
            {footerLogos.map(({ src, alt }, i) => (
              <Image
                key={i}
                src={src}
                width={68}
                height={74}
                alt={alt}
                className="w-[35px] h-[38px] md:w-[68px] md:h-[74px]"
              />
            ))}
          </div>

          {/* Logo and support phone number */}
          <div className="flex flex-col w-1/2 xs:w-full gap-3 items-end justify-end pb-2.5 pl-1.5">
            <Image
              src="/Images/Logo.png"
              width={166}
              height={44}
              alt="logo"
              className="w-[100px] h-[30px] xs:w-[166px] xs:h-[44]"
            />
            <a
              href="tel:+the:8574-021"
              className="text-xs text-[#000000] xs:text-[12px] sm:text-[15px]"
            >
              <span>تلفن پشتیبانی: </span>
              <span className="font-VazirFd">8574-021</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full flex flex-col items-center">
        <p className=" w-full border-t border-[#00000033] my-1.5 xs:w-screen"></p>
        <small className="font-light text-xs mb-1.5 text-[#000000]">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
