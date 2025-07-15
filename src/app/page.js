import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100vw] flex-1">
      <Image
        src="/Images/Banner.png"
        width={1440}
        height={350}
        alt="بنر صفحه اصلی تورینو"
        priority
        className="w-[100vw] h-[119px] sm:h-[200px] md:h-[250px] lg:h-[350px]"
      />
    </div>
  );
}
