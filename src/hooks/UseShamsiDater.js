import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import { customPersianLocale } from "src/utils/calenderCustom";

export const UseShamsiDater = (dat) => {
  const date = new DateObject({
    date: dat,
    calendar: persian,
    locale: customPersianLocale,
  });
  const shamsiDate = date.format("D MMMM YYYY");
  return shamsiDate;
};
