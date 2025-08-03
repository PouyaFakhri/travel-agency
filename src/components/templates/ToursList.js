import ClientToursList from "./ClientToursList";

function ToursList({ props }) {
  const { data, query } = props;
  return (
    <div className="w-[85%] mx-auto flex flex-col items-start gap-2 font-YekanBakh mb-4">
      <h2
        className={`sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium ${
          !!query ? "invisible" : "visible"
        } text-xl [word-spacing:3px]`}
      >
        همه تور ها
      </h2>
      {!data.length ? (
        <div className="w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-10 shadow-xl animate-fadeIn font-YekanBakh">
          <div className="text-5xl mb-4">😕</div>
          <h3 className="text-2xl font-extrabold text-gray-700 mb-3">
            نتیجه‌ای یافت نشد
          </h3>
          <p className="text-base text-gray-500 leading-relaxed max-w-md">
            متاسفیم! هیچ توری با مشخصات انتخابی شما پیدا نشد. لطفاً فیلترها را
            بررسی و دوباره تلاش کنید.
          </p>
        </div>
      ) : (
        <ClientToursList data={data} />
      )}
    </div>
  );
}

export default ToursList;
