import * as Yup from "yup";

export const phoneSchema = () => {
  const schema = Yup.object().shape({
    mobile: Yup.string()
      .matches(phoneRegex, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد")
      .required("شماره موبایل الزامی است"),
  });
  return schema;
};

export const BasketSchema = () => {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("نام و نام خانوادگی الزامی است")
      .min(5, "نام و نام خانوادگی باید حداقل 5 کاراکتر باشد"),

    gender: Yup.string().required("انتخاب جنسیت الزامی است"),
    nationalId: Yup.string()
      .required("کد ملی الزامی است")
      .test("is-valid-national-id", "کد ملی معتبر نیست", (value) =>
        isValidIranianNationalId(value || "")
      ),
    birthDate: Yup.string().required("تاریخ تولد الزامی است"),
  });

  return schema;
};

export const emailSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("ایمیل الزامی است")
    .email("ایمیل وارد شده معتبر نیست")
    .min(6, "ایمیل باید حداقل ۶ کاراکتر باشد")
    .max(254, "ایمیل نمی‌تواند بیشتر از ۲۵۴ کاراکتر باشد")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "فرمت ایمیل معتبر نیست"),
});

export const supportSchema = Yup.object().shape({
  message: Yup.string()
    .required("لطفاً پیام خود را وارد کنید")
    .min(3, "پیام باید حداقل ۳ کاراکتر باشد")
    .max(500, "پیام نمی‌تواند بیشتر از ۵۰۰ کاراکتر باشد"),
});

export const profilePersonalSchema = Yup.object().shape({
  firstName: Yup.string()
    .nullable()
    .notRequired()
    .test("is-valid-firstName", "نام باید حداقل 2 کاراکتر باشد", (value) => {
      if (!value) return true;
      return value.length >= 2;
    }),

  lastName: Yup.string()
    .nullable()
    .notRequired()
    .test(
      "is-valid-lastName",
      "نام خانوادگی باید حداقل 2 کاراکتر باشد",
      (value) => {
        if (!value) return true;
        return value.length >= 2;
      }
    ),

  nationalCode: Yup.string()
    .nullable()
    .notRequired()
    .test("is-valid-nationalCode", "کد ملی باید 10 رقم باشد", (value) => {
      if (!value) return true;
      return /^\d{10}$/.test(value);
    }),

  gender: Yup.string()
    .nullable()
    .notRequired()
    .oneOf(["مرد", "زن", ""], "جنسیت معتبر نیست"),

  birthDate: Yup.string().nullable().notRequired(),
});

export const contactSchema = Yup.object().shape({
  name: Yup.string().required("نام و نام خانوادگی الزامی است"),
  email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "شماره تماس نامعتبر است")
    .required("شماره تماس الزامی است"),
  message: Yup.string().required("پیام الزامی است"),
});

export const paymentSchema = Yup.object().shape({
  debitCard_code: Yup.string()
    .transform((value) => (value ? value.replace(/\s/g, "") : ""))
    .nullable()
    .notRequired()
    .test("is-valid-card", "شماره کارت باید دقیقاً 16 رقم باشد", (value) => {
      if (!value) return true;
      return /^\d{16}$/.test(value);
    }),

  shaba_code: Yup.string()
    .transform((value) => (value ? value.replace(/\s/g, "") : ""))
    .nullable()
    .notRequired()
    .test("is-valid-shaba", "شماره شبا باید دقیقاً 24 رقم باشد", (value) => {
      if (!value) return true;
      return /^\d{24}$/.test(value);
    }),

  accountIdentifier: Yup.string()
    .nullable()
    .notRequired()
    .test(
      "is-valid-account",
      "شماره حساب باید فقط شامل ارقام باشد و حداقل 5 رقم",
      (value) => {
        if (!value) return true;
        return /^\d+$/.test(value) && value.length >= 5;
      }
    ),
});

const isValidIranianNationalId = (input) => {
  if (!/^\d{10}$/.test(input)) return false;
  const invalidList = [
    "0000000000",
    "1111111111",
    "2222222222",
    "3333333333",
    "4444444444",
    "5555555555",
    "6666666666",
    "7777777777",
    "8888888888",
    "9999999999",
  ];
  if (invalidList.includes(input)) return false;

  const check = +input[9];
  const sum =
    input
      .split("")
      .slice(0, 9)
      .reduce((acc, digit, i) => acc + +digit * (10 - i), 0) % 11;

  return (sum < 2 && check === sum) || (sum >= 2 && check === 11 - sum);
};

const phoneRegex = /^(?:[0۰])(?:[9۹])[0-9۰-۹]{9}$/;
