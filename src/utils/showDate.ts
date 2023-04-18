import { DMY } from "../types/DMY";

export const showDate = (dateString: string, daysMonthYears: DMY): string => {
  const dateToShow = new Date(dateString);
  dateToShow.setUTCHours(3);
  if (!dateString || !dateToShow.getTime()) return "";

  const { days, months, years } = daysMonthYears;

  if (days) dateToShow.setDate(dateToShow.getDate() + days);
  if (months) dateToShow.setMonth(dateToShow.getMonth() + months);
  if (years) dateToShow.setFullYear(dateToShow.getFullYear() + years);

  return dateToShow.toLocaleDateString();
};
