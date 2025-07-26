import Image from "next/image";
import SearchForm from "../modules/SearchForm";

function HomePage() {
  return <div className="w-[100vw] flex-1">
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
      
    </div>;
}

export default HomePage;
