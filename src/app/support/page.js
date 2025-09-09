import SupportForm from "src/components/modules/SupportForm";

export const metadata = {
  title: "پشتیبانی | تورینو",
  description: "صفحه پشتیبانی و راهنمایی کاربران تورینو"
};

export default function SupportPage() {
  return (
    <div className="mt-[80px] w-full flex justify-center sm:p-4 font-YekanBakh min-h-fit mb-[30px]">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-2 xs:p-4 ">
        <SupportForm />
      </div>
    </div>
  );
}
