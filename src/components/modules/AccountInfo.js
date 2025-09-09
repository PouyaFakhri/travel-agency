import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema } from "src/utils/schema";
import Edit from "../icons/Edit";

function AccountInfo({
  userDetails,
  setUserDetails,
  isOnEditEmail,
  setIsOnEditEmail,
  submitHandler,
}) {
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    reset
  } = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: { email: userDetails.email || "" },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const updatedData = { ...userDetails, email: data.email };
    setUserDetails(updatedData);
    submitHandler(updatedData);
    setIsOnEditEmail(false);
  };

  const handleCancel = () => {
    reset({email: userDetails.email || "" });
    setIsOnEditEmail(false);
  };

  return (
    <div className=" relative flex flex-col md:flex-row md:justify-start md:items-start gap-4 border border-[#00000033] text-[#000000] rounded-[10px] p-4 md:relative md:pb-10 md:pt-20 md:pr-0 ">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-YekanBakh md:absolute md:top-[20px] md:right-[20px]">اطلاعات حساب کاربری</h3>
        {userDetails.email && !isOnEditEmail && (
          <button
            type="button"
            className="flex gap-1 items-center md:absolute top-[20px] left-[40px] text-[#009ECA] hover:text-[#007A9E] text-[13px] transition"
            onClick={() => setIsOnEditEmail(true)}
          >
            <Edit className="w-3 h-3" /> ویرایش
          </button>
        )}
      </div>
      <div className="flex justify-between items-center md:justify-start md:ml-11 md:mt-2 gap-3 text-[14px]">
        <p className="min-w-[70px] font-light text-[#7D7D7D]">شماره موبایل</p>
        <p className="text-[#282828] text-[14px] font-VazirFd">
          {userDetails.mobile}
        </p>
      </div>
      <div className="flex justify-between items-center text-[14px]">
        {isOnEditEmail ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 font-YekanBakh md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] lg:min-w-[260px]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="sr-only">
                ایمیل
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="آدرس ایمیل"
                className={`w-full px-3 py-2 border max-h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                  errors.email ? "border-red-500" : "border-[#00000080]"
                }`}
              />
              <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex gap-2 md:justify-end md:absolute md:bottom-[20px] md:left-[20px] md:max-w-[260px] md:min-w-[200px]">
              <button
                type="submit"
                disabled={!isValid}
                className="bg-[#28A745] w-1/3 text-white rounded-[5px] py-1 px-5 hover:bg-[#218838] disabled:opacity-50 transition text-[14px] font-YekanBakh"
              >
                تایید
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-[#6B7280] w-1/3 text-white rounded-[5px] py-1 px-5 hover:bg-[#4B5563] transition text-[14px] font-YekanBakh"
              >
                لغو
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full flex justify-between md:justify-start md:mt-2 md:gap-10">
            <p className="font-light text-[#7D7D7D]">ایمیل</p>
            {userDetails.email ? (
              <p className="text-[#282828] font-semibold text-[14px] font-YekanBakh ">
                {userDetails.email}
              </p>
            ) : (
              <div className="flex items-center justify-between gap-10">
                <span className="h-[1.5px] w-[13px] bg-black"></span>
                <button
                  type="button"
                  className="flex gap-1 items-center text-[#009ECA] hover:text-[#007A9E] transition text-[13px]"
                  onClick={() => setIsOnEditEmail(true)}
                >
                  <Edit className="w-3 h-3" /> افزودن
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountInfo;
