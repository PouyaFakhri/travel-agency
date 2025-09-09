import Image from "next/image";
import MoreInfo from "src/components/modules/MoreInfo";
import SearchForm from "src/components/modules/SearchForm";
import Slider from "src/components/modules/Slider";
import ToursList from "src/components/templates/ToursList";

export const metadata = {
  title: "تورینو | برگزار کننده بهترین تورهای داخلی و خارجی",
  description:
    "تورینو ارائه‌دهنده بهترین تورهای داخلی و خارجی با پشتیبانی ۲۴/۷، بیمه مسافرتی کامل، و تخفیف‌های ویژه. برای سفر رویایی‌تان با تورینو همراه شوید.",
  keywords:
    "تورینو, تور مسافرتی, تور داخلی, تور خارجی, آژانس گردشگری, بلیط سفر, تور اروپا, تور ایران",
};

async function Home({ searchParams }) {
  const query = new URLSearchParams(await searchParams).toString();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour?${query}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="w-[100vw] overflow-hidden flex-1 mt-[48px] sm:mt-[60px] md:mt-[73px]">
      <Image
        src="/Images/Banner.png"
        width={1440}
        height={350}
        alt="بنر صفحه اصلی تورینو"
        priority
        className="w-[100vw] h-auto min-h-[119px]"
      />
      <h2 className="font-YekanBakh font-semibold text-[#28A745] sm:text-xl md:text-[24px] lg:text-[28px] text-center py-5 [word-spacing:2px] sm:[word-spacing:4px] md:[word-spacing:6px] lg:[word-spacing:8px] xl:[word-spacing:12px]">
        تورینو
        <span className="text-[#595959] pr-1.5 md:pr-3">
          برگزار کننده بهترین تور های داخلی و خارجی
        </span>
      </h2>
      <SearchForm />
      <ToursList props={{ data, query }} />
      <MoreInfo />
      <Slider />
    </div>
  );
}

export default Home;
