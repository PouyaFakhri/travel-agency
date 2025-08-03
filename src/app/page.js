import Image from "next/image";
import MoreInfo from "src/components/modules/MoreInfo";
import SearchForm from "src/components/modules/SearchForm";
import Slider from "src/components/modules/Slider";
import ToursList from "src/components/templates/ToursList";


async function Home({ searchParams }) {
  const searchParam = await searchParams;
  const query = new URLSearchParams(searchParam).toString();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour?${query}`, {
    cache: "no-store",
  });
  const data = await res.json()
  console.log(data)

  return (
    <div className="w-[100vw] max-w-[1440px] overflow-hidden flex-1">
      <Image
        src="/Images/Banner.png"
        width={1440}
        height={350}
        alt="بنر صفحه اصلی تورینو"
        priority
        className="w-[100vw] h-auto"
      />
      <h2 className="font-YekanBakh font-semibold text-[#28A745] sm:text-xl md:text-[24px] lg:text-[28px] text-center py-5 [word-spacing:2px] sm:[word-spacing:4px] md:[word-spacing:6px] lg:[word-spacing:8px] xl:[word-spacing:12px]">
        تورینو
        <span className="text-[#595959] pr-1.5 md:pr-3">
          برگزار کننده بهترین تور های داخلی و خارجی
        </span>
      </h2>
      <SearchForm />
      <ToursList props={{data , query}} />
      <MoreInfo />
      <Slider />
    </div>
  );
}

export default Home;
