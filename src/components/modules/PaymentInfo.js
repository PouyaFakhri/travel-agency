"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentSchema } from "src/utils/schema";
import { IMaskInput } from "react-imask";
import Edit from "../icons/Edit";

function PaymentInfo({
  userDetails,
  setUserDetails,
  isOnEditPayment,
  setIsOnEditPayment,
  submitHandler,
}) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset
  } = useForm({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      debitCard_code: userDetails.payment.debitCard_code || "",
      shaba_code: userDetails.payment.shaba_code?.replace(/^IR/, "") || "",
      accountIdentifier: userDetails.payment.accountIdentifier || "",
    },
    mode: "onChange",
  });

  const handleCancel = () => {
    reset({
      debitCard_code: userDetails.payment.debitCard_code || "",
      shaba_code: userDetails.payment.shaba_code?.replace(/^IR/, "") || "",
      accountIdentifier: userDetails.payment.accountIdentifier || "",
    });
    setIsOnEditPayment(false);
  };

  const onSubmit = (data) => {
    const cleanedData = {
      ...userDetails,
      payment: {
        debitCard_code: data.debitCard_code.replace(/\s/g, ""),
        shaba_code: `IR${data.shaba_code.replace(/\s/g, "")}`,
        accountIdentifier: data.accountIdentifier,
      },
    };
    setUserDetails(cleanedData);
    submitHandler(cleanedData);
  };

  return (
    <div className="flex flex-col gap-4 border border-[#00000033] text-[#000000] rounded-[10px] p-4 md:relative md:pb-10 md:pl-10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-YekanBakh">اطلاعات حساب بانکی</h3>
        <button
          className="flex gap-1 items-center text-[#009ECA] hover:text-[#007A9E] text-[13px] transition"
          onClick={() => setIsOnEditPayment(true)}
        >
          <Edit className="w-3 h-3" /> ویرایش
        </button>
      </div>

      {isOnEditPayment ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 font-YekanBakh md:flex-row md:flex-wrap md:justify-between md:gap-5 md:pb-10"
        >
          <div className="flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] sm:flex-1">
            <Controller
              name="debitCard_code"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  mask="0000 0000 0000 0000"
                  unmask="typed"
                  placeholder="شماره کارت"
                  className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                    errors.debitCard_code
                      ? "border-red-500"
                      : "border-[#00000080]"
                  }`}
                />
              )}
            />
            <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
              {errors.debitCard_code?.message || ""}
            </p>
          </div>

          <div className="flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] sm:flex-1">
            <Controller
              name="shaba_code"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  mask="'IR' 00 00 0000 0000 0000 0000 0000"
                  unmask="typed"
                  placeholder="شماره شبا"
                  className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                    errors.shaba_code ? "border-red-500" : "border-[#00000080]"
                  }`}
                  value={field.value}
                  onAccept={(val) => field.onChange(val)}
                />
              )}
            />
            <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
              {errors.shaba_code?.message || ""}
            </p>
          </div>

          <div className="flex flex-col gap-2 md:max-w-[205px] lg:max-w-[260px] md:min-w-[200px] sm:flex-1">
            <input
              type="text"
              {...register("accountIdentifier")}
              placeholder="شماره حساب"
              className={`w-full px-3 py-2 border h-[47px] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#28A745] text-[14px] text-[#282828] ${
                errors.accountIdentifier
                  ? "border-red-500"
                  : "border-[#00000080]"
              }`}
            />
            <p className="text-red-500 text-[10px] h-[23px] pt-1 font-YekanBakh">
              {errors.accountIdentifier?.message || ""}
            </p>
          </div>

          <div className="flex gap-2 mt-2  md:absolute md:bottom-[20px] md:left-[20px] md:max-w-[260px] md:min-w-[200px] md:flex-1">
            <button
              type="submit"
              className="w-full bg-[#28A745] hover:bg-[#218838] text-white py-2 rounded-[5px] transition text-[14px] font-YekanBakh"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-[#6B7280] hover:bg-[#4B5563] text-white py-2 rounded-[5px] transition text-[14px] font-YekanBakh"
            >
              لغو
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4 md:gap-7 lg:grid lg:grid-cols-2">
          <div className="flex justify-between md:justify-start md:gap-5 items-center text-[14px]">
            <p>شماره کارت</p>
            {userDetails.payment.debitCard_code ? (
              <p className="text-[#282828] text-[14px] font-VazirFd">
                {userDetails.payment.debitCard_code}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>

          <div className="flex justify-between md:justify-start md:gap-5 items-center text-[14px]">
            <p>شماره شبا</p>
            {userDetails.payment.shaba_code ? (
              <p
                className="text-[#282828] text-[14px] font-VazirFd truncate max-w-[70%]"
                dir="ltr"
              >
                {userDetails.payment.shaba_code}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>

          <div className="flex justify-between md:justify-start md:gap-5  items-center text-[14px]">
            <p>شماره حساب</p>
            {userDetails.payment.accountIdentifier ? (
              <p className="text-[#282828] text-[14px] font-VazirFd ">
                {userDetails.payment.accountIdentifier}
              </p>
            ) : (
              <span className="h-[1.5px] w-[13px] bg-black inline-block ml-[20%]"></span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentInfo;
