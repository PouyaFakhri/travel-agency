import * as Yup from "yup";

const phoneRegex = /^09[0-9]{9}$/;

export const phoneSchema = () => {
  const schema = Yup.object().shape({
    mobile: Yup.string()
      .matches(phoneRegex, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد")
      .required("شماره موبایل الزامی است"),
  });
  return schema;
};
