"use client";

import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { UseGetUserProfile } from "src/services/queries";
import { UseEditUserProfile } from "src/services/mutations";
import { toast } from "react-toastify";
import AccountInfo from "src/components/modules/AccountInfo";
import PersonalInfo from "src/components/modules/PersonalInfo";
import PaymentInfo from "src/components/modules/PaymentInfo";

function Page() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = UseGetUserProfile();
  const { mutate, isLoading: isMutating } = UseEditUserProfile();

  const [isOnEditEmail, setIsOnEditEmail] = useState(false);
  const [isOnEditPersonalDetails, setIsOnEditPersonalDetails] = useState(false);
  const [isOnEditPayment, setIsOnEditPayment] = useState(false);

  const [userDetails, setUserDetails] = useState({
    mobile: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
    payment: {
      shaba_code: "",
      debitCard_code: "",
      accountIdentifier: "",
    },
  });

  const reverseGenderMap = {
    male: "مرد",
    female: "زن",
  };

  useEffect(() => {
    if (data) {
      setUserDetails({
        mobile: data.mobile || "",
        email: data.email || "",
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        gender: reverseGenderMap[data.gender] || data.gender || "",
        birthDate: data.birthDate || "",
        nationalCode: data.nationalCode ? String(data.nationalCode) : "",
        payment: {
          shaba_code: data.payment?.shaba_code || "",
          debitCard_code: data.payment?.debitCard_code || "",
          accountIdentifier: data.payment?.accountIdentifier || "",
        },
      });
    }
  }, [data]);

  const submitHandler = (formData) => {
    const genderMap = { مرد: "male", زن: "female" };

    const cleanedDetails = {
      ...formData,
      nationalCode: formData.nationalCode
        ? Number(formData.nationalCode.replace(/\s/g, ""))
        : null,
      gender: genderMap[formData.gender] || "male",
      payment: {
        ...formData.payment,
        debitCard_code:
          formData.payment.debitCard_code?.replace(/\s/g, "") || "",
        shaba_code: formData.payment.shaba_code?.replace(/\s/g, "") || "",
        accountIdentifier:
          formData.payment.accountIdentifier?.replace(/\s/g, "") || "",
      },
    };

    mutate(cleanedDetails, {
      onSuccess: (response) => {
        setUserDetails({
          mobile: response.user.mobile || "",
          email: response.user.email || "",
          firstName: response.user.firstName || "",
          lastName: response.user.lastName || "",
          gender:
            reverseGenderMap[response.user.gender] ||
            response.user.gender ||
            "",
          birthDate: response.user.birthDate || "",
          nationalCode: response.user.nationalCode
            ? String(response.user.nationalCode)
            : "",
          payment: {
            shaba_code: response.user.payment?.shaba_code || "",
            debitCard_code: response.user.payment?.debitCard_code || "",
            accountIdentifier: response.user.payment?.accountIdentifier || "",
          },
        });

        queryClient.invalidateQueries({ queryKey: ["userProfile"] });
        toast.success("تغییرات با موفقیت اعمال شد");

        setIsOnEditPersonalDetails(false);
        setIsOnEditEmail(false);
        setIsOnEditPayment(false);
      },
      onError: (error) => {
        const message =
          error.response?.data?.message ||
          "خطایی رخ داد. لطفاً دوباره تلاش کنید";
        toast.error(message);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 p-4 font-YekanBakh">
        <div className="h-20 w-full rounded-md bg-gray-200 animate-pulse" />
        <div className="h-40 w-full rounded-md bg-gray-200 animate-pulse" />
        <div className="h-32 w-full rounded-md bg-gray-200 animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500 font-YekanBakh">
        خطا در دریافت اطلاعات
      </div>
    );
  }

  return (
    <div className="w-full mt-[10px] sm:mt-0 flex flex-col gap-4 font-YekanBakh p-4 pt-0">
      <AccountInfo
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isOnEditEmail={isOnEditEmail}
        setIsOnEditEmail={setIsOnEditEmail}
        submitHandler={submitHandler}
      />
      <PersonalInfo
        userDetails={userDetails}
        isOnEditPersonalDetails={isOnEditPersonalDetails}
        setIsOnEditPersonalDetails={setIsOnEditPersonalDetails}
        setUserDetails={setUserDetails}
        submitHandler={submitHandler}
      />
      <PaymentInfo
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isOnEditPayment={isOnEditPayment}
        setIsOnEditPayment={setIsOnEditPayment}
        submitHandler={submitHandler}
      />
      {isMutating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
          <div className="text-white font-YekanBakh animate-pulse">
            در حال ذخیره...
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
