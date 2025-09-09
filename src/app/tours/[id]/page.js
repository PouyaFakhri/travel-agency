import TourCard from "src/components/templates/TourCard";
import { Suspense } from "react";
import TourCardFallback from "src/constants/TourCardFallback";

export const metadata = {
  title: "جزئیات تور | تورینو",
  description:
    "مشاهده اطلاعات کامل تور، قیمت‌ها، خدمات و امکان رزرو تور از وبسایت تورینو.",
};

async function Tours({ params }) {
  const param = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${param.id}`,
    { cache: "no-store" }
  );
  const tourData = await res.json();
  console.log(tourData);
  return (
    <Suspense fallback={<TourCardFallback />}>
      <TourCard tourData={tourData} />
    </Suspense>
  );
}

export default Tours;
